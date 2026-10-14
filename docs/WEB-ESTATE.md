# Remnant Security web estate

Authoritative map of every Remnant Security web property, how each one deploys,
and the specific ways agents have broken them. Machine-readable twin:
[`estate.json`](./estate.json).

Verified **2026-10-14** against the GitHub Pages API, the Namecheap zone, and
live HTTP from a second machine. Re-verify with the commands in
`estate.json → verification` before trusting any row.

---

## 0. Stop conditions

Four operations can cause damage that a `git revert` will not undo. Do not
perform any of them without reading the named section first.

| Operation | Why it is dangerous | Read |
|---|---|---|
| Writing DNS | `dns_records_save` **replaces the entire zone**. The zone carries the Google Workspace MX and DKIM records. A careless write takes down email. | [§4](#4-dns) |
| Deleting a Pages repo or its `CNAME` file | The custom domain stops resolving and GitHub must re-issue the certificate. Clearing a Pages `cname` deletes that file — safe only as half of the §5 round trip, never on its own. | [§5](#5-tls-certificates) |
| Rotating the Kit/ConvertKit key | Breaks lead capture if the deployed bundle still uses it. | `SECURITY.md` |
| Force-pushing `main` on any site repo | `main` is unprotected everywhere and every push deploys. There is no PR gate to catch you. | [§3](#3-deploying) |

Everything else here is recoverable.

---

## 1. The map

One apex, twelve subdomains. Eleven live, two broken (§8).

| Host | Repo | Deploys from | Notes |
|---|---|---|---|
| `remnantsecurity.com` + `www` | `Cybersecurity-Training-Links` | **GitHub Actions** on `main` | This repo. Vite build. |
| `academy.` | `remnant-academy` *(private)* | **Vercel** | Serves the APIs the apex calls. |
| `blog.` | `product-diary` | branch **`gh-pages`** | The only one not on `main`. |
| `apps.` | `apps-site` | branch `main` | Portfolio index. Editorial rules in §7. |
| `lightfence.` | `lightfence-site` | branch `main` | App source is `~/projects/qix-swift`. |
| `prismshift.` | `prismshift-site` | branch `main` | App source is `~/projects/prismshift`. See §8. |
| `snapdog.` | `snapdog-site` | branch `main` | Shipped. |
| `lectern.` | `lectern-site` | branch `main` | Shipped. |
| `cybersim.` | `cybersim-site` | branch `main` | Shipped. |
| `plumberpuzzle.` | `plumberpuzzle-site` | branch `main` | Shipped. |
| `books.` | `books-site` | branch `main` | |
| `alttab.` | `alttab-site` | branch `main` | Cert repaired 2026-10-14 (§8) |
| `tilepilot.` | `tilepilot-site` | branch `main` | Wired up 2026-10-14 (§8) |

### Naming traps

- **`qix-swift` is Lightfence.** The folder, the Xcode project (`QixForge`) and
  the bundle id (`com.iantrimble.qixforge`) all use the old name. Only the
  shipping title is Lightfence.
- **This repo is `Cybersecurity-Training-Links`,** not `remnantsecurity.com`.
  The local folder is `~/projects/remnantsecurity.com`. They do not match, and
  renaming the GitHub repo is blocked because another repo already holds that
  slug. `GEMINI.md` and `QWEN.md` were auto-generated under the old name and
  were wrong for months; do not reintroduce their claims.
- A second folder, `~/projects/Cybersecurity-Training-Links`, is a stale
  fallback copy. It is not the working tree.

---

## 2. Adding a new app subdomain

Every app subdomain has the same shape. Follow it exactly.

1. Create a **public** repo named `<app>-site`. Pages custom domains require
   public on this plan.
2. Put a `CNAME` file at the repo root containing the bare hostname — no
   scheme, no trailing slash, no blank second line.
3. Enable Pages on `main`, path `/`:
   ```sh
   gh api -X POST repos/itrimble/<app>-site/pages \
     -f 'source[branch]=main' -f 'source[path]=/'
   ```
   Pages reads the `CNAME` file and sets the custom domain itself.
4. Add the DNS record: `CNAME <app> -> itrimble.github.io.` — see §4, and
   never send a partial record set.
5. Wait for the Let's Encrypt certificate GitHub provisions automatically,
   then enforce HTTPS. It cannot be enabled before the cert exists, and if it
   never appears see §5:
   ```sh
   gh api -X PUT repos/itrimble/<app>-site/pages -F https_enforced=true
   ```
6. List it on `apps.remnantsecurity.com` under the right section (§7) and in
   `src/data/sites.ts → appSites` in this repo.

Skipping step 5 is how `alttab` ended up plaintext-only.

---

## 3. Deploying

`main` is unprotected on every repo and there are no PR checks anywhere. The
only gate is the one you run. **Pushing is deploying.**

### Static sites (every `-site` repo)

Push to `main`. Pages rebuilds in roughly 30–90 s. Then confirm the live bytes:

```sh
curl -s https://<host>.remnantsecurity.com/ | wc -c   # compare to local
```

### This repo (the apex)

A Vite build runs in CI, so a local build only reproduces the deployed bundle
if you pass the same env var CI passes:

```sh
VITE_ACADEMY_URL=https://academy.remnantsecurity.com npm run build
```

Without it the minifier folds the constant and you get a **different hash** for
identical source. Always build with it before comparing anything to production.

The full discipline, which has caught real regressions:

1. **Baseline.** Build with the CI env and confirm your `dist/assets/index-*.js`
   filename equals the one the live page references. If it does not, your tree
   is not what is deployed — stop and reconcile.
2. **Record counts** for every feature that must survive:
   `grep -o -i <term> dist/assets/index-*.js | wc -l`.
3. Make the change. `npm run lint && npm run build` must both exit 0.
4. **Re-count.** Only the terms you intended should move.
5. Push, then `gh run watch <id> --exit-status --interval 10`.
6. Confirm the live bundle filename matches the build you audited, and that the
   live bytes are identical.

> **Do not diff minified bundles.** Adding a single binding makes esbuild
> rename identifiers through the rest of the file — a 9-line source change
> produced ~190 KB of textual difference. Byte-region diffs and string-literal
> diffs are worthless here. The count-based audit above is immune to renaming
> and is the correct tool.

Release gate for the funnel, after deploying:
`CAREER_PLAN_QA_EMAIL=<inbox> npm run release:verify`.

---

## 4. DNS

Namecheap BasicDNS. Nameservers `dns1`/`dns2.registrar-servers.com`. 20 records.

**The zone carries Ian's email.** `MX @ -> SMTP.GOOGLE.COM`, plus the DKIM and
site-verification TXT records.

The Namecheap MCP tool `dns_records_save(domainName, records, force)` takes the
**whole record array and replaces the zone**, mirroring Namecheap's `setHosts`
API. Calling it with only the record you want to add deletes the other 19 and
takes down email.

Procedure:

1. `dns_records_get` and save the result to `~/backups/remnant-dns/<stamp>.json`.
2. Build the target set as *every existing record, verbatim* + your new one.
3. Save, passing the complete array.
4. Verify against the authoritative server, not a cache:
   ```sh
   dig +short @dns1.registrar-servers.com CNAME <host>.remnantsecurity.com
   ```
5. Confirm MX and DKIM still resolve.

Codex refuses this tool in `codex exec` — it is marked approval-required and
exec runs with `approval: never`. The only override also disables sandboxing
entirely, so do not use it. Run codex interactively and approve, or use the
Namecheap web UI, whose per-record editing has no replace-all risk.

---

## 5. TLS certificates

**Every certificate in the estate is Let's Encrypt, and GitHub Pages requests
and renews them automatically.** There is no certbot, no ACME client and no
cron job on any machine. Certificates last 90 days and GitHub rotates them on
its own. Nothing here needs a human on a schedule.

Provisioning is triggered by **setting the Pages custom domain while the DNS
record already resolves**. That ordering is the whole game.

### The failure mode

If the custom domain was set *before* DNS existed, GitHub may never retry, and
it does not tell you. The symptom is specific and easy to test for: the Pages
API response has **no `https_certificate` object at all** — not a certificate
in a failed state, but the field missing entirely.

```sh
gh api repos/itrimble/<repo>/pages --jq '{cname,https_enforced,cert:(.https_certificate.state // "NONE")}'
```

A healthy property returns `"cert": "approved"`. A broken one returns
`"cert": "NONE"`. That one command distinguishes them.

### The repair

Re-saving the same domain does nothing — it has to be cleared and re-set, which
is what forces GitHub to re-run the DNS check and request a certificate:

```sh
gh api -X PUT repos/itrimble/<repo>/pages -f cname=''
gh api -X PUT repos/itrimble/<repo>/pages -f cname=<host>.remnantsecurity.com
# wait ~1 min for https_certificate.state to reach "approved", then:
gh api -X PUT repos/itrimble/<repo>/pages -F https_enforced=true
```

> **Clearing the cname deletes the `CNAME` file from the repo.** Re-setting it
> recreates the file, so the round trip is safe — but do not stop halfway, and
> confirm the file is back:
> `gh api repos/itrimble/<repo>/pages/../contents/CNAME`.

`https_enforced` cannot be set before the certificate exists. Skipping that
last step is what left `alttab` serving plaintext for months.

**What it looks like while it runs.** The state goes
`NONE` → `authorization_pending` → `approved`, usually inside a minute. Do not
give up at `authorization_pending`.

**A failed build here is usually noise.** The clear and the re-set can trigger
two Pages builds seconds apart, and the first often fails — leaving
`pages.status == "errored"` for a few minutes while the host already serves
perfectly. Check the build list before believing it:

```sh
gh api repos/itrimble/<repo>/pages/builds --jq '.[0:2][] | "\(.status) \(.created_at) \(.error.message // "")"'
```

If the newest build is `built`, the error was transient. Judge by what the
hostname actually serves, not by `pages.status` alone.

### Auditing the whole estate

```sh
for h in $(python3 -c "import json;print(' '.join(p['domain'] for p in json.load(open('docs/estate.json'))['properties']))"); do
  printf '%-34s %s\n' "$h" "$(echo | openssl s_client -servername $h -connect $h:443 2>/dev/null \
    | openssl x509 -noout -enddate 2>/dev/null | sed 's/notAfter=//' || echo 'NO CERT')"
done
```

Run it from the mini or the MBP, not Neo (§9).

---

## 6. This repo

React 19 + TypeScript + Vite + Tailwind v4. Single page.

`src/App.tsx` renders, in order: `SiteNav`, `HeroSection`, `BuiltStrip`,
`AboutSection`, `ValuePropsSection`, `CareerPlanSection`, `CareerPathsSection`,
`CertificationSection`, `LeadMagnetSection`, `ResourcesSection`,
`CoursePreviewSection`, `QuickSurveySection`, `PricingSection`,
`WaitlistSection`, `AppsBooksSection`, `LecternSection`, `SupportSection`,
`PrivacySection`, `Footer`.

> `SocialProofSection.tsx` exists in `src/components/landing/` but is
> **deliberately not rendered** — it carried unverified stats and testimonials.
> Do not wire it back in.

Content lives in `src/data/` as typed modules. The estate's own links are in
`src/data/sites.ts`: `appSites`, `bookSites`, `blogHref`, `contactEmail`.
Adding a subdomain means adding it there too.

The public contact address is **`iantrimble@remnantsecurity.com`** everywhere.
Some older drafts in app repos say `hello@`; that is wrong.

See `AGENTS.md` for code style, structure and the `pdf-source/` ↔ `public/`
path dependencies, and `SECURITY.md` for the credential rules.

---

## 7. apps.remnantsecurity.com editorial policy

The page's own stated promise is "Public apps, labeled honestly." It has three
sections and the boundaries are deliberate:

| Section | Means |
|---|---|
| **Flagship — shipped** | Has a verified store listing. |
| **Coming soon — public site live, store listing pending** | Has its own public page but no store listing. |
| **Portfolio-only — not shipped as public apps** | Local projects, LAN sites, placeholders. |

**Never add an `apps.apple.com` CTA for an app whose listing you have not
verified.** The page says so in its own copy. An app moves up a section when
the thing that defines that section becomes true — not when it feels ready.

---

## 8. Known defects and conflicts

**`alttab.remnantsecurity.com` — fixed 2026-10-14.** It had served plaintext
only: `http` 200, `https` nothing, `https_enforced` false, and the Pages API
returned **no `https_certificate` object at all**, meaning GitHub had never
even requested one. Almost certainly because the custom domain was set before
the DNS record existed.

Re-saving the same domain did **nothing** — the record has to be cleared and
re-set to force the DNS re-check. After that the certificate reached
`approved` within a minute. It now has a Let's Encrypt certificate valid to
2027-01-12 with HTTPS enforced. Procedure in §5.

**`tilepilot.remnantsecurity.com` — wired up 2026-10-14.** It had been
dangling: Pages held the custom domain but no DNS record existed, so nothing
resolved and no certificate could be issued. The repo had held a complete,
finished marketing site since 2026-07-18.

Ian added `CNAME tilepilot -> itrimble.github.io.` and the §5 procedure brought
it up — same missing-`https_certificate` symptom as `alttab`, same clear and
re-set repair. All six pages serve 200 behind a Let's Encrypt certificate valid
to 2027-01-12, with HTTPS enforced. The first Pages build after the swap
errored and the next one succeeded; see the note in §5.

It is not junk: the repo holds a complete marketing site — index, features,
pricing, changelog, privacy and support — last pushed 2026-07-18. It was built
and never wired up. To finish it, add `CNAME tilepilot -> itrimble.github.io.`
(§4, and send the complete record set), then run the certificate procedure in
§5. To abandon it, clear the domain from the Pages config so nothing claims a
hostname that does not resolve.

**Prism Shift publication is consolidated on GitHub Pages.** The user approved
`microsites/prismshift` (“Keep the current preview”) and requested soundtrack
playback. That approved composition was published into `itrimble/prismshift-site`
on October14, commit839ad9d, preserving CNAME/support/privacy and current DNS.
The microsite here is the maintained source and local preview, not a second host.
Private design/provenance/verification notes live in `docs/prismshift-site` and
are excluded from publication. No Vercel project or DNS migration is required.
Live HTML/styles/gallery code and soundtrack MP4 were checked byte-for-byte;
native browser Play/Pause and15 gallery entries were verified. A build uploaded
to App Store Connect alone does not establish a public download; public copy
continues to label development status until distribution is verified.

---

## 9. Environment traps

These cost real time on this fleet.

- **zsh does not word-split unquoted variables.** `for x in $LIST` iterates once
  with the whole string, and `$CURL_OPTS` is passed as one giant argument. Use
  an array or `${=VAR}`.
- **Never pipe `codex exec` into `head`.** The `SIGPIPE` kills codex mid
  tool-call, which can abort an operation halfway. Redirect to a file and grep
  the file.
- **Neo's resolver caches negative lookups.** After a new hostname is created,
  `dig` succeeds while `curl` still reports "could not resolve", sometimes for
  many minutes. `sudo killall -HUP mDNSResponder`, or just verify from the mini
  or the MBP — which is better practice anyway.
- **The mini runs Python 3.9** — no `tomllib`. Verify codex TOML with
  `codex mcp get <name>` instead of parsing it.
- **`$?` after a pipeline is the last command's status**, not the first.
- The apex bundle contains the string `vercel.app`. It is inside a vendor list
  of ephemeral-host suffixes (`["herokuapp.com","vercel.app","netlify.app"]`),
  not a stale academy origin. Do not "fix" it.

---

## 10. Open items

Done 2026-10-14: `alttab` certificate repaired and `tilepilot` wired up (§8).
Every hostname in §1 now serves 200 behind a valid certificate, and all twelve
Pages repos report `https_enforced=true` with `cert=approved`.

> **Ownership:** the Prism Shift web app is being worked on in a separate Codex
> session. Do not edit `microsites/prismshift`, `docs/prismshift-site/` or the
> `prismshift-site` repo from here without checking with Ian first.

- Rotate the Kit/ConvertKit `api_secret`. Public since ~10 Oct. The deployed
  site no longer uses it, so rotating breaks nothing. **Ian only.**
- Run `CAREER_PLAN_QA_EMAIL=<inbox> npm run release:verify` — the live-API half
  has never been exercised.
- Click the career-plan funnel end to end: seven questions, scoring,
  `localStorage` resume, Markdown download.
- The stale `release/web/` package in `~/projects/prismshift` still advertises
  `hello@` and pre-launch URLs. Its `metadata/en-US/` URLs are already correct.
- Branch policy and the kept snapshot branch: see `Handover.md`.

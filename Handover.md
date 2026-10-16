# Project Handover

**Updated:** October 15, 2026
**Repository:** `itrimble/Cybersecurity-Training-Links` (the name is stale; see README)
**Working folder:** `~/projects/remnantsecurity.com`
**Branch / HEAD:** `main` / `e88ae08`

Supersedes the August 3 handover, which described work that had not yet been
committed. That work has now shipped.

> **New:** the estate is now documented in
> [`docs/WEB-ESTATE.md`](docs/WEB-ESTATE.md), the prerequisites to work on it
> in [`docs/TOOLCHAIN.md`](docs/TOOLCHAIN.md) (`gh`, Node, the Namecheap MCP
> server and how to authenticate it), with a machine-readable inventory
> in [`docs/estate.json`](docs/estate.json). Read it before touching DNS,
> adding a subdomain, or deploying. `GEMINI.md` and `QWEN.md` were stale and
> now delegate to `AGENTS.md`.

## State

The 90-day career plan funnel is **live**. It was written on `f021661`, 19
commits behind `main`, and sat uncommitted in a working tree on one machine
until 2026-10-13. It was rebased onto `8ab6d86` rather than merged, because
merging the tree directly would have deleted the six sections `main` had
gained since — Lectern, Support, Privacy, AppsBooks, BuiltStrip, About —
along with PostHog and the OKLCH overhaul.

What shipped:

- `CareerPlanSection` renders after `ValuePropsSection`, at `#plan-builder`.
- The hero keeps its original headline and primary CTA; "Build my 90-day plan"
  was added as a secondary button.
- `LeadMagnetSection` and `WaitlistSection` post to the academy API via
  `src/lib/academy.ts`. **The ConvertKit account secret is no longer in the
  bundle.** See `SECURITY.md`.
- The 25-page 2026 roadmap PDF is served; previously the lead magnet promised
  a download that did not exist in the repo.
- PDF build sources moved out of `public/` into `pdf-source/`.
- `SocialProofSection` remains deliberately unrendered.

Two further deploys followed on the same day:

- `01524d9` — the site calls `academy.remnantsecurity.com` instead of the
  `.vercel.app` origin, now that the academy's own domain resolves.
- `d450d7f` — **Blog** added to the site nav. The blog had been live with no
  entry point from the apex site since it launched.

## October 14, 2026

Two game subdomains and the documentation above.

- **`prismshift.remnantsecurity.com` is live.** New public repo
  `itrimble/prismshift-site` on GitHub Pages, HTTPS enforced. Marketing,
  support and privacy pages, built in the same house style as
  `lightfence-site`. Copy comes from the app's own App Store listing
  (`release/metadata/en-US/`); level names, tempos and world grouping come from
  the game's `catalog.json` and `AppConstants.swift`. Ian created the DNS
  CNAME. The app goes to App Store Connect the same evening.
- **`lightfence.remnantsecurity.com` needed nothing** — it was already live,
  already in `appSites`. Note its app source folder is `~/projects/qix-swift`.
- `5306849` — Lightfence listed under Apps.
- `9787997` — **Prism Shift listed under Apps**, and the "All apps" blurb
  refreshed; it still named only the four shipped titles.
- `apps-site@c0d97e4` — a third section, *"Coming soon — public site live,
  store listing pending"*, now holds Lightfence and Prism Shift. Prism Shift
  had been filed under Portfolio-only as "Local Xcode project. No public site
  or store listing", which had stopped being true. Neither card carries a store
  CTA, per that page's own rule.
- Prism Shift's App Store `support_url.txt` pointed at the bare apex and
  `privacy_url.txt` did not exist at all. Both now point at the real pages.
  Left uncommitted in the app repo for review.

**Resolved the same day.** There had briefly been two Prism Shift sites for one
hostname — this repo's `microsites/prismshift` and the `prismshift-site` Pages
repo. They were consolidated: the approved microsite composition was published
into `itrimble/prismshift-site` (`839ad9d`), keeping the existing CNAME, DNS and
support/privacy pages. `microsites/prismshift` is now the maintained source and
local preview, not a second host. No Vercel project is needed. See
`docs/WEB-ESTATE.md` §8.

**TLS across the estate.** Every certificate is Let's Encrypt, issued and
renewed automatically by GitHub Pages — no certbot, no cron, nothing to renew
by hand. `alttab.remnantsecurity.com` had been serving **plaintext only**: the
Pages API carried no `https_certificate` object at all, so GitHub had never
requested one, most likely because the custom domain was set before its DNS
record existed. Re-saving the domain did nothing; clearing and re-setting it
forced provisioning, and it now has a certificate valid to 2027-01-12 with
HTTPS enforced. The procedure is written up in `docs/WEB-ESTATE.md` §5.

`tilepilot.remnantsecurity.com` was dangling for the same reason — Pages
claimed the domain but no DNS record existed, so no certificate could be
issued, and a complete marketing site from July sat unreachable. Ian added the
CNAME; the same repair brought it up. All six of its pages now serve 200
behind a certificate valid to 2027-01-12.

**The estate is now clean.** Every hostname returns 200 behind a valid
Let's Encrypt certificate, and all twelve Pages repos report
`https_enforced=true` with `cert=approved`.

> **Ownership note:** the Prism Shift web app is being worked on in a separate
> Codex session. Do not edit `microsites/prismshift`, `docs/prismshift-site/`
> or the `prismshift-site` repo from a Claude session without checking first.

## October 15, 2026

An estate-wide SEO and discoverability pass. Full detail, including the per-
property checklist and the traps, is in [`docs/SEO.md`](docs/SEO.md); this is
the summary. **All 14 hostnames now pass every item** — thirteen audited plus `statbar.`, which launched the same day already compliant.

**The apex is prerendered.** `npm run build` gained two steps: it builds
`src/entry-server.tsx` with Vite's SSR mode, then `scripts/prerender.mjs`
renders the app and injects the HTML into `dist/index.html`. Crawlers that do
not run JavaScript now get **17,565 characters and 99 links** instead of the
empty `#root` they saw before. It is pure `react-dom/server`, so CI needs
nothing extra, and the script fails the build rather than publishing a blank
page. The `<noscript>` stopgap was removed as redundant. `24e92fb`.

A note in this repo claimed `CareerPlanSection` could not be server-rendered
because it reads `localStorage`. That was false — `loadStoredState()` already
guards on `typeof window === "undefined"`. The real work was hydration parity:
the component now starts from empty state and restores saved progress in an
effect behind a `restored` flag.

**Four sites had silently broken social cards.** The common thread is that all
of these fail *quietly* — the tag looks correct and the card renders blank or
cropped:

- `books.` — **eleven pages pointed `og:image` at an SVG**, which every scraper
  refuses. `gfn/` used a relative URL to a JPEG misnamed `.png`. `444a1b9`
- `tilepilot.` — the card was 1024x1024, so large-card scrapers cropped it, and
  only `index.html` had any OG tags. `1a6bfcb`
- `lectern.` — the SVG favicon was declared `image/png`, and the same SVG was
  used as the apple-touch-icon, which iOS ignores. `286eb06`
- `alttab.` — promised `summary_large_image` with no image, and had no
  canonical anywhere. `6e6eab9`

**The blog** got a site-wide default card in `build.mjs`. `main` is protected,
so it went through [`product-diary#40`](https://github.com/itrimble/product-diary/pull/40),
squash-merged as `cab48c4` and published with `./deploy.sh` — the blog pushes
`dist/` to `gh-pages` by hand, it is not deployed by CI.

**The academy was two months stale and nobody knew.** It gained `robots.ts`,
`sitemap.ts`, per-page canonicals and a social card (`ee8978f`), but the push
deployed nothing: **the Vercel project had no Git connection**, so all three of
its production deployments were manual CLI uploads and the newest was from
**2 August**. Deployed with `vercel --prod`; the rendered page came back RMSE 0
against the build it replaced, so two and a half months of commits went live
without changing anything a visitor sees.

That deploy then exposed a second fault. `NEXT_PUBLIC_ACADEMY_URL` had been set
in Production 80 days earlier, pointing at the `.vercel.app` origin — correct
when the project was made, stale from the moment the custom domain was attached
on 13 October. It overrode the deliberate fallback in `src/lib/config.ts`, so
the first deploy published a canonical, an `og:image` and a `Sitemap:` line all
naming the wrong domain, which is worse than having none. The variable was
removed rather than corrected, so the origin is written down in one place.

Ian then added a GitHub Login Connection at `vercel.com/account/authentication`
— the account had been created with an email address, so no Git provider was
ever attached — and `vercel git connect` now records
`link: {type: github, org: itrimble, repo: remnant-academy, productionBranch:
main}`. **Academy pushes deploy on their own from here.**

**`prismshift.` was finished by its own owner.** It had no Open Graph tags at
all. A card was built here, but writes to `prismshift-site` were refused as a
shared resource, consistent with the ownership note above — and that refusal
was right: the Codex session shipped `b8ffcde` with a card made from actual
gameplay. Live and verified. When a repo has another owner, the block is
information, not an obstacle.

**A fourteenth hostname appeared the same day.**
`statbar.remnantsecurity.com` went live from `itrimble/statbar-site` — a paid
Mac menu-bar app, $9.95 one-time via Gumroad. It needed no SEO work; it shipped
with robots, sitemap, canonicals and a raster card already in place. It is now
in `docs/WEB-ESTATE.md` §1 and `docs/estate.json`. Its site source is
`~/projects/statbar/site`, built and rsynced into the `~/projects/statbar-site`
clone, and the Namecheap `CNAME statbar -> itrimble.github.io.` was added the
same day following the §4 backup-first procedure.

Docs: `322bc38`, `7e92d49`, `e88ae08`.

## Branches

### Keep

**`snapshot/career-plan-funnel-20261013`** (`d380fca`) — **do not delete, do
not merge.**

It is a verbatim snapshot of the career-plan funnel as it existed uncommitted
in a working tree on 2026-10-13, taken *before* the rebase onto `8ab6d86`.
Written against `f021661`, which is 19 commits behind that base.

Why it is kept: the funnel that shipped is a *rebase* of this work, not this
work. If a behaviour turns out to have been lost or altered in the 88
auto-merged hunks, this branch is the only record of what the original
actually did. It is diff material, not a merge candidate — merging it would
delete the six sections `main` gained since `f021661`.

When it can go: the original condition was that the funnel be exercised in a
browser and `release:verify` pass against the live API. As of 2026-10-14 both
are substantially met — the funnel was clicked through and the gate is green
apart from the email step (Outstanding 2 and 3).

That is no longer the binding constraint. **It still holds one commit that is
not in `main`, and it is not an ancestor of `main`,** so it fails the
three-check rule below. Deleting it discards the only record of the
pre-rebase work. Keep it until someone decides that record is genuinely no
longer wanted, and treat that as a deliberate discard rather than cleanup.

### Unmerged — read before deciding

| Branch | Commits | Behind main | Last touched |
|---|---|---|---|
| `add-posthog` | 4 | 19 | 2026-08-26 |
| `add-posthog-lectern` | 2 | 18 | 2026-08-26 |
| `feat/polish-2026-10-10` | 1 | 7 | 2026-10-10 |

The two PostHog branches predate the OKLCH overhaul and analytics may already
have landed another way — check `public/posthog.js` on `main` before reviving
them.

### Deleted 2026-10-13

Six branches, each verified first as an ancestor of `origin/main` with **zero**
commits not already in `main`, and held by no worktree:

| Branch | Tip |
|---|---|
| `blog-nav-link` | `8491637` |
| `chore/contact-email` | `206f3d3` |
| `feat/apps-books-nav` | `426cadb` |
| `feat/clarity-about` | `91984c3` |
| `feat/impeccable-overhaul` | `eb0a0dc` |
| `claude/career-path-website-Uv0Ns` | `f021661` |

Every tip is still reachable from `main`, so nothing was lost. A pre-deletion
`git bundle --all` is at
`~/backups/remnant-branch-cleanup/20261013-213153/` alongside the SHA list.

**The rule used, and to reuse:** never delete on "looks merged". Require all
three of `git merge-base --is-ancestor <branch> origin/main`,
`git rev-list --count origin/main..<branch>` equal to 0, and no worktree
holding it. Bundle first.

## Outstanding

1. **Rotate the Kit `api_secret`.** Still not done. The deployed site no
   longer uses it, so rotating will not break the forms. **Ian only.**
2. **The email half of the release gate.** Everything else now passes —
   `npm run release:verify -- --skip-email` is green against the live site
   (marketing funnel, credential boundary, career-plan CORS, untrusted-origin
   rejection, duplicate-roadmap rejection, download, roadmap, routing).
   The email step posts a real message through the provider, so run
   `CAREER_PLAN_QA_EMAIL=… npm run release:verify` when you can watch the inbox.

   While running it, the gate turned out to have been **broken since the
   13 Oct academy move**: `defaultAcademyUrl` in
   `scripts/verify-career-plan-release.mjs` still named the retired
   `.vercel.app` origin, so its "bundle targets the verified academy origin"
   assertion failed for everyone. Fixed; it passes with no arguments now.
3. **Funnel: exercised 2026-10-14.** All seven questions, scoring and the
   `localStorage` resume were clicked through in a browser against the live
   site; the plan survived a full page reload. Two gaps remain: the Markdown
   download fires and the UI reports success but no file appeared on disk
   under browser automation — worth one manual click — and the email path was
   deliberately not triggered.
4. **The old folder** `~/projects/Cybersecurity-Training-Links` is still in
   place and untouched, as a fallback. Retire it once this folder has proven
   itself.
5. **The snapshot branch cannot simply be deleted.**
   `snapshot/career-plan-funnel-20261013` (`d380fca`) holds one commit that is
   not in `main` and is not an ancestor of it, so it fails the three-check
   rule above. The funnel being exercised does not change that: removing it
   discards the pre-rebase snapshot rather than tidying a merged branch.

## Notes for whoever is next

- No PR checks, `main` unprotected. Run `npm run lint && npm run build`
  yourself.
- `core.fileMode=false` is set deliberately; without it a copy through the
  NAS mount shows ~36 phantom mode-only changes.
- The three book projects, `output/` and `backup/` in the old folder are not
  website files and are gitignored now.

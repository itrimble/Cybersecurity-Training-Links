# SEO and discoverability

Split out of `WEB-ESTATE.md` §12 on 2026-10-15 when that file reached its
500-line limit. Read `WEB-ESTATE.md` first for the estate itself — hostnames,
repos, DNS and TLS. This file covers only how the estate is found.

Baseline first checked across all thirteen hostnames on 2026-10-14.

## What every property must have

| Item | Why |
|---|---|
| `robots.txt` declaring the sitemap | House style: `User-agent: *` / `Allow: /` / `Sitemap: https://<host>/sitemap.xml` |
| `sitemap.xml` listing **canonical URLs only** | Never list a page that canonicals elsewhere |
| `<link rel="canonical">` on every page | Several pages exist at two hostnames; see below |
| `og:title`, `og:description`, `og:type`, `og:url` | A share with no `og:title` falls back to the `<title>`, which is usually wrong for a card |
| `og:image` as an **absolute URL**, with width, height and alt | Without one, every share renders a bare card |
| `twitter:card` | `summary_large_image` only if an image actually exists, otherwise the card is broken by design |
| `<meta name="description">` | |

**`og:image` must be a raster format.** PNG or JPEG. Facebook, LinkedIn, Slack
and X all refuse SVG, and they fail silently — the tag looks correct in the
HTML and the card still comes out blank.

## The apex is prerendered at build time

The apex is a React SPA: `index.html` shipped an empty `<div id="root">` and
the page was built by the bundle at runtime. Googlebot runs JavaScript, but
**Bing, DuckDuckGo and the LinkedIn, Slack and Discord link scrapers do not.**
Until 2026-10-14 they received 2,391 bytes and zero text.

A `<noscript>` block was the stopgap. The real fix landed 2026-10-15:
`npm run build` is now four steps.

| Step | What it does |
|---|---|
| `tsc -b && vite build` | the normal client build |
| `npm run build:ssr` | builds `src/entry-server.tsx` into `dist-ssr/` |
| `npm run prerender` | `scripts/prerender.mjs` renders the app and injects the HTML into `dist/index.html` |

The prerender is **pure Node** — `react-dom/server`, no headless browser — so
CI needs nothing extra. It produces **17,565 crawler-visible characters and 99
links**, against 719 and 12 under the `<noscript>` fallback, which is now
deleted. `src/main.tsx` calls `hydrateRoot` when `#root` already has children
and `createRoot` when it does not, so `npm run dev` is unaffected.

### Two rules that keep it working

- **Nothing may touch a browser global during render.** Event handlers and
  effects are fine; they do not run in the SSR pass. `loadStoredState()` in
  `CareerPlanSection` already guarded on `typeof window === "undefined"`, which
  is why no SSR-safety work was needed — an earlier note in this repo claimed
  otherwise and was wrong.
- **The first client render must match the server render.** `CareerPlanSection`
  starts from empty state and restores saved progress in an effect, gated by a
  `restored` flag so the save effect cannot clear `localStorage` before it has
  been read back. Reading storage during render would desynchronise hydration
  and React would discard the server markup.

`scripts/prerender.mjs` **fails the build** if `render()` throws, returns under
20 KB, or is missing `<h1`, the hero headline or `</footer>`. A silent failure
would publish a blank page that looks perfectly fine in a browser, which is the
exact defect the script exists to prevent.

Verified on 2026-10-15: lint and build clean; zero console errors or hydration
warnings on load; the plan builder still advances and still resumes from
`localStorage` across a reload (with the no-stored-state control confirming the
difference); headless render against live **RMSE 0, pixel-identical**.

## Estate status, 2026-10-15

Re-audited live after the day's deploys. **12 of 13 hostnames pass every item
in the table above.** The one exception is `prismshift.`, and it is blocked
rather than unfinished — see "Still open" below.

| Property | Was wrong | Fixed |
|---|---|---|
| apex | empty `#root` for non-JS crawlers | prerendered, see above |
| `alttab.` | no canonical on any page; `summary_large_image` with no image | `assets/og-card.png`, canonical + OG on all 5 pages |
| `tilepilot.` | no canonical; OG only on `index.html`; card was **1024x1024** | `assets/og-card.png` at 1200x630, canonical + OG on all 6 pages |
| `books.` | **11 pages pointed `og:image` at an SVG**; `gfn/` used a relative URL | 9 raster cards built from the real cover art |
| `lectern.` | favicon declared `image/png` for an SVG; SVG apple-touch-icon; no OG on inner pages | real 180x180 PNG, correct types, OG on all 4 pages |
| `academy.` | no robots, sitemap, canonical or OG at all | `src/app/robots.ts`, `src/app/sitemap.ts`, per-page canonicals, social card |
| `blog.` | no `og:image`; `twitter:card` was `summary` | site-wide default card in `build.mjs` |

### What the two deploys each required

- **`blog.`** — **done 2026-10-15.** `itrimble/product-diary#40` was squash-
  merged as `cab48c4` and published with `./deploy.sh`; the blog pushes `dist/`
  to `gh-pages` by hand, it is not deployed by CI. `main` is protected and needs
  the `verify` check plus a review, so the fix cannot be pushed straight to it.
  After a squash merge the local `main` diverges from `origin/main` with
  identical trees — check `git diff --stat main origin/main` is empty, then
  `git reset --hard origin/main`.
- **`academy.`** — **done 2026-10-15.** Live and verified: `/robots.txt`,
  `/sitemap.xml` (12 URLs) and `/og-card.png` all 200, canonical and
  `twitter:card` present, and the rendered page is pixel-identical (RMSE 0) to
  the build it replaced.

  Two things had to be understood first, and an earlier note here got the first
  one wrong. It claimed the Vercel project was in a team this machine's token
  could not see. It is not: `academy.remnantsecurity.com` is attached to
  `remnant-security-academy` (`prj_QMC5U73vkiY9gxm1TErxst606nxy`) in
  `team_biZFVGbqZTPRRqpD3n2certC`, verified, attached 2026-10-13. **The project
  listing does not show custom domains**, which is what produced the wrong
  conclusion; `list_project_domains` does. Do not infer a missing domain from
  a project listing.

  The real reason the push did nothing is that **the project has no Git
  connection**. Every production deployment carried an empty `meta` and no
  commit SHA, so all three were manual CLI uploads, the newest from
  **2026-08-02** — two months of commits had never shipped. Deployed by hand
  with `vercel --prod` from `~/projects/remnant-academy`.

  **The trap that caught this deploy:** `NEXT_PUBLIC_ACADEMY_URL` was set in
  Production only, created 80 days ago, pointing at
  `https://remnant-security-academy.vercel.app` — correct when the project was
  made, stale the moment the custom domain was attached. It overrode the
  deliberate production fallback in `src/lib/config.ts`, so the first deploy
  published a canonical, an `og:image` and a `Sitemap:` line all naming the
  `.vercel.app` origin. That is worse than having no canonical: it tells Google
  the branded domain is the duplicate. Removed the variable rather than
  correcting it, so the origin is written down in exactly one place — the code
  fallback. Redeployed; zero occurrences of `vercel.app` remain across `/`,
  `/courses`, `/portfolio-labs`, `/waitlist`, `robots.txt` and `sitemap.xml`.

  **Auto-deploy is now fixed too.** `vercel git connect` first failed with
  *"You need to add a Login Connection to your GitHub account first"* (400):
  the Vercel account was created with an email address, so no Git provider was
  ever attached. Ian linked GitHub at `vercel.com/account/authentication`
  (avatar -> Settings -> Authentication, a **personal account** page, not a
  team one and not the "Connect"/Connectors page). The project now carries
  `link: {type: github, org: itrimble, repo: remnant-academy,
  productionBranch: main}`, so pushes to `main` deploy on their own. Note the
  account is on **Hobby**, which allows only one login connection per service.

### Still open

- **`prismshift.`** — has a canonical and a description but **no Open Graph
  tags at all**, so every share renders a bare card. A 1200x630 card was built
  and verified but **not installed**: writes to `prismshift-site` are refused
  by the permission classifier as a shared resource, which matches the standing
  instruction that the Prism Shift web app is worked on in a Codex session.
  The card is ready at `scratchpad/build/prismshift-og.png`. To finish it,
  either add a Bash permission rule for `~/projects/prismshift-site`, or hand
  the PNG to the Codex session and have it add `og:image` (plus `og:url`,
  `og:type`, `og:site_name` and `twitter:card`) to `index.html`,
  `support.html` and `privacy.html`.

### Traps worth remembering

- **`og:image` must be raster.** SVG fails silently everywhere: the tag looks
  right and the card comes out blank. `books.` had eleven of them.
- **A square `og:image` is not a large card.** Scrapers crop to 1.91:1, so
  `tilepilot.`'s 1024x1024 rendered cropped or as a thumbnail.
- **`robots.txt` matches on prefix, not path segments.** `Disallow: /portfolio`
  also blocks `/portfolio-labs`. The academy's rule carries a trailing slash
  for exactly this reason.

Three more earned on 2026-10-15, all from the academy:

- **A Vercel project listing does not show custom domains.** Concluding from
  its absence that a project does not serve a hostname is wrong;
  `list_project_domains` is the call that answers it. This produced a confident
  but false claim in an earlier version of this file.
- **A stale env var silently overrides a correct code fallback.**
  `NEXT_PUBLIC_ACADEMY_URL` outlived the domain change that made it wrong and
  beat the right value baked into the code. Prefer deleting such a variable
  over correcting it, so the origin lives in exactly one place.
- **A deployment with empty `meta` and no commit SHA was a manual upload, not
  a push.** Check that before assuming a push will deploy anything; a project
  with no Git connection ignores every commit in silence.

## Fonts: do not add a Google Fonts link

The site self-hosts Public Sans, Bricolage Grotesque and JetBrains Mono via
`@fontsource-variable` imports in `src/main.tsx`. `index.html` carried a
render-blocking Google Fonts stylesheet requesting **Space Grotesk, which no
stylesheet references** — removed 2026-10-14, verified by a headless render
against live at RMSE 0.

`tailwind.config.ts` still names Space Grotesk, but **Tailwind v4 is CSS-first
here** (`@import "tailwindcss"`, no `@config`), so that file is never read.
Do not treat it as live configuration.

## Pages that exist at two hostnames

Both are kept, because external listings may point at them, and both carry a
canonical rather than competing:

| Duplicate | Canonical target |
|---|---|
| `remnantsecurity.com/privacy.html` — a stale copy of AltTab's policy | `alttab.remnantsecurity.com/privacy.html` |
| `remnantsecurity.com/lectern/` | `lectern.remnantsecurity.com/` — where the site's own links go |

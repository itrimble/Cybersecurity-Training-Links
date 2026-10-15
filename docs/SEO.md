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

Re-audited live after the day's deploys. 10 of 13 hostnames pass every item in
the table above.

| Property | Was wrong | Fixed |
|---|---|---|
| apex | empty `#root` for non-JS crawlers | prerendered, see above |
| `alttab.` | no canonical on any page; `summary_large_image` with no image | `assets/og-card.png`, canonical + OG on all 5 pages |
| `tilepilot.` | no canonical; OG only on `index.html`; card was **1024x1024** | `assets/og-card.png` at 1200x630, canonical + OG on all 6 pages |
| `books.` | **11 pages pointed `og:image` at an SVG**; `gfn/` used a relative URL | 9 raster cards built from the real cover art |
| `lectern.` | favicon declared `image/png` for an SVG; SVG apple-touch-icon; no OG on inner pages | real 180x180 PNG, correct types, OG on all 4 pages |
| `academy.` | no robots, sitemap, canonical or OG at all | `src/app/robots.ts`, `src/app/sitemap.ts`, per-page canonicals, social card |
| `blog.` | no `og:image`; `twitter:card` was `summary` | site-wide default card in `build.mjs` |

### Still open

- **`blog.`** — **done 2026-10-15.** `itrimble/product-diary#40` was squash-
  merged as `cab48c4` and published with `./deploy.sh`; the blog pushes `dist/`
  to `gh-pages` by hand, it is not deployed by CI. `main` is protected and needs
  the `verify` check plus a review, so the fix cannot be pushed straight to it.
  After a squash merge the local `main` diverges from `origin/main` with
  identical trees — check `git diff --stat main origin/main` is empty, then
  `git reset --hard origin/main`.
- **`academy.`** — committed and pushed to `itrimble/remnant-academy` `main`,
  but **not deployed**, because **the Vercel project has no Git connection**.
  An earlier note here said the project was in a team this machine's token
  could not see. That was wrong: `academy.remnantsecurity.com` is attached to
  `remnant-security-academy` (`prj_QMC5U73vkiY9gxm1TErxst606nxy`) in
  `team_biZFVGbqZTPRRqpD3n2certC`, verified, attached 2026-10-13. The project
  listing does not show custom domains, which is what produced the wrong
  conclusion — `list_project_domains` does.

  All three production deployments carry an empty `meta: {}` and no
  `githubCommitSha`, so every one was a manual CLI upload. The newest is
  **2026-08-02**. Pushing to GitHub therefore deploys nothing, and the live site
  is a two-month-old build that predates not just the SEO work but everything
  else committed since. Fixing it is one of:

  1. Connect the repo in the Vercel dashboard (Project → Settings → Git), after
     which pushes to `main` deploy on their own. This is the durable fix.
  2. Deploy by hand from `~/projects/remnant-academy`: `vercel --prod`. It needs
     the production env vars (Supabase, Stripe, Cloudflare Stream) present in
     the project, and it is a live paid app, so it is Ian's call.

  The site itself is up and renders correctly — `/`, `/courses`,
  `/portfolio-labs`, `/waitlist` and `/login` all return 200 with full
  server-rendered HTML. What is missing is only what `ee8978f` adds:
  `/robots.txt`, `/sitemap.xml` and `/og-card.png` all 404, and the served HTML
  has no canonical, no `og:image` and no `twitter:card`.
- **`prismshift.`** — has a canonical and a description but **no Open Graph
  tags at all**. A card was built but not installed: `prismshift-site` belongs
  to the Codex session and writing to it was refused as a shared resource. The
  card is ready at `scratchpad/build/prismshift-og.png`.

### Three traps worth remembering

- **`og:image` must be raster.** SVG fails silently everywhere: the tag looks
  right and the card comes out blank. `books.` had eleven of them.
- **A square `og:image` is not a large card.** Scrapers crop to 1.91:1, so
  `tilepilot.`'s 1024x1024 rendered cropped or as a thumbnail.
- **`robots.txt` matches on prefix, not path segments.** `Disallow: /portfolio`
  also blocks `/portfolio-labs`. The academy's rule carries a trailing slash
  for exactly this reason.

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

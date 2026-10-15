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

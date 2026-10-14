# remnantsecurity.com

The marketing website for Remnant Security. **This repository is the live site
at https://remnantsecurity.com** — if you are changing what visitors see, you
are in the right folder.

> The GitHub repo is still named `itrimble/Cybersecurity-Training-Links`. That
> name predates the site and is misleading; renaming it is deliberately
> deferred, because `itrimble/remnantsecurity.com` is currently taken by the
> Lectern landing page in `app-website`.

This apex is one of thirteen properties under `remnantsecurity.com`. The whole
estate — which repo serves which hostname, how each deploys, and the operations
that cause damage a `git revert` will not undo — is mapped in
**[`docs/WEB-ESTATE.md`](docs/WEB-ESTATE.md)**, with a machine-readable
inventory in [`docs/estate.json`](docs/estate.json).

## Stack

React 19 · TypeScript · Vite 7 · Tailwind v4 · Radix UI

## Everyday commands

```bash
npm ci              # install exactly what the lockfile says
npm run dev         # local dev server with HMR
npm run lint        # eslint, must exit 0 before a PR
npm run build       # tsc -b && vite build -> dist/
npm run preview     # serve the built dist/ locally
npm run release:verify   # live post-deploy gate, see below
```

## How it deploys

Push to `main` → `.github/workflows/deploy.yml` → `npm ci`, `npm run build`,
GitHub Pages. The custom domain comes from `public/CNAME`, not from the repo
name, so renaming the repo would not move the site.

There are **no PR checks on this repo and `main` is not protected**. Nothing
validates a pull request automatically. Run lint and build yourself before
merging.

### The release gate

`npm run release:verify` runs against the deployed site and the live academy
API. It asserts the 90-day funnel is present, the legacy quiz copy is gone,
**no `api_secret` appears in the shipped bundle**, CORS behaves, a hostile
origin gets 403, and a real plan email is delivered. It needs an inbox:

```bash
CAREER_PLAN_QA_EMAIL=you@example.com npm run release:verify
```

## Layout

```
src/components/landing/   page sections; App.tsx assembles them in order
src/components/ui/        Radix wrappers
src/data/                 typed content (careers, courses, certifications, careerPlan)
src/lib/                  academy.ts (public API URLs), analytics.ts, utils
public/                   served verbatim at the web root
pdf-source/               build inputs for the roadmap PDF - NOT served
```

**Nothing that is not a web asset belongs in `public/`.** Everything under it
is copied into `dist/` and published. The roadmap's Typst layout, Markdown
content, Mermaid diagrams and image generator used to live there and were being
served; they are in `pdf-source/` now. Only the rendered `.pdf` and the `.png`
and `.svg` it embeds stay public.

## Where everything else lives

| | Path | What it is |
|---|---|---|
| Academy | `~/projects/remnant-academy` | Next.js paid training app, Supabase + Stripe, its own Vercel project. **This site calls its API** — see below. |
| Curriculum | `~/projects/remnant-security-courses` | Course source of truth; syncs into the academy via `npm run content:sync` |
| Blog | `~/projects/product-diary` | Nightly diary published to blog.remnantsecurity.com |
| Lectern | `~/projects/app-website` | The Lectern AI landing page. Holds the `itrimble/remnantsecurity.com` repo name. |

### This site does call the academy

`LeadMagnetSection` and `WaitlistSection` post to the academy API via
`src/lib/academy.ts`, which resolves **public URLs only**
(`VITE_ACADEMY_URL`, falling back to a hardcoded default). Email-provider
credentials live server-side in the academy project and must never come back
into this bundle. See `SECURITY.md`.

`academy.remnantsecurity.com` has resolved since 13 October 2026 and is the
origin the site calls. `VITE_ACADEMY_URL` is set in the Pages build step in
`.github/workflows/deploy.yml`; the fallback in `src/lib/academy.ts` holds the
same value, so a build without it still calls the right host. To reproduce the
deployed bundle byte for byte, build the way CI does:
`VITE_ACADEMY_URL=https://academy.remnantsecurity.com npm run build`.

# Repository Guidelines

## Start here

This repo is one property in a larger estate: one apex plus twelve subdomains,
spread across separate GitHub Pages repos and one Vercel app.
**[`docs/WEB-ESTATE.md`](docs/WEB-ESTATE.md)** maps all of it — which repo serves
which hostname, how each deploys, and the operations that cause damage a
`git revert` will not undo. [`docs/estate.json`](docs/estate.json) is the same
inventory, machine-readable.

Read it before you touch DNS, add a subdomain, or deploy anything. In
particular: the Namecheap `dns_records_save` tool **replaces the entire zone**,
and the zone carries the Google Workspace MX and DKIM records.

**[`docs/TOOLCHAIN.md`](docs/TOOLCHAIN.md)** covers what you need installed and
authenticated before any of that is actionable — `gh`, Node, and the Namecheap
MCP server that DNS is reached through. None of it lives in this repo, so read
it first if this folder has been moved, cloned, or handed to a new machine.

The GitHub repo is `itrimble/Cybersecurity-Training-Links`; the local folder is
`~/projects/remnantsecurity.com`. That mismatch is expected.

## Project Structure & Module Organization

This repository contains a single-page cybersecurity career site built with React 19, TypeScript, Vite, and Tailwind CSS. Application code lives in `src/`: `components/landing/` contains page sections, `components/ui/` wraps reusable Radix UI primitives, `data/` holds typed site content, and `lib/` contains shared utilities. `App.tsx` assembles the page. Static files are served from `public/`, including the `lectern/` microsite and generated roadmap/PDF assets. Treat `backup/` as legacy reference and `dist/` as generated build output.

## Build, Test, and Development Commands

- `npm ci` installs the exact dependencies recorded in `package-lock.json` (CI uses Node 20).
- `npm run dev` starts the Vite development server, normally at `http://localhost:5173`.
- `npm run lint` checks TypeScript and React code with ESLint.
- `npm run build` runs TypeScript project checks and produces the production site in `dist/`.
- `npm run preview` serves the built output for final local verification.

Run lint and build before opening a pull request. Do not hand-edit `dist/` or commit dependencies from `node_modules/`.

## Coding Style & Naming Conventions

Use two-space indentation and follow the existing semicolon and quote style in the file being edited. Keep TypeScript strict and remove unused variables and parameters. Name React components and their files in PascalCase (`CareerPathsSection.tsx`), functions and variables in camelCase, and data modules descriptively (`interviewQuestions.ts`). Prefer the `@/` alias for imports from `src/`. Compose styles with Tailwind utilities and shared theme classes from `src/index.css`; keep broadly reusable controls in `components/ui/`.

## Testing Guidelines

No automated test framework or coverage threshold is currently configured. The minimum validation is `npm run lint && npm run build`, followed by browser checks of the changed section, responsive layouts, links, dialogs, and forms. If adding tests, colocate them as `*.test.ts` or `*.test.tsx` and add the corresponding test command to `package.json`.

## Commit & Pull Request Guidelines

Recent commits use short, imperative, sentence-case subjects such as `Add email integration and monetization features`. Keep each commit focused. Pull requests should explain the user-visible change, list validation performed, link relevant issues, and include before/after screenshots for visual work. Changes merged to `main` trigger the GitHub Pages deployment workflow, so call out changes to `public/CNAME`, deployment configuration, or public assets explicitly.

## Content and asset boundaries

`public/` is copied verbatim into `dist/` and served at the web root. Only web
assets belong there. Build inputs for the roadmap PDF — Typst layout, Markdown
content, Mermaid diagrams, Vega-Lite specs, the image generator — live in
`pdf-source/`. The rendered `.pdf`, `.png` and `.svg` stay in `public/` because
the PDF and the pages reference them.

Two path dependencies exist in `pdf-source/`: `generate-ai-images.py` writes to
`public/pdf-assets`, and the Typst source addresses images as
`../public/pdf-assets/`. Moving either file means fixing those.

## Credentials

Never add a provider key, token or secret to this project. Everything in `src/`
is compiled into a public bundle. Form submissions go server-side through the
academy API via `src/lib/academy.ts`, which resolves public URLs only.
`scripts/verify-career-plan-release.mjs` asserts the deployed bundle contains
no `api_secret`; keep that assertion. See `SECURITY.md`.

## Before merging

There are no PR checks and `main` is not protected, so `npm run lint && npm run
build` is the only gate and you have to run it. After deploying, run
`CAREER_PLAN_QA_EMAIL=… npm run release:verify` against the live site.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A cybersecurity career path landing page built with React 19, TypeScript, Vite, and Tailwind CSS v4. Deployed to GitHub Pages via GitHub Actions on push to `main`.

**Before touching DNS, adding a subdomain, or deploying, read [`docs/WEB-ESTATE.md`](docs/WEB-ESTATE.md).** This repo is one of fourteen properties under `remnantsecurity.com`, and the DNS write tool replaces the entire zone — including the records that carry email. [`docs/estate.json`](docs/estate.json) is the machine-readable inventory. [`docs/TOOLCHAIN.md`](docs/TOOLCHAIN.md) has the prerequisites that make any of it actionable — `gh`, Node, and the Namecheap MCP server, including how to add and authenticate it per CLI. Read that first in a relocated or fresh clone.

Reproducing the deployed bundle locally requires the env var CI passes, or the hash will differ for identical source:

```bash
VITE_ACADEMY_URL=https://academy.remnantsecurity.com npm run build
```

**Designing or redesigning any product (app or game) site:** use the shared kit and standard in `~/projects/site-templates` (`docs/WEB-DESIGN.md`, `docs/SHOWCASE-PLAYBOOK.md`, `docs/CATALOG.md`). This repo is the apex only.

## Commands

```bash
npm run dev      # Start dev server (uses port 5173 by default)
npm run build    # TypeScript check + Vite production build
npm run lint     # ESLint
npm run preview  # Preview production build locally
```

## Architecture

**Single-page landing site** — `App.tsx` renders, in this order: SiteNav → Hero → BuiltStrip → About → Value Props → **CareerPlan (the 90-day funnel)** → Career Paths → Certifications → LeadMagnet → Resources → Course Preview → Quick Survey → Pricing → Waitlist → AppsBooks → Lectern → Support → Privacy → Footer.

`SocialProofSection.tsx` still exists on disk but is **deliberately not rendered** — it carried unverified stats and testimonials. Do not wire it back in.

**Primary conversion funnel** — `CareerPlanSection` (`#plan-builder`) runs a 7-question assessment, generates a role match + 13-period roadmap, saves progress in `localStorage`, and offers download/email via the academy API (`src/lib/academy.ts`). Analytics live in `src/lib/analytics.ts` and never include email.

**Data layer** — Content lives in `src/data/` as TypeScript modules (`careerPlan`, careers, certifications, courses, training, tools, books, etc.). Import via `@/data`.

**UI components** — Radix UI primitives wrapped in `src/components/ui/`. Landing sections in `src/components/landing/`.

**Styling** — Tailwind v4 with CSS variables for theming. Dark cybersecurity theme with cyan (`--color-primary: hsl(168 100% 50%)`) and amber accents. Custom utilities in `src/index.css`: `.cyber-card`, `.cyber-grid`, `.text-glow`, `.section-label`.

**Path alias** — `@/` maps to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).

**Public env** — Copy `.env.example`. Only public academy URLs are client-side (`VITE_ACADEMY_URL`, waitlist/career-plan endpoints). Provider secrets stay server-side in the academy project.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. The `dist/` folder is the build output.

Release gate for the career-plan funnel: `npm run release:verify` (see `scripts/verify-career-plan-release.mjs` and `Handover.md`).

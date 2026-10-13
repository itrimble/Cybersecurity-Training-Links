# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A cybersecurity career path landing page built with React 19, TypeScript, Vite, and Tailwind CSS v4. Deployed to GitHub Pages via GitHub Actions on push to `main`.

## Commands

```bash
npm run dev      # Start dev server (uses port 5173 by default)
npm run build    # TypeScript check + Vite production build
npm run lint     # ESLint
npm run preview  # Preview production build locally
```

## Architecture

**Single-page landing site** — `App.tsx` renders: SiteNav → Hero → Free Guide (lead magnet) → Value Props → **My 90-Day Plan** → Career Paths → Certifications → Resources → Social Proof → Courses → Pricing → Waitlist → Footer.

**Primary conversion funnel** — `CareerPlanSection` (`#plan-builder`) runs a 7-question assessment, generates a role match + 13-period roadmap, saves progress in `localStorage`, and offers download/email via the academy API (`src/lib/academy.ts`). Analytics live in `src/lib/analytics.ts` and never include email.

**Data layer** — Content lives in `src/data/` as TypeScript modules (`careerPlan`, careers, certifications, courses, training, tools, books, etc.). Import via `@/data`.

**UI components** — Radix UI primitives wrapped in `src/components/ui/`. Landing sections in `src/components/landing/`.

**Styling** — Tailwind v4 with CSS variables for theming. Dark cybersecurity theme with cyan (`--color-primary: hsl(168 100% 50%)`) and amber accents. Custom utilities in `src/index.css`: `.cyber-card`, `.cyber-grid`, `.text-glow`, `.section-label`.

**Path alias** — `@/` maps to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).

**Public env** — Copy `.env.example`. Only public academy URLs are client-side (`VITE_ACADEMY_URL`, waitlist/career-plan endpoints). Provider secrets stay server-side in the academy project.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. The `dist/` folder is the build output.

Release gate for the career-plan funnel: `npm run release:verify` (see `scripts/verify-career-plan-release.mjs` and `Handover.md`).

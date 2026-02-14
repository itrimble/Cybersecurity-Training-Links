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

**Single-page landing site** — `App.tsx` renders sections in order: Hero → About → Training → CareerQuiz → Curriculum → Certifications → Interview → Tools → Books → Waitlist → Footer.

**Data layer** — All content lives in `src/data/` as TypeScript modules (careers, certifications, training, tools, books, quiz questions, etc.). Import via `@/data`.

**UI components** — Radix UI primitives wrapped in `src/components/ui/` (accordion, button, checkbox, dialog, input, progress). Landing sections in `src/components/landing/`.

**Styling** — Tailwind v4 with CSS variables for theming. Dark cybersecurity theme with cyan (`--color-primary: hsl(168 100% 50%)`) and amber accents. Custom utilities in `src/index.css`: `.cyber-card`, `.cyber-grid`, `.text-glow`, `.section-label`.

**Path alias** — `@/` maps to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`).

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to `main`. The `dist/` folder is the build output.

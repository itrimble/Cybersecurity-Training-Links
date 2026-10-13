# Repository Guidelines

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

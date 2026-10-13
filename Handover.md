# Project Handover

**Updated:** August 3, 2026 (CDT)  
**Repository:** `/Volumes/nas/projects/Cybersecurity-Training-Links`  
**Branch / HEAD:** `claude/career-path-website-Uv0Ns` / `f021661` (dirty worktree)

## Current Focus

The React/Vite career site now has one guided **My 90-Day Cybersecurity Plan**
funnel in place of the separate career quiz and course survey. It generates a
best-fit role plus alternatives, priorities, a safe portfolio project, and a
13-period roadmap; saves progress locally; downloads through the academy API;
and routes to either a matching academy course or a preselected waitlist.

### Website polish (August 3 session)

Source still uncommitted. Added conversion and navigation polish on top of the
verified 90-day funnel:

- Sticky `SiteNav` with primary **Build My Plan** CTA and mobile menu
- Value props rewritten for portfolio-first messaging
- Lead magnet unlocks the PDF even when the waitlist API fails; direct PDF link remains available
- Footer dead `#privacy` / `#terms` anchors removed; links now surface plan, free guide, courses, waitlist
- SEO meta/title/canonical aligned with the 90-day plan positioning
- `PricingSection` converted to a named export; `CLAUDE.md` architecture updated
- Local `npm run lint` + `npm run build` pass; preview smoke-check at `http://127.0.0.1:4173` confirmed nav, `#plan-builder`, `#free-guide`, and `#waitlist`

The repository also contains the Remnant Security lead-magnet guide, **How to
Get Into Cybersecurity - 2026 Edition**. The guide has editable Markdown,
Typst, and DOCX sources plus a generated PDF.

The worktree is intentionally dirty: the latest check showed 56 modified and 15 untracked paths. Preserve existing work and stage only the intended guide/site files; do not reset the repository broadly.

## 90-Day Plan Verification

- Marketing-site ESLint and the TypeScript/Vite production build pass.
- Browser acceptance passed for both an available-course path and an
  unavailable-course waitlist path. The waitlist branch preselected the correct
  course interest.
- The generated plan persisted through reload, downloaded through the real
  local academy route, and contained all 13 roadmap periods.
- Desktop and 390 px mobile layouts were visually reviewed. Evidence is under
  `output/playwright/career-plan-*.png`; the mobile page had no horizontal
  overflow.
- Analytics emitted `assessment_completed`, `plan_saved`, and
  `plan_course_clicked` without including email. The download and course-click
  events were observed in the browser.
- The server email route is fail-closed until Resend is configured. Production
  deployment, custom academy DNS, email-provider configuration, and rotation of
  the legacy exposed credential were not performed in this pass.
- `npm run release:verify` is the final non-secret production gate. It inspects
  the deployed JavaScript bundle, rejects the legacy assessment and
  `api_secret`, verifies CORS and hostile-origin rejection, downloads and checks
  a 13-period plan, checks its academy route, and requires
  `CAREER_PLAN_QA_EMAIL` for server-side email acceptance. Use `-- --skip-email`
  only for non-release diagnostics.

Current live audit on August 3:

- **Academy API is live.** `POST /api/career-plan` on
  `https://remnant-security-academy.vercel.app` returns 200 Markdown downloads,
  CORS preflight 204 with `access-control-allow-origin: https://remnantsecurity.com`,
  rejects untrusted origins with 403, and rejects repeated roadmap content with 400.
  Verified via `node scripts/verify-career-plan-release.mjs --skip-marketing --skip-email`.
- **Resend env vars are set** (owner confirmed August 3). Email acceptance still
  needs a controlled inbox: `CAREER_PLAN_QA_EMAIL=... npm run release:verify -- --skip-marketing`.
- `https://remnantsecurity.com` still serves the **legacy** marketing bundle (no
  90-day funnel; still contains the old quiz/`api_secret` client path). Source
  on branch `claude/career-path-website-Uv0Ns` has the funnel; it is not on `main` yet.
- `academy.remnantsecurity.com` still does not resolve. Client defaults to the
  verified `vercel.app` origin, so custom DNS is not a launch blocker.
- Legacy Kit credential rotation remains out of scope for this release.

Release remaining order:

1. ~~Add Resend vars~~ done
2. ~~Deploy academy API~~ done
3. Commit marketing site changes and merge to `main` (GitHub Pages rebuild)
4. Run full `CAREER_PLAN_QA_EMAIL=you@example.com npm run release:verify` and confirm inbox delivery

Never place the QA email or provider values in a tracked file.

## Guide Artifacts

- Content source: `output/doc/How-to-Get-Into-Cybersecurity-2026.md`
- Typst layout and body: `output/doc/How-to-Get-Into-Cybersecurity-2026.typ` and `output/doc/How-to-Get-Into-Cybersecurity-2026-body.typ`
- Editable Word document: `output/doc/How-to-Get-Into-Cybersecurity-2026.docx`
- PDF deliverable: `output/pdf/How-to-Get-Into-Cybersecurity-2026.pdf`
- DOCX styling script: `scripts/style_cyber_guide_docx.py`
- Shared images and charts: `public/pdf-assets/`; QR codes: `output/assets/`

Verified current state:

- The Typst PDF is a valid, tagged, unencrypted US Letter PDF with 23 pages. It was produced by Typst 0.14.2.
- The DOCX is a valid OOXML package. Its latest LibreOffice render is `tmp/docs/rendered-v2/How-to-Get-Into-Cybersecurity-2026.pdf` with 22 pages.
- The 23-page and 22-page Writer renders have contact sheets under `tmp/docs/pages/` and `tmp/docs/pages-v2/`. These do **not** match the final Typst PDF hash and must not be treated as visual proof for `output/pdf/How-to-Get-Into-Cybersecurity-2026.pdf`.
- The latest Writer contact sheet has been reviewed at overview scale with no obvious clipping or overlap. Full-size, page-by-page QA of both final formats remains required.

## Image Generation Status

`belt` authentication is working. GPT-Image-2 task `3bd4gnhrxxatd9jcdjnmx6pwrk` completed successfully and produced:

- `tmp/docs/cover-illustration-gpt-image-2.png`
- Actual size: 1024 x 1024, despite requesting 1024 x 1536
- Visual review: matches the three-career-changer, branching cyber-path concept and preserves generous title space

This is a candidate only. It has not replaced `public/pdf-assets/cover-illustration.png` and is not referenced by the current Typst cover, which uses the shield logo and waitlist QR code. Decide on cropping/layout before integrating it.

The global `ai-image-generation` skill at `~/.agents/skills/ai-image-generation/SKILL.md` was updated and validated. It now requires authentication/balance checks, single-task monitoring, local persistence, dimension checks, and in-context visual inspection. The installed `belt` binary still advertises an update from 1.15.7 to 1.15.23; run `belt update` before depending on newer flags.

## Rebuild Commands

Run from the repository root:

```bash
typst compile --root . \
  output/doc/How-to-Get-Into-Cybersecurity-2026.typ \
  output/pdf/How-to-Get-Into-Cybersecurity-2026.pdf

pandoc output/doc/How-to-Get-Into-Cybersecurity-2026.md \
  -o tmp/docs/How-to-Get-Into-Cybersecurity-2026-raw.docx

python3 scripts/style_cyber_guide_docx.py \
  tmp/docs/How-to-Get-Into-Cybersecurity-2026-raw.docx \
  output/doc/How-to-Get-Into-Cybersecurity-2026.docx \
  public/pdf-assets/logo-shield.png \
  output/assets/qr-waitlist.png
```

Render the latest DOCX with a fresh LibreOffice profile, then render both PDFs to PNGs with `pdftoppm` for visual QA. Keep PDF and DOCX render directories separate and label them clearly.

## Next Steps

1. Decide whether to use the GPT-Image-2 cover candidate; preserve the existing asset until explicitly replacing it.
2. Reconcile the 23-page Typst PDF and 22-page DOCX render to confirm the difference is pagination only and no content is missing.
3. Render the current `output/pdf/` PDF into a fresh directory and inspect every page at full size.
4. Re-render the final DOCX and inspect every page at full size, including tables, QR codes, headers, footers, and page numbers.
5. Rebuild both formats after any correction and retain editable source plus final PDF for delivery.
6. Validate public links and scan each QR code before publishing or committing the guide.

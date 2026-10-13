# Project Handover

**Updated:** October 13, 2026
**Repository:** `itrimble/Cybersecurity-Training-Links` (the name is stale; see README)
**Working folder:** `~/projects/remnantsecurity.com`
**Branch / HEAD:** `main` / `0f83ed2`

Supersedes the August 3 handover, which described work that had not yet been
committed. That work has now shipped.

## State

The 90-day career plan funnel is **live**. It was written on `f021661`, 19
commits behind `main`, and sat uncommitted in a working tree on one machine
until 2026-10-13. It was rebased onto `8ab6d86` rather than merged, because
merging the tree directly would have deleted the six sections `main` had
gained since — Lectern, Support, Privacy, AppsBooks, BuiltStrip, About —
along with PostHog and the OKLCH overhaul.

What shipped:

- `CareerPlanSection` renders after `ValuePropsSection`, at `#plan-builder`.
- The hero keeps its original headline and primary CTA; "Build my 90-day plan"
  was added as a secondary button.
- `LeadMagnetSection` and `WaitlistSection` post to the academy API via
  `src/lib/academy.ts`. **The ConvertKit account secret is no longer in the
  bundle.** See `SECURITY.md`.
- The 25-page 2026 roadmap PDF is served; previously the lead magnet promised
  a download that did not exist in the repo.
- PDF build sources moved out of `public/` into `pdf-source/`.
- `SocialProofSection` remains deliberately unrendered.

A recovery point for the original uncommitted tree is on the branch
`snapshot/career-plan-funnel-20261013`. It is for reference only — merging it
would undo the above.

## Outstanding

1. **Rotate the Kit `api_secret`.** Still not done. The deployed site no
   longer uses it, so rotating will not break the forms.
2. **Run the full release gate** — `CAREER_PLAN_QA_EMAIL=… npm run
   release:verify`. The five bundle assertions were verified by hand against
   the live site; the live-API half has not been run.
3. **The funnel has not been clicked through in a browser since deploy.**
   The seven questions, scoring, localStorage resume and Markdown download
   all have backend dependencies worth exercising once.
4. **The old folder** `~/projects/Cybersecurity-Training-Links` is still in
   place and untouched, as a fallback. Retire it once this folder has proven
   itself.

## Notes for whoever is next

- No PR checks, `main` unprotected. Run `npm run lint && npm run build`
  yourself.
- `core.fileMode=false` is set deliberately; without it a copy through the
  NAS mount shows ~36 phantom mode-only changes.
- The three book projects, `output/` and `backup/` in the old folder are not
  website files and are gitignored now.

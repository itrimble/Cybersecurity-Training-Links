# Project Handover

**Updated:** October 13, 2026
**Repository:** `itrimble/Cybersecurity-Training-Links` (the name is stale; see README)
**Working folder:** `~/projects/remnantsecurity.com`
**Branch / HEAD:** `main` / `d450d7f`

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

Two further deploys followed on the same day:

- `01524d9` — the site calls `academy.remnantsecurity.com` instead of the
  `.vercel.app` origin, now that the academy's own domain resolves.
- `d450d7f` — **Blog** added to the site nav. The blog had been live with no
  entry point from the apex site since it launched.

## Branches

### Keep

**`snapshot/career-plan-funnel-20261013`** (`d380fca`) — **do not delete, do
not merge.**

It is a verbatim snapshot of the career-plan funnel as it existed uncommitted
in a working tree on 2026-10-13, taken *before* the rebase onto `8ab6d86`.
Written against `f021661`, which is 19 commits behind that base.

Why it is kept: the funnel that shipped is a *rebase* of this work, not this
work. If a behaviour turns out to have been lost or altered in the 88
auto-merged hunks, this branch is the only record of what the original
actually did. It is diff material, not a merge candidate — merging it would
delete the six sections `main` gained since `f021661`.

When it can go: once the funnel has been exercised end to end in a browser and
`release:verify` has passed against the live API — Outstanding items 2 and 3
below. Both are still open, so keep it until then.

### Unmerged — read before deciding

| Branch | Commits | Behind main | Last touched |
|---|---|---|---|
| `add-posthog` | 4 | 19 | 2026-08-26 |
| `add-posthog-lectern` | 2 | 18 | 2026-08-26 |
| `feat/polish-2026-10-10` | 1 | 7 | 2026-10-10 |

The two PostHog branches predate the OKLCH overhaul and analytics may already
have landed another way — check `public/posthog.js` on `main` before reviving
them.

### Deleted 2026-10-13

Six branches, each verified first as an ancestor of `origin/main` with **zero**
commits not already in `main`, and held by no worktree:

| Branch | Tip |
|---|---|
| `blog-nav-link` | `8491637` |
| `chore/contact-email` | `206f3d3` |
| `feat/apps-books-nav` | `426cadb` |
| `feat/clarity-about` | `91984c3` |
| `feat/impeccable-overhaul` | `eb0a0dc` |
| `claude/career-path-website-Uv0Ns` | `f021661` |

Every tip is still reachable from `main`, so nothing was lost. A pre-deletion
`git bundle --all` is at
`~/backups/remnant-branch-cleanup/20261013-213153/` alongside the SHA list.

**The rule used, and to reuse:** never delete on "looks merged". Require all
three of `git merge-base --is-ancestor <branch> origin/main`,
`git rev-list --count origin/main..<branch>` equal to 0, and no worktree
holding it. Bundle first.

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

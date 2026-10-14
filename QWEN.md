# QWEN.md

Guidance for Qwen Code in this repository.

This file previously carried a long project description written when the repo
was still called *Cybersecurity-Training-Links*. Its architecture section
listed an `App.tsx` render order that no longer exists (Hero → About → Training
→ Career Quiz → Curriculum → Certification → Interview → Tools → Books →
Waitlist) and referenced a `tailwind.config.ts` that the Tailwind v4 migration
removed. Rather than maintain a third divergent copy, it now delegates.

## Read these, in order

1. **[`AGENTS.md`](AGENTS.md)** — structure, commands, code style, testing,
   commit and PR conventions, content/asset boundaries, credential rules.
2. **[`docs/WEB-ESTATE.md`](docs/WEB-ESTATE.md)** — the thirteen properties
   under `remnantsecurity.com`, how each deploys, and the operations that cause
   unrecoverable damage. Required reading before any DNS, subdomain or deploy
   work. [`docs/estate.json`](docs/estate.json) is the machine-readable twin.
3. **[`CLAUDE.md`](CLAUDE.md)** — the current architecture summary, including
   the real `App.tsx` order and the data layer.
4. **[`SECURITY.md`](SECURITY.md)** — never put a key, token or secret in
   `src/`; everything there compiles into a public bundle.
5. **[`Handover.md`](Handover.md)** — current state, branch policy, open items.

## Commands

```bash
npm ci           # exact deps from package-lock.json (CI uses Node 20)
npm run dev      # Vite dev server, usually http://localhost:5173
npm run lint     # ESLint
npm run build    # tsc project check + production build to dist/
npm run preview  # serve the built output
```

## The three things that bite

- The Namecheap `dns_records_save` tool **replaces the entire DNS zone**, and
  the zone carries the Google Workspace MX and DKIM records. Always send the
  complete record set. See `docs/WEB-ESTATE.md` §4.
- `main` is unprotected and there are no PR checks. **Pushing is deploying.**
  `npm run lint && npm run build` is the only gate and you have to run it.
- Reproducing the deployed bundle needs the env var CI passes:
  `VITE_ACADEMY_URL=https://academy.remnantsecurity.com npm run build`.
  Without it the hash differs for identical source.

The GitHub repo is `itrimble/Cybersecurity-Training-Links`; the local folder is
`~/projects/remnantsecurity.com`. That mismatch is expected.

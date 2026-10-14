# GEMINI.md

Guidance for Gemini CLI in this repository.

This file previously held an auto-generated directory listing from 2026-03-01
that described the project under its old name and listed `.DS_Store` as a key
file. It was wrong for months. It now delegates instead, so there is one copy
of the truth to keep current.

## Read these, in order

1. **[`AGENTS.md`](AGENTS.md)** — structure, commands, code style, testing,
   commit and PR conventions, content/asset boundaries, credential rules.
2. **[`docs/WEB-ESTATE.md`](docs/WEB-ESTATE.md)** — the thirteen properties
   under `remnantsecurity.com`, how each deploys, and the operations that cause
   unrecoverable damage. Required reading before any DNS, subdomain or deploy
   work. [`docs/estate.json`](docs/estate.json) is the machine-readable twin.
3. **[`SECURITY.md`](SECURITY.md)** — never put a key, token or secret in
   `src/`; everything there compiles into a public bundle.
4. **[`Handover.md`](Handover.md)** — current state, branch policy, open items.

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

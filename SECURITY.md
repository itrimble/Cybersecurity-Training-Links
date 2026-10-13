# Security

## Rule: no provider credentials in this codebase

This is a static site. Everything in `src/` is compiled into a JavaScript
bundle that any visitor can download and read. A secret in this repository is
a published secret.

Form submissions go to the academy API, server-side, via `src/lib/academy.ts`.
That file resolves public URLs only. If you find yourself adding a key, a
token or a secret here, the answer is an endpoint in `remnant-academy`, not an
environment variable in this project.

`scripts/verify-career-plan-release.mjs` asserts the deployed bundle contains
no `api_secret`. Keep that assertion.

## Incident: exposed ConvertKit account secret

**Resolved in the bundle on 2026-10-13. Key rotation is a separate step.**

A hardcoded ConvertKit (Kit) `api_secret` was compiled into the public bundle
from `LeadMagnetSection.tsx` and `WaitlistSection.tsx`. It was the
**account-level** secret, not the public `api_key` — it authorises read and
write across the whole Kit account: subscribers, tags, sequences, broadcasts.

It was publicly downloadable from `https://remnantsecurity.com/assets/…js` from
at least 2026-10-10 until 2026-10-13.

Both call sites now post to the academy API and no credential ships to the
browser. Verified absent from the live bundle after deploy.

**Shipping that fix did not un-leak the key.** Anything served to a browser is
public forever. The key must be rotated in the Kit dashboard; until it is,
assume it is compromised.

## Reporting

Security issues: open a private advisory on the GitHub repository rather than
a public issue.

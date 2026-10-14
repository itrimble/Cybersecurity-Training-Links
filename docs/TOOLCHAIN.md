# Toolchain prerequisites

Companion to [`WEB-ESTATE.md`](./WEB-ESTATE.md), which maps the estate itself.
This file covers what you need *installed and authenticated* before any of it
is actionable.

**Read this first if this folder has been moved, cloned, or handed to a new
machine.** Nothing below lives in the repo, and none of it is discoverable
from the code. Without it an agent can read the whole estate map and still be
unable to change anything.

Nothing here is a secret, and nothing here should ever become one. Every
credential below lives in a credential store — Keychain, `gh`'s keyring, or
the CLI's own OAuth token store. **Do not put a token, key or password in this
repo, in a dotfile, or in an `.env`.** Config files hold URLs only.

### What you need

| Capability | Needed for | Check |
|---|---|---|
| `gh`, authenticated | Pages state, certificate repair, deploy status — `WEB-ESTATE.md` §3, §5, §8 | `gh auth status` |
| Node | Build, lint, release gate | `node -v` (v24 at time of writing; no `engines` pin) |
| **Namecheap MCP** | Reading and writing DNS (`WEB-ESTATE.md` §4) | see below |

`gh`'s token needs the **`repo`** scope — that is what the certificate repair
in `WEB-ESTATE.md` §5 writes through. The working token at time of writing
carried `repo`, `read:org`, `gist` and `admin:public_key`.

### The Namecheap MCP server

DNS for `remnantsecurity.com` is reached through an MCP server, not an API key
in a file:

```
https://mcp.namecheap.com/mcp     (transport: http)
```

It is **OAuth with dynamic client registration and PKCE** (`S256`). There is
no key to copy and no secret to store — the config entry is the URL and
nothing else, and the token lands in whichever credential store the CLI uses.
That is why adding it is safe to do anywhere, and why being added is not the
same as being usable.

Add it per CLI:

| CLI | Command | Sign in |
|---|---|---|
| claude | `claude mcp add --transport http --scope user namecheap https://mcp.namecheap.com/mcp` | `/mcp` in the TUI |
| codex | `codex mcp add namecheap --url https://mcp.namecheap.com/mcp` | opens a browser on add; else `codex mcp login namecheap` |
| gemini | `gemini mcp add -s user -t http namecheap <url>` | `/mcp auth namecheap` |
| qwen | `qwen mcp add -s user -t http namecheap <url>` | `/mcp auth namecheap` |
| opencode | `opencode mcp add namecheap --url <url>` | `opencode mcp auth namecheap` |
| grok | `grok mcp add -s user -t http namecheap <url>` | **cannot** — see below |

Use each CLI's own `mcp add`. Do not hand-edit the JSON; `~/.claude.json` is
over 100 KB and easy to corrupt.

### The three things that will catch you out

- **Tokens are per machine *and* per CLI.** Signing in on one CLI on one Mac
  proves nothing about any other. Across this fleet that is eighteen separate
  sign-ins. If the DNS tools are missing, the usual cause is not a broken
  config — it is that *this* CLI on *this* machine has never signed in.
- **`codex mcp add` opens a browser immediately.** Over SSH it hangs forever,
  because the OAuth callback is on the *remote* machine's `127.0.0.1`. On a
  remote host, append the two-line `[mcp_servers.namecheap]` block to
  `~/.codex/config.toml` by hand instead and sign in at that machine later.
  Appending a new `[table]` header at the end of a TOML file is always valid.
- **grok cannot do this OAuth flow at all.** `grok mcp add` accepts only
  static `--header` values and has no `login` subcommand; `grok mcp doctor`
  fails the handshake with `Auth required`. Storing a bearer token in
  `~/.grok/config.toml` would break the no-secrets-in-dotfiles rule, so grok
  stays configured-but-unauthenticated. **Do not use grok for DNS.**

### Confirming it actually works

Registration is visible in the config; authentication is not. Prove the chain
by calling a read-only tool and getting records back:

```sh
codex mcp get namecheap        # registration only
```

then, in an interactive session, call `dns_records_get` for
`remnantsecurity.com` and confirm it returns the full zone. Tools confirmed
present: `domains_list`, `domains_check_availability`, `dns_records_get`,
`dns_records_save`, `dns_records_delete`. **Read `WEB-ESTATE.md` §4 before
calling `save` — it replaces the entire zone, and the zone carries Ian's
email.**

### If the MCP is unavailable

The estate does not depend on it. Everything in `WEB-ESTATE.md` §4 can be
done in the **Namecheap web UI**, whose per-record editing has no replace-all
risk and is the safer option for a single record. The MCP buys speed, not
capability — an agent that cannot reach it should say so and hand the record
to Ian rather than improvise.

# Prism Shift website — isolated deployment root

Target: **https://prismshift.remnantsecurity.com**. This standalone static microsite
lives outside `public/` and the main React app so its deployment cannot replace the
existing remnantsecurity.com GitHub Pages artifact. No public download or store
release is claimed. Current copy labels the game as a non-commercial homebrew
project in development, with device/accessibility testing ongoing.

Local preview:

```sh
cd /Users/ian/projects/remnantsecurity.com/microsites/prismshift
python3 -m http.server 8767 --bind 127.0.0.1
```

Publication: copy this standalone static root into the existing
`/Users/ian/projects/prismshift-site` GitHub Pages repository. Preserve its CNAME,
support/privacy pages, robots and sitemap. Keep private docs outside the served
root. Do not alter the apex GitHub Pages workflow or DNS. `vercel.json` is an
unused original hosting proposal, not the current deployment configuration.

Current gates:
- Main site baseline rebuilt with `VITE_ACADEMY_URL=https://academy.remnantsecurity.com`;
  live and local asset hashes match (`index-WAKjas_O.js`, `index--HubJHRj.css`).
- Domain resolves and HTTPS is enforced on existing GitHub Pages hosting.
- Existing GitHub Pages target confirmed and used; no new hosting/DNS changes required.
- Desktop1440 and mobile390 full-page IAB captures are rendered; mobile has no horizontal viewport overflow and15 gallery entries. Gallery ArrowRight scrolling and native video playback/pause pass. Reduced-motion CSS is present, with runtime preference verification still open. See interaction-checks.md.
- Independent visual review requested one correction batch (metadata position, glyphs, naming, hover contrast, documentation). User approved the current layout. Independent finish review disposition ship applies to local visuals/media/documentation; scoped DESIGN.md and token sidecar are complete. Published and verified live at the scope recorded below.

Media provenance: `assets/capture-provenance.json` records actual current Debug
SpriteKit capture filenames, QA arguments, binary hash, source commit and timestamp.
The gallery uses compact iPhone screenshots (750×1334), with seeded autoplay and
tide suppressed. Labels are **material skin** names; the track labels inside the
screenshots retain the campaign names (e.g. Biolume/Bloom, Cosmic/Harmony).
Some captures include tutorial hints or transient clear effects. They are not
invented artwork and do not prove normal difficulty, performance or accessibility.
The Awakening video comes from the game's Oct13 visible-world simulator capture;
web encoding is720p H.264 with fast-start metadata. The playable preview adds the active game resource `SkinTracks/awakening/track.wav` as a single AAC soundtrack stream. Native video controls start, pause, seek, and mute both together; it is not a live SFX capture. The original silent recording remains available as the source asset. Brand art and OFL
Unbounded/Space Grotesk fonts are from the game. License files accompany fonts.

Backup before editing: `/Users/ian/backups/prismshift-website/20261014/repo.bundle`.
No live change has been made, so no production rollback is needed.

User accepted the current website layout on October 14, then requested soundtrack playback when pressing Play. The preview now includes Awakening music without autoplay.

## Authoritative hosting update — October14
The domain is now live on GitHub Pages from itrimble/prismshift-site at main/root. Current live HTML exactly matches that repository before replacement. Publish this user-approved static root into the existing Pages repository, preserving its CNAME, support.html, privacy.html, robots and sitemap. No Vercel project or DNS migration is needed. Earlier NXDOMAIN/auth notes above are historical; GitHub Pages is the current publication target.

Published approved composition to existing GitHub Pages target with commit839ad9d; workflow38617570950 completed successfully. Live HTML/styles/skins.js/soundtrack MP4 match publication files byte-for-byte. Live browser loads15 skin entries; native Play unmuted readyState4 and paired Pause (paused=true,time0.021189) pass. Support/privacy routes remain HTTP200 and unchanged in source. Live screenshot live-soundtrack.png. Rollback: git revert839ad9d && git push from /Users/ian/projects/prismshift-site. No DNS changes. Human listening and OS Reduce Motion runtime acceptance remain open.

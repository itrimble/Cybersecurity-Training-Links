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

Deployment: create a separate static hosting project rooted at
`microsites/prismshift`, with no build command; attach only
`prismshift.remnantsecurity.com`. Do **not** change `public/CNAME` or the apex
GitHub Pages workflow. The proposed Vercel headers are in `vercel.json`.

Current gates:
- Main site baseline rebuilt with `VITE_ACADEMY_URL=https://academy.remnantsecurity.com`;
  live and local asset hashes match (`index-WAKjas_O.js`, `index--HubJHRj.css`).
- Game subdomain does not currently resolve. Nameservers are registrar-servers.com.
- Existing Vercel CLI token was rejected, but read-only Vercel connector authentication works. An isolated hosting project and DNS configuration remain open.
- Desktop1440 and mobile390 full-page IAB captures are rendered; mobile has no horizontal viewport overflow and15 gallery entries. Gallery ArrowRight scrolling and native video playback/pause pass. Reduced-motion CSS is present, with runtime preference verification still open. See interaction-checks.md.
- Independent visual review requested one correction batch (metadata position, glyphs, naming, hover contrast, documentation). User approved the current layout. Independent finish review disposition ship applies to local visuals/media/documentation; scoped DESIGN.md and token sidecar are complete. Deployment remains pending.

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

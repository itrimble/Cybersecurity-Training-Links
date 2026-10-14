# Local browser checks — October14

IAB1440×900 and390×844. Full-page captures are saved as desktop-final.png and
mobile-final.png, after visiting the gallery to settle lazy image loading and
returning to the document top. The initial post-reload mobile recapture contained
unpainted lazy images and was replaced; it was not sent as valid final evidence.

- Watch the game / Explore / The skins / Back to top update their fragment and scroll.
- Gallery is focusable with a visible cyan outline. ArrowRight moved scrollLeft from0
  to40; actual visible screenshots rendered.15 figure entries are present.
- Native video Space started playback: paused=false,readyState4,duration21.591677s.
  Space paused it again. Footage is explicitly silent and never autoplays.
- No loaded broken images; mobile documentWidth390 equals viewport390.
- Desktop documentWidth1440 equals viewport1440;8 gallery images had loaded after
  viewing the strip (remaining offscreen entries are lazy).
- All local HTML media/link targets and all15 gallery asset filenames exist.
- Main site npm lint and build pass. Main site's built CSS/JS names still exactly
  match the deployed baseline; no main-site source/deployment file was edited.
- One detector pass found skip-link hover contrast; .skip:hover now preserves the
  dark text on its white background. No second detector was run. Reviewer can inspect
  the corrected selector and screenshot evidence. Initial report is retained.
- Reduced-motion CSS disables smooth scrolling and snap. Runtime OS preference
  override was not exercised; no user-wide accessibility setting was changed.

Hosting/DNS remains unverified and undeployed. No4K60 or physical-controller proof
is inferred from this website review.

## Soundtrack preview — October 14
Native Play starts the video unmuted at volume1 with readyState4; playback advanced to10.13 seconds. Native Pause stopped playback. ffprobe confirms exactly one AAC audio stream and one H.264 video stream, with matching21.591678-second duration. This proves browser playback state and media contents, not a human listening acceptance. The active Awakening track is embedded, so audio cannot continue independently after video pause. Screenshot: soundtrack-preview.png.

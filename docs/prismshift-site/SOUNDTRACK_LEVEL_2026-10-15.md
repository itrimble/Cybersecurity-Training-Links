# Website soundtrack matches default game playback — October15, MBP

Published at https://prismshift.remnantsecurity.com/#play, publisher commit `a2a5e81b9b3f6d2a74b6ab8ac045d69f91c646c0`. GitHub Pages run38736733875 completed successfully. The maintained source is `microsites/prismshift` in `/Users/ian/projects/remnantsecurity.com`; publication is the existing `/Users/ian/projects/prismshift-site` GitHub Pages repo. No apex publication, DNS, CNAME, support/privacy copy or layout change.

## Finding and change

The previous preview used the correct Awakening recording at its raw source level, rather than the game's calibrated playback gain. It measured−18.95LUFS/−2.52dBTP. The revised preview uses the already validated native decoded-buffer export from the game's song calibration, track gain0.5700505376 ×Music0.8 ×Master0.9. Encoded output is−26.69LUFS/−10.22dBTP, about7.7dB lower. This aligns preview music with the game's default music gain, not a promise about every browser/device's physical volume.

The native export repeats to cover the unchanged21.591678s footage. H.264 packet payload SHA256 is identical before/after: `5ad039387659d5c72e016a452691cce4f1ac6df30f23cb38312a89f90c3441b9`. Only the AAC audio is rebuilt, stereo44.1kHz/192kbps. There is one video stream and one audio stream, no autoplay, no replacement footage or live SFX claim. Caption states the music's default level and keeps the October13 development-footage/no-live-SFX disclosure. A content-hash query version avoids stale cached video when the new HTML loads.

The public soundtrack provenance now correctly names `SkinTracks/awakening/track.wav` and records its validated source hash, native-export hash, gain chain, loop length, calibration revision and current preview hash. Current MP4 SHA256: `3cc62348732d6778e5df9f485616a8421a0b9daf990bc4f0c9c8b2bf4b290ecc`.

## Verification

- Before editing, source/publishing checkout/live bytes matched for HTML/CSS/gallery JS/preview/provenance; video range request returned206 and the requested1024bytes.
- Timestamped file backups and complete Git bundles for both repositories: `/Users/ian/backups/prismshift-web-soundtrack/20261015-073642/`. Publisher bundle verified complete.
- Existing static publisher requires no build. Maintained-source repo lint/build also pass, with the configured academy URL; apex prerender succeeds with17565crawler-visible characters/99links. Logs `/tmp/prismshift-web-apex-{lint,build}-oct15.log`. No apex build output was committed or deployed.
- Full static-tree preflight: no added/removed served files; only `index.html`, preview MP4 and soundtrack provenance changed. Styles/gallery/capture assets preserved.
- Local native-browser Play/Pause pass with unmuted playback and current versioned source. On live, plain navigation initially reused cached old HTML; an explicit reload fetched the new caption/source. Fresh live initial state paused at0; Play produced unmuted advancing playback; Pause stopped at16.082s. Exactly one player and15 gallery cards remain. The temporary verification tab was closed.
- Live HTML/CSS/gallery JS/MP4/provenance/support/privacy match local publishing bytes. All15gallery images return200 with image content type. Saved report `/tmp/prismshift-web-live-verify-oct15/report.json`, mirrored as local verification artifact.
- `live-browser.jpg` shows the deployed player and updated disclosure. Audio encoding and browser state are verified; no human listening preference/fatigue acceptance or mobile/physical-TV audio claim is inferred.

Reproduce media rebuild from the retained native export: `ffmpeg -i old-preview.mp4 -stream_loop -1 -i /tmp/prismshift-songs-oct15/exports/01_awakening.wav -t 21.591678 -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k -movflags +faststart new-preview.mp4`. Provenance/hash/cache-version must be refreshed after re-encoding.

Rollback publication from `/Users/ian/projects/prismshift-site`: `git revert a2a5e81 && git push origin main`, then verify Pages/live bytes again. Backups retain prior files and full history. The maintained source can be reverted independently to keep both copies consistent.

Open broader work: current skin-atlas publication review, social share-card installation (the SEO note's prepared scratch image was absent at its stated path), physical/controller/audio acceptance and sustained4K60/1080p60. These are not closed by a volume correction. Physical-device hold remains in force.

Local review screenshot: `/Users/ian/projects/prismshift/docs/verification/oct15/website-soundtrack/live-browser.jpg`.

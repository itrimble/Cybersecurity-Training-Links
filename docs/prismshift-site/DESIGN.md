---
name: Prism Shift website
description: Build the light. Break the darkness.
colors:
  ink: "#f5f3ff"
  quiet: "#c1bdd9"
  cyan: "#69dcff"
  violet: "#ad8af4"
  ground: "#09071d"
  line: "#37304e"
typography:
  display:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(34px,4.2vw,64px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(28px,3.5vw,48px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.025em"
  title:
    fontFamily: "Space, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Space, sans-serif"
    lineHeight: 1.65
  intro:
    fontFamily: "Space, sans-serif"
    fontSize: "clamp(19px,1.7vw,24px)"
    lineHeight: 1.5
rounded:
  action: "100px"
  hero-capture: "20px"
  video: "16px"
  gallery-capture: "10px"
spacing:
  gutter: "6vw"
  gallery-gap: "24px"
  section-desktop: "90px 0"
  section-mobile: "58px 0"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.ground}"
    rounded: "{rounded.action}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "#bcefff"
    textColor: "{colors.ground}"
  gallery-capture:
    rounded: "{rounded.gallery-capture}"
    width: "210px"
---

# Design System: Prism Shift website

## Overview

**Creative North Star: "Build the light. Break the darkness."**

The game's crystal identity carries into a quiet, media-led website: an indigo field, cyan light, original prism art, and real portrait captures. Reused game fonts make it recognizable while restrained framing leaves the board and materials in view.

This system records the user-approved local website preview, scoped to microsites/prismshift. It is independent of the main Remnant Security site's tokens and does not establish production deployment or human musical acceptance.

**Key Characteristics:**

- Original crystal art and authentic gameplay
- Indigo foundation with cyan light
- Game fonts with readable body copy
- User-controlled media and horizontal material gallery

## Colors

The frontmatter retains the exact CSS custom-property names and values from `microsites/prismshift/styles.css`.

### Primary

- **Cyan light** (`cyan`): headline emphasis, primary action, links on hover, and visible keyboard focus.

### Secondary

- **Violet** (`violet`): horizontal gallery scrollbar accent.

### Neutral

- **Indigo ground** (`ground`): page foundation and primary-action text.
- **Light ink** (`ink`): headings, navigation and body foreground.
- **Quiet lavender** (`quiet`): supporting descriptions and captions.
- **Muted divider** (`line`): section and footer separation.

**The Shared Light Rule.** Cyan highlights both the game's light and the page's actionable focus.

## Typography

Display uses self-hosted Unbounded Bold; body and controls use self-hosted Space Grotesk Regular/SemiBold registered as `Space`. Both fall back to sans-serif. The supplied OFL files accompany the fonts.

The frontmatter records the actual heading and introduction ramps. Gameplay paragraphs use 18px; section descriptions use 20px, reducing to 18px on mobile. Gallery names use 17px semibold, with 13px regular material descriptions. Supporting captions use 13–14px. No additional font family or universal spacing scale is introduced.

## Layout

Header, main and footer share a 1360px maximum width and the recorded viewport gutter. Desktop hero columns are 1.25fr/.75fr; gameplay columns are .85fr/1.15fr. Section introductions and accessibility content use paired columns. At 760px and below these content grids become one column, navigation wraps with the header, and footer items wrap.

The real phone capture is capped at 365px on desktop and 280px on mobile. Gallery figures scroll horizontally with 210px captures, reducing to 180px on mobile. The strip has a focusable region and a separate all-fifteen-image link, with a noscript explanation. Reduced Motion switches smooth anchor scrolling to auto and removes gallery snapping.

## Elevation & Depth

The dark field and authentic crystal artwork provide depth. Section borders separate the editorial content; the hero phone capture has a soft shadow (`0 24px 60px #0009`). There is no general elevated-card system or ornamental page animation.

## Shapes

The pill primary action, gently rounded portrait capture, video and gallery capture use the radii recorded in frontmatter. Images keep their actual portrait proportions. The video uses a 750/1334 aspect ratio, object-fit contain, and a dark backing so footage is not cropped.

## Components

### Actions and navigation

“Watch the game” and “Explore the fifteen skins” are working local anchors. The primary action uses cyan fill with dark text and a paler cyan hover fill. Ordinary links change to cyan on hover. Links, video and the focusable gallery expose a 3px cyan focus outline with a 6px offset. The skip link enters view on focus. Header navigation names game, skins and accessibility content; footer links return to top and the existing Remnant site.

### Captures and gallery

Original BrandPrism art and actual development frames remain the identity assets. `skins.js` generates fifteen figures with lazy-loaded portrait images, descriptive alt text, material names and secondary material descriptions. Material labels can differ from campaign names visible in the frame; public gallery copy discloses that distinction and seeded QA play with tide suppressed. The combined atlas remains a fallback.

### Soundtrack-bearing gameplay

The native HTML video uses `controls`, `playsinline` and metadata preload, with no autoplay. Its source is `assets/awakening-gameplay-soundtrack.mp4`, and the poster is the actual Awakening capture. Native Play/Pause, seek and mute operate the video and its added Awakening soundtrack together. The track comes from the active game resource and is added to October 13 development footage; the preview does not contain live gameplay SFX. Unsupported browsers receive a direct recording link. Control appearance follows the browser, not a custom player design.

**The Visitor Starts the Sound Rule.** Playback begins only after a visitor action; the soundtrack disclosure stays beside the recording.

## Do's and Don'ts

### Do:

- **Do** reuse authentic game captures and accompanying provenance.
- **Do** retain visible keyboard focus and the gallery’s combined-image fallback.
- **Do** keep soundtrack playback under the visitor’s control.

### Don't:

- **Don’t** autoplay the gameplay or soundtrack.
- **Don’t** describe the added Awakening track as live gameplay sound effects.
- **Don’t** invent a public download, release date, production deployment, or musical acceptance.

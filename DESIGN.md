---
name: movie-invitation
description: A poster-led watercolor cinema keepsake told through an envelope, pale paper, and a promise ticket.
colors:
  island-ink: "#24567a"
  island-ink-soft: "#3e6f91"
  island-sky: "#eaf6fb"
  water-blue: "#178fdd"
  water-blue-hover: "#087fc9"
  pale-paper: "#fafcf7"
  petal-gold: "#f4b52f"
  apricot-warmth: "#f58b42"
  pink-haze: "#e8a9c1"
  waterline: "#8ecbec"
typography:
  display:
    fontFamily: "var(--font-noto-serif-sc), Songti SC, STSong, serif"
    fontSize: "clamp(1.72rem, 5.5vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.42
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "var(--font-noto-serif-sc), Songti SC, STSong, serif"
    fontSize: "clamp(2rem, 8vw, 2.3rem)"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.025em"
  body:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "0.96rem"
    fontWeight: 650
    lineHeight: 1.5
    letterSpacing: "0.08em"
rounded:
  paper-inset: "11px"
  artifact: "14px"
  paper: "16px"
  full: "999px"
spacing:
  paper-inset: "7px"
  page-x: "16px"
  page-x-wide: "24px"
  paper-x: "24px"
  paper-y: "28px"
  safe-y: "max(24px, env(safe-area-inset-top))"
components:
  button-primary:
    backgroundColor: "{colors.water-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.artifact}"
    padding: "0.76rem 1.45rem"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.water-blue-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.artifact}"
    padding: "0.76rem 1.45rem"
    height: "50px"
  button-hesitation:
    backgroundColor: "{colors.pale-paper}"
    textColor: "{colors.island-ink-soft}"
    rounded: "{rounded.artifact}"
    padding: "0.76rem 1.45rem"
    height: "50px"
  paper-card:
    backgroundColor: "{colors.pale-paper}"
    textColor: "{colors.island-ink}"
    rounded: "{rounded.paper}"
    padding: "28px 24px"
  movie-cover:
    backgroundColor: "#ccebf7"
    rounded: "{rounded.artifact}"
    width: "158px"
---

# Design System: movie-invitation

## Overview

**Creative North Star: "The Island Watercolor Ticket"**

This system turns the supplied film poster into a small cinema keepsake. Island-sky blue fills the scene; vivid water blue carries choice and movement; gold, apricot, and pink arrive as petal-like warmth on pale paper. The poster-derived raster texture is part of the material itself, appearing in the atmosphere, envelope, correspondence, and promise ticket so the world feels painted rather than generically romantic.

The experience has one positive outcome with room to hesitate: open the private invitation, play with a refusal control that never exits the scene, accept the film, continue into a water-lit moonlit walk, then store the promise ticket. Each route is one quiet tableau, and the first viewport is reserved for a single large watercolor-blue envelope with a gold seal and one opening action.

**Key Characteristics:**

- Poster-derived watercolor material across the field, envelope, papers, and ticket.
- Island-sky atmosphere with water-blue controls and ink.
- Golden petals, apricot warmth, and soft-pink haze used as small living accents.
- Song-style serif invitation text paired with a clear Chinese sans serif.
- Centered correspondence objects with soft, blue-tinted lift.
- One visually dominant affirmative action plus a non-terminal hesitation branch in the two question chapters.

## Colors

The palette is lifted from the poster: cool island water carries the structure while sunlit floral colors appear in small, memorable gestures.

### Primary

- **Water Blue:** The only strong action color, used for affirmative controls, focus treatment, checks, walking light, and the most active water marks.
- **Island Ink:** The main text and graphic color; it keeps reading gentle while remaining distinct against pale paper and sky.

### Secondary

- **Petal Gold:** The envelope seal, ticket stripe, diamonds, petals, and small moments of promise.
- **Apricot Warmth:** Acceptance stamp, farewell accents, and warmer petals.
- **Pink Haze:** Ambient watercolor bloom, ticket stripe, and sparse petal accents.

### Neutral

- **Island Sky:** The global field and focus-ring offset surface.
- **Pale Paper:** The invitation, question, and promise-ticket material.
- **Soft Island Ink:** Supporting prose, scene labels, and quieter metadata.
- **Waterline:** Hairlines, paper corners, and correspondence dividers.

### Named Rules

**The Poster-Palette Rule.** Blue owns the field and action; gold, apricot, and pink punctuate it as petals and keepsake details, never as a generic romance gradient.

**The Water-Blue Action Rule.** Every chapter advances through the same vivid blue affirmative control.

## Typography

**Display Font:** Noto Serif SC with Songti SC, STSong, and serif fallbacks  
**Body Font:** PingFang SC with Hiragino Sans GB, Microsoft YaHei, and sans-serif fallbacks

**Character:** The serif gives the invitation and promise the gravity of a handwritten film keepsake. The sans serif handles prompts, supporting sentences, ticket metadata, and actions with clean contemporary legibility.

### Hierarchy

- **Display** (500, fluid from `1.72rem`, 1.42): The invitation headline and film title, set with compact negative tracking.
- **Headline** (500–600, fluid around `2rem` to `2.3rem`, 1.35–1.5): The walk question, promise, and stored confirmation.
- **Title** (400, `1.12rem` to `1.15rem`): Film-title notation on paper and ticket, with slight positive tracking.
- **Body** (400, `0.94rem` to `1rem`, 1.75): Brief supporting copy held to a compact reading measure.
- **Label** (400–650, `0.7rem` to `0.96rem`, `0.08em` to `0.18em`): Opening prompts, ticket numbers, scene labels, promise rows, and actions.

### Named Rules

**The Keepsake Hierarchy Rule.** Serif type carries invitation and promise; sans-serif type carries direction, context, and action.

## Layout

Every route is a centered, full-height scene on a `100svh` field with safe-area-aware vertical padding. The shell begins with `16px` horizontal padding and expands to `24px` at `640px`. The invitation and question stay within `390px`; the closing scene may expand to `520px`, while the ticket itself stays within `370px`.

The closed envelope sits alone inside a `390px` stage. Opening grows the stage to `850px` on small screens and `880px` from `640px` so the letter and its hesitation arena can rise into the same composition. Short desktop viewports scale the envelope scene to `0.86`; the promise scene scales to `0.9`. The movie cover keeps a `3:4` ratio and grows from `158px` to `172px` at the small breakpoint.

Spacing is sparse and symmetrical. Small marks use roughly `8–20px` gaps; narrative beats use roughly `24–32px`. The affirmative control remains centered, at least `154px` wide, and at least `50px` high.

**The One-Tableau Rule.** Each route reads as a single piece of cinematic correspondence, never as a landing-page stack or an app screen.

**The Sealed-First Rule.** Before opening, the envelope and its quiet prompt are the only content and action in the viewport.

## Elevation & Depth

Depth combines real poster-derived raster material with translucent watercolor gradients, clipped paper forms, and cool ambient shadows. The result should feel like painted paper floating over an island-sky wash. It is neither flat UI nor glossy glass.

### Shadow Vocabulary

- **Paper Lift** (`0 26px 64px rgba(36, 86, 122, 0.20), 0 4px 12px rgba(36, 86, 122, 0.08)`): Invitation and question paper.
- **Ticket Lift** (`0 28px 68px rgba(36, 86, 122, 0.22), 0 5px 14px rgba(36, 86, 122, 0.09)`): The closing keepsake.
- **Envelope Lift** (`0 29px 56px rgba(26, 111, 158, 0.25)`): The first-viewport focal object.
- **Poster Lift** (`0 17px 38px rgba(25, 116, 165, 0.27), 0 4px 10px rgba(244, 181, 47, 0.16)`): The supplied movie artwork.
- **Action Lift** (`0 12px 30px rgba(23, 143, 221, 0.28)`): The affirmative control.

### Named Rules

**The Painted-Material Rule.** Poster texture must remain visibly integrated with atmosphere and correspondence surfaces; gradients alone are not the visual world.

**The Blue-Shadow Rule.** Shadows are diffuse and water-tinted, with occasional gold warmth around poster or seal details.

## Shapes

The form language is soft but specific: `16px` paper corners, `14px` controls and poster frames, an `11px` inset paper rule, and full circles for the gold seal and promise checks. The envelope is constructed from crisp polygonal folds; the promise ticket adds paired circular notches and a three-color waterline.

Watercolor petals use asymmetric leaf silhouettes rather than hearts or confetti. Diamonds, hairlines, footprints, dashed promise rules, and ticket notches provide the small geometry of cinema correspondence.

**The Petal-Not-Heart Rule.** Romance is expressed through poster-derived petals, water, paper, and sequence—never through stock heart iconography.

## Components

### Buttons

The affirmative button is bright and visually dominant; the pale hesitation button carries the playful secondary interaction without creating a second destination.

- **Shape:** Gently squared corners (`14px`), at least `154px` wide and `50px` high, with `0.76rem 1.45rem` padding.
- **Primary:** Water Blue with white text, strong label weight, and Action Lift.
- **Hover / Focus:** Hover rises `2px`, deepens to Water Blue Hover, and sends a soft white sheen across the surface. Press scales to `0.96`; keyboard focus uses a `2px` Water Blue outline with a `4px` offset.
- **Disabled:** Retains the successful busy label and uses a wait cursor while the micro-scene completes.
- **Hesitation:** Pale Paper with Soft Island Ink, a Waterline border, and a soft blue shadow. Its four labels progress from refusal to reflection; the first three clicks land on safe alternating positions with an elastic spring and small poster-colored petals. The final label remains visible and fixed.
- **Hesitation Note:** Later clicks unfold a compact painted-paper note for `3.6s`; it never navigates and always points back to the blue affirmative action.

### Cards / Containers

The invitation, walk question, and promise ticket are painted paper artifacts rather than generic cards.

- **Corner Style:** Soft paper corners (`16px`); invitation and question include a fine inset frame (`7px` inset, `11px` radius).
- **Background:** Pale Paper layered with the poster-derived watercolor texture, translucent paper wash, and a small golden bloom.
- **Shadow Strategy:** Paper Lift for invitation and question; the deeper Ticket Lift for the closing keepsake.
- **Internal Padding:** Approximately `24–32px` horizontally and `28–56px` vertically, matched to the density of each chapter.

### Movie Cover

The supplied poster is the visual source and the cinematic artifact inside the letter. It stays replaceable through the isolated cover component, uses a `3:4` ratio, a `14px` radius, Poster Lift, and a restrained blue glaze. Hover scales the image only to `1.025` over `700ms`.

### Sealed Envelope

The signature opener is a large blue envelope built from layered watercolor texture, translucent sky-to-water gradients, precise folded polygons, and a `48px` gold seal. The whole envelope is the semantic button. Opening rotates the flap in 3D, releases a small petal burst, lowers the envelope, and raises the invitation paper.

### Walking Path

The second chapter bridges choice to promise with four alternating blue footprints over a soft water shimmer. Gold heels and occasional pink toe marks carry the poster palette into the moonlit walk without adding literal scenery.

### Promise Ticket

The closing keepsake is a notched pale-paper ticket with a blue-gold-pink waterline, fixed commemorative number, two checked promises, and one blue “store” action. Activating it folds the ticket downward into a small sealed envelope, gathers the surrounding petals, and replaces it with the stored confirmation.

### Motion

The shared reveal easing is `cubic-bezier(0.22, 1, 0.36, 1)`. Page and object reveals generally run between `650ms` and `820ms`; the walk sequence extends to `1120ms` before navigation. Primary buttons use a spring (`stiffness: 420`, `damping: 26`). Hesitation landings use a more elastic bounded spring (`stiffness: 350–410`, `damping: 14–18`) to communicate relocation. Reduced-motion preference keeps the label and note states but collapses movement to `10ms` and holds the button centered.

**The Story-Motion Rule.** Motion performs the ritual—open, accept, walk, store—and does not exist as unrelated spectacle.

## Do's and Don'ts

### Do:

- **Do** preserve the first viewport as one floating watercolor-blue envelope with a gold seal and the quiet “轻点开启邀请” prompt.
- **Do** keep the outcome positive-only while preserving the visible hesitation control on both question chapters.
- **Do** keep the supplied poster and derived watercolor raster visibly present across atmosphere, envelope, papers, and ticket.
- **Do** use Water Blue for the affirmative action and Pale Paper for the non-terminal hesitation control.
- **Do** keep every hesitation landing inside its bounded arena and keep the final “那我再想想” control visible.
- **Do** maintain semantic buttons, visible keyboard focus, `50px` touch targets, safe-area padding, and reduced-motion behavior.
- **Do** preserve the real film title, corrected poster description, fixed ticket number, and absence of an invented date.

### Don't:

- **Don't** reintroduce violet as the system color; the shipped world is island blue, water blue, gold, apricot, pink, and pale paper.
- **Don't** let hesitation navigate, disappear, become an actual refusal result, or silently count as acceptance.
- **Don't** turn the experience into a generic romance card with hearts, roses, red gradients, or sugary ornament.
- **Don't** replace the narrow centered tableaux with navigation, dashboard chrome, feature sections, or commercial event-page patterns.
- **Don't** flatten the world into plain gradients or generic white cards; the poster-derived watercolor material is structural.
- **Don't** add visual noise around the closed envelope; its isolation makes the opening ceremonial.

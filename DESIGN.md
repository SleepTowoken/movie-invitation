---
name: movie-invitation
description: A private cinema invitation told as quiet, tactile correspondence.
colors:
  violet-ink: "#303954"
  violet-ink-soft: "#69738f"
  action-violet: "#5865a8"
  action-violet-hover: "#4d599a"
  mist-paper-field: "#eef3ff"
  lavender-haze: "#eeeafd"
  letter-paper: "#fbfcff"
  envelope-blue: "#cbd6f3"
  correspondence-line: "#aeb6d1"
typography:
  display:
    fontFamily: "var(--font-noto-serif-sc), Songti SC, STSong, serif"
    fontSize: "clamp(1.72rem, 5.5vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.42
    letterSpacing: "-0.025em"
  body:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "0.94rem"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "normal"
  label:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.16em"
rounded:
  mark: "7px"
  paper-inset: "11px"
  cover: "14px"
  paper: "16px"
  full: "999px"
spacing:
  touch-edge: "16px"
  page-x: "16px"
  paper-inset: "7px"
  paper-x: "24px"
  paper-y: "28px"
  safe-y: "max(24px, env(safe-area-inset-top))"
components:
  button-primary:
    backgroundColor: "{colors.action-violet}"
    textColor: "#ffffff"
    rounded: "{rounded.cover}"
    padding: "0.72rem 1.2rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.action-violet-hover}"
    textColor: "#ffffff"
    rounded: "{rounded.cover}"
    padding: "0.72rem 1.2rem"
    height: "48px"
  button-secondary:
    backgroundColor: "rgba(255, 255, 255, 0.72)"
    textColor: "#59617b"
    rounded: "{rounded.cover}"
    padding: "0.72rem 1.2rem"
    height: "48px"
  letter-paper:
    backgroundColor: "{colors.letter-paper}"
    textColor: "{colors.violet-ink}"
    rounded: "{rounded.paper}"
    padding: "28px 24px"
  movie-cover:
    backgroundColor: "#dce5fa"
    rounded: "{rounded.cover}"
    width: "138px"
---

# Design System: movie-invitation

## Overview

**Creative North Star: "The Private Cinema Letter"**

This system makes a personal invitation feel like cinematic correspondence discovered in a quiet, self-contained world. Mist-blue paper, violet ink, and exact envelope construction make the interaction ceremonial without turning it into a generic romantic card. The mood is gentle, minimal, and refined; intimacy comes from restraint, sequence, and material detail rather than hearts, roses, or decorative sentimentality.

The experience follows one small narrative arc: open the sealed letter, choose the movie, ask to walk home, and remember the promise. Its first viewport belongs to one floating sealed envelope and a quiet prompt. Later surfaces retain the same paper, ink, ticket, and film vocabulary so the three routes read as chapters of one correspondence.

**Key Characteristics:**

- Mist-blue and pale-violet atmosphere with white paper at the center.
- Violet-blue ink instead of black, pink, or red.
- Song-style serif display text paired with a restrained Chinese sans serif.
- Precise envelope folds, inset rules, diamonds, film perforations, and hairline marks.
- Soft ambient depth and slow, purposeful reveals.
- One obvious affirmative action with a playful, non-coercive refusal interaction.

## Colors

The palette behaves like cool stationery under projector light: low-contrast atmospheric fields support crisp violet-blue correspondence marks and a single stronger action color.

### Primary

- **Action Violet:** The affirmative choice, seal family, and interactive emphasis. Its deeper hover partner confirms intent without changing the restrained tone.

### Secondary

- **Envelope Blue:** The material base for the envelope back and the starting point for its layered pale-blue folds.
- **Lavender Haze:** The violet edge of page gradients and ambient light, used as atmosphere rather than decoration.

### Neutral

- **Violet Ink:** Display copy, film marks, and the strongest editorial details; it replaces pure black throughout the correspondence.
- **Soft Violet Ink:** Supporting prose and quiet labels, preserving hierarchy without washing out readability.
- **Mist Paper Field:** The global canvas and browser background.
- **Letter Paper:** The near-white reading surface for invitations and questions.
- **Correspondence Line:** Fine paper corners, borders, and measured graphic marks.

### Named Rules

**The Violet-Ink Rule.** Use violet-blue ink for text and marks; pure black does not belong in this paper world.

**The Atmosphere Rule.** Pale blue and lavender may spread across the field, but saturated color remains concentrated in the seal and affirmative action.

## Typography

**Display Font:** Noto Serif SC with Songti SC, STSong, and serif fallbacks  
**Body Font:** PingFang SC with Hiragino Sans GB, Microsoft YaHei, and sans-serif fallbacks

**Character:** The serif carries the emotional weight of a personal letter and film title. The sans serif keeps prompts, explanations, and buttons contemporary, legible, and unembarrassed.

### Hierarchy

- **Display** (500, `clamp(1.72rem, 5.5vw, 2.75rem)`, 1.42): Invitation, question, and confirmation headlines; use compact negative tracking around `-0.025em` to `-0.03em`.
- **Title** (400, `1.12rem`, normal): Film-title notation inside the letter, with slight positive tracking (`0.04em`).
- **Body** (400, `0.94rem` to `1rem`, 1.75): Brief supporting sentences, held to a compact measure of about `18rem` where present.
- **Label** (400–600, `0.875rem` to `0.96rem`, `0.08em` to `0.18em`): Quiet prompts and touch actions; Chinese copy stays in natural case.

### Named Rules

**The Correspondence Hierarchy Rule.** Serif type speaks the invitation; sans-serif type handles guidance and choice.

## Layout

Each route is a full-height, centered scene on a `min-height: 100svh` field. The page shell uses `16px` horizontal padding on small screens, `24px` from the `640px` breakpoint, and vertical padding of at least `24px` plus the top safe area. Content remains deliberately narrow: the envelope, invitation, and question top out at `390px`; the finale expands only to `520px`.

The first closed state is an envelope stage with a `390px` minimum height. Opening expands the stage to `680px` on small screens and `720px` from `640px`, allowing the letter to rise without breaking the single-scene composition. On desktop viewports shorter than `720px`, the envelope stage scales to `0.88` from its top center. The movie cover holds a `3:4` ratio and grows from `138px` to `154px` at the same breakpoint.

Spacing is centered, symmetrical, and sparse. Repeated gaps of roughly `12–20px` organize small marks and controls; `28–40px` intervals separate narrative beats. Choice buttons stay in one centered row with a minimum `48px` touch height.

**The One-Scene Rule.** Every route reads as one centered cinematic tableau, never as a conventional stacked landing page.

## Elevation & Depth

Depth is ambient and material rather than glossy. The page field uses layered radial and linear gradients plus a faint six-pixel dot grain. Paper lifts with a broad cool shadow; the envelope sits slightly deeper; buttons use smaller responsive shadows. Blur halos and translucent ambient circles suggest projector light without introducing literal scenery.

### Shadow Vocabulary

- **Paper Lift** (`0 24px 62px rgba(68, 77, 124, 0.2)`): Invitation and question paper floating above the field.
- **Envelope Lift** (`0 28px 54px rgba(61, 70, 119, 0.24)`): The sealed envelope as the first-viewport focal object.
- **Cover Lift** (`0 14px 34px rgba(58, 67, 110, 0.22)`): The replaceable movie artwork inside the letter.
- **Action Lift** (`0 12px 28px rgba(67, 76, 139, 0.24)`): Affirmative buttons; navigation briefly blooms to a softer violet shadow.
- **Quiet Control Lift** (`0 9px 24px rgba(80, 91, 141, 0.11)`): Secondary choice at rest.

### Named Rules

**The Projector-Light Rule.** Shadows stay cool, diffuse, and low-opacity; depth should feel like paper in soft light, never like a glossy app card.

## Shapes

The dominant silhouette is the precisely folded envelope: triangular flap and pocket planes, a circular seal, and a slightly rounded lower edge. Reading surfaces use a restrained `16px` outer radius with an inset `11px` hairline frame. Covers and controls use a related `14px` radius; full circles are reserved for the seal, projector halo, particles, and ambient light.

Small geometry carries the cinema-letter identity: rotated squares become wax-seal marks, ticket dots, and dividers; film marks use a `7px` rectangle with tiny perforations. These details are thin, measured, and centered.

**The Precise Geometry Rule.** Use folds, hairlines, diamonds, and film perforations as correspondence marks; avoid loose blobs or novelty romance icons.

## Components

### Buttons

Buttons feel calm and touchable, with a slight upward acknowledgment rather than a loud transformation.

- **Shape:** Gently squared corners (`14px`), at least `104px` wide and `48px` high, with `0.72rem 1.2rem` internal padding.
- **Primary:** Action Violet with white text and the Action Lift shadow.
- **Hover / Focus:** Hover rises `2px` and deepens the violet; press scales to `0.96`. Keyboard focus uses a `2px` violet outline with a `4px` offset.
- **Secondary:** Translucent white with soft violet text and the Quiet Control Lift shadow; hover resolves to opaque white.
- **Playful refusal:** The negative choice becomes fixed after activation and relocates within the middle `20–80%` of the visible viewport, keeping `16px` edge clearance and avoiding the positive action by `22px`.

### Cards / Containers

Invitation and question papers are compact pieces of correspondence rather than generic cards.

- **Corner Style:** Restrained paper corners (`16px`) with an inset frame (`11px` radius, `7px` inset).
- **Background:** A near-white diagonal paper wash over Letter Paper.
- **Shadow Strategy:** Paper Lift only; no border-heavy card chrome.
- **Internal Padding:** Approximately `24–32px` horizontally and `28–56px` vertically according to content density.

### Movie Cover

The cover is a replaceable `3:4` image framed as the letter's cinematic artifact. It uses a cool-blue fallback, a `14px` radius, Cover Lift, and a restrained vertical glaze. On hover, the image scales only to `1.025` over `700ms`.

### Sealed Envelope

The signature first-view component is a `340px`-wide envelope built from exact polygonal folds. Its blue layers deepen from flap to pocket, and a `48px` circular violet seal pulses subtly until opened. Keyboard focus rings the entire envelope. Opening rotates the flap in 3D, lets the envelope recede, and raises the letter into view.

### Finale Mark

The confirmation replaces paper with a `96px` circular projector halo and a small outlined film frame. Sparse stars and dots drift around the scene; the headline, promise, and diamond divider enter in a measured sequence.

### Motion

The shared reveal easing is `cubic-bezier(0.22, 1, 0.36, 1)`. Page entry lasts `700ms` with a small blur and `10px` rise; page exit lasts `400ms`. The envelope reveal unfolds across roughly `480–720ms`. Interactive buttons use a spring (`stiffness: 420`, `damping: 26`), while the relocated refusal uses a softer spring (`stiffness: 230`, `damping: 24`, `mass: 0.82`). Reduced-motion preference collapses authored movement to `10ms` or static states.

**The Ceremonial Motion Rule.** Motion reveals the sequence—open, choose, walk home, remember—and never runs as unrelated decoration.

## Do's and Don'ts

### Do:

- **Do** preserve the first viewport as one floating sealed envelope with the quiet “轻点开启邀请” prompt.
- **Do** keep the three-route story legible as open, choose, walk home, remember.
- **Do** use cool paper gradients, violet ink, precise envelope construction, and small cinematic marks as the recurring visual language.
- **Do** maintain keyboard focus, `48px` touch targets, safe-area padding, and reduced-motion behavior.
- **Do** keep supplied copy and real artwork replaceable without redesigning the surrounding correspondence.

### Don't:

- **Don't** turn the experience into a generic romance template with hearts, roses, red-pink gradients, or sugary decorative copy.
- **Don't** replace the narrow, centered tableau with dashboard chrome, navigation, feature sections, or commercial event-page patterns.
- **Don't** add visual noise around the envelope; its isolation is what makes the first click ceremonial.
- **Don't** use harsh black, hard gray shadows, glass panels, or high-saturation accents that break the mist-blue paper world.
- **Don't** make the playful refusal unsafe: it must remain visible, keyboard-operable, within viewport edges, and clear of the affirmative action.

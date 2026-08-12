# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, GitHub source control, and GitHub Pages static hosting.

## Users

One person privately shares the page with someone they would like to invite to a movie. The recipient opens it primarily on a phone and moves through a short, warm invitation ritual.

## Product Purpose

Turn a simple movie invitation into a small ritual: open a letter, accept the movie ticket, agree to a walk after the film, and keep a commemorative promise ticket.

## Positioning

This is a personal, single-purpose interactive invitation rather than a commercial event page or a generic Valentine template.

## Operating Context

The link is most likely opened from a chat app on a phone. It must also work with mouse and keyboard on desktop, and remain usable in short or landscape viewports.

## Capabilities and Constraints

- Three routes: the envelope invitation, the after-movie question, and the confirmation.
- Each question presents one clear affirmative action and one playful hesitation control; hesitation never navigates, disappears, or creates a refusal outcome.
- The hesitation control moves through three safe, elastic landings, then stays fixed and reveals a temporary note on later clicks. Each landing draws a gentle line from a curated stage-specific pool without immediately repeating the visible copy.
- The supplied movie artwork lives at `/public/movie-cover.png` and remains replaceable through one isolated component.
- No backend, persistence, analytics, music, or complex UI dependencies.
- All motion is implemented through Framer Motion.
- Opening the letter and accepting the walk release a sparse top-to-bottom watercolor shower; accepting the movie ticket and storing the keepsake gather poster-colored fragments from all four edges into the center.
- All ceremony effects are one-shot, pointer-transparent, deterministic in position, and removed when reduced motion is requested.
- The closing ticket uses a fixed decorative ticket number and does not invent a date.

## Brand Commitments

The product name is `movie-invitation`. The voice is gentle, minimal, refined, and lightly romantic without being sugary. The visual world is derived from the supplied poster: icy watercolor blue, vivid water blue, golden and apricot petals, soft pink haze, and pale paper.

## Evidence on Hand

The exact Chinese copy, interaction requirements, and real artwork for 《去你的岛》 were supplied by the user. No personal photographs or date details were supplied and none may be fabricated.

## Product Principles

- Make the first click feel ceremonial.
- Keep the affirmative next action visually dominant and every control touch-friendly.
- Make each transition feel like a small continuation of the invitation rather than a form choice.
- Keep the experience fast, private, and easy to replace with real artwork.

## Accessibility & Inclusion

Support keyboard focus, semantic buttons, safe touch targets, readable contrast, viewport safe areas, and reduced-motion preferences.

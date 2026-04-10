# Design Brief

## Direction

Cool Serene Education — Light, airy, student-focused learning platform with soft blues and calm whites creating a trustworthy, approachable environment.

## Tone

Warm professionalism with minimal intensity — refined, approachable, never cold or corporate. Emotional state: focused calm, learning readiness.

## Differentiation

Gradient hero hero (blue→white) with smooth scroll entrance animations and card-based layout creates visual hierarchy while maintaining clean, distraction-free learning focus.

## Color Palette

| Token      | OKLCH            | Role                              |
| ---------- | ---------------- | --------------------------------- |
| background | 0.98 0.008 230   | Cool off-white base               |
| foreground | 0.18 0.015 230   | Deep text for contrast            |
| card       | 1.0 0.004 230    | Pure white cards, sections        |
| primary    | 0.42 0.14 240    | Deep ocean blue (trust, learning) |
| accent     | 0.6 0.15 170     | Teal (interactive, highlights)    |
| muted      | 0.94 0.01 230    | Subtle backgrounds, disabled      |

## Typography

- Display: Space Grotesk — modern, clean authority for hero, section headings
- Body: Figtree — warm, friendly readability for paragraphs and UI labels
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold`, label `text-sm font-semibold uppercase tracking-widest`, body `text-base leading-relaxed`

## Elevation & Depth

Subtle layering via soft shadows on cards (blue-tinted, low opacity), transparent overlays on hero, graduated background tones. No harsh shadows — maintains airy, approachable feel.

## Structural Zones

| Zone    | Background              | Border              | Notes                                |
| ------- | ----------------------- | ------------------- | ------------------------------------ |
| Header  | card with border-b      | border-blue-200     | Sticky navigation, clean underline   |
| Content | background (alternates) | none                | Feature cards, testimonials, sections |
| Footer  | muted with border-t     | border-blue-100     | Social icons, links, email signup    |

## Spacing & Rhythm

Large gaps between sections (gap-12 md:gap-20) create breathing room. Content sections use gap-6 for cards. Micro-spacing (p-4 to p-6) inside cards maintains comfort for students reading on small screens.

## Component Patterns

- Buttons: primary-blue rounded-lg, hover: translate-y-0.5 shadow-elevated, smooth transition
- Cards: bg-card rounded-lg shadow-card, hover: hover-lift animation, teal accent borders optional
- Badges: bg-accent/10 text-accent rounded-full, uppercase labels for course categories

## Motion

- Entrance: fade-in-up on section scroll (0.6s ease-out)
- Hover: 4px lift on cards with shadow elevation (0.3s smooth)
- Decorative: none — focused, professional motion discipline

## Constraints

- No rainbow gradients or neon shadows
- No bouncy animations — maintain professional calm
- Minimum 4.5:1 contrast on all text
- Mobile-first responsive design (sm, md, lg breakpoints)

## Signature Detail

Gradient hero section transitions smoothly from primary blue to background white, establishing visual interest while maintaining clarity — signature of educational design that never overwhelms learning focus.


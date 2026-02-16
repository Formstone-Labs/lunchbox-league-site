# ARCHITECTURE.md

## Stack
- Next.js App Router (TypeScript)
- Tailwind CSS v4 + custom global design tokens in `app/globals.css`
- Static marketing site (no auth or backend in this repo)

## Routing
- `app/page.tsx` is the website homepage.
- Additional static routes live under `app/**/page.tsx` (e.g. concept pages, kit pages, and marketing demo pages).

## Page Composition
Homepage (`app/page.tsx`) is assembled from presentational components in `app/components`:
- `Nav`
- `Hero`
- `Problem`
- `HowItWorks`
- `Features`
- `SafetyCardDemo`
- `WhyWeBuiltThis`
- `FAQ`
- `CTA`
- `Footer`

Most components are server components with static content and styling.

## Design System
Global style primitives are in `app/globals.css`:
- Brand color tokens (`--ll-*`)
- Utility classes for headings/buttons/cards/animations
- Reusable button styles:
  - `.ll-btn-primary`
  - `.ll-btn-secondary`
  - `.ll-btn-hero`

## App Link Boundary
- The real product app lives at `https://app.lunchboxleague.com` and is separate from this repo.
- This repo should only host marketing-safe/public experiences and sample/demo content.
- Any copy or CTA that points to real user data should route to the app domain.

# T&R Heating and Air — Project Context

## Company
- **Name:** T & R Heating and Air
- **Owner/Tech:** Mr. Yowe
- **Location:** Hoover, AL (serves Hoover and nearby areas)
- **Phone:** (205) 859-5222
- **Hours:** Open · Closes 7 PM
- **Google Rating:** 5.0 ★
- **Bio:** Family-owned and operated. Committed to reliable, quality HVAC work at affordable prices. Detail-oriented, customer-focused, punctual. "We won't quit until it's done properly the first time." No job too big or small.
- **Services:** AC installation, heating systems, heat pumps, water heaters, HVAC repair, maintenance

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 8
- **Animations:** Framer Motion 12
- **Styling:** Inline styles + CSS variables (no Tailwind, no CSS-in-JS library)
- **Package manager:** npm

## Design System
| Token | Value | Usage |
|---|---|---|
| `--navy` | `#080d1a` | Page background |
| `--navy-mid` | `#0d1528` | Alternate section bg |
| `--navy-light` | `#162040` | Card hover bg |
| `--blue` | `#1a6ef7` | Primary accent, CTAs |
| `--blue-light` | `#4d8fff` | Secondary headings, highlights |
| `--copper` | `#c07840` | Warm accent, "Done Right." word |
| `--cream` | `#f2ead8` | Body text |
| `--white` | `#ffffff` | Headings |
| `--gray` | `#8899bb` | Subtext, labels |

**Typography:** `clamp()` fluid sizing, `Helvetica Neue` / system sans-serif, weight 800 for display  
**Cursor:** Custom magnetic cursor (dot + lagging ring), replaces system cursor site-wide  
**Grain overlay:** SVG fractalNoise on `body::after`, opacity 0.035  
**Section dividers:** `clip-path: polygon(...)` diagonal cuts between sections  

## File Structure
```
src/
  App.tsx                  — Root: imports and orders all sections
  index.css                — CSS variables, resets, scrollbar, grain overlay
  App.css                  — (empty, kept for Vite compatibility)
  components/
    Cursor.tsx             — Magnetic dot + ring cursor, mouse tracking
    Nav.tsx                — Fixed nav, scrolled glass effect, "Get a Quote" CTA
    Hero.tsx               — Full-viewport hero, parallax, staggered word reveal
    Services.tsx           — 6-card service grid, stagger animation
    About.tsx              — Brand story + animated counter stats
    Testimonials.tsx       — Fredricka B. review card, Google badge
    Contact.tsx            — Split layout: contact info left, form right
    Footer.tsx             — Logo, copyright, links
```

## Section Order
Hero → Services → About → Testimonials → Contact → Footer

## Key Content

### Hero headline (3 stacked words)
1. "Reliable." (white)
2. "Affordable." (blue-light)
3. "Done Right." (copper)

### Hero stats row
5.0★ Google Rating · 100% Satisfaction · Any Size (No Job Too Big or Small) · Call Now (205) 859-5222

### Services (6 cards)
AC Installation · Heating Installation · Water Heaters · HVAC Repair · Maintenance · Heat Pumps

### Testimonial
**Fredricka B.** — Jul 24, 2023 — 5★ Google
> "I am not a review writer but this company truly came through for me. My AC went out during a week of record high heat and Mr. Yowe delivered for us..."

## Dev Server
```bash
npm run dev        # localhost:5173 (HMR)
npm run build      # outputs dist/
npm run preview    # localhost:4173 (prod build preview)
```
Launch config saved at `.claude/launch.json` — use `preview_start("HVAC Dev Server")` to start.

## Git & Deployment
- **Repo:** https://github.com/isaacsala-ctrl/T-R.git
- **Branch:** main
- **Platform:** Netlify (planned)
- **SPA redirect:** `netlify.toml` already in place
- **Status:** Committed locally, push pending GitHub auth

## Pending / To-Do
- [ ] Push to GitHub (needs Windows Credential Manager auth — run `git push -u origin main` in own terminal)
- [ ] Add real photos from T&R when provided
- [ ] Publish to Netlify + assign custom domain
- [ ] Add more Google reviews as they come in

# DESIGN.md: Kshitij Gotiwale Portfolio

## Design Summary
Minimalist, typographic portfolio for an independent art director and brand designer. Two visual worlds: a dark editorial project/about page (#1C1A05) with a bright physics-based home page. Primary accent is bright yellow (#FFEE00) used for nav links and badges. Primary typeface RMNeue throughout. The aesthetic is intentional, editorial, and craft-driven.

## Design Tokens

### Colors
| Role | Value | Usage |
|------|-------|-------|
| Yellow (primary) | `#FFEE00` | Nav inactive links, project title text, number badges, dot accents |
| Black | `#000000` | Body text, active nav item |
| Dark BG | `#1C1A05` | Home page background, work project row backgrounds |
| White | `#FFFFFF` | About / Work / Archive page backgrounds |
| Dot Green | `#00BC22` | Floating dot on About page |
| Dot Blue | `#0066FF` | Floating dot on About page |
| Dot Red | `#FF0000` | Floating dot on About page |

### Typography
| Element | Font | Size | Weight | Letter-spacing | Line-height |
|---------|------|------|--------|---------------|-------------|
| Nav links | General Sans | 15px | 500 | 0.08em | 1.6em |
| Body text | General Sans Variable | 15px | 480 (variable) | 0.08em | 1.6em |
| Work project title | General Sans | 20px | 500 | -0.24px | 1.6em |
| Section headings / CTA | General Sans | 30px | 500 | 0.08em | 1.6em |

Font files: Fontshare — General Sans (Regular 400, Medium 500, Bold 700 + italic variants + Variable)

### Spacing and Layout
- Nav padding: 16px vertical, 24px horizontal
- Page content padding: 24px horizontal
- Max content width: ~1200px, centered
- Two-column gap on About hero: 60px
- Project row gap: implicit (block layout)

### Breakpoints
- Desktop: ≥ 1440px
- Tablet: 810px – 1439px
- Mobile: ≤ 809px

### Border Radius
- Nav: none
- Profile photo: 10px
- Number badges: 40px (pill)
- OCD badge image: 4px

### Shadows
- Profile photo: multi-layer yellow glow: `0.4px 0.5px 3.3px rgba(255,238,0,0), 1.2px 1.3px 8.9px rgba(255,238,0,0), 2.7px 2.8px 19.4px rgba(255,238,0,0.01), 5.9px 6.3px 43.1px rgba(255,238,0,0.02), 15px 16px 109.7px rgba(255,238,0,0.06)`

## Components

### Navigation
- Fixed top, transparent with `backdrop-filter: blur(5px)`
- HOME left, [ABOUT, WORK, ARCHIVE, SHOP] right with 32px gap
- Active page = black text, inactive = yellow
- On dark home page, all items yellow

### Footer
- White background, "Let's [Chat/Connect/Collab]?" CTA (varies per page)
- 3-column contact grid (time | phone+email | location)
- Live IST clock updated every second
- Subtle gray dividers

### Work Project Row
- Dark background (#1C1A05), full-width link
- Number badge (yellow pill), wide thumbnail image, text with `mix-blend-mode: difference`

### Marquee Ticker
- Infinite horizontal scroll of fun personal facts
- CSS `animation: marquee 20s linear infinite`

### Archive Grid
- CSS columns masonry, 3 cols desktop / 2 cols tablet / 2 cols mobile

## Page Patterns
1. **Home:** Pure image gallery, dark bg, nav overlay, 7 large art images with scroll parallax
2. **About:** Bio + photo (two-col) → Services/Clients/Bucket list → Marquee → Footer
3. **Work:** Numbered project list (10 items, dark rows) → Footer
4. **Archive:** Masonry image grid → Footer

## Content Style
- All nav/heading labels: UPPERCASE
- Body text: sentence case, no punctuation-heavy copy
- Personal and approachable tone ("Let's Chat?", "Welcome to my Creative Kitchen")
- Numbers as explicit text in list items (not CSS list-style)

## Agent Build Instructions
1. Use `next/font/local` with General Sans woff2 files in `public/fonts/`
2. Set CSS var `--font-general-sans` via `localFont`
3. Body base: `font-size: 15px; letter-spacing: 0.08em; line-height: 1.6em; font-weight: 400`
4. Home page: `background-color: #1C1A05` on root div
5. Other pages: `background-color: #FFFFFF` on root div
6. Nav uses `usePathname()` — always `'use client'`
7. Footer live clock: `toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false })`
8. Marquee: duplicate items × 2, `transform: translateX(-50%)` loop
9. Work rows: `mix-blend-mode: difference` on text over images
10. Archive: CSS `columns: 3` with `break-inside: avoid`

## Stack
Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui

# Navigation Specification

## Overview
- **Target file:** `src/components/Navigation.tsx`
- **Interaction model:** Static — active page highlights in black, others in yellow. No scroll-triggered changes.

## DOM Structure
```
<nav> (fixed top, full-width, z-index: 9999)
  <div> (inner container, flex row, items spaced)
    <a href="/">HOME</a>         ← left anchor / brand
    <div> (right group, flex row, gap)
      <a href="/about_me">ABOUT</a>
      <a href="/work">WORK</a>
      <a href="/archive">ARCHIVE</a>
      <a href="/shop">SHOP</a>
    </div>
  </div>
</nav>
```

## Computed Styles

### Nav container
- position: fixed
- top: 0
- left: 0
- right: 0
- width: 100%
- height: ~48px (inferred from proportions)
- backdrop-filter: blur(5px)
- background: transparent (no solid bg — blur only)
- z-index: 9999
- padding: 12px 24px (inferred from screenshot proportions)
- display: flex
- align-items: center
- justify-content: space-between

### Nav links (all)
- font-family: "General Sans", sans-serif
- font-size: 15px
- font-weight: 500
- letter-spacing: 0.08em
- line-height: 1.6em
- text-transform: uppercase (the labels ARE uppercase in the DOM — keep as-is)
- text-decoration: none
- cursor: pointer

### Active nav item (current page)
- color: rgb(0, 0, 0) = #000000 (black)

### Inactive nav items
- color: rgb(255, 238, 0) = #FFEE00 (yellow)

### HOME link
- On home page: color #FFEE00 (yellow) — it is NOT the active item on home page (the active is also HOME but on dark bg it's yellow because of contrast)
- On other pages: color #FFEE00 (yellow) always — HOME acts as the brand/logo
- Note: The home page uses dark bg (#1C1A05) — all nav items appear yellow for contrast
- On About page: ABOUT = black, all others = yellow
- On Work page: WORK = black, all others = yellow
- On Archive page: ARCHIVE = black, all others = yellow

## States & Behaviors

### Active state detection
- Compare `usePathname()` from `next/navigation` to determine active link
- On `/`: all items are yellow (dark bg, HOME is the active but yellow still)
- On `/about_me`: ABOUT = black
- On `/work`: WORK = black
- On `/archive`: ARCHIVE = black

### Hover states
- Subtle opacity change (opacity: 0.7) on hover — inferred
- transition: opacity 0.2s ease

## Assets
- No images

## Text Content (verbatim)
- HOME
- ABOUT
- WORK
- ARCHIVE
- SHOP

## Responsive Behavior
- **Desktop (1440px):** Horizontal flex row, HOME left, rest right with gap
- **Tablet (810px):** Same layout, reduced horizontal padding
- **Mobile (390px):** Same layout, compact, smaller padding, possible single line
- **Breakpoint:** No major layout shift — stays horizontal throughout

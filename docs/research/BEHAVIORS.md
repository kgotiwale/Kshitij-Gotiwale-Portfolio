# Behaviors — onecuriousdsouza.framer.website

## Global

- **Smooth scroll:** Native (no Lenis/Locomotive found in JS bundles)
- **Scroll behavior:** Standard browser scroll
- **Color scheme:** `light dark` — pages vary by bg color
- **Nav backdrop:** `backdrop-filter: blur(5px)` — always present
- **Body overflow:** `min-height: 100vh; width: auto` on root

## Navigation (all pages)

- **Position:** Fixed top, full-width, `backdrop-filter: blur(5px)`
- **Items:** HOME | ABOUT | WORK | ARCHIVE | SHOP — uppercase, 15px, letter-spacing 0.08em
- **Active state:** Active page item text = `rgb(0, 0, 0)` (black)
- **Inactive state:** Inactive items = `rgb(255, 238, 0)` (yellow #FFEE00)
- **HOME is always yellow** — used as logo/brand anchor
- **Interaction model:** Static — no hover animations detected in static HTML (likely subtle underline/opacity hover)

## Home Page

- **Background:** `rgb(28, 26, 5)` = `#1C1A05` (very dark olive/brown)
- **Layout:** 7 large portrait/landscape images displayed vertically, full viewport width, stacked
- **Images:** Huge dimensions (5095×7143 to 7497×3592) — full-bleed, `object-fit: cover`
- **Parallax:** Images have `transform: translateX(-50%) translateY(-NNNNpx)` with `will-change: transform` — scroll-driven parallax via Framer's built-in engine
- **Nav text color on home:** Yellow #FFEE00 (dark bg contrast)
- **Interaction model:** Scroll-driven parallax (JS-based, Framer runtime)

## About Page

- **Background:** White `#FFFFFF`
- **Nav active item (ABOUT):** Black `rgb(0,0,0)`
- **Profile section:**
  - Large portrait photo `(1356×1616)` with `border-radius: 10px` and yellow glow shadow
  - Floating colored dot elements (green/blue/red/yellow circles, `border-radius: 100%`) scattered around photo — animate in on scroll
  - Second image (`OCD sticker`) with `transform: translate(-50%, -50%) rotate(10deg)` — rotated badge
- **Marquee ticker:** "TOTE BAG COLLECTOR · PROFESSIONAL STICKER MAKER · SERIAL THRIFTER · SUSHI ADDICT · 2000'S POP SONG MEMORIZER" repeated 5× — horizontal scroll, CSS animation or JS-driven
- **Lists:** SERVICES, CLIENT LIST, PROJECT BUCKET LIST — numbered/bulleted plain text
- **Clock:** Live IST time display (JavaScript)
- **Scroll animations:** Elements have `opacity: 0.001; transform: translateY(2.33px); will-change: transform` — fade-up on scroll via IntersectionObserver/Framer scroll
- **Interaction model:** Scroll-driven entrance animations + marquee ticker

## Work Page

- **Background:** White `#FFFFFF` with dark project cards
- **Nav active item (WORK):** Black `rgb(0,0,0)`
- **Project items:** 10 numbered rows, each is a full-width `<a>` link
  - Dark background container
  - Number badge (e.g. "1.") in yellow circle `border-radius: 40px`, bg `#FFEE00`
  - Wide thumbnail image (≈4000×1064) spanning most of the row
  - Year text: white, `mix-blend-mode: difference`
  - Project name: yellow #FFEE00, `mix-blend-mode: difference`
  - Category tags: white, `mix-blend-mode: difference`
- **Font sizes on work items:** 15px (year/category), 20px (project name), 30px (potential heading)
- **Hover:** Items likely get opacity/scale change — mix-blend-mode suggests visual inversion effect
- **Interaction model:** Click-to-navigate

## Archive Page

- **Background:** White `#FFFFFF`
- **Layout:** Masonry/Pinterest-style grid of 23 images + 2 GIFs
- **Images:** Mix of portrait, landscape, square — no captions
- **Interaction model:** Static (hover may show slight scale)

## Footer (all pages except Home)

- **"Let's [Chat/Connect/Collab]?" heading** — varies by page
- **CONTACT section:** IST time (live), phone, email, city
- **Copyright:** `© 2025 by Ankita D'Souza`
- **Dev credit:** `Developed by Utkarsh Vasist`

## Responsive Breakpoints

- **Desktop:** `min-width: 1440px`
- **Tablet:** `min-width: 810px` and `max-width: 1439.98px`
- **Mobile:** `max-width: 809.98px`

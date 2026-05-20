# Page Topology — onecuriousdsouza.framer.website

## Site: Ankita D'Souza — Creative Director / Brand Designer / Illustrator

## Pages

| Route | Component File | Description |
|-------|---------------|-------------|
| `/` | `app/page.tsx` | Home — full-page parallax image gallery |
| `/about_me` | `app/about/page.tsx` | About — bio, photo, services, ticker, footer |
| `/work` | `app/work/page.tsx` | Work — numbered project list with thumbnails |
| `/archive` | `app/archive/page.tsx` | Archive — image grid |
| `/shop` | `app/shop/page.tsx` | Shop (not scraped, likely external or simple) |

## Layout Architecture

```
<Layout>
  <Navigation />        ← fixed top, z-index high, backdrop-blur
  <main>
    {/* page content */}
  </main>
</Layout>
```

## Navigation

- **File:** `src/components/Navigation.tsx`
- **Type:** Fixed/sticky overlay, full-width
- **Items:** HOME · ABOUT · WORK · ARCHIVE · SHOP
- **Active detection:** Current pathname = black text, others = yellow
- **z-index:** Above page content

## Home Page Sections (top → bottom)

| # | Section | Component | Interaction |
|---|---------|-----------|-------------|
| 1 | Navigation overlay | `<Navigation>` | Static |
| 2 | Parallax image gallery (7 images) | `<HomeGallery>` | Scroll-driven parallax |

## About Page Sections (top → bottom)

| # | Section | Component | Interaction |
|---|---------|-----------|-------------|
| 1 | Navigation | `<Navigation>` | Static |
| 2 | Hero/Bio section (photo + text) | `<AboutHero>` | Scroll-entrance animations |
| 3 | Services list (numbered) | `<ServicesList>` | Static |
| 4 | Select Clients text | `<ClientsList>` | Static |
| 5 | Project Bucket List (numbered) | `<BucketList>` | Static |
| 6 | Marquee ticker | `<MarqueeTicker>` | CSS animation (infinite scroll) |
| 7 | Footer (Let's Chat? + contact) | `<Footer>` | Live clock |

## Work Page Sections (top → bottom)

| # | Section | Component | Interaction |
|---|---------|-----------|-------------|
| 1 | Navigation | `<Navigation>` | Static |
| 2 | Project list (10 items, numbered) | `<WorkList>` | Click-to-navigate, hover |
| 3 | Footer | `<Footer>` | Static |

## Archive Page Sections (top → bottom)

| # | Section | Component | Interaction |
|---|---------|-----------|-------------|
| 1 | Navigation | `<Navigation>` | Static |
| 2 | Image grid (23 images + 2 GIFs) | `<ArchiveGrid>` | Static |
| 3 | Footer | `<Footer>` | Static |

## Z-Index Layers

1. Navigation — z-index: 9999 (above all)
2. Page content — z-index: 1
3. Parallax images (Home) — z-index: 0

## Global Components

- `src/components/Navigation.tsx` — shared nav
- `src/components/Footer.tsx` — shared footer (used on About/Work/Archive)
- `src/components/MarqueeTicker.tsx` — animated ticker for About page
- `src/components/icons.tsx` — SVG icons

## Design Token Summary

```
Colors:
  --color-yellow: #FFEE00 (rgb 255,238,0)
  --color-black: #000000
  --color-dark-bg: #1C1A05 (rgb 28,26,5) — Home page bg
  --color-white: #FFFFFF — About/Work/Archive bg
  --color-green-dot: #00BC22
  --color-blue-dot: #0066FF
  --color-red-dot: #FF0000

Typography:
  Font: "General Sans" (400, 500, 700) + "General Sans Variable" (variable)
  Nav: 15px / weight 500 / letter-spacing 0.08em / line-height 1.6em
  Body: 15px / weight 480 (variable axis) / letter-spacing 0.08em / line-height 1.6em
  Work item title: 20px
  Large text: 30px

Breakpoints:
  Desktop: ≥ 1440px
  Tablet: 810px – 1439px
  Mobile: ≤ 809px
```

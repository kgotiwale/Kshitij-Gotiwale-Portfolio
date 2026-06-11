# Kshitij Gotiwale — Portfolio Site Progress

**Stack:** Next.js 16 · React 19 · TypeScript strict · Tailwind v4 · shadcn/ui  
**Dev server:** `npm run dev` → http://localhost:3001

---

## Page Status

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Home | `/` | ✅ Done | SVG hero text, variable font, 7 product images, hero bg `#AD9F3B` |
| Work | `/work` | ✅ Done | Full-width cards, badges, text row, nav active pill |
| About | `/about_me` | ⏳ Not started | — |
| Archive | `/archive` | ⏳ Not started | — |
| Shop | `/shop` | ⏳ Not started | — |
| Project pages | `/project/[slug]` | ⏳ Not started | 10 projects in WorkList |

---

## Design Tokens

| Token | Value |
|-------|-------|
| Background (dark pages) | `#1C1A05` |
| Background (home hero) | `#AD9F3B` |
| Accent / yellow | `#FFEE00` |
| Text white | `#FFFFFF` |
| Text black | `#000000` |
| Nav text (home, active) | `rgba(0,0,0,0.74)` |
| Font family | `General Sans` (variable, self-hosted via `var(--font-general-sans)`) |
| Nav font size | `clamp(13px, 1.5vw, 15px)` |
| Body/label font size | `15px` |
| Letter spacing (nav/labels) | `0.08em` |
| Letter spacing (work text) | `0.04em` |

---

## Key Measurements (Work Page)

| Element | Value |
|---------|-------|
| Section padding top | `181px` |
| Section padding bottom | `120px` |
| Card margin | `0 5vw` (= 72px at 1440px) |
| Card height | `450px` |
| Card border-radius | `8px` |
| Per-item gap | `101px` margin-bottom |
| Badge size | `30×30px`, `border-radius: 40px` |
| Badge position | `left: 57.5vw`, `top: -15px` |
| Badge bg | `#FFEE00`, number color `#000000`, font-size `15px` |
| Text row margin | `8px 5vw 0`, `padding: 0 24px` |
| Year ↔ Title gap | `60px` |
| Logo overlay (Vernacular) | `top: 22px`, `right: 24px`, `width: 200px` |

---

## Navigation

- Fixed, full-width, `backdrop-filter: blur(5px)`, transparent bg
- Home page: HOME active = `rgba(0,0,0,0.74)` + black oval pill; other items black
- Non-home pages: all items `#FFEE00`; active item gets yellow oval pill (`border: 1.5px solid #FFEE00`, `borderRadius: 50px`, `padding: 5px 14px`)
- Layout: HOME left · [ABOUT, WORK, ARCHIVE, SHOP] right with `gap: 32px`

---

## Known Issues / TODOs

- **Noise Jr. thumbnail** (`/images/work/noise-jr.png`) — clone has bright/colorful image, original shows dark-themed version. Needs correct asset.
- **About page** — not inspected yet
- **Archive page** — not inspected yet  
- **Shop page** — not inspected yet
- **Project pages** — none implemented yet (10 projects total in WorkList)
- **Mobile/responsive** — not verified at mobile breakpoints

---

## Techniques Used

1. **Color extraction** — Puppeteer `getComputedStyle` on target elements
2. **Full-width hero text** — SVG `textLength` + `preserveAspectRatio="none"`
3. **Pixel measurements** — `getBoundingClientRect()` via Puppeteer evaluate for exact positions
4. **Variable font fix** — loaded in `layout.tsx` via `next/font/local` with `variable` prop
5. **Screenshot iteration** — 1440×900 screenshots of target + localhost side-by-side for comparison

---

## File Map

```
src/
  app/
    page.tsx               # Home
    work/page.tsx          # Work list
    about_me/page.tsx      # About (stub)
    archive/page.tsx       # Archive (stub)
    shop/page.tsx          # Shop (stub)
  components/
    Navigation.tsx         # Fixed nav, active pill logic
    WorkList.tsx           # 10-project card list
    Footer.tsx             # Footer with CTA
    HeroSection.tsx        # Home hero (SVG text)
public/
  images/work/             # Project thumbnails (10 images)
```

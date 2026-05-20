# WorkList Specification

## Overview
- **Target file:** `src/components/WorkList.tsx`
- **Interaction model:** Click-to-navigate (each row is a link). Hover likely shows opacity change.
- **Page:** Work page

## DOM Structure
```
<section>
  <ol> (list of 10 project rows)
    {projects.map(p =>
      <li key={p.number}>
        <a href={p.href}> (full-width link, dark background)
          <div> (row layout)
            <div> (number badge)
              <span class="number-badge">{p.number}.</span>
            </div>
            <div> (image area)
              <Image src={p.thumbnail} alt="" width fill />
              {p.logo && <Image src={p.logo} alt="" />}  ← Vernacular Coffee has logo overlay
            </div>
            <div> (text info, mix-blend-mode: difference)
              <span class="year">{p.year}</span>
              <span class="title">{p.title}</span>
              <span class="categories">{p.categories}</span>
            </div>
          </div>
        </a>
      </li>
    )}
  </ol>
</section>
```

## Computed Styles

### Section container
- background-color: #FFFFFF
- padding-top: 80px (below fixed nav)

### Project row (link element)
- display: block
- width: 100%
- background-color: #1C1A05 (dark, matching home page bg)
- overflow: hidden
- position: relative
- border-bottom: 1px solid rgba(255,255,255,0.1) (subtle separator)
- cursor: pointer

### Number badge
- background-color: #FFEE00 (yellow)
- border-radius: 40px
- padding: 4px 10px
- font-size: 15px
- font-weight: 500
- color: #000000
- position: absolute top-left or inline

### Thumbnail image area
- width: 100% (approximately 75-80% of row width)
- height: ~160px–200px (images are 4000×1064 = ~3.76:1 ratio, so at full width they'd be short)
- display: block
- object-fit: cover

### Vernacular Coffee special case
- Has TWO images: main thumbnail + logo overlay
- Logo positioned overlay on the thumbnail

### Year text
- font-size: 15px
- font-weight: 500
- color: rgb(255,255,255) = white
- mix-blend-mode: difference (so it shows bright on dark or dark on light)
- letter-spacing: 0.08em

### Project title
- font-size: 20px (extracted from framer-font-size:20px)
- font-weight: 500
- color: rgb(255, 238, 0) = #FFEE00 (yellow, mix-blend-mode: difference)
- letter-spacing: -0.24px (extracted from framer-letter-spacing:-0.24px)
- text-transform: uppercase

### Categories
- font-size: 15px
- font-weight: 500
- color: white
- mix-blend-mode: difference
- letter-spacing: 0.08em

## States & Behaviors

### Hover
- opacity: 0.85 on hover (inferred — typical portfolio behavior)
- transition: opacity 0.2s ease

## Assets (project thumbnails)
```
1. NOISE JR.          → /images/work/noise-jr.png         (3024×1182)
2. VERNACULAR COFFEE  → /images/work/vernacular-coffee.jpg (4000×1064) + logo: /images/work/vernacular-coffee-logo.png
3. SHARING PLATES     → /images/work/sharing-plates.jpg   (4001×1064)
4. STUDIO PENLI       → /images/work/studio-penli.jpg      (4001×1064)
5. KOMBAN KAMPINI     → /images/work/komban-kampini.jpg   (4000×1064)
6. FULL CIRCLE        → /images/work/full-circle.jpg      (4001×1064)
7. YLABS CCXSRHR      → /images/work/ylabs.jpg            (4000×1064)
8. ADP LIST           → /images/work/adplist.jpg          (4001×1064)
9. UNTITLED           → /images/work/untitled-font.jpg    (4167×2605)
10. MDES THESIS BOOK  → /images/work/mdes-thesis.jpg      (4000×1064)
```

## Text Content (verbatim)
```
1. 2025 / NOISE JR. / VISUAL IDENTITY & EXTENSIONS
2. 2024–25 / VERNACULAR COFFEE / BRAND IDENTITY & EXTENSIONS | PACKAGING | SOCIAL MEDIA | WEBSITE | ART DIRECTION
3. 2024 / SHARING PLATES HOSPITALITY / BRAND IDENTITY & EXTENSIONS | PRINT & PRODUCTION
4. 2023–24 / STUDIO PENLI / SOCIAL MEDIA | ILLUSTRATIONS
5. 2023–24 / KOMBAN KAMPINI / BRAND IDENTITY | WEBSITE | SOCIAL MEDIA | PACKAGING
6. 2024 / FULL CIRCLE / BRAND EXTENSIONS | SOCIAL MEDIA | ART DIRECTION | PRINT & PRODUCTION
7. 2023 / YLABS CCXSRHR / VISUAL IDENTITY | WEB DESIGN
8. 2023 / ADP LIST PRODUCT DAY / IDENTITY ASSETS | SOCIAL MEDIA
9. 2022 / UNTITLED / TYPE DESIGN
10. 2022 / MDES THESIS BOOK / PRINT & PRODUCTION | EDITORIAL
```

## Project hrefs
```
1. /project/noise_jr
2. /project/vernacular
3. /project/sph
4. /project/studio_penli
5. /project/komban_company
6. /project/full-circle_taproom✧kitchen✧culture (encoded)
7. /project/y-labs
8. /project/adplist_product_day
9. /project/font
10. /project/mdes_thesis
```

## Responsive Behavior
- **Desktop (1440px):** Wide horizontal rows, thumbnail spans most of row width
- **Tablet (810px):** Same layout, adapts to narrower viewport
- **Mobile (390px):** May stack thumbnail above text info, number badge repositioned

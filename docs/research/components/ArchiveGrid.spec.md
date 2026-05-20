# ArchiveGrid Specification

## Overview
- **Target file:** `src/components/ArchiveGrid.tsx`
- **Interaction model:** Static (possibly hover zoom, inferred)
- **Page:** Archive page

## DOM Structure
```
<section>
  <div> (masonry/columns grid)
    {images.map(img =>
      <div key={img.name} (image cell)>
        <Image src={img.src} alt="" width={img.w} height={img.h} />
      </div>
    )}
  </div>
</section>
```

## Computed Styles

### Section container
- background-color: #FFFFFF
- padding-top: 80px (below nav)
- padding-left: 16px
- padding-right: 16px

### Grid container
- Use CSS columns (column-count: 3 desktop, 2 tablet, 1 mobile)
- column-gap: 12px
- OR use CSS Grid: grid-template-columns: repeat(3, 1fr), gap: 12px
- Masonry-like layout (images of varying heights)

### Image cell
- break-inside: avoid (for column layout)
- margin-bottom: 12px
- overflow: hidden
- border-radius: 4px (subtle, inferred)

### Image
- width: 100%
- height: auto
- display: block
- object-fit: cover

## States & Behaviors

### Hover (inferred)
- slight scale on hover: transform: scale(1.02)
- transition: transform 0.3s ease
- overflow: hidden on parent to clip the scale

## Assets (23 images + 2 GIFs, in order)
```
/images/archive/archive-01.jpg   (1242×1755 — portrait)
/images/archive/archive-02.png   (2060×1268 — landscape)
/images/archive/archive-03.png   (6501×5001 — landscape)
/images/archive/archive-04.png   (2452×2893 — portrait)
/images/archive/archive-05.png   (2610×1802 — landscape)
/images/archive/archive-06.gif   (360×640   — portrait)
/images/archive/archive-07.gif   (600×1067  — portrait)
/images/archive/archive-08.jpg   (1897×1939 — square-ish)
/images/archive/archive-09.jpg   (1640×1640 — square)
/images/archive/archive-10.jpg   (3439×2251 — landscape)
/images/archive/archive-11.png   (3698×3513 — square)
/images/archive/archive-12.jpg   (2048×2048 — square)
/images/archive/archive-13.png   (2841×4171 — portrait)
/images/archive/archive-14.png   (2871×4299 — portrait)
/images/archive/archive-15.jpg   (2160×1080 — landscape)
/images/archive/archive-16.jpg   (2048×2048 — square)
/images/archive/archive-17.jpg   (1500×2048 — portrait)
/images/archive/archive-18.jpg   (1440×1439 — square)
/images/archive/archive-19.png   (2251×2250 — square)
/images/archive/archive-20.png   (2025×2065 — square)
/images/archive/archive-21.png   (2043×2070 — square)
/images/archive/archive-22.png   (1993×1918 — square)
/images/archive/archive-23.png   (2130×1908 — landscape)
```

Note: GIFs should use `<img>` tag (not next/image) to preserve animation, OR use `next/image` with `unoptimized` prop.

## Text Content
- None (pure image grid)

## Responsive Behavior
- **Desktop (1440px):** 3 columns
- **Tablet (810px):** 2 columns
- **Mobile (390px):** 1 or 2 columns

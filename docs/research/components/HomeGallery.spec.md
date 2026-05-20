# HomeGallery Specification

## Overview
- **Target file:** `src/components/HomeGallery.tsx`
- **Interaction model:** Scroll-driven parallax (JS-based via scroll listener + transform)
- **Page:** Home page only

## DOM Structure
```
<div> (page root, bg: #1C1A05, min-height: 100vh)
  <Navigation /> (fixed overlay)
  <div> (gallery container, position: relative, overflow: hidden)
    {images.map(img =>
      <div key={img.id} (parallax wrapper, position: absolute or relative)
        <Image src={img.src} alt="" fill objectFit="cover" />
      </div>
    )}
  </div>
</div>
```

## Computed Styles

### Page root
- background-color: #1C1A05
- min-height: 100vh
- width: 100%
- overflow-x: hidden

### Gallery container
- position: relative
- width: 100%
- Each image stacks vertically (not absolutely positioned relative to gallery — they flow in a column)

### Individual image wrapper
- position: relative
- width: 100%
- The heights vary — images are tall (portrait) or wide (landscape)
- Use `aspect-ratio` based on original dimensions for correct proportions
- overflow: hidden
- will-change: transform (for parallax)

### Image element
- display: block
- width: 100%
- height: 100%
- object-fit: cover
- object-position: center

## Image Data (in order, 1→7)
```
1. /images/home/home-01.png  (5095×7143 — portrait, ~0.71 aspect ratio)
2. /images/home/home-02.png  (5402×8783 — portrait, ~0.62 aspect ratio)
3. /images/home/home-03.png  (2761×6126 — portrait, ~0.45 aspect ratio)
4. /images/home/home-04.png  (3546×10278 — portrait, ~0.34 aspect ratio)
5. /images/home/home-05.png  (3571×5449 — portrait, ~0.66 aspect ratio)
6. /images/home/home-06.png  (6358×3909 — landscape, ~1.63 aspect ratio)
7. /images/home/home-07.png  (7497×3592 — landscape, ~2.09 aspect ratio)
```

## States & Behaviors

### Parallax scroll effect
- Each image moves at a slightly slower rate than scroll (parallax)
- Framer uses JS scroll listener + CSS transform
- Implementation approach: `useParallax` hook using `window.scrollY`
- Each image wrapper has `transform: translateY(scrollY * factor)` where factor is 0.1–0.3
- Use `will-change: transform` for performance
- Simpler approach: CSS-only parallax using `position: sticky` within a scroll container

**Recommended implementation:**
```tsx
// Simple parallax using scroll listener
const [scrollY, setScrollY] = useState(0);
useEffect(() => {
  const onScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
// Apply: style={{ transform: `translateY(${scrollY * 0.1}px)` }}
```

### Display at desktop
- Images stack vertically, full viewport width
- Each image shown at ~100vh height (or natural proportional height)
- Images fill the full width

## Assets
- `/images/home/home-01.png` through `home-07.png`

## Text Content
- None (pure visual gallery)

## Responsive Behavior
- **Desktop (1440px):** Full-width images, tall vertical stack
- **Tablet (810px):** Same, full-width
- **Mobile (390px):** Same, full-width, natural stacking
- Parallax effect may be disabled on mobile for performance (simple scroll)

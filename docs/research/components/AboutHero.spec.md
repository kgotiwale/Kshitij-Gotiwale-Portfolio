# AboutHero Specification

## Overview
- **Target file:** `src/components/AboutHero.tsx`
- **Interaction model:** Scroll-driven entrance animations (fade-up via IntersectionObserver)
- **Page:** About page

## DOM Structure
```
<section> (hero wrapper, white bg)
  <div> (two-column layout: photo left, text right)
    <div> (photo column)
      <div> (photo stack wrapper, position: relative)
        {/* Profile photo */}
        <Image src="/images/about/profile.png" border-radius: 10px, yellow glow shadow />
        {/* OCD badge - rotated sticker */}
        <Image src="/images/about/ocd-badge.png" transform: rotate(10deg) />
        {/* Colored dots scattered around photo */}
        <span class="dot green" />
        <span class="dot blue" />
        <span class="dot red" />
        <span class="dot yellow" />
        ...more dots
      </div>
    </div>
    <div> (text column)
      <p>Ankita is an independent art director...</p>
      <p>With a multidisciplinary approach...</p>
      <p>Her practice blends strategic clarity...</p>
      <p>She approaches every project with intention...</p>
      <p>She is dedicated to producing work...</p>
      <p>At the heart of it all...</p>
    </div>
  </div>
</section>
```

## Computed Styles

### Section container
- background-color: #FFFFFF
- padding-top: 80px (below fixed nav)
- padding-bottom: 60px
- padding-left: 24px
- padding-right: 24px

### Two-column layout
- display: grid
- grid-template-columns: 1fr 1fr (desktop)
- gap: 60px
- max-width: 1200px
- margin: 0 auto

### Photo wrapper (relative container for stacking)
- position: relative
- display: inline-block

### Profile image
- width: ~400px (inferred from 1356×1616 natural at display size)
- aspect-ratio: 1356/1616 = 0.84
- border-radius: 10px
- box-shadow: 0.4px 0.5px 3.3px rgba(255,238,0,0), 1.2px 1.3px 8.9px rgba(255,238,0,0), 2.7px 2.8px 19.4px rgba(255,238,0,0.01), 5.9px 6.3px 43.1px rgba(255,238,0,0.02), 15px 16px 109.7px rgba(255,238,0,0.06)
  (yellow glow, very subtle — from the actual extracted box-shadow values)
- object-fit: fill (the framer HTML shows object-fit:fill not cover)

### OCD badge image
- position: absolute
- transform: translate(-50%, -50%) rotate(10deg)
- width: ~200px (inferred from 709×476 natural size at display)
- border-radius: 4px

### Colored dots
- position: absolute
- border-radius: 100% (perfect circles)
- width: 12px, height: 12px (small dots)
- Various colors: #00BC22, #0066FF, #FF0000, #FFEE00
- Scattered at various positions around the photo
- Dot positions (inferred from about page HTML with 12+ dots):
  - top-right area: green, blue
  - left area: red, yellow
  - bottom area: green, red, yellow
  - More scattered throughout

### Body text
- font-family: "General Sans Variable" / "General Sans"
- font-size: 15px
- font-weight: 480 (variable font axis "wght" 480 — closest CSS is font-weight: 400-500)
- letter-spacing: 0.08em
- line-height: 1.6em
- color: #000000

## States & Behaviors

### Scroll entrance animation
- Elements fade up as they enter viewport
- opacity: 0 → 1, translateY: 20px → 0
- IntersectionObserver: threshold 0.1
- transition: opacity 0.6s ease, transform 0.6s ease
- Stagger: text paragraphs animate with 0.1s delay between them

## Assets
- `/images/about/profile.png` (1356×1616)
- `/images/about/ocd-badge.png` (709×476)

## Text Content (verbatim)
```
Ankita is an independent art director, brand designer,
and illustrator based in Bengaluru, India.

With a multidisciplinary approach and a strong focus on craft, she partners with clients across sectors and geographies to develop thoughtful brands that are as intentional as they are impactful.

Her practice blends strategic clarity with refined visual craft. She approaches every project with intention—guided by curiosity and driven by detail. She is dedicated to producing work that feels both relevant and timeless—design that resonates, communicates, and connects. At the heart of it all is a commitment to designing with purpose, empathy, and a deep respect for the craft.
```

## Responsive Behavior
- **Desktop (1440px):** 2-column grid (photo | text), photo on left
- **Tablet (810px):** 2-column grid with reduced gap
- **Mobile (390px):** Single column, photo stacks above text, photo full-width
- **Breakpoint:** ~810px (matches Framer breakpoint)

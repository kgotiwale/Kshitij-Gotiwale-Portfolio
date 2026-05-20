# MarqueeTicker Specification

## Overview
- **Target file:** `src/components/MarqueeTicker.tsx`
- **Interaction model:** Time-driven (CSS animation, infinite horizontal scroll)
- **Used on:** About page

## DOM Structure
```
<div> (ticker outer, overflow: hidden, full-width)
  <div> (ticker inner, flex row, width: 200%, animation: marquee 20s linear infinite)
    <span>• TOTE BAG COLLECTOR</span>
    <span>• PROFESSIONAL STICKER MAKER</span>
    <span>• SERIAL THRIFTER</span>
    <span>• SUSHI ADDICT</span>
    <span>• 2000'S POP SONG MEMORIZER</span>
    {/* duplicate set for seamless loop */}
    <span>• TOTE BAG COLLECTOR</span>
    <span>• PROFESSIONAL STICKER MAKER</span>
    <span>• SERIAL THRIFTER</span>
    <span>• SUSHI ADDICT</span>
    <span>• 2000'S POP SONG MEMORIZER</span>
  </div>
</div>
```

## Computed Styles

### Outer container
- overflow: hidden
- width: 100%
- white-space: nowrap
- padding: 16px 0 (inferred)

### Inner scrolling div
- display: flex
- flex-direction: row
- gap: 32px (inferred)
- width: max-content (so it can scroll)
- animation: marquee 20s linear infinite
- will-change: transform

### Ticker text items
- font-family: "General Sans"
- font-size: 15px
- font-weight: 500
- letter-spacing: 0.08em
- text-transform: uppercase
- color: #000000
- white-space: nowrap

### Dot separator between items
- Use bullet "•" or "·" as separator between items

## States & Behaviors

### Marquee animation (from globals.css)
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
}
```
- Items are duplicated to enable seamless loop (translate -50% = one full set)
- No pause on hover

## Assets
- No images

## Text Content (verbatim)
Items (in order, repeat × 2 for loop):
1. TOTE BAG COLLECTOR
2. PROFESSIONAL STICKER MAKER
3. SERIAL THRIFTER
4. SUSHI ADDICT
5. 2000'S POP SONG MEMORIZER

## Responsive Behavior
- **All breakpoints:** Same horizontal scroll, full-width container
- Font size and speed stay consistent

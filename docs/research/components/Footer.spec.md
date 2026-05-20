# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** Static + live clock (JavaScript `setInterval`)
- **Used on:** About, Work, Archive pages (NOT Home)

## DOM Structure
```
<footer>
  <div> (top section)
    <p>"Let's [Chat/Connect/Collab]?"</p>   ← CTA varies per page
    <p>CONTACT</p>
  </div>
  <hr /> (divider)
  <div> (contact grid)
    <div>
      <span>{time}</span>  ← live IST clock
      <span>(IST)</span>
    </div>
    <div>
      <a href="tel:+917057504275">+91 7057504275 (Call + Whatsapp)</a>
      <a href="mailto:onecuriousdsouza@gmail.com">onecuriousdsouza@gmail.com</a>
    </div>
    <div>Bengaluru, India</div>
  </div>
  <hr />
  <div> (bottom bar)
    <span>© 2025 by Ankita D'Souza</span>
    <span>Developed by Utkarsh Vasist</span>
  </div>
</footer>
```

## Computed Styles

### Footer container
- background-color: #FFFFFF (white pages)
- padding: 60px 24px 40px (inferred)
- border-top: 1px solid #E5E5E5 (inferred — divider)

### CTA heading "Let's Chat?"
- font-family: "General Sans"
- font-size: 30px (largest text on page — inferred from 30px found in data)
- font-weight: 500
- letter-spacing: 0.08em
- color: #000000

### CONTACT label
- font-size: 15px
- font-weight: 500
- letter-spacing: 0.08em
- color: #000000
- text-transform: uppercase

### Contact info text
- font-size: 15px
- font-weight: 400
- letter-spacing: 0.08em
- line-height: 1.6em
- color: #000000

### Live clock
- font-size: 15px
- font-weight: 500
- letter-spacing: 0.08em
- displays as e.g. "17:10"

### Copyright / dev credit
- font-size: 13px (smaller, inferred)
- font-weight: 400
- color: #666666 (muted)

## States & Behaviors

### Live clock
- Updates every second via `setInterval`
- Shows current IST time formatted as HH:MM (24h)
- IST = UTC+5:30
- Implementation: `new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false })`

### CTA text varies by page
- About page: "Let's Chat?"
- Work page: "Let's Connect?"
- Archive page: "Let's Collab?"
- Accept as prop: `ctaText?: string`

## Assets
- No images

## Text Content (verbatim)
- CTA: "Let's Chat?" / "Let's Connect?" / "Let's Collab?"
- "CONTACT"
- "+91 7057504275 (Call + Whatsapp)"
- "onecuriousdsouza@gmail.com"
- "Bengaluru, India"
- "© 2025 by Ankita D'Souza"
- "Developed by Utkarsh Vasist"

## Responsive Behavior
- **Desktop (1440px):** Contact grid = 3 columns (time | phone+email | location)
- **Tablet (810px):** May stack to 2 columns
- **Mobile (390px):** Single column stack

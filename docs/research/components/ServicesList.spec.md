# ServicesList Specification

## Overview
- **Target file:** `src/components/ServicesList.tsx`
- **Interaction model:** Static
- **Page:** About page (below AboutHero)

## DOM Structure
```
<section> (white bg)
  <div> (two-column or single-column layout)
    <div> (SERVICES section)
      <h2>SERVICES</h2>
      <ol>
        <li>1. Brand Identity</li>
        <li>2. Packaging</li>
        <li>3. Illustration</li>
        <li>4. Print & Editorial</li>
        <li>5. Social Media</li>
        <li>6. Environmental Graphics</li>
      </ol>
    </div>
    <div> (SELECT CLIENTS section)
      <h2>SELECT CLIENTS</h2>
      <p>Parle, O Pedro, Smoor - True Couverture Chocolates,
      Anand Sweets & Savouries, Kempegowda International Airport,
      Toit, YLabs, EuroAirport - Basel, Mulhouse, Freiburg,
      ADP List, Paash, and Noise Jr.</p>
    </div>
    <div> (PROJECT BUCKET LIST section)
      <h2>PROJECT BUCKET LIST</h2>
      <ol>
        <li>1. Illustrate a travel zine</li>
        <li>2. Curate an exhibition of objects</li>
        <li>3. Design a book on collections</li>
        <li>4. Brand/rebrand a museum</li>
        <li>5. Create a Christmas Ornament line</li>
      </ol>
    </div>
  </div>
</section>
```

## Computed Styles

### Section container
- background-color: #FFFFFF
- padding: 60px 24px

### Section heading (SERVICES, SELECT CLIENTS, etc.)
- font-family: "General Sans"
- font-size: 15px
- font-weight: 500
- letter-spacing: 0.08em
- text-transform: uppercase
- color: #000000
- margin-bottom: 20px

### List items
- font-family: "General Sans"
- font-size: 15px
- font-weight: 400
- letter-spacing: 0.08em
- line-height: 1.6em
- color: #000000
- list-style: none (numbers are part of text content)

### Section divider
- The three sections are laid out with consistent spacing
- Each section separated by visual space, not lines

### Client name with link (Kempegowda International Airport)
- color: #000000
- text-decoration: underline (it's an anchor in the source)
- href: https://www.bengaluruairport.com/

## States & Behaviors
- N/A — static content

## Assets
- No images

## Text Content (verbatim)
```
SERVICES
1. Brand Identity
2. Packaging
3. Illustration
4. Print & Editorial
5. Social Media
6. Environmental Graphics

SELECT CLIENTS
Parle, O Pedro, Smoor - True Couverture Chocolates,
Anand Sweets & Savouries, Kempegowda International Airport,
Toit, YLabs, EuroAirport - Basel, Mulhouse, Freiburg,
ADP List, Paash, and Noise Jr.

PROJECT BUCKET LIST
1. Illustrate a travel zine
2. Curate an exhibition of objects
3. Design a book on collections
4. Brand/rebrand a museum
5. Create a Christmas Ornament line
```

## Responsive Behavior
- **Desktop (1440px):** Three sections in a row or stacked vertically with consistent padding
- **Mobile (390px):** Single column stack

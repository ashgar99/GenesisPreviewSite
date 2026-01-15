# Genesis Brand Assets

A complete set of brand assets for the Genesis website and marketing materials.

## Folder Structure

```
genesis-assets/
├── favicon/           # Favicons and app icons
├── icons/             # UI icons and symbols
├── logos/             # Logo variations
├── images/            # Social images and patterns
└── brand/             # Colour swatches and palette
```

---

## Favicon (`/favicon`)

| File | Size | Usage |
|------|------|-------|
| `favicon.svg` | Scalable | Modern browsers |
| `favicon-16.svg` | 16×16 | Browser tab |
| `favicon-32.svg` | 32×32 | Browser tab (retina) |
| `apple-touch-icon.svg` | 180×180 | iOS home screen |

### Implementation
```html
<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg">
<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png">
```

---

## Logos (`/logos`)

| File | Background | Usage |
|------|------------|-------|
| `logo-wordmark-dark.svg` | Light | Primary wordmark |
| `logo-wordmark-light.svg` | Dark | Inverted wordmark |
| `logo-mark-dark.svg` | Light | Icon only (charcoal) |
| `logo-mark-light.svg` | Dark | Icon only (cream) |
| `logo-mark-teal.svg` | Any | Icon only (teal accent) |
| `logo-full-dark.svg` | Light | Mark + wordmark |
| `logo-full-light.svg` | Dark | Mark + wordmark inverted |

### Clear Space
Maintain padding equal to the height of the "G" around all logo variants.

---

## Icons (`/icons`)

### Brand Symbols

| File | Meaning | Use When |
|------|---------|----------|
| `symbol-a-dual-circles.svg` | Dual intelligence | Discussing RIM + IEM, the two models |
| `symbol-a-dual-circles-light.svg` | (Light variant) | On dark backgrounds |
| `symbol-b-nested-squares.svg` | Intent within execution | Discussing intent, strengths, methodology |
| `symbol-b-nested-squares-light.svg` | (Light variant) | On dark backgrounds |

### Verdict Icons

| File | Verdict | Colour |
|------|---------|--------|
| `verdict-pass.svg` | Pass | #4a7c5c |
| `verdict-fail.svg` | Fail | #8c5a5a |
| `verdict-coincidence.svg` | Coincidence | #7c6f4a |
| `verdict-uncertain.svg` | Uncertain | #9a968f |

### Social Icons

| File | Platform |
|------|----------|
| `social-linkedin.svg` | LinkedIn |
| `social-x.svg` | X (Twitter) |

### UI Icons

| File | Usage |
|------|-------|
| `check.svg` | Checkmarks, confirmations |
| `arrow-right.svg` | CTAs, navigation |
| `menu.svg` | Mobile menu (hamburger) |
| `close.svg` | Close/dismiss |

---

## Images (`/images`)

| File | Dimensions | Platform |
|------|------------|----------|
| `og-image.svg` | 1200×630 | Open Graph (Facebook, LinkedIn) |
| `twitter-card.svg` | 1200×600 | Twitter/X cards |
| `linkedin-banner.svg` | 1584×396 | LinkedIn company page |
| `pattern-grid.svg` | 800×600 | Background pattern |

### Implementation
```html
<meta property="og:image" content="/images/og-image.png">
<meta name="twitter:image" content="/images/twitter-card.png">
```

**Note:** Convert SVGs to PNG for social media (they don't support SVG).

---

## Brand Colours (`/brand`)

### Colour Swatches (200×200 each)

| File | Hex | Usage |
|------|-----|-------|
| `swatch-charcoal-deep.svg` | #1a1d21 | Primary dark, text, nav |
| `swatch-charcoal.svg` | #2a2d31 | Secondary dark, hover states |
| `swatch-cream.svg` | #f8f7f4 | Primary light, backgrounds |
| `swatch-cream-dark.svg` | #eeece7 | Secondary light, borders |
| `swatch-teal.svg` | #4a7c7c | Accent, CTAs, links |
| `swatch-warm-grey.svg` | #9a968f | Secondary text, labels |
| `swatch-pass.svg` | #4a7c5c | Pass verdict |
| `swatch-fail.svg` | #8c5a5a | Fail verdict |
| `swatch-uncertain.svg` | #7c6f4a | Coincidence/Uncertain verdict |

### Complete Palette Reference

`colour-palette.svg` — Full palette with all colours and typography notes.

---

## CSS Variables

```css
:root {
  /* Primary */
  --charcoal-deep: #1a1d21;
  --cream: #f8f7f4;
  --teal: #4a7c7c;
  
  /* Secondary */
  --charcoal: #2a2d31;
  --charcoal-light: #3d4147;
  --cream-dark: #eeece7;
  --warm-grey: #9a968f;
  --warm-grey-light: #c4c0b9;
  --teal-light: #5d9191;
  --teal-dark: #3a6262;
  
  /* Verdicts */
  --pass: #4a7c5c;
  --fail: #8c5a5a;
  --uncertain: #7c6f4a;
  
  /* Typography */
  --display: 'Fraunces', Georgia, serif;
  --body: 'DM Sans', -apple-system, sans-serif;
}
```

---

## Typography

### Fonts

| Font | Weight | Usage |
|------|--------|-------|
| Fraunces | 300, 400, 500 | Headlines, display |
| DM Sans | 400, 500, 600, 700 | Body, UI |

### Google Fonts Import
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## File Formats

All assets are provided as SVG for:
- Infinite scalability
- Small file sizes
- Easy colour modification
- Code editability

For production, convert to:
- **PNG** — Social media images, fallback favicons
- **ICO** — Legacy favicon support
- **WEBP** — Optimised web images

### Conversion Commands (ImageMagick)
```bash
# SVG to PNG
convert -density 300 og-image.svg og-image.png

# SVG to ICO (favicon)
convert favicon-32.svg -define icon:auto-resize=32,16 favicon.ico
```

---

## Usage Guidelines

### Do
- Use logos with adequate clear space
- Match logo variant to background (dark on light, light on dark)
- Use Symbol A when discussing dual models/technology
- Use Symbol B when discussing intent/strengths
- Maintain colour consistency with provided hex values

### Don't
- Stretch or distort logos
- Place dark logos on dark backgrounds
- Modify brand colours
- Add effects (shadows, gradients) to logos
- Use symbols interchangeably — they have specific meanings

---

## Questions?

This asset package was created for Genesis. For questions about usage or additional formats, refer to the master brand document.

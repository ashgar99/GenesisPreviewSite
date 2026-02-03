# Genesis Website Redesign

A comprehensive redesign of the Genesis marketing website, built with Next.js 14, TypeScript, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
genesis-site/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (nav, footer)
│   ├── page.tsx            # Homepage
│   ├── platform/           # Platform page
│   ├── pricing/            # Pricing page
│   ├── solutions/          # Solutions pages
│   ├── case-studies/       # Case studies
│   ├── resources/          # Blog/resources
│   ├── company/            # About page
│   ├── contact/            # Contact form
│   └── legal/              # Privacy, terms, cookies
├── components/
│   ├── layout/             # Navigation, Footer, Container
│   ├── sections/           # Page section components (16+)
│   └── ui/                 # Reusable UI components
├── public/                 # Static assets
└── tailwind.config.ts      # Design system tokens
```

## Design System

### Colors
- **Neutrals**: Charcoal (#1a1d21) → Cream (#f8f7f4)
- **Brand**: Teal (#4a7c7c)
- **Verdicts**: Pass (green), Fail (red), Coincidence (gold), Uncertain (grey)

### Typography
- **Display**: Fraunces (serif) - Headlines
- **Body**: DM Sans (sans-serif) - Body text

### Spacing
- rem-based scale (4px base unit)
- Section padding: 6rem (96px) on desktop, 4rem (64px) on mobile

## Preview Checklist

Before committing, verify:

- [ ] **Navigation works on mobile/desktop** - Toggle mobile menu, all links navigate correctly
- [ ] **Focus states visible** - Tab through interactive elements, focus rings appear
- [ ] **Reduced motion works** - Enable `prefers-reduced-motion`, animations disabled
- [ ] **No layout shift in hero** - Hero content doesn't jump as page loads
- [ ] **All pages render** - Visit each route, no console errors
- [ ] **Forms work** - Submit contact form, verify feedback message
- [ ] **Responsive breakpoints** - Test at 375px, 768px, 1024px, 1440px

## Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | ≥90 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Commit Strategy

1. `chore: setup next.js + tokens` - Initial project setup
2. `feat: global shell (nav/footer)` - Layout components
3. `feat: section components` - All reusable sections
4. `feat: home page composition` - Home page
5. `feat: secondary pages` - Platform, pricing, etc.
6. `chore: a11y + perf fixes` - Final optimizations

## TODO Items

The following placeholders need real content:

- [ ] Client logos for trust strip
- [ ] Real case studies with client permission
- [ ] Team member photos and bios
- [ ] Blog post content (MDX)
- [ ] Outcome metrics with real data
- [ ] Screenshots of the Genesis Profile product

## Key Features

- **Accessibility-first**: Semantic HTML, keyboard navigation, focus states, reduced motion support
- **Performance-optimized**: Static generation, optimized fonts, minimal JS
- **Responsive**: Mobile-first design with careful breakpoint handling
- **Design system**: Consistent tokens for colors, spacing, typography
- **Section library**: 16+ reusable sections for flexible page composition
- **Proof architecture**: Clear markers for placeholders that need real content

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide Icons
- Static export ready (for simple hosting)

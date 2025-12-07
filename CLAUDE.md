# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Barware.io is a marketing website for macOS menu bar applications (CatBar, BarMarks, DogBar, ReddBar). It's a static Next.js 14 site deployed via GitHub Pages.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Generate sitemap + static export (runs tsx scripts/generate-sitemap.ts && next build)
npm run lint     # Run ESLint
npm run deploy   # Deploy to GitHub Pages (gh-pages -d out)
```

## Architecture

### Static Export
- Configured for static export (`output: 'export'` in next.config.mjs)
- Images are unoptimized for static hosting
- Build outputs to `/out` directory

### Data-Driven App Pages
- All app data lives in `data/apps.ts` as a single `apps` array
- App type definitions in `types/index.ts` (`AppType`, `Testimonial`)
- Dynamic routes at `/apps/[slug]` use `generateStaticParams()` to pre-render all app pages
- Each app has: features, requirements, pricing, privacy policy, testimonials

### Component Organization
- `components/ui/` - shadcn/ui components (Button, Card)
- `components/home/` - Homepage sections (HeroSection, Features, AppShowcase, About)
- `components/layout/` - Header, Footer
- `components/apps/` - App-specific components

### Styling
- Tailwind CSS with shadcn/ui configuration
- CSS variables for theming (defined in globals.css)
- `cn()` utility in `lib/utils.ts` for class merging

### Path Aliases
- `@/*` maps to project root (e.g., `@/components`, `@/data/apps`)

## Adding a New App

1. Add app icon to `public/assets/`
2. Import icon and add full `AppType` object to `data/apps.ts`
3. Pages auto-generate from the data (app page, privacy page)
4. Sitemap regenerates on build

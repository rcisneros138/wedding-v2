# Code Style and Conventions

## TypeScript Configuration
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler
- JSX: preserve
- Path alias: `@/*` maps to root directory

## React/Next.js Conventions
- Using Next.js 13+ app directory structure
- Functional components with TypeScript
- Components exported as default
- Props interfaces defined when needed

## Styling Conventions
- **Primary**: Tailwind CSS classes for all styling
- Mobile-first responsive design
- CSS variables for design tokens (colors, fonts)
- Custom shadow utilities defined in Tailwind config
- No inline styles unless absolutely necessary

## Naming Conventions
- Components: PascalCase (e.g., `Hero.tsx`, `ShadowButton.tsx`)
- Files: Match component names for components
- CSS classes: Tailwind utility classes
- Colors: Semantic naming (surface, primary, accent, shadow)

## Design System
- Colors defined as CSS variables in globals.css
- Fonts: Pacifico for display, Playfair Display for buttons (Recia Serif Display when licensed), Inter for body
- Consistent shadow treatment with offset positioning
- Container-based scaling for responsive design
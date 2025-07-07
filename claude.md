# Wedding Website Project

## Overview
This is a wedding website for Ashlyn & Royal's wedding on January 24, 2026 in Mexico. The design is based on a Figma file with a vintage, textured aesthetic using warm colors and decorative elements.

## Design System

### Color Palette
- **Background**: `#D9DDCD` - Light sage green
- **Primary Red**: `#8C3112` - Deep red/maroon
- **Dark Red**: `#70270E` - Darker red for shadows
- **Peach/Coral**: `#FEA88A` - Accent color for text
- **Purple**: `#C7ACBE` - Light purple for buttons
- **Dark Shadow**: `#101C26` - Near black for shadows
- **White**: `#FFFFFF`

### Typography
- **Display Font**: Pacifico (400) - Used for decorative text like "See You In Mexico!"
- **Button Font**: Recia Serif Display (700) - Used for RSVP button
  - Currently using Playfair Display (700) as a fallback
  - Recia Serif Display requires a commercial license
  - Font setup prepared in `/public/fonts/` directory
- **Body Font**: Inter - Default body text

### Font Implementation
The project is set up to easily switch to Recia Serif Display once licensed:
1. Place font files in `/public/fonts/`
2. Uncomment the @font-face declaration in `globals.css`
3. Update `--font-display` CSS variable to use 'Recia Serif Display'

### Key Design Elements
1. **Textured Backgrounds**: Dot patterns and grunge textures for depth
2. **Squiggle Arc**: Large decorative element containing the hero title
3. **Wavy Lines**: Decorative underlines for text
4. **Drop Shadows**: Consistent shadow treatment with offset positioning
5. **Rounded Corners**: Asymmetric rounded corners on sections

## Component Structure

### Navigation
- Pill-shaped navigation with offset shadow effect
- Mobile-first responsive design
- Diagonal line texture overlay
- Hamburger menu with logo for mobile
- Desktop horizontal menu with centered links
- Smooth hover effects and transitions
- Links: Home, Our Story, Details, RSVP, Registry

### Hero Section
- Large squiggle arc with hero title SVG
- Portrait illustration with multiple layers
- Date and location text with wavy underlines
- RSVP button with hover effect
- Textured section below with grunge overlay
- **Container-based scaling**: All elements scale relative to a constrained container
  - Container: max-width of 1600px with aspect ratio preservation
  - Content positioned within arc: Uses `top-[5%] h-[55%]` to constrain content to the visible arc area
  - Hero Title: 80% of container width for optimal fit within arc
  - Portrait: 25% of container width positioned at bottom of title
  - RSVP button: Centered with responsive scaling
  - Wavy lines and text: Positioned at bottom of arc with 10% horizontal padding
  - This approach ensures all content sits within the squiggle arc and scales proportionally

## Figma Assets
All design assets have been extracted from Figma and stored in `/public/images/figma-assets/`:
- SVG illustrations (squiggle, title, portrait layers)
- PNG textures (dots pattern, grunge texture, diagonal lines)
- Decorative elements (wavy lines)

## Development Notes

### Next Steps
1. Add Recia Serif Display font for buttons
2. Implement remaining sections (Our Story, Details, RSVP form, Registry)
3. Add smooth scroll navigation
4. Implement RSVP functionality
5. Add animations and hover effects
6. Ensure full mobile responsiveness

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linting

### Tech Stack
- Next.js 15.3.4
- React 19
- TypeScript
- Tailwind CSS 4
- next/font for typography

## File Structure
```
/app
  /components
    - Navigation.tsx
    - Hero.tsx
  - page.tsx
  - layout.tsx
  - globals.css
/public
  /images
    /figma-assets
      - [All extracted Figma assets]
```

## Development Principles
- Always use React components when possible within best practices
- Always use Tailwind for styling when possible within best practices

## Development Best Practices
- When implementing changes, ensure the final design matches any Figma design provided before marking complete. For styling changes, use a browser to confirm changes.

## Development Workflow Tips
- Always check to see if a development server is already running on port 3000 before attempting to run another one.
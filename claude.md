# Wedding Website Project

## Overview
This is a wedding website for Ashlyn & Royal's wedding on January 24, 2026 in Mexico. The design is based on a Figma file with a vintage, textured aesthetic using warm colors and decorative elements.

## Development Principles
- Always use React components when possible within best practices
- Always use Tailwind for styling when possible within best practices
- Always use sequential thinking and context when possible
- Use Serena as an agent at all times
- Use serena along with sequential thinking and context7 to solve issues and implement changes
- Additionally, use playwright to confirm changes or test changes
- Try and apply best practices when possible

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

### Hero Component
- Includes both hero section and info section as one unified component
- **Hero Section**:
  - Large squiggle arc with hero title SVG
  - Portrait illustration with multiple layers
  - Date and location text with wavy underlines
  - RSVP button with hover effect
- **Info Section**:
  - Maroon background section that flows naturally after arc
  - No gaps or transition issues
- **Container-based scaling**: All elements scale relative to a constrained container
  - Container: max-width of 1600px with aspect ratio preservation
  - Content positioned within arc: Uses `top-[25%] h-[50%]` to constrain content to the visible arc area
  - Hero Title: Responsive widths - 60% (mobile), 70% (sm), 80% (md+) for optimal containment
  - Portrait: Responsive widths - 15% (mobile), 20% (sm), 25% (md), 30% (lg) for noticeable size progression
    - Responsive vertical spacing using translate-y: 65% (mobile), 55% (sm), 50% (md+)
    - More space from title on small screens, less on larger screens
  - Content padding: 3% (mobile), 5% (sm+) for better edge spacing on small screens
  - RSVP button: Container-based scaling - 35% (mobile), 30% (sm), 35% (md), 40% (lg)
    - Uses relative sizing mode in ShadowButton component
    - Maintains 4.5:1 aspect ratio for wider pill shape with 12% vertical padding
    - Responsive font sizes: 0.8em (mobile), 0.9em (sm), 1em (md), 1.1em (lg)
    - Reduced shadow size (4px normal, 3px hover) for smaller button
  - Wavy lines and text: Positioned at bottom of arc with 10% horizontal padding
  - This responsive approach prevents hero title overflow on small screens while maintaining proportions

## Figma Assets
All design assets have been extracted from Figma and stored in `/public/images/figma-assets/`:
- SVG illustrations (squiggle, title, portrait layers)
- PNG textures (dots pattern, grunge texture, diagonal lines)
- Decorative elements (wavy lines)

## Section Transitions
- Hero and Info sections are now part of a unified component structure
- Info section flows naturally after the hero arc with no gaps
- No negative margins or complex positioning needed
- Seamless transition guaranteed at all viewport widths
- Both sections maintain viewport-based scaling with `calc(95vw * X / 1380)`

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

## Development Best Practices
- When implementing changes, ensure the final design matches any Figma design provided before marking complete. For styling changes, use a browser to confirm changes.

## Development Workflow Tips
- Always check to see if a development server is already running on port 3000 before attempting to run another one.
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
- Always prefer to use tailwind utility classes if possible. Use best practice to tailwind.

## Memory Notes
- Do not change or remove the import 'tailwindcss' on line 1 in global.css. If it is necessary, prompt me first
- Remember to use context7 when referencing anything related to tailwind. The version of tailwind in this application is v4 and does not use the tailwind.config* anylonger.

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

### Single-Page Architecture
- Website is now a single-page application with smooth scrolling between sections
- Navigation uses anchor links (#home, #our-story, #details, #rsvp, #registry)
- Sections flow: Navigation → Hero → [Our Story] → [Details] → RSVP → [Registry]
- RSVP form integrated directly into main page, no separate route needed

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
    - **Updated positioning**: Changed from absolute centered positioning to relative positioning with auto margins for improved layout stability
  - Wavy lines and text: Positioned at bottom of arc with 10% horizontal padding
  - This responsive approach prevents hero title overflow on small screens while maintaining proportions

### RSVP Section
- Integrated directly into main page for single-page flow
- Seamlessly continues maroon background from Hero's info section
- Uses same container structure and drop shadow as info section
- Includes:
  - Section header with white text and decorative wavy line
  - RSVP deadline reminder in white/translucent white
  - RSVPForm component (white background card) with Turnstile spam protection
  - Wedding details reminder (date, time, location) as separate maroon section
- Uses dots pattern overlay at low opacity for texture
- Creates continuous maroon flow from info section through RSVP

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
2. Implement remaining sections (Our Story, Details, Registry)
3. ~~Add smooth scroll navigation~~ ✓ Completed
4. ~~Implement RSVP functionality~~ ✓ Completed
5. Add animations and hover effects
6. Ensure full mobile responsiveness

### Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linting
- `npm run db:migrate:local` - Run database migrations locally
- `npm run db:migrate:remote` - Run database migrations on production
- `npm run pages:preview` - Preview on Cloudflare Pages locally
- `npm run pages:deploy` - Deploy to Cloudflare Pages

### Tech Stack
- Next.js 15.3.4
- React 19
- TypeScript
- Tailwind CSS 4
- next/font for typography
- Cloudflare D1 Database (SQLite)
- Cloudflare Turnstile for spam protection
- React Hook Form + Zod for form validation

## File Structure
```
/app
  /api
    /rsvp
      - route.ts         # RSVP submission endpoint
    /verify-turnstile
      - route.ts         # Turnstile verification endpoint
  /components
    - Navigation.tsx
    - Hero.tsx
    - RSVPSection.tsx    # RSVP section for main page
    - RSVPForm.tsx       # RSVP form with Turnstile
    - ShadowButton.tsx
    - WavyLine.tsx
  /types
    - rsvp.ts           # RSVP type definitions
  - page.tsx
  - layout.tsx
  - globals.css
/public
  /images
    /figma-assets
      - [All extracted Figma assets]
/schemas
  - rsvp-schema.sql      # D1 database schema
- wrangler.toml         # Cloudflare configuration
```

## Development Best Practices
- When implementing changes, ensure the final design matches any Figma design provided before marking complete. For styling changes, use a browser to confirm changes.

## Development Workflow Tips
- Always check to see if a development server is already running on port 3000 before attempting to run another one.

## RSVP System

### Overview
The RSVP system uses Cloudflare D1 (SQLite database) for storage and Cloudflare Turnstile for spam protection. All API routes use Edge Runtime for compatibility with Cloudflare Pages.

### Setup Instructions
1. **Create Cloudflare Turnstile Site**:
   - Go to https://dash.cloudflare.com/?to=/:account/turnstile
   - Create a new site and get your site key and secret key
   - Add site key to `NEXT_PUBLIC_TURNSTILE_SITE_KEY` in wrangler.toml
   - Add secret key using: `npx wrangler secret put TURNSTILE_SECRET_KEY`

2. **Create D1 Database**:
   - Run: `npx wrangler d1 create wedding-rsvp`
   - Copy the database ID to wrangler.toml
   - Run migrations: `npm run db:migrate:local` (for development)
   - Run migrations: `npm run db:migrate:remote` (for production)

3. **Environment Variables**:
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Public Turnstile site key
   - `TURNSTILE_SECRET_KEY` - Secret key (add via wrangler secret)

### Database Schema
- Stores guest information, attendance status, dietary restrictions
- Prevents duplicate submissions using email as unique constraint
- Tracks IP addresses for security
- Automatic timestamps for created/updated dates

### Form Features
- Client-side validation with React Hook Form + Zod
- Server-side validation and sanitization
- Spam protection with Cloudflare Turnstile
- Responsive design matching wedding theme
- Success/error states with user feedback
- Handles both attending and not attending responses
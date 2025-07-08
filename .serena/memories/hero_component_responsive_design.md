# Hero Component Responsive Design Specifications

## Container-based Scaling Approach
All elements scale relative to a constrained container with max-width of 1600px and aspect ratio preservation.

## Content Positioning
- Content within arc: `top-[25%] h-[50%]` to constrain to visible arc area
- Content padding: 3% (mobile), 5% (sm+) for better edge spacing

## Hero Title Responsive Widths
- Mobile: 60%
- Small (sm): 70%
- Medium+ (md+): 80%

## Portrait Responsive Sizing
- Mobile: 15% width
- Small (sm): 20% width
- Medium (md): 25% width
- Large (lg): 30% width
- Vertical spacing (translate-y): 65% (mobile), 55% (sm), 50% (md+)

## RSVP Button Scaling
- Container-based widths: 35% (mobile), 30% (sm), 35% (md), 40% (lg)
- Uses relative sizing mode in ShadowButton component
- Maintains 4.5:1 aspect ratio with 12% vertical padding
- Font sizes: 0.8em (mobile), 0.9em (sm), 1em (md), 1.1em (lg)
- Shadow size: 4px normal, 3px hover

## Section Transitions
- Hero and Info sections are unified in one component
- Info section flows naturally after arc with no gaps
- No negative margins or complex positioning needed
- Both sections use viewport-based scaling: `calc(95vw * X / 1380)`
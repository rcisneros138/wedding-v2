# Custom Fonts

## Fonts Used in Design

### 1. Pacifico
- **Usage**: Decorative text ("See You In Mexico!", "Jan 24, 2026")
- **Status**: ✅ Installed via Google Fonts
- **Weight**: 400

### 2. Recia Serif Display
- **Usage**: RSVP button and other display text
- **Status**: ⚠️ Requires license for commercial use
- **Weight**: 700
- **Alternative**: Currently using Playfair Display as a similar serif font

## How to Add Recia Serif Display

If you have obtained a license for Recia Serif Display:

1. Download the font files (woff2, woff) from your licensed source
2. Place them in this `/public/fonts/` directory
3. Uncomment the @font-face declaration in `/app/globals.css`
4. Update the font references in components

## Font Sources

- **Recia Serif Display**: Available for personal use at various font websites
- **Commercial License**: Contact Diego González (the designer) for commercial use

## Current Font Setup

```css
/* Pacifico - Google Font */
--font-pacifico: 'Pacifico', cursive;

/* Playfair Display - Google Font (Recia alternative) */
--font-playfair: 'Playfair Display', serif;
```
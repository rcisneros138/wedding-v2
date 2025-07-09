# ShadowButton Tailwind v4 Breakpoints Reference

This document details all Tailwind v4 responsive breakpoints used in the ShadowButton component.

## Breakpoint Definitions

The following breakpoints are defined in `globals.css`:

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

## Component Breakpoints (Unified Implementation)

The ShadowButton component now uses a single, unified approach that always scales with breakpoints.

### Padding Breakpoints
- **Base (< 640px)**: `px-5 py-2` (20px horizontal, 8px vertical)
- **Small (≥ 640px)**: `sm:px-8 sm:py-2.5` (32px horizontal, 10px vertical)
- **Medium (≥ 768px)**: `md:px-10 md:py-3.5` (40px horizontal, 14px vertical)
- **Large (≥ 1024px)**: `lg:px-12 lg:py-4` (48px horizontal, 16px vertical)

### Minimum Width Breakpoints
- **Base (< 640px)**: `min-w-[140px]`
- **Small (≥ 640px)**: `sm:min-w-[160px]`
- **Medium (≥ 768px)**: `md:min-w-[200px]`
- **Large (≥ 1024px)**: `lg:min-w-[240px]`

### Text Size Breakpoints
- **Base (< 640px)**: `text-base` (16px)
- **Small (≥ 640px)**: `sm:text-lg` (18px)
- **Medium (≥ 768px)**: `md:text-xl` (20px)
- **Large (≥ 1024px)**: `lg:text-2xl` (24px)

### Shadow Breakpoints

#### Normal State
- **Base (< 640px)**: `shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`
- **Small (≥ 640px)**: `sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
- **Medium (≥ 768px)**: `md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`
- **Large (≥ 1024px)**: `lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`

#### Hover State
- **Base (< 640px)**: `hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`
- **Small (≥ 640px)**: `sm:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`
- **Medium (≥ 768px)**: `md:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
- **Large (≥ 1024px)**: `lg:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`

## Usage Example

```tsx
// All buttons now automatically scale with breakpoints
<ShadowButton
  text="RSVP"
  ariaLabel="RSVP for the wedding"
/>

// Custom styling still supported
<ShadowButton
  text="Submit"
  ariaLabel="Submit form"
  backgroundColor="var(--color-accent)"
  textColor="text-white"
/>
```

## Key Tailwind v4 Features Used

1. **Arbitrary Values**: `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]` for custom shadow effects
2. **Responsive Prefixes**: `sm:`, `md:`, `lg:` for breakpoint-specific styles
3. **Hover Variants**: `hover:` combined with responsive prefixes like `md:hover:`
4. **CSS Variables**: Component uses CSS variables defined in globals.css for colors

## Notes

- The component follows Tailwind's mobile-first approach
- Base styles apply to all screen sizes
- Breakpoint prefixes override base styles at specified widths and above
- Shadow effects use arbitrary values with rgba notation for precise control
- All breakpoints align with the standard Tailwind v4 breakpoints defined in globals.css
- Button element uses `w-fit` to ensure it sizes to its content, allowing inner div's responsive constraints to control overall size
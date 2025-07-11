'use client'

import React from 'react'

/**
 * ShadowButton Component
 *
 * A styled button component with a vintage shadow effect that matches the wedding theme.
 * Supports both text prop and children for flexible content.
 *
 * @example
 * // Using text prop
 * <ShadowButton text="RSVP" onClick={handleClick} />
 *
 * @example
 * // Using children for dynamic content
 * <ShadowButton type="submit" disabled={isLoading}>
 *   {isLoading ? 'Submitting...' : 'Submit Form'}
 * </ShadowButton>
 */
interface ShadowButtonProps {
  /** Button text content - use this OR children, not both */
  text?: string

  /** React children - allows for dynamic content. Takes precedence over text prop */
  children?: React.ReactNode

  /** Background color of the button. Defaults to purple theme color */
  backgroundColor?: string

  /** Text color class. Defaults to 'text-primary' */
  textColor?: string

  /** Text color class on hover. Defaults to 'hover:text-primary-dark' */
  textColorHover?: string

  /** Click handler function */
  onClick?: () => void

  /** Additional CSS classes to apply to the button wrapper */
  className?: string

  /** Accessible label for screen readers. Falls back to text/children if not provided */
  ariaLabel?: string

  /** HTML button type attribute. Useful for form submissions. Defaults to 'button' */
  type?: 'button' | 'submit' | 'reset'

  /** Whether the button is disabled. Shows visual feedback when true */
  disabled?: boolean
}

export default function ShadowButton({
  text,
  children,
  backgroundColor = 'var(--color-purple)',
  textColor = 'text-primary',
  textColorHover = 'hover:text-primary-dark',
  onClick,
  className = '',
  ariaLabel,
  type = 'button',
  disabled = false,
}: ShadowButtonProps) {
  // Unified responsive classes that always scale with breakpoints
  const divClasses =
    'relative flex rounded-full border-2 px-10 py-1.5 sm:px-12 sm:py-2 md:px-15 md:py-3 lg:px-20 lg:px-25 xl:px-30, 2xl:px-40 max-px-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'

  const textClasses = `font-display ${textColor} ${textColorHover} relative font-bold tracking-wider drop-shadow-xs transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-2xl`

  // Determine what to display - children takes precedence over text prop
  const displayText = children || text

  return (
    <button
      className={`group ${className}`}
      onClick={onClick}
      aria-label={
        ariaLabel || (typeof displayText === 'string' ? displayText : undefined)
      }
      type={type}
      disabled={disabled}
    >
      <div
        className={divClasses}
        style={{
          backgroundColor: disabled
            ? 'var(--color-purple-light)'
            : backgroundColor,
          borderColor: 'var(--color-shadow)',
          opacity: disabled ? 0.6 : 1,
        }}
      >
        <span className={textClasses}>{displayText}</span>
      </div>
    </button>
  )
}

/**
 * Implementation Notes:
 *
 * 1. Content Display:
 *    - The component accepts both 'text' prop and 'children'
 *    - If both are provided, 'children' takes precedence
 *    - This allows backward compatibility while supporting dynamic content
 *
 * 2. Button Types:
 *    - type="button" (default) - Standard button for onClick handlers
 *    - type="submit" - For form submission buttons
 *    - type="reset" - For form reset buttons
 *
 * 3. Disabled State:
 *    - When disabled=true, the button:
 *      - Cannot be clicked
 *      - Shows with lighter purple background
 *      - Has reduced opacity (0.6)
 *      - Cursor changes to not-allowed (browser default)
 *
 * 4. Styling:
 *    - Responsive padding and shadow sizes across breakpoints
 *    - Vintage offset shadow effect that reduces on hover
 *    - Rounded pill shape with border
 *    - Customizable background and text colors
 *
 * 5. Accessibility:
 *    - aria-label can be explicitly set
 *    - Falls back to text content if aria-label not provided
 *    - Properly forwards all button attributes
 */

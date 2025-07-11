'use client'

import React from 'react'

/**
 * CompactButton Component
 * 
 * A flexible button component designed for navigation and other compact UI elements.
 * Unlike ShadowButton, this component allows full control over sizing via className.
 * Maintains the vintage shadow effect that matches the wedding theme.
 */
interface CompactButtonProps {
  /** Button text content - use this OR children, not both */
  text?: string

  /** React children - allows for dynamic content. Takes precedence over text prop */
  children?: React.ReactNode

  /** Background color of the button. Defaults to purple theme color */
  backgroundColor?: string

  /** Click handler function */
  onClick?: () => void

  /** CSS classes for complete control over styling */
  className?: string

  /** Accessible label for screen readers. Falls back to text/children if not provided */
  ariaLabel?: string

  /** HTML button type attribute. Defaults to 'button' */
  type?: 'button' | 'submit' | 'reset'

  /** Whether the button is disabled */
  disabled?: boolean

  /** Link URL if this button should be a link */
  href?: string

  /** Target for link */
  target?: string

  /** Rel attribute for link */
  rel?: string
}

export default function CompactButton({
  text,
  children,
  backgroundColor = 'var(--color-purple)',
  onClick,
  className = '',
  ariaLabel,
  type = 'button',
  disabled = false,
  href,
  target,
  rel,
}: CompactButtonProps) {
  const displayText = children || text

  const buttonContent = (
    <div
      className={`relative flex items-center justify-center rounded-full border-2 border-[var(--color-shadow)] bg-purple shadow-button-responsive transition-all duration-300 hover:shadow-button-responsive-hover ${className}`}
      style={{
        backgroundColor: disabled ? 'var(--color-purple-light)' : backgroundColor,
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <span className="font-display text-primary font-bold tracking-wider drop-shadow-xs transition-colors duration-300 hover:text-primary-dark">
        {displayText}
      </span>
    </div>
  )

  // If href is provided, render as a link
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="inline-block"
        aria-label={ariaLabel || (typeof displayText === 'string' ? displayText : undefined)}
      >
        {buttonContent}
      </a>
    )
  }

  // Otherwise render as a button
  return (
    <button
      className="group"
      onClick={onClick}
      aria-label={ariaLabel || (typeof displayText === 'string' ? displayText : undefined)}
      type={type}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  )
}
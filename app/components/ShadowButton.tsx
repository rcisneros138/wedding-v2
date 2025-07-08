'use client'

import React from 'react'

interface ShadowButtonProps {
  text: string
  backgroundColor?: string
  textColor?: string
  textColorHover?: string
  shadowColor?: string
  onClick?: () => void
  className?: string
  ariaLabel?: string
  useRelativeSize?: boolean
}

export default function ShadowButton({
  text,
  backgroundColor = 'var(--color-purple)',
  textColor = 'text-primary',
  textColorHover = 'group-hover:text-primary-dark',
  shadowColor = 'rgba(0,0,0,1)',
  onClick,
  className = '',
  ariaLabel,
  useRelativeSize = false,
}: ShadowButtonProps) {
  // Debug: Log the classes being applied
  const divClasses = useRelativeSize
    ? 'relative flex h-[36px] w-[100%] items-center justify-center overflow-hidden rounded-full border-2 transition-all duration-200 sm:h-[40px] sm:w-[35%] md:h-[50px] md:w-[55%] lg:h-[60px] lg:w-[100%]'
    : 'relative flex h-[50px] w-[200px] items-center justify-center overflow-hidden rounded-full border-2 transition-all duration-200 md:h-[60px] md:w-[240px] lg:h-[70px] lg:w-[280px]'

  return (
    <button
      className={`group focus:ring-primary mx-auto flex-shrink-0 border-none bg-transparent transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-none active:scale-95 ${className}`}
      onClick={onClick}
      aria-label={ariaLabel || text}
    >
      <div
        className={divClasses}
        style={
          {
            backgroundColor,
            boxShadow: useRelativeSize
              ? `4px 4px 0px 0px ${shadowColor}`
              : `8px 8px 0px 0px ${shadowColor}`,
            '--shadow-hover': useRelativeSize
              ? `3px 3px 0px 0px ${shadowColor}`
              : `6px 6px 0px 0px ${shadowColor}`,
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = useRelativeSize
            ? `3px 3px 0px 0px ${shadowColor}`
            : `6px 6px 0px 0px ${shadowColor}`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = useRelativeSize
            ? `4px 4px 0px 0px ${shadowColor}`
            : `8px 8px 0px 0px ${shadowColor}`
        }}
      >
        <span
          className={
            useRelativeSize
              ? `font-pacifico ${textColor} ${textColorHover} relative text-[0.8em] font-bold tracking-[0.1em] drop-shadow-sm transition-colors duration-300 sm:text-[0.9em] sm:tracking-[0.15em] md:text-[1em] lg:text-[1.1em]`
              : `font-pacifico ${textColor} ${textColorHover} relative text-[20px] font-bold tracking-[0.15em] drop-shadow-sm transition-colors duration-300 md:text-[24px] md:tracking-[0.2em] lg:text-[28px]`
          }
        >
          {text}
        </span>
      </div>
    </button>
  )
}

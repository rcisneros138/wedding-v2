'use client'

import React from 'react'

interface ShadowButtonProps {
  text: string
  backgroundColor?: string
  textColor?: string
  textColorHover?: string
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

export default function ShadowButton({
  text,
  backgroundColor = 'var(--color-purple)',
  textColor = 'text-primary',
  textColorHover = 'hover:text-primary-dark',
  onClick,
  className = '',
  ariaLabel,
}: ShadowButtonProps) {
  // Unified responsive classes that always scale with breakpoints
  const divClasses =
    'relative flex items-center justify-center overflow-hidden rounded-full border-2 transition-all duration-200 px-5 py-2  shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'

  const textClasses = `font-pacifico ${textColor} ${textColorHover} relative font-bold tracking-wider drop-shadow-xs transition-colors duration-300 text-base sm:text-lg md:text-xl lg:text-2xl`

  return (
    <button
      className={`group focus:ring-primary mx-auto w-fit flex-shrink-0 border-none bg-transparent transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-hidden active:scale-95 ${className}`}
      onClick={onClick}
      aria-label={ariaLabel || text}
    >
      <div
        className={divClasses}
        style={{
          backgroundColor,
          borderColor: 'var(--color-shadow)',
        }}
      >
        <span className={textClasses}>{text}</span>
      </div>
    </button>
  )
}

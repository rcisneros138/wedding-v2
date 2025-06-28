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
}: ShadowButtonProps) {
  return (
    <button
      className={`group focus:ring-primary border-none bg-transparent transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:outline-none active:scale-95 ${className}`}
      onClick={onClick}
      aria-label={ariaLabel || text}
    >
      {/* 
        TEACHING MOMENT: Main Button Layer with Interactive States
        - Maintains exact styling from Hero.tsx implementation
        - Uses CSS custom properties for dynamic shadow colors
        - Preserves all responsive sizing and transitions
      */}
      <div
        className='relative flex h-[50px] w-[200px] items-center justify-center overflow-hidden rounded-full border-2 transition-all duration-200 md:h-[60px] md:w-[240px] lg:h-[70px] lg:w-[280px]'
        style={
          {
            backgroundColor,
            boxShadow: `8px 8px 0px 0px ${shadowColor}`,
            '--shadow-hover': `6px 6px 0px 0px ${shadowColor}`,
          } as React.CSSProperties
        }
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `6px 6px 0px 0px ${shadowColor}`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `8px 8px 0px 0px ${shadowColor}`
        }}
      >
        {/* 
          TEACHING MOMENT: Button Text with Pacifico Font
          - Maintains exact typography from original implementation
          - font-pacifico: Uses Pacifico font as requested
          - Preserves all responsive sizing and letter spacing
          - Dynamic text colors via props
        */}
        <span
          className={`font-pacifico ${textColor} ${textColorHover} relative text-[20px] font-bold tracking-[0.15em] drop-shadow-sm transition-colors duration-300 md:text-[24px] md:tracking-[0.2em] lg:text-[28px]`}
        >
          {text}
        </span>
      </div>
    </button>
  )
}

'use client'

import React from 'react'

export default function BreakpointIndicator() {
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className='fixed bottom-4 right-4 z-[9999] rounded-full bg-black/80 px-3 py-1 text-xs font-mono text-white shadow-lg'>
      {/* Each breakpoint label only shows at its corresponding size */}
      <span className='sm:hidden'>base</span>
      <span className='hidden sm:inline md:hidden'>sm</span>
      <span className='hidden md:inline lg:hidden'>md</span>
      <span className='hidden lg:inline xl:hidden'>lg</span>
      <span className='hidden xl:inline 2xl:hidden'>xl</span>
      <span className='hidden 2xl:inline'>2xl</span>
    </div>
  )
}
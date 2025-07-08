'use client'

import { Pacifico } from 'next/font/google'

const pacificoFont = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

interface PacificoTextProps {
  children: React.ReactNode
  className?: string
}

export default function PacificoText({ children, className = '' }: PacificoTextProps) {
  return (
    <span className={`${pacificoFont.className} ${className}`}>
      {children}
    </span>
  )
}
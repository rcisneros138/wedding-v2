import type { Metadata } from 'next'
import { Inter, Playfair_Display, Pacifico } from 'next/font/google'
import localfont from 'next/font/local'
import './globals.css'
import BreakpointIndicator from './components/BreakpointIndicator'

const inter = Inter({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
  preload: true,
  adjustFontFallback: false, // Disable Next.js font fallback adjustments
})
const reciaSerifDisplay = localfont({
  src: [
    {
      path: '../public/fonts/ReciaDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Ray and Amanda - Wedding',
  description: 'Join us in Mexico on January 24, 2026 to celebrate',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${playfairDisplay.variable} ${pacifico.variable}`}
    >

      <body className={`${inter.className} antialiased`}>
        {children}
        <BreakpointIndicator />
      </body>
    </html>
  )
}

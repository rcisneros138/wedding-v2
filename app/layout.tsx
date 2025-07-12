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
  variable: '--font-recia',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ashlyn & Royal - January 24, 2026 | Playa del Carmen',
  description: 'Join us in Mexico on January 24, 2026 to celebrate our wedding',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🇲🇽</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${playfairDisplay.variable} ${pacifico.variable} ${reciaSerifDisplay.variable}`}
    >

      <body className={`${inter.className} antialiased`}>
        {children}
        <BreakpointIndicator />
      </body>
    </html>
  )
}

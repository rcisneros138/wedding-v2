import type { Metadata } from 'next'
import { Inter, Pacifico, Playfair_Display } from 'next/font/google'
import localfont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
})
const playfairDisplay = Playfair_Display({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={`${pacifico.variable} ${playfairDisplay.variable}`}
    >
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

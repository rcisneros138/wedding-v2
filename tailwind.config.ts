import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['var(--font-pacifico)', 'cursive'],
        display: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        surface: 'var(--color-bg)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          purple: 'var(--color-purple)',
          'purple-light': 'var(--color-purple-light)',
        },
        shadow: 'var(--color-shadow)',
      },
      boxShadow: {
        'offset-primary': '5px 5px 0px 0px var(--color-primary)',
        'offset-primary-sm': '3px 3px 0px 0px var(--color-primary)',
        'offset-shadow': '5px 5px 0px 0px var(--color-shadow)',
        'offset-shadow-sm': '3px 3px 0px 0px var(--color-shadow)',
        'offset-black': '8px 8px 0px 0px rgba(0,0,0,1)',
        'offset-black-sm': '6px 6px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
}
export default config

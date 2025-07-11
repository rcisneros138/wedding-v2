'use client'

import { useState, useEffect } from 'react'
import CompactButton from './CompactButton'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleRSVPClick = () => {
    const rsvpElement = document.getElementById('rsvp')
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'py-3 md:py-4' : 'py-6 md:py-10'
      } px-4 md:px-12`}
    >
      {/* Desktop Navigation */}
      <div className='hidden items-center justify-between md:flex'>
        <div className='flex flex-1 justify-center'>
          <div className='relative w-fit'>
            {/* Shadow layer */}
            <div className='bg-primary absolute inset-0 translate-x-[1.5%] translate-y-[4%] transform rounded-[50px]' />

          {/* Main nav container */}
          <div
            className={`border-primary relative rounded-[50px] border-2 bg-white transition-all duration-300 ${
              isScrolled ? 'px-8 py-3' : 'px-12 py-4'
            }`}
          >
            {/* Diagonal line texture overlay */}
            <div
              className='pointer-events-none absolute inset-0 overflow-hidden rounded-[50px] opacity-30'
              style={{
                backgroundImage: `url('/images/figma-assets/diagonal-lines.png')`,
                backgroundSize: '7px 7px',
                backgroundRepeat: 'repeat',
              }}
            />

            {/* Navigation links */}
            <ul
              className={`text-primary font-display relative m-0 flex list-none items-center p-0 font-semibold transition-all duration-300 ${
                isScrolled ? 'gap-8 text-base' : 'gap-12 text-lg'
              }`}
            >
              <li>
                <a
                  href='#home'
                  className='text-primary hover:text-primary-dark no-underline transition-colors'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#our-story'
                  className='text-primary hover:text-primary-dark no-underline transition-colors'
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href='#details'
                  className='text-primary hover:text-primary-dark no-underline transition-colors'
                >
                  Details
                </a>
              </li>
              <li>
                <a
                  href='#resort'
                  className='text-primary hover:text-primary-dark no-underline transition-colors'
                >
                  Resort
                </a>
              </li>
              <li>
                <a
                  href='#faq'
                  className='text-primary hover:text-primary-dark no-underline transition-colors'
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href='#rsvp'
                  className='text-primary hover:text-primary-dark no-underline transition-colors'
                >
                  RSVP
                </a>
              </li>
              <li>
                <a
                  href='#registry'
                  className='text-primary hover:text-primary-dark no-underline transition-colors'
                >
                  Registry
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className='ml-8 flex gap-3'>
          <CompactButton
            text='Book Now'
            backgroundColor='var(--color-accent)'
            href='https://www.excellenceresorts.com/riviera-maya-cancun/excellence-riviera-cancun/'
            target='_blank'
            rel='noopener noreferrer'
            className={
              isScrolled ? 'px-4 py-1 text-xs' : 'px-6 py-1.5 text-sm'
            }
          />
          <CompactButton
            text='RSVP'
            onClick={handleRSVPClick}
            className={
              isScrolled ? 'px-4 py-1 text-xs' : 'px-6 py-1.5 text-sm'
            }
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden'>
        {/* Mobile Nav Bar */}
        <div className='flex items-center gap-3'>
          {/* Nav Container */}
          <div className='flex-1'>
            <div className='relative w-fit'>
              {/* Shadow layer */}
              <div className='bg-primary absolute inset-0 translate-x-[1.5%] translate-y-[4%] transform rounded-[50px]' />

            {/* Main nav container */}
            <div
              className={`border-primary bg-surface relative rounded-[50px] border-2 transition-all duration-300 ${
                isScrolled ? 'px-3 py-2' : 'px-4 py-3'
              }`}
            >
              {/* Diagonal line texture overlay */}
              <div
                className='pointer-events-none absolute inset-0 overflow-hidden rounded-[50px] opacity-30'
                style={{
                  backgroundImage: `url('/images/figma-assets/diagonal-lines.png')`,
                  backgroundSize: '7px 7px',
                  backgroundRepeat: 'repeat',
                }}
              />

              {/* Nav content */}
              <div className='relative flex items-center justify-between'>
                {/* Logo/Title - Hidden on mobile, visible on md and up */}
                <h1 className='font-display text-primary m-0 hidden text-2xl md:block'>
                  A & R
                </h1>

                {/* Hamburger Menu Button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className='relative z-50 flex h-8 w-8 flex-col items-center justify-center'
                  aria-label='Toggle menu'
                >
                  <span
                    className={`bg-primary block h-0.5 w-6 transition-all duration-300 ${
                      isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                    }`}
                  />
                  <span
                    className={`bg-primary my-1 block h-0.5 w-6 transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  />
                  <span
                    className={`bg-primary block h-0.5 w-6 transition-all duration-300 ${
                      isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
            </div>
          </div>

          {/* Mobile CTA Buttons */}
          <div className='flex gap-2'>
            <CompactButton
              text='Book'
              backgroundColor='var(--color-accent)'
              href='https://www.excellenceresorts.com/riviera-maya-cancun/excellence-riviera-cancun/'
              target='_blank'
              rel='noopener noreferrer'
              className={
                isScrolled
                  ? 'px-3 py-1 text-[10px]'
                  : 'px-4 py-1.5 text-xs'
              }
            />
            <CompactButton
              text='RSVP'
              onClick={handleRSVPClick}
              className={
                isScrolled
                  ? 'px-3 py-1 text-[10px]'
                  : 'px-4 py-1.5 text-xs'
              }
            />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className='bg-surface fixed inset-0 z-40 flex flex-col pt-24'>
            {/* Menu container with shadow effect */}
            <div className='mx-6'>
              <div className='relative'>
                {/* Shadow layer */}
                <div className='bg-primary-dark absolute inset-0 translate-x-[2%] translate-y-[2%] transform rounded-[30px]' />

                {/* Menu background */}
                <div className='border-primary relative rounded-[30px] border-2 bg-white px-8 py-10'>
                  <ul className='text-primary font-display m-0 list-none space-y-6 p-0 text-xl font-medium'>
                    <li>
                      <a
                        href='#home'
                        onClick={() => setIsMenuOpen(false)}
                        className='text-primary hover:text-primary-dark block py-2 no-underline transition-colors'
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href='#our-story'
                        onClick={() => setIsMenuOpen(false)}
                        className='text-primary hover:text-primary-dark block py-2 no-underline transition-colors'
                      >
                        Our Story
                      </a>
                    </li>
                    <li>
                      <a
                        href='#details'
                        onClick={() => setIsMenuOpen(false)}
                        className='text-primary hover:text-primary-dark block py-2 no-underline transition-colors'
                      >
                        Details
                      </a>
                    </li>
                    <li>
                      <a
                        href='#resort'
                        onClick={() => setIsMenuOpen(false)}
                        className='text-primary hover:text-primary-dark block py-2 no-underline transition-colors'
                      >
                        Resort
                      </a>
                    </li>
                    <li>
                      <a
                        href='#faq'
                        onClick={() => setIsMenuOpen(false)}
                        className='text-primary hover:text-primary-dark block py-2 no-underline transition-colors'
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href='#rsvp'
                        onClick={() => setIsMenuOpen(false)}
                        className='text-primary hover:text-primary-dark block py-2 no-underline transition-colors'
                      >
                        RSVP
                      </a>
                    </li>
                    <li>
                      <a
                        href='#registry'
                        onClick={() => setIsMenuOpen(false)}
                        className='text-primary hover:text-primary-dark block py-2 no-underline transition-colors'
                      >
                        Registry
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

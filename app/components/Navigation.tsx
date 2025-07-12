'use client'

import { useState, useEffect } from 'react'
import CompactButton from './CompactButton'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [copied, setCopied] = useState(false)
  const promoCode = 'CLWJAN26XRC'

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

  const handleCopyPromoCode = async () => {
    try {
      await navigator.clipboard.writeText(promoCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy promo code:', err)
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
              </ul>
            </div>
          </div>
        </div>

        {/* Promo Code Box */}
        <div className='ml-6'>
          <div className='relative'>
            {/* Shadow layer */}
            <div className='bg-primary absolute inset-0 translate-x-[1.5%] translate-y-[4%] transform rounded-lg' />
            
            {/* Main promo code container */}
            <button
              onClick={handleCopyPromoCode}
              className={`border-primary relative flex items-center gap-2 rounded-lg border-2 bg-white transition-all duration-300 hover:scale-[0.98] ${
                isScrolled ? 'px-3 py-2' : 'px-4 py-3'
              }`}
              title='Click to copy promo code'
            >
              <div className='flex flex-col items-start'>
                <span className={`text-primary font-display font-semibold transition-all duration-300 ${
                  isScrolled ? 'text-[10px]' : 'text-xs'
                }`}>
                  PROMO CODE
                </span>
                <span className={`font-mono font-bold text-[#FEA88A] transition-all duration-300 ${
                  isScrolled ? 'text-xs' : 'text-sm'
                }`}>
                  {promoCode}
                </span>
              </div>
              
              {/* Copy icon */}
              <svg
                className={`text-primary transition-all duration-300 ${
                  isScrolled ? 'h-3 w-3' : 'h-4 w-4'
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {copied ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' />
                )}
              </svg>
              
              {/* Tooltip */}
              {copied && (
                <span className='bg-primary text-surface absolute -top-8 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs font-medium'>
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className='ml-3 flex gap-3'>
          <CompactButton
            text='Book Now'
            backgroundColor='var(--color-accent)'
            href='https://booking.excellenceresorts.com/en/bookcore/availability/rooms/excellencerivera?cp=CLWJAN26XRC'
            target='_blank'
            rel='noopener noreferrer'
            className={isScrolled ? 'px-4 py-1 text-xs' : 'px-6 py-1.5 text-sm'}
          />
          <CompactButton
            text='RSVP'
            onClick={handleRSVPClick}
            className={isScrolled ? 'px-4 py-1 text-xs' : 'px-6 py-1.5 text-sm'}
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

          {/* Mobile Promo Code Box */}
          <div className='relative'>
            {/* Shadow layer */}
            <div className='bg-primary absolute inset-0 translate-x-[1.5%] translate-y-[4%] transform rounded-lg' />
            
            {/* Main promo code container */}
            <button
              onClick={handleCopyPromoCode}
              className={`border-primary relative flex items-center gap-1 rounded-lg border-2 bg-white transition-all duration-300 hover:scale-[0.98] ${
                isScrolled ? 'px-2 py-1' : 'px-3 py-1.5'
              }`}
              title='Click to copy promo code'
            >
              <div className='flex flex-col items-start'>
                <span className={`text-primary font-display font-semibold transition-all duration-300 ${
                  isScrolled ? 'text-[8px]' : 'text-[9px]'
                }`}>
                  PROMO
                </span>
                <span className={`font-mono font-bold text-[#FEA88A] transition-all duration-300 ${
                  isScrolled ? 'text-[9px]' : 'text-[10px]'
                }`}>
                  {promoCode}
                </span>
              </div>
              
              {/* Copy icon */}
              <svg
                className={`text-primary transition-all duration-300 ${
                  isScrolled ? 'h-2.5 w-2.5' : 'h-3 w-3'
                }`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {copied ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' />
                )}
              </svg>
              
              {/* Tooltip */}
              {copied && (
                <span className='bg-primary text-surface absolute -top-6 left-1/2 -translate-x-1/2 rounded px-2 py-0.5 text-[10px] font-medium'>
                  Copied!
                </span>
              )}
            </button>
          </div>

          {/* Mobile CTA Buttons */}
          <div className='flex gap-2'>
            <CompactButton
              text='Book'
              backgroundColor='var(--color-accent)'
              href='https://booking.excellenceresorts.com/en/bookcore/availability/rooms/excellencerivera?cp=CLWJAN26XRC'
              target='_blank'
              rel='noopener noreferrer'
              className={
                isScrolled ? 'px-3 py-1 text-[10px]' : 'px-4 py-1.5 text-xs'
              }
            />
            <CompactButton
              text='RSVP'
              onClick={handleRSVPClick}
              className={
                isScrolled ? 'px-3 py-1 text-[10px]' : 'px-4 py-1.5 text-xs'
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

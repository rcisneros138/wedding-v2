'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative w-full px-4 py-6 md:px-12 md:py-10">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center">
        <div className="relative">
          {/* Shadow layer */}
          <div className="absolute inset-0 bg-primary rounded-[50px] transform translate-x-[1.5%] translate-y-[4%]" />
          
          {/* Main nav container */}
          <div className="relative bg-white rounded-[50px] px-16 py-5 border-2 border-primary">
            {/* Diagonal line texture overlay */}
            <div className="absolute inset-0 rounded-[50px] overflow-hidden opacity-30 pointer-events-none">
              <div 
                className="absolute inset-0 bg-repeat"
                style={{
                  backgroundImage: `url('/images/figma-assets/diagonal-lines.png')`,
                  backgroundSize: '7px 7px',
                }}
              />
            </div>
            
            {/* Navigation links */}
            <ul className="relative flex items-center gap-12 text-primary font-semibold text-lg">
              <li>
                <a href="#home" className="hover:text-primary-dark transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#our-story" className="hover:text-primary-dark transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-primary-dark transition-colors">
                  Details
                </a>
              </li>
              <li>
                <a href="#rsvp" className="hover:text-primary-dark transition-colors">
                  RSVP
                </a>
              </li>
              <li>
                <a href="#registry" className="hover:text-primary-dark transition-colors">
                  Registry
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Nav Bar */}
        <div className="relative">
          {/* Shadow layer */}
          <div className="absolute inset-0 bg-primary rounded-[50px] transform translate-x-[1.5%] translate-y-[4%]" />
          
          {/* Main nav container */}
          <div className="relative bg-white rounded-[50px] px-6 py-4 border-2 border-primary">
            {/* Diagonal line texture overlay */}
            <div className="absolute inset-0 rounded-[50px] overflow-hidden opacity-30 pointer-events-none">
              <div 
                className="absolute inset-0 bg-repeat"
                style={{
                  backgroundImage: `url('/images/figma-assets/diagonal-lines.png')`,
                  backgroundSize: '7px 7px',
                }}
              />
            </div>
            
            {/* Nav content */}
            <div className="relative flex items-center justify-between">
              {/* Logo/Title */}
              <h1 className="text-2xl font-display text-primary">A & R</h1>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative z-50 flex flex-col items-center justify-center w-8 h-8"
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-primary my-1 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-background z-40 flex flex-col pt-24">
            {/* Menu container with shadow effect */}
            <div className="mx-6">
              <div className="relative">
                {/* Shadow layer */}
                <div className="absolute inset-0 bg-primary-dark rounded-[30px] transform translate-x-[2%] translate-y-[2%]" />
                
                {/* Menu background */}
                <div className="relative bg-white rounded-[30px] px-8 py-10 border-2 border-primary">
                  <ul className="space-y-6 text-primary text-xl font-medium">
                    <li>
                      <a
                        href="#home"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 hover:text-primary-dark transition-colors"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#our-story"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 hover:text-primary-dark transition-colors"
                      >
                        Our Story
                      </a>
                    </li>
                    <li>
                      <a
                        href="#details"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 hover:text-primary-dark transition-colors"
                      >
                        Details
                      </a>
                    </li>
                    <li>
                      <a
                        href="#rsvp"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 hover:text-primary-dark transition-colors"
                      >
                        RSVP
                      </a>
                    </li>
                    <li>
                      <a
                        href="#registry"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 hover:text-primary-dark transition-colors"
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

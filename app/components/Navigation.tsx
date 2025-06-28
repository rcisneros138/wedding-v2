'use client'

import { useState } from 'react'

/* 
  MEMORY NOTE: All future requests should include comprehensive Tailwind teaching moments
  as if explaining to someone completely new to Tailwind CSS.
*/

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    /* 
      TEACHING MOMENT: Sticky Navigation Setup
      - sticky: Makes element stick to a position when scrolling
      - top-0: Sticks at 0 pixels from the top of viewport
      - z-50: High z-index (50) ensures nav stays above other content
      - w-full: Takes full width of parent container
      - bg-[#D9DDCD]: Matches the page background to prevent content showing through
    */
    <nav className="sticky top-0 z-50 w-full bg-surface pt-3 md:pt-4 lg:pt-5 px-4 md:px-6 lg:px-[22px]">
      {/* 
        TEACHING MOMENT: Container for Layered Elements
        - relative: Creates positioning context for absolutely positioned children
        - This allows us to layer the shadow behind the main nav element
      */}
      <div className="relative">
        {/* 
          TEACHING MOMENT: Creating Depth with Shadow Layer
          - absolute: Positions relative to nearest relative parent
          - inset-0: Sets top, right, bottom, left all to 0 (fills parent)
          - bg-[#8c3112]: Custom background color using bracket notation
          - rounded-[30px] md:rounded-[40px] lg:rounded-[50px]: Responsive border radius
            * 30px on mobile, 40px on tablet (md:), 50px on desktop (lg:)
          - translate-x-1 md:translate-x-1.5 lg:translate-x-2: Moves shadow right
            * 4px on mobile, 6px on tablet, 8px on desktop
          - translate-y-1 md:translate-y-1.5 lg:translate-y-2: Moves shadow down
            * Creates the "lifted" 3D effect
        */}
        <div className="absolute inset-0 bg-primary rounded-[30px] md:rounded-[40px] lg:rounded-[50px] translate-x-1 md:translate-x-1.5 lg:translate-x-2 translate-y-1 md:translate-y-1.5 lg:translate-y-2" />

        {/* 
          TEACHING MOMENT: Main Navigation Pill Shape
          - relative: Positions above the shadow layer
          - bg-[#c7acbe]: Main navigation background color
          - h-[60px] md:h-[75px] lg:h-[90px]: Responsive height
            * 60px mobile, 75px tablet, 90px desktop
          - rounded-[25px] md:rounded-[35px] lg:rounded-[45px]: Pill shape border radius
          - border-2 border-[#8c3112]: 2px border in dark red color
          - overflow-hidden: Clips content that extends beyond rounded corners
        */}
        <div className="relative bg-accent-purple h-[60px] md:h-[75px] lg:h-[90px] rounded-[25px] md:rounded-[35px] lg:rounded-[45px] border-2 border-primary overflow-hidden">
          {/* 
            TEACHING MOMENT: Background Texture Overlay
            - absolute inset-0: Covers entire parent element
            - opacity-50: Makes texture 50% transparent (semi-transparent)
            - CSS background properties create the diagonal line pattern
            - This adds visual texture without affecting the content
          */}
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: 'url(/images/figma-assets/diagonal-lines.png)',
              backgroundSize: '7px 7px',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'top left',
              WebkitMaskImage: 'linear-gradient(to bottom, black, black)',
              maskImage: 'linear-gradient(to bottom, black, black)'
            }}
          />

          {/* 
            TEACHING MOMENT: Flexbox Navigation Layout
            - relative: Positions above background layers
            - h-full: Takes full height of parent container
            - flex: Enables flexbox layout
            - items-center: Centers items vertically
            - justify-between: Spreads items apart (mobile button left, menu center)
            - px-6 md:px-8 lg:px-12: Responsive horizontal padding
              * 24px mobile, 32px tablet, 48px desktop
          */}
          <div className="relative h-full flex items-center justify-between px-6 md:px-8 lg:px-12">
            {/* 
              TEACHING MOMENT: Mobile-Only Hamburger Button
              - md:hidden: Hides on medium screens and up (768px+)
              - text-[#8c3112]: Sets text/icon color
              - p-2: Adds 8px padding on all sides (minimum touch target)
              - aria-label: Accessibility label for screen readers
            */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-primary p-2 hover:bg-primary hover:bg-opacity-10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {/* 
                TEACHING MOMENT: SVG Icon Sizing
                - w-6 h-6: Sets width and height to 24px (6 * 4px = 24px)
                - fill="none": No fill color, only stroke
                - stroke="currentColor": Uses the text color from parent
              */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* 
              TEACHING MOMENT: Desktop Navigation Menu
              - hidden md:flex: Hidden on mobile, flex on tablet+ (768px+)
              - items-center: Centers menu items vertically
              - space-x-6 lg:space-x-12: Horizontal spacing between items
                * 24px spacing on tablet, 48px on desktop
              - mx-auto: Centers the entire menu horizontally
            */}
            <ul className="hidden md:flex items-center space-x-6 lg:space-x-12 mx-auto">
              <li>
                {/* 
                  TEACHING MOMENT: Interactive Link Styling
                  - text-[#8c3112]: Base text color
                  - font-medium: Medium font weight (500)
                  - text-base lg:text-lg: Responsive font size (16px base, 18px large)
                  - hover:text-[#70270e]: Darker color on hover
                  - transition-colors: Smooth color transition animation
                */}
                <a href="#home" className="text-primary font-medium text-base lg:text-lg hover:text-primary-dark transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary font-medium text-base lg:text-lg hover:text-primary-dark transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#details" className="text-primary font-medium text-base lg:text-lg hover:text-primary-dark transition-colors">
                  Details
                </a>
              </li>
              <li>
                <a href="#rsvp" className="text-primary font-medium text-base lg:text-lg hover:text-primary-dark transition-colors">
                  RSVP
                </a>
              </li>
              <li>
                <a href="#registry" className="text-primary font-medium text-base lg:text-lg hover:text-primary-dark transition-colors">
                  Registry
                </a>
              </li>
            </ul>
          </div>

          {/* 
            TEACHING MOMENT: Conditional Mobile Dropdown
            - {isMenuOpen && ...}: Only renders when menu is open (React conditional)
            - absolute top-full: Positions below the navigation bar
            - mt-2: Adds 8px margin top for spacing
            - left-0 right-0: Stretches full width
            - md:hidden: Hides on tablet+ screens
            - shadow-lg: Large shadow for depth
          */}
          {isMenuOpen && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-accent-purple rounded-[25px] shadow-lg md:hidden border-2 border-primary z-40">
              {/* 
                TEACHING MOMENT: Mobile Menu List Styling
                - py-4: Vertical padding (16px top and bottom)
                - px-6: Horizontal padding (24px left and right)
                - space-y-3: Vertical spacing between list items (12px)
              */}
              <ul className="py-4 px-6 space-y-3">
                <li>
                  {/* 
                    TEACHING MOMENT: Mobile Link Styling
                    - block: Makes link take full width (easier to tap)
                    - Larger touch targets improve mobile usability
                  */}
                  <a href="#home" className="block text-primary font-medium hover:text-primary-dark transition-colors py-2">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="block text-primary font-medium hover:text-primary-dark transition-colors py-2">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#details" className="block text-primary font-medium hover:text-primary-dark transition-colors py-2">
                    Details
                  </a>
                </li>
                <li>
                  <a href="#rsvp" className="block text-primary font-medium hover:text-primary-dark transition-colors py-2">
                    RSVP
                  </a>
                </li>
                <li>
                  <a href="#registry" className="block text-primary font-medium hover:text-primary-dark transition-colors py-2">
                    Registry
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

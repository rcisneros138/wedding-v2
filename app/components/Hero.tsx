import Image from 'next/image'
import Navigation from './Navigation'
import ShadowButton from './ShadowButton'

export default function Hero() {
  return (
    <section className='bg-surface relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden'>
      {/* 
        TEACHING MOMENT: Sticky Navigation Integration
        - We've replaced the static SVG navigation with our responsive Navigation component
        - The Navigation component is now sticky and will stay at the top when scrolling
        - This creates better user experience and navigation accessibility
      */}
      <Navigation />

      {/* 
        TEACHING MOMENT: Container Strategy for Hero Content
        - max-w-7xl: Sets maximum width (1280px) but allows smaller on mobile
        - mx-auto: Centers the container horizontally
        - px-4 md:px-6 lg:px-8: Responsive padding (16px mobile, 24px tablet, 32px desktop)
        - w-full: Takes full width up to the max-width constraint
        - pt-8 md:pt-12: Top padding to create space below sticky navigation
      */}
      <div className='relative mx-auto w-full max-w-7xl px-4 pt-8 md:px-6 md:pt-12 lg:px-8'>
        {/* 
          TEACHING MOMENT: Hero Arc Section - Mobile-First Responsive Design
          - We start with mobile styles (no prefix), then add larger screen styles
          - relative: Creates positioning context for absolutely positioned children
          - flex flex-col: Stacks elements vertically on mobile
          - items-center: Centers all child elements horizontally
        */}
        <div className='relative mt-4 flex w-full flex-col items-center md:mt-8'>
          {/* 
            TEACHING MOMENT: Responsive Container for Arc Elements
            - This container will hold all our arc elements and center them
            - scale-75 md:scale-90 lg:scale-100: Scales down on smaller screens
            - transform-gpu: Uses GPU acceleration for better performance
          */}
          <div className='relative scale-100 transform-gpu transition-transform duration-300 md:scale-90 lg:scale-100'>
            {/* Hero Arch - Now properly centered */}
            <div className='relative flex justify-center'>
              <Image
                src='/images/figma-assets-new/hero-arch.svg'
                alt=''
                width={1001}
                height={512}
                className='h-auto w-full max-w-[800px] object-contain md:max-w-[900px] lg:max-w-[1001px]'
                priority
              />
            </div>

            {/* 
              TEACHING MOMENT: Absolute Positioning Within Relative Container
              - The parent div is relative, so these absolute children position relative to it
              - We use percentages and transforms for responsive positioning
              - translate transforms help with precise centering
            */}

            {/* Hero Title - Positioned over the arch */}
            <div className='absolute top-[15%] left-1/2 -translate-x-1/2 transform'>
              <Image
                src='/images/figma-assets-new/hero-arc-title.svg'
                alt="We're Getting Married"
                width={791}
                height={334}
                className='h-auto w-full max-w-[600px] object-contain md:max-w-[700px] lg:max-w-[791px]'
                priority
              />
            </div>

            {/* Portrait - Centered in the arch */}
            <div className='absolute top-[38%] left-1/2 -translate-x-1/2 transform'>
              <Image
                src='/images/figma-assets-new/hero-portrait.svg'
                alt='Couple portrait'
                width={139}
                height={139}
                className='h-auto w-[100px] object-contain md:w-[120px] lg:w-[139px]'
                priority
              />
            </div>

            {/* 
              TEACHING MOMENT: Reusable ShadowButton Component
              - Now using the ShadowButton component for consistency and reusability
              - Maintains exact same positioning and styling as the original inline button
              - className prop handles the absolute positioning for this specific use case
              - All visual styling is preserved through component defaults
            */}

            <ShadowButton
              text='RSVP'
              className='absolute top-[64%] left-1/2 z-10 -translate-x-1/2 transform'
              ariaLabel='RSVP for the wedding'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

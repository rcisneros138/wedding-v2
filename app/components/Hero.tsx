'use client'

import Image from 'next/image'
import ShadowButton from './ShadowButton'
import WavyLine from './WavyLine'
import TimelineSchedule from './TimelineSchedule'

export default function Hero() {
  const handleRSVPClick = () => {
    const rsvpElement = document.getElementById('rsvp')
    if (rsvpElement) {
      rsvpElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section className='bg-surface relative flex w-full flex-col items-center justify-start pt-3'>
        {/* Hero Arc positioned at bottom */}
        <div className='relative z-20 w-full'>
          {/* Constrained container for proper scaling */}
          <div className='relative mx-auto w-[95%]'>
            {/* Aspect ratio wrapper to maintain proportions based on squiggle dimensions */}
            <div className='relative mx-auto w-full'>
              {/* Squiggle Arc Container with proper layering */}
              <div className='relative mx-auto max-w-[1600px]'>
                {/* Invisible sizing element to maintain container dimensions
                <svg
                  viewBox='0 0 1380 611'
                  className='invisible h-full w-full'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <path d='M690.001 0C734.073 0 772.004 54.6614 813.547 62.1005C856.535 69.8629 914.696 32.3446 954.433 46.8988C994.892 61.777 1006.09 125.171 1041.85 146.842C1077.98 168.512 1147.7 153.958 1178.41 181.127C1209.11 208.619 1192.5 271.042 1216.7 303.386C1240.54 335.406 1311.34 345.757 1328.32 381.658C1344.58 417.237 1303.04 468.987 1311.34 507.8C1319.13 542.947 1380 568.776 1380 611H0C6.802 574.652 60.8728 542.645 68.6566 507.8C77.3266 469.311 35.4219 417.237 51.678 381.658C68.2956 345.434 139.1 335.406 163.304 303.386C187.506 271.042 171.251 208.619 201.595 181.127C232.301 153.634 302.022 168.512 338.146 146.842C373.91 125.495 385.47 62.1005 425.568 46.8988C465.305 32.3444 523.104 69.5393 566.454 62.1005C608.358 54.6614 645.929 8.04544e-05 690.001 0Z' />
                </svg> */}

                {/* Main Squiggle - maroon colored arc */}
                <div className='drop-shadow-squiggle relative z-[1]'>
                  <div className='squiggle-mask' />
                </div>

                {/* All content positioned within the squiggle */}
                <div className='absolute top-1/4 left-1/2 z-[2] flex w-full max-w-[1600px] -translate-x-1/2 flex-col items-center justify-center'>
                  {/* Hero Title Container with Portrait */}
                  <div className='relative mb-4 flex w-[80%] items-center justify-center'>
                    {/* Portrait positioned at bottom center of parent */}
                    <div className='absolute w-[30%] max-w-[30%] translate-y-[25%]'>
                      {/* Portrait layers */}
                      <div className='relative'>
                        <Image
                          src='/images/figma-assets/portrait-outer.svg'
                          alt=''
                          width={71}
                          height={71}
                          className='h-full w-full object-contain'
                          priority
                        />
                        <div className='absolute inset-[3%]'>
                          <Image
                            src='/images/figma-assets/portrait-middle.svg'
                            alt=''
                            width={66}
                            height={63}
                            className='h-full w-full object-contain'
                            priority
                          />
                        </div>
                        <div className='absolute inset-[3%]'>
                          <Image
                            src='/images/figma-assets/portrait-inner.svg'
                            alt=''
                            width={63}
                            height={25}
                            className='h-full w-full object-contain'
                            priority
                          />
                        </div>
                      </div>
                    </div>
                    {/* Main Title */}
                    <div className='relative animate-hero-title'>
                      <Image
                        src='/images/figma-assets/hero-title.svg'
                        alt="We're Getting Married"
                        width={300}
                        height={129}
                        className='h-full w-full object-contain'
                        priority
                      />
                    </div>
                  </div>

                  {/* Combined RSVP button and date/location text */}
                  <div className='relative flex w-full items-center xl:pt-5 2xl:pt-10'>
                    {/* Left side text with wavy line */}
                    <div className='relative flex-1 pr-5 text-center'>
                      <div className='relative mx-auto w-[40%] sm:w-[50%] md:w-[60%] lg:w-[65%]'>
                        <WavyLine
                          color='#FEA88A'
                          className='h-auto w-full'
                          shadowOffsetX={4}
                          shadowOffsetY={4}
                        />
                      </div>
                      <p className='font-pacifico text-shadow-primary-dark/30 m-0 mt-1 text-[10px] whitespace-nowrap text-[#FEA88A] text-shadow-2xs sm:text-base md:text-lg'>
                        See You In Mexico!
                      </p>
                    </div>

                    {/* RSVP Button - Centered */}
                    <div className='relative mx-auto'>
                      <ShadowButton
                        text='RSVP'
                        ariaLabel='RSVP for the wedding'
                        onClick={handleRSVPClick}
                      />
                    </div>

                    {/* Right side text with wavy line */}
                    <div className='relative flex-1 pl-5 text-center'>
                      <div className='rrelative mx-auto w-[40%] sm:w-[50%] md:w-[60%] lg:w-[65%]'>
                        <WavyLine
                          color='#FEA88A'
                          className='h-auto w-full'
                          shadowOffsetX={4}
                          shadowOffsetY={4}
                        />
                      </div>
                      <p className='font-pacifico text-shadow-primary-dark/30 m-0 mt-1 text-sm whitespace-nowrap text-[#FEA88A] text-shadow-2xs sm:text-base md:text-lg'>
                        Jan 24, 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info section - flows naturally after hero */}
      <div className='relative -mt-0.25 mb-3 w-full'>
        <div className='relative mx-auto h-full w-[95%]'>
          <div className='bg-primary-textured shadow-info-section relative mx-auto flex h-full max-w-[1600px] items-center justify-center overflow-hidden rounded-b-2xl'>
            <TimelineSchedule />
          </div>
        </div>
      </div>
    </>
  )
}

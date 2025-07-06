import Image from 'next/image'
import Navigation from './Navigation'
import ShadowButton from './ShadowButton'

export default function Hero() {
  return (
    <>
      <Navigation />

      <section className='bg-surface relative flex min-h-screen w-full flex-col items-center justify-start'>
        {/* Hero Arc positioned at bottom */}
        <div className='absolute right-0 bottom-0 left-0 z-20 mx-auto mb-8 w-full md:mb-12 lg:mb-16'>
          {/* Constrained container for proper scaling */}
          <div className='relative mx-auto w-full'>
            {/* Aspect ratio wrapper to maintain proportions based on squiggle dimensions */}
            <div className='relative mx-auto w-full'>
              {/* Squiggle Arc Container with proper layering */}
              <div className='relative'>
                {/* Invisible sizing element to maintain container dimensions */}
                <svg
                  viewBox='0 0 1380 611'
                  className='invisible h-full w-full'
                  preserveAspectRatio='xMidYMid meet'
                >
                  <path d='M690.001 0C734.073 0 772.004 54.6614 813.547 62.1005C856.535 69.8629 914.696 32.3446 954.433 46.8988C994.892 61.777 1006.09 125.171 1041.85 146.842C1077.98 168.512 1147.7 153.958 1178.41 181.127C1209.11 208.619 1192.5 271.042 1216.7 303.386C1240.54 335.406 1311.34 345.757 1328.32 381.658C1344.58 417.237 1303.04 468.987 1311.34 507.8C1319.13 542.947 1380 568.776 1380 611H0C6.802 574.652 60.8728 542.645 68.6566 507.8C77.3266 469.311 35.4219 417.237 51.678 381.658C68.2956 345.434 139.1 335.406 163.304 303.386C187.506 271.042 171.251 208.619 201.595 181.127C232.301 153.634 302.022 168.512 338.146 146.842C373.91 125.495 385.47 62.1005 425.568 46.8988C465.305 32.3444 523.104 69.5393 566.454 62.1005C608.358 54.6614 645.929 8.04544e-05 690.001 0Z' />
                </svg>

                {/* Squiggle Shadow (bottom layer) */}
                <div className='absolute inset-0 z-0 translate-x-[1.3%]'>
                  <Image
                    src='/images/figma-assets/squiggle-shadow.svg'
                    alt=''
                    width={378}
                    height={190}
                    className='h-full w-full object-contain'
                    priority
                  />
                </div>

                {/* Main Squiggle - maroon colored arc */}
                <div className='absolute inset-0 z-[1]'>
                  <Image
                    src='/images/figma-assets/squiggle-maroon.svg'
                    alt=''
                    width={378}
                    height={190}
                    className='h-full w-full object-contain'
                    priority
                  />
                </div>

                {/* All content positioned within the squiggle */}
                <div className='absolute inset-0 z-[2] flex flex-col items-center justify-center px-[8%] py-[10%]'>
                  {/* Hero Title Container with Portrait */}
                  <div className='relative mb-4 w-[90%]'>
                    {/* Portrait positioned at bottom center of parent */}
                    <div className='absolute bottom-0 left-1/2 w-[30%] -translate-x-1/2 translate-y-1/2'>
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
                    {/* Title Shadow */}
                    <div className='absolute inset-0 translate-x-[2%] translate-y-[2%]'>
                      <Image
                        src='/images/figma-assets/title-shadow.svg'
                        alt=''
                        width={300}
                        height={129}
                        className='h-full w-full object-contain'
                        priority
                      />
                    </div>

                    {/* Main Title */}
                    <div className='relative'>
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

                  {/* RSVP Button */}
                  <div className='mb-6'>
                    <ShadowButton
                      text='RSVP'
                      className='scale-75 sm:scale-90 md:scale-100'
                      ariaLabel='RSVP for the wedding'
                    />
                  </div>

                  {/* Date and location text inside the squiggle */}
                  <div className='flex w-full justify-between px-[15%]'>
                    {/* Left side text with wavy line */}
                    <div className='relative'>
                      <div className='relative w-[55px] sm:w-[65px]'>
                        <Image
                          src='/images/figma-assets/wavy-line-red.svg'
                          alt=''
                          width={65}
                          height={5}
                          className='h-auto w-full object-contain'
                        />
                      </div>
                      <p className='font-pacifico mt-1 text-[10px] whitespace-nowrap text-white sm:text-[12px] md:text-[14px]'>
                        See You In Mexico!
                      </p>
                    </div>

                    {/* Right side text with wavy line */}
                    <div className='relative text-center'>
                      <div className='relative w-[55px] sm:w-[65px]'>
                        <Image
                          src='/images/figma-assets/wavy-line-red.svg'
                          alt=''
                          width={65}
                          height={5}
                          className='h-auto w-full object-contain'
                        />
                      </div>
                      <p className='font-pacifico mt-1 text-[10px] whitespace-nowrap text-white sm:text-[12px] md:text-[14px]'>
                        jan 24, 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark section below hero */}
      <section className='relative min-h-[400px] w-full bg-[#70270E] pt-60'>
        {/* Grunge texture overlay */}
        <div
          className='absolute inset-0 opacity-20 mix-blend-multiply'
          style={{
            backgroundImage: 'url(/images/figma-assets/grunge.png)',
            backgroundSize: '342px 342px',
            backgroundRepeat: 'repeat',
          }}
        />
        {/* Content for this section will go here */}
      </section>
    </>
  )
}

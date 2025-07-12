'use client'

import React, { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import ShadowButton from './ShadowButton'
import WavyLine from './WavyLine'

const Faq = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: 'When should I book my room?',
      answer:
        'If you are certain that you would like to come, <strong>please book as soon as possible!</strong><br><br>There is a <strong>significant discount</strong> for booking rooms with our promo code!<br><br>January is peak season in Cancun and the resort cannot guarantee room availability when their inventory fills up. The resort has 440 suites but they book up fast during high season!',
      svgIcon: (
        <div className='flex h-[120px] w-[120px] items-center justify-center'>
          <img
            src='/images/icons/clock.svg'
            alt='Clock icon'
            className='h-full w-full object-contain'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(14%) sepia(31%) saturate(4044%) hue-rotate(348deg) brightness(93%) contrast(91%)',
            }}
          />
        </div>
      ),
    },
    {
      id: 2,
      question: 'What days should I book for?',
      answer:
        'We will be there January 22-26th, 2026 and we would love for you to join us for the entire time! However, this is completely up to you. Our current schedule is:<br><br><ul><li><strong>Thursday, Jan 22:</strong> Arrival day. Settle in, explore the resort, and enjoy welcome drinks by the pool</li><li><strong>Friday, Jan 23:</strong> Beach day and rehearsal dinner</li><li><strong>Saturday, Jan 24:</strong> THE BIG DAY</li><li><strong>Sunday, Jan 25:</strong> Recovery brunch and pool party</li><li><strong>Monday, Jan 26:</strong> Departure day</li></ul>',
      svgIcon: (
        <div className='flex h-[120px] w-[120px] items-center justify-center'>
          <img
            src='/images/icons/calender.svg'
            alt='Calendar icon'
            className='h-full w-full object-contain'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(14%) sepia(31%) saturate(4044%) hue-rotate(348deg) brightness(93%) contrast(91%)',
            }}
          />
        </div>
      ),
    },
    {
      id: 3,
      question: 'Can I bring my kids?',
      answer:
        'Unfortunately Excellence Resorts are <strong>adults-only (18+)</strong>. But think of it as a chance to sleep in and enjoy cocktails by the pool without worry!',
      svgIcon: (
        <div className='flex h-[120px] w-[120px] items-center justify-center'>
          <img
            src='/images/icons/sleep.svg'
            alt='Sleep icon'
            className='h-full w-full object-contain'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(14%) sepia(31%) saturate(4044%) hue-rotate(348deg) brightness(93%) contrast(91%)',
            }}
          />
        </div>
      ),
    },
    {
      id: 4,
      question: 'What is the weather like in Cancun in January?',
      answer:
        '<strong>Absolutely perfect!</strong> January is literally the best time to visit Cancun.<br><br>Expect:<ul><li><strong>Daytime temps:</strong> 72-80°F (perfect beach weather)</li><li><strong>Evening temps:</strong> 68-72°F</li><li><strong>Ocean temps:</strong> 80°F (like a warm bath!)</li><li>It only rains on average 5 days in January, and very rarely for the entire day</li><li><strong>Hurricane risk:</strong> Basically zero (the season ends in November)</li></ul>',
      svgIcon: (
        <div className='flex h-[120px] w-[120px] items-center justify-center'>
          <img
            src='/images/icons/beach.svg'
            alt='Beach icon'
            className='h-full w-full object-contain'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(14%) sepia(31%) saturate(4044%) hue-rotate(348deg) brightness(93%) contrast(91%)',
            }}
          />
        </div>
      ),
    },
    {
      id: 5,
      question: 'What is the dress code?',
      answer:
        '<strong>For the wedding day:</strong> Cocktail attire, and bright colors are encouraged! Consider flat shoes for the beach setting.<br><br><strong>For the resort in general:</strong> Many of the restaurants at the resort require long pants, skirts, or dresses at dinner. Shorts, flip-flops, tank-tops, and wet clothes are not allowed. However, this of course does not apply when you are at one of the pools or at the beach!',
      svgIcon: (
        <div className='flex h-[120px] w-[120px] items-center justify-center'>
          <img
            src='/images/icons/dress.svg'
            alt='Dress icon'
            className='h-full w-full object-contain'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(14%) sepia(31%) saturate(4044%) hue-rotate(348deg) brightness(93%) contrast(91%)',
            }}
          />
        </div>
      ),
    },
    {
      id: 6,
      question: 'What else should I bring?',
      answer:
        "<ul><li><strong>Reef-safe sunscreen</strong></li><li><strong>Cash for tips.</strong> While not expected, it's appreciated by the staff. Small bills in USD work great</li><li><strong>Multiple swim suits!</strong> The resort has 6 pools!</li><li><strong>Light jacket or wrap.</strong> For occasional cool evenings or AC in the restaurants</li><li><strong>Comfortable walking shoes</strong>, in case you decide to go on any excursions</li></ul>",
      svgIcon: (
        <div className='flex h-[120px] w-[120px] items-center justify-center'>
          <img
            src='/images/icons/camera.svg'
            alt='Camera icon'
            className='h-full w-full object-contain'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(14%) sepia(31%) saturate(4044%) hue-rotate(348deg) brightness(93%) contrast(91%)',
            }}
          />
        </div>
      ),
    },
    {
      id: 7,
      question: 'How do I get from the airport to the resort?',
      answer:
        'Cancun International Airport (CUN) is your destination - just 25-30 minutes from the resort!<br><br>You have several options:<ul><li><strong>Resort shuttle service (recommended!):</strong> Excellence provides a <strong>FREE</strong> shuttle service through their partner Seasons Tours, and is for guests on the reservation arriving and leaving at the same time. This applies only if you are booking for a minimum of 3 nights.</li><li><strong>Private shuttle companies (not through Excellence):</strong> Happy Shuttle Cancun, USA/Canada Transfers, Entertainment Plus. These typically cost around $100 roundtrip.</li><li><strong>Taxi (not our first recommendation):</strong> Are available but are more expensive than pre-booked shuttles</li></ul>',
      svgIcon: (
        <div className='flex h-[120px] w-[120px] items-center justify-center'>
          <img
            src='/images/icons/taxi.svg'
            alt='Taxi icon'
            className='h-full w-full object-contain'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(14%) sepia(31%) saturate(4044%) hue-rotate(348deg) brightness(93%) contrast(91%)',
            }}
          />
        </div>
      ),
    },
    {
      id: 8,
      question: 'What else is there to do in the area?',
      answer:
        '<ul><li><strong>Miilé Spa (book treatments early!):</strong> this spa is on-site, so you do not have to leave the resort</li><li><strong>Golf:</strong> There are multiple beautiful courses nearby. <a href="https://www.excellenceresorts.com/blog/what-are-the-4-best-golf-courses-in-cancun/" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); text-decoration: underline;">View golf course options</a></li><li><strong>Visiting cenotes</strong> (natural sinkholes that are amazing to swim in). There are so many along the Yucatan Peninsula. Highly recommend visiting at least one if you are planning on traveling out of the resort!</li></ul>',
      svgIcon: (
        <div className='flex h-[120px] w-[120px] items-center justify-center'>
          <img
            src='/images/icons/spa.svg'
            alt='Spa icon'
            className='h-full w-full object-contain'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(14%) sepia(31%) saturate(4044%) hue-rotate(348deg) brightness(93%) contrast(91%)',
            }}
          />
        </div>
      ),
    },
    {
      id: 9,
      question: 'Do we need to bring a gift?',
      answer:
        "Absolutely not! Your presence is present enough! We know it's not cheap to join us in Mexico, and that's gift enough.",
      svgIcon: (
        <div className='flex h-[120px] w-[120px] items-center justify-center'>
          <img
            src='/images/icons/cheers.svg'
            alt='Gift icon'
            className='h-full w-full object-contain'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(14%) sepia(31%) saturate(4044%) hue-rotate(348deg) brightness(93%) contrast(91%)',
            }}
          />
        </div>
      ),
    },
  ]

  return (
    <div id='faq' className='bg-surface min-h-screen p-4 sm:p-8'>
      {/* Header */}
      <div className='mb-12 text-center'>
        <h2 className='font-pacifico text-primary mb-4 text-4xl sm:text-5xl md:text-6xl'>
          Frequently Asked Questions
        </h2>
        <div className='mb-6 flex justify-center'>
          <WavyLine color='var(--color-accent)' className='w-48' />
        </div>
        <p className='font-display text-primary/80 text-lg'>
          Everything you need to know about our big day
        </p>
      </div>

      {/* Cards Grid */}
      <div className='mx-auto w-[95%] max-w-[1600px]'>
        <div className='grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border-primary relative cursor-pointer rounded-2xl border-2 bg-white p-8 transition-all duration-300 ease-out ${
                selectedCard === faq.id ? 'scale-105' : 'hover:scale-[1.02]'
              } `}
              onClick={() =>
                setSelectedCard(selectedCard === faq.id ? null : faq.id)
              }
              style={{
                boxShadow:
                  selectedCard === faq.id
                    ? '6px 6px 0px var(--color-primary)'
                    : '8px 8px 0px var(--color-primary)',
              }}
            >
              {/* Diagonal line texture overlay */}
              <div
                className='pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-30'
                style={{
                  backgroundImage: `url('/images/figma-assets/diagonal-lines.png')`,
                  backgroundSize: '7px 7px',
                  backgroundRepeat: 'repeat',
                }}
              />

              {/* Content container with relative positioning to stay above pattern */}
              <div className='relative z-10'>
                {/* Simple Icon/Illustration Area */}
                <div className='mb-6 flex justify-center'>
                  <div className='relative'>
                    {/* Main icon */}
                    <div className='relative z-10'>{faq.svgIcon}</div>
                  </div>
                </div>

                {/* Question */}
                <h3 className='font-display text-primary mb-4 flex min-h-[3.5rem] items-center justify-center text-center text-xl font-bold'>
                  {faq.question}
                </h3>

                {/* Answer (shown when selected) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${selectedCard === faq.id ? 'max-h-[1500px] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'} `}
                >
                  <div
                    className='text-primary/70 faq-content text-center leading-relaxed'
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>

                {/* Click indicator */}
                <div className='absolute right-4 bottom-4'>
                  <ChevronRight
                    className={`text-primary/40 h-5 w-5 transition-transform duration-300 ${selectedCard === faq.id ? '-rotate-90' : ''} `}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className='mt-16 text-center'>
        <p className='text-primary/80 mb-6 text-lg'>Still have questions?</p>
        <ShadowButton text='Contact Us' />
      </div>
    </div>
  )
}

export default Faq

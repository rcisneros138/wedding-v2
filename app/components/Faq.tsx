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
        "<strong>Book NOW</strong> - seriously, like right this minute if you are certain you want to come!<br><br>January is peak season in Cancun (everyone's escaping winter!), and Excellence Riviera Cancun can't guarantee room availability once their inventory fills up. Plus, booking early often means better rates.<br><br>We'd hate for you to miss out on celebrating with us because all the rooms are gone! The resort has 440 suites, but they book up FAST during high season.",
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <circle cx='40' cy='40' r='30' stroke='#8C3112' strokeWidth='2' />
          <path
            d='M40 20 L40 40 L55 55'
            stroke='#8C3112'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='40' cy='40' r='3' fill='black' />
        </svg>
      ),
    },
    {
      id: 2,
      question: 'What days should I book for?',
      answer:
        "We'll be there January 22-26, 2026, and we'd love for you to join us for the whole long weekend! Here's why:<br><br><ul><li><strong>Thursday, Jan 22:</strong> Arrival day - settle in, explore the resort, welcome drinks by the pool</li><li><strong>Friday, Jan 23:</strong> Beach day, rehearsal dinner festivities</li><li><strong>Saturday, Jan 24:</strong> THE BIG DAY! 💍</li><li><strong>Sunday, Jan 25:</strong> Recovery brunch and farewell pool party</li><li><strong>Monday, Jan 26:</strong> Departure day</li></ul>Of course, if you can only make it for a shorter stay, we totally understand - just having you there for our special day means the world!",
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <circle cx='40' cy='40' r='30' stroke='#8C3112' strokeWidth='2' />
          <path
            d='M40 20 L40 40 L55 55'
            stroke='#8C3112'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='40' cy='40' r='3' fill='black' />
        </svg>
      ),
    },
    {
      id: 3,
      question: 'Can I bring my kids?',
      answer:
        'Unfortunately, no little ones allowed! Excellence Resorts are <strong>adults-only (18+)</strong>, which means you get to enjoy a kid-free vacation!<br><br>Think of it as your chance to sleep in, enjoy uninterrupted conversations, and sip cocktails by the pool without worry. Time to call that babysitter and plan your grown-up getaway!',
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <circle cx='40' cy='40' r='30' stroke='#8C3112' strokeWidth='2' />
          <path
            d='M40 20 L40 40 L55 55'
            stroke='#8C3112'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='40' cy='40' r='3' fill='black' />
        </svg>
      ),
    },
    {
      id: 4,
      question: 'What is the weather like in Cancun in January?',
      answer:
        "<strong>Absolute PERFECTION!</strong> ☀️ January is literally the best month to visit Cancun. Expect:<br><br><ul><li><strong>Daytime temps:</strong> 70-82°F (perfect beach weather!)</li><li><strong>Evening temps:</strong> 68-72°F (ideal for outdoor dining)</li><li><strong>Ocean temp:</strong> 80°F (like a warm bath!)</li><li><strong>Humidity:</strong> Lower than summer at around 75%</li><li><strong>Rain:</strong> Practically zero - January averages only 5 rainy days</li><li><strong>Hurricane risk:</strong> NONE (season ends in November)</li></ul>Pack your sunglasses because you'll get about 8 hours of sunshine daily!",
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <circle cx='40' cy='40' r='30' stroke='#8C3112' strokeWidth='2' />
          <path
            d='M40 20 L40 40 L55 55'
            stroke='#8C3112'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='40' cy='40' r='3' fill='black' />
        </svg>
      ),
    },
    {
      id: 5,
      question: 'What is the dress code?',
      answer:
        '<p><strong>Wedding Day:</strong> Cocktail attire with a tropical twist! We\'re encouraging bright, vibrant colors - think coral, turquoise, sunny yellow, or tropical prints. Leave the black at home and embrace those vacation vibes! Ladies, consider wedges or block heels for the beach setting. Gentlemen, lightweight fabrics are your friend.</p><p><strong>Resort Dining:</strong> Most restaurants require "resort elegant" in the evenings:<br><ul><li><strong>Men:</strong> Long pants, collared shirts, closed-toe shoes (no shorts or sandals)</li><li><strong>Women:</strong> Sundresses, elegant resort wear</li></ul></p>',
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <circle cx='40' cy='40' r='30' stroke='#8C3112' strokeWidth='2' />
          <path
            d='M40 20 L40 40 L55 55'
            stroke='#8C3112'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='40' cy='40' r='3' fill='black' />
        </svg>
      ),
    },
    {
      id: 6,
      question: 'What else should I bring?',
      answer:
        "Your packing essentials for paradise:<br><br><ul><li><strong>REEF-SAFE SUNSCREEN</strong> - lots of it! (Required for swimming in cenotes)</li><li><strong>Cash for tips</strong> - While not expected, it's appreciated. Small bills in USD work great</li><li><strong>Multiple swimsuits</strong> - You'll live in them! (The resort has 6 pools!)</li><li><strong>Light jacket or wrap</strong> - For occasional cool evenings or AC in restaurants</li><li><strong>Underwater camera</strong> - For snorkeling adventures</li><li><strong>Comfortable walking shoes</strong> - For excursions to ruins</li><li><strong>Insect repellent</strong> - For jungle excursions</li><li><strong>Medications</strong> - Including Dramamine if you're prone to seasickness</li><li><strong>Power bank</strong> - You'll take a million photos!</li></ul>",
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <circle cx='40' cy='40' r='30' stroke='#8C3112' strokeWidth='2' />
          <path
            d='M40 20 L40 40 L55 55'
            stroke='#8C3112'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='40' cy='40' r='3' fill='black' />
        </svg>
      ),
    },
    {
      id: 7,
      question: 'How do I get from the airport to the resort?',
      answer:
        "Cancun International Airport (CUN) is your destination - just 20-35 minutes from the resort!<br><br>You have several options:<ul><li><strong>Resort Shuttle Service</strong> - Excellence offers transfers, but they can be pricey ($150+ roundtrip)</li><li><strong>Private Shuttle Companies</strong> - More affordable at $60-105 roundtrip: Happy Shuttle Cancun, USA/Canada Transfers, Entertainment Plus</li><li><strong>Taxi</strong> - Available but more expensive than pre-booked shuttles</li></ul><strong>Pro tip:</strong> Book your transportation in advance! You'll skip the airport chaos and often save money. The resort is in Puerto Morelos, about 25km south of the airport.",
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <circle cx='40' cy='40' r='30' stroke='#8C3112' strokeWidth='2' />
          <path
            d='M40 20 L40 40 L55 55'
            stroke='#8C3112'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='40' cy='40' r='3' fill='black' />
        </svg>
      ),
    },
    {
      id: 8,
      question: 'What else is there to do in the area?',
      answer:
        '<strong>SO MUCH!</strong><br><br><p><strong>At the Resort:</strong></p><ul><li>Miilé Spa (book treatments early!)</li><li>6 meandering pools including a swim-up bar</li><li>Complimentary kayaks, paddleboards, snorkeling gear</li><li>Beach volleyball, yoga classes, fitness center</li><li>Nightly entertainment and shows</li><li>Golf at nearby Greg Norman-designed course</li></ul><p><strong>Nearby Adventures (20-90 minutes away):</strong></p><ul><li>Cenote hopping on Ruta de los Cenotes - swim in crystal-clear underground pools!</li><li>Snorkeling at Puerto Morelos Reef - the second-largest barrier reef in the world!</li><li>Mayan Ruins: Tulum, Chichen Itza, Coba</li><li>Swimming with whale sharks (January is prime season!)</li><li>Catamaran trip to Isla Mujeres</li><li>ATV jungle tours with zip-lining</li><li>Deep-sea fishing</li><li>Explore Puerto Morelos town</li></ul>',
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <circle cx='40' cy='40' r='30' stroke='#8C3112' strokeWidth='2' />
          <path
            d='M40 20 L40 40 L55 55'
            stroke='#8C3112'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='40' cy='40' r='3' fill='black' />
        </svg>
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
                    {/* Background circle with dots */}
                    <div className='absolute -inset-4'>
                      <svg width='120' height='120' viewBox='0 0 120 120'>
                        <circle cx='20' cy='20' r='2' fill='#FEA88A' />
                        <circle cx='100' cy='20' r='2' fill='#FEA88A' />
                        <circle cx='20' cy='100' r='2' fill='#FEA88A' />
                        <circle cx='100' cy='100' r='2' fill='#FEA88A' />
                        <path
                          d='M30,60 Q60,40 90,60'
                          stroke='#FEA88A'
                          strokeWidth='2'
                          fill='none'
                          strokeDasharray='3,3'
                        />
                      </svg>
                    </div>
                    {/* Main icon */}
                    <div className='relative z-10'>{faq.svgIcon}</div>
                  </div>
                </div>

                {/* Question */}
                <h3 className='font-display text-primary mb-4 text-center text-xl font-bold'>
                  {faq.question}
                </h3>

                {/* Answer (shown when selected) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${selectedCard === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} `}
                >
                  <div
                    className='text-primary/70 faq-content text-center leading-relaxed'
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>

                {/* Click indicator */}
                <div className='absolute right-4 bottom-4'>
                  <ChevronRight
                    className={`text-primary/40 h-5 w-5 transition-transform duration-300 ${selectedCard === faq.id ? 'rotate-90' : ''} `}
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

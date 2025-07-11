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
      question: 'What time should we arrive?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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
      question: 'Is there parking available?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed tempus urna et pharetra pharetra massa. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Sed risus pretium quam vulputate dignissim suspendisse in est ante.',
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <rect
            x='15'
            y='35'
            width='50'
            height='25'
            rx='3'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <circle
            cx='25'
            cy='60'
            r='5'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <circle
            cx='55'
            cy='60'
            r='5'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <path
            d='M15 35 L20 20 L50 20 L65 35'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <line
            x1='30'
            y1='20'
            x2='30'
            y2='35'
            stroke='#8C3112'
            strokeWidth='2'
          />
          <line
            x1='45'
            y1='20'
            x2='45'
            y2='35'
            stroke='#8C3112'
            strokeWidth='2'
          />
        </svg>
      ),
    },
    {
      id: 3,
      question: 'Can we bring our kids?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec auctor, nisl eget ultricies ultrices, nunc nisl aliquam nunc, quis aliquam nisl nunc vel nisl. Sed euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, quis aliquam nisl nunc vel nisl. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <circle
            cx='40'
            cy='30'
            r='8'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <path
            d='M40 38 L40 55 M40 45 L30 40 M40 45 L50 40 M40 55 L30 65 M40 55 L50 65'
            stroke='#8C3112'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle
            cx='25'
            cy='25'
            r='5'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <circle
            cx='55'
            cy='25'
            r='5'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
        </svg>
      ),
    },
    {
      id: 4,
      question: "What's the dress code?",
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est placerat in egestas erat. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec.',
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <path
            d='M30 20 L50 20 L55 35 L50 50 L30 50 L25 35 Z'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <path
            d='M25 35 Q15 40 15 55 L25 55'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <path
            d='M55 35 Q65 40 65 55 L55 55'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <circle
            cx='40'
            cy='15'
            r='5'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
        </svg>
      ),
    },
    {
      id: 5,
      question: 'Will there be vegetarian options?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. At varius vel pharetra vel turpis nunc eget lorem dolor. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.',
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <path
            d='M20 40 Q40 20 60 40 L60 55 Q40 65 20 55 Z'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <line
            x1='30'
            y1='40'
            x2='30'
            y2='50'
            stroke='#8C3112'
            strokeWidth='2'
          />
          <line
            x1='40'
            y1='35'
            x2='40'
            y2='52'
            stroke='#8C3112'
            strokeWidth='2'
          />
          <line
            x1='50'
            y1='40'
            x2='50'
            y2='50'
            stroke='#8C3112'
            strokeWidth='2'
          />
          <circle
            cx='25'
            cy='25'
            r='3'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <circle
            cx='55'
            cy='25'
            r='3'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
        </svg>
      ),
    },
    {
      id: 6,
      question: 'Can we take photos?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat.',
      svgIcon: (
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <rect
            x='20'
            y='25'
            width='40'
            height='30'
            rx='5'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <circle
            cx='40'
            cy='40'
            r='8'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <circle
            cx='40'
            cy='40'
            r='4'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
          <rect
            x='48'
            y='20'
            width='8'
            height='5'
            stroke='#8C3112'
            strokeWidth='2'
            fill='none'
          />
        </svg>
      ),
    },
  ]

  return (
    <div className='bg-surface min-h-screen p-4 sm:p-8'>
      {/* Header */}
      <div className='mb-12 text-center'>
        <h2 className='font-pacifico mb-4 text-4xl text-primary sm:text-5xl md:text-6xl'>
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
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`relative cursor-pointer rounded-2xl border-2 border-shadow bg-surface p-8 transition-all duration-300 ease-out ${
                selectedCard === faq.id
                  ? 'scale-105'
                  : 'hover:scale-[1.02]'
              } `}
              onClick={() =>
                setSelectedCard(selectedCard === faq.id ? null : faq.id)
              }
              style={{
                boxShadow: selectedCard === faq.id 
                  ? '6px 6px 0px rgba(16, 28, 38, 1)' 
                  : '8px 8px 0px rgba(16, 28, 38, 1)',
              }}
            >
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
              <h3 className='mb-4 text-center text-xl font-display font-bold text-primary'>
                {faq.question}
              </h3>

              {/* Answer (shown when selected) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${selectedCard === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} `}
              >
                <p className='text-center leading-relaxed text-primary/70'>
                  {faq.answer}
                </p>
              </div>

              {/* Click indicator */}
              <div className='absolute right-4 bottom-4'>
                <ChevronRight
                  className={`h-5 w-5 text-primary/40 transition-transform duration-300 ${selectedCard === faq.id ? 'rotate-90' : ''} `}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className='mt-16 text-center'>
        <p className='mb-6 text-primary/80 text-lg'>Still have questions?</p>
        <ShadowButton text='Contact Us' />
      </div>
    </div>
  )
}

export default Faq

'use client'

import Image from 'next/image'
import { useInView } from '../hooks/useInView'

interface TimelineEvent {
  time: string
  title: string
  position: number // Percentage position along timeline (0-100)
  alignment: 'left' | 'right'
  loteriaCard: string // Loteria card filename
  rotation: number // Rotation angle in degrees
  offsetX: number // Horizontal offset in pixels
  offsetY: number // Vertical offset in pixels
}

const timelineEvents: TimelineEvent[] = [
  {
    time: '4:30 pm',
    title: 'Wedding Ceremony',
    position: 15,
    alignment: 'right',
    loteriaCard: 'LosNovios.svg',
    rotation: -3,
    offsetX: 2,
    offsetY: -1,
  },
  {
    time: '5:30 pm',
    title: 'Cocktail Hour',
    position: 40,
    alignment: 'left',
    loteriaCard: 'Borracho.svg',
    rotation: 4,
    offsetX: -3,
    offsetY: 2,
  },
  {
    time: '6:30 pm',
    title: 'Dinner',
    position: 65,
    alignment: 'right',
    loteriaCard: 'LaBandera.svg',
    rotation: -5,
    offsetX: 1,
    offsetY: -2,
  },
  {
    time: '8:30 pm',
    title: 'Dancing',
    position: 90,
    alignment: 'left',
    loteriaCard: 'Mexico.svg',
    rotation: 3,
    offsetX: -2,
    offsetY: 1,
  },
]

// Timeline Event Component with Intersection Observer
function TimelineEventCard({ event, index }: { event: TimelineEvent; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className='absolute flex w-full items-center'
      style={{ top: `${event.position}%` }}
    >
      {/* Event Content */}
      <div
        className={`flex w-full items-center ${
          event.alignment === 'left' ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        {/* Text Container */}
        <div
          className={`w-5/12 ${
            event.alignment === 'left'
              ? 'pr-8 text-right'
              : 'pl-8 text-left'
          }`}
        >
          {/* Time */}
          <p className='font-pacifico text-shadow-offset-xs text-purple mb-1 text-base'>
            {event.time}
          </p>
          {/* Event Title */}
          <p className='font-pacifico text-shadow-offset-sm text-accent text-xl md:text-2xl'>
            {event.title}
          </p>
        </div>

        {/* Center Circle */}
        <div className='relative flex w-2/12 items-center justify-center'>
          {/* Shadow circle */}
          <div className='bg-shadow absolute h-4 w-4 translate-x-[2px] translate-y-[2px] rounded-full' />
          {/* Main circle */}
          <div className='bg-primary relative z-10 h-4 w-4 rounded-full' />
        </div>

        {/* Loteria card on opposite side */}
        <div className='flex w-5/12 items-center justify-center'>
          <div 
            className={`relative transition-transform duration-300 hover:scale-[1.01] ${
              isInView ? (event.alignment === 'left' ? 'animate-slide-left' : 'animate-slide-right') : ''
            } ${
              isInView ? (
                index === 0 ? 'animation-delay-500' :
                index === 1 ? 'animation-delay-700' :
                index === 2 ? 'animation-delay-900' :
                'animation-delay-1100'
              ) : ''
            }`}
            style={{
              opacity: isInView ? undefined : 0
            }}
          >
            <Image
              src={`/images/loterias/${event.loteriaCard}`}
              alt={`Loteria card for ${event.title}`}
              width={80}
              height={120}
              className='opacity-90 sepia-[0.2] drop-shadow-md'
              style={{
                transform: `rotate(${event.rotation}deg) translateX(${event.offsetX}px) translateY(${event.offsetY}px)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TimelineSchedule() {
  return (
    <div className='relative mx-auto max-w-2xl px-4 py-16'>
      {/* Title */}
      <div className='mt-15 mb-1 text-center'>
        <h2 className='font-display text-shadow-offset text-accent text-4xl md:text-5xl'>
          Saturday, January 24th
        </h2>
      </div>

      {/* Timeline Container */}
      <div className='relative mx-auto h-[550px] w-full max-w-lg md:h-[650px]'>
        {/* Vertical Wavy Timeline */}
        <svg
          className='absolute top-0 left-1/2 h-full w-32 -translate-x-1/2'
          viewBox='0 0 120 400'
          fill='none'
          preserveAspectRatio='xMidYMid meet'
        >
          {/* Shadow elements */}
          <g transform='translate(3, 3)'>
            {/* Shadow segments */}
            <path
              d='M60 60 L60 160'
              stroke='var(--color-shadow)'
              strokeWidth='4'
              fill='none'
            />
            <path
              d='M60 160 L60 260'
              stroke='var(--color-shadow)'
              strokeWidth='4'
              fill='none'
            />
            <path
              d='M60 260 L60 580'
              stroke='var(--color-shadow)'
              strokeWidth='4'
              fill='none'
            />
          </g>

          {/* Main elements */}
          {/* Main segments */}
          <path
            d='M60 60 L60 160'
            stroke='var(--color-primary)'
            strokeWidth='4'
            fill='none'
          />
          <path
            d='M60 160 L60 260'
            stroke='var(--color-primary)'
            strokeWidth='4'
            fill='none'
          />
          <path
            d='M60 260 L60 580'
            stroke='var(--color-primary)'
            strokeWidth='4'
            fill='none'
          />
        </svg>

        {/* Timeline Events */}
        {timelineEvents.map((event, index) => (
          <TimelineEventCard key={index} event={event} index={index} />
        ))}
      </div>
    </div>
  )
}

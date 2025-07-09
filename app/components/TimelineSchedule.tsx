'use client'

interface TimelineEvent {
  time: string
  title: string
  position: number // Percentage position along timeline (0-100)
  alignment: 'left' | 'right'
}

const timelineEvents: TimelineEvent[] = [
  {
    time: '4:30 pm',
    title: 'Wedding Ceremony',
    position: 15,
    alignment: 'right'
  },
  {
    time: '5:30 pm',
    title: 'Cocktail Hour',
    position: 35,
    alignment: 'left'
  },
  {
    time: '6:30 pm',
    title: 'Dinner',
    position: 60,
    alignment: 'right'
  },
  {
    time: '8:30 pm',
    title: 'Dancing',
    position: 85,
    alignment: 'left'
  }
]

export default function TimelineSchedule() {
  return (
    <div className='relative mx-auto max-w-2xl px-4 py-16'>
      {/* Title */}
      <div className='mb-12 text-center'>
        <h2 className='font-display text-shadow-offset text-4xl text-accent md:text-5xl'>
          Saturday, January 24th
        </h2>
      </div>

      {/* Timeline Container */}
      <div className='relative mx-auto h-[450px] w-full max-w-lg md:h-[500px]'>
        {/* Vertical Wavy Timeline */}
        <svg
          className='absolute left-1/2 top-0 h-full w-32 -translate-x-1/2'
          viewBox='0 0 120 500'
          fill='none'
          preserveAspectRatio='none'
        >
          {/* Shadow path */}
          <path
            d='M60 30 Q90 80 60 130 Q30 180 60 230 Q90 280 60 330 Q30 380 60 430 L60 470'
            stroke='var(--color-shadow)'
            strokeWidth='5'
            fill='none'
            transform='translate(3, 3)'
          />
          {/* Main path */}
          <path
            d='M60 30 Q90 80 60 130 Q30 180 60 230 Q90 280 60 330 Q30 380 60 430 L60 470'
            stroke='var(--color-primary)'
            strokeWidth='5'
            fill='none'
          />
        </svg>

        {/* Timeline Events */}
        {timelineEvents.map((event, index) => (
          <div
            key={index}
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
                  event.alignment === 'left' ? 'text-right pr-8' : 'text-left pl-8'
                }`}
              >
                {/* Time */}
                <p className='font-pacifico text-shadow-offset-xs mb-1 text-base text-purple'>
                  {event.time}
                </p>
                {/* Event Title */}
                <p className='font-pacifico text-shadow-offset-sm text-xl text-accent md:text-2xl'>
                  {event.title}
                </p>
              </div>

              {/* Center Dot */}
              <div className='relative flex w-2/12 items-center justify-center'>
                <div className='h-7 w-7 rounded-full bg-primary border-2 border-shadow' />
              </div>

              {/* Empty space for opposite side */}
              <div className='w-5/12' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
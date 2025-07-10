import Image from 'next/image'
import RSVPForm from '@/app/components/RSVPForm'
import WavyLine from '@/app/components/WavyLine'

export default function RSVPSection() {
  return (
    <>
      {/* Main RSVP Section - flows from info section with maroon background */}
      <div id='rsvp' className='relative -mt-[0px] w-full'>
        <div className='relative mx-auto w-[95%]'>
          <div
            className='bg-primary-textured relative mx-auto max-w-[1600px] bg-[#8C3112] py-16'
            style={{ boxShadow: '8px 0px 0px rgba(16, 28, 38, 1)' }}
          >
            {/* Decorative Dots Pattern */}
            <div className='pointer-events-none absolute top-0 left-0 h-full w-full opacity-5'>
              <Image
                src='/images/figma-assets/dots-pattern.png'
                alt=''
                fill
                className='object-cover'
              />
            </div>

            {/* RSVP Header */}
            <div className='relative mb-12 px-4 text-center'>
              <h2 className='font-display text-accent mb-4 text-5xl md:text-6xl'>
                RSVP
              </h2>

              <div className='mb-6 flex justify-center'>
                <WavyLine color='var(--color-accent)' className='w-48' />
              </div>

              <p className='text-accent/90 mb-2 text-xl'>
                Please respond by December 1st, 2025
              </p>
              <p className='text-accent/80 text-lg'>
                We can't wait to celebrate with you!
              </p>
            </div>

            {/* Form */}
            <div className='relative mx-auto max-w-4xl px-4'>
              <RSVPForm />
            </div>
          </div>
        </div>
      </div>

      {/* Wedding Details Section - separate maroon section */}
      <div className='bg-primary-textured relative w-full py-16 text-white'>
        <div className='container mx-auto max-w-4xl px-4 text-center'>
          <h3 className='font-display mb-6 text-3xl'>Wedding Details</h3>

          <div className='grid gap-8 text-lg md:grid-cols-2'>
            <div>
              <h4 className='mb-2 text-xl font-semibold'>Date & Time</h4>
              <p>Saturday, January 24, 2026</p>
              <p>4:00 PM - 11:00 PM</p>
            </div>

            <div>
              <h4 className='mb-2 text-xl font-semibold'>Location</h4>
              <p>Dreams Playa Mujeres</p>
              <p>Cancun, Mexico</p>
            </div>
          </div>

          <div className='mt-8'>
            <WavyLine color='#FFFFFF' className='mx-auto w-48' />
          </div>
        </div>
      </div>
    </>
  )
}

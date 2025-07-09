import Image from 'next/image'
import RSVPForm from '@/app/components/RSVPForm'
import WavyLine from '@/app/components/WavyLine'

export default function RSVPSection() {
  return (
    <>
      {/* Main RSVP Section - flows from info section with maroon background */}
      <div id="rsvp" className='relative -mt-[1px] w-full'>
        <div className='relative mx-auto w-[95%]'>
          <div 
            className='relative mx-auto max-w-[1600px] bg-[#8C3112] py-16'
            style={{ boxShadow: '8px 0px 0px rgba(16, 28, 38, 1)' }}
          >
            {/* Decorative Dots Pattern */}
            <div className='absolute top-0 left-0 w-full h-full pointer-events-none opacity-5'>
              <Image
                src='/images/figma-assets/dots-pattern.png'
                alt=''
                fill
                className='object-cover'
              />
            </div>

            {/* RSVP Header */}
            <div className='relative px-4 text-center mb-12'>
              <h2 className='font-display text-5xl md:text-6xl text-white mb-4'>
                RSVP
              </h2>
              
              <div className='flex justify-center mb-6'>
                <WavyLine color='#FFFFFF' className='w-48' />
              </div>
              
              <p className='text-xl text-white/90 mb-2'>
                Please respond by December 1st, 2025
              </p>
              <p className='text-lg text-white/80'>
                We can't wait to celebrate with you!
              </p>
            </div>

            {/* Form */}
            <div className='relative px-4 max-w-4xl mx-auto'>
              <RSVPForm />
            </div>
          </div>
        </div>
      </div>

      {/* Wedding Details Section - separate maroon section */}
      <div className='relative w-full bg-primary text-white py-16'>
        <div className='container mx-auto max-w-4xl px-4 text-center'>
          <h3 className='font-display text-3xl mb-6'>Wedding Details</h3>
          
          <div className='grid md:grid-cols-2 gap-8 text-lg'>
            <div>
              <h4 className='font-semibold text-xl mb-2'>Date & Time</h4>
              <p>Saturday, January 24, 2026</p>
              <p>4:00 PM - 11:00 PM</p>
            </div>
            
            <div>
              <h4 className='font-semibold text-xl mb-2'>Location</h4>
              <p>Dreams Playa Mujeres</p>
              <p>Cancun, Mexico</p>
            </div>
          </div>
          
          <div className='mt-8'>
            <WavyLine color='#FFFFFF' className='w-48 mx-auto' />
          </div>
        </div>
      </div>
    </>
  )
}
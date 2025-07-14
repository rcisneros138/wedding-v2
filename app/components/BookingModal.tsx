'use client'

import React, { useEffect } from 'react'
import ShadowButton from './ShadowButton'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  bookingUrl: string
}

export default function BookingModal({
  isOpen,
  onClose,
  bookingUrl,
}: BookingModalProps) {
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleContinueBooking = () => {
    window.open(bookingUrl, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className='bg-opacity-50 fixed inset-0 z-[100] bg-black transition-opacity duration-300'
        onClick={onClose}
      />

      {/* Modal */}
      <div className='fixed inset-0 z-[101] flex items-center justify-center p-4'>
        <div className='relative w-full max-w-lg'>
          {/* Shadow layer */}
          <div className='bg-primary absolute inset-0 translate-x-[1.5%] translate-y-[4%] rounded-2xl' />

          {/* Modal content */}
          <div className='border-primary relative max-h-[90vh] overflow-y-auto rounded-2xl border-2 bg-white p-8'>
            {/* Diagonal line texture overlay */}
            <div
              className='pointer-events-none absolute inset-0 rounded-2xl opacity-20'
              style={{
                backgroundImage: `url('/images/figma-assets/diagonal-lines.png')`,
                backgroundSize: '7px 7px',
                backgroundRepeat: 'repeat',
              }}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className='text-primary hover:text-primary-dark absolute top-4 right-4 z-10 transition-colors'
              aria-label='Close modal'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            {/* Content */}
            <div className='relative z-10'>
              {/* Header */}
              <h2 className='font-pacifico text-primary mb-6 text-center text-3xl'>
                Important Booking Instructions
              </h2>

              {/* Warning message */}
              <div className='bg-opacity-20 mb-6 rounded-lg border-2 border-[#FEA88A] bg-[#FEA88A] p-4'>
                <p className='text-primary text-center font-semibold'>
                  ⚠️ Please follow these steps carefully to ensure you book the
                  correct hotel with our group discount
                </p>
              </div>

              {/* Instructions */}
              <div className='mb-8 space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='bg-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold text-white'>
                    1
                  </div>
                  <div className='flex-1'>
                    <p className='text-primary mb-1 font-semibold'>
                      Select the CORRECT hotel:
                    </p>
                    <p className='text-lg font-bold text-[#FEA88A]'>
                      EXCELLENCE RIVIERA CANCUN
                    </p>
                    <p className='text-primary-dark text-sm italic'>
                      (NOT Excellence Playa Mujeres)
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='bg-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold text-white'>
                    2
                  </div>
                  <div className='flex-1'>
                    <p className='text-primary mb-1 font-semibold'>
                      Verify the promo code is applied:
                    </p>
                    <div className='bg-surface border-primary inline-block rounded border-2 px-3 py-1'>
                      <code className='font-mono text-lg font-bold text-[#FEA88A]'>
                        CLWJAN26XRC
                      </code>
                    </div>
                    <p className='text-primary-dark mt-1 text-sm'>
                      This code gives you our special group rate!
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <div className='bg-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold text-white'>
                    3
                  </div>
                  <div className='flex-1'>
                    <p className='text-primary mb-1 font-semibold'>
                      Check your dates:
                    </p>
                    <p className='text-primary'>
                      The wedding day is January 24, 2026 (we will be there from
                      the 22nd to the 26th){' '}
                    </p>
                    <p className='text-primary-dark text-sm'>
                      The wedding is on January 24, 2026, but you’re more than
                      welcome to arrive as early or stay as long as you’d like.
                      Whether you’re planning a long weekend, a full vacation,
                      or something in between, we’d love for you to enjoy the
                      area at your own pace. Come early, linger late — whatever
                      works best for you!
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className='text-center'>
                <ShadowButton
                  text='Continue to Booking'
                  onClick={handleContinueBooking}
                  backgroundColor='var(--color-accent)'
                  className='inline-block'
                />
              </div>

              {/* Help text */}
              <p className='text-primary-dark mt-4 text-center text-sm'>
                The booking site will open in a new tab
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

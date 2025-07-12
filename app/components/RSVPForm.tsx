'use client'

import { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Turnstile } from '@marsidev/react-turnstile'
import {
  rsvpFormSchema,
  type RSVPFormData,
  type RSVPResponse,
} from '@/app/types/rsvp'
import ShadowButton from './ShadowButton'

export default function RSVPForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  
  // Development warning for wrong server
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      // Check if running on Wrangler Pages (port 8788) instead of Next.js dev (port 3000)
      const isWranglerServer = window.location.port === '8788'
      if (!isWranglerServer && window.location.hostname === 'localhost') {
        console.warn(
          '⚠️ [RSVP Form Warning]\n' +
          'The RSVP form requires Cloudflare D1 database access.\n\n' +
          '❌ Current server: npm run dev (Next.js)\n' +
          '✅ Required server: npm run pages:preview (Wrangler)\n\n' +
          'To test the RSVP form:\n' +
          '1. Stop the current server (Ctrl+C)\n' +
          '2. Run: npm run pages:preview\n' +
          '3. Open: http://localhost:8788\n\n' +
          'The form will not work without Cloudflare bindings!'
        )
      }
    }
  }, [])

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpFormSchema),
    defaultValues: {
      attending: true,
      bookedRoom: false,
    },
  })

  const isAttending = watch('attending')

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Development logging
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEV] Submitting RSVP form:', data)
    }

    try {
      // Get Turnstile token from form
      const formData = new FormData(formRef.current!)
      const turnstileToken = formData.get('cf-turnstile-response')

      if (!turnstileToken) {
        throw new Error('Please complete the security check')
      }

      // Submit to API
      const requestBody = {
        ...data,
        turnstileToken,
      }
      
      if (process.env.NODE_ENV === 'development') {
        console.log('[DEV] API Request Body:', requestBody)
      }
      
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }).catch((error) => {
        console.error('[DEV] Network error:', error)
        throw new Error('Network error: Unable to reach the server. Are you running with wrangler pages dev?')
      })

      const result: RSVPResponse = await response.json()
      
      if (process.env.NODE_ENV === 'development') {
        console.log('[DEV] API Response:', {
          status: response.status,
          success: result.success,
          message: result.message,
          data: result.data
        })
      }

      if (result.success) {
        setSubmitStatus('success')
        setStatusMessage(result.message || 'Thank you for your RSVP!')
        reset()
      } else {
        throw new Error(result.error || 'Failed to submit RSVP')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage(
        error instanceof Error ? error.message : 'Something went wrong',
      )
      
      if (process.env.NODE_ENV === 'development') {
        console.error('[DEV] Form submission error:', error)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='relative bg-surface rounded-2xl shadow-offset-primary border-primary border-2 p-8 max-w-2xl mx-auto'>
      {/* Diagonal line texture overlay */}
      <div
        className='pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-30'
        style={{
          backgroundImage: `url('/images/figma-assets/diagonal-lines.png')`,
          backgroundSize: '7px 7px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Form content - positioned above texture */}
      <div className='relative'>
        <h2 className='font-display text-primary mb-6 text-center text-3xl'>
          RSVP
        </h2>

        {submitStatus === 'success' ? (
          <div className='py-8 text-center'>
            <div className='text-accent mb-4 text-6xl'>✓</div>
            <p className='text-primary mb-2 text-xl'>
              Thank you for your RSVP!
            </p>
            <p className='text-gray-600'>{statusMessage}</p>
            <button
              onClick={() => {
                setSubmitStatus('idle')
                setStatusMessage('')
              }}
              className='text-primary mt-6 underline hover:no-underline'
            >
              Submit another RSVP
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className='space-y-6'
          >
            {/* Guest Name */}
            <div>
              <label
                htmlFor='guestName'
                className='mb-1 block text-sm font-medium text-gray-700'
              >
                Your Name *
              </label>
              <input
                {...register('guestName')}
                type='text'
                className='focus:ring-primary relative w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2'
                placeholder='John Doe'
              />
              {errors.guestName && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.guestName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='mb-1 block text-sm font-medium text-gray-700'
              >
                Email Address *
              </label>
              <input
                {...register('email')}
                type='email'
                className='focus:ring-primary relative w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2'
                placeholder='john@example.com'
              />
              {errors.email && (
                <p className='mt-1 text-sm text-red-500'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor='phone'
                className='mb-1 block text-sm font-medium text-gray-700'
              >
                Phone Number (Optional)
              </label>
              <input
                {...register('phone')}
                type='tel'
                className='focus:ring-primary relative w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2'
                placeholder='(555) 123-4567'
              />
            </div>

            {/* Attending */}
            <div>
              <label className='mb-2 block text-sm font-medium text-gray-700'>
                Will you be attending? *
              </label>
              <div className='flex gap-4'>
                <label className='flex items-center'>
                  <input
                    {...register('attending')}
                    type='radio'
                    value='true'
                    onChange={() => setValue('attending', true)}
                    className='relative mr-2 bg-white'
                  />
                  <span>Yes, I'll be there!</span>
                </label>
                <label className='flex items-center'>
                  <input
                    {...register('attending')}
                    type='radio'
                    value='false'
                    onChange={() => setValue('attending', false)}
                    className='relative mr-2 bg-white'
                  />
                  <span>Sorry, can't make it</span>
                </label>
              </div>
            </div>

            {/* Additional fields for attending guests */}
            {isAttending && (
              <>
                {/* Plus One Name */}
                <div>
                  <label
                    htmlFor='plusOneName'
                    className='mb-1 block text-sm font-medium text-gray-700'
                  >
                    Names of Additional Guests
                  </label>
                  <input
                    {...register('plusOneName')}
                    type='text'
                    className='focus:ring-primary relative w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2'
                    placeholder='Jane Doe, John Smith'
                  />
                </div>

                {/* Song Requests */}
                <div>
                  <label
                    htmlFor='songRequests'
                    className='mb-1 block text-sm font-medium text-gray-700'
                  >
                    Song Requests
                  </label>
                  <textarea
                    {...register('songRequests')}
                    rows={3}
                    className='focus:ring-primary relative w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-transparent focus:ring-2'
                    placeholder='What songs would you like to hear at the reception?'
                  />
                </div>

                {/* Room Booking Status */}
                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-700'>
                    Have you booked your room? *
                  </label>
                  <div className='flex gap-4'>
                    <label className='flex items-center'>
                      <input
                        {...register('bookedRoom')}
                        type='radio'
                        value='true'
                        onChange={() => setValue('bookedRoom', true)}
                        className='relative mr-2 bg-white'
                      />
                      <span>Yes, I've booked</span>
                    </label>
                    <label className='flex items-center'>
                      <input
                        {...register('bookedRoom')}
                        type='radio'
                        value='false'
                        onChange={() => setValue('bookedRoom', false)}
                        className='relative mr-2 bg-white'
                      />
                      <span>Not yet</span>
                    </label>
                  </div>
                </div>
              </>
            )}

            {/* Turnstile Widget */}
            <div className='my-6 flex justify-center'>
              <Turnstile
                siteKey={
                  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                  '1x00000000000000000000AA'
                }
                options={{
                  theme: 'light',
                  size: 'normal',
                }}
                onSuccess={(token) => {
                  if (process.env.NODE_ENV === 'development') {
                    console.log('[DEV] Turnstile token generated:', token.substring(0, 20) + '...')
                  }
                }}
                onError={(error) => {
                  console.error('[DEV] Turnstile error:', error)
                  setStatusMessage('Security verification failed. Please refresh and try again.')
                  setSubmitStatus('error')
                }}
                onExpire={() => {
                  if (process.env.NODE_ENV === 'development') {
                    console.log('[DEV] Turnstile token expired')
                  }
                }}
              />
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className='rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700'>
                {statusMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className='flex justify-center pt-4'>
              <ShadowButton
                type='submit'
                disabled={isSubmitting}
                className='min-w-[200px]'
              >
                {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
              </ShadowButton>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

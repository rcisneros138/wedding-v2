'use client'

import React, { useEffect } from 'react'
import ShadowButton from './ShadowButton'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  bookingUrl: string
}

export default function BookingModal({ isOpen, onClose, bookingUrl }: BookingModalProps) {
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
        className="fixed inset-0 bg-black bg-opacity-50 z-[100] transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
        <div className="relative w-full max-w-lg">
          {/* Shadow layer */}
          <div className="absolute inset-0 bg-primary translate-x-[1.5%] translate-y-[4%] rounded-2xl" />
          
          {/* Modal content */}
          <div className="relative bg-white border-2 border-primary rounded-2xl p-8 max-h-[90vh] overflow-y-auto">
            {/* Diagonal line texture overlay */}
            <div
              className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none"
              style={{
                backgroundImage: `url('/images/figma-assets/diagonal-lines.png')`,
                backgroundSize: '7px 7px',
                backgroundRepeat: 'repeat',
              }}
            />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 text-primary hover:text-primary-dark transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <h2 className="font-pacifico text-primary text-3xl text-center mb-6">
                Important Booking Instructions
              </h2>
              
              {/* Warning message */}
              <div className="bg-[#FEA88A] bg-opacity-20 border-2 border-[#FEA88A] rounded-lg p-4 mb-6">
                <p className="text-primary text-center font-semibold">
                  ⚠️ Please follow these steps carefully to ensure you book the correct hotel with our group discount
                </p>
              </div>
              
              {/* Instructions */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-semibold mb-1">Select the CORRECT hotel:</p>
                    <p className="text-[#FEA88A] font-bold text-lg">EXCELLENCE RIVIERA CANCUN</p>
                    <p className="text-primary-dark text-sm italic">(NOT Excellence Playa Mujeres)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-semibold mb-1">Verify the promo code is applied:</p>
                    <div className="bg-surface inline-block px-3 py-1 rounded border-2 border-primary">
                      <code className="font-mono font-bold text-[#FEA88A] text-lg">CLWJAN26XRC</code>
                    </div>
                    <p className="text-primary-dark text-sm mt-1">This code gives you our special group rate!</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-semibold mb-1">Check your dates:</p>
                    <p className="text-primary">January 22-26, 2026</p>
                    <p className="text-primary-dark text-sm">Feel free to extend your stay!</p>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="text-center">
                <ShadowButton
                  text="Continue to Booking"
                  onClick={handleContinueBooking}
                  backgroundColor="var(--color-accent)"
                  className="inline-block"
                />
              </div>
              
              {/* Help text */}
              <p className="text-primary-dark text-sm text-center mt-4">
                The booking site will open in a new tab
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
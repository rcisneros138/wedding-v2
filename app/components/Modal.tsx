'use client'

import React from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-surface shadow-offset-primary border-primary border-2 relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="bg-surface shadow-offset-primary-sm hover:shadow-offset-primary border-primary border-2 absolute right-4 top-4 z-10 rounded-full p-2 transition-shadow"
          aria-label="Close modal"
        >
          <X className="text-primary h-6 w-6" />
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
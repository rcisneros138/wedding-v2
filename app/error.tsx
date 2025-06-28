'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
          Something went wrong!
        </h2>
        <button
          onClick={() => reset()}
          className="bg-[var(--color-purple)] text-[var(--color-primary)] px-6 py-2 rounded-full border-2 border-[var(--color-primary)] hover:bg-[var(--color-accent)] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
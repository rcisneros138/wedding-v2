export default function Loading() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[var(--color-purple)] border-t-[var(--color-primary)]"></div>
        <p className="mt-4 text-[var(--color-primary)] font-[var(--font-pacifico)]">Loading...</p>
      </div>
    </div>
  )
}
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import RSVPSection from './components/RSVPSection'

export default function Home() {
  return (
    <main className='bg-surface min-h-screen overflow-x-hidden'>
      <Navigation />
      <Hero />
      {/* TODO: Add Our Story section */}
      {/* TODO: Add Details section */}
      <RSVPSection />
      {/* TODO: Add Registry section */}
    </main>
  )
}

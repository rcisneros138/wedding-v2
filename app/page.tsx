import Navigation from './components/Navigation'
import Hero from './components/Hero'
import RSVPSection from './components/RSVPSection'
import Faq from './components/Faq'

export default function Home() {
  return (
    <main className='bg-surface min-h-screen overflow-x-hidden'>
      <Navigation />
      <Hero />
      {/* TODO: Add Our Story section */}
      {/* TODO: Add Details section */}
      <Faq />
      <RSVPSection />
      {/* TODO: Add Registry section */}
    </main>
  )
}

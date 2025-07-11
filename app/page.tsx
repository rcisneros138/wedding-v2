import Navigation from './components/Navigation'
import Hero from './components/Hero'
import RSVPSection from './components/RSVPSection'
import Faq from './components/Faq'
import ResortInfo from './components/ResortInfo'

export default function Home() {
  return (
    <main className='bg-surface min-h-screen overflow-x-hidden'>
      <Navigation />
      <Hero />
      {/* TODO: Add Our Story section */}
      <ResortInfo />
      <Faq />
      <RSVPSection />
      {/* TODO: Add Registry section */}
    </main>
  )
}

import Navigation from './components/Navigation'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className='bg-surface min-h-screen overflow-x-hidden'>
      <Navigation />
      <Hero />
    </main>
  )
}

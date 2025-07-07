import Hero from './components/Hero'

export default function Home() {
  return (
    <main className='bg-surface min-h-screen'>
      <Hero />
      {/*  section below hero */}
      <section className='relative mx-auto mt-[5px] flex min-h-[400px] w-[95%] flex-col items-center justify-start bg-[#8C3112]' style={{ boxShadow: '8px 0px 0px rgba(0, 0, 0, 1)' }}>
        {/* Grunge texture overlay */}
        <div
          className='absolute inset-0 opacity-20 mix-blend-multiply'
          style={{
            backgroundImage: 'url(/images/figma-assets/grunge.png)',
            backgroundSize: '342px 342px',
            backgroundRepeat: 'repeat',
          }}
        />
        {/* Content for this section will go here */}
      </section>
    </main>
  )
}

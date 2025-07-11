'use client'

import React, { useState } from 'react'
import Modal from './Modal'
import ShadowButton from './ShadowButton'
import WavyLine from './WavyLine'

// Types
interface ResortHighlight {
  id: string
  title: string
  emoji: string
  stats: string
  preview: string
  details: React.ReactNode
}

// Detailed component for dining information
const DetailedDiningInfo = () => (
  <div className='p-8'>
    <h2 className='font-display text-primary mb-6 text-3xl'>
      10 World-Class Restaurants
    </h2>

    <div className='space-y-6'>
      <div className='bg-purple/20 rounded-lg p-4'>
        <p className='text-primary font-semibold'>
          ✨ No reservations needed at any restaurant!
        </p>
      </div>

      <div>
        <h3 className='font-display text-primary mb-4 text-xl'>
          Specialty Restaurants
        </h3>
        <div className='grid gap-4'>
          <div className='border-primary/30 border-l-4 pl-4'>
            <h4 className='text-primary font-semibold'>Agave 🇲🇽</h4>
            <p className='text-primary/70'>
              Mexican cuisine in hacienda-style courtyard with live mariachi
              band
            </p>
          </div>
          <div className='border-accent/50 border-l-4 pl-4'>
            <h4 className='text-primary font-semibold'>Basmati 🥘</h4>
            <p className='text-primary/70'>
              Contemporary Indian cuisine with bold flavors and modern twists
            </p>
          </div>
          <div className='border-purple/50 border-l-4 pl-4'>
            <h4 className='text-primary font-semibold'>Chez Isabelle 🇫🇷</h4>
            <p className='text-primary/70'>
              French fine dining - the signature restaurant (long pants required
              for men)
            </p>
          </div>
          <div className='border-primary/30 border-l-4 pl-4'>
            <h4 className='text-primary font-semibold'>Oregano 🍕</h4>
            <p className='text-primary/70'>
              Italian pizzeria & trattoria with fresh-baked calzones and
              house-made sweets
            </p>
          </div>
          <div className='border-accent/50 border-l-4 pl-4'>
            <h4 className='text-primary font-semibold'>Spice 🍱</h4>
            <p className='text-primary/70'>
              Asian fusion with Teppanyaki tables, sushi bar, and dishes from
              Japan, China, Vietnam & Thailand
            </p>
          </div>
          <div className='border-primary-dark/50 border-l-4 pl-4'>
            <h4 className='text-primary font-semibold'>The Grill 🥩</h4>
            <p className='text-primary/70'>
              Premium steakhouse with prime cuts grilled to perfection
            </p>
          </div>
          <div className='border-accent/50 border-l-4 pl-4'>
            <h4 className='text-primary font-semibold'>Flavor Market 🍷</h4>
            <p className='text-primary/70'>
              Spanish tapas with extensive wine pairings and house-cured meats
            </p>
          </div>
          <div className='border-purple/50 border-l-4 pl-4'>
            <h4 className='text-primary font-semibold'>The Lobster House 🦞</h4>
            <p className='text-primary/70'>
              Fresh seafood with panoramic ocean views in al fresco setting
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className='font-display text-primary mb-3 text-xl'>
          Casual Dining
        </h3>
        <div className='space-y-3'>
          <div className='flex items-start space-x-3'>
            <span className='text-2xl'>🏖️</span>
            <div>
              <h4 className='text-primary font-semibold'>Las Olas</h4>
              <p className='text-primary/70 text-sm'>
                Beach grill with gas oven pizzas, salads & quick fare right on
                the sand
              </p>
            </div>
          </div>
          <div className='flex items-start space-x-3'>
            <span className='text-2xl'>🍽️</span>
            <div>
              <h4 className='text-primary font-semibold'>The Kitchen Table</h4>
              <p className='text-primary/70 text-sm'>
                International buffet for breakfast & lunch - "most expansive
                array of delicious food"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-accent/20 rounded-lg p-4'>
        <h4 className='text-primary mb-2 font-semibold'>🍴 Guest Favorites:</h4>
        <ul className='text-primary/80 space-y-1 text-sm'>
          <li>
            • "Flavors was the most underrated restaurant...food was
            OUTSTANDING"
          </li>
          <li>
            • "Dinner at The Grill with our server Maria was delicious.
            Excellent ribeye"
          </li>
          <li>
            • "Try the crab cakes and the grilled octopus" - The Lobster House
          </li>
          <li>• 24-hour room service included (order anything, anytime!)</li>
        </ul>
      </div>
    </div>
  </div>
)

// Detailed component for bars
const DetailedBarsInfo = () => (
  <div className='p-8'>
    <h2 className='font-display text-primary mb-6 text-3xl'>
      12 Bars & Lounges
    </h2>

    <div className='space-y-6'>
      <div className='bg-purple/20 rounded-lg p-4'>
        <p className='text-primary font-semibold'>
          🍹 All premium drinks included - no limits!
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <h3 className='font-display text-primary mb-3 text-lg'>
            Specialty Bars
          </h3>
          <div className='space-y-3 text-sm'>
            <div className='border-primary/20 border-l-2 pl-3'>
              <p className='text-primary font-semibold'>Martini Bar 🍸</p>
              <p className='text-primary/70'>Main lobby | 9am-11pm</p>
            </div>
            <div className='border-primary/20 border-l-2 pl-3'>
              <p className='text-primary font-semibold'>Aroma ☕</p>
              <p className='text-primary/70'>
                Artisanal coffee & baked goods | 7am-10pm
              </p>
            </div>
            <div className='border-primary/20 border-l-2 pl-3'>
              <p className='text-primary font-semibold'>Cocoa 🍫</p>
              <p className='text-primary/70'>Chocolate innovations & treats</p>
            </div>
            <div className='border-primary/20 border-l-2 pl-3'>
              <p className='text-primary font-semibold'>Revive 🥤</p>
              <p className='text-primary/70'>
                Smoothies & fresh juices | 8am-5pm
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className='font-display text-primary mb-3 text-lg'>
            Social Bars
          </h3>
          <div className='space-y-3 text-sm'>
            <div className='border-primary/20 border-l-2 pl-3'>
              <p className='text-primary font-semibold'>X-Lounge 🎸</p>
              <p className='text-primary/70'>
                Beach bar with live music | 3pm-11pm
              </p>
            </div>
            <div className='border-primary/20 border-l-2 pl-3'>
              <p className='text-primary font-semibold'>Blue 🏊</p>
              <p className='text-primary/70'>
                Main pool swim-up bar | 10am-6pm
              </p>
            </div>
            <div className='border-primary/20 border-l-2 pl-3'>
              <p className='text-primary font-semibold'>Sports Bar 🏈</p>
              <p className='text-primary/70'>Late-night gathering spot</p>
            </div>
            <div className='border-primary/20 border-l-2 pl-3'>
              <p className='text-primary font-semibold'>Stars Bar 🎭</p>
              <p className='text-primary/70'>
                Theater bar for shows | 6pm-11pm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-6'>
        <h3 className='font-display text-primary mb-3 text-lg'>
          Pool & Beach Bars
        </h3>
        <ul className='text-primary/70 space-y-2'>
          <li>
            • <strong>Sol Bar:</strong> By main pool with pizzas & salads
            (9am-5pm)
          </li>
          <li>
            • <strong>Prelude:</strong> Crafted cocktails lounge (3pm-11pm)
          </li>
        </ul>
      </div>
    </div>
  </div>
)

// Detailed component for activities
const DetailedActivitiesInfo = () => (
  <div className='p-8'>
    <h2 className='font-display text-primary mb-6 text-3xl'>
      Activities & Entertainment
    </h2>

    <div className='space-y-6'>
      <div>
        <h3 className='font-display text-primary mb-3 text-xl'>
          Daily Activities
        </h3>
        <div className='grid gap-6 md:grid-cols-2'>
          <div>
            <h4 className='text-primary mb-2 font-semibold'>
              Classes & Lessons
            </h4>
            <ul className='text-primary/70 space-y-1 text-sm'>
              <li>• Morning yoga overlooking ocean</li>
              <li>• Spanish lessons</li>
              <li>• Dance lessons</li>
              <li>• Cooking classes (including sushi-making)</li>
              <li>• Tennis clinics with Luis</li>
              <li>• Water aerobics</li>
            </ul>
          </div>
          <div>
            <h4 className='text-primary mb-2 font-semibold'>Sports & Games</h4>
            <ul className='text-primary/70 space-y-1 text-sm'>
              <li>• Ping pong tournaments</li>
              <li>• Beach volleyball</li>
              <li>• Pickleball</li>
              <li>• Basketball</li>
              <li>• Archery</li>
              <li>• Air rifle shooting</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className='font-display text-primary mb-3 text-xl'>
          Water Sports Included
        </h3>
        <div className='bg-accent/20 rounded-lg p-4'>
          <p className='text-primary mb-2 font-semibold'>
            🏄 All non-motorized water sports are FREE:
          </p>
          <ul className='text-primary/80 grid grid-cols-2 gap-2'>
            <li>• Kayaking</li>
            <li>• Snorkeling gear</li>
            <li>• Sailing</li>
            <li>• Stand-up paddleboarding</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className='font-display text-primary mb-3 text-xl'>
          Evening Entertainment
        </h3>
        <div className='bg-purple/20 rounded-lg p-4'>
          <p className='text-primary mb-3 font-semibold'>
            🎭 Nightly shows in outdoor theater:
          </p>
          <div className='text-primary/80 space-y-2'>
            <p>
              • Rock tribute shows (U2, Queen, etc.) - "Do NOT miss the Rock
              Show!"
            </p>
            <p>• Circus performances & African acrobat shows</p>
            <p>• Fire shows & Silent disco nights</p>
            <p>• Live mariachi band in central plaza</p>
            <p>• Claudia Trevino performances (vocalist)</p>
            <p>• Live guitar at X-Lounge beach bar</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className='font-display text-primary mb-3 text-xl'>
          Special Activities
        </h3>
        <ul className='text-primary/70 space-y-2'>
          <li>✓ Fat bikes guided tours</li>
          <li>✓ Karaoke sessions</li>
          <li>✓ Handcrafts & workshops</li>
          <li>✓ Billiards, table tennis, darts</li>
          <li>✓ Board games</li>
        </ul>
      </div>
    </div>
  </div>
)

// Detailed component for pools & beach
const DetailedPoolsBeachInfo = () => (
  <div className='p-8'>
    <h2 className='font-display text-primary mb-6 text-3xl'>
      6 Pools & Pristine Beach
    </h2>

    <div className='space-y-6'>
      <div>
        <h3 className='font-display text-primary mb-3 text-xl'>
          Pool Paradise
        </h3>
        <div className='space-y-3'>
          <div className='flex items-start space-x-3'>
            <span className='text-2xl'>🏊</span>
            <div>
              <h4 className='text-primary font-semibold'>Main Activity Pool</h4>
              <p className='text-primary/70 text-sm'>
                Swim-up bar, daily activities, social atmosphere
              </p>
            </div>
          </div>
          <div className='flex items-start space-x-3'>
            <span className='text-2xl'>🌊</span>
            <div>
              <h4 className='text-primary font-semibold'>Lazy River</h4>
              <p className='text-primary/70 text-sm'>
                Float with your drinks! (closes at 4:45pm)
              </p>
            </div>
          </div>
          <div className='flex items-start space-x-3'>
            <span className='text-2xl'>🤫</span>
            <div>
              <h4 className='text-primary font-semibold'>
                2 Quiet Meandering Pools
              </h4>
              <p className='text-primary/70 text-sm'>
                Perfect for peaceful relaxation
              </p>
            </div>
          </div>
          <div className='flex items-start space-x-3'>
            <span className='text-2xl'>♿</span>
            <div>
              <h4 className='text-primary font-semibold'>
                Handicap Accessible Pool
              </h4>
              <p className='text-primary/70 text-sm'>
                Fully accessible for all guests
              </p>
            </div>
          </div>
          <div className='flex items-start space-x-3'>
            <span className='text-2xl'>🔥</span>
            <div>
              <h4 className='text-primary font-semibold'>
                1 Heated Pool + 3 Whirlpools
              </h4>
              <p className='text-primary/70 text-sm'>
                Warm relaxation any time of day
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-accent/20 rounded-lg p-4'>
        <p className='text-primary'>
          "The pools were very clean...people seemed to naturally funnel
          themselves into three 'vibes'" - Guest Review
        </p>
      </div>

      <div>
        <h3 className='font-display text-primary mb-3 text-xl'>
          Beach Paradise
        </h3>
        <div className='space-y-3'>
          <p className='text-primary/70'>
            Pristine white sand beach with calm, clear waters perfect for
            swimming and water sports.
          </p>

          <div className='bg-primary/10 rounded-lg p-4'>
            <h4 className='text-primary mb-2 font-semibold'>
              🏖️ Beach Amenities:
            </h4>
            <ul className='text-primary/80 space-y-1 text-sm'>
              <li>• Plenty of loungers and palapas (no need to reserve!)</li>
              <li>• Beach bar service</li>
              <li>• Free kayaks, paddleboards & snorkel gear</li>
              <li>• Beach volleyball & soccer</li>
              <li>• Perfect for morning walks or sunset strolls</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Detailed component for spa
const DetailedSpaInfo = () => (
  <div className='p-8'>
    <h2 className='font-display text-primary mb-6 text-3xl'>
      Miilé Spa - Your Relaxation Sanctuary
    </h2>

    <div className='space-y-6'>
      <div className='bg-purple/20 rounded-lg p-4'>
        <p className='text-primary mb-2 font-semibold'>
          💜 Wedding Guest Special:
        </p>
        <p className='text-primary/80'>
          Mention you're with our wedding party for special consideration!
        </p>
      </div>

      <div>
        <h3 className='font-display text-primary mb-3 text-xl'>
          Complimentary Services
        </h3>
        <div className='bg-accent/20 rounded-lg p-4'>
          <p className='text-primary mb-2 font-semibold'>
            ✨ Included with any spa treatment:
          </p>
          <ul className='text-primary/80 space-y-2'>
            <li>• 45-minute guided hydrotherapy circuit journey</li>
            <li>• Pre-treatment scalp massage</li>
            <li>• Post-treatment tea service</li>
            <li>• Steam rooms and ice-cold plunge pools access</li>
            <li>• 2 additional whirlpools in spa area</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className='font-display text-primary mb-3 text-xl'>
          Popular Treatments (Extra Cost)
        </h3>
        <div className='space-y-3'>
          <div className='border-primary/20 border-b pb-3'>
            <div className='flex items-start justify-between'>
              <div>
                <h4 className='text-primary font-semibold'>
                  Couples Massage Ritual
                </h4>
                <p className='text-primary/70 text-sm'>
                  130-minute journey to bliss
                </p>
              </div>
              <span className='text-primary/60'>~$555/couple</span>
            </div>
          </div>
          <div className='border-primary/20 border-b pb-3'>
            <div className='flex items-start justify-between'>
              <div>
                <h4 className='text-primary font-semibold'>
                  Individual Treatments
                </h4>
                <p className='text-primary/70 text-sm'>
                  Facials, body wraps, scrubs
                </p>
              </div>
              <span className='text-primary/60'>Varies</span>
            </div>
          </div>
          <div className='border-primary/20 border-b pb-3'>
            <div className='flex items-start justify-between'>
              <div>
                <h4 className='text-primary font-semibold'>
                  Beauty Salon Services
                </h4>
                <p className='text-primary/70 text-sm'>Hair, nails, makeup</p>
              </div>
              <span className='text-primary/60'>Varies</span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-accent/20 rounded-lg p-4'>
        <p className='text-primary text-sm italic'>
          "45-minute treatment...guided through shower, steam, scrub...warm
          pool...cold plunge, sauna, and scalp massage" - Guest Experience
        </p>
      </div>
    </div>
  </div>
)

// Detailed component for room amenities
const DetailedRoomsInfo = () => (
  <div className='p-8'>
    <h2 className='font-display text-primary mb-6 text-3xl'>
      All-Suite Luxury Accommodations
    </h2>

    <div className='space-y-6'>
      <div className='bg-accent/20 rounded-lg p-4'>
        <p className='text-primary font-semibold'>
          🛁 Every single suite includes an indoor jacuzzi tub!
        </p>
      </div>

      <div>
        <h3 className='font-display text-primary mb-3 text-xl'>
          Standard in All Suites
        </h3>
        <div className='grid gap-6 md:grid-cols-2'>
          <div>
            <h4 className='text-primary mb-2 font-semibold'>Room Features</h4>
            <ul className='text-primary/70 space-y-1 text-sm'>
              <li>• Indoor jacuzzi tub</li>
              <li>• Private terrace or balcony</li>
              <li>• Four-poster bed</li>
              <li>• Premium bedding with pillow menu</li>
              <li>• Separate shower and water closet</li>
              <li>• Double vanities</li>
            </ul>
          </div>
          <div>
            <h4 className='text-primary mb-2 font-semibold'>Amenities</h4>
            <ul className='text-primary/70 space-y-1 text-sm'>
              <li>• Fully stocked minibar (replenished daily)</li>
              <li>• Premium liquor included</li>
              <li>• Beer, sodas, juices, water</li>
              <li>• Snacks</li>
              <li>• 24-hour room service (all included!)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='bg-purple/20 rounded-lg p-4'>
        <h4 className='text-primary mb-2 font-semibold'>
          🍾 Minibar Highlights:
        </h4>
        <p className='text-primary/80 text-sm'>
          Full-size bottles of premium spirits, wine, beer, and all your
          favorite mixers - restocked daily at no charge!
        </p>
      </div>

      <div className='bg-accent/20 rounded-lg p-4'>
        <h4 className='text-primary mb-2 font-semibold'>
          💡 Room Service Tip:
        </h4>
        <p className='text-primary/80 text-sm'>
          Order anything from any restaurant menu, 24/7! Perfect for breakfast
          in bed or late-night cravings - it's all included!
        </p>
      </div>
    </div>
  </div>
)

// Main ResortHighlights Component
const ResortHighlights = () => {
  const [selectedCard, setSelectedCard] = useState<ResortHighlight | null>(null)

  const highlights: ResortHighlight[] = [
    {
      id: 'dining',
      title: 'World-Class Dining',
      emoji: '🍽️',
      stats: '10 Restaurants',
      preview:
        'French, Mexican, Italian, Asian & more - no reservations needed!',
      details: <DetailedDiningInfo />,
    },
    {
      id: 'bars',
      title: 'Bars & Lounges',
      emoji: '🍹',
      stats: '12 Bars',
      preview: 'From coffee to cocktails, swim-up to chocolate bar',
      details: <DetailedBarsInfo />,
    },
    {
      id: 'activities',
      title: 'Activities & Entertainment',
      emoji: '🎭',
      stats: 'All Day & Night',
      preview: 'Water sports, daily activities, nightly shows',
      details: <DetailedActivitiesInfo />,
    },
    {
      id: 'pools',
      title: 'Pools & Beach',
      emoji: '🏖️',
      stats: '6 Pools + Beach',
      preview: 'Including lazy river, whirlpools & pristine beach',
      details: <DetailedPoolsBeachInfo />,
    },
    {
      id: 'spa',
      title: 'Miilé Spa',
      emoji: '💆',
      stats: 'World-Class',
      preview: 'Hydrotherapy circuit & premium treatments',
      details: <DetailedSpaInfo />,
    },
    {
      id: 'suites',
      title: 'Luxury Suites',
      emoji: '🛏️',
      stats: 'All Suites',
      preview: 'Every room has indoor jacuzzi & premium amenities',
      details: <DetailedRoomsInfo />,
    },
  ]

  return (
    <>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {highlights.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className='bg-surface shadow-offset-black hover:shadow-offset-black-sm cursor-pointer rounded-2xl p-6 transition-shadow'
          >
            <div className='mb-3 text-4xl'>{card.emoji}</div>
            <h3 className='font-display text-primary mb-1 text-xl'>
              {card.title}
            </h3>
            <p className='text-accent mb-2 font-semibold'>{card.stats}</p>
            <p className='text-primary/70 text-sm'>{card.preview}</p>
            <button className='text-accent hover:text-accent/80 mt-3 text-sm font-medium transition-colors'>
              Learn more →
            </button>
          </div>
        ))}
      </div>

      {selectedCard && (
        <Modal onClose={() => setSelectedCard(null)}>
          <div className='max-h-[80vh] overflow-y-auto'>
            {selectedCard.details}
          </div>
        </Modal>
      )}
    </>
  )
}

// ResortQuickFacts Component
const ResortQuickFacts = () => {
  const quickFacts = [
    { icon: '🍴', fact: '10 restaurants (no reservations needed!)' },
    { icon: '🍹', fact: '12 bars - all premium drinks included' },
    { icon: '🏊', fact: '6 pools including lazy river' },
    { icon: '🛁', fact: 'In-room jacuzzi in every suite' },
    { icon: '🎭', fact: 'Nightly entertainment & shows' },
    { icon: '💆', fact: 'World-class spa with hydrotherapy' },
    { icon: '🏖️', fact: 'Pristine beach with calm waters' },
    { icon: '🚣', fact: 'Free kayaks, paddleboards & snorkeling' },
    { icon: '🎾', fact: 'Tennis, pickleball, volleyball & more' },
    { icon: '🍾', fact: '24-hour room service included' },
  ]

  return (
    <div className='bg-primary-textured shadow-offset-black rounded-2xl p-6'>
      <h3 className='font-display text-accent mb-4 text-2xl'>
        Excellence Riviera Cancun Quick Facts
      </h3>
      <div className='mb-6 grid grid-cols-1 gap-3 md:grid-cols-2'>
        {quickFacts.map((fact, i) => (
          <div key={i} className='flex items-center space-x-3'>
            <span className='text-2xl'>{fact.icon}</span>
            <p className='text-white/90'>{fact.fact}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-wrap gap-3'>
        <ShadowButton
          text='Download Resort Guide (PDF)'
          backgroundColor='var(--color-purple)'
        />
        <a
          href='https://www.excellenceresorts.com/riviera-maya-cancun/excellence-riviera-cancun/'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-block'
        >
          <ShadowButton
            text='Visit Resort Website'
            backgroundColor='var(--color-surface)'
            textColor='text-primary'
          />
        </a>
      </div>
    </div>
  )
}

// Main ResortInfo Component
export default function ResortInfo() {
  return (
    <section id='resort' className='bg-surface relative w-full py-16'>
      <div className='relative mx-auto w-[95%]'>
        <div className='mx-auto max-w-[1600px] space-y-8'>
          {/* Header */}
          <div className='mb-12 text-center'>
            <h2 className='font-pacifico text-primary mb-4 text-4xl sm:text-5xl md:text-6xl'>
              Excellence Riviera Cancun
            </h2>
            <div className='mb-6 flex justify-center'>
              <WavyLine color='var(--color-accent)' className='w-48' />
            </div>
            <p className='font-display text-primary/80 text-lg'>
              Your all-inclusive paradise for our wedding celebration
            </p>
          </div>

          {/* Quick Facts Section */}
          <ResortQuickFacts />

          {/* Highlights Grid Section */}
          <div>
            <h2 className='font-display text-primary mb-6 text-2xl'>
              Explore Resort Highlights
            </h2>
            <ResortHighlights />
          </div>

          {/* What's Extra Section */}
          <div className='bg-surface shadow-offset-black rounded-2xl p-6'>
            <h2 className='font-display text-primary mb-4 text-2xl'>
              What Costs Extra?
            </h2>
            <p className='text-primary/70 mb-4'>
              Almost everything is included! Here are the few exceptions:
            </p>
            <div className='grid gap-4 md:grid-cols-2'>
              <ul className='text-primary/70 space-y-2'>
                <li>• Spa treatments (beyond complimentary hydrotherapy)</li>
                <li>• Golf at adjacent course</li>
                <li>• Motorized water sports</li>
                <li>• Deep sea fishing</li>
              </ul>
              <ul className='text-primary/70 space-y-2'>
                <li>• Scuba diving (beyond intro lesson)</li>
                <li>• Premium wines at restaurants</li>
                <li>• Off-site excursions</li>
                <li>• Gift shop purchases</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

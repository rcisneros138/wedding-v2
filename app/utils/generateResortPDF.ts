import { jsPDF } from 'jspdf'

interface ResortData {
  quickFacts: Array<{ icon: string; fact: string }>
  dining: {
    specialty: Array<{ name: string; cuisine: string; description: string }>
    casual: Array<{ name: string; description: string }>
  }
  bars: {
    specialty: Array<{ name: string; type: string; hours?: string }>
    social: Array<{ name: string; type: string; hours?: string }>
    poolBeach: Array<{ name: string; description: string }>
  }
  activities: {
    classes: string[]
    sports: string[]
    waterSports: string[]
    evening: string[]
    special: string[]
  }
  pools: Array<{ name: string; description: string }>
  spa: {
    included: string[]
    treatments: Array<{ name: string; price?: string }>
  }
  suites: {
    features: string[]
    amenities: string[]
  }
  extraCosts: string[]
}

export const generateResortPDF = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  // Color definitions matching the wedding theme
  const primaryColor = '#8C3112'
  const accentColor = '#FEA88A'
  const textColor = '#333333'
  const lightGray = '#666666'

  // Page margins
  const leftMargin = 20
  const rightMargin = 20
  const pageWidth = doc.internal.pageSize.getWidth()
  const contentWidth = pageWidth - leftMargin - rightMargin
  let yPosition = 20

  // Helper function to add a new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    const pageHeight = doc.internal.pageSize.getHeight()
    if (yPosition + requiredSpace > pageHeight - 20) {
      doc.addPage()
      yPosition = 20
      return true
    }
    return false
  }

  // Helper function to draw colored header
  const drawHeader = (text: string, fontSize: number = 20) => {
    doc.setTextColor(primaryColor)
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', 'bold')
    doc.text(text, leftMargin, yPosition)
    yPosition += fontSize * 0.4
  }

  // Helper function to draw subheader
  const drawSubheader = (text: string) => {
    checkPageBreak(15)
    doc.setTextColor(primaryColor)
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text(text, leftMargin, yPosition)
    yPosition += 8
  }

  // Helper function to draw regular text
  const drawText = (text: string, indent: number = 0) => {
    doc.setTextColor(textColor)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    const lines = doc.splitTextToSize(text, contentWidth - indent)
    lines.forEach((line: string) => {
      checkPageBreak(6)
      doc.text(line, leftMargin + indent, yPosition)
      yPosition += 5
    })
  }

  // Title page
  drawHeader('Excellence Riviera Cancun', 24)
  yPosition += 5
  
  doc.setTextColor(accentColor)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'normal')
  doc.text('Resort Guide', leftMargin, yPosition)
  yPosition += 10

  doc.setTextColor(lightGray)
  doc.setFontSize(12)
  doc.text('Ashlyn & Royal\'s Wedding', leftMargin, yPosition)
  yPosition += 6
  doc.text('January 24, 2026', leftMargin, yPosition)
  yPosition += 15

  // Quick Facts Section
  drawHeader('Quick Facts')
  yPosition += 5

  const quickFacts = [
    '• 10 restaurants (no reservations needed!)',
    '• 12 bars - all premium drinks included',
    '• 6 pools including lazy river',
    '• In-room jacuzzi in every suite',
    '• Nightly entertainment & shows',
    '• World-class spa with hydrotherapy',
    '• Pristine beach with calm waters',
    '• Free kayaks, paddleboards & snorkeling',
    '• Tennis, pickleball, volleyball & more',
    '• 24-hour room service included',
  ]

  quickFacts.forEach(fact => {
    checkPageBreak(6)
    drawText(fact)
  })
  yPosition += 10

  // Dining Section
  drawHeader('World-Class Dining')
  yPosition += 5
  
  drawText('No reservations needed at any restaurant! All meals and snacks included.')
  yPosition += 5

  drawSubheader('Specialty Restaurants')
  yPosition += 3

  const restaurants = [
    { name: 'Agave', desc: 'Mexican cuisine in hacienda-style courtyard with live mariachi' },
    { name: 'Basmati', desc: 'Contemporary Indian cuisine with bold flavors' },
    { name: 'Chez Isabelle', desc: 'French fine dining - signature restaurant' },
    { name: 'Oregano', desc: 'Italian pizzeria & trattoria' },
    { name: 'Spice', desc: 'Asian fusion with Teppanyaki tables and sushi bar' },
    { name: 'The Grill', desc: 'Premium steakhouse' },
    { name: 'Flavor Market', desc: 'Spanish tapas with wine pairings' },
    { name: 'The Lobster House', desc: 'Fresh seafood with ocean views' },
  ]

  restaurants.forEach(rest => {
    checkPageBreak(10)
    doc.setFont('helvetica', 'bold')
    drawText(`${rest.name}:`, 5)
    doc.setFont('helvetica', 'normal')
    drawText(rest.desc, 5)
    yPosition += 2
  })

  drawSubheader('Casual Dining')
  drawText('• Las Olas - Beach grill with pizzas and quick fare', 5)
  drawText('• The Kitchen Table - International buffet for breakfast & lunch', 5)
  yPosition += 10

  // Bars Section
  checkPageBreak(40)
  drawHeader('12 Bars & Lounges')
  yPosition += 5
  drawText('All premium drinks included - no limits!')
  yPosition += 5

  const bars = [
    'Martini Bar (Main lobby, 9am-11pm)',
    'Aroma (Coffee & baked goods, 7am-10pm)',
    'Cocoa (Chocolate innovations)',
    'Revive (Smoothies & juices, 8am-5pm)',
    'X-Lounge (Beach bar with live music, 3pm-11pm)',
    'Blue (Main pool swim-up bar, 10am-6pm)',
    'Sports Bar',
    'Stars Bar (Theater bar, 6pm-11pm)',
    'Sol Bar (By pool with food, 9am-5pm)',
    'Prelude (Crafted cocktails, 3pm-11pm)',
  ]

  bars.forEach(bar => {
    checkPageBreak(6)
    drawText(`• ${bar}`, 5)
  })
  yPosition += 10

  // Activities Section
  checkPageBreak(60)
  drawHeader('Activities & Entertainment')
  yPosition += 5

  drawSubheader('Daily Activities')
  const activities = [
    'Morning yoga overlooking ocean',
    'Spanish lessons',
    'Dance lessons',
    'Cooking classes',
    'Tennis clinics',
    'Water aerobics',
    'Ping pong, volleyball, basketball',
    'Archery & air rifle shooting',
  ]
  
  activities.forEach(activity => {
    drawText(`• ${activity}`, 5)
  })
  yPosition += 5

  drawSubheader('Water Sports (All FREE)')
  drawText('• Kayaking • Snorkeling • Sailing • Stand-up paddleboarding', 5)
  yPosition += 5

  drawSubheader('Evening Entertainment')
  drawText('• Rock tribute shows • Circus performances • Fire shows', 5)
  drawText('• Silent disco • Live mariachi • Guitar at beach bar', 5)
  yPosition += 10

  // Pools & Beach Section
  checkPageBreak(50)
  drawHeader('6 Pools & Pristine Beach')
  yPosition += 5

  drawSubheader('Pool Paradise')
  const pools = [
    'Main Activity Pool with swim-up bar',
    'Lazy River (float with drinks!)',
    '2 Quiet Meandering Pools',
    'Handicap Accessible Pool',
    '1 Heated Pool + 3 Whirlpools',
  ]
  
  pools.forEach(pool => {
    drawText(`• ${pool}`, 5)
  })
  yPosition += 5

  drawSubheader('Beach Paradise')
  drawText('Pristine white sand beach with calm waters. Plenty of loungers, beach bar service, and water sports equipment.', 5)
  yPosition += 10

  // Spa Section
  checkPageBreak(40)
  drawHeader('Miilé Spa')
  yPosition += 5
  drawText('Wedding guests - mention you\'re with our party for special consideration!')
  yPosition += 5

  drawSubheader('Included with Any Treatment:')
  drawText('• 45-minute hydrotherapy circuit', 5)
  drawText('• Pre-treatment scalp massage', 5)
  drawText('• Post-treatment tea service', 5)
  drawText('• Steam rooms and plunge pools', 5)
  yPosition += 5

  drawSubheader('Popular Treatments (Extra Cost):')
  drawText('• Couples Massage Ritual (~$555/couple)', 5)
  drawText('• Individual treatments, facials, body wraps', 5)
  drawText('• Beauty salon services', 5)
  yPosition += 10

  // Suites Section
  checkPageBreak(40)
  drawHeader('All-Suite Luxury')
  yPosition += 5
  drawText('Every single suite includes an indoor jacuzzi tub!')
  yPosition += 5

  drawSubheader('Suite Features:')
  const suiteFeatures = [
    'Indoor jacuzzi tub',
    'Private terrace or balcony',
    'Four-poster bed with premium bedding',
    'Separate shower and water closet',
    'Double vanities',
    'Fully stocked minibar (replenished daily)',
    'Premium liquor included',
    '24-hour room service',
  ]
  
  suiteFeatures.forEach(feature => {
    drawText(`• ${feature}`, 5)
  })
  yPosition += 10

  // What Costs Extra Section
  checkPageBreak(30)
  drawHeader('What Costs Extra?')
  yPosition += 5
  drawText('Almost everything is included! The few exceptions:')
  yPosition += 5

  const extraCosts = [
    'Spa treatments (beyond hydrotherapy)',
    'Golf at adjacent course',
    'Motorized water sports',
    'Deep sea fishing',
    'Scuba diving (beyond intro lesson)',
    'Premium wines at restaurants',
    'Off-site excursions',
    'Gift shop purchases',
  ]

  extraCosts.forEach(cost => {
    drawText(`• ${cost}`, 5)
  })
  yPosition += 15

  // Footer
  doc.setDrawColor(primaryColor)
  doc.setLineWidth(0.5)
  doc.line(leftMargin, yPosition, pageWidth - rightMargin, yPosition)
  yPosition += 5

  doc.setTextColor(lightGray)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'italic')
  doc.text('For more information and bookings:', leftMargin, yPosition)
  yPosition += 4
  doc.text('excellenceresorts.com/riviera-maya-cancun/excellence-riviera-cancun/', leftMargin, yPosition)

  // Save the PDF
  doc.save('Excellence-Riviera-Cancun-Resort-Guide.pdf')
}
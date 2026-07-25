import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { TrustBar } from '@/components/site/trust-bar'
import { Journeys } from '@/components/site/journeys'
import { Platform } from '@/components/site/platform'
import { CorporateWellness } from '@/components/site/corporate-wellness'
import { TrainingJourney } from '@/components/site/training-journey'
import { Showcase } from '@/components/site/showcase'
import { Team } from '@/components/site/team'
import { Inquiry } from '@/components/site/inquiry'
import { FloatingContacts } from '@/components/site/floating-contacts'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <FloatingContacts />
      <main>
        <Hero />
        <TrustBar />
        <Journeys />
        <Platform />
        <CorporateWellness />
        <TrainingJourney />
        <Showcase />
        <Team />
        <Inquiry />
      </main>
      <Footer />
    </>
  )
}

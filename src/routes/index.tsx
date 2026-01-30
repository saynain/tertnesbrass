import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import EventsSection from '../components/EventsSection'
import NewsSection from '../components/NewsSection'
import InstagramSection from '../components/InstagramSection'
import SponsorCTA from '../components/SponsorCTA'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <>
      <Hero />
      <EventsSection />
      <NewsSection />
      <InstagramSection />
      <SponsorCTA />
    </>
  )
}

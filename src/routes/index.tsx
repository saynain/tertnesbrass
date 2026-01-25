import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import EventsSection from '../components/EventsSection'
import NewsSection from '../components/NewsSection'
import GallerySection from '../components/GallerySection'
import SponsorCTA from '../components/SponsorCTA'

export const Route = createFileRoute('/')({
  loader: async () => {
    const {
      getEvents,
      getNews,
      getGalleryImages,
      getHeroConfig,
      getSponsorConfig
    } = await import('../lib/content.server')

    const [events, news, galleryImages, heroConfig, sponsorConfig] = await Promise.all([
      getEvents(),
      getNews(),
      getGalleryImages(),
      getHeroConfig(),
      getSponsorConfig()
    ])
    return { events, news, galleryImages, heroConfig, sponsorConfig }
  },
  staleTime: 0, // Disable caching in dev
  component: HomePage
})

function HomePage() {
  const { events, news, galleryImages, heroConfig, sponsorConfig } = Route.useLoaderData()

  return (
    <>
      <Hero config={heroConfig} />
      <EventsSection events={events} />
      <NewsSection news={news} />
      <GallerySection images={galleryImages} />
      <SponsorCTA config={sponsorConfig} />
    </>
  )
}

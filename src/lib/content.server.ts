import { readFile } from 'fs/promises'
import { join } from 'path'
import type {
  Event,
  NewsItem,
  GalleryImage,
  HeroConfig,
  SponsorConfig,
  SocialLink,
  ContactInfo
} from './content.types'

const DATA_DIR = join(process.cwd(), 'public', 'data')

async function readJSON<T>(filename: string): Promise<T | null> {
  try {
    const filePath = join(DATA_DIR, filename)

    // Always read fresh from disk (no caching in dev)
    const content = await readFile(filePath, 'utf-8')
    const data = JSON.parse(content)

    return data
  } catch (error) {
    console.error(`Error loading ${filename}:`, error)
    return null
  }
}

export async function getEvents(): Promise<Event[]> {
  const events = await readJSON<Event[]>('events.json')
  return events || []
}

export async function getNews(): Promise<NewsItem[]> {
  const news = await readJSON<NewsItem[]>('news.json')
  return news || []
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const images = await readJSON<GalleryImage[]>('gallery.json')
  return images || []
}

export async function getHeroConfig(): Promise<HeroConfig> {
  const config = await readJSON<HeroConfig>('hero.json')
  return config || {
    badge: '✨ Velkommen til oss',
    heading: 'Et varmt fellesskap for brass-entusiaster',
    description: 'Tertnes Brass er mer enn bare et korps...',
    stats: []
  }
}

export async function getSponsorConfig(): Promise<SponsorConfig> {
  const config = await readJSON<SponsorConfig>('sponsor.json')
  return config || {
    badge: '❤️ Støtt kulturlivet',
    heading: 'Bli en del av laget vårt',
    description: 'Som sponsor bidrar du...'
  }
}

export async function getSocialLinks(): Promise<SocialLink[]> {
  const links = await readJSON<SocialLink[]>('social.json')
  return links || []
}

export async function getContactInfo(): Promise<ContactInfo> {
  const info = await readJSON<ContactInfo>('contact.json')
  return info || {
    email: 'post@tertnesbrass.no',
    address: 'Tertnes Kulturhus, 5113 Tertnes, Bergen'
  }
}

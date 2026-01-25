import type {
  Event,
  NewsItem,
  GalleryImage,
  HeroConfig,
  SponsorConfig,
  SocialLink,
  ContactInfo
} from './content.types'

// Use dynamic import to avoid bundling Node.js modules for browser
async function readJSON<T>(filename: string): Promise<T | null> {
  try {
    // In development or SSR, read from filesystem
    if (typeof process !== 'undefined' && process.versions?.node) {
      const { readFile } = await import('fs/promises')
      const { join } = await import('path')
      const filePath = join(process.cwd(), 'public', 'data', filename)
      const content = await readFile(filePath, 'utf-8')
      return JSON.parse(content)
    }

    // Fallback (shouldn't reach here in SSR context)
    const response = await fetch(`/data/${filename}`)
    if (!response.ok) throw new Error(`Failed to fetch ${filename}`)
    return await response.json()
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

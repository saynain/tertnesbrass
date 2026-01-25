export interface Event {
  title: string
  date: string
  venue: string
  emoji: string
  link: string
  published: boolean
  description?: string
}

export interface NewsItem {
  title: string
  description: string
  tag: string
  emoji: string
  image?: string
  featured: boolean
  publishedAt: string
  content?: string
}

export interface GalleryImage {
  image: string
  alt: string
  span: string
}

export interface HeroConfig {
  badge: string
  heading: string
  description: string
  stats: Array<{ emoji: string; text: string }>
}

export interface SponsorConfig {
  badge: string
  heading: string
  description: string
}

export interface SocialLink {
  platform: string
  url: string
}

export interface ContactInfo {
  email: string
  address: string
  phone?: string
}

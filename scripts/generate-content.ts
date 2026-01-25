#!/usr/bin/env bun
import { readFile, readdir, writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import { parse } from 'yaml'

const CONTENT_DIR = 'content'
const OUTPUT_DIR = 'public/data'

interface Event {
  title: string
  date: string
  venue: string
  emoji: string
  link: string
  published: boolean
  description?: string
}

interface NewsItem {
  title: string
  description: string
  tag: string
  emoji: string
  image?: string
  featured: boolean
  publishedAt: string
  content?: string
}

async function generateEvents() {
  const eventsDir = join(CONTENT_DIR, 'events')
  const files = await readdir(eventsDir)
  const mdFiles = files.filter(f => f.endsWith('.md'))

  const events = await Promise.all(
    mdFiles.map(async (file) => {
      const content = await readFile(join(eventsDir, file), 'utf-8')
      const { data, content: body } = matter(content)
      return { ...data, description: body } as Event
    })
  )

  const published = events
    .filter(e => e.published)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  await writeFile(join(OUTPUT_DIR, 'events.json'), JSON.stringify(published, null, 2))
  console.log('✓ Generated events.json')
}

async function generateNews() {
  const newsDir = join(CONTENT_DIR, 'news')
  const files = await readdir(newsDir)
  const mdFiles = files.filter(f => f.endsWith('.md'))

  const news = await Promise.all(
    mdFiles.map(async (file) => {
      const content = await readFile(join(newsDir, file), 'utf-8')
      const { data, content: body } = matter(content)
      return { ...data, content: body } as NewsItem
    })
  )

  const sorted = news.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  await writeFile(join(OUTPUT_DIR, 'news.json'), JSON.stringify(sorted, null, 2))
  console.log('✓ Generated news.json')
}

async function generateGallery() {
  const filePath = join(CONTENT_DIR, 'gallery', 'images.yml')
  const content = await readFile(filePath, 'utf-8')
  const data = parse(content)
  await writeFile(join(OUTPUT_DIR, 'gallery.json'), JSON.stringify(data.images || [], null, 2))
  console.log('✓ Generated gallery.json')
}

async function generateConfig() {
  const heroPath = join(CONTENT_DIR, 'config', 'hero.yml')
  const heroContent = await readFile(heroPath, 'utf-8')
  const hero = parse(heroContent)
  await writeFile(join(OUTPUT_DIR, 'hero.json'), JSON.stringify(hero, null, 2))
  console.log('✓ Generated hero.json')

  const sponsorPath = join(CONTENT_DIR, 'config', 'sponsor.yml')
  const sponsorContent = await readFile(sponsorPath, 'utf-8')
  const sponsor = parse(sponsorContent)
  await writeFile(join(OUTPUT_DIR, 'sponsor.json'), JSON.stringify(sponsor, null, 2))
  console.log('✓ Generated sponsor.json')

  const socialPath = join(CONTENT_DIR, 'config', 'social.yml')
  const socialContent = await readFile(socialPath, 'utf-8')
  const social = parse(socialContent)
  await writeFile(join(OUTPUT_DIR, 'social.json'), JSON.stringify(social.links || [], null, 2))
  console.log('✓ Generated social.json')

  const contactPath = join(CONTENT_DIR, 'config', 'contact.yml')
  const contactContent = await readFile(contactPath, 'utf-8')
  const contact = parse(contactContent)
  await writeFile(join(OUTPUT_DIR, 'contact.json'), JSON.stringify(contact, null, 2))
  console.log('✓ Generated contact.json')
}

async function main() {
  try {
    await mkdir(OUTPUT_DIR, { recursive: true })
    console.log('Generating content JSON files...\n')

    await Promise.all([
      generateEvents(),
      generateNews(),
      generateGallery(),
      generateConfig()
    ])

    console.log('\n✓ All content generated successfully!')
  } catch (error) {
    console.error('\n❌ Content generation failed!')
    console.error(error)
    process.exit(1)
  }
}

main()

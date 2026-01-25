import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { ThemeProvider } from '../contexts/ThemeContext'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  loader: async () => {
    const { getSocialLinks, getContactInfo } = await import('../lib/content.server')

    const [socialLinks, contactInfo] = await Promise.all([
      getSocialLinks(),
      getContactInfo()
    ])
    return { socialLinks, contactInfo }
  },
  staleTime: 0, // Disable caching in dev
  notFoundComponent: () => {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>404 - Siden finnes ikke</h1>
        <p>Beklager, vi fant ikke siden du leter etter.</p>
        <a href="/" style={{ color: '#8B4513', textDecoration: 'underline' }}>
          Gå til forsiden
        </a>
      </div>
    )
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Tertnes Brass - Korps i Bergen',
      },
      {
        name: 'description',
        content: 'Tertnes Brass er et varmt og inkluderende brass band i Bergen. Siden 1977.',
      },
    ],
    links: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { socialLinks, contactInfo } = Route.useLoaderData()

  return (
    <html lang="no">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
          <Footer socialLinks={socialLinks} contactInfo={contactInfo} />
        </ThemeProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

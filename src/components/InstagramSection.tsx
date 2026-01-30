import { useState, useEffect } from 'react'
import { InstagramEmbed } from 'react-social-media-embed'
import './InstagramSection.css'

interface InstagramPost {
  url: string
  span: number
}

export default function InstagramSection() {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Curated Instagram posts from @tertnesbrass
  // TODO: Replace with actual Instagram post URLs
  const instagramPosts: InstagramPost[] = [
    { url: 'https://www.instagram.com/p/DCvJwAVNGlb/', span: 2 },
    { url: 'https://www.instagram.com/p/DCvJwAVNGlb/', span: 1 },
    { url: 'https://www.instagram.com/p/DCvJwAVNGlb/', span: 1 },
    { url: 'https://www.instagram.com/p/DCvJwAVNGlb/', span: 2 },
    { url: 'https://www.instagram.com/p/DCvJwAVNGlb/', span: 2 },
  ]

  // Set timeout for loading state
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false)
      }
    }, 5000) // 5 second timeout

    return () => clearTimeout(timeout)
  }, [isLoading])

  const handleEmbedLoad = () => {
    // Hide loading state once first embed loads
    setIsLoading(false)
  }

  const handleEmbedError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  if (hasError) {
    return (
      <section className="instagram-section">
        <div className="instagram-container">
          <div className="section-header">
            <div className="section-badge">📸 Instagram</div>
            <h2 className="section-title">Minner fra korpset</h2>
          </div>
          <div className="instagram-error">
            <p>Instagram-innhold kan ikke lastes akkurat nå.</p>
            <p>
              Besøk oss på{' '}
              <a
                href="https://instagram.com/tertnesbrass"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tertnesbrass
              </a>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="instagram-section">
      <div className="instagram-container">
        <div className="section-header">
          <div className="section-badge">📸 Instagram</div>
          <h2 className="section-title">Minner fra korpset</h2>
        </div>

        {isLoading && <SkeletonLoader />}

        <div
          className="instagram-grid"
          style={{ display: isLoading ? 'none' : 'grid' }}
        >
          {instagramPosts.map((post, index) => (
            <div
              key={`${post.url}-${index}`}
              className="instagram-item"
              style={{ gridColumn: `span ${post.span}` }}
            >
              <div className="instagram-embed-wrapper">
                <InstagramEmbed
                  url={post.url}
                  width="100%"
                  onLoad={handleEmbedLoad}
                  onError={handleEmbedError}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="instagram-footer">
          <a
            href="https://instagram.com/tertnesbrass"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-button"
          >
            Følg oss på Instagram →
          </a>
        </div>
      </div>
    </section>
  )
}

function SkeletonLoader() {
  return (
    <div className="instagram-skeleton">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="skeleton-item"
          style={{ gridColumn: i === 1 || i === 4 || i === 5 ? 'span 2' : 'span 1' }}
        />
      ))}
    </div>
  )
}

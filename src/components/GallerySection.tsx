import { Link } from '@tanstack/react-router'
import './GallerySection.css'
import type { GalleryImage } from '../lib/content.types'

interface GallerySectionProps {
  images: GalleryImage[]
}

export default function GallerySection({ images }: GallerySectionProps) {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="section-header">
          <div className="section-badge">📷 Bildealbum</div>
          <h2 className="section-title">Minner fra korpset</h2>
        </div>

        <div className="gallery-grid">
          {images.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              style={{ gridColumn: `span ${item.span}` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <Link to="/nyheter" className="view-all-button">
            Se alle bilder →
          </Link>
        </div>
      </div>
    </section>
  )
}

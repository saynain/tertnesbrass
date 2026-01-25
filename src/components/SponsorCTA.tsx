import { Link } from '@tanstack/react-router'
import './SponsorCTA.css'
import type { SponsorConfig } from '../lib/content.types'

interface SponsorCTAProps {
  config: SponsorConfig
}

export default function SponsorCTA({ config }: SponsorCTAProps) {
  return (
    <section className="sponsor-cta">
      <div className="sponsor-container">
        <div className="decorative-blob blob-1"></div>
        <div className="decorative-blob blob-2"></div>
        <div className="decorative-blob blob-3"></div>

        <div className="sponsor-content">
          <div className="sponsor-badge">{config.badge}</div>
          <h2 className="sponsor-heading">{config.heading}</h2>
          <p className="sponsor-description">
            {config.description}
          </p>
          <div className="sponsor-buttons">
            <Link to="/stott-oss" className="button-gold">
              Bli sponsor
            </Link>
            <Link to="/om-oss" className="button-outline">
              Les mer
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

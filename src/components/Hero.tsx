import { Link } from '@tanstack/react-router'
import './Hero.css'
import type { HeroConfig } from '../lib/content.types'

interface HeroProps {
  config: HeroConfig
}

export default function Hero({ config }: HeroProps) {
  const parseHeading = (text: string) => {
    return text.split(/(<burgundy>|<\/burgundy>|<gold>|<\/gold>)/).map((part, i) => {
      if (part === '<burgundy>' || part === '</burgundy>' || part === '<gold>' || part === '</gold>') {
        return null
      }

      const prevPart = text.split(/(<burgundy>|<\/burgundy>|<gold>|<\/gold>)/)[i - 1]
      if (prevPart === '<burgundy>') {
        return <span key={i} className="highlight-burgundy">{part}</span>
      }
      if (prevPart === '<gold>') {
        return <span key={i} className="highlight-gold">{part}</span>
      }
      return <span key={i}>{part}</span>
    }).filter(Boolean)
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-images">
          <div className="image-main">
            <img
              src="/images/logo-380.png"
              srcSet="/images/logo-760.png 2x"
              alt="Tertnes Brass - Bergen's premier brass band since 1977"
              width="380"
              height="380"
              className="hero-logo-image"
            />
          </div>
          <div className="image-blob">🎵</div>
          <div className="image-accent">🏆</div>
          <div className="decorative-dot dot-1"></div>
          <div className="decorative-dot dot-2"></div>
          <div className="decorative-dot dot-3"></div>
          <div className="decorative-dot dot-4"></div>
          <div className="decorative-dot dot-5"></div>

          <div className="stats-box">
            {config.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-emoji">{stat.emoji}</span>
                <span className="stat-text">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">{config.badge}</div>
          <h1 className="hero-heading">
            {parseHeading(config.heading)}
          </h1>
          <p className="hero-description">
            {config.description}
          </p>
          <div className="hero-buttons">
            <Link to="/om-oss" className="button-primary">
              Møt oss →
            </Link>
            <Link to="/program" className="button-secondary">
              Se program
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

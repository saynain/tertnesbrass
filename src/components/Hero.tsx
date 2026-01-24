import { Link } from '@tanstack/react-router'
import './Hero.css'

export default function Hero() {
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
            <div className="stat-item">
              <span className="stat-emoji">🎺</span>
              <span className="stat-text">35+ glade medlemmer</span>
            </div>
            <div className="stat-item">
              <span className="stat-emoji">🎵</span>
              <span className="stat-text">48 år med musikk</span>
            </div>
            <div className="stat-item">
              <span className="stat-emoji">❤️</span>
              <span className="stat-text">100% lidenskap</span>
            </div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">✨ Velkommen til oss</div>
          <h1 className="hero-heading">
            Et <span className="highlight-burgundy">varmt</span> fellesskap for{' '}
            <span className="highlight-gold">brass</span>-entusiaster
          </h1>
          <p className="hero-description">
            Tertnes Brass er mer enn bare et korps – vi er en familie som deler lidenskapen
            for brassmusikk. Siden 1977 har vi skapt magiske øyeblikk gjennom musikk, vennskap
            og fellesskap i Bergen.
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

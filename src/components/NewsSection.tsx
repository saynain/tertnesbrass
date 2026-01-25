import { Link } from '@tanstack/react-router'
import './NewsSection.css'
import type { NewsItem } from '../lib/content.types'

interface NewsSectionProps {
  news: NewsItem[]
}

export default function NewsSection({ news }: NewsSectionProps) {
  const featuredNews = news.find(n => n.featured)
  const regularNews = news.filter(n => !n.featured).slice(0, 3)

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="section-header">
          <div className="section-badge">📰 Siste nytt</div>
          <h2 className="section-title">Hva skjer hos oss?</h2>
        </div>

        <div className="news-grid">
          {featuredNews && (
            <div className="featured-news">
              <div className="featured-image">{featuredNews.emoji}</div>
              <div className="featured-content">
                <span className="news-tag">{featuredNews.tag}</span>
                <h3 className="featured-title">
                  {featuredNews.title}
                </h3>
                <p className="featured-description">
                  {featuredNews.description}
                </p>
                <Link to="/nyheter" className="read-more-link">
                  Les mer →
                </Link>
              </div>
            </div>
          )}

          <div className="small-news">
            {regularNews.map((item, index) => (
              <div key={index} className="news-item">
                <div className="news-icon">{item.emoji}</div>
                <div className="news-item-content">
                  <span className="news-tag">{item.tag}</span>
                  <h4 className="news-item-title">{item.title}</h4>
                  <p className="news-item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="news-footer">
          <Link to="/nyheter" className="view-all-link">
            Se alle nyheter →
          </Link>
        </div>
      </div>
    </section>
  )
}

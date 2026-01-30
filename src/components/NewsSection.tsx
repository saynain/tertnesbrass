import { Link } from '@tanstack/react-router'
import './NewsSection.css'

export default function NewsSection() {
  const smallNews = [
    {
      emoji: '🎵',
      tag: 'REPERTOAR',
      title: 'Nytt repertoar til våren',
      description: 'Vi gleder oss til å presentere et spennende repertoar til konserter denne våren.',
    },
    {
      emoji: '🏆',
      tag: 'KONKURRANSE',
      title: 'Vi deltar på NM Brass',
      description: 'Korpset konkurrerer i Elitedivisjonen i NM Brass, hvor vi har spilt siden 2018.',
    },
    {
      emoji: '🎊',
      tag: 'SOSIALT',
      title: 'Nyttårsbord under NM-oppkjøring',
      description: 'Vi arrangerte nyttårsbord under første seminar-helg i NM-oppkjøringen 💃',
    },
  ]

  return (
    <section className="news-section">
      <div className="news-container">
        <div className="section-header">
          <div className="section-badge">📰 Siste nytt</div>
          <h2 className="section-title">Hva skjer hos oss?</h2>
        </div>

        <div className="news-grid">
          <div className="featured-news">
            <div className="featured-image">📸</div>
            <div className="featured-content">
              <span className="news-tag">KONSERT</span>
              <h3 className="featured-title">
                3.plass i Siddis Brass 2025
              </h3>
              <p className="featured-description">
                Korpset presterte bra under Siddis Brass 2025 og ble belønnet med en 3.plass.
                Takk til alle som kom og hørte på!
              </p>
              <Link to="/nyheter" className="read-more-link">
                Les mer →
              </Link>
            </div>
          </div>

          <div className="small-news">
            {smallNews.map((news, index) => (
              <div key={index} className="news-item">
                <div className="news-icon">{news.emoji}</div>
                <div className="news-item-content">
                  <span className="news-tag">{news.tag}</span>
                  <h4 className="news-item-title">{news.title}</h4>
                  <p className="news-item-description">{news.description}</p>
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

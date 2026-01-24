import { Link } from '@tanstack/react-router'
import './NewsSection.css'

export default function NewsSection() {
  const smallNews = [
    {
      emoji: '🎵',
      tag: 'REPERTOAR',
      title: 'Nytt repertoar til våren',
      description: 'Vi gleder oss til å presentere flere nye låter denne våren.',
    },
    {
      emoji: '🏆',
      tag: 'STEVNE',
      title: 'Vi deltar på NM Brass',
      description: 'Korpset skal konkurrere i 3. divisjon i årets nasjonale mesterskap.',
    },
    {
      emoji: '🏕️',
      tag: 'SOSIALT',
      title: 'Blåseweekend på hytta',
      description: 'Påmelding er åpen for vår tradisjonelle blåseweekend i mars.',
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
                Fantastisk vårkonsert i Grieghallen
              </h3>
              <p className="featured-description">
                Over 400 tilskuere møtte opp til vår årlige vårkonsert i Grieghallen.
                Kvelden var fylt med vakker musikk, gode vibber og fantastisk stemning.
                Takk til alle som kom!
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

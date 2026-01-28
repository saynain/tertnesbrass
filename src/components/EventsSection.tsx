import { Link } from '@tanstack/react-router';
import { concerts } from '../data/concerts';
import './EventsSection.css';

export default function EventsSection() {
  const featuredConcerts = concerts.slice(0, 3);

  return (
    <section className="events-section">
      <div className="events-container">
        <div className="section-header">
          <div className="section-badge">📅 Sesongprogram</div>
          <h2 className="section-title">Kommende konserter</h2>
        </div>

        <div className="events-grid">
          {featuredConcerts.map((concert) => (
            <div key={concert.id} className="event-card">
              {concert.image ? (
                <img
                  src={concert.image.src}
                  srcSet={concert.image.srcSet}
                  alt={concert.image.alt}
                  width="380"
                  height="240"
                  className="event-image"
                  loading="lazy"
                />
              ) : (
                <div className="event-emoji">{concert.emoji}</div>
              )}
              <div className="event-date">{concert.date}</div>
              <h3 className="event-title">{concert.title}</h3>
              <div className="event-venue">
                <span className="venue-icon">📍</span>
                {concert.venue}
              </div>
              <Link to="/program" className="event-link">
                Les mer →
              </Link>
            </div>
          ))}
        </div>

        <div className="events-footer">
          <Link to="/program" className="view-all-link">
            Se hele programmet →
          </Link>
        </div>
      </div>
    </section>
  );
}

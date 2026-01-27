import { Link } from '@tanstack/react-router'
import './EventsSection.css'

export default function EventsSection() {
  const events = [
    {
      emoji: '🎵',
      title: 'Før-NM Konsert',
      date: '1. februar kl. 18:00',
      venue: 'Åsatun Lagshuset, Nyborg',
    },
    {
      emoji: '❓',
      title: 'Annonseres senere',
      date: 'Dato kommer snart',
      venue: 'Sted kommer snart',
    },
    {
      emoji: '❓',
      title: 'Annonseres senere',
      date: 'Dato kommer snart',
      venue: 'Sted kommer snart',
    },
  ]

  return (
    <section className="events-section">
      <div className="events-container">
        <div className="section-header">
          <div className="section-badge">📅 Sesongprogram</div>
          <h2 className="section-title">Kommende konserter</h2>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-emoji">{event.emoji}</div>
              <div className="event-date">{event.date}</div>
              <h3 className="event-title">{event.title}</h3>
              <div className="event-venue">
                <span className="venue-icon">📍</span>
                {event.venue}
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
  )
}

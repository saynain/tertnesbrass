import { Link } from '@tanstack/react-router'
import './EventsSection.css'

export default function EventsSection() {
  const events = [
    {
      emoji: '🌸',
      title: 'Vårkonsert',
      date: '15. mars',
      venue: 'Grieghallen',
    },
    {
      emoji: '🎉',
      title: '17. mai-konsert',
      date: '1. mai',
      venue: 'Torgallmenningen',
    },
    {
      emoji: '🎄',
      title: 'Julekonsert',
      date: '15. desember',
      venue: 'Laksevåg Kulturhus',
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

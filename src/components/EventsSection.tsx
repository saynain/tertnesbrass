import { Link } from '@tanstack/react-router'
import './EventsSection.css'
import type { Event } from '../lib/content.types'

interface EventsSectionProps {
  events: Event[]
}

export default function EventsSection({ events }: EventsSectionProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('no-NO', { day: 'numeric', month: 'long' })
  }

  return (
    <section className="events-section">
      <div className="events-container">
        <div className="section-header">
          <div className="section-badge">📅 Sesongprogram</div>
          <h2 className="section-title">Kommende konserter</h2>
        </div>

        <div className="events-grid">
          {events.slice(0, 3).map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-emoji">{event.emoji}</div>
              <div className="event-date">{formatDate(event.date)}</div>
              <h3 className="event-title">{event.title}</h3>
              <div className="event-venue">
                <span className="venue-icon">📍</span>
                {event.venue}
              </div>
              <Link to={event.link} className="event-link">
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

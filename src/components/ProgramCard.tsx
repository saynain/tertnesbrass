import { useState } from 'react';
import type { Concert } from '../data/concerts';
import './ProgramCard.css';

interface ProgramCardProps {
  concert: Concert;
}

export function ProgramCard({ concert }: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isTBA = concert.status === 'tba';

  return (
    <div className={`program-card ${isExpanded ? 'expanded' : ''}`}>
      <button
        className="program-card-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? 'Lukk detaljer' : 'Åpne detaljer'}
      >
        <div className="program-card-preview">
          {concert.image ? (
            <img
              src={concert.image.src}
              srcSet={concert.image.srcSet}
              alt={concert.image.alt}
              width="120"
              height="80"
              className="program-card-image"
              loading="lazy"
            />
          ) : (
            <div className="program-card-emoji">{concert.emoji}</div>
          )}

          <div className="program-card-info">
            <h3 className="program-card-title">{concert.title}</h3>
            <div className="program-card-meta">
              <span className="meta-item">📅 {concert.date}</span>
              {concert.time !== 'TBA' && (
                <span className="meta-item">🕐 {concert.time}</span>
              )}
              <span className="meta-item">📍 {concert.venue}</span>
            </div>
          </div>

          <div className="expand-icon" aria-hidden="true">
            {isExpanded ? '−' : '+'}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="program-card-details">
          {isTBA ? (
            <div className="tba-message">
              <p className="tba-text">Mer info kommer snart</p>
              <p className="tba-description">
                Vi jobber med å planlegge dette arrangementet. Følg med for oppdateringer!
              </p>
            </div>
          ) : (
            <>
              {concert.description && (
                <div className="detail-section">
                  <p className="concert-description">{concert.description}</p>
                </div>
              )}

              {concert.program && concert.program.length > 0 && (
                <div className="detail-section">
                  <h4 className="detail-heading">Program</h4>
                  <ul className="program-list">
                    {concert.program.map((piece, index) => (
                      <li key={index} className="program-item">
                        <strong>{piece.title}</strong>
                        {piece.composer && (
                          <span className="program-meta"> - {piece.composer}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="extra-info">Kaffe og kake blir det og! 🍰☕️</p>
                </div>
              )}

              {(concert.ticketPrice || concert.childrenFree) && (
                <div className="detail-section">
                  <h4 className="detail-heading">Billetter</h4>
                  <p className="ticket-info">
                    {concert.ticketPrice && (
                      <span className="ticket-price">Inngangsbillett: {concert.ticketPrice}</span>
                    )}
                    {concert.childrenFree && (
                      <span className="ticket-note"> • Barn er gratis</span>
                    )}
                  </p>
                </div>
              )}

              {concert.facebookEventUrl && (
                <div className="detail-section">
                  <a
                    href={concert.facebookEventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook-link"
                  >
                    Se arrangement på Facebook →
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

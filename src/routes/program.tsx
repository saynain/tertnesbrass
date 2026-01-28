import { createFileRoute } from '@tanstack/react-router';
import { ProgramCard } from '../components/ProgramCard';
import { concerts } from '../data/concerts';
import './program.css';

export const Route = createFileRoute('/program')({ component: ProgramPage });

function ProgramPage() {
  return (
    <div className="program-page">
      <div className="program-container">
        <div className="program-header">
          <div className="program-badge">📅 Sesongprogram 2026</div>
          <h1 className="program-title">Kommende konserter</h1>
          <p className="program-description">
            Velkommen til våre konserter! Klikk på en konsert for å se detaljer om program,
            billetter og mer informasjon.
          </p>
        </div>

        <div className="program-grid">
          {concerts.map((concert) => (
            <ProgramCard key={concert.id} concert={concert} />
          ))}
        </div>

        <div className="program-footer">
          <p className="footer-note">
            Har du spørsmål? Ta kontakt med oss på{' '}
            <a href="mailto:tb@tertnesbrass.no" className="email-link">
              tb@tertnesbrass.no
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { SunIcon, MoonIcon } from './ThemeToggleIcons'

import './Header.css'

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img
            src="/images/logo-56.png"
            srcSet="/images/logo-112.png 2x"
            alt="Tertnes Brass logo"
            width="56"
            height="56"
            className="logo-image"
          />
          <div className="logo-text">
            <div className="logo-name">Tertnes Brass</div>
            <div className="logo-tagline">Bergen • Siden 1964</div>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Hjem</Link>
          <Link to="/program" className="nav-link">Program</Link>
          <Link to="/nyheter" className="nav-link">Nyheter</Link>
          <Link to="/medlemmer" className="nav-link">Medlemmer</Link>
          <Link to="/styret" className="nav-link">Styret</Link>
          <Link to="/om-oss" className="nav-link">Om oss</Link>

          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
            >
              Mer ▾
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/bli-medlem" className="dropdown-item">Bli medlem</Link>
                <Link to="/stott-oss" className="dropdown-item">Støtt oss</Link>
                <Link to="/kontakt" className="dropdown-item">Kontakt</Link>
              </div>
            )}
          </div>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Bytt til lys modus' : 'Bytt til mørk modus'}
          >
            <div className="theme-toggle-track">
              <div className="theme-toggle-icons">
                <MoonIcon className="theme-toggle-icon moon" />
                <SunIcon className="theme-toggle-icon sun" />
              </div>
              <div className="theme-toggle-knob" />
            </div>
          </button>
          <Link to="/bli-medlem" className="cta-button">
            Bli medlem
          </Link>
        </div>
      </div>
    </header>
  )
}

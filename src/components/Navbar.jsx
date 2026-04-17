import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Highlights', href: '#highlights', icon: '✦', desc: 'Key features' },
  { label: 'Overview',   href: '#overview',   icon: '◈', desc: 'Project details' },
  { label: 'Payment',    href: '#payment',     icon: '◎', desc: 'Easy payment plan' },
  { label: 'Location',   href: '#location',    icon: '⊕', desc: 'Dubai connectivity' },
  { label: 'Amenities',  href: '#amenities',   icon: '⬡', desc: '40+ world-class' },
  { label: 'Floor Plans',href: '#floorplans',  icon: '⊞', desc: 'Unit layouts' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [activeId, setActiveId]   = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const secs = document.querySelectorAll('section[id]')
      secs.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) setActiveId(s.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={close}>
          <img src="/Danube-Logo.webp" alt="Danube Properties" className="nav-logo-img" />
          <span className="nav-logo-divider" />
          <img src="/Greenz logo.png" alt="Greenz" className="nav-logo-img nav-logo-greenz" />
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li className="nav-mobile-header">
            <a href="#hero" className="nav-mobile-logo" onClick={close}>
              <img src="/Danube-Logo.webp" alt="Danube Properties" className="nav-mobile-logo-img" />
              <span className="nav-logo-divider nav-logo-divider--mobile" />
              <img src="/Greenz logo.png" alt="Greenz" className="nav-mobile-logo-img nav-mobile-logo-greenz" />
            </a>
            <button className="nav-close-btn" onClick={close} aria-label="Close menu">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </li>
          <li className="nav-mobile-section-label">Navigation</li>
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={activeId === l.href.slice(1) ? 'active' : ''}
                onClick={close}
              >
                <span className="nav-link-num">0{i + 1}</span>
                <span className="nav-link-text">
                  <span className="nav-link-label">{l.label}</span>
                  <span className="nav-link-desc">{l.desc}</span>
                </span>
                <span className="nav-link-arrow">
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
                </span>
              </a>
            </li>
          ))}
          <li className="nav-mobile-cta">
            <a href="#cta" className="btn btn-gold nav-mobile-cta-btn" onClick={close}>
              Get Project Details
            </a>
            <p className="nav-mobile-cta-note">Free consultation · No commitment</p>
          </li>
        </ul>

        <a href="#cta" className="btn btn-gold btn-sm nav-cta" onClick={close}>
          Get Details
        </a>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      {menuOpen && <div className="nav-backdrop" onClick={close} />}
    </>
  )
}

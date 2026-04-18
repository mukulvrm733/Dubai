import { useState, useEffect } from 'react'

export default function Nav({ openLeadPopup }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const highlights = document.getElementById('highlights')
    const onScroll = () => {
      if (!highlights) return
      setScrolled(window.scrollY + 68 >= highlights.offsetTop)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = [scrolled ? 'nav-scrolled' : '', mobileOpen ? 'nav-mobile-open' : ''].filter(Boolean).join(' ')

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={navClass}>
      <div className="nav-logo">
        <div className="nav-logo-iiv">
          <img src="/img-1.webp" alt="Infinite Imperial Ventures" className="iiv-emblem" />
          <img src="/img-2.webp" alt="Infinite Imperial Ventures" className="iiv-text" />
        </div>
      </div>

      <div className={`nav-links${mobileOpen ? ' nav-mobile-menu' : ''}`}>
        <a href="#overview" onClick={(e) => handleNavClick(e, '#overview')}>About</a>
        <a href="#payment" onClick={(e) => handleNavClick(e, '#payment')}>Payment Plan</a>
        <a href="#location" onClick={(e) => handleNavClick(e, '#location')}>Location</a>
        <a href="#amenities" onClick={(e) => handleNavClick(e, '#amenities')}>Amenities</a>
        <a href="#floorplans" onClick={(e) => handleNavClick(e, '#floorplans')}>Floor Plans</a>
        <button className="nav-cta nav-cta-menu" onClick={() => { setMobileOpen(false); openLeadPopup('Get Details') }}>
          Get Details
        </button>
      </div>

      <button className="nav-cta nav-cta-desktop" onClick={() => openLeadPopup('Get Details')}>Get Details</button>

      <button
        className="nav-mobile-toggle"
        aria-label="Menu"
        onClick={() => setMobileOpen(v => !v)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}

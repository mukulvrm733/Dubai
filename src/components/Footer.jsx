export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logos">
              <img src="/img-1.webp" alt="Infinite Imperial Ventures" className="iiv-emblem" />
              <img src="/img-2.webp" alt="Infinite Imperial Ventures" className="iiv-text" />
            </div>
            <p>Infinite Imperial Ventures Real Estate LLC — a Dubai-based real estate company helping clients invest in premium properties across the emirate.</p>
            <div className="footer-contact">
              <a href="tel:+97142947655">
                <span className="contact-icon-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                +971 42 94 7655
              </a>
              <a href="mailto:info@iivre.com">
                <span className="contact-icon-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                info@iivre.com
              </a>
              <a href="https://maps.google.com/?q=Fifty+One+Tower+Business+Bay+Dubai" target="_blank" rel="noopener noreferrer">
                <span className="contact-icon-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                Fifty One Tower – 603, 6th Floor, Business Bay, Dubai
              </a>
            </div>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l16 16M4 20L20 4"/>
                  <path d="M4 4h4l12 16h-4z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h5>Developer</h5>
            <a href="#">About Danube Properties</a>
            <a href="#">39+ Projects</a>
            <a href="#">18 Delivered Communities</a>
            <a href="#">News &amp; Updates</a>
          </div>

          <div className="footer-links">
            <h5>Quick Links</h5>
            <a href="#overview">Project Overview</a>
            <a href="#payment">Payment Plan</a>
            <a href="#location">Location</a>
            <a href="#amenities">Amenities</a>
            <a href="#floorplans">Floor Plans</a>
            <a href="#faq">FAQ</a>
            <a href="#cta">Contact Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Infinite Imperial Ventures Real Estate LLC. All rights reserved.</span>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/Greenz logo.png" alt="Greenz by Danube" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Presented exclusively by Infinite Imperial Ventures Real Estate LLC —
              a Dubai-based consultancy helping clients invest in premium properties across the UAE.
            </p>
            <div className="footer-contact">
              <a href="tel:+97142947655">
                <span className="fc-icon fc-phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                </span>
                +971 42 94 7655
              </a>
              <a href="mailto:info@iivre.com">
                <span className="fc-icon fc-mail">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                info@iivre.com
              </a>
              <a href="https://maps.google.com/?q=Fifty+One+Tower,+Business+Bay,+Dubai" target="_blank" rel="noreferrer">
                <span className="fc-icon fc-loc">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                Fifty One Tower – 603, 6th Floor, Business Bay, Dubai
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {['#highlights', '#overview', '#payment', '#location', '#amenities', '#floorplans'].map((h, i) => (
                <li key={h}><a href={h}>{['Highlights','Overview','Payment Plan','Location','Amenities','Floor Plans'][i]}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Project Details</h4>
            <ul>
              {['3 BR Townhouse','4 BR Townhouse','5 BR Villa','Amenities','Download Brochure'].map(t => (
                <li key={t}><a href="#cta">{t}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <p style={{ fontSize:'0.82rem', color:'rgba(255,255,255,0.42)', lineHeight:1.7, marginBottom:16 }}>
              Ready to invest? Our consultants are available 7 days a week.
            </p>
            <a href="https://wa.me/97142947655" target="_blank" rel="noreferrer" className="btn btn-wa" style={{ width:'100%', padding:'13px', fontSize:'0.85rem' }}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Enquire on WhatsApp
            </a>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link social-ig">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="social-link social-fb">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="social-link social-tw">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Infinite Imperial Ventures Real Estate LLC. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

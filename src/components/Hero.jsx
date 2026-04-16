import LeadForm from './LeadForm'
import './Hero.css'

const tags = ['Fully Furnished', '1% Monthly Plan', 'Q4 2029 Handover', 'Dubai Academic City']

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* layered background */}
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-particles">
        {[...Array(12)].map((_,i) => <span key={i} className="particle" style={{ '--i': i }} />)}
      </div>

      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-badge fade-up d1">
            <span className="badge-dot" />
            <span>Now Launching — Greenz by Danube</span>
          </div>

          <h1 className="h1 white fade-up d2">
            Fully Furnished<br />
            <span className="hero-accent">Townhouses &amp; Villas</span><br />
            in Dubai from{' '}
            <span className="price-tag">AED 3.5M</span>
          </h1>

          <p className="hero-sub fade-up d3">
            Premium 3–5 bedroom residences near Dubai Academic City with a flexible
            1% monthly payment plan — designed for families, built for the future.
          </p>

          <div className="hero-tags fade-up d4">
            {tags.map(t => (
              <span key={t} className="htag"><span className="check-icon">✓</span>{t}</span>
            ))}
          </div>

          <div className="hero-btns fade-up d5">
            <a href="#cta" className="btn btn-gold btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              Download Brochure
            </a>
            <a href="https://wa.me/97142947655" target="_blank" rel="noreferrer" className="btn btn-outline btn-lg">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp for Instant Details
            </a>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="hero-form-wrap fade-up d3">
          <LeadForm title="Get Full Project Details" sub="Free consultation · No obligation" btnType="gold" />
        </div>
      </div>

      {/* scroll hint */}
      <div className="scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}

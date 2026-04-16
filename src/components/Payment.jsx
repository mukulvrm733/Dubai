import './Payment.css'

const steps = [
  {
    pct: '10%',
    title: 'Booking',
    desc: 'On Reservation',
    detail: 'Secure your unit today with just a 10% booking amount.',
    featured: false,
  },
  {
    pct: '60%',
    title: 'During Construction',
    desc: 'Includes initial 10% + 1% monthly',
    detail: 'Flexible installments during construction — only 1% per month.',
    featured: true,
  },
  {
    pct: '30%',
    title: 'On Handover',
    desc: 'Upon Completion',
    detail: 'Final payment upon receiving the keys to your dream home.',
    featured: false,
  },
]

export default function Payment() {
  return (
    <section className="section section-mid" id="payment">
      <div className="inner">
        <div className="pay-header">
          <span className="label">Easy Ownership</span>
          <h2 className="h2 white">Flexible 1% Monthly Payment Plan</h2>
          <div className="rule" style={{ margin: '18px auto' }} />
          <p className="body-muted" style={{ maxWidth: 540, margin: '0 auto' }}>
            Low upfront commitment. Flexible monthly payments. Designed to make ownership accessible for everyone.
          </p>
        </div>

        {/* Timeline connector */}
        <div className="pay-flow">
          <div className="pay-track" />
          {steps.map((s, i) => (
            <div className={`pay-card ${s.featured ? 'featured' : ''}`} key={s.title}>
              <div className="pay-node">{i + 1}</div>
              <div className="pay-pct">{s.pct}</div>
              <div className={`pay-badge ${s.featured ? 'pay-badge-dark' : ''}`}>{s.title}</div>
              <p className="pay-desc">{s.desc}</p>
              <p className="pay-detail">{s.detail}</p>
            </div>
          ))}
        </div>

        <div className="pay-cta">
          <a href="#cta" className="btn btn-gold btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
            Get Full Payment Plan Details
          </a>
        </div>
      </div>
    </section>
  )
}

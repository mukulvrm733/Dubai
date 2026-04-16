import './Highlights.css'

const boxes = [
  { label: 'Starting Price', value: 'AED 3.5M',           sub: 'Fully furnished',        icon: '💎' },
  { label: 'Unit Types',     value: '3–5 BR',              sub: 'Townhouses & Villas',    icon: '🏡' },
  { label: 'Payment Plan',   value: '1% / Mo.',            sub: '70/30 flexible plan',    icon: '📆' },
  { label: 'Handover',       value: 'Q4 2029',             sub: 'On-schedule delivery',   icon: '🔑' },
]

export default function Highlights() {
  return (
    <section className="section section-dark" id="highlights">
      <div className="inner">
        <div className="hl-header">
          <span className="label">Project Snapshot</span>
          <h2 className="h2 white">Greenz by Danube</h2>
          <div className="rule" style={{ margin: '18px auto' }} />
        </div>
        <div className="hl-grid">
          {boxes.map((b, i) => (
            <div className="hl-card" key={b.label} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="hl-icon">{b.icon}</div>
              <p className="hl-label">{b.label}</p>
              <p className="hl-value">{b.value}</p>
              <p className="hl-sub">{b.sub}</p>
              <div className="hl-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

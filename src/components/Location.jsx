import './Location.css'

const blocks = [
  {
    title: 'Connectivity & Access',
    icon: '🛣️',
    items: ['Easy access to E611 & E66', 'Well-connected road network', 'Upcoming metro connectivity'],
  },
  {
    title: 'Lifestyle & Education',
    icon: '🎓',
    items: ['35+ clinics & major hospitals nearby', 'Next to Dubai Academic City', '27 universities & 15+ schools'],
  },
  {
    title: 'Growth & Investment Potential',
    icon: '📈',
    items: ['Rapidly developing residential corridor', 'Increasing demand from families & students', 'Strong long-term rental potential'],
  },
]

export default function Location() {
  return (
    <section className="section section-off" id="location">
      <div className="inner">
        <div className="loc-grid">
          {/* MAP */}
          <div className="loc-map-wrap">
            <img src="/location-map.webp" alt="Greenz by Danube Location Map" className="loc-map" />
            <div className="loc-map-glow" />
          </div>

          {/* INFO */}
          <div className="loc-info">
            <span className="label">Strategic Location</span>
            <h2 className="h2 dark">Prime Location with Strong Future Growth</h2>
            <div className="rule" />
            <p className="body-text">
              Strategically located near Dubai Academic City with easy access to key
              areas across Dubai — perfectly positioned for families and long-term investors.
            </p>

            <div className="loc-blocks">
              {blocks.map(b => (
                <div className="loc-block" key={b.title}>
                  <div className="loc-block-head">
                    <span className="loc-icon">{b.icon}</span>
                    <h4>{b.title}</h4>
                  </div>
                  <ul>
                    {b.items.map(it => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

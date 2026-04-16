import './Trust.css'

const cards = [
  { icon: '🏆', title: 'AED 32B+ Portfolio',          check: 'Strong market presence across Dubai'            },
  { icon: '🔑', title: 'Proven Delivery Track Record', check: 'Multiple completed residential communities'      },
  { icon: '💳', title: 'Flexible 1% Payment Plans',    check: 'Designed for accessible ownership'              },
  { icon: '📅', title: 'Timely Handover Focus',        check: 'Structured construction and delivery timelines' },
]

export default function Trust() {
  return (
    <section className="section section-dark" id="trust">
      {/* decorative bg */}
      <div className="trust-bg-deco" />

      <div className="inner" style={{ position: 'relative', zIndex: 1 }}>
        <div className="trust-header">
          <span className="label">Developer Credibility</span>
          <h2 className="h2 white">Why Danube Properties Stands Apart</h2>
          <div className="rule" style={{ margin: '18px auto' }} />
          <p className="body-muted" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            Trusted Dubai developer known for timely delivery, flexible payment plans,
            and well-designed communities built for long-term value.
          </p>
        </div>

        <div className="trust-grid">
          {cards.map((c, i) => (
            <div className="trust-card" key={c.title} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="tc-icon-wrap">
                <span className="tc-icon">{c.icon}</span>
                <div className="tc-icon-ring" />
              </div>
              <h3 className="h3 cgold">{c.title}</h3>
              <div className="tc-check">
                <span className="tc-tick">✔</span>
                {c.check}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

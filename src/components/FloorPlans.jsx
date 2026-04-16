import { useState } from 'react'
import './FloorPlans.css'

const plans = [
  {
    id: '3br',
    tab: '3 Bedroom',
    badge: '3 BHK + Maid — Townhouse',
    title: '3-Bedroom Townhouse',
    img: '/fp-3br.webp',
    alt: '3BHK Townhouse Floor Plan',
    desc: 'Thoughtfully designed across Ground, First & Roof floors with efficient space planning for comfortable family living.',
    specs: [
      { label: 'Unit Type', value: 'Townhouse' },
      { label: 'Bedrooms', value: '3 BR + Maid' },
      { label: 'Floors',   value: 'G + 1 + Roof' },
      { label: 'Starting', value: 'AED 3.5M' },
    ],
    features: ['Private garden & rooftop terrace', "Maid's room with attached bath", 'Open-plan living & dining', 'Covered parking for 2 cars', 'Fully furnished, move-in ready'],
  },
  {
    id: '4br',
    tab: '4 Bedroom',
    badge: '4 BHK + Maid + Private Lift — Premium',
    title: '4-Bedroom Premium Townhouse',
    img: '/fp-4br.webp',
    alt: '4BHK Premium Townhouse Floor Plan',
    desc: 'A premium townhouse spanning four levels with a private elevator and expansive family living spaces.',
    specs: [
      { label: 'Unit Type', value: 'Townhouse' },
      { label: 'Bedrooms', value: '4 BR + Maid' },
      { label: 'Floors',   value: 'G + 2 + Roof' },
      { label: 'Feature',  value: 'Private Lift' },
    ],
    features: ['Private elevator across all floors', "Dedicated maid's room & laundry", 'Large family lounge on second floor', 'Roof terrace with garden', 'Fully furnished, move-in ready'],
  },
  {
    id: '5br',
    tab: '5 Bedroom',
    badge: '5 BHK + Maid + Private Lift — Semi-Detached Villa',
    title: '5-Bedroom Semi-Detached Villa',
    img: '/fp-5br.webp',
    alt: '5BHK Semi-Detached Villa Floor Plan',
    desc: 'Our flagship villa — the pinnacle of space, privacy, and luxury across four generously planned floors.',
    specs: [
      { label: 'Unit Type', value: 'Semi-Det. Villa' },
      { label: 'Bedrooms', value: '5 BR + Maid' },
      { label: 'Floors',   value: 'G + 2 + Roof' },
      { label: 'Feature',  value: 'Private Lift' },
    ],
    features: ['Semi-detached for enhanced privacy', 'Private elevator to all floors', 'Spacious master suite with walk-in', 'Private garden & rooftop lounge', 'Fully furnished, move-in ready'],
  },
]

export default function FloorPlans() {
  const [active, setActive] = useState('3br')
  const plan = plans.find(p => p.id === active)

  return (
    <section className="section section-cream" id="floorplans">
      <div className="inner">
        <div className="fp-header">
          <span className="label">Layouts</span>
          <h2 className="h2 dark">Floor Plans</h2>
          <div className="rule" style={{ margin: '18px auto' }} />
          <p className="body-text fp-sub">
            Spacious, well-designed layouts built for comfortable family living — featuring private
            gardens, generous living areas, and premium finishes throughout.
          </p>
        </div>

        {/* Tabs */}
        <div className="fp-tabs">
          {plans.map(p => (
            <button
              key={p.id}
              className={`fp-tab ${active === p.id ? 'active' : ''}`}
              onClick={() => setActive(p.id)}
            >
              {p.tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="fp-panel" key={active}>
          <div className="fp-img-wrap">
            <img src={plan.img} alt={plan.alt} className="fp-img" />
          </div>
          <div className="fp-details">
            <span className="fp-type-tag">{plan.badge}</span>
            <h3 className="h3 dark" style={{ marginTop: 12, marginBottom: 10 }}>{plan.title}</h3>
            <p className="body-text" style={{ fontSize: '0.9rem' }}>{plan.desc}</p>

            <div className="fp-specs">
              {plan.specs.map(s => (
                <div className="fp-spec" key={s.label}>
                  <p className="fp-spec-label">{s.label}</p>
                  <p className="fp-spec-val">{s.value}</p>
                </div>
              ))}
            </div>

            <ul className="fp-features">
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>

            <div style={{ marginTop: 28 }}>
              <a href="#cta" className="btn btn-green">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                Download This Floor Plan
              </a>
            </div>
          </div>
        </div>

        <div className="fp-cta">
          <a href="#cta" className="btn btn-gold btn-lg">Download All Floor Plans →</a>
        </div>
      </div>
    </section>
  )
}

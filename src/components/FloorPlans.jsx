import { useState } from 'react'

const PLANS = [
  {
    id: 'br3',
    label: '3 Bedroom',
    img: '/fp-3br.webp',
    imgAlt: '3 Bedroom Townhouse Floor Plan',
    title: '3 Bedroom Townhouse',
    sqft: 'approx. 2,400 sq. ft.',
    desc: 'Thoughtfully designed for young families — a generous townhouse with double-height living spaces, private sky garden, and fully furnished interiors with premium Italian Dolce Vita furniture.',
    features: [
      'Double-height ceiling living area',
      'Private sky garden & terrace',
      'Fully furnished with premium Italian furniture',
      'Fitted & equipped kitchen',
      "Maid's room with ensuite",
      'Covered parking for 2 cars',
      'Ensuite bedrooms with walk-in wardrobes',
    ],
  },
  {
    id: 'br4',
    label: '4 Bedroom',
    img: '/fp-4br.webp',
    imgAlt: '4 Bedroom Townhouse Floor Plan',
    title: '4 Bedroom Townhouse',
    sqft: '2,750 – 3,100 sq. ft.',
    desc: 'Ideal for growing families, the 4-bedroom layout provides expansive living and dining areas, a rooftop terrace, and fully furnished interiors — ready to move in from day one.',
    features: [
      'Double-height ceiling living area',
      'Private rooftop terrace',
      'Fully furnished with premium Italian furniture',
      'Private pool option',
      "Study room & maid's room",
      'Covered parking for 2 cars',
      'Ensuite bedrooms with walk-in wardrobes',
    ],
  },
  {
    id: 'br5',
    label: '5 Bedroom',
    img: '/fp-5br.webp',
    imgAlt: '5 Bedroom Villa Floor Plan',
    title: '5 Bedroom Villa',
    sqft: '3,700 – 3,950 sq. ft.',
    desc: 'The pinnacle of luxury living within Greenz — an oversized plot villa designed for those who demand space, privacy, and premium craftsmanship across every detail.',
    features: [
      'Oversized private plot',
      'Panoramic double-height gym access',
      'Private pool & landscaped garden',
      'Fully furnished with premium Italian furniture',
      "Driver's room & maid's room",
      'Covered parking for 3 cars',
      'Sky lounge & rooftop terrace',
    ],
  },
]

export default function FloorPlans({ openLeadPopup }) {
  const [active, setActive] = useState('br3')
  const plan = PLANS.find(p => p.id === active)

  return (
    <section id="floorplans">
      <div className="container">
        <div className="fp-header">
          <h2 className="section-title ss-line-bottom">Spacious Layouts for Every Family</h2>
          <p className="section-sub">Well-designed layouts built for comfortable family living, featuring private gardens, generous living areas, and premium Italian furnishings.</p>
        </div>

        <div className="fp-tabs-wrap">
          <div className="fp-tabs">
            {PLANS.map(p => (
              <button
                key={p.id}
                className={`fp-tab${active === p.id ? ' active' : ''}`}
                onClick={() => setActive(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {PLANS.map(p => (
          <div key={p.id} className={`fp-panel${active === p.id ? ' active' : ''}`}>
            <div className="fp-image">
              <img src={p.img} alt={p.imgAlt} loading="lazy" decoding="async" width="6600" height="3712" />
            </div>
            <div className="fp-details">
              <h3>{p.title}</h3>
              <p className="fp-sqft">{p.sqft}</p>
              <p>{p.desc}</p>
              <ul className="fp-features">
                {p.features.map((f, i) => (
                  <li key={i}><span>✔</span> {f}</li>
                ))}
              </ul>
              <button className="btn-outline" onClick={() => openLeadPopup('Download All Floor Plans')}>
                Download All Floor Plans
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

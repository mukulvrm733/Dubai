const HIGHLIGHTS = [
  { val: 'AED 3.5M', lbl: 'Starting Price', desc: 'Fully furnished units' },
  { val: '1%', lbl: 'Monthly Plan', desc: '70/30 payment split' },
  { val: '3–5 BR', lbl: 'Unit Types', desc: 'Townhouses & Villas' },
  { val: 'Q4 2029', lbl: 'Handover', },
]

export default function Highlights() {
  return (
    <section id="highlights">
      <div className="container">
        <p className="highlights-head">Greenz By Danube</p>
        <div className="highlights-grid">
          {HIGHLIGHTS.map((h, i) => (
            <div className="highlight-box" key={i}>
              <div className="val">{h.val}</div>
              <div className="lbl">{h.lbl}</div>
              <div className="desc">{h.desc}</div>
            </div>
          ))}
        </div>
        <div className="currency-bar">
          <span><strong>AED 3.5M</strong> Starting Price</span>
          <span>≈ <strong>₹8.88 Cr</strong> INR</span>
          <span>≈ <strong>USD 953K</strong></span>
          <span>≈ <strong>EUR 810K</strong></span>
        </div>
      </div>
    </section>
  )
}

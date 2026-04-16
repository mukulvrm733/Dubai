import './Overview.css'

const features = [
  { icon: '🏡', title: 'Fully Furnished Residences',   desc: 'Move-in ready with premium furniture packages included' },
  { icon: '🌿', title: '400,000 sq. ft. Community',    desc: 'Lush green spaces, parks & lifestyle amenities throughout' },
  { icon: '📍', title: 'Near Dubai Academic City',     desc: 'Surrounded by 27 universities, 15+ schools & top hospitals' },
  { icon: '🏗️', title: 'Contemporary Architecture',   desc: 'Award-winning design blending luxury with functionality' },
]

export default function Overview() {
  return (
    <section className="section section-cream" id="overview">
      <div className="inner">
        <div className="ov-grid">
          {/* LEFT */}
          <div className="ov-text">
            <span className="label">Project Overview</span>
            <h2 className="h2 dark">A Premium Community Built for Modern Family Living</h2>
            <div className="rule" />
            <p className="body-text">
              Greenz by Danube is a premium community of fully furnished townhouses and villas,
              located near Dubai Academic City — designed for modern family living in a fast-growing
              residential zone.
            </p>
            <p className="body-text" style={{ marginTop: 14 }}>
              Spacious layouts, contemporary design, and a community-focused environment make it
              ideal for both end-users and long-term investors seeking strong rental yields.
            </p>

            <div className="ov-features">
              {features.map(f => (
                <div className="ov-feat" key={f.title}>
                  <div className="ov-feat-icon">{f.icon}</div>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36 }}>
              <a href="#cta" className="btn btn-green btn-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 6l4-4 4 4M12 2v13M3 17l9 5 9-5"/></svg>
                Explore the Project
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="ov-image-wrap">
            <div className="ov-img-inner">
              <img src="/villa-exterior.webp" alt="Greenz Villa Exterior" className="ov-img" />
              <div className="ov-badge">
                <strong>Greenz by Danube</strong>
                <span>Dubai Academic City Area</span>
              </div>
              <div className="ov-tag top-left">
                <span>Fully Furnished</span>
              </div>
            </div>
            <div className="ov-deco-ring" />
          </div>
        </div>
      </div>
    </section>
  )
}

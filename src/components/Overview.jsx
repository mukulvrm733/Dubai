import { useState } from 'react'

const GALLERY = [
  { src: '/gall-1.webp', alt: 'Community View 1' },
  { src: '/gall-2.webp', alt: 'Community View 2' },
  { src: '/gall-3.webp', alt: 'Community View 3' },
  { src: '/gall-4.webp', alt: 'Community View 4' },
  { src: '/gall-5.webp', alt: 'Community View 5' },
  { src: '/gall-6.webp', alt: 'Community View 6' },
  { src: '/villa-exterior.webp', alt: 'Greenz Exterior' },
]

export default function Overview({ openLeadPopup }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <section id="overview">
      <div className="container">
        <div className="overview-grid">
          <div className="overview-text">
            <h2 className="section-title ss-line-bottom">A Premium Community Designed for Modern Family Living</h2>
            <p>GreenZ by Danube introduces the developer's first townhouse &amp; villa community in Dubai, bringing fully furnished 3–5BR homes to the Academic City area of Dubailand. The project is planned as a residential neighborhood designed for family living, with approximately 700 homes in the first phase.</p>
            <p>Its location places residents next to Dubai Silicon Oasis — a major technology district with more than 100,000 residents and entrepreneurs and over 40,000 companies — as well as close to Dubai International Academic City and several international schools. With direct access to Sheikh Mohammed Bin Zayed Road (E311) and Emirates Road (E611), the community combines suburban space with strong connectivity across Dubai.</p>
          </div>

          <div className="overview-gallery-grid">
            {GALLERY.map((item, i) => (
              <div className="gallery-item" key={i} onClick={() => setLightboxSrc(item.src)}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxSrc && (
        <div className="lightbox-overlay active" onClick={() => setLightboxSrc(null)}>
          <button className="lightbox-close" onClick={() => setLightboxSrc(null)}>&times;</button>
          <img src={lightboxSrc} alt="" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}

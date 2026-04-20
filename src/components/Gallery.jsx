import { useState, useRef } from 'react'

const IMAGES = [
  '/Gallery/1.webp',
  '/Gallery/2.webp',
  '/Gallery/3.webp',
  '/Gallery/4.webp',
  '/Gallery/5.webp',
  '/Gallery/6.webp',
  '/Gallery/7.webp',
  '/Gallery/8.webp',
  '/Gallery/9.webp',
  '/Gallery/10.webp',
  '/Gallery/11.webp',
]

export default function Gallery() {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef(null)

  const prev = () => setCurrent(c => (c - 1 + IMAGES.length) % IMAGES.length)
  const next = () => setCurrent(c => (c + 1) % IMAGES.length)

  const onTouchStart = e => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = e => {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (delta > 40) next()
    else if (delta < -40) prev()
    touchStartX.current = null
  }

  return (
    <section id="gallery">
      <div className="container">
        <div className="gallery-sec-header">
          <h2 className="section-title ss-line-bottom">Inside Greenz</h2>
          <p className="section-sub">A glimpse into the spaces, finishes, and community that define life at Greenz by Danube.</p>
        </div>
      </div>

      <div
        className="gslider-wrap"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="gslider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {IMAGES.map((src, i) => (
            <img key={i} src={src} alt={`Greenz Gallery ${i + 1}`} loading="lazy" decoding="async" />
          ))}
        </div>

        <button className="gslider-btn gslider-prev" onClick={prev} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="gslider-btn gslider-next" onClick={next} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="gslider-counter">{current + 1} / {IMAGES.length}</div>

        <div className="gslider-dots">
          {IMAGES.map((_, i) => (
            <span
              key={i}
              className={i === current ? 'active' : ''}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      <div className="gslider-thumbs">
        {IMAGES.map((src, i) => (
          <div
            key={i}
            className={`gslider-thumb${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          >
            <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
    </section>
  )
}

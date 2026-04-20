export default function Amenities() {
  return (
    <section id="amenities">
      <div className="container">
        <div className="amenities-header">
          <h2 className="section-title ss-line-bottom">Designed for Comfortable Family Living</h2>
           <p>A 400,000 sq. ft. amenities destination thoughtfully divided into five zones designed to create a vibrant, family-friendly community with 50+ experiences for leisure, wellness, and meaningful time together</p>
        </div>

        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-card-icon">
              <svg viewBox="0 0 52 52">
                <path d="M8 36 C14 28 22 32 26 28 C30 24 36 28 44 22"/>
                <path d="M10 42 C16 34 22 38 26 34 C30 30 38 34 44 28"/>
                <circle cx="26" cy="14" r="6"/>
                <line x1="26" y1="20" x2="26" y2="28"/>
                <path d="M18 24 L26 22 L34 24"/>
              </svg>
            </div>
            <div className="amenity-card-name">The Beach Hub</div>
          </div>

          <div className="amenity-card">
            <div className="amenity-card-icon">
              <svg viewBox="0 0 52 52">
                <circle cx="20" cy="12" r="4"/>
                <circle cx="32" cy="12" r="4"/>
                <path d="M14 24 C14 18 38 18 38 24 L38 40 L14 40 Z"/>
                <path d="M20 40 L20 30 L32 30 L32 40"/>
                <path d="M10 44 L42 44"/>
              </svg>
            </div>
            <div className="amenity-card-name">The Family Hub</div>
          </div>

          <div className="amenity-card">
            <div className="amenity-card-icon">
              <svg viewBox="0 0 52 52">
                <circle cx="16" cy="36" r="8"/>
                <circle cx="36" cy="36" r="8"/>
                <path d="M16 36 L22 18 L30 18 L36 36"/>
                <path d="M22 18 L28 28 L36 36"/>
                <circle cx="28" cy="14" r="4"/>
                <line x1="28" y1="10" x2="28" y2="18"/>
              </svg>
            </div>
            <div className="amenity-card-name">The Sports Hub</div>
          </div>

          <div className="amenity-card">
            <div className="amenity-card-icon">
              <svg viewBox="0 0 52 52">
                <path d="M10 24 L18 24 L20 16 L24 32 L28 20 L32 28 L34 24 L42 24"/>
                <ellipse cx="26" cy="38" rx="10" ry="6"/>
                <path d="M22 38 C22 34 30 34 30 38"/>
              </svg>
            </div>
            <div className="amenity-card-name">The Wellness Hub</div>
          </div>

          <div className="amenity-card">
            <div className="amenity-card-icon">
              <svg viewBox="0 0 48 48">
                <path d="M24 6 C16 6 10 13 12 20 C8 20 4 24 6 28 H42 C44 24 40 20 36 20 C38 13 32 6 24 6Z"/>
                <line x1="24" y1="28" x2="24" y2="42"/>
                <line x1="18" y1="36" x2="30" y2="36"/>
              </svg>
            </div>
            <div className="amenity-card-name">Landscaped Parks</div>
          </div>

          <div className="amenity-card">
            <div className="amenity-card-icon">
              <svg viewBox="0 0 48 48">
                <rect x="6" y="16" width="36" height="20" rx="2"/>
                <path d="M6 30 C10 26 14 34 18 30 C22 26 26 34 30 30 C34 26 38 34 42 30"/>
              </svg>
            </div>
            <div className="amenity-card-name">Swimming Pool</div>
          </div>

          <div className="amenity-card">
            <div className="amenity-card-icon">
              <svg viewBox="0 0 48 48">
                <path d="M24 4 L38 10 L38 24 C38 33 24 44 24 44 C24 44 10 33 10 24 L10 10 Z"/>
                <circle cx="24" cy="22" r="5"/>
                <line x1="24" y1="27" x2="24" y2="34"/>
              </svg>
            </div>
            <div className="amenity-card-name">Gated Community</div>
          </div>

          <div className="amenity-card">
            <div className="amenity-card-icon">
              <svg viewBox="0 0 48 48">
                <path d="M12 36 L12 18 M36 36 L36 18"/>
                <path d="M8 18 L40 18"/>
                <path d="M20 18 L20 10 L28 10 L28 18"/>
                <path d="M12 26 L18 26 M30 26 L36 26"/>
                <rect x="6" y="36" width="36" height="6" rx="1"/>
              </svg>
            </div>
            <div className="amenity-card-name">EV Charging &amp; Parking</div>
          </div>

          <div className="amenity-card amenity-card--last">
            <div className="amenity-card-icon">
              <svg viewBox="0 0 52 52">
                <rect x="8" y="20" width="36" height="26" rx="2"/>
                <path d="M8 20 L14 8 H38 L44 20"/>
                <line x1="8" y1="20" x2="44" y2="20"/>
                <rect x="20" y="30" width="12" height="16" rx="1"/>
                <path d="M22 8 L22 20 M30 8 L30 20"/>
              </svg>
            </div>
            <div className="amenity-card-name">Shop · Dine · Connect</div>
          </div>
        </div>
      </div>
    </section>
  )
}

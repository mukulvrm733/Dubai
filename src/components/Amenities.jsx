import './Amenities.css'

const items = [
  { icon: '🌳', name: 'Landscaped Parks'  },
  { icon: '🏊', name: 'Swimming Pool'     },
  { icon: '🎠', name: 'Kids Play Area'    },
  { icon: '💪', name: 'Gym & Fitness'     },
  { icon: '☕', name: 'Retail & Cafes'    },
  { icon: '🏸', name: 'Sports Courts'     },
  { icon: '🚴', name: 'Cycling Tracks'    },
  { icon: '🔐', name: 'Gated Community'   },
]

export default function Amenities() {
  return (
    <section className="section section-white" id="amenities">
      <div className="inner">
        <div className="am-header">
          <span className="label">Lifestyle</span>
          <h2 className="h2 dark">Designed for Comfortable Family Living</h2>
          <div className="rule" style={{ margin: '18px auto' }} />
          <p className="body-text am-sub">
            A 400,000 sq. ft. lifestyle destination designed for family living and daily convenience.
          </p>
        </div>

        <div className="am-grid">
          {items.map((a, i) => (
            <div className="am-card" key={a.name} style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="am-icon-wrap">
                <div className="am-icon">{a.icon}</div>
                <div className="am-ring" />
              </div>
              <p className="am-name">{a.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

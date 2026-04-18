const travelTimes = [
  { time: '5 min', place: 'Dubai Silicon Oasis' },
  { time: 'Adj.', place: 'Academic City' },
  { time: '18 min', place: 'Downtown Dubai' },
  { time: '20 min', place: 'DXB Airport' },
  { time: '18 min', place: 'Burj Khalifa' },
  { time: '35 min', place: 'Dubai Marina' },
]

export default function Location() {
  return (
    <section id="location">
      <div className="container">
        <div className="location-grid">
          <div className="location-map">
            <img src="/location-map.webp" alt="Location Map — Greenz by Danube, Dubai Academic City" />
          </div>
          <div className="location-points">
            <h2 className="section-title ss-line-bottom">Prime Location with Strong Future Growth</h2>
            <p className="section-sub">Greenz is strategically located with easy access to E611 and E66 highways, offering seamless connectivity across Dubai along with upcoming metro access. Surrounded by 35+ clinics, major hospitals, and positioned next to Dubai Academic City with 27 universities and 15+ schools, the area is ideal for family living. As a rapidly developing residential corridor, it continues to see increasing demand from families and students, supporting strong long-term rental potential and investment growth.</p>

            <div className="travel-grid">
              {travelTimes.map((t, i) => (
                <div className="travel-card" key={i}>
                  <div className="t-time">{t.time}</div>
                  <div className="t-place">{t.place}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

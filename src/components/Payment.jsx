export default function Payment({ openLeadPopup }) {
  return (
    <section id="payment">
      <div className="container">
        <div className="payment-intro">
          <h2 className="section-title ss-line-bottom">Flexible 1% Monthly Payment Plan</h2>
          <p className="section-sub">Low upfront. Flexible monthly payments designed for accessible ownership across the globe.</p>
        </div>
        <div className="payment-blocks">
          <div className="payment-block">
            <div className="pct">10<sup>%</sup></div>
            <div className="phase">Booking Amount</div>
            <p className="detail">On Reservation<br />Secure your unit with just 10%</p>
          </div>
          <div className="payment-block">
            <div className="pct">60<sup>%</sup></div>
            <div className="phase">During Construction</div>
            <p className="detail">1% monthly installments<br />over 4 years of construction</p>
          </div>
          <div className="payment-block">
            <div className="pct">30<sup>%</sup></div>
            <div className="phase">On Handover</div>
            <p className="detail">Upon completion<br />Q4 2029</p>
          </div>
        </div>
        <div className="payment-cta">
          <button className="btn-outline" onClick={() => openLeadPopup('Get Full Payment Plan')}>
            Get Full Payment Plan
          </button>
        </div>
      </div>
    </section>
  )
}

import LeadForm from './LeadForm'
import './CTA.css'

export default function CTA() {
  return (
    <section className="section section-off" id="cta">
      <div className="inner">
        <div className="cta-card">
          {/* Decorative glow */}
          <div className="cta-glow-1" />
          <div className="cta-glow-2" />

          <div className="cta-top">
            <span className="label">Exclusive Offer</span>
            <h2 className="h2 white">Get Full Project Details</h2>
            <div className="rule" style={{ margin: '18px auto' }} />
            <p className="body-muted cta-sub">
              Receive complete pricing, floor plans, and unit availability directly on WhatsApp —
              our consultant will reach out within minutes.
            </p>
          </div>

          <div className="cta-form-wrap">
            <LeadForm title="" sub="" btnType="wa" />
            <p className="urgency">
              <span className="urgency-dot">⚡</span>
              Limited units available in the current phase
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

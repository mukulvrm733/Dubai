import { useState } from 'react'
import PhonePicker from './PhonePicker'

const WA_NUMBER = '97142947655'

export default function CTA() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState({ code: '+971', number: '' })
  const [email, setEmail] = useState('')
  const [purpose, setPurpose] = useState('')
  const [budget, setBudget] = useState('')
  const [unit, setUnit] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !phone.number) { alert('Please enter your name and WhatsApp number.'); return }
    const msg = encodeURIComponent(
      `Hi, I'm interested in Greenz by Danube.\n\nName: ${name}\nWhatsApp: ${phone.code}${phone.number}${email ? '\nEmail: ' + email : ''}\nPurpose: ${purpose || 'Not specified'}\nBudget: ${budget || 'Not specified'}\nUnit Preference: ${unit || 'Not specified'}\n\nPlease share full details.`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <section id="cta">
      <div className="container">
        <div className="cta-inner">
          <div className="cta-text">
            <h2 className="section-title ss-line-bottom">Get Full Project Details</h2>
            
            <p className="section-sub">Receive complete pricing, floor plans, and unit availability directly on WhatsApp — speak with a dedicated property consultant today.</p>
            <div className="cta-contact-list">
              <a href="tel:+97142947655" className="cta-contact-item">
                <span className="contact-icon-circle green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#406a30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <span>+971 42 94 7655</span>
              </a>
              <a href="mailto:info@iivre.com" className="cta-contact-item">
                <span className="contact-icon-circle green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#406a30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <span>info@iivre.com</span>
              </a>
              <a href="https://maps.google.com/?q=Fifty+One+Tower+Business+Bay+Dubai" target="_blank" rel="noopener noreferrer" className="cta-contact-item">
                <span className="contact-icon-circle green">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#406a30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span>Fifty One Tower – 603, 6th Floor<br />Business Bay, Dubai</span>
              </a>
            </div>
          </div>

          <div className="cta-form-wrap">
            <div className="cta-form-header-badge">
              <span className="form-badge-dot form-badge-dot--green"></span>
              Free Consultation · No Obligation
            </div>
            <p className="cta-form-title">Get Full Project Details</p>
            <p className="cta-form-sub">Pricing · Floor Plans · Unit Availability — We respond within minutes</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" value={name} onChange={e => setName(e.target.value)} required />
              </div>
              <div className="form-group">
                <label>WhatsApp Number *</label>
                <PhonePicker theme="light" onPhoneChange={setPhone} required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="cta-two-col">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Buying Purpose</label>
                  <select value={purpose} onChange={e => setPurpose(e.target.value)}>
                    <option value="" disabled>Select</option>
                    <option>Investment</option>
                    <option>Self Use</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Budget Range</label>
                  <select value={budget} onChange={e => setBudget(e.target.value)}>
                    <option value="" disabled>Select</option>
                    <option>3M – 5M</option>
                    <option>5M – 7M</option>
                    <option>7M+</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-primary btn-primary--glow" style={{ marginTop: '20px' }}>
                <WhatsAppIcon />
                Send My Enquiry on WhatsApp
              </button>
              <div className="cta-form-trust-row">
                <span>🔒 Secure</span>
                <span>·</span>
                <span>No Spam</span>
                <span>·</span>
                <span>⚡ 15-min Reply</span>
              </div>
              <div className="urgency" style={{ marginTop: '12px' }}>
                <span className="pulse-dot" style={{ background: 'var(--green)' }}></span>
                Limited units · Phase 1 · Act before allocation closes
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

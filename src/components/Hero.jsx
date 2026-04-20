import { useState } from 'react'
import PhonePicker from './PhonePicker'

const WA_NUMBER = '97142947655'

export default function Hero({ openLeadPopup }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState({ code: '+971', number: '' })
  const [purpose, setPurpose] = useState('')
  const [budget, setBudget] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !phone.number) { alert('Please enter your name and WhatsApp number.'); return }
    const msg = encodeURIComponent(
      `Hi, I'm interested in Greenz by Danube.\n\nRequest: Get Details\nName: ${name}\nWhatsApp: ${phone.code}${phone.number}\nPurpose: ${purpose || 'Not specified'}\nBudget: ${budget || 'Not specified'}\n\nPlease share full details.`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
    setName('')
    setPhone({ code: '+971', number: '' })
    setPurpose('')
    setBudget('')
  }

  return (
    <section id="hero">
      <div className="hero-overlay"></div>
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-title">Fully Furnished Townhouses &amp; Villas in Dubai AED 3.5M</h1>
          <button
            className="btn-outline btn-outline-hero"
            style={{ marginTop: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            onClick={() => openLeadPopup('Download Brochure')}
          >
            <DownloadIcon />
            Download Brochure
          </button>
        </div>

        <div className="hero-form">
          <p className="form-title">Get Exclusive Details</p>
          <p className="form-sub">Share your details and we'll respond within minutes</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="h-name">Full Name</label>
              <input type="text" id="h-name" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>WhatsApp Number</label>
              <PhonePicker theme="dark" onPhoneChange={setPhone} required />
            </div>
            <div className="form-group">
              <label htmlFor="h-purpose">Buying Purpose</label>
              <select id="h-purpose" value={purpose} onChange={e => setPurpose(e.target.value)}>
                <option value="" disabled>Select purpose</option>
                <option>Investment</option>
                <option>Self Use</option>
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label htmlFor="h-budget">Budget Range</label>
              <select id="h-budget" value={budget} onChange={e => setBudget(e.target.value)}>
                <option value="" disabled>Select budget</option>
                <option>3M – 5M</option>
                <option>5M – 8M</option>
                <option>7M+</option>
              </select>
            </div>
            <button type="submit" className="btn-primary">
              <WhatsAppIcon />
              Get Details on WhatsApp
            </button>
            <p className="form-note">Your information is secure &amp; confidential</p>
          </form>
        </div>
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

import { useState, useEffect } from 'react'
import PhonePicker from './PhonePicker'

const WA_NUMBER = '97142947655'

export default function LeadPopup({ isOpen, title, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState({ code: '+971', number: '' })
  const [purpose, setPurpose] = useState('')
  const [budget, setBudget] = useState('')

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !phone.number) { alert('Please enter your name and WhatsApp number.'); return }
    const msg = encodeURIComponent(
      `Hi, I'm interested in Greenz by Danube.\n\nRequest: ${title}\nName: ${name}\nWhatsApp: ${phone.code}${phone.number}\nPurpose: ${purpose || 'Not specified'}\nBudget: ${budget || 'Not specified'}\n\nPlease share full details.`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
    onClose()
    setName('')
    setPhone({ code: '+971', number: '' })
    setPurpose('')
    setBudget('')
  }

  return (
    <div
      className={`popup-overlay${isOpen ? ' active' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="popup-box">
        <button className="popup-close" onClick={onClose} aria-label="Close">&times;</button>
        <p className="popup-title">{title || 'Request Details'}</p>
        <p className="popup-sub">Share your details and we'll respond within minutes</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: '14px' }}>
            <label htmlFor="p-name">Full Name</label>
            <input type="text" id="p-name" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group" style={{ marginBottom: '14px' }}>
            <label>WhatsApp Number</label>
            <PhonePicker theme="light" onPhoneChange={setPhone} required />
          </div>
          <div className="form-group" style={{ marginBottom: '14px' }}>
            <label htmlFor="p-purpose">Buying Purpose</label>
            <select id="p-purpose" value={purpose} onChange={e => setPurpose(e.target.value)}>
              <option value="" disabled>Select purpose</option>
              <option>Investment</option>
              <option>Self Use</option>
            </select>
          </div>
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label htmlFor="p-budget">Budget Range</label>
            <select id="p-budget" value={budget} onChange={e => setBudget(e.target.value)}>
              <option value="" disabled>Select budget</option>
              <option>₹3 Cr – ₹5 Cr</option>
              <option>₹5 Cr – ₹8 Cr</option>
              <option>₹8 Cr+</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">
            <WhatsAppIcon />
            Get Details on WhatsApp
          </button>
          <p className="popup-note">Your information is secure &amp; confidential</p>
        </form>
      </div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

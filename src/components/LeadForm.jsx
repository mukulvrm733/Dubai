import { useState } from 'react'
import './LeadForm.css'

const WA_NUMBER = '97142947655'
const SUBMIT_URL = '/submit.php'

export default function LeadForm({ title, sub, btnType = 'wa' }) {
  const [form, setForm]       = useState({ name: '', phone: '', purpose: '', budget: '' })
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const submit = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
    } catch (_) {
      // non-blocking — still open WhatsApp even if backend is unreachable
    }

    const msg = encodeURIComponent(
      `Hi! I'm interested in *Greenz by Danube*.\n\n` +
      `👤 Name: ${form.name}\n📱 WhatsApp: ${form.phone}\n🎯 Purpose: ${form.purpose}\n💰 Budget: ${form.budget}\n\nPlease send me full details.`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
    setLoading(false)
    setForm({ name: '', phone: '', purpose: '', budget: '' })
  }

  return (
    <div className="lead-form">
      <div className="lf-header">
        <h3 className="h3 white">{title}</h3>
        {sub && <p className="lf-sub">{sub}</p>}
      </div>

      <form onSubmit={submit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text" placeholder="Enter your full name" required
            value={form.name} onChange={e => set('name', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>WhatsApp Number <span className="req">★</span></label>
          <input
            type="tel" placeholder="+91 XXXXX XXXXX" required
            value={form.phone} onChange={e => set('phone', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Buying Purpose</label>
          <select required value={form.purpose} onChange={e => set('purpose', e.target.value)}>
            <option value="" disabled>Select purpose</option>
            <option value="Investment">Investment</option>
            <option value="Self Use">Self Use</option>
          </select>
        </div>

        <div className="form-group">
          <label>Budget Range</label>
          <select required value={form.budget} onChange={e => set('budget', e.target.value)}>
            <option value="" disabled>Select budget</option>
            <option>₹3 Cr – ₹5 Cr</option>
            <option>₹5 Cr – ₹8 Cr</option>
            <option>₹8 Cr+</option>
          </select>
        </div>

        {btnType === 'wa' ? (
          <button type="submit" className="btn btn-wa" disabled={loading}>
            <WaIcon />
            {loading ? 'Sending…' : 'Send My Details via WhatsApp'}
          </button>
        ) : (
          <button type="submit" className="btn btn-gold" style={{ width: '100%', marginTop: 4 }} disabled={loading}>
            {loading ? 'Sending…' : 'Get Full Details →'}
          </button>
        )}
      </form>
    </div>
  )
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

import { useState, useRef, useEffect } from 'react'
import { COUNTRIES } from '../data/countries'

export default function PhonePicker({ theme = 'dark', onPhoneChange, required = false }) {
  const [selected, setSelected] = useState(COUNTRIES[0])
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [number, setNumber] = useState('')
  const wrapRef = useRef(null)
  const searchRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setIsOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  useEffect(() => {
    if (isOpen && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 50)
    }
  }, [isOpen])

  const filtered = COUNTRIES.filter(c =>
    !search ||
    c.n.toLowerCase().includes(search.toLowerCase()) ||
    c.c.includes(search)
  )

  const handleSelect = (country) => {
    setSelected(country)
    setIsOpen(false)
    setSearch('')
    onPhoneChange?.({ code: country.c, number, fullNumber: country.c + number })
  }

  const handleNumberChange = (e) => {
    let val = e.target.value.replace(/[^0-9+]/g, '')
    // Auto-detect country from dial code
    if (val.startsWith('+')) {
      const sorted = [...COUNTRIES].sort((a, b) => b.c.length - a.c.length)
      const match = sorted.find(c => val.startsWith(c.c))
      if (match) {
        setSelected(match)
        val = val.slice(match.c.length).trimStart()
      }
    }
    setNumber(val)
    onPhoneChange?.({ code: selected.c, number: val, fullNumber: selected.c + val })
  }

  const wrapClass = [
    'phone-input-wrap',
    theme === 'light' ? 'light' : '',
    isOpen ? 'open' : ''
  ].filter(Boolean).join(' ')

  return (
    <div className={wrapClass} ref={wrapRef}>
      <div className="phone-country-btn" onClick={() => setIsOpen(v => !v)}>
        <span className="phone-flag">{selected.f}</span>
        <span className="phone-dial-code">{selected.c}</span>
        <svg className="phone-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M1 1l4 4 4-4"/>
        </svg>
      </div>
      <input
        type="tel"
        className="phone-number-input"
        placeholder="Enter phone number"
        value={number}
        onChange={handleNumberChange}
        required={required}
      />
      <div className="country-dropdown">
        <div className="country-search-wrap">
          <input
            ref={searchRef}
            type="text"
            className="country-search"
            placeholder="Search country or code…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <ul className="country-list">
          {filtered.map((country, idx) => (
            <li
              key={idx}
              className={country.c === selected.c && country.n === selected.n ? 'c-selected' : ''}
              onClick={() => handleSelect(country)}
            >
              <span className="c-flag-cell">{country.f}</span>
              <span className="c-name-cell">{country.n}</span>
              <span className="c-code-cell">{country.c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

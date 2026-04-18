import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Overview from './components/Overview'
import Payment from './components/Payment'
import Location from './components/Location'
import Amenities from './components/Amenities'
import FloorPlans from './components/FloorPlans'
import Trust from './components/Trust'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LeadPopup from './components/LeadPopup'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const [popupOpen, setPopupOpen] = useState(false)
  const [popupTitle, setPopupTitle] = useState('Request Details')

  const openLeadPopup = (title) => {
    setPopupTitle(title || 'Request Details')
    setPopupOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLeadPopup = () => {
    setPopupOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <Nav openLeadPopup={openLeadPopup} />
      <Hero openLeadPopup={openLeadPopup} />
      <Highlights />
      <Overview openLeadPopup={openLeadPopup} />
      <Payment openLeadPopup={openLeadPopup} />
      <Location />
      <Amenities />
      <FloorPlans openLeadPopup={openLeadPopup} />
      <Trust />
      <FAQ />
      <CTA />
      <Footer />
      <LeadPopup isOpen={popupOpen} title={popupTitle} onClose={closeLeadPopup} />
      <WhatsAppFloat />
    </>
  )
}

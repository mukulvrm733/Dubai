const FAQS = [
  {
    q: 'Where is Greenz by Danube located?',
    a: 'Greenz by Danube is located in Al Rowaiyah First, adjacent to Dubai International Academic City. It offers quick access to Dubai Silicon Oasis (5 minutes), Downtown Dubai (18 minutes), and Dubai International Airport (20 minutes) via E611 and E66 highways.',
  },
  {
    q: 'What unit types are available?',
    a: 'Greenz offers 3-bedroom townhouses (approx. 2,400 sqft), 4-bedroom townhouses (2,750–3,100 sqft), and 5-bedroom semi-detached villas and twin villas (3,700–3,950 sqft). All units are fully furnished with premium Italian Dolce Vita furniture.',
  },
  {
    q: 'What is the payment plan structure?',
    a: 'The payment plan is 70/30: 10% on booking, 60% during construction (via 1% monthly installments over 3 years), and 30% on handover in Q4 2029. This is designed to make premium Dubai real estate accessible without heavy upfront capital.',
  },
  {
    q: 'When is the handover date?',
    a: 'Greenz by Danube is scheduled for handover in Q4 2029. Danube Properties has a strong track record of structured delivery timelines across all 18 of its previously completed projects.',
  },
  {
    q: 'Are the units fully furnished?',
    a: 'Yes. Every unit in Greenz comes fully furnished with premium Italian Dolce Vita furniture — including fitted kitchens, bedroom furniture, and living area furnishings. No additional investment in furniture is required upon handover.',
  },
  {
    q: 'Why invest in Dubai Academic City?',
    a: 'Dubai Academic City is one of the fastest-growing residential corridors in Dubai, with demand driven by 27+ universities and 15+ schools nearby. The area benefits from a young, educated population creating consistent rental demand, and ongoing infrastructure investment projecting strong capital appreciation over the next 5–7 years.',
  },
]

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container">
        <div className="faq-header">
          <h2 className="section-title ss-line-bottom">Frequently Asked Questions (FAQs)</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <details key={i}>
              <summary>{faq.q}</summary>
              <p className="faq-answer">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

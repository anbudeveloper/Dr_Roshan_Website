const faqs = [
  ['Do I need an appointment?', 'Yes. Booking helps us reduce waiting time and prepare the right doctor or treatment room for you.'],
  ['Are treatments painful?', 'Most treatments are planned to be gentle and comfortable, with suitable pain-control options where needed.'],
  ['Do you treat kids?', 'Yes. Kids dentistry is handled with a friendly approach so children feel relaxed during visits.'],
  ['What should I bring?', 'Bring any previous dental reports, X-rays, medicine details and your main dental concern.'],
]

function Faq() {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-head">
          <p className="eyebrow">Patient Questions</p>
          <h2>Before You Visit</h2>
        </div>
        <div className="faq-grid">
          {faqs.map(([question, answer]) => (
            <article key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq

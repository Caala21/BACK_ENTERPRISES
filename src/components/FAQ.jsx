const faqs = [
  ['What do you build?', 'Automation systems (n8n and Python workflows, CRM sync, WhatsApp bots), React websites and installable progressive web apps. Most clients combine two of them.'],
  ['How long does a project take?', 'A single automation takes about a week. A website takes one to two weeks. A full app with automation takes three to five weeks. You get a firm date in your quote.'],
  ['How much does it cost?', 'Packages start at $150 for an automation, $400 for a website and $1,200 for the full bundle. After a short call you get a fixed quote, so there are no surprise invoices.'],
  ['Do you work with clients outside Kenya?', 'Yes. We work remotely with clients worldwide, by email, WhatsApp and video call. Our base is East Africa Time (UTC+3), and we agree overlap hours at the start.'],
  ['What do you need from me?', 'A short description of the process or site you want, access to the tools involved (CRM, Shopify, Google Sheets) and one person who can approve decisions.'],
  ['Who owns the finished work?', 'You do. Code, workflows and accounts are handed over to you at launch with simple documentation.'],
  ['Do you offer support after launch?', 'Yes. Back-up Care covers fixes, updates and monitoring on a monthly plan, or you can book one-off changes as needed.'],
  ['How do I get started?', 'Send an enquiry with the form below or message us on WhatsApp. We reply within one business day.'],
]

export default function FAQ() {
  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">FAQ</div>
          <h2>Questions before you start</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

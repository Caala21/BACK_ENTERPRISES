const plans = [
  {
    name: 'Automation Starter',
    price: 'From $150',
    time: '5-7 days',
    text: 'One workflow built end to end, such as lead capture into your CRM with instant notifications.',
    tags: ['n8n', 'CRM sync', 'Alerts'],
  },
  {
    name: 'Launch Site',
    price: 'From $400',
    time: '7-14 days',
    text: 'A fast React website on Vercel with SEO, a contact form and a WhatsApp button.',
    tags: ['React', 'SEO', 'Vercel'],
  },
  {
    name: 'Full Back Bundle',
    price: 'From $1,200',
    time: '3-5 weeks',
    text: 'An installable web app plus the automation behind it: bots, CRM sync and dashboards.',
    tags: ['PWA', 'Automation', 'Dashboard'],
    featured: true,
  },
]

export default function Packages() {
  return (
    <section id="pricing">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">Packages</div>
          <h2>Clear scopes, clear starting prices</h2>
          <p>Every project gets a fixed quote after a short discovery call. These are the starting points.</p>
        </div>
        <div className="services-grid">
          {plans.map((p) => (
            <div className={`service${p.featured ? ' featured' : ''}`} key={p.name}>
              <h3>{p.name}</h3>
              <div className="price">{p.price}<small>{p.time}</small></div>
              <p>{p.text}</p>
              <div className="also">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
        <p className="plan-note">
          Already launched? <strong>Back-up Care</strong> covers fixes, updates and monitoring from $100 a month.{' '}
          <a href="#contact">Get a quote</a>
        </p>
      </div>
    </section>
  )
}

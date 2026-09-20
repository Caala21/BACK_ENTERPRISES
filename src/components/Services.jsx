const services = [
  {
    num: '01',
    title: 'Automation systems',
    body: "n8n and Python workflows that handle lead capture, invoice reminders, order pipelines and support replies — so recurring tasks stop needing a human.",
    tags: ['n8n', 'Python', 'CRM sync']
  },
  {
    num: '02',
    title: 'Web development',
    body: 'Fast, clean websites and web apps built in React — from a marketing site to a client-facing dashboard — deployed on modern infrastructure.',
    tags: ['React', 'Vite', 'Vercel']
  },
  {
    num: '03',
    title: 'Progressive web apps',
    body: 'Installable, offline-capable apps that behave like native mobile apps without an App Store — one codebase, every device.',
    tags: ['PWA', 'Offline-first', 'Installable']
  }
]

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">What we do</div>
          <h2>Three disciplines, built to work together</h2>
          <p>Most of our engagements combine at least two of these — an automated backend behind a clean front end, shipped as an installable app.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service" key={s.num}>
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="also">
                {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

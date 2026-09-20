const work = [
  {
    category: 'Automation',
    title: 'Lead capture & CRM sync',
    body: 'Inbound leads from a website, WhatsApp or Shopify get logged, tagged and pushed into a CRM automatically, in real time.',
    tags: ['n8n', 'Google Sheets API', 'CRM']
  },
  {
    category: 'Automation',
    title: 'WhatsApp sales & support bots',
    body: 'A FastAPI + Twilio bot that answers common questions instantly and hands off to a human the moment a conversation needs one, backed by a staff dashboard.',
    tags: ['Python', 'FastAPI', 'Twilio']
  },
  {
    category: 'Automation',
    title: 'Content & social scheduling',
    body: 'A scheduling workflow that posts to multiple platforms on a fixed cadence, pulling copy from one shared content sheet.',
    tags: ['n8n', 'OAuth2', 'Scheduling']
  },
  {
    category: 'Automation',
    title: 'E-commerce order pipelines',
    body: 'New Shopify orders trigger notifications and CRM updates automatically — no one has to refresh a dashboard to catch a sale.',
    tags: ['Shopify', 'n8n', 'Notifications']
  },
  {
    category: 'Web',
    title: 'Marketing & product sites',
    body: 'React front ends built for speed and clarity, deployed on modern edge infrastructure with SEO built in from the first commit.',
    tags: ['React', 'Vite', 'SEO']
  },
  {
    category: 'PWA',
    title: 'Installable web apps',
    body: 'Progressive web apps that install straight from the browser, work offline, and update themselves — this site is one.',
    tags: ['PWA', 'Service Worker', 'Offline']
  }
]

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">Capabilities</div>
          <h2>The kind of work we build</h2>
          <p>A sample of the systems we design — each one built to run on its own once it's live.</p>
        </div>
        <div className="work-grid">
          {work.map((w) => (
            <div className="work-card" key={w.title}>
              <div className="work-top">
                <h3>{w.title}</h3>
                <span className="work-category">{w.category}</span>
              </div>
              <p>{w.body}</p>
              <div className="tag-row">
                {w.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    title: 'Discover',
    body: 'We map the manual work and the moving parts — what needs building, what needs automating, and what already works and should be left alone.'
  },
  {
    title: 'Build',
    body: 'Design and development happen together, in short cycles, so what you see early is close to what ships.'
  },
  {
    title: 'Launch',
    body: 'The site, app or workflow goes live on production infrastructure — tested, monitored, and documented.'
  },
  {
    title: 'Support',
    body: 'Once it is live, we stay on to fix, extend and adjust it as the business changes.'
  }
]

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">How we work</div>
          <h2>From manual process to running system</h2>
        </div>
        <div className="process-list">
          {steps.map((s, i) => (
            <div className="process-item" key={s.title}>
              <div className="process-num">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

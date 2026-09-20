export default function Hero() {
  return (
    <section className="hero" style={{ borderTop: 'none' }}>
      <div className="hero-ring" aria-hidden="true"></div>
      <div className="hero-ring two" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow-line"><span className="dash"></span>Automation · Web · Progressive Web Apps</div>
          <h1>We will always <em>have your back.</em></h1>
          <p className="lede">
            Back Enterprise designs and builds the automation systems, websites and
            installable web apps that let a growing business run without
            babysitting its own tech.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">See our work</a>
            <a className="btn btn-ghost" href="#contact">Start a project</a>
          </div>
        </div>
        <div className="badge-wrap" aria-hidden="true">
          <img src="/icons/icon-512.png" alt="" width="320" height="320" />
        </div>
      </div>
    </section>
  )
}

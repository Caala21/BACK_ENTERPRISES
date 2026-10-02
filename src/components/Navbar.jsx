export default function Navbar() {
  return (
    <header className="site">
      <nav>
        <a className="nav-mark" href="#top" aria-label="Back Enterprise home">
          <span className="ring">B.E</span>
          <span>Back Enterprise</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="nav-cta" href="#contact">Start a project</a>
      </nav>
    </header>
  )
}

import { Link } from 'react-router-dom'
import { SITE, waLink } from '../site'
import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrap">
        <div className="footer-top">
          <h2>Have a process that needs automating?</h2>
          <div className="footer-links">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            <a href={`mailto:${SITE.email}`}>Email us</a>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </div>
        </div>
        <SocialLinks />
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Back Enterprise. We will always have your back.</span>
          <span className="footer-legal"><Link to="/privacy">Privacy Policy</Link> | Kenya, serving clients worldwide</span>
        </div>
      </div>
    </footer>
  )
}

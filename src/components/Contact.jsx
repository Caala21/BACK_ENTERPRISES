import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'
import { SITE, waLink } from '../site'
import SocialLinks from './SocialLinks.jsx'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('botcheck')) return // spam trap
    setStatus('sending')
    data.append('access_key', SITE.formKey)
    data.append('subject', 'New enquiry from the Back Enterprise website')
    data.append('from_name', 'Back Enterprise website')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (json.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <div className="section-tag">Contact</div>
          <h2>Tell us what you need built</h2>
          <p>Send an enquiry and we will reply within one business day.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p><FaWhatsapp aria-hidden="true" /> <a href={waLink()} target="_blank" rel="noopener noreferrer">{SITE.phoneDisplay}</a> (WhatsApp)</p>
            <p><FaPhone aria-hidden="true" /> <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></p>
            <p><FaEnvelope aria-hidden="true" /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p>Working with clients worldwide. Based in East Africa (UTC+3).</p>
            <SocialLinks />
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />
            <label>Name
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <label>Email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>What do you need?
              <select name="service" defaultValue="Automation">
                <option>Automation</option>
                <option>Website</option>
                <option>Progressive web app</option>
                <option>Full bundle (app + automation)</option>
                <option>Something else</option>
              </select>
            </label>
            <label>Message
              <textarea name="message" rows="5" required placeholder="Describe the process or project, and any deadline." />
            </label>
            <label className="consent">
              <input type="checkbox" name="consent" required />
              <span>I agree to my details being used to reply to this enquiry, as described in the <Link to="/privacy">Privacy Policy</Link>.</span>
            </label>
            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send enquiry'}
            </button>
            <p className={`form-status ${status === 'sent' ? 'ok' : status === 'error' ? 'err' : ''}`} role="status" aria-live="polite">
              {status === 'sent' && 'Enquiry sent. We will reply within one business day.'}
              {status === 'error' && `Could not send. Please email ${SITE.email} or message us on WhatsApp.`}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

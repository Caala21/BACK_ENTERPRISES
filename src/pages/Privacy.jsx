import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { SITE } from '../site'

export default function Privacy() {
  return (
    <main className="legal">
      <Head>
        <title>Privacy Policy | Back Enterprise</title>
        <meta name="description" content="How Back Enterprise collects, uses and protects personal data." />
      </Head>
      <p><Link to="/">&larr; Back to Back Enterprise</Link></p>
      <h1>Privacy Policy</h1>
      <p>Effective 2 October 2026</p>

      <p>Back Enterprise ("we", "us") builds automation systems, websites and web apps. This policy explains what personal data we collect through {SITE.url.replace('https://', '')}, why, and what your rights are. We handle personal data in line with the Kenya Data Protection Act, 2019, and with other laws that apply to you, such as the GDPR where relevant.</p>

      <h2>1. What we collect</h2>
      <ul>
        <li><strong>Enquiry form:</strong> your name, email address, the service you are interested in, and your message.</li>
        <li><strong>Direct contact:</strong> details you share when you email us, call us or message us on WhatsApp, including your phone number.</li>
        <li><strong>Technical data:</strong> basic information such as IP address, browser type and pages visited, handled by our hosting provider for security and performance.</li>
      </ul>
      <p>We do not ask for sensitive personal data. Please do not include it in your message.</p>

      <h2>2. How we use it</h2>
      <ul>
        <li>To reply to your enquiry and prepare a quote.</li>
        <li>To deliver and support work you have hired us for.</li>
        <li>To keep the site secure and working.</li>
      </ul>
      <p>We do not sell your data and we do not send marketing emails unless you ask us to.</p>

      <h2>3. Who processes it for us</h2>
      <ul>
        <li><strong>Web3Forms</strong> delivers form submissions to our email inbox.</li>
        <li><strong>Vercel</strong> hosts the website.</li>
        <li><strong>Google</strong> provides our email and the fonts loaded on this site.</li>
        <li><strong>WhatsApp (Meta)</strong> processes messages you send us there.</li>
      </ul>
      <p>These providers may process data outside Kenya. We only use them to run the services described above.</p>

      <h2>4. Cookies and local storage</h2>
      <p>This site does not use advertising or tracking cookies. As an installable web app, it stores site files in your browser (a service worker cache) so it loads quickly and works offline. You can clear this in your browser settings at any time.</p>

      <h2>5. How long we keep it</h2>
      <p>Enquiries that do not lead to a project are kept for up to 12 months, then deleted. Project records are kept for as long as needed to support the work and meet legal and accounting obligations.</p>

      <h2>6. Your rights</h2>
      <p>You can ask us to access, correct or delete your personal data, to restrict or object to how we use it, and to withdraw consent at any time. Email us and we will respond within a reasonable time. You may also complain to the Office of the Data Protection Commissioner in Kenya.</p>

      <h2>7. Third-party links</h2>
      <p>Our site links to social profiles and other sites (Instagram, TikTok, Facebook, LinkedIn, GitHub, Fiverr). Their privacy practices are their own.</p>

      <h2>8. Changes</h2>
      <p>If we change this policy, we will update the date above.</p>

      <h2>9. Contact</h2>
      <p>Back Enterprise<br />Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a><br />Phone / WhatsApp: <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></p>
    </main>
  )
}

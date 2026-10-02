import { FaWhatsapp, FaEnvelope, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa'
import { SITE, waLink } from '../site'

const mailLink = `mailto:${SITE.email}?subject=${encodeURIComponent('Enquiry from the Back Enterprise website')}`

const items = [
  { label: 'WhatsApp', href: waLink(), Icon: FaWhatsapp },
  { label: 'Email', href: mailLink, Icon: FaEnvelope },
  { label: 'Instagram', href: SITE.socials.instagram, Icon: FaInstagram },
  { label: 'TikTok', href: SITE.socials.tiktok, Icon: FaTiktok },
  { label: 'Facebook', href: SITE.socials.facebook, Icon: FaFacebookF },
]

export default function SocialLinks() {
  return (
    <ul className="socials">
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
          >
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
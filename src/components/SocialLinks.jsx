import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa'
import { SITE, waLink } from '../site'

const items = [
  { label: 'WhatsApp', href: waLink(), Icon: FaWhatsapp },
  { label: 'Instagram', href: SITE.socials.instagram, Icon: FaInstagram },
  { label: 'TikTok', href: SITE.socials.tiktok, Icon: FaTiktok },
  { label: 'Facebook', href: SITE.socials.facebook, Icon: FaFacebookF },
]

export default function SocialLinks() {
  return (
    <ul className="socials">
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <a href={href} aria-label={label} title={label} target="_blank" rel="noopener noreferrer">
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
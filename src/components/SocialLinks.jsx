import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import { SiFiverr } from 'react-icons/si'
import { SITE, waLink } from '../site'

const items = [
  { label: 'WhatsApp', href: waLink(), Icon: FaWhatsapp },
  { label: 'Email', href: `mailto:${SITE.email}`, Icon: FaEnvelope },
  { label: 'Instagram', href: SITE.socials.instagram, Icon: FaInstagram },
  { label: 'TikTok', href: SITE.socials.tiktok, Icon: FaTiktok },
  { label: 'Facebook', href: SITE.socials.facebook, Icon: FaFacebookF },
  { label: 'LinkedIn', href: SITE.socials.linkedin, Icon: FaLinkedinIn },
  { label: 'GitHub', href: SITE.socials.github, Icon: FaGithub },
  { label: 'Fiverr', href: SITE.socials.fiverr, Icon: SiFiverr },
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

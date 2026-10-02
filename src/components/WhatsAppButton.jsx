import { FaWhatsapp } from 'react-icons/fa'
import { waLink } from '../site'

export default function WhatsAppButton() {
  return (
    <a className="wa-float" href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
      <FaWhatsapp aria-hidden="true" />
    </a>
  )
}

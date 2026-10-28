import { waLink } from '../lib/helpers'
import { WhatsAppIcon } from './Icons'

// Visible on mobile only (hidden from the sm breakpoint upwards).
export default function FloatingWhatsApp({ t }) {
  return (
    <a
      href={waLink(t.hero.waMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.floatingWa}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-wa px-4 py-3 font-bold text-white shadow-xl hover:bg-wa-dark sm:hidden"
    >
      <WhatsAppIcon width={24} height={24} />
      {t.floatingWa}
    </a>
  )
}

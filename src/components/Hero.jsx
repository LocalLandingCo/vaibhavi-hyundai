import { telLink, waLink } from '../lib/helpers'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export default function Hero({ t }) {
  const h = t.hero
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold ring-1 ring-white/25">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
          </span>
          {h.openBadge}
        </span>

        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {h.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-brand-100">{h.subtitle}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#book"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-brand-800 shadow-lg hover:bg-brand-50"
          >
            {h.ctaBook}
          </a>
          <a
            href={telLink}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-ink shadow-lg hover:bg-accent-dark"
          >
            <PhoneIcon /> {h.ctaCall}
          </a>
          <a
            href={waLink(h.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-wa px-6 py-3.5 text-base font-bold text-white shadow-lg hover:bg-wa-dark"
          >
            <WhatsAppIcon /> {h.ctaWhatsapp}
          </a>
        </div>
        <p className="mt-4 text-sm text-brand-100">{h.note}</p>
      </div>
    </section>
  )
}

import { business } from '../content'
import { telLink, waLink } from '../lib/helpers'
import { PhoneIcon, WhatsAppIcon } from './Icons'
import { LogoMark } from './Logo'

export default function Header({ t, lang, setLang }) {
  const next = lang === 'en' ? 'mr' : 'en'
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2.5">
        <a href="#top" className="mr-auto flex min-w-0 items-center gap-2.5 leading-tight">
          <LogoMark size={40} className="shrink-0" />
          <span className="min-w-0">
            <span className="block truncate text-base font-extrabold tracking-wide text-brand-800 sm:text-lg">
              {business.name}
            </span>
            <span className="block truncate text-[11px] text-slate-500 sm:text-xs">{t.ui.logoSub}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex" aria-label="Main">
          {t.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-brand-700">
              {n.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setLang(next)}
          aria-label={t.ui.toggleLabel}
          className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
        >
          {t.ui.toggleTo}
        </button>

        <a
          href={telLink}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-3 py-2 text-sm font-semibold text-white hover:bg-brand-800"
        >
          <PhoneIcon width={16} height={16} />
          <span className="hidden sm:inline">{t.ui.call}</span>
          <span className="sr-only sm:hidden">{t.ui.call}</span>
        </a>

        <a
          href={waLink(t.hero.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-wa px-3 py-2 text-sm font-semibold text-white hover:bg-wa-dark"
        >
          <WhatsAppIcon width={16} height={16} />
          <span className="hidden sm:inline">{t.ui.whatsapp}</span>
          <span className="sr-only sm:hidden">{t.ui.whatsapp}</span>
        </a>
      </div>
    </header>
  )
}

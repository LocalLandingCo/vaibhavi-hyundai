import { useEffect, useState } from 'react'
import { business, links } from '../content'
import { CloseIcon, InstagramIcon, MenuIcon } from './Icons'
import { LogoMark } from './Logo'

// Section links show inline from 900px; below that they sit behind a menu button.
export default function Header({ t, lang, setLang }) {
  const [open, setOpen] = useState(false)
  const next = lang === 'en' ? 'mr' : 'en'

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-2.5">
        <a href="#top" className="mr-auto flex min-w-0 items-center gap-2.5 leading-tight">
          <LogoMark size={40} className="shrink-0" />
          <span className="min-w-0">
            <span className="block truncate text-[15px] font-extrabold tracking-normal text-brand-800 sm:text-lg sm:tracking-wide">
              {business.name}
            </span>
            <span className="block truncate text-[11px] text-slate-500 sm:text-xs min-[900px]:max-lg:hidden">
              {t.ui.logoSub}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-700 min-[900px]:flex lg:gap-5" aria-label="Main">
          {t.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="whitespace-nowrap hover:text-brand-700">
              {n.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setLang(next)}
          aria-label={t.ui.toggleLabel}
          className="shrink-0 rounded-full border border-slate-300 px-2.5 py-1.5 text-sm font-semibold sm:px-3 text-slate-700 hover:bg-slate-100"
        >
          {/* The label is in the other language. */}
          <span lang={next}>{t.ui.toggleTo}</span>
        </button>

        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
          className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-brand-700 min-[900px]:inline-flex"
        >
          <InstagramIcon width={18} height={18} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.ui.close : t.ui.menu}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 min-[900px]:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div id="mobile-nav" className="disclosure min-[900px]:hidden" data-open={open} inert={open ? undefined : ''}>
        <div>
          <nav aria-label="Main" className="mx-auto grid max-w-6xl gap-0.5 px-4 pb-3">
            {t.nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-800"
              >
                {n.label}
              </a>
            ))}
            {/* The header's Instagram icon is hidden below 900px to keep the name readable. */}
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-3 font-semibold text-slate-800 hover:bg-brand-50 hover:text-brand-800"
            >
              <InstagramIcon width={18} height={18} /> Instagram
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

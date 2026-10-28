import { business } from '../content'
import { telLink } from '../lib/helpers'
import { LogoMarkOnDark } from './Logo'

export default function Footer({ t }) {
  const f = t.footer
  return (
    <footer className="bg-ink pb-24 pt-12 text-slate-300 sm:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <LogoMarkOnDark size={48} />
            <div>
              <p className="text-lg font-extrabold tracking-wide text-white">{business.name}</p>
              <p className="text-sm text-slate-400">{business.altName}</p>
            </div>
          </div>
          <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-slate-400">{f.addressTitle}</h3>
          <address className="mt-1 not-italic">
            {business.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-400">{f.contactTitle}</h3>
          <a href={telLink} className="mt-1 block text-lg font-bold text-white hover:underline">
            {business.phoneDisplay}
          </a>
          <p className="mt-2 text-sm">{f.hoursLine}</p>
          <a href="#top" className="mt-4 inline-block text-sm text-accent hover:underline">
            {f.topLink} ↑
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-700 px-4 pt-5 text-xs text-slate-400">
        <p>{f.disclaimer}</p>
      </div>
    </footer>
  )
}

import Section from './Section'
import { WhatsAppIcon } from './Icons'
import { HyundaiBadge, KiaWordmark } from './Logo'
import { waLink } from '../lib/helpers'

// Only Hyundai and Kia are named (from the owner's info). Do NOT add other
// brands or call anything "authorised" unless the owner confirms it.
const logos = { Hyundai: <HyundaiBadge />, Kia: <KiaWordmark /> }

export default function Brands({ t }) {
  const b = t.brands
  return (
    <Section id="brands" title={b.title} subtitle={b.subtitle}>
      <div className="grid gap-4 md:grid-cols-3">
        {b.featured.map((f) => (
          <div key={f.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex h-12 items-center">{logos[f.name]}</div>
            <h3 className="mt-3 text-xl font-extrabold text-ink">{f.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{f.note}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {f.models.map((m) => (
                <li key={m} className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-semibold text-brand-800">
                  {m}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
          <h3 className="text-xl font-extrabold text-ink">{b.moreTitle}</h3>
          <p className="mt-1 text-slate-600">{b.moreText}</p>
          <a
            href={waLink(b.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-wa px-5 py-3 font-bold text-white hover:bg-wa-dark"
          >
            <WhatsAppIcon /> {b.cta}
          </a>
        </div>
      </div>
    </Section>
  )
}

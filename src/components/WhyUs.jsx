import Section from './Section'
import { WhatsAppIcon } from './Icons'
import { waLink } from '../lib/helpers'

export default function WhyUs({ t }) {
  const w = t.why
  return (
    <Section id="why" title={w.title}>
      <div className="grid gap-4 sm:grid-cols-2">
        {w.points.map((p, i) => (
          <div key={p.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-extrabold text-ink">
              {i + 1}
            </span>
            <div>
              <h3 className="font-bold text-ink">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
      <a
        href={waLink(w.waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-wa px-6 py-3 font-bold text-white hover:bg-wa-dark"
      >
        <WhatsAppIcon /> {w.cta}
      </a>
    </Section>
  )
}

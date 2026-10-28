import Section from './Section'
import { WhatsAppIcon } from './Icons'
import { waLink } from '../lib/helpers'

export default function Symptoms({ t }) {
  const s = t.symptoms
  const openService = (id) => window.dispatchEvent(new CustomEvent('open-service', { detail: id }))

  return (
    <Section id="symptoms" title={s.title} subtitle={s.subtitle}>
      <div className="grid gap-4 lg:grid-cols-3">
        {s.groups.map((g) => (
          <div key={g.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wide text-brand-700">{g.title}</h3>
            <ul className="mt-3 divide-y divide-slate-100">
              {g.items.map((it) => (
                <li key={it.text} className="flex items-center gap-2 py-2.5">
                  <button
                    type="button"
                    onClick={() => openService(it.service)}
                    title={s.viewService}
                    className="min-w-0 flex-1 text-left text-sm font-medium text-slate-800 hover:text-brand-700 hover:underline"
                  >
                    {it.text}
                  </button>
                  <a
                    href={waLink(s.waMessage + it.text)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t.ui.askAbout}: ${it.text}`}
                    className="shrink-0 rounded-full p-1.5 text-wa-dark hover:bg-slate-100"
                  >
                    <WhatsAppIcon width={18} height={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

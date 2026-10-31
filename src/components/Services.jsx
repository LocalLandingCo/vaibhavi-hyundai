import { useState } from 'react'
import Section from './Section'
import { CheckIcon, ChevronIcon, ServiceIcon, WhatsAppIcon } from './Icons'
import { waLink, kmTag } from '../lib/helpers'
import { prices } from '../content'

export default function Services({ t }) {
  const [openId, setOpenId] = useState(null)
  const s = t.services

  return (
    <Section id="services" km={kmTag(t, 1)} title={s.title} subtitle={s.subtitle} tone="soft">
      <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-brand-100 bg-white/70 py-2 pl-2 pr-5 text-sm font-semibold text-brand-900 backdrop-blur">
        <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-700 text-white">
          <CheckIcon width={14} height={14} />
        </span>
        {s.genuine}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((item) => {
          const open = openId === item.id
          const panelId = `svc-${item.id}`
          return (
            <article
              key={item.id}
              className="spot group flex flex-col self-start rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex min-h-[8.75rem] w-full items-start gap-3 p-5 text-left"
              >
                <span
                  aria-hidden="true"
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                    open ? 'bg-accent text-ink' : 'bg-brand-50 text-brand-700 group-hover:bg-accent group-hover:text-ink'
                  }`}
                >
                  <ServiceIcon id={item.id} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl font-semibold leading-snug text-ink">{item.title}</span>
                  <span className="mt-0.5 block text-sm text-slate-600">{item.blurb}</span>
                  {prices[item.id] != null && (
                    <span className="mt-1 block text-sm font-bold text-brand-800">
                      {s.priceFrom} ₹{prices[item.id].toLocaleString('en-IN')}
                    </span>
                  )}
                </span>
                <ChevronIcon
                  className={`mt-1 shrink-0 text-brand-700 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
              </button>

              <div className="disclosure" data-open={open}>
                <div id={panelId}>
                  <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {item.list.map((li) => (
                      <li key={li} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {li}
                      </li>
                    ))}
                  </ul>
                  {item.note && (
                    <p lang="mr" className="mt-3 rounded-lg bg-brand-50 p-3 text-sm text-brand-900">
                      {item.note}
                    </p>
                  )}
                  <a
                    href={waLink(`${t.hero.waMessage} (${item.title})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-wa-dark hover:underline"
                  >
                    <WhatsAppIcon width={16} height={16} /> {t.ui.askAbout}
                  </a>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

import { useState } from 'react'
import Section from './Section'
import { ChevronIcon, WhatsAppIcon } from './Icons'
import { waLink } from '../lib/helpers'
import { prices } from '../content'

// Emoji per category id. Swap for SVGs later if you like.
const ICONS = {
  periodic: '🛢️',
  ac: '❄️',
  body: '🎨',
  tyres: '🛞',
  battery: '🔋',
  engine: '⚙️',
  brakes: '🛑',
  detailing: '✨',
  insurance: '🛡️',
}

export default function Services({ t }) {
  const [openId, setOpenId] = useState(null)
  const s = t.services

  return (
    <Section id="services" title={s.title} subtitle={s.subtitle} tone="soft">
      <p className="mb-6 flex items-center gap-2 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm font-semibold text-brand-900">
        <span aria-hidden="true" className="text-lg">✅</span>
        {s.genuine}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {s.items.map((item) => {
          const open = openId === item.id
          const panelId = `svc-${item.id}`
          return (
            <article
              key={item.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex w-full items-start gap-3 p-5 text-left"
              >
                <span className="text-2xl" aria-hidden="true">
                  {ICONS[item.id]}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-bold text-ink">{item.title}</span>
                  <span className="mt-0.5 block text-sm text-slate-600">{item.blurb}</span>
                  {prices[item.id] != null && (
                    <span className="mt-1 block text-sm font-bold text-brand-800">
                      {s.priceFrom} ₹{prices[item.id].toLocaleString('en-IN')}
                    </span>
                  )}
                </span>
                <ChevronIcon
                  className={`mt-1 shrink-0 text-brand-700 transition-transform ${open ? 'rotate-180' : ''}`}
                />
              </button>

              {open && (
                <div id={panelId} className="border-t border-slate-100 px-5 pb-5 pt-4">
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
              )}
            </article>
          )
        })}
      </div>
    </Section>
  )
}

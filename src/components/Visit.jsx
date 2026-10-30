import Section from './Section'
import { business, links } from '../content'
import { telLink, waLink } from '../lib/helpers'
import { PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'

export default function Visit({ t }) {
  const v = t.visit
  const today = new Date().getDay()
  // Show Monday first, Sunday last.
  const order = [1, 2, 3, 4, 5, 6, 0]

  return (
    <Section id="visit" title={v.title}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-bold text-ink">{v.addressTitle}</h3>
            <address className="mt-1 not-italic text-slate-700">
              {business.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href={links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-bold text-ink hover:bg-accent-dark"
              >
                <PinIcon /> {v.directions}
              </a>
              <a
                href={telLink}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-700 px-5 py-3 font-bold text-white hover:bg-brand-800"
              >
                <PhoneIcon /> {v.callCta}
              </a>
              <a
                href={waLink(t.hero.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-wa px-5 py-3 font-bold text-white hover:bg-wa-dark"
              >
                <WhatsAppIcon /> {v.waCta}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="border-b border-slate-100 px-5 py-3 font-bold text-ink">{v.hoursTitle}</h3>
            <table className="w-full text-sm">
              <tbody>
                {order.map((d) => {
                  const closed = d === business.closedDay
                  const isToday = d === today
                  return (
                    <tr
                      key={d}
                      className={`border-b border-slate-100 last:border-0 ${isToday ? 'bg-brand-50 font-semibold' : ''}`}
                    >
                      <th scope="row" className="px-5 py-2.5 text-left font-medium text-slate-800">
                        {v.days[d]}
                        {isToday && (
                          <span className="ml-2 rounded-full bg-hibiscus px-2 py-0.5 text-[10px] font-bold uppercase text-white">
                            {v.today}
                          </span>
                        )}
                      </th>
                      <td className={`px-5 py-2.5 text-right ${closed ? 'font-bold text-red-600' : 'text-green-700'}`}>
                        {closed ? v.closed : v.openHours}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="min-h-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm">
          <iframe
            title={v.mapTitle}
            src={links.mapEmbed}
            className="h-full min-h-[320px] w-full border-0 lg:min-h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  )
}

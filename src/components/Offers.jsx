import Section from './Section'
import { WhatsAppIcon } from './Icons'
import { waLink } from '../lib/helpers'

// Placeholder only. The old 10% offer (Aug–Sep 2023) expired, so it is NOT shown.
// [CONFIRM WITH OWNER] before putting any real offer, price or date here.
export default function Offers({ t }) {
  const o = t.offers
  return (
    <Section id="offers" title={o.title}>
      <div className="rounded-2xl border-2 border-dashed border-accent bg-amber-50 p-6 sm:p-8">
        <h3 className="text-xl font-extrabold text-ink">{o.placeholderTitle}</h3>
        <p className="mt-2 max-w-2xl text-slate-700">{o.placeholderText}</p>
        <a
          href={waLink(o.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-wa px-5 py-3 font-bold text-white hover:bg-wa-dark"
        >
          <WhatsAppIcon /> {o.cta}
        </a>
      </div>
    </Section>
  )
}

import { WhatsAppIcon } from './Icons'
import { HyundaiBadge, KiaWordmark, MarutiSuzukiLogo } from './Logo'
import { waLink } from '../lib/helpers'

// Slim band under the trust strip. Only Hyundai, Kia and Maruti Suzuki are named (from the owner's
// info). Do NOT add other brands or call anything "authorised" unless the owner confirms.
const logos = { Hyundai: <HyundaiBadge />, Kia: <KiaWordmark />, 'Maruti Suzuki': <MarutiSuzukiLogo /> }

export default function Brands({ t }) {
  const b = t.brands
  return (
    <section id="brands" className="scroll-mt-20 border-b border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-bold uppercase tracking-wide text-slate-500">{b.title}</p>
        <div className="mt-4 grid items-center gap-5 sm:grid-cols-3">
          {b.featured.map((f) => (
            <div key={f.name} className="flex h-12 items-center justify-center">
              {logos[f.name]}
            </div>
          ))}
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-600 sm:col-span-3 sm:justify-center">
            <span>{b.moreText}</span>
            <a
              href={waLink(b.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-wa-dark hover:underline"
            >
              <WhatsAppIcon width={16} height={16} /> {b.cta}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

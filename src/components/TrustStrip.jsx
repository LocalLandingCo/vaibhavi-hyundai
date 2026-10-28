import { Stars } from './Icons'

export default function TrustStrip({ t }) {
  return (
    <div className="border-b border-slate-200 bg-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-slate-200 sm:grid-cols-4">
        {t.trust.map((item, i) => (
          <li key={item.big} className="bg-white px-4 py-5 text-center">
            <div className="text-xl font-extrabold text-brand-800 sm:text-2xl">{item.big}</div>
            {i === 0 && <Stars count={5} className="mt-0.5 justify-center text-accent" />}
            <div className="mt-0.5 text-xs text-slate-600 sm:text-sm">{item.small}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

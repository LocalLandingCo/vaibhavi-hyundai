import Section from './Section'
import { Stars } from './Icons'
import { kmTag } from '../lib/helpers'

// Note: individual star ratings per review are not known, so we only show the
// overall 4.8 Google rating, never a star count on each review.
const DEVANAGARI = /[ऀ-ॿ]/

export default function Reviews({ t }) {
  const r = t.reviews
  return (
    <Section id="reviews" km={kmTag(t, 5)} title={r.title} subtitle={r.subtitle} tone="soft">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Stars count={5} className="text-accent" />
        <span className="font-bold text-ink">{r.overall}</span>
        <span className="text-sm text-slate-500">{r.overallNote}</span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {r.items.map((rev) => (
          <blockquote key={rev.name} className="spot flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p lang={DEVANAGARI.test(rev.text) ? 'mr' : undefined} className="flex-1 text-slate-800">
              “{rev.text}”
            </p>
            {rev.translation && <p className="mt-2 text-sm text-slate-500">({rev.translation})</p>}
            <footer className="mt-4 text-sm">
              <span className="font-bold text-ink">{rev.name}</span>
              <span className="text-slate-500"> · {rev.date}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  )
}

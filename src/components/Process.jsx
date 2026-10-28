import Section from './Section'

export default function Process({ t }) {
  const p = t.process
  return (
    <Section id="process" title={p.title} subtitle={p.subtitle}>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {p.steps.map((s, i) => (
          <li key={s.title} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 font-extrabold text-white">
              {i + 1}
            </span>
            <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{s.text}</p>
          </li>
        ))}
      </ol>
      <a
        href="#book"
        className="mt-8 inline-flex items-center rounded-xl bg-brand-700 px-6 py-3 font-bold text-white hover:bg-brand-800"
      >
        {p.cta}
      </a>
    </Section>
  )
}

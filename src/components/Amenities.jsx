import Section from './Section'

// Renders nothing until the owner confirms real amenities in content.js
// (amenities.items), so no unverified claim goes live.
export default function Amenities({ t }) {
  const a = t.amenities
  if (!a?.items?.length) return null
  return (
    <Section id="amenities" title={a.title} subtitle={a.subtitle}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {a.items.map((it) => (
          <li key={it.title} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <span className="text-2xl" aria-hidden="true">
              {it.icon}
            </span>
            <div>
              <h3 className="font-bold text-ink">{it.title}</h3>
              {it.text && <p className="mt-1 text-sm text-slate-600">{it.text}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}

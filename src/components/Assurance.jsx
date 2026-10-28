// Warranty and certification badges. Renders nothing until the owner confirms
// real items in content.js (assurance.items), so no unverified claim goes live.
export default function Assurance({ t }) {
  const items = t.assurance?.items ?? []
  if (items.length === 0) return null
  return (
    <section aria-label="Assurance" className="border-b border-slate-200 bg-brand-50">
      <ul className="mx-auto grid max-w-6xl gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <li key={it.big} className="text-center">
            <p className="text-lg font-extrabold text-brand-800">{it.big}</p>
            <p className="text-sm text-slate-600">{it.small}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

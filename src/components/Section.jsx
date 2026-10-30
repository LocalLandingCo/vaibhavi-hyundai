// A reusable section wrapper: consistent spacing, anchor id, optional heading.
export default function Section({ id, title, subtitle, tone = 'white', children }) {
  const bg = tone === 'soft' ? 'bg-cream' : tone === 'dark' ? 'bg-brand-900 text-white' : 'bg-white'
  return (
    <section id={id} className={`scroll-mt-20 py-14 sm:py-20 ${bg}`}>
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{title}</h2>
            {subtitle && (
              <p className={`mt-2 ${tone === 'dark' ? 'text-brand-100' : 'text-slate-600'}`}>{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

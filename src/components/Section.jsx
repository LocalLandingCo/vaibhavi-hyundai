import { useReveal } from '../lib/hooks'

// A reusable section wrapper: consistent spacing, anchor id, optional heading.
// `km` is the section's kilometre marker (eyebrow + faint numeral), e.g. { label: 'KM 02', num: '02' }.
const TONES = {
  white: 'paper-white',
  soft: 'paper',
  dark: 'paper-dark text-white',
}

export default function Section({ id, title, subtitle, tone = 'white', km, children }) {
  const [ref, inClass] = useReveal()
  const dark = tone === 'dark'
  return (
    <section id={id} className={`scroll-mt-20 overflow-hidden py-16 sm:py-24 ${TONES[tone] ?? TONES.white}`}>
      {km && (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute right-4 top-6 select-none font-display text-[9rem] font-semibold leading-none sm:right-10 sm:text-[15rem] ${
            dark ? 'text-white/[0.05]' : 'text-brand-900/[0.05]'
          }`}
        >
          {km.num}
        </span>
      )}
      <div className="relative mx-auto max-w-6xl px-4">
        {title && (
          <div ref={ref} className={`mb-10 max-w-2xl ${inClass}`}>
            {km && (
              <p
                className={`km-eyebrow mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
                  dark ? 'text-accent' : 'text-brand-700'
                }`}
              >
                {km.label}
              </p>
            )}
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              <span className="mask-line">
                <span>{title}</span>
              </span>
            </h2>
            {subtitle && (
              <p className={`fade-late mt-4 text-base sm:text-lg ${dark ? 'text-brand-100' : 'text-slate-600'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

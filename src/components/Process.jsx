import Section from './Section'
import { useReveal } from '../lib/hooks'
import { kmTag } from '../lib/helpers'

// Each step sits on a small kilometre stone along one road. The road draws itself once
// when the section scrolls into view, then the stones pop in one after another.
const ROAD = {
  backgroundColor: '#0A5A54', // a shade lighter than the dark section so the road reads
  backgroundImage: 'linear-gradient(90deg, #FFB31A 0 24px, transparent 24px 44px)', // accent dashes
  backgroundSize: '44px 3px',
  backgroundPosition: '0 50%',
  backgroundRepeat: 'repeat-x',
}

export default function Process({ t }) {
  const p = t.process
  const [ref, inClass] = useReveal()

  return (
    <Section id="process" km={kmTag(t, 2)} title={p.title} subtitle={p.subtitle} tone="dark">
      <div ref={ref} className={`relative ${inClass}`}>
        <div aria-hidden="true" className="draw-y absolute bottom-6 left-[25px] top-6 w-1.5 rounded-full bg-[#0A5A54] md:hidden" />
        <div aria-hidden="true" className="draw-x absolute left-0 right-0 top-[48px] hidden h-4 rounded-full md:block" style={ROAD} />
        <ol className="relative grid gap-8 md:grid-cols-5 md:gap-6">
          {p.steps.map((s, i) => (
            <li key={s.title} className="pop flex gap-5 md:block" style={{ '--i': i }}>
              <span className="milestone flex h-[74px] w-14 shrink-0 items-end justify-center pb-2 text-2xl font-semibold leading-none text-ink">
                {i + 1}
              </span>
              <div className="pt-2 md:pt-4">
                <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-brand-100">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <a
        href="#book"
        className="btn-lift mt-12 inline-flex items-center rounded-xl bg-accent px-6 py-3 font-bold text-ink hover:bg-accent-dark"
      >
        {p.cta}
      </a>
    </Section>
  )
}

import Section from './Section'
import { PinIcon } from './Icons'
import { asset } from '../lib/helpers'

// TODO: replace the placeholder images with original photos from the owner
// (see README, "Swap in real photos"). Do not hotlink Google images.
export default function Gallery({ t }) {
  const g = t.gallery
  return (
    <Section id="gallery" title={g.title} subtitle={g.subtitle}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {g.items.map((item, i) => {
          const isPlaceholder = item.src.endsWith('placeholder.svg')
          return (
            <figure key={i} className="relative overflow-hidden rounded-xl bg-slate-200">
              <img
                src={asset(item.src)}
                alt={isPlaceholder ? `${item.label} (${g.placeholderTag})` : item.label}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-semibold text-white">
                {item.label}
                {isPlaceholder && (
                  <span className="ml-2 rounded bg-white/25 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide">
                    {g.placeholderTag}
                  </span>
                )}
              </figcaption>
            </figure>
          )
        })}
      </div>
      <a
        href="#visit"
        className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline"
      >
        <PinIcon width={18} height={18} /> {g.cta}
      </a>
    </Section>
  )
}

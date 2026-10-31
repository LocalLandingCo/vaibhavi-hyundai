import { useEffect, useState } from 'react'
import { asset, telLink, waLink } from '../lib/helpers'
import { useShopStatus } from '../lib/hooks'
import { PhoneIcon, WhatsAppIcon } from './Icons'

// Roadside kilometre stone showing where the shop is.
function Milestone({ m, className = '' }) {
  return (
    <div role="img" aria-label={m.label} className={`stone-arrive ${className}`}>
      <div className="milestone flex aspect-[3/4] w-full flex-col items-center px-[8%] text-center font-extrabold uppercase leading-none tracking-tight text-ink">
        <span className="mt-[20%] text-[0.5em]">{m.road}</span>
        <span className="mt-[32%] text-[0.85em]">{m.place}</span>
        <span className="mt-[9%] text-[1.35em]">{m.km}</span>
      </div>
    </div>
  )
}

// Phones get a 9:16 centre crop (~0.3 MB) instead of the 16:9 desktop file (~1.8 MB):
// a portrait hero only ever shows the middle of a landscape frame anyway.
const PHONE = '(max-width: 767px)'
const SLOW = ['slow-2g', '2g', '3g']

// Muted looping background video. The poster image is the real hero (and the LCP); the video
// only starts after the page has finished loading, so it never competes with text, fonts or
// the poster. Skipped entirely (poster only) for reduced motion, data saver and slow networks.
function HeroVideo() {
  const [phone] = useState(() => window.matchMedia(PHONE).matches)
  const [src, setSrc] = useState(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const conn = navigator.connection
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (conn?.saveData || SLOW.includes(conn?.effectiveType)) return
    const start = () =>
      setSrc({
        webm: asset(phone ? 'videos/hero-mobile.webm' : 'videos/hero.webm'),
        mp4: asset(phone ? 'videos/hero-mobile.mp4' : 'videos/hero.mp4'),
      })
    // Wait for the load event, then a quiet moment, before fetching any video bytes.
    let idle
    const later = () => (idle = (window.requestIdleCallback || setTimeout)(start, { timeout: 2000 }))
    if (document.readyState === 'complete') later()
    else window.addEventListener('load', later, { once: true })
    return () => {
      window.removeEventListener('load', later)
      if (idle) (window.cancelIdleCallback || clearTimeout)(idle)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Chosen in JS rather than with <picture>: React sets the img src before the <source>
          is attached, so both posters would download. Matches the preload in index.html. */}
      <img
        src={asset(phone ? 'videos/hero-poster-mobile.jpg' : 'videos/hero-poster.jpg')}
        alt=""
        fetchpriority="high"
        decoding="async"
        className="hero-settle h-full w-full object-cover"
      />
      {src && (
        <video
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${playing ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setPlaying(true)}
        >
          <source src={src.webm} type="video/webm" />
          <source src={src.mp4} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/85 via-brand-800/75 to-brand-700/60" />
    </div>
  )
}

export default function Hero({ t }) {
  const h = t.hero
  const status = useShopStatus(t)
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white">
      <HeroVideo />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pt-16 sm:pt-24 md:grid-cols-[1fr_auto] md:items-end">
        <div className="pb-0 md:pb-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/25">
            <span className="relative flex h-2.5 w-2.5">
              {status.open && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-reduce:hidden" />
              )}
              <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${status.open ? 'bg-green-400' : 'bg-red-400'}`} />
            </span>
            <span>
              <strong className="font-semibold">{status.head}</strong>
              <span className="text-brand-100">, {status.tail}</span>
            </span>
          </span>

          <h1 className="mt-6 max-w-3xl text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {h.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-brand-100 sm:text-xl">{h.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#book"
              className="btn-lift inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-brand-800 shadow-lg hover:bg-brand-50"
            >
              {h.ctaBook}
            </a>
            <a
              href={telLink}
              className="btn-lift inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-ink shadow-lg hover:bg-accent-dark"
            >
              <PhoneIcon /> {h.ctaCall}
            </a>
            <a
              href={waLink(h.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex items-center justify-center gap-2 rounded-xl bg-wa px-6 py-3.5 text-base font-bold text-white shadow-lg hover:bg-wa-dark"
            >
              <WhatsAppIcon /> {h.ctaWhatsapp}
            </a>
          </div>
        </div>

        {/* Stands on the bottom edge of the hero: under the buttons on phones (left, clear of the
            floating WhatsApp button), beside the headline from md up. */}
        <Milestone
          m={t.milestone}
          className="w-[120px] md:justify-self-end text-[18px] sm:w-[150px] sm:text-[22px] md:w-[200px] md:text-[29px] lg:w-[230px] lg:text-[33px]"
        />
      </div>
    </section>
  )
}

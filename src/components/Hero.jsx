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

// Muted looping background video. Skipped (poster only) for reduced-motion and data-saver users.
function HeroVideo() {
  const [play, setPlay] = useState(false)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = navigator.connection?.saveData
    setPlay(!reduce && !saveData)
  }, [])
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <img src={asset('videos/hero-poster.jpg')} alt="" className="h-full w-full object-cover" />
      {play && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={asset('videos/hero-poster.jpg')}
        >
          <source src={asset('videos/hero.webm')} type="video/webm" />
          <source src={asset('videos/hero.mp4')} type="video/mp4" />
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

          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {h.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">{h.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#book"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-bold text-brand-800 shadow-lg hover:bg-brand-50"
            >
              {h.ctaBook}
            </a>
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-ink shadow-lg hover:bg-accent-dark"
            >
              <PhoneIcon /> {h.ctaCall}
            </a>
            <a
              href={waLink(h.waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-wa px-6 py-3.5 text-base font-bold text-white shadow-lg hover:bg-wa-dark"
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

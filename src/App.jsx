import { useEffect, useRef, useState } from 'react'
import { useScrollProgress, useSpotlight } from './lib/hooks'
import { content } from './content'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Assurance from './components/Assurance'
import BookQuote from './components/BookQuote'
import Services from './components/Services'
import Brands from './components/Brands'
import Process from './components/Process'
import Amenities from './components/Amenities'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Visit from './components/Visit'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'mr') return saved
  } catch {
    /* storage can be blocked; ignore */
  }
  return navigator.language?.toLowerCase().startsWith('mr') ? 'mr' : 'en'
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const t = content[lang]
  const progress = useRef(null)
  useSpotlight()
  useScrollProgress(progress)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  return (
    <>
      <div
        ref={progress}
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-accent"
      />
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <TrustStrip t={t} />
        <Assurance t={t} />
        <Brands t={t} />
        <Services t={t} />
        <Process t={t} />
        <BookQuote t={t} lang={lang} />
        <Amenities t={t} />
        <WhyUs t={t} />
        <Reviews t={t} />
        <Gallery t={t} />
        <Visit t={t} />
      </main>
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
      <ScrollToTop t={t} />
    </>
  )
}

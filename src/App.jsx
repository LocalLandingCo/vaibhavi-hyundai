import { useEffect, useState } from 'react'
import { content } from './content'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Assurance from './components/Assurance'
import Booking from './components/Booking'
import Symptoms from './components/Symptoms'
import Services from './components/Services'
import Brands from './components/Brands'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Offers from './components/Offers'
import Visit from './components/Visit'
import EnquiryForm from './components/EnquiryForm'
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
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <TrustStrip t={t} />
        <Assurance t={t} />
        <Booking t={t} />
        <Symptoms t={t} />
        <Services t={t} />
        <Brands t={t} />
        <WhyUs t={t} />
        <Gallery t={t} />
        <Reviews t={t} />
        <Offers t={t} />
        <Visit t={t} />
        <EnquiryForm t={t} />
      </main>
      <Footer t={t} />
      <FloatingWhatsApp t={t} />
      <ScrollToTop t={t} />
    </>
  )
}

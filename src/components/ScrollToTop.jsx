import { useEffect, useState } from 'react'

export default function ScrollToTop({ t }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t.footer.topLink}
      title={t.footer.topLink}
      className="fixed bottom-20 right-4 z-50 hidden h-11 w-11 sm:flex items-center justify-center rounded-full bg-brand-800 text-white shadow-xl hover:bg-brand-900 sm:bottom-6 sm:right-6"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

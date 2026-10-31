import { useEffect, useRef, useState } from 'react'
import { business } from '../content'

const OPEN_HOUR = 10
const CLOSE_HOUR = 20

// Current weekday and hour in India, whatever the visitor's device timezone is.
function indiaNow() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    weekday: 'short',
    hour: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(new Date())
  const get = (type) => parts.find((p) => p.type === type)?.value
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'))
  return { day, hour: Number(get('hour')) }
}

// Live status for the hero, e.g. { open: true, head: 'Open now', tail: 'closes at 8 PM' }.
// Skips the weekly closed day (business.closedDay) and re-checks every minute.
export function useShopStatus(t) {
  const [now, setNow] = useState(indiaNow)
  useEffect(() => {
    const id = setInterval(() => setNow(indiaNow()), 60_000)
    return () => clearInterval(id)
  }, [])

  const s = t.status
  const openDay = (d) => d !== business.closedDay
  if (openDay(now.day) && now.hour >= OPEN_HOUR && now.hour < CLOSE_HOUR) {
    return { open: true, head: s.openNow, tail: s.closesAt }
  }
  if (openDay(now.day) && now.hour < OPEN_HOUR) {
    return { open: false, head: s.closedNow, tail: s.opensToday }
  }
  let next = (now.day + 1) % 7
  while (!openDay(next)) next = (next + 1) % 7
  const tail = next === (now.day + 1) % 7 ? s.opensTomorrow : s.opensOn.replace('{day}', t.visit.days[next])
  return { open: false, head: s.closedNow, tail }
}

// Returns [ref, 'is-in'] once the element has scrolled into view (CSS runs the animation).
export function useReveal() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setInView(true)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -15% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView ? 'is-in' : '']
}

// Cards marked `.spot` get a soft light that follows the pointer (CSS reads --mx / --my).
export function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return
    const move = (e) => {
      const el = e.target.closest?.('.spot')
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    document.addEventListener('pointermove', move, { passive: true })
    return () => document.removeEventListener('pointermove', move)
  }, [])
}

// Thin marigold line across the very top that fills as the page is scrolled.
export function useScrollProgress(ref) {
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (ref.current) ref.current.style.transform = `scaleX(${p})`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [ref])
}

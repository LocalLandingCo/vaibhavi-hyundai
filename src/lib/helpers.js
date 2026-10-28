import { business } from '../content'

// Turn a path like "photos/a.jpg" into a URL that works under ANY Vite base
// ("/repo-name/" on github.io, "/" on a custom domain). Never write "/photos/..." by hand.
export function asset(path) {
  return import.meta.env.BASE_URL + String(path).replace(/^\/+/, '')
}

export const telLink = `tel:${business.phoneTel}`

// wa.me link with a prefilled message. No backend needed.
export function waLink(text = '') {
  const base = `https://wa.me/${business.whatsappNumber}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

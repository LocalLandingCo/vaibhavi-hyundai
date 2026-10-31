const base = { width: 20, height: 20, 'aria-hidden': true, focusable: false }

export const PhoneIcon = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.37 2.3.57 3.6.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1L6.6 10.8z" />
  </svg>
)

export const WhatsAppIcon = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12.04 2a9.9 9.9 0 00-8.5 14.9L2 22l5.25-1.38A9.9 9.9 0 1012.04 2zm0 1.8a8.1 8.1 0 11-4.13 15.07l-.3-.18-3.1.82.83-3.02-.2-.31A8.1 8.1 0 0112.04 3.8zm-3.1 4.1c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.8 2.86 4.4 3.9 2.15.85 2.59.68 3.06.64.47-.04 1.5-.61 1.71-1.2.21-.6.21-1.1.15-1.2-.06-.11-.23-.17-.49-.3-.26-.13-1.5-.74-1.74-.82-.23-.09-.4-.13-.57.13-.17.26-.65.82-.8.99-.15.17-.3.19-.55.06-.26-.13-1.08-.4-2.05-1.27-.76-.68-1.27-1.51-1.42-1.77-.15-.26-.02-.4.11-.52.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.57-1.4-.79-1.9-.2-.5-.42-.43-.57-.44h-.49z" />
  </svg>
)

export const PinIcon = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z" />
  </svg>
)

export const StarIcon = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7.1L12 17.6 5.7 21.3l1.7-7.1L2 9.5l7.1-.6L12 2z" />
  </svg>
)

export const ChevronIcon = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export const ClockIcon = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export const Stars = ({ count = 5, className = '' }) => (
  <span className={`inline-flex ${className}`} aria-hidden="true">
    {Array.from({ length: count }).map((_, i) => (
      <StarIcon key={i} width={16} height={16} />
    ))}
  </span>
)

export const InstagramIcon = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export const MenuIcon = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
)

export const CheckIcon = (p) => (
  <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

// One custom line icon per service. Every shape carries pathLength=1 so the stroke can draw itself on hover.
const P = { pathLength: 1 }
const SERVICE_SHAPES = {
  periodic: (
    <>
      <path {...P} d="M12 3.5c3 3.6 5.5 6.3 5.5 9.4a5.5 5.5 0 11-11 0c0-3.1 2.5-5.8 5.5-9.4z" />
      <path {...P} d="M9.5 13.5a2.5 2.5 0 002.5 2.5" />
    </>
  ),
  ac: (
    <>
      <path {...P} d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
      <path {...P} d="M9.5 4.8L12 6.5l2.5-1.7M9.5 19.2L12 17.5l2.5 1.7" />
    </>
  ),
  body: (
    <>
      <path {...P} d="M3 13.5l1.7-4.7A2 2 0 016.6 7.5h10.8a2 2 0 011.9 1.3L21 13.5V17a1 1 0 01-1 1h-1M3 13.5V17a1 1 0 001 1h1M3 13.5h18M9 18h6" />
      <circle {...P} cx="7" cy="18" r="2" />
      <circle {...P} cx="17" cy="18" r="2" />
    </>
  ),
  tyres: (
    <>
      <circle {...P} cx="12" cy="12" r="9" />
      <circle {...P} cx="12" cy="12" r="3" />
      <path {...P} d="M12 3v6M12 15v6M3 12h6M15 12h6" />
    </>
  ),
  battery: (
    <>
      <rect {...P} x="3" y="8" width="18" height="11" rx="2" />
      <path {...P} d="M7 8V5.5h3V8M14 8V5.5h3V8M7.5 13.5h3M9 12v3M14 13.5h3" />
    </>
  ),
  engine: (
    <>
      <circle {...P} cx="12" cy="12" r="3" />
      <circle {...P} cx="12" cy="12" r="6.5" />
      <path {...P} d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
    </>
  ),
  brakes: (
    <>
      <circle {...P} cx="12" cy="12" r="9" />
      <circle {...P} cx="12" cy="12" r="2.2" />
      <circle {...P} cx="12" cy="6.8" r="0.9" />
      <circle {...P} cx="12" cy="17.2" r="0.9" />
      <circle {...P} cx="6.8" cy="12" r="0.9" />
      <circle {...P} cx="17.2" cy="12" r="0.9" />
    </>
  ),
  detailing: (
    <path {...P} d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.7 1.8 1.8.7-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7L19 16z" />
  ),
  insurance: (
    <>
      <path {...P} d="M12 3l7.5 2.8v5.7c0 4.5-3.1 8.1-7.5 9.5-4.4-1.4-7.5-5-7.5-9.5V5.8L12 3z" />
      <path {...P} d="M8.8 12l2.2 2.2 4.2-4.4" />
    </>
  ),
}

export const ServiceIcon = ({ id, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className={`svc-icon ${className}`}
  >
    {SERVICE_SHAPES[id]}
  </svg>
)

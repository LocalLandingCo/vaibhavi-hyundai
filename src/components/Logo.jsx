// Vaibhavi Automotive logo: gear + road-V mark, with optional wordmark.
export function LogoMark({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Vaibhavi Automotive logo"
      className={className}
    >
      <circle
        cx="60"
        cy="60"
        r="53"
        fill="none"
        stroke="#04403D"
        strokeWidth="12"
        strokeDasharray="8 5.875"
        transform="rotate(-94.3 60 60)"
      />
      <circle cx="60" cy="60" r="50" fill="#04403D" />
      <circle cx="60" cy="60" r="41" fill="none" stroke="#FFB31A" strokeWidth="2.2" />
      <g transform="translate(22.8 21.56) scale(0.62)">
        <path d="M22 26 H44 L60 72 L76 26 H98 L70 98 H50 Z" fill="#fff" />
        <rect x="57" y="29" width="6" height="12" rx="2" fill="#FFB31A" />
        <rect x="58" y="47" width="4" height="8" rx="1.5" fill="#FFB31A" />
        <rect x="59" y="60" width="2.4" height="5" rx="1" fill="#FFB31A" />
      </g>
    </svg>
  )
}

// On dark backgrounds the dark gear ring would vanish, so sit it on a white disc.
export function LogoMarkOnDark({ size = 44 }) {
  return (
    <span className="inline-flex rounded-full bg-white p-0.5">
      <LogoMark size={size} />
    </span>
  )
}

export function HyundaiBadge({ className = '' }) {
  return <img src={`${import.meta.env.BASE_URL}brands/hyundai.png`} alt="Hyundai" className={`h-12 w-auto object-contain ${className}`} />
}

export function KiaWordmark({ className = '' }) {
  return <img src={`${import.meta.env.BASE_URL}brands/kia.jpg`} alt="Kia" className={`h-12 w-auto object-contain ${className}`} />
}

export function MarutiSuzukiLogo({ className = '' }) {
  return <img src={`${import.meta.env.BASE_URL}brands/maruti-suzuki.svg`} alt="Maruti Suzuki" className={`w-28 object-contain ${className}`} />
}

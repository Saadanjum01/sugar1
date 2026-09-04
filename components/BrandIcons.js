/**
 * Custom line-icon set matching the brand guide spec exactly:
 * 24×24 grid · 1.6px stroke · rounded caps & joins · never filled
 * Tile: 46px container, 12px radius, Tint (#E2F3F0) bg, icon at 23px in Primary Teal
 */

const STROKE = { fill: 'none', strokeWidth: '1.6', strokeLinecap: 'round', strokeLinejoin: 'round', stroke: 'currentColor' }

export function IconEye({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M2 12s3.6-6.2 10-6.2S22 12 22 12s-3.6 6.2-10 6.2S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  )
}

export function IconGlasses({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <circle cx="6" cy="14" r="3.6" />
      <circle cx="18" cy="14" r="3.6" />
      <path d="M9.6 13.6c0-1 1.1-1.7 2.4-1.7s2.4.7 2.4 1.7" />
      <path d="M2.4 13.4 4.2 8.2" />
      <path d="M21.6 13.4 19.8 8.2" />
    </svg>
  )
}

export function IconLens({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M12 4.2c3.9 0 6.9 3.5 6.9 7.9s-3 7.9-6.9 7.9-6.9-3.5-6.9-7.9S8.1 4.2 12 4.2z" />
      <path d="M8.8 10c.8-1.2 2-1.9 3.3-1.9" />
    </svg>
  )
}

export function IconFamily({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <circle cx="8.5" cy="7.6" r="3.1" />
      <circle cx="17.2" cy="9.8" r="2.3" />
      <path d="M2.6 20c0-3.2 2.6-5.8 5.9-5.8s5.9 2.6 5.9 5.8" />
      <path d="M15.6 20c0-2.3 1.4-4 3.3-4s2.5 1.7 2.5 4" />
    </svg>
  )
}

export function IconDrop({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M12 3.4s5.6 6.1 5.6 9.7a5.6 5.6 0 0 1-11.2 0C6.4 9.5 12 3.4 12 3.4z" />
      <path d="M9.4 13.6a2.7 2.7 0 0 0 2.6 2.6" />
    </svg>
  )
}

export function IconPulse({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M2.5 12h4.2l2.4-6.4 4.2 12.8 2.4-6.4h6.3" />
    </svg>
  )
}

export function IconMigraine({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <circle cx="11" cy="11.6" r="5.4" />
      <path d="M11 17v4" />
      <path d="M18.4 6.6a7.2 7.2 0 0 1 0 10" />
      <path d="M21.2 3.8a11 11 0 0 1 0 15.6" />
    </svg>
  )
}

export function IconTarget({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="4.8" />
      <circle cx="12" cy="12" r="1.3" />
    </svg>
  )
}

export function IconBolt({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M13.4 2.6 4.6 13.9h6.1L10 21.4l9-11.3h-6.3z" />
    </svg>
  )
}

export function IconCal({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <rect x="3.3" y="5" width="17.4" height="16" rx="2.4" />
      <path d="M3.3 10h17.4" />
      <path d="M8.2 3v4" />
      <path d="M15.8 3v4" />
    </svg>
  )
}

export function IconCheck({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor">
      <path d="M20 6.5 9.4 17.5 4 12.1" />
    </svg>
  )
}

export function IconGlobe({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a13.5 13.5 0 0 1 0 18" />
      <path d="M12 3a13.5 13.5 0 0 0 0 18" />
    </svg>
  )
}

export function IconPin({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M12 21.5s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11z" />
      <circle cx="12" cy="10.4" r="2.6" />
    </svg>
  )
}

export function IconPhone({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M21 16.4v2.8a1.9 1.9 0 0 1-2.1 1.9 18.7 18.7 0 0 1-8.2-2.9 18.4 18.4 0 0 1-5.7-5.7A18.7 18.7 0 0 1 2.1 4.2 1.9 1.9 0 0 1 4 2.1h2.8a1.9 1.9 0 0 1 1.9 1.6c.1 1 .3 1.9.6 2.8a1.9 1.9 0 0 1-.4 2L7.6 9.7a15 15 0 0 0 5.7 5.7l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.5 2.8.6a1.9 1.9 0 0 1 1.7 1.9z" />
    </svg>
  )
}

export function IconClock({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 6.9V12l3.3 2" />
    </svg>
  )
}

export function IconHeart({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M12 20.3s-7.6-4.7-7.6-10a4.4 4.4 0 0 1 7.6-3 4.4 4.4 0 0 1 7.6 3c0 5.3-7.6 10-7.6 10z" />
    </svg>
  )
}

export function IconShield({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M12 21.4s7.4-3.6 7.4-9.4V5.6L12 2.6 4.6 5.6V12c0 5.8 7.4 9.4 7.4 9.4z" />
      <path d="M9.2 11.8 11.4 14l3.6-3.8" />
    </svg>
  )
}

export function IconId({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <rect x="2.8" y="4.6" width="18.4" height="14.8" rx="2.4" />
      <circle cx="8.6" cy="11" r="2.2" />
      <path d="M5 16.4c.5-1.5 1.9-2.4 3.6-2.4s3.1.9 3.6 2.4" />
      <path d="M15 10.2h4" />
      <path d="M15 13.8h4" />
    </svg>
  )
}

export function IconList({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M8.6 6.5h12" />
      <path d="M8.6 12h12" />
      <path d="M8.6 17.5h12" />
      <circle cx="4.2" cy="6.5" r="1.1" />
      <circle cx="4.2" cy="12" r="1.1" />
      <circle cx="4.2" cy="17.5" r="1.1" />
    </svg>
  )
}

export function IconSpark({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M12 3.2 13.7 9l5.8 1.7-5.8 1.7L12 18.2l-1.7-5.8L4.5 10.7 10.3 9z" />
    </svg>
  )
}

export function IconCar({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M3 12.6 5 7.2A2 2 0 0 1 6.9 6h10.2a2 2 0 0 1 1.9 1.2l2 5.4" />
      <path d="M3 12.6h18v4.2a1.2 1.2 0 0 1-1.2 1.2H4.2A1.2 1.2 0 0 1 3 16.8z" />
      <circle cx="7.2" cy="15" r="1" />
      <circle cx="16.8" cy="15" r="1" />
    </svg>
  )
}

export function IconCash({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <rect x="2.6" y="6" width="18.8" height="12" rx="2.2" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  )
}

export function IconCardPay({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <rect x="2.6" y="5" width="18.8" height="14" rx="2.4" />
      <path d="M2.6 9.8h18.8" />
    </svg>
  )
}

export function IconWallet({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M3 7.2A2.2 2.2 0 0 1 5.2 5h13.6A2.2 2.2 0 0 1 21 7.2v9.6a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 16.8z" />
      <path d="M16.4 12.6a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" />
    </svg>
  )
}

export function IconSend({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...STROKE}>
      <path d="M21 3.4 10.6 13.8" />
      <path d="M21 3.4 14.4 21l-3.8-7.2L3.4 10z" />
    </svg>
  )
}

/** Standard brand icon tile — 46px, 12px radius, Tint bg, Primary Teal icon */
export function IconTile({ children, className = '' }) {
  return (
    <div
      className={`w-[46px] h-[46px] rounded-xl bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62] ${className}`}
    >
      {children}
    </div>
  )
}

/** Terracotta accent tile — for numbered steps & kicker badges */
export function AccentTile({ children, className = '' }) {
  return (
    <div
      className={`w-[46px] h-[46px] rounded-xl bg-[#F4E1D8] flex items-center justify-center shrink-0 text-[#B85E31] font-bold text-sm ${className}`}
    >
      {children}
    </div>
  )
}

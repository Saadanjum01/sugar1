import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BRANDS } from '@/lib/brands'

// Typographic panel tones, cycled by brand position so neighbouring cards never match.
const TONES = [
  { bg: '#093F42', fg: '#FBF7F1', ring: '#37B2B8', eyebrow: '#37B2B8' },
  { bg: '#FBF7F1', fg: '#093F42', ring: '#B85E31', eyebrow: '#B85E31' },
  { bg: '#E2F3F0', fg: '#0D5D62', ring: '#37B2B8', eyebrow: '#0D5D62' },
  { bg: '#0D5D62', fg: '#FFFFFF', ring: '#FBF7F1', eyebrow: '#C9E5E3' },
  { bg: '#F4E1D8', fg: '#16201E', ring: '#B85E31', eyebrow: '#B85E31' },
  { bg: '#16201E', fg: '#FBF7F1', ring: '#B85E31', eyebrow: '#E2895B' },
  { bg: '#E7EBEA', fg: '#16201E', ring: '#6E7C77', eyebrow: '#0D5D62' },
]

/** Brand hero image, or a typographic panel when the brand has no imagery yet. */
export function BrandPanel({ brand, hero = false, className = '' }) {
  if (brand.heroImage) {
    return (
      <div className={`relative overflow-hidden bg-[#E7EBEA] ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brand.heroImage}
          alt={brand.heroAlt || `${brand.name} eyewear`}
          loading={hero ? 'eager' : 'lazy'}
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
        />
      </div>
    )
  }

  const t = TONES[BRANDS.findIndex((b) => b.slug === brand.slug) % TONES.length]
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ background: t.bg, color: t.fg }}
      role="img"
      aria-label={`${brand.name} eyewear`}
    >
      {/* Lens rings, echoing the site's CTA motif */}
      <svg
        className={`absolute pointer-events-none ${hero ? '-right-24 -bottom-24 w-[420px] h-[420px]' : '-right-16 -bottom-16 w-[240px] h-[240px]'}`}
        viewBox="0 0 200 200" fill="none" aria-hidden="true" style={{ opacity: 0.22 }}
      >
        <circle cx="100" cy="100" r="96" stroke={t.ring} strokeWidth="1.2" />
        <circle cx="100" cy="100" r="70" stroke={t.ring} strokeWidth="1.2" />
        <circle cx="100" cy="100" r="44" stroke={t.ring} strokeWidth="1.2" />
      </svg>
      <div
        className={`absolute rounded-[14px] pointer-events-none ${hero ? 'inset-4 sm:inset-5' : 'inset-3'}`}
        style={{ border: `1px solid ${t.fg}`, opacity: 0.14 }}
        aria-hidden="true"
      />
      <span
        className={`absolute font-semibold uppercase tracking-[0.18em] ${hero ? 'top-8 left-8 sm:top-10 sm:left-10 text-[12px]' : 'top-6 left-6 text-[10.5px]'}`}
        style={{ color: t.eyebrow }}
        aria-hidden="true"
      >
        {brand.category}
      </span>
      <div className="relative text-center px-8" aria-hidden="true">
        <span
          className={`block font-display font-medium [text-wrap:balance] ${hero ? 'text-[44px] sm:text-[64px] lg:text-[72px]' : 'text-[30px] sm:text-[34px]'}`}
          style={{ letterSpacing: '-0.035em', lineHeight: 1 }}
        >
          {brand.name}
        </span>
        <span
          className={`block mx-auto h-px ${hero ? 'w-14 mt-6' : 'w-10 mt-4'}`}
          style={{ background: t.eyebrow }}
        />
      </div>
    </div>
  )
}

export default function BrandCard({ brand }) {
  return (
    <Link
      href={`/frames/${brand.slug}`}
      className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-0.5"
      style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
    >
      <BrandPanel brand={brand} className="aspect-[4/3] hover-scale-image" />
      <div className="px-6 py-5 flex flex-col gap-1.5 flex-1">
        <p className="text-[12.5px] font-semibold text-[#37B2B8]">{brand.category}</p>
        <h3 className="font-display font-semibold text-[19px] text-[#093F42]" style={{ letterSpacing: '-0.02em' }}>
          {brand.name}
        </h3>
        <p className="text-sm text-[#6E7C77] leading-relaxed">{brand.tagline}</p>
        <span className="mt-auto pt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0D5D62] group-hover:text-[#37B2B8] transition-colors">
          View brand <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  )
}

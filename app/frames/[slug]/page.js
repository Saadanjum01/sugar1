import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { IconGlasses, IconCheck } from '@/components/BrandIcons'
import BrandCard, { BrandPanel } from '@/components/BrandCard'
import BrandVideo from '@/components/BrandVideo'
import { BRANDS, getBrand } from '@/lib/brands'

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const brand = getBrand(slug)
  if (!brand) return {}
  const kind = brand.category === 'Safety' ? 'Safety Eyewear' : 'Eyeglasses & Sunglasses'
  return {
    title: `${brand.name} ${kind} in Sugar Land, TX | First Colony Vision`,
    description: `${brand.tagline} Try ${brand.name} frames on at First Colony Vision in Sugar Land, TX. Our opticians help with fit, lenses and vision insurance benefits.`,
  }
}

// Up to 4 other brands: same category first, then the next brands in list order.
function relatedBrands(brand) {
  const i = BRANDS.indexOf(brand)
  const rest = [...BRANDS.slice(i + 1), ...BRANDS.slice(0, i)]
  return [
    ...rest.filter((b) => b.category === brand.category),
    ...rest.filter((b) => b.category !== brand.category),
  ].slice(0, 4)
}

const GALLERY_COLS = { 1: 'max-w-[580px]', 2: 'sm:grid-cols-2' }

export default async function BrandPage({ params }) {
  const { slug } = await params
  const brand = getBrand(slug)
  if (!brand) notFound()

  const gallery = brand.gallery || []
  const videos = brand.videos || []

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#FBF7F1] border-b border-[#E7EBEA]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-12 pb-14 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-[13.5px] text-[#6E7C77] mb-6">
              <Link href="/frames" className="hover:text-[#0D5D62] transition-colors">Frame brands</Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="text-[#16201E]">{brand.name}</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
              <IconGlasses size={15} className="text-[#B85E31]" />
              {brand.category}
            </div>
            <h1
              className="font-display text-[38px] sm:text-[50px] text-[#16201E] mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              {brand.name}
            </h1>
            <p className="text-[#6E7C77] text-[16.5px] sm:text-[18px] leading-relaxed max-w-md">
              {brand.tagline}
            </p>
          </div>
          <div className="rounded-[20px] overflow-hidden" style={{ boxShadow: '0 26px 52px -24px rgba(13,93,98,.28)' }}>
            <BrandPanel brand={brand} hero className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* About + what to look for */}
      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <h2 className="font-display text-[26px] sm:text-[38px] text-[#16201E] mb-6" style={{ letterSpacing: '-0.03em' }}>
              About {brand.name}
            </h2>
            {brand.about.map((p) => (
              <p key={p.slice(0, 24)} className="text-[16px] text-[#6E7C77] leading-relaxed mb-5 last:mb-0 max-w-[580px]">
                {p}
              </p>
            ))}
          </div>
          <div
            className="bg-[#E2F3F0] rounded-2xl p-6 sm:p-8"
          >
            <h3 className="font-display font-semibold text-[19px] text-[#093F42] mb-5" style={{ letterSpacing: '-0.02em' }}>
              Signature styles &amp; what to look for
            </h3>
            <ul className="flex flex-col gap-3.5">
              {brand.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[15px] font-medium text-[#16201E] leading-snug">
                  <IconCheck size={18} className="text-[#0D5D62] shrink-0 mt-px" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery (only when there is more to show than the hero) */}
      {(gallery.length > 0 || videos.length > 0) && (
        <section className="pb-16 sm:pb-20 lg:pb-[100px]">
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
            <h2 className="font-display text-[24px] sm:text-[30px] text-[#16201E] mb-6 sm:mb-8" style={{ letterSpacing: '-0.03em' }}>
              {brand.name} in the spotlight
            </h2>
            {videos.length > 0 && (
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-[18px] sm:gap-6 ${gallery.length ? 'mb-[18px] sm:mb-6' : ''}`}>
                {videos.map((v) => (
                  <BrandVideo key={v.src} src={v.src} poster={v.poster} label={v.label} className="aspect-video rounded-2xl" />
                ))}
              </div>
            )}
            {gallery.length > 0 && (
              <div className={`grid grid-cols-1 gap-[18px] sm:gap-6 ${GALLERY_COLS[gallery.length] || 'sm:grid-cols-2 lg:grid-cols-3'}`}>
                {gallery.map((img) => (
                  <div key={img.src} className={`rounded-2xl overflow-hidden aspect-square ${img.contain ? 'bg-white border border-[#E7EBEA]' : 'bg-[#E7EBEA]'}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.src} alt={img.alt} loading="lazy" className={img.contain ? 'w-full h-full object-contain p-6 sm:p-10' : 'w-full h-full object-cover object-[50%_30%]'} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Try-on CTA */}
      <section className="pb-16 sm:pb-20 lg:pb-[100px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="relative rounded-[24px] overflow-hidden text-center bg-[#0D5D62] px-6 py-14 sm:px-12 sm:py-16">
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[.1] pointer-events-none"
              viewBox="0 0 200 200" fill="none" aria-hidden="true"
            >
              <circle cx="100" cy="100" r="96" stroke="white" strokeWidth="1.4" />
              <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="1.4" />
              <circle cx="100" cy="100" r="44" stroke="white" strokeWidth="1.4" />
            </svg>
            <div className="relative z-10 max-w-[540px] mx-auto">
              <h2 className="font-display text-[30px] sm:text-[36px] text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
                Try them on at First Colony Vision
              </h2>
              <p className="text-[#C9E5E3] text-[16px] mb-8 leading-relaxed">
                Stop by our Sugar Land optical to see current {brand.name} styles in person. Our opticians help with fit,
                lenses and using your vision insurance benefits.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0D5D62] rounded-xl text-[14.5px] font-semibold hover:bg-white/90 transition-opacity"
                >
                  Book an Appointment
                </Link>
                <a
                  href="tel:281-916-2020"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white rounded-xl text-[14.5px] font-semibold hover:bg-white/10 transition-colors"
                >
                  Call 281-916-2020
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More brands */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-[#FBF7F1]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <h2 className="font-display text-[26px] sm:text-[38px] text-[#16201E]" style={{ letterSpacing: '-0.03em' }}>
              More brands we carry
            </h2>
            <Link href="/frames" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#0D5D62] hover:text-[#093F42] transition-colors">
              <ArrowLeft size={15} /> All frame brands
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] sm:gap-6">
            {relatedBrands(brand).map((b) => (
              <BrandCard key={b.slug} brand={b} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

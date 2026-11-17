import Link from 'next/link'
import { IconGlasses, IconCheck } from '@/components/BrandIcons'
import BrandCard from '@/components/BrandCard'
import { BRANDS } from '@/lib/brands'

export const metadata = {
  title: 'Eyeglass & Sunglass Frame Brands in Sugar Land, TX | First Colony Vision',
  description:
    'Browse the frame brands we carry at our Sugar Land optical, from Ray-Ban, Oakley and Nike to Versace, Ferragamo and Flexon. Try them on in person; our opticians help with fit, lenses and vision insurance benefits.',
}

export default function FramesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Page header */}
      <div className="bg-[#FBF7F1] border-b border-[#E7EBEA]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-16 pb-14 lg:pt-20 lg:pb-16">
          <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
            <IconGlasses size={15} className="text-[#B85E31]" />
            Frame brands
          </div>
          <h1
            className="font-display text-[38px] sm:text-[50px] text-[#16201E] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Frames worth trying on
          </h1>
          <p className="text-[#6E7C77] text-[16.5px] leading-relaxed max-w-xl mb-7">
            These are the brands we carry at our Sugar Land optical, from everyday classics to luxury and sport.
            Come in and try them on. Our opticians will help you with fit and lenses, and your vision insurance
            benefits can usually be applied to new frames.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-7 gap-y-3">
            {['Try frames on in person', 'Expert fit and lens advice', 'Vision insurance benefits applied'].map((point) => (
              <div key={point} className="flex items-center gap-2.5 text-[14.5px] font-medium text-[#16201E]">
                <IconCheck size={18} className="text-[#37B2B8] shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand grid */}
      <section className="py-16 sm:py-20 lg:py-[100px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[18px] sm:gap-6">
            {BRANDS.map((brand) => (
              <BrandCard key={brand.slug} brand={brand} />
            ))}
          </div>
          <p className="text-center text-[14px] text-[#6E7C77] mt-10 max-w-xl mx-auto leading-relaxed">
            Styles change often, so ask us about current frames in store. Looking for a brand you don&apos;t see here?{' '}
            <a href="tel:281-916-2020" className="font-semibold text-[#0D5D62] hover:text-[#093F42]">Give us a call</a>.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-24 lg:pb-[100px]">
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
                Find your next pair
              </h2>
              <p className="text-[#C9E5E3] text-[16px] mb-8 leading-relaxed">
                Book a visit and try frames on in person. We&apos;ll check your vision benefits so you know what&apos;s covered.
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
    </div>
  )
}

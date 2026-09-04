import Link from 'next/link'
import { IconEye, IconCal } from '@/components/BrandIcons'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative overflow-hidden text-center"
        style={{ background: 'linear-gradient(120deg, #062931 0%, #083438 42%, #0D5D62 70%, #37B2B8 100%)' }}
      >
        <svg
          className="absolute top-[-120px] right-[-120px] w-[460px] h-[460px] opacity-40 z-0 pointer-events-none"
          viewBox="0 0 200 200" fill="none" aria-hidden="true"
        >
          <circle cx="100" cy="100" r="96" stroke="white" strokeWidth="1" strokeOpacity=".5" />
          <circle cx="100" cy="100" r="72" stroke="white" strokeWidth="1" strokeOpacity=".5" />
          <circle cx="100" cy="100" r="48" stroke="#E2895B" strokeWidth="1.4" />
        </svg>

        <div className="relative z-10 max-w-[560px] mx-auto px-5 sm:px-8 pt-24 sm:pt-32 pb-20 sm:pb-28">
          <div className="w-16 h-16 rounded-full bg-white/15 border border-white/25 flex items-center justify-center mx-auto mb-6">
            <IconEye size={28} className="text-white" />
          </div>
          <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-white mb-4">
            <span className="w-[7px] h-[7px] rounded-full bg-[#E2895B] shrink-0" />
            Page not found
          </div>
          <h1
            className="font-display text-[38px] sm:text-[50px] text-white mb-4"
            style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            We couldn&apos;t find that page.
          </h1>
          <p className="text-[16.5px] max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.84)' }}>
            The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#093F42] rounded-xl text-[14.5px] font-semibold hover:opacity-90 transition-opacity"
            >
              Back to homepage
            </Link>
            <Link
              href="/book#appointment-form"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/50 rounded-xl text-[14.5px] font-semibold hover:bg-white/10 transition-colors text-white"
            >
              <IconCal size={16} />
              Book an appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[13.5px] font-semibold text-[#0D5D62] mb-6 tracking-wide">
            You might be looking for one of these
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Our Team', href: '/doctor' },
              { label: 'Insurance', href: '/insurance' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 rounded-full border border-[#E7EBEA] text-[13.5px] font-medium text-[#093F42] hover:border-[#37B2B8] hover:text-[#0D5D62] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-[14px] text-[#6E7C77]">
            Or call us at{' '}
            <a href="tel:281-916-2020" className="text-[#0D5D62] font-semibold hover:text-[#37B2B8] transition-colors">
              281-916-2020
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}

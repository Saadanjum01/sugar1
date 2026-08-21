import Link from 'next/link'
import { Banknote, CreditCard } from 'lucide-react'
import { IconShield, IconCash, IconCardPay, IconWallet } from '@/components/BrandIcons'

function ZelleMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#6D1ED4" />
      <path d="M7 8h10l-7.2 8H17v2H7v-2l7.2-8H7V8z" fill="white" />
    </svg>
  )
}

const insurers = [
  { name: 'Eyemed',            logo: '/images/insurance/eyemed.svg' },
  { name: 'VSP',               logo: '/images/insurance/vsp.png' },
  { name: 'BCBS',              logo: '/images/insurance/bcbs.svg' },
  { name: 'Cigna',             logo: '/images/insurance/cigna.png' },
  { name: 'Medicare',          logo: '/images/insurance/medicare.png' },
  { name: 'United Healthcare', logo: '/images/insurance/unitedhealthcare.png' },
  { name: 'Spectera',          logo: '/images/insurance/spectera.png' },
  { name: 'Superior Vision',   logo: '/images/insurance/superiorvision.png', darkLogo: true },
  { name: 'Aetna',             logo: '/images/insurance/aetna.png' },
]

const payments = [
  { name: 'Cash',        Icon: Banknote,   brand: false },
  { name: 'Credit Card', Icon: CreditCard, brand: false },
  { name: 'CareCredit',  Icon: IconShield, brand: true  },
  { name: 'Zelle',       Icon: ZelleMark,  brand: false },
]

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Page header */}
      <div className="bg-[#FBF7F1] border-b border-[#E7EBEA]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-16 pb-14 lg:pt-20 lg:pb-16">
          <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
            <IconShield size={15} className="text-[#B85E31]" />
            Coverage
          </div>
          <h1
            className="font-display text-[38px] sm:text-[50px] text-[#16201E] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Insurance we accept
          </h1>
          <p className="text-[#6E7C77] text-[16.5px] leading-relaxed max-w-xl">
            We verify your benefits before your visit so there are no surprises at check-in.
            Don&apos;t see your plan? Give us a call.
          </p>
        </div>
      </div>

      {/* Logo grid — matches mockup style */}
      <section className="py-14 sm:py-20 lg:py-[100px] px-5 sm:px-8 lg:px-16">
        <div className="max-w-[1180px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {insurers.map((ins) => (
            <div
              key={ins.name}
              className={`rounded-2xl p-5 h-24 flex items-center justify-center ${ins.darkLogo ? 'bg-[#093F42]' : 'bg-[#F7F8F7]'}`}
              style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
            >
              {ins.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={ins.logo} alt={ins.name} className="max-h-12 w-auto max-w-full object-contain" />
              ) : (
                <span className="font-semibold text-sm text-[#093F42] text-center">{ins.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Don't see your plan */}
        <div className="max-w-[1180px] mx-auto bg-[#E2F3F0] rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div>
            <h3
              className="font-display text-lg font-medium text-[#093F42] mb-1"
              style={{ letterSpacing: '-0.02em' }}
            >
              Don&apos;t see your insurance plan?
            </h3>
            <p className="text-[#6E7C77] text-[15px]">
              Call us and we&apos;ll confirm your coverage before your visit — no guesswork.
            </p>
          </div>
          <a
            href="tel:281-916-2020"
            className="shrink-0 px-7 py-3.5 bg-[#0D5D62] text-white font-semibold text-sm rounded-xl hover:bg-[#093F42] transition-colors"
          >
            Call 281-916-2020
          </a>
        </div>
      </section>

      {/* Payment options */}
      <section className="pb-14 sm:pb-20 px-5 sm:px-8 lg:px-16 bg-[#E2F3F0]">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="text-[#37B2B8] text-xs font-semibold mb-3 tracking-widest">PAYMENT</div>
          <h2
            className="font-display text-2xl sm:text-4xl font-medium text-[#093F42] mb-3"
            style={{ letterSpacing: '-0.03em' }}
          >
            Flexible payment options
          </h2>
          <p className="text-[#6E7C77] text-[15.5px]">In addition to insurance, we accept the following forms of payment.</p>
        </div>
        <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {payments.map((p) => (
            <div key={p.name} className="bg-[#F7F8F7] rounded-2xl p-5 flex flex-col items-center gap-3 text-center">
              <div className="w-[46px] h-[46px] rounded-[12px] bg-[#E2F3F0] flex items-center justify-center text-[#0D5D62]">
                <p.Icon size={p.brand ? 23 : 22} className={p.brand ? undefined : 'text-[#0D5D62]'} />
              </div>
              <span className="font-semibold text-sm text-[#093F42]">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 lg:py-[100px] px-5 sm:px-8 lg:px-16 bg-[#FBF7F1] text-center">
        <h2
          className="font-display text-2xl sm:text-4xl font-medium text-[#093F42] mb-4"
          style={{ letterSpacing: '-0.03em' }}
        >
          Questions about your coverage?
        </h2>
        <p className="text-[#6E7C77] text-base sm:text-lg max-w-xl mx-auto mb-8">
          Our team is happy to help you understand your benefits before your visit — just give us a call.
        </p>
        <a
          href="/book"
          className="inline-block px-9 py-4 bg-[#0D5D62] text-white font-semibold text-sm hover:bg-[#093F42] transition-colors rounded-xl"
        >
          Book an Appointment
        </a>
      </section>
    </div>
  )
}

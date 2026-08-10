import { Banknote, CreditCard, ShieldCheck } from 'lucide-react'

function ZelleMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="6" fill="#6D1ED4" />
      <path d="M7 8h10l-7.2 8H17v2H7v-2l7.2-8H7V8z" fill="white" />
    </svg>
  )
}

// logo: optional path in public/images/insurance/. Carriers without a
// verified official logo file render as text-only pills instead.
const insurers = [
  { name: 'Eyemed', logo: '/images/insurance/eyemed.svg' },
  { name: 'VSP', logo: '/images/insurance/vsp.png' },
  { name: 'BCBS', logo: '/images/insurance/bcbs.svg' },
  { name: 'Cigna', logo: '/images/insurance/cigna.png' },
  { name: 'Medicare', logo: '/images/insurance/medicare.png' },
  { name: 'United Healthcare', logo: '/images/insurance/unitedhealthcare.png' },
  { name: 'Spectera', logo: '/images/insurance/spectera.png' },
  { name: 'Superior Vision', logo: '/images/insurance/superiorvision.png', darkLogo: true },
  { name: 'Aetna', logo: '/images/insurance/aetna.png' },
]
const payments = [
  { name: 'Cash', icon: Banknote },
  { name: 'Credit Card', icon: CreditCard },
  { name: 'CareCredit', icon: ShieldCheck },
  { name: 'Zelle', icon: ZelleMark },
]

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#1E2749] text-white text-center">
        <div className="text-[#D5929F] text-xs sm:text-sm font-bold mb-4 tracking-widest">COVERAGE</div>
        <h1 className="font-display text-3xl sm:text-5xl font-black mb-5">Insurances we accept</h1>
        <p className="text-base sm:text-lg text-[#C0C3CC] max-w-2xl mx-auto leading-relaxed">
          Don&apos;t see your plan listed? Give us a call — we&apos;re happy to help you understand your coverage.
        </p>
      </section>

      {/* Insurers */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {insurers.map((ins) => (
            <div
              key={ins.name}
              className="flex items-center gap-4 bg-[#F6F6F8] rounded-2xl px-5 py-4"
            >
              <div
                className={`w-16 h-12 flex-shrink-0 rounded-lg flex items-center justify-center ${ins.darkLogo ? 'bg-[#1E2749]' : 'bg-white'}`}
              >
                {ins.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={ins.logo} alt={ins.name} className="max-h-9 max-w-[52px] w-auto object-contain" />
                ) : (
                  <span className="text-[#59607A] text-[10px] font-bold text-center leading-tight px-1">LOGO</span>
                )}
              </div>
              <span className="font-bold text-lg text-[#1E2749]">{ins.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Payment options */}
      <section className="pb-14 sm:pb-20 px-5 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="text-[#B33951] text-xs font-bold mb-3 tracking-widest">PAYMENT</div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-[#1E2749] mb-3">Flexible payment options</h2>
          <p className="text-[#59607A] text-[15.5px]">In addition to insurance, we accept the following forms of payment.</p>
        </div>
        <div className="max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {payments.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.name} className="bg-[#F6F6F8] rounded-2xl p-5 flex flex-col items-center gap-3 text-center">
                <div className="w-11 h-11 rounded-xl bg-[#1E2749]/10 flex items-center justify-center">
                  <Icon size={22} className="text-[#1E2749]" />
                </div>
                <span className="font-bold text-sm text-[#1E2749]">{p.name}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#F6F6F8] text-center">
        <h2 className="font-display text-2xl sm:text-4xl font-black text-[#1E2749] mb-4">Questions about your coverage?</h2>
        <p className="text-[#59607A] text-base sm:text-lg max-w-xl mx-auto mb-8">
          Our team is happy to help you understand your benefits before your visit.
        </p>
        <a
          href="/book"
          className="inline-block px-9 py-4 bg-[#B33951] text-white font-bold text-sm hover:bg-[#1E2749] transition-all rounded-xl"
        >
          BOOK AN APPOINTMENT
        </a>
      </section>
    </div>
  )
}

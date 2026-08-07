const insurers = ['Eyemed', 'VSP', 'BCBS', 'Cigna', 'Medicare', 'United Healthcare', 'Spectera', 'Superior Vision', 'Aetna']
const payments = ['Cash', 'Credit Card', 'CareCredit', 'Zelle']

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
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
          {insurers.map((name) => (
            <div key={name} className="bg-[#F6F6F8] rounded-full px-6 py-3.5 font-bold text-sm text-[#1E2749]">
              {name}
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
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3">
          {payments.map((name) => (
            <div key={name} className="bg-[#F6F6F8] rounded-full px-6 py-3.5 font-bold text-sm text-[#1E2749]">
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#F6F6F8] text-center">
        <h2 className="font-display text-2xl sm:text-4xl font-black text-[#1E2749] mb-4">Questions about your coverage?</h2>
        <p className="text-[#59607A] text-base sm:text-lg max-w-xl mx-auto mb-8">
          Our team is happy to help you understand your benefits before your visit.
        </p>
        <a
          href="#book"
          className="inline-block px-9 py-4 bg-[#B33951] text-white font-bold text-sm hover:bg-[#1E2749] transition-all rounded-xl"
        >
          BOOK AN APPOINTMENT
        </a>
      </section>
    </div>
  )
}

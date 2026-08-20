import { IconEye, IconCheck, IconHeart } from '@/components/BrandIcons'

export default function DoctorPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Page header */}
      <div className="bg-[#FBF7F1] border-b border-[#E7EBEA]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-16 pb-14 lg:pt-20 lg:pb-16">
          <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
            <IconEye size={15} className="text-[#B85E31]" />
            Our team
          </div>
          <h1
            className="font-display text-[38px] sm:text-[50px] text-[#16201E] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Meet the doctor behind your care
          </h1>
          <p className="text-[#6E7C77] text-[16.5px] leading-relaxed max-w-xl">
            A patient-first approach to every visit — unhurried, thorough, and built around the person in the chair.
          </p>
        </div>
      </div>

      {/* Doctor profile */}
      <section className="py-16 sm:py-24 lg:py-[100px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">

          {/* Avatar */}
          <div
            className="rounded-[20px] overflow-hidden flex flex-col items-center justify-center relative"
            style={{ aspectRatio: '3/3.6', boxShadow: '0 26px 52px -24px rgba(13,93,98,.28)', background: 'linear-gradient(160deg, #E2F3F0 0%, #ffffff 100%)' }}
          >
            <svg
              width="260" height="260" viewBox="0 0 200 200" fill="none"
              className="absolute top-[36%] left-1/2 -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="94" stroke="#0D5D62" strokeWidth="1.4" opacity=".28" />
              <circle cx="100" cy="100" r="76" stroke="#E2895B" strokeWidth="1.4" opacity=".22" />
              <path d="M22 100s24-46 78-46 78 46 78 46-24 46-78 46-78-46-78-46z" stroke="#0D5D62" strokeWidth="2.2" opacity=".16" />
            </svg>
            <div
              className="relative z-10 w-[140px] h-[140px] rounded-full flex items-center justify-center font-display font-semibold text-[48px] text-white"
              style={{ background: '#0D5D62', boxShadow: '0 12px 28px -10px rgba(20,66,66,.35)', letterSpacing: '-0.02em' }}
            >
              SV
            </div>
            <div className="relative z-10 mt-5 inline-flex items-center gap-2 text-[12.5px] font-semibold text-[#6E7C77] bg-white border border-[#E7EBEA] rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2895B] inline-block" />
              Professional portrait coming before launch
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-display text-[28px] sm:text-[40px] text-[#16201E] mb-1.5" style={{ letterSpacing: '-0.03em' }}>
              Shiroz Virani, O.D.
            </h2>
            <p className="text-[14.5px] font-semibold text-[#37B2B8] mb-7">
              Optometrist and founder, First Colony Vision
            </p>
            <p className="text-[16px] text-[#6E7C77] leading-relaxed mb-5 max-w-[540px]">
              Dr. Virani opened First Colony Vision on a simple conviction: good eye care depends on how carefully someone listens before they ever pick up an instrument.
            </p>
            <p className="text-[16px] text-[#6E7C77] leading-relaxed mb-5 max-w-[540px]">
              Every appointment here is built to be thorough and calm. Dr. Virani and his team take the time to explain what they see, what it means, and what happens next — so you leave understanding your own eyes, not just holding a prescription.
            </p>
            <p className="text-[16px] text-[#6E7C77] leading-relaxed mb-7 max-w-[540px]">
              <em className="not-italic font-medium text-[#16201E]">Full biography, education history, and professional headshot will be added before launch.</em>
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                'Doctor of Optometry',
                'Pediatric and family vision care',
                'Specialty and hard-to-fit contact lenses',
                'Sports vision and myopia control',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-[14.5px] font-medium text-[#16201E]">
                  <IconCheck size={18} className="text-[#37B2B8] shrink-0" />
                  {point}
                </div>
              ))}
            </div>
            <a
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D5D62] text-white rounded-xl text-[14.5px] font-semibold hover:bg-[#093F42] transition-colors"
            >
              Book with Dr. Virani
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 sm:py-24 lg:py-[100px] bg-[#FBF7F1]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
              <IconHeart size={15} className="text-[#B85E31]" />
              Philosophy
            </div>
            <h2 className="font-display text-[26px] sm:text-[38px] text-[#16201E] mb-4" style={{ letterSpacing: '-0.03em' }}>
              Care that grows with your family
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'Patient-First',      body: 'Unhurried visits where every question gets answered — for every age, at every stage.' },
              { title: 'Modern Diagnostics', body: 'Current equipment to catch issues early and explain findings in plain language.' },
              { title: 'Family-Friendly',    body: "From a child's first exam to sports vision and senior eye health — care for every generation." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8"
                style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
              >
                <h4 className="font-display font-semibold text-[18px] text-[#093F42] mb-3" style={{ letterSpacing: '-0.02em' }}>{item.title}</h4>
                <p className="text-[#6E7C77] text-[14.5px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Team placeholder */}
          <div className="mt-8 border-2 border-dashed border-[#E7EBEA] rounded-2xl flex flex-col sm:flex-row items-center justify-center text-center gap-5 p-10">
            <div className="w-12 h-12 rounded-full bg-[#E2F3F0] flex items-center justify-center shrink-0">
              <span className="text-xl text-[#0D5D62]/40 font-bold">+</span>
            </div>
            <div className="text-left">
              <h4 className="font-semibold text-[#093F42] mb-1">More Team Members — Coming Soon</h4>
              <p className="text-[#6E7C77] text-[14px]">
                Reserved for additional doctors and staff. Send us names, titles, bios, and headshots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-[100px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div
            className="relative rounded-[24px] overflow-hidden text-center"
            style={{ background: '#0D5D62', padding: '64px 48px' }}
          >
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[.1] pointer-events-none"
              viewBox="0 0 200 200" fill="none" aria-hidden="true"
            >
              <circle cx="100" cy="100" r="96" stroke="white" strokeWidth="1.4" />
              <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="1.4" />
              <circle cx="100" cy="100" r="44" stroke="white" strokeWidth="1.4" />
            </svg>
            <div className="relative z-10 max-w-[520px] mx-auto">
              <h2 className="font-display text-[36px] text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
                Ready to meet Dr. Virani?
              </h2>
              <p className="text-[#C9E5E3] text-[16px] mb-8 leading-relaxed">
                Book an appointment online — we confirm by phone and verify your insurance before you arrive.
              </p>
              <a
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0D5D62] rounded-xl text-[14.5px] font-semibold hover:bg-white/90 transition-opacity"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

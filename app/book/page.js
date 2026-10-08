import {
  IconCal, IconPin, IconClock, IconPhone, IconCheck,
  IconId, IconCardPay, IconGlasses, IconList, IconEye, IconFamily,
} from '@/components/BrandIcons'

const SCHEDULER_URL = 'https://scheduler.eyefinity.com/index.html?puid=58f353344da3420ebddabf54fff56e3d'

const whatToBring = [
  { Icon: IconId,      label: 'Photo ID' },
  { Icon: IconCardPay, label: 'Insurance card' },
  { Icon: IconGlasses, label: 'Current glasses or contacts' },
  { Icon: IconList,    label: 'List of current medications' },
  { Icon: IconEye,     label: 'Sunglasses (pupils may be dilated)' },
  { Icon: IconFamily,  label: 'A parent, for patients under 18' },
]

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#FBF7F1]">

      {/* Page header */}
      <div className="bg-[#FBF7F1] border-b border-[#E7EBEA]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-16 pb-14 lg:pt-20 lg:pb-16">
          <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
            <IconCal size={15} className="text-[#B85E31]" />
            Appointments
          </div>
          <h1
            className="font-display text-[38px] sm:text-[50px] text-[#16201E] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Schedule your visit
          </h1>
          <p className="text-[#6E7C77] text-[16.5px] leading-relaxed max-w-xl">
            Pick a time that works for you below. Most visits take about an hour, and the time is genuinely yours.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <section className="py-14 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-10 lg:gap-14 items-start">

          {/* ── Left column: office details ── */}
          <div className="space-y-6">

            {/* Contact + hours */}
            <div
              className="bg-white rounded-2xl p-7"
              style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
            >
              <h3
                className="font-display font-semibold text-[17px] text-[#093F42] mb-5"
                style={{ letterSpacing: '-0.02em' }}
              >
                Prefer to call us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[10px] bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62]">
                    <IconPhone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#6E7C77] tracking-widest mb-0.5">PHONE</div>
                    <a
                      href="tel:281-916-2020"
                      className="font-semibold text-[15px] text-[#093F42] hover:text-[#0D5D62] transition-colors"
                    >
                      281-916-2020
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[10px] bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62]">
                    <IconClock size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#6E7C77] tracking-widest mb-0.5">HOURS</div>
                    <p className="text-[15px] text-[#093F42] font-medium">Mon – Fri &nbsp;9:30 AM – 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-[10px] bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62] mt-0.5">
                    <IconPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#6E7C77] tracking-widest mb-0.5">ADDRESS</div>
                    <p className="text-[15px] text-[#093F42] font-medium leading-snug">
                      16126 Southwest Fwy, Ste 180<br />Sugar Land, TX 77479
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to bring */}
            <div
              className="bg-white rounded-2xl p-7"
              style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
            >
              <h3
                className="font-display font-semibold text-[17px] text-[#093F42] mb-1"
                style={{ letterSpacing: '-0.02em' }}
              >
                What to bring
              </h3>
              <p className="text-[13px] text-[#6E7C77] mb-5">Especially helpful for first visits and comprehensive exams.</p>
              <div className="space-y-3">
                {whatToBring.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-[14px] text-[#16201E] font-medium">
                    <div className="w-7 h-7 rounded-lg bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62]">
                      <Icon size={14} />
                    </div>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance callout */}
            <div className="bg-[#0D5D62] rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-2.5">
                <IconCheck size={17} className="text-[#37B2B8] shrink-0 mt-0.5" />
                <p className="text-white font-semibold text-[14.5px] leading-snug">
                  We verify your insurance before your visit
                </p>
              </div>
              <p className="text-[13.5px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
                We accept EyeMed, VSP, BCBS, Cigna, Medicare, UnitedHealthcare, Spectera, Superior Vision, and Aetna. Your costs are quoted before you arrive. No surprises.
              </p>
            </div>
          </div>

          {/* ── Right column: Eyefinity scheduler ── */}
          <div id="appointment-form" className="scroll-mt-[140px]">
            <div
              className="bg-white rounded-2xl p-3 sm:p-4"
              style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
            >
              <iframe
                src={SCHEDULER_URL}
                title="Book an appointment with First Colony Vision"
                className="w-full h-[900px] rounded-xl border-0"
              />
            </div>
            <p className="text-[13px] text-[#6E7C77] text-center mt-4">
              Scheduler not loading?{' '}
              <a
                href={SCHEDULER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0D5D62] font-semibold hover:underline"
              >
                Open it in a new tab
              </a>
              {' '}or call{' '}
              <a href="tel:281-916-2020" className="text-[#0D5D62] font-semibold hover:underline">
                281-916-2020
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

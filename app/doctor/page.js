import { IconEye, IconCheck, IconHeart, IconFamily } from '@/components/BrandIcons'

const TEAM = [
  { name: 'Natalie Gonzales',   role: 'Ophthalmic Tech',  photo: '/images/team-natalie.jpg' },
  { name: 'Catarina Tum',       role: 'Optician',         photo: '/images/team-catarina.jpg' },
]

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
            Meet the team behind your care
          </h1>
          <p className="text-[#6E7C77] text-[16.5px] leading-relaxed max-w-xl">
            Dr. Virani built First Colony Vision around one idea. Ask first, listen properly, then examine. Her team carries that into every visit.
          </p>
        </div>
      </div>

      {/* Doctor profile */}
      <section className="py-16 sm:py-24 lg:py-[100px] bg-[#E2F3F0]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">

          {/* Avatar */}
          <div
            className="rounded-[20px] overflow-hidden relative"
            style={{ aspectRatio: '3/3.6', boxShadow: '0 26px 52px -24px rgba(13,93,98,.28)' }}
          >
            <img
              src="/images/doctor-portrait.jpg"
              alt="Dr. Shiroz (Rose) Virani, O.D."
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-display text-[28px] sm:text-[40px] text-[#16201E] mb-1.5" style={{ letterSpacing: '-0.03em' }}>
              Shiroz (Rose) Virani, O.D.
            </h2>
            <p className="text-[14.5px] font-semibold text-[#37B2B8] mb-7">
              Therapeutic Optometrist &amp; Optometric Glaucoma Specialist at First Colony Vision
            </p>
            {[
              'Dr. Shiroz "Rose" Virani brings more than 35 years of experience caring for patients\' eyes. Born in Kampala, Uganda, she came to the United States as a refugee in 1972 and earned her Doctor of Optometry degree from the University of Houston College of Optometry in 1988. That journey shaped her deep compassion for patients from every walk of life.',
              "At First Colony Vision, Dr. Virani's expertise includes comprehensive eye exams, specialty contact lens fittings, glaucoma and myopia management, cataract care, surgical pre and post-operative care, diagnosis and treatment of eye diseases, injuries including eye infections, and diabetic eye care. She takes time to help every patient understand how the health of their eyes reflects their overall wellness.",
              'A proud Sugar Land resident, she balances her office time with community services, serving on the boards of Child Advocates of Fort Bend and the Houston Galveston Institute. She also volunteers at The Ismaili Center Houston.',
              'Family is at the heart of her life. She is a mom to a son and a daughter, and a proud grandmother who treasures daily FaceTime calls with her grandson. An avid traveler, she loves exploring new cultures, checking off bucket-list destinations on every continent. She loves sharing her adventures with her patients.',
            ].map((para) => (
              <p key={para.slice(0, 24)} className="text-[16px] text-[#6E7C77] leading-relaxed mb-5 max-w-[540px]">
                {para}
              </p>
            ))}
            <div className="flex flex-col gap-3 mb-8">
              {[
                'Doctor of Optometry, University of Houston College of Optometry (1988)',
                'More than 35 years of experience',
                'Therapeutic Optometrist',
                'Optometric Glaucoma Specialist',
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
              How she practices
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'She listens first', body: 'Every visit starts with your questions, not a checklist. You get a real explanation of what she found and what it means.' },
              { title: 'Current technology', body: 'Modern equipment that catches issues early, explained in plain language you can actually use.' },
              { title: 'Every generation',    body: "From a child's first exam to sports vision and senior eye health, the whole family sees the same doctor." },
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

        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24 lg:py-[100px] bg-white">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mx-auto text-center mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
              <IconFamily size={15} className="text-[#B85E31]" />
              Your care team
            </div>
            <h2 className="font-display text-[26px] sm:text-[38px] text-[#16201E] mb-4" style={{ letterSpacing: '-0.03em' }}>
              The people you&apos;ll meet
            </h2>
            <p className="text-[#6E7C77] text-[16px] leading-relaxed">
              From check-in to choosing your frames, a small team that takes the same unhurried approach as Dr. Virani.
            </p>
          </div>

          <div
            className="rounded-[20px] overflow-hidden mb-10 sm:mb-12"
            style={{ boxShadow: '0 26px 52px -24px rgba(13,93,98,.28)' }}
          >
            <img
              src="/images/team-group.jpg"
              alt="The First Colony Vision team: Catarina, Dr. Virani, Jonathan and Natalie"
              className="w-full aspect-[3/2] sm:aspect-[16/9] object-cover object-top"
            />
          </div>

          {/* Jonathan profile */}
          <div
            className="bg-[#FBF7F1] rounded-[20px] p-6 sm:p-10 grid grid-cols-1 md:grid-cols-[0.6fr_1.4fr] gap-8 sm:gap-10 items-center mb-10 sm:mb-12"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/5', boxShadow: '0 16px 32px -22px rgba(13,93,98,.28)' }}
            >
              <img
                src="/images/team-jonathan.jpg"
                alt="Jonathan Machemehl, Practice Manager"
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>
            <div>
              <h3 className="font-display text-[24px] sm:text-[30px] text-[#16201E] mb-1" style={{ letterSpacing: '-0.03em' }}>
                Meet Jonathan Machemehl
              </h3>
              <p className="text-[14px] font-semibold text-[#37B2B8] mb-5">Practice Manager</p>
              {[
                'With over 18 years of experience in the optical industry, Jonathan brings a wealth of knowledge and a genuine passion for patient care to First Colony Vision. Jonathan attended Southern Methodist University (SMU) and is dedicated to helping patients find not only the perfect frames to complement their features, but also the ideal lenses to ensure optimal vision and eye health.',
                "He has a proven track record of success in the optical field providing a smooth and hassle-free experience for you when it comes to your vision care. Jonathan's deep understanding of insurance regulations helps FCV provide exceptional value and maximize your benefits. Beyond the technical aspects, Jonathan possesses a keen eye for style and is committed to helping each patient discover eyewear that enhances their individual look and lifestyle.",
                'When he is not working at the office, you will find Jonathan spending time with his French bulldog, Kashmere.',
              ].map((para) => (
                <p key={para.slice(0, 24)} className="text-[15px] text-[#6E7C77] leading-relaxed mb-4 last:mb-0 max-w-[600px]">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-[780px] mx-auto">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
              >
                <img
                  src={m.photo}
                  alt={`${m.name}, ${m.role}`}
                  className="w-full aspect-[4/5] object-cover object-[50%_20%]"
                />
                <div className="px-6 py-5">
                  <h3 className="font-display font-semibold text-[19px] text-[#093F42]" style={{ letterSpacing: '-0.02em' }}>
                    {m.name}
                  </h3>
                  <p className="text-[14px] font-semibold text-[#37B2B8] mt-0.5">{m.role}</p>
                </div>
              </div>
            ))}
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
                Book an appointment online. We confirm by phone and verify your insurance before you arrive.
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

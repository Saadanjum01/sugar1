import Link from 'next/link'
import {
  IconEye, IconLens, IconDrop, IconGlasses, IconSpark, IconCheck, IconFamily,
} from '@/components/BrandIcons'

export const metadata = {
  title: 'Myopia Management for Children in Sugar Land, TX | First Colony Vision',
  description:
    'Myopia management for kids in Sugar Land, TX. Dr. Shiroz Virani, OD, checks how your child\'s nearsightedness is changing and explains options such as myopia-control contact lenses, orthokeratology, low-dose atropine drops and specialty glasses.',
  alternates: { canonical: '/services/myopia-management' },
}

const signs = [
  'Squinting or tilting the head to see the board, the TV or road signs',
  'Sitting very close to screens or holding books and tablets close to the face',
  'Complaints of headaches or tired eyes after school',
  'A dip in grades, or a teacher noticing trouble with work on the board',
  'Struggling to track the ball or losing interest in sports',
  'Pulling back from games or activities with friends that involve seeing at a distance',
]

const options = [
  {
    Icon: IconLens,
    title: 'Myopia-control soft contact lenses',
    text: 'Daytime soft lenses with a special optical design that gives clear vision while sending a different focus signal to the edge of the retina. They are worn like regular contacts and thrown away on schedule. Ask us about options such as MiSight® 1 day.',
  },
  {
    Icon: IconEye,
    title: 'Orthokeratology (overnight lenses)',
    text: 'Custom-fitted rigid lenses worn only while your child sleeps. They gently reshape the front of the eye overnight, so many kids can see clearly through the day without glasses or contacts.',
  },
  {
    Icon: IconDrop,
    title: 'Low-dose atropine eye drops',
    text: 'A much weaker version of an eye drop that has been used in eye care for decades, given once a day, usually at bedtime. It is often used alone or alongside lenses or glasses.',
  },
  {
    Icon: IconGlasses,
    title: 'Myopia-control spectacle lenses',
    text: 'Eyeglass lenses built with a special pattern across the lens, a good fit for children who are not ready for contacts. Your child gets clear vision from glasses that look like any other pair.',
  },
]

const steps = [
  {
    title: 'A full look at your child\'s eyes',
    text: 'We start with a thorough pediatric eye exam that checks vision, focusing, eye teamwork and eye health, not just the prescription.',
  },
  {
    title: 'Measuring where things stand',
    text: 'Dr. Virani records your child\'s current prescription and, when it helps, other measurements of the eye, so we have a clear starting point to compare against at every visit.',
  },
  {
    title: 'A plan that fits your family',
    text: 'We talk through your child\'s age, routine, activities and comfort level with lenses or drops. Dr. Virani will discuss which options are right for your child, and you decide together.',
  },
  {
    title: 'Regular follow-ups',
    text: 'Myopia management is ongoing. We see your child regularly to confirm the plan is working, check eye health and adjust the approach as they grow.',
  },
]

const faqs = [
  {
    q: 'Is myopia management the same as getting glasses?',
    a: 'No. Regular glasses and contacts sharpen blurry distance vision, but they are not designed to change how quickly nearsightedness gets worse. Myopia management uses specific lenses, drops or a mix of both with the goal of slowing that change, while still giving your child clear vision.',
  },
  {
    q: 'What age should my child start?',
    a: 'There is no single right age. Nearsightedness tends to change fastest in younger children, so it makes sense to talk about management as soon as myopia is found, or even earlier if both parents are nearsighted. Dr. Virani will look at your child\'s eyes and history before recommending anything.',
  },
  {
    q: 'Can kids really wear contact lenses?',
    a: 'Many children handle contact lenses well once they are shown how to put them in, take them out and keep them clean. We teach both you and your child, and we only move forward when everyone feels comfortable.',
  },
  {
    q: 'Will my child stop needing glasses?',
    a: 'Myopia management is not a cure, and it does not reverse nearsightedness that is already there. The aim is to slow how much it increases over the growing years, which helps keep long-term eye health risks lower.',
  },
  {
    q: 'Does screen time and time outdoors really matter?',
    a: 'Daily habits are part of the picture. Time spent outdoors in daylight is encouraged for children, and regular breaks from close-up work like reading, homework and devices are a good idea. We will share simple, realistic tips at your visit.',
  },
]

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-3">
      <IconSpark size={15} className="text-[#B85E31]" />
      {children}
    </div>
  )
}

function H2({ children, className = '' }) {
  return (
    <h2
      className={`font-display text-[28px] sm:text-[38px] leading-tight text-[#16201E] mb-4 ${className}`}
      style={{ letterSpacing: '-0.03em' }}
    >
      {children}
    </h2>
  )
}

export default function MyopiaManagementPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-[#093F42] text-white px-5 sm:px-8 lg:px-16 py-14 sm:py-20">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="text-sm text-[#C9E5E3] mb-4">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="opacity-70">Myopia Management</span>
            </div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold mb-3 tracking-widest text-[#37B2B8]">
              <IconFamily size={15} className="text-[#E2895B]" />
              PEDIATRIC EYE CARE
            </div>
            <h1
              className="font-display text-[34px] sm:text-5xl font-medium mb-5 leading-tight"
              style={{ letterSpacing: '-0.03em' }}
            >
              Myopia Management for Children in Sugar Land
            </h1>
            <p className="text-base sm:text-lg text-[#C9E5E3] max-w-xl leading-relaxed mb-8">
              Nearsightedness usually keeps changing as kids grow. At First Colony Vision, Dr. Virani helps families slow that change with proven approaches, so your child sees clearly today and has healthier eyes for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/book"
                className="inline-flex justify-center items-center px-7 py-3.5 bg-white text-[#0D5D62] rounded-xl text-[14.5px] font-semibold hover:bg-white/90 transition-colors"
              >
                Book a Myopia Consultation
              </Link>
              <a
                href="#options"
                className="inline-flex justify-center items-center px-7 py-3.5 border border-white/30 text-white rounded-xl text-[14.5px] font-semibold hover:bg-white/10 transition-colors"
              >
                See Treatment Options
              </a>
            </div>
          </div>
          <div className="rounded-[24px] overflow-hidden aspect-[4/5] max-h-[460px] w-full max-w-[400px] mx-auto lg:mx-0 lg:ml-auto">
            <img
              src="/images/pediatric-glasses.jpg"
              alt="Smiling young girl wearing pink eyeglasses"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* What is myopia + why early */}
      <section className="px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-[100px]">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Eyebrow>What is myopia?</Eyebrow>
            <H2>Clear up close, blurry far away</H2>
            <div className="space-y-4 text-[#16201E] text-base leading-relaxed">
              <p>
                Myopia, or nearsightedness, means your child can see books and screens comfortably, but things in the distance, like the whiteboard, a street sign or a friend across the field, look fuzzy. It happens when the eye grows a little too long from front to back, so light comes into focus just in front of the retina instead of on it.
              </p>
              <p>
                Myopia is very common, and it is showing up in more children, and at younger ages, than it used to. Once it starts, it tends to get stronger year after year while a child is still growing.
              </p>
            </div>
          </div>
          <div>
            <Eyebrow>Why manage it early?</Eyebrow>
            <H2>It&apos;s about more than a stronger prescription</H2>
            <div className="space-y-4 text-[#16201E] text-base leading-relaxed">
              <p>
                There is no cure for myopia, but its progress can often be slowed. That matters because higher levels of nearsightedness are linked with a greater lifetime risk of serious eye conditions, including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {['Retinal detachment', 'Myopic maculopathy', 'Glaucoma', 'Cataract'].map((r) => (
                  <li key={r} className="flex items-center gap-2.5 bg-[#FBF7F1] rounded-xl px-4 py-3 text-[15px] font-semibold text-[#093F42]">
                    <IconCheck size={16} className="text-[#0D5D62] shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <p>
                Children&apos;s eyes change the most during the school years, so that is when management can do the most good. Starting sooner gives your child the best chance of ending up with a lower prescription as an adult.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="px-5 sm:px-8 lg:px-16 py-16 sm:py-20 bg-[#FBF7F1]">
        <div className="max-w-[1180px] mx-auto">
          <div className="max-w-2xl mb-10">
            <Eyebrow>Signs to watch for</Eyebrow>
            <H2>Is your child nearsighted?</H2>
            <p className="text-[#6E7C77] text-[16.5px] leading-relaxed">
              Kids rarely say their vision is blurry, because they assume everyone sees the way they do. These everyday clues are worth a closer look:
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {signs.map((s) => (
              <li key={s} className="bg-white rounded-2xl p-5 sm:p-6 flex gap-3 text-[15.5px] text-[#16201E] leading-relaxed" style={{ boxShadow: '0 1px 4px rgba(15,50,52,.06)' }}>
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B85E31] shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <p className="text-[#6E7C77] text-[15px] mt-8 max-w-2xl">
            Notice any of these? Myopia can also show up with no obvious signs at all, which is why yearly eye exams matter for school-age children. Learn more about our{' '}
            <Link href="/services/child-eye-exam" className="text-[#0D5D62] font-semibold underline underline-offset-2 hover:text-[#093F42]">child eye exams</Link>.
          </p>
        </div>
      </section>

      {/* Options */}
      <section id="options" className="scroll-mt-24 px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-[100px]">
        <div className="max-w-[1180px] mx-auto">
          <div className="max-w-2xl mb-10">
            <Eyebrow>Treatment options</Eyebrow>
            <H2>Proven ways to slow myopia</H2>
            <p className="text-[#6E7C77] text-[16.5px] leading-relaxed">
              Every child is different, and there is no one best option for everyone. Dr. Virani will discuss which options are right for your child based on their eyes, age and lifestyle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
            {options.map(({ Icon, title, text }) => (
              <div key={title} className="bg-[#F7F8F7] rounded-2xl p-6 sm:p-7 flex flex-col gap-4">
                <div className="w-[46px] h-[46px] rounded-[12px] bg-[#E2F3F0] flex items-center justify-center text-[#0D5D62] shrink-0">
                  <Icon size={23} />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-[#093F42] mb-2">{title}</h3>
                  <p className="text-[15px] text-[#6E7C77] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[18px] bg-[#E2F3F0] rounded-2xl p-6 sm:p-7">
            <h3 className="font-semibold text-[17px] text-[#093F42] mb-2">Healthy habits help too</h3>
            <p className="text-[15px] text-[#16201E] leading-relaxed">
              Alongside treatment, we encourage plenty of time outdoors in daylight and regular breaks from close-up work like reading, homework and screens. Small changes to everyday routines can support your child&apos;s eyes.
            </p>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="px-5 sm:px-8 lg:px-16 py-16 sm:py-20 bg-[#FBF7F1]">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          <div>
            <Eyebrow>Your visit</Eyebrow>
            <H2>What to expect at First Colony Vision</H2>
            <p className="text-[#6E7C77] text-[16.5px] leading-relaxed mb-6">
              Our Sugar Land office is set up to make kids comfortable, and Dr. Virani takes time to explain each step to both you and your child.
            </p>
            <div className="rounded-2xl overflow-hidden aspect-[3/2]" style={{ boxShadow: '0 4px 16px rgba(15,50,52,.1)' }}>
              <img
                src="/images/office-exam-room.jpg"
                alt="Exam room at First Colony Vision in Sugar Land"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-white rounded-2xl p-5 sm:p-6 flex gap-4" style={{ boxShadow: '0 1px 4px rgba(15,50,52,.06)' }}>
                <span className="w-9 h-9 rounded-full bg-[#0D5D62] text-white font-semibold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-[16.5px] text-[#093F42] mb-1">{s.title}</h3>
                  <p className="text-[15px] text-[#6E7C77] leading-relaxed">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-[100px]">
        <div className="max-w-[820px] mx-auto">
          <div className="text-center mb-10">
            <Eyebrow>FAQ</Eyebrow>
            <H2>Questions parents ask us</H2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-[#F7F8F7] rounded-2xl px-5 sm:px-6 py-4 open:bg-white open:shadow-md border border-transparent open:border-[#E7EBEA]">
                <summary className="flex justify-between items-center gap-4 cursor-pointer list-none font-semibold text-[16px] text-[#093F42] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-[#37B2B8] text-xl leading-none transition-transform group-open:rotate-45 shrink-0" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-[15px] text-[#6E7C77] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 sm:px-8 lg:px-16 pb-16 sm:pb-20 lg:pb-[100px]">
        <div className="max-w-[1180px] mx-auto">
          <div className="relative rounded-[24px] overflow-hidden text-center bg-[#0D5D62] px-6 py-12 sm:px-12 sm:py-16">
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[.1] pointer-events-none"
              viewBox="0 0 200 200" fill="none" aria-hidden="true"
            >
              <circle cx="100" cy="100" r="96" stroke="white" strokeWidth="1.4" />
              <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="1.4" />
              <circle cx="100" cy="100" r="44" stroke="white" strokeWidth="1.4" />
            </svg>
            <div className="relative z-10 max-w-[560px] mx-auto">
              <h2
                className="font-display text-[28px] sm:text-[36px] text-white mb-4 leading-tight"
                style={{ letterSpacing: '-0.03em' }}
              >
                Give your child&apos;s eyes a head start
              </h2>
              <p className="text-[#C9E5E3] text-[16px] mb-8 leading-relaxed">
                Book a visit with Dr. Virani in Sugar Land to find out whether your child is nearsighted and which myopia management options make sense for your family.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0D5D62] rounded-xl text-[14.5px] font-semibold hover:bg-white/90 transition-colors"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

'use client'

import Link from 'next/link'

export default function DoctorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Stacked Editorial Layout - Full Width Image Top */}
      <section className="relative">
        {/* Full-Width Portrait Hero */}
        <div className="relative h-[40vh] sm:h-[60vh] overflow-hidden border-b-2 border-[#0A1828]">
          <img 
            src="https://images.unsplash.com/photo-1758656321505-95bf802f9a4c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY6OTF8MHwxfHNlYXJjaHwxfHxleWUlMjBjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc4MjgxODc4Mnww&ixlib=rb-4.1.0&q=85"
            alt="Dr. Shiroz Virani"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>
        </div>

        {/* Centered Name Block Overlapping Image */}
        <div className="relative -mt-12 sm:-mt-20 px-4 sm:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto bg-[#0A1828] text-white p-6 sm:p-12 lg:p-16 rounded-2xl">
            <div className="text-[#C85A3E] text-xs tracking-[0.3em] mb-4 sm:mb-6">OPTOMETRIST</div>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-black leading-none mb-6 sm:mb-8">
              SHIROZ<br/>VIRANI,<br/>O.D.
            </h1>
            <div className="h-px w-24 sm:w-32 bg-[#C85A3E]"></div>
          </div>
        </div>
      </section>

      {/* Bio Section - Centered Narrow Column */}
      <section className="py-12 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 sm:space-y-8 text-[#0A1828] text-base sm:text-lg leading-relaxed">
            <p className="text-xl sm:text-2xl font-light leading-relaxed">
              Dr. Shiroz Virani brings expertise, compassion, and a commitment to excellence in every patient interaction.
            </p>
            
            <div className="py-6 sm:py-8 my-8 sm:my-12 border-y border-[#C85A3E]/30">
              <p className="text-[#C85A3E] italic text-sm sm:text-base">
                [Official biography will be featured here. This section will include Dr. Virani's educational background, professional experience, areas of specialization, and approach to patient care.]
              </p>
            </div>

            <p>
              With advanced training and years of clinical experience, Dr. Virani is dedicated to providing personalized eye care that addresses each patient's unique vision needs and lifestyle.
            </p>

            <p>
              Dr. Virani stays current with the latest advances in optometry to provide patients with the most effective diagnostic tools and treatment options available.
            </p>
          </div>

          {/* Large Pull Quote - Dramatic Treatment */}
          <div className="my-12 sm:my-20 py-8 sm:py-16 border-l-4 sm:border-l-8 border-[#C85A3E] pl-6 sm:pl-12 bg-[#0A1828]/5 rounded-r-2xl">
            <p className="font-display text-2xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#0A1828] mb-6 sm:mb-8">
              "QUALITY EYE CARE MEANS TAKING THE TIME TO TRULY UNDERSTAND EACH PATIENT'S UNIQUE NEEDS AND GOALS."
            </p>
            <cite className="text-xs sm:text-sm tracking-[0.2em] text-[#8B9A9F] not-italic">— DR. SHIROZ VIRANI</cite>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-12 sm:pt-16 border-t-2 border-[#0A1828]">
            <div>
              <div className="text-xs tracking-[0.3em] text-[#C85A3E] mb-3 sm:mb-4">EDUCATION</div>
              <div className="text-[#0A1828] text-base sm:text-lg font-medium">
                Doctor of Optometry
              </div>
              <div className="text-sm text-[#8B9A9F] mt-1 sm:mt-2">
                University of Houston, College of Optometry
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] text-[#C85A3E] mb-3 sm:mb-4">EXPERIENCE</div>
              <div className="text-[#0A1828] text-base sm:text-lg font-medium">
                Years in Practice
              </div>
              <div className="text-sm text-[#8B9A9F] mt-1 sm:mt-2">
                Dedicated to lifelong patient relationships
              </div>
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] text-[#C85A3E] mb-3 sm:mb-4">SPECIALTIES</div>
              <div className="text-[#0A1828] text-base sm:text-lg font-medium leading-snug">
                Comprehensive &<br/>Specialty Care
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <a 
              href="#book" 
              className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-[#C85A3E] text-white text-xs sm:text-sm font-bold tracking-wider hover:bg-[#0A1828] transition-all rounded-xl"
            >
              SCHEDULE A VISIT WITH DR. VIRANI
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

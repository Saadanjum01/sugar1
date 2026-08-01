'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Plus, Minus } from 'lucide-react'

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      number: '01',
      title: 'Comprehensive Eye Exam',
      tagline: 'Complete vision and eye health evaluation',
      description: 'Advanced diagnostic technology meets personalized care. We examine visual acuity, refractive error, eye coordination, pressure screening, and retinal health. Early detection of conditions like glaucoma, macular degeneration, and diabetic retinopathy can preserve your sight for life.',
      duration: '45-60 min',
      slug: 'comprehensive-eye-exam'
    },
    {
      number: '02',
      title: 'Contact Lens Exam',
      tagline: 'Custom fitting for all lens types',
      description: 'From daily disposables to multifocals and specialty lenses. Complete consultation, precise fitting, insertion training, and follow-up care to ensure optimal comfort and vision.',
      duration: '60-75 min',
      slug: 'contact-lens-exam'
    },
    {
      number: '03',
      title: 'Diabetic Eye Exam',
      tagline: 'Specialized retinopathy screening',
      description: 'Critical monitoring for patients with diabetes. We examine retinal blood vessels, screen for diabetic retinopathy, and detect early signs of retinal damage before vision loss occurs.',
      duration: '30-45 min',
      slug: 'diabetic-eye-exam'
    },
    {
      number: '04',
      title: 'Emergency Medical Exam',
      tagline: 'Immediate care for eye injuries and infections',
      description: 'Prompt attention for trauma, foreign objects, chemical exposure, sudden vision changes, painful red eye, and eye injuries. We prioritize urgent cases to protect your vision and prevent complications.',
      duration: 'As needed',
      slug: 'emergency-medical-exam'
    },
    {
      number: '05',
      title: 'Myopia Control',
      tagline: 'Slow myopia progression in children',
      description: 'Evidence-based interventions to slow nearsightedness progression. Early treatment can reduce lifetime risk of serious eye conditions and preserve long-term eye health.',
      duration: '45 min',
      slug: 'myopia-control'
    },
    {
      number: '06',
      title: 'Pediatric Eye Exam',
      tagline: 'Comprehensive vision care for children',
      description: 'Specialized exam for infants, children, and teens. We assess refractive errors, amblyopia, strabismus, focusing problems, and developmental visual milestones in a comfortable environment.',
      duration: '30-45 min',
      slug: 'pediatric-eye-exam'
    },
    {
      number: '07',
      title: 'Sports Vision',
      tagline: 'Optimize visual performance for athletes',
      description: 'Enhance visual acuity, depth perception, eye-hand coordination, peripheral vision, tracking speed, and focus flexibility for competitive advantage.',
      duration: '60 min',
      slug: 'sports-vision'
    },
    {
      number: '08',
      title: 'Migraine Management',
      tagline: 'Vision-related headache assessment',
      description: 'Comprehensive evaluation of visual triggers and eye strain that may contribute to migraines. Personalized recommendations for relief and prevention.',
      duration: '45 min',
      slug: 'migraine-management'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-16 bg-[#0A1828] text-white">
        <Link href="/" className="inline-flex items-center space-x-2 text-sm font-medium mb-8 sm:mb-12 hover:text-[#C85A3E] transition-colors">
          <span>←</span>
          <span>BACK</span>
        </Link>
        <div className="max-w-6xl">
          <div className="text-[#C85A3E] text-xs font-bold mb-4 sm:mb-6 tracking-widest">INDEX OF SERVICES</div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
            COMPLETE<br/>EYE CARE
          </h1>
          <p className="text-base sm:text-xl text-[#B8C4CE] max-w-2xl leading-relaxed">
            Eight specialized services designed for your vision, health, and lifestyle.
          </p>
        </div>
      </section>

      {/* Services Index */}
      <section className="py-12 sm:py-20 lg:py-32 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={service.slug}>
              <button
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="w-full group"
              >
                <div className="grid grid-cols-[40px_1fr_auto] sm:grid-cols-[80px_1fr_auto] lg:grid-cols-[120px_2fr_3fr_auto] gap-3 sm:gap-6 lg:gap-12 items-center py-6 sm:py-8 hover:bg-[#0A1828]/5 transition-colors px-3 sm:px-6 lg:px-8">
                  {/* Number */}
                  <div className="font-display text-2xl sm:text-5xl lg:text-7xl font-black text-[#0A1828]/20 group-hover:text-[#C85A3E] transition-colors">
                    {service.number}
                  </div>

                  {/* Service Name */}
                  <div className="text-left">
                    <h3 className="font-display text-lg sm:text-2xl lg:text-4xl font-black leading-tight group-hover:text-[#C85A3E] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Tagline - hidden on mobile */}
                  <div className="hidden lg:block text-left">
                    <p className="text-[#8B9A9F] text-sm lg:text-base">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-end space-x-4">
                    <span className="hidden lg:inline text-xs text-[#8B9A9F] font-medium">{service.duration}</span>
                    {expandedService === index ? (
                      <Minus size={20} className="text-[#C85A3E]" />
                    ) : (
                      <Plus size={20} className="text-[#8B9A9F] group-hover:text-[#C85A3E] transition-colors" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                expandedService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-4">
                  <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-4 sm:gap-6 lg:gap-12">
                    <div className="hidden lg:block"></div>
                    <div className="space-y-4 sm:space-y-6">
                      {/* Mobile tagline */}
                      <p className="lg:hidden text-[#C85A3E] text-xs sm:text-sm font-medium">
                        {service.tagline}
                      </p>
                      
                      <p className="text-[#0A1828] text-base sm:text-lg leading-relaxed">
                        {service.description}
                      </p>
                      
                      <Link 
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center space-x-2 text-[#C85A3E] hover:text-[#0A1828] font-bold text-sm transition-colors"
                      >
                        <span>LEARN MORE</span>
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hairline Divider */}
              {index < services.length - 1 && (
                <div className="h-px bg-[#0A1828]/10"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 px-5 sm:px-8 lg:px-16 bg-gradient-to-br from-[#C85A3E] to-[#0A1828] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8">SCHEDULE YOUR VISIT</h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-12 opacity-90">
            Experience comprehensive eye care tailored to your needs.
          </p>
          <a 
            href="#book" 
            className="inline-block px-10 sm:px-12 py-4 sm:py-5 bg-white text-[#0A1828] font-bold text-base sm:text-lg hover:bg-[#0A1828] hover:text-white transition-all rounded-xl"
          >
            BOOK APPOINTMENT
          </a>
        </div>
      </section>
    </div>
  )
}

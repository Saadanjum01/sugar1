export default function DoctorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#1E2749] text-white text-center">
        <div className="text-[#D5929F] text-xs sm:text-sm font-bold mb-4 tracking-widest">OUR DOCTOR</div>
        <h1 className="font-display text-3xl sm:text-5xl font-black mb-5">Meet the team behind your care</h1>
        <p className="text-base sm:text-lg text-[#C0C3CC] max-w-2xl mx-auto leading-relaxed">
          A patient-first approach to every visit, combining advanced technology with genuine, unhurried care.
        </p>
      </section>

      {/* Bio */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-14 items-start">
          <div className="rounded-2xl overflow-hidden h-[420px]">
            <img src="/images/doctor-portrait.jpg" alt="Dr. Shiroz Virani, O.D." className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-[#B33951] text-xs font-bold mb-3 tracking-widest">OPTOMETRIST</div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E2749] mb-2">Shiroz Virani, O.D.</h2>
            <div className="text-[#59607A] text-sm font-semibold mb-6">Doctor of Optometry &middot; Sugar Land Vision</div>

            <div className="bg-[#F6F6F8] rounded-2xl p-6 mb-4">
              <h4 className="font-bold text-[#1E2749] mb-2">Our Philosophy of Care</h4>
              <p className="text-[#33415C] text-[15.5px] leading-relaxed">
                Dr. Virani and the Sugar Land Vision team take a patient-first approach to every visit — combining advanced technology with genuine, unhurried care for patients of every age. Every question gets answered, and every visit is tailored to the person in the chair, not just the prescription on file.
              </p>
            </div>

            <div className="border border-dashed border-[#1E2749]/20 rounded-2xl p-6 mb-6">
              <h4 className="font-bold text-[#1E2749] mb-2">Full Biography &mdash; Coming Soon</h4>
              <p className="text-[#59607A] text-[15px] italic">
                This space is reserved for Dr. Virani&apos;s complete background, education, and philosophy of care, alongside a professional headshot supplied by the practice.
              </p>
            </div>

            <a
              href="#book"
              className="inline-block px-9 py-4 bg-[#B33951] text-white font-bold text-sm hover:bg-[#1E2749] transition-all rounded-xl"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#F6F6F8]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-[#B33951] text-xs font-bold mb-3 tracking-widest">WHY CHOOSE US</div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-[#1E2749]">Care that grows with your family</h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl p-7">
            <h4 className="font-bold text-[#1E2749] mb-2">Patient-First</h4>
            <p className="text-[#59607A] text-sm leading-relaxed">Unhurried visits where every question gets answered — for every age.</p>
          </div>
          <div className="bg-white rounded-2xl p-7">
            <h4 className="font-bold text-[#1E2749] mb-2">Advanced Tech</h4>
            <p className="text-[#59607A] text-sm leading-relaxed">State-of-the-art diagnostics to catch issues early and treat them precisely.</p>
          </div>
          <div className="bg-white rounded-2xl p-7">
            <h4 className="font-bold text-[#1E2749] mb-2">Family-Friendly</h4>
            <p className="text-[#59607A] text-sm leading-relaxed">From child eye exams to sports vision, care that grows with your family.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

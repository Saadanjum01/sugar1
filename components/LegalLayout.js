export default function LegalLayout({ title, intro, updatedNote, children }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#1E2749] text-white text-center">
        <div className="text-[#D5929F] text-xs sm:text-sm font-bold mb-4 tracking-widest">LEGAL</div>
        <h1 className="font-display text-3xl sm:text-5xl font-black mb-5">{title}</h1>
        <p className="text-base sm:text-lg text-[#C0C3CC] max-w-2xl mx-auto leading-relaxed">{intro}</p>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-[#59607A] italic mb-8">{updatedNote}</div>
          <div className="space-y-8">{children}</div>
          <p className="mt-10 text-sm text-[#59607A] italic">
            This is placeholder text for the website demo. Sugar Land Vision will supply the finalized document for publication.
          </p>
        </div>
      </section>
    </div>
  )
}

export default function LegalLayout({ title, intro, updatedNote, children }) {
  return (
    <div className="min-h-screen bg-white">
      <section
        className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 text-white text-center"
        style={{ background: 'linear-gradient(120deg, #062931 0%, #083438 42%, #0D5D62 70%, #37B2B8 100%)' }}
      >
        <div className="text-[13.5px] font-semibold mb-4 tracking-widest" style={{ color: 'rgba(255,255,255,0.7)' }}>LEGAL</div>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold mb-5" style={{ letterSpacing: '-0.03em' }}>{title}</h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.84)' }}>{intro}</p>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-[#6E7C77] italic mb-8">{updatedNote}</div>
          <div className="space-y-8">{children}</div>
          <p className="mt-10 text-sm text-[#6E7C77] italic">
            This is placeholder text for the website demo. First Colony Vision will supply the finalized document for publication.
          </p>
        </div>
      </section>
    </div>
  )
}

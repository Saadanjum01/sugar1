import Link from 'next/link'

export default function BlogPostLayout({
  title,
  category,
  intro,
  image,
  imageAlt,
  sections,
  relatedReading = [],
  ctaBody,
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#1E2749] text-white">
        <div className="max-w-4xl">
          <div className="text-sm text-[#C0C3CC] mb-4">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2 opacity-60">/</span>
            <span>{title}</span>
          </div>
          <div className="text-[#D5929F] text-xs sm:text-sm font-bold mb-3 tracking-widest">{category.toUpperCase()}</div>
          <h1 className="font-display text-3xl sm:text-5xl font-black mb-5">{title}</h1>
          <p className="text-base sm:text-lg text-[#C0C3CC] max-w-2xl leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2.1fr_1fr] gap-12 lg:gap-14 items-start">
          <div className="space-y-8">
            {image && (
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80">
                <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
              </div>
            )}

            {sections.map((sec, i) => (
              <div key={i}>
                {sec.heading && (
                  <h3 className="font-bold text-xl sm:text-2xl text-[#1E2749] mb-3">{sec.heading}</h3>
                )}
                {sec.paragraphs?.map((p, j) => (
                  <p key={j} className="text-[#33415C] text-base leading-relaxed mb-3">{p}</p>
                ))}
                {sec.list && (
                  <ul className="space-y-3 mt-2 mb-3">
                    {sec.list.map((item, k) => (
                      <li key={k} className="flex gap-3 text-[#33415C] text-[15.5px] leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B33951] flex-shrink-0"></span>
                        <span>
                          {item.term && <b className="text-[#1E2749]">{item.term}: </b>}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {ctaBody && (
              <div className="bg-[#F6F6F8] rounded-2xl p-6 sm:p-7 text-[#33415C] italic text-base leading-relaxed">
                {ctaBody}
              </div>
            )}
          </div>

          <aside className="space-y-5">
            <div className="bg-[#F6F6F8] rounded-2xl p-6">
              <h5 className="text-xs font-bold tracking-widest text-[#1E2749] mb-3">BOOK AN APPOINTMENT</h5>
              <p className="text-sm text-[#59607A] mb-4">Have a question about your vision? We&apos;re here to help.</p>
              <a
                href="#book"
                className="block w-full text-center px-6 py-3.5 bg-[#B33951] text-white font-bold text-sm rounded-xl hover:bg-[#1E2749] transition-all"
              >
                Book an Appointment
              </a>
            </div>

            {relatedReading.length > 0 && (
              <div className="bg-[#F6F6F8] rounded-2xl p-6">
                <h5 className="text-xs font-bold tracking-widest text-[#1E2749] mb-3">RELATED READING</h5>
                <div className="divide-y divide-[#1E2749]/10">
                  {relatedReading.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="block py-2.5 text-sm font-semibold text-[#33415C] hover:text-[#B33951] transition-colors"
                    >
                      {r.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  )
}

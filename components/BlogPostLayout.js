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
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#093F42] text-white">
        <div className="max-w-4xl">
          <div className="text-sm text-[#C9E5E3] mb-4">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2 opacity-50">/</span>
            <span className="opacity-70">{title}</span>
          </div>
          <div className="text-[#37B2B8] text-xs sm:text-sm font-semibold mb-3 tracking-widest">{category.toUpperCase()}</div>
          <h1
            className="font-display text-3xl sm:text-5xl font-medium mb-5"
            style={{ letterSpacing: '-0.03em' }}
          >
            {title}
          </h1>
          <p className="text-base sm:text-lg text-[#C9E5E3] max-w-2xl leading-relaxed">{intro}</p>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2.1fr_1fr] gap-12 lg:gap-14 items-start">

          {/* Main content */}
          <div className="space-y-8">
            {image && (
              <div className="rounded-2xl overflow-hidden h-64 sm:h-80" style={{ boxShadow: '0 4px 16px rgba(15,50,52,.1)' }}>
                <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
              </div>
            )}

            {sections.map((sec, i) => (
              <div key={i}>
                {sec.heading && (
                  <h3
                    className="font-display font-medium text-xl sm:text-2xl text-[#093F42] mb-3"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {sec.heading}
                  </h3>
                )}
                {sec.paragraphs?.map((p, j) => (
                  <p key={j} className="text-[#16201E] text-base leading-relaxed mb-3">{p}</p>
                ))}
                {sec.list && (
                  <ul className="space-y-3 mt-2 mb-3">
                    {sec.list.map((item, k) => (
                      <li key={k} className="flex gap-3 text-[#16201E] text-[15.5px] leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0D5D62] flex-shrink-0" />
                        <span>
                          {item.term && <b className="text-[#093F42]">{item.term}: </b>}
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {ctaBody && (
              <div className="bg-[#E2F3F0] rounded-2xl p-6 sm:p-7 text-[#6E7C77] italic text-base leading-relaxed">
                {ctaBody}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <div className="bg-[#FBF7F1] rounded-2xl p-6" style={{ boxShadow: '0 1px 4px rgba(15,50,52,.06)' }}>
              <h5 className="text-xs font-semibold tracking-widest text-[#37B2B8] mb-1">BOOK AN APPOINTMENT</h5>
              <p className="text-sm text-[#6E7C77] mb-4">Have a question about your vision? We&apos;re here to help.</p>
              <a
                href="/book"
                className="block w-full text-center px-6 py-3.5 bg-[#0D5D62] text-white font-semibold text-sm rounded-xl hover:bg-[#093F42] transition-colors"
              >
                Book an Appointment
              </a>
            </div>

            {relatedReading.length > 0 && (
              <div className="bg-[#FBF7F1] rounded-2xl p-6" style={{ boxShadow: '0 1px 4px rgba(15,50,52,.06)' }}>
                <h5 className="text-xs font-semibold tracking-widest text-[#37B2B8] mb-3">RELATED READING</h5>
                <div className="divide-y divide-[#E7EBEA]">
                  {relatedReading.map((r) => (
                    <Link
                      key={r.href}
                      href={r.href}
                      className="block py-2.5 text-sm font-semibold text-[#16201E] hover:text-[#0D5D62] transition-colors"
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

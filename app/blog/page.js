import Link from 'next/link'

const posts = [
  {
    slug: 'what-are-floaters',
    category: 'Eye Health',
    title: 'What Are Floaters?',
    blurb: 'Understanding those small spots drifting across your vision — what causes them and when to be concerned.',
    image: '/images/eye-closeup.jpg',
    imageAlt: 'Close up of a human eye',
  },
  {
    slug: 'diabetic-eye-health-101',
    category: 'Diabetic Care',
    title: 'Diabetic Eye Health 101',
    blurb: 'What every diabetic patient should know about eye exams, retinopathy, and why regular checkups matter.',
    image: '/images/diabetic-equipment.jpg',
    imageAlt: 'Eye testing equipment used to check diabetic eye health',
  },
  {
    slug: 'choosing-the-right-contacts',
    category: 'Contact Lenses',
    title: 'Choosing the Right Contacts',
    blurb: 'A practical guide to daily, multifocal, and specialty lens options — and how to know which fits your life.',
    image: '/images/contact-lens.jpg',
    imageAlt: 'Close up of a contact lens',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="py-16 sm:py-20 lg:py-[100px] px-5 sm:px-8 lg:px-16 bg-[#093F42] text-white text-center">
        <div className="text-[#37B2B8] text-xs sm:text-sm font-semibold mb-4 tracking-widest">FROM THE BLOG</div>
        <h1
          className="font-display text-3xl sm:text-5xl font-medium mb-5"
          style={{ letterSpacing: '-0.03em' }}
        >
          Eye health, explained
        </h1>
        <p className="text-base sm:text-lg text-[#C9E5E3] max-w-2xl mx-auto leading-relaxed">
          Practical guidance from the First Colony Vision team to help you understand and protect your vision.
        </p>
      </section>

      {/* Post grid */}
      <section className="py-16 sm:py-24 lg:py-[100px] px-5 sm:px-8 lg:px-16">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-[#E7EBEA] hover:shadow-lg hover:border-transparent transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-[11px] font-semibold text-[#37B2B8] tracking-widest mb-2">{post.category.toUpperCase()}</div>
                <h4 className="font-display font-semibold text-[#093F42] text-base mb-2" style={{ letterSpacing: '-0.01em' }}>{post.title}</h4>
                <p className="text-[#6E7C77] text-sm leading-relaxed mb-4">{post.blurb}</p>
                <span className="text-sm font-semibold text-[#0D5D62] group-hover:text-[#37B2B8] transition-colors">
                  Read more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter CTA — inspired by mockup news section */}
      <section className="py-14 sm:py-20 lg:py-[100px] px-5 sm:px-8 lg:px-16 bg-[#FBF7F1]">
        <div className="max-w-[1180px] mx-auto bg-[#093F42] rounded-3xl p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="text-[#37B2B8] text-xs font-semibold mb-3 tracking-widest">STAY INFORMED</div>
            <h2
              className="font-display text-2xl sm:text-3xl font-medium text-white mb-2"
              style={{ letterSpacing: '-0.02em' }}
            >
              Eye health tips, a few times a year
            </h2>
            <p className="text-[#C9E5E3] text-[15px] leading-relaxed">
              Practical eye health tips and clinic news from First Colony Vision. Never more than that.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 px-8 py-4 bg-[#0D5D62] hover:bg-[#37B2B8] text-white font-semibold text-sm rounded-xl transition-colors whitespace-nowrap"
          >
            Subscribe
          </a>
        </div>
      </section>
    </div>
  )
}

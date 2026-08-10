import Link from 'next/link'

const posts = [
  {
    slug: 'what-are-floaters',
    category: 'Eye Health',
    title: 'What Are Floaters?',
    blurb: 'Understanding those small spots drifting across your vision.',
    image: '/images/eye-closeup.jpg',
    imageAlt: 'Close up of a human eye',
  },
  {
    slug: 'diabetic-eye-health-101',
    category: 'Diabetic Care',
    title: 'Diabetic Eye Health 101',
    blurb: 'What every diabetic patient should know about eye exams.',
    image: '/images/diabetic-equipment.jpg',
    imageAlt: 'Eye testing equipment used to check diabetic eye health',
  },
  {
    slug: 'choosing-the-right-contacts',
    category: 'Contact Lenses',
    title: 'Choosing the Right Contacts',
    blurb: 'A guide to daily, multifocal, and specialty lens options.',
    image: '/images/contact-lens.jpg',
    imageAlt: 'Close up of a contact lens',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#1E2749] text-white text-center">
        <div className="text-[#D5929F] text-xs sm:text-sm font-bold mb-4 tracking-widest">FROM THE BLOG</div>
        <h1 className="font-display text-3xl sm:text-5xl font-black mb-5">Eye health, explained</h1>
        <p className="text-base sm:text-lg text-[#C0C3CC] max-w-2xl mx-auto leading-relaxed">
          Practical guidance from the Sugar Land Vision team to help you understand and protect your vision.
        </p>
      </section>

      {/* Post grid */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-[#1E2749]/10 hover:shadow-xl press-sm focus-ring"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-[11px] font-bold text-[#B33951] tracking-widest mb-2">{post.category.toUpperCase()}</div>
                <h4 className="font-bold text-[#1E2749] text-base mb-2">{post.title}</h4>
                <p className="text-[#59607A] text-sm leading-relaxed mb-3">{post.blurb}</p>
                <span className="text-sm font-bold text-[#1E2749] group-hover:text-[#B33951] transition-colors">
                  Read more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

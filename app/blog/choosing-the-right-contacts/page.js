import BlogPostLayout from '@/components/BlogPostLayout'

export default function Page() {
  return (
    <BlogPostLayout
      title="Choosing the Right Contacts"
      category="Contact Lenses"
      intro="A guide to daily, multifocal, and specialty lens options."
      image="/images/contact-lens.jpg"
      imageAlt="Close up of a contact lens"
      sections={[
        {
          heading: 'Start With Your Lifestyle',
          paragraphs: [
            "The best contact lens isn't necessarily the newest or most advanced one -- it's the one that fits how you actually live. Active lifestyles often benefit from daily disposables, while those with presbyopia may do better with multifocal lenses that handle both near and distance vision."
          ]
        },
        {
          heading: 'Common Lens Types',
          list: [
            { term: 'Daily disposables', text: 'A fresh, sterile lens every day -- low maintenance and great for sensitive eyes.' },
            { term: 'Multifocal lenses', text: 'Correct near and distance vision in a single lens, ideal for presbyopia.' },
            { term: 'Toric lenses', text: 'Designed specifically to correct astigmatism.' },
            { term: 'Rigid gas permeable (RGP) lenses', text: 'Offer crisp, stable vision for certain prescriptions and hard-to-fit eyes.' }
          ]
        },
        {
          heading: 'Why a Proper Fitting Matters',
          paragraphs: [
            "Contact lenses sit directly on the eye, so fit and material matter as much as prescription strength. A comprehensive contact lens exam measures your cornea's curvature, tear film, and overall eye health to make sure your lenses are comfortable and safe for daily wear."
          ]
        }
      ]}
      ctaBody="Experience the freedom and clarity of contact lenses. Contact First Colony Vision today to schedule a contact lens exam."
      relatedReading={[
        { title: 'Contact Lens Exam Service', href: '/services/contact-lens-exam' },
        { title: 'What Are Floaters?', href: '/blog/what-are-floaters' },
        { title: 'Diabetic Eye Health 101', href: '/blog/diabetic-eye-health-101' }
      ]}
    />
  )
}

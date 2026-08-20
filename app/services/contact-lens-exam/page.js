import ServiceDetailLayout from '@/components/ServiceDetailLayout'

export default function Page() {
  return (
    <ServiceDetailLayout
      title="Contact Lens Exam"
      intro="Experience the freedom and clarity of contact lenses. Our comprehensive contact lens exams ensure a precise fit and optimal comfort for your unique vision needs."
      image="/images/contact-lens.jpg"
      imageAlt="Close up of a contact lens"
      sections={[
        {
          heading: 'Discover the World of Contact Lenses',
          paragraphs: [
            "At First Colony Vision, we offer a wide range of contact lenses to suit every lifestyle and vision need. Whether you're looking for the convenience of daily disposables, the extended wear of multifocals, or the crisp vision of rigid gas permeable lenses, we'll help you find the perfect fit for your eyes.",
            "Our comprehensive contact lens exams go beyond a standard eye exam to ensure your lenses provide optimal vision, comfort, and eye health."
          ]
        },
        {
          heading: 'Why Choose Contact Lenses?',
          paragraphs: ['Contact lenses offer several advantages over traditional eyeglasses:'],
          list: [
            { term: 'Unobstructed Vision', text: 'Enjoy a wider field of vision and clearer peripheral vision, ideal for sports and active lifestyles.' },
            { term: 'Natural Appearance', text: "Contact lenses provide a more natural look, as they don't obscure your facial features." },
            { term: 'Convenience', text: 'No need to worry about glasses fogging up, slipping down, or getting in the way.' },
            { term: 'Versatility', text: 'Choose from a variety of lens types and colors to suit your individual needs and preferences.' }
          ]
        },
        {
          heading: 'Our Contact Lens Exam',
          paragraphs: ['Our comprehensive contact lens exam includes:'],
          list: [
            { term: 'Comprehensive Eye Exam', text: 'A thorough evaluation of your overall eye health and vision.' },
            { term: 'Contact Lens Consultation', text: "We'll discuss your lifestyle, vision needs, and preferences to recommend the best lens options for you." },
            { term: 'Contact Lens Fitting', text: "We'll take precise measurements of your eyes to ensure a comfortable and accurate fit." },
            { term: 'Lens Insertion and Removal Training', text: "We'll teach you how to properly insert, remove, and care for your contact lenses." },
            { term: 'Follow-Up Care', text: "We'll schedule follow-up appointments to monitor your eye health and ensure your lenses continue to provide optimal vision and comfort." }
          ]
        }
      ]}
      ctaBody="Experience the freedom and clarity of contact lenses. Contact First Colony Vision today to schedule a contact lens exam."
      relatedServices={[
        { title: 'Comprehensive Eye Exam', slug: 'comprehensive-eye-exam' },
        { title: 'Sports Vision', slug: 'sports-vision' },
        { title: 'Child Eye Exam', slug: 'child-eye-exam' },
        { title: 'Myopia Control', slug: 'myopia-control' }
      ]}
    />
  )
}

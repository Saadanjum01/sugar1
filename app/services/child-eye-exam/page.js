import ServiceDetailLayout from '@/components/ServiceDetailLayout'

export default function Page() {
  return (
    <ServiceDetailLayout
      title="Child Eye Exam"
      intro="Give your child the gift of clear vision with a comfortable, engaging eye exam designed for young eyes."
      image="/images/pediatric-glasses.jpg"
      imageAlt="Smiling child wearing glasses"
      sections={[
        {
          heading: "Nurturing Your Child's Vision",
          paragraphs: [
            "At First Colony Vision, we understand that a child's vision is essential for their development, learning, and overall well-being. Our child eye exams are designed to provide specialized care for young eyes, ensuring healthy vision and detecting any potential problems early on. We create a comfortable and engaging environment for children, making their eye exam a positive experience."
          ]
        },
        {
          heading: 'Why Are Child Eye Exams Important?',
          paragraphs: ['Many vision problems can develop in childhood, often without any noticeable symptoms. Early detection and intervention are crucial to prevent vision impairment and ensure proper visual development. Child eye exams can help identify:'],
          list: [
            { term: 'Refractive Errors', text: "Nearsightedness, farsightedness, and astigmatism, which can affect a child's ability to see clearly." },
            { term: 'Amblyopia (Lazy Eye)', text: "A condition where one eye doesn't develop proper vision, potentially leading to permanent vision loss if not treated early." },
            { term: 'Strabismus (Crossed Eyes)', text: 'Misalignment of the eyes, which can affect depth perception and visual development.' },
            { term: 'Eye Focusing and Tracking Problems', text: 'Difficulties with focusing or following objects with the eyes, which can impact reading and learning.' },
            { term: 'Eye Health Issues', text: 'Conditions like eye infections, allergies, and congenital eye diseases.' }
          ]
        },
        {
          heading: 'Our Child Eye Exam',
          paragraphs: ['Our comprehensive child eye exam includes:'],
          list: [
            { term: 'Visual Acuity Test', text: "Measures your child's ability to see clearly at various distances, using age-appropriate techniques and charts." },
            { term: 'Eye Health Evaluation', text: 'A thorough examination of the eye structures, including the cornea, lens, and retina, to detect any abnormalities.' },
            { term: 'Binocular Vision Assessment', text: "Evaluates how well your child's eyes work together, checking for eye alignment and coordination problems." },
            { term: 'Eye Focusing and Tracking Tests', text: "Assesses your child's ability to focus and follow objects with their eyes." },
            { term: 'Developmental Assessment', text: "We'll consider your child's developmental milestones and learning needs to provide personalized recommendations." }
          ]
        }
      ]}
      ctaBody="Give your child the gift of clear vision. Contact First Colony Vision today to schedule a child eye exam."
      bookLabel="Book a Child Eye Exam"
      relatedServices={[
        { title: 'Myopia Control', slug: 'myopia-control' },
        { title: 'Comprehensive Eye Exam', slug: 'comprehensive-eye-exam' },
        { title: 'Sports Vision', slug: 'sports-vision' },
        { title: 'Contact Lens Exam', slug: 'contact-lens-exam' }
      ]}
    />
  )
}

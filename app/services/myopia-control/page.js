import ServiceDetailLayout from '@/components/ServiceDetailLayout'

export default function Page() {
  return (
    <ServiceDetailLayout
      title="Myopia Control"
      intro="Protect your child's vision with our advanced myopia control methods, designed to slow the progression of nearsightedness."
      image="/images/frames-tomford.jpg"
      imageAlt="Eyeglasses frames"
      sections={[
        {
          heading: 'Understanding Myopia and Its Impact',
          paragraphs: [
            'Myopia, or nearsightedness, is a common condition where the eyeball grows too long or the cornea is too curved. This causes light to focus in front of the retina instead of directly on it, resulting in blurred distance vision. While common, myopia can worsen over time, leading to the need for stronger prescriptions and increasing the risk of serious eye conditions later in life.',
            "At Sugar Land Vision, we're dedicated to providing proactive solutions to manage myopia, especially in children and young adults. Our experienced optometrists utilize the latest research and advanced technologies to help slow the progression of myopia and protect your child's precious eyesight."
          ]
        },
        {
          heading: 'Why is Myopia Control Important?',
          paragraphs: ['Myopia control offers several significant benefits:'],
          list: [
            { term: 'Slows Myopia Progression', text: "By intervening early, we can help reduce the rate at which your child's nearsightedness worsens, potentially preventing the need for very strong prescriptions in the future." },
            { term: 'Reduces Eye Disease Risk', text: 'High myopia is a risk factor for conditions like retinal detachment, glaucoma, and cataracts. Myopia control can significantly lower the risk of these complications.' },
            { term: 'Improves Quality of Life', text: 'Stable vision means less dependence on glasses or contacts, allowing your child to participate fully in activities they enjoy without limitations.' }
          ]
        }
      ]}
      ctaBody="Protect your child's vision with our advanced myopia control methods. Contact Sugar Land Vision today to schedule a consultation."
      relatedServices={[
        { title: 'Child Eye Exam', slug: 'child-eye-exam' },
        { title: 'Contact Lens Exam', slug: 'contact-lens-exam' },
        { title: 'Comprehensive Eye Exam', slug: 'comprehensive-eye-exam' },
        { title: 'Sports Vision', slug: 'sports-vision' }
      ]}
    />
  )
}

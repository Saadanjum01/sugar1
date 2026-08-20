import ServiceDetailLayout from '@/components/ServiceDetailLayout'

export default function Page() {
  return (
    <ServiceDetailLayout
      title="Red Eye Care"
      intro="Prompt, comfortable care for irritation, infection, allergies, and painful red eyes."
      image="/images/eye-closeup.jpg"
      imageAlt="Close up of a human eye"
      sections={[
        {
          heading: 'Understanding Red Eye',
          paragraphs: [
            'Redness in the eye is one of the most common reasons patients reach out to us, and it can stem from a wide range of causes — minor irritation, allergies, dryness, or an infection such as conjunctivitis (commonly known as pink eye). In most cases, red eye is temporary and resolves with the right care, but because redness can also signal a more serious underlying issue, persistent or painful redness should always be evaluated promptly by an eye care professional.',
            'At First Colony Vision, our optometrists will carefully examine your eyes to determine the cause of your symptoms and recommend an appropriate course of care to help you feel comfortable again.'
          ]
        },
        {
          heading: 'When to See Us',
          list: [
            { text: 'Redness that lasts more than a day or two' },
            { text: 'Discharge or crusting around the eye' },
            { text: 'Sensitivity to light' },
            { text: 'Eye pain or a feeling of pressure' },
            { text: 'Any change in your vision' }
          ]
        },
        {
          heading: 'Why Choose First Colony Vision for Red Eye Care',
          paragraphs: [
            'We know red eye symptoms can be uncomfortable and, at times, worrying — so we prioritize prompt scheduling to get you seen quickly. Our experienced optometrists will perform a thorough evaluation to identify the source of your irritation and build a personalized treatment plan aimed at relieving your symptoms and protecting your long-term eye health.'
          ]
        }
      ]}
      ctaBody="Dealing with a red, irritated eye? Contact First Colony Vision today to schedule prompt red eye care."
      relatedServices={[
        { title: 'Emergency Eye Exam', slug: 'emergency-medical-exam' },
        { title: 'Comprehensive Eye Exam', slug: 'comprehensive-eye-exam' },
        { title: 'Contact Lens Exam', slug: 'contact-lens-exam' },
        { title: 'Diabetic Eye Exam', slug: 'diabetic-eye-exam' }
      ]}
    />
  )
}

import ServiceDetailLayout from '@/components/ServiceDetailLayout'

export default function Page() {
  return (
    <ServiceDetailLayout
      title="Migraine Management"
      intro="Identifying visual triggers and management strategies to help reduce the frequency and impact of migraines."
      image="/images/office-exterior.jpg"
      imageAlt="Patient consultation at First Colony Vision"
      sections={[
        {
          heading: 'The Connection Between Vision and Migraines',
          paragraphs: [
            "Migraines can be triggered or worsened by a variety of factors, and vision is often an overlooked piece of the puzzle. Visual strain, uncorrected refractive error, and binocular vision problems (issues with how your eyes work together) can all contribute to headache frequency and severity. A comprehensive eye exam can help identify whether a visual issue is playing a role in your symptoms, and can be an important part of a broader migraine management plan developed alongside your physician or neurologist."
          ]
        },
        {
          heading: 'Our Approach',
          list: [
            { term: 'Comprehensive Exam', text: 'We conduct a thorough evaluation to rule out or identify visual triggers, including refractive error and binocular vision issues.' },
            { term: 'Symptom Review', text: "We'll discuss the patterns and circumstances surrounding your migraines to better understand potential visual contributors." },
            { term: 'Personalized Recommendations', text: "Based on our findings, we'll recommend appropriate corrective lenses or other strategies tailored to your needs." },
            { term: 'Coordinated Care', text: 'We work alongside your primary care physician or neurologist to support your overall migraine treatment plan.' }
          ]
        }
      ]}
      ctaBody="Think your vision may be contributing to your migraines? Contact First Colony Vision today to schedule a consultation."
      relatedServices={[
        { title: 'Comprehensive Eye Exam', slug: 'comprehensive-eye-exam' },
        { title: 'Red Eye Care', slug: 'red-eye-care' },
        { title: 'Emergency Eye Exam', slug: 'emergency-medical-exam' },
        { title: 'Contact Lens Exam', slug: 'contact-lens-exam' }
      ]}
    />
  )
}

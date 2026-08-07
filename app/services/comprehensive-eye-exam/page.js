import ServiceDetailLayout from '@/components/ServiceDetailLayout'

export default function Page() {
  return (
    <ServiceDetailLayout
      title="Comprehensive Eye Exam"
      intro="See the world with clarity and confidence. Our comprehensive eye exams go beyond vision correction, providing a thorough assessment of your eye health and overall well-being."
      image="/images/eye-chart.jpg"
      imageAlt="Eye chart used during comprehensive eye exams"
      sections={[
        {
          heading: 'Understanding Your Comprehensive Eye Exam',
          paragraphs: [
            "We believe in providing comprehensive eye care that goes beyond just updating your prescription. Our comprehensive eye exams are a vital step in maintaining your long-term eye health and overall well-being. We utilize state-of-the-art technology and a patient-centered approach to ensure a thorough and comfortable experience. During your exam, our experienced optometrists will assess every aspect of your vision and eye health, looking for early signs of potential problems and providing personalized recommendations to protect your sight."
          ]
        },
        {
          heading: 'Why Are Comprehensive Eye Exams Essential?',
          paragraphs: [
            "Regular eye exams are vital for preserving your vision and protecting your overall health. Many serious eye diseases, like glaucoma and macular degeneration, often develop without noticeable symptoms in their early stages. Early detection is key to preventing vision loss and managing these conditions effectively. Furthermore, changes in your vision can be an indicator of other health problems, allowing us to connect you with the appropriate medical professionals for comprehensive care."
          ]
        }
      ]}
      ctaBody="See the world with clarity and confidence. Contact Sugar Land Vision today to schedule your comprehensive eye exam."
      relatedServices={[
        { title: 'Contact Lens Exam', slug: 'contact-lens-exam' },
        { title: 'Diabetic Eye Exam', slug: 'diabetic-eye-exam' },
        { title: 'Child Eye Exam', slug: 'child-eye-exam' },
        { title: 'Emergency Eye Exam', slug: 'emergency-medical-exam' }
      ]}
    />
  )
}

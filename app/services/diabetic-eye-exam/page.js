import ServiceDetailLayout from '@/components/ServiceDetailLayout'

export default function Page() {
  return (
    <ServiceDetailLayout
      title="Diabetic Eye Exam"
      intro="At First Colony Vision, we're committed to providing comprehensive diabetic eye care to protect your sight."
      image="/images/diabetic-equipment.jpg"
      imageAlt="Diabetic eye exam equipment"
      sections={[
        {
          heading: 'Understanding Diabetic Retinopathy',
          paragraphs: [
            "Diabetes is a prevalent health concern, affecting millions of Americans. While many are aware of its impact on overall health, it's crucial to understand its potential effects on vision. Diabetic retinopathy is a serious complication of diabetes that can lead to vision loss if left unmanaged.",
            "At First Colony Vision, we're committed to providing comprehensive diabetic eye care to protect your sight. Our experienced optometrists utilize advanced technology and a patient-centered approach to detect and manage diabetic retinopathy, preserving your vision and overall well-being."
          ]
        },
        {
          heading: 'How Diabetes Affects Your Eyes',
          paragraphs: ['High blood sugar levels associated with diabetes can damage the delicate blood vessels in the retina, the light-sensitive tissue at the back of your eye. This damage can lead to:'],
          list: [
            { term: 'Leaking blood vessels', text: 'Causing fluid buildup and swelling in the retina.' },
            { term: 'Abnormal blood vessel growth', text: 'These new vessels are fragile and prone to bleeding, further damaging the retina.' },
            { term: 'Retinal detachment', text: 'In severe cases, the retina can detach from the back of the eye, leading to significant vision loss.' }
          ]
        },
        {
          heading: 'Who is at Risk?',
          paragraphs: ['Anyone with diabetes, whether Type 1 or Type 2, is at risk for diabetic retinopathy. However, certain factors increase the risk:'],
          list: [
            { text: 'Poorly controlled blood sugar levels' },
            { text: 'Long history of diabetes' },
            { text: 'High blood pressure' },
            { text: 'High cholesterol' },
            { text: 'Pregnancy' }
          ]
        },
        {
          heading: 'Why Choose First Colony Vision for Diabetic Eye Care?',
          list: [
            { term: 'Early Detection', text: 'We use advanced technology to detect even subtle signs of diabetic retinopathy, allowing for early intervention and management.' },
            { term: 'Comprehensive Care', text: 'We work closely with your primary care physician and other specialists to provide coordinated care for your overall health and vision.' },
            { term: 'Personalized Treatment Plans', text: 'Our optometrists will develop a customized management plan based on your individual needs and the severity of your condition.' },
            { term: 'Patient Education', text: "We'll provide you with the information and support you need to understand your condition and manage it effectively." }
          ]
        }
      ]}
      ctaBody="Protect your vision from diabetes with our specialized diabetic eye exams. Contact First Colony Vision today to schedule an appointment."
      relatedServices={[
        { title: 'Comprehensive Eye Exam', slug: 'comprehensive-eye-exam' },
        { title: 'Emergency Eye Exam', slug: 'emergency-medical-exam' },
        { title: 'Red Eye Care', slug: 'red-eye-care' },
        { title: 'Contact Lens Exam', slug: 'contact-lens-exam' }
      ]}
    />
  )
}

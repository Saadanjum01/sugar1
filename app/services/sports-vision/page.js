import ServiceDetailLayout from '@/components/ServiceDetailLayout'

export default function Page() {
  return (
    <ServiceDetailLayout
      title="Sports Vision"
      intro="Enhancing athletic performance through vision. Gain a competitive edge with our specialized sports vision services."
      image="/images/sports-runner.jpg"
      imageAlt="Athlete running on a track"
      sections={[
        {
          heading: 'Enhancing Athletic Performance Through Vision',
          paragraphs: [
            'At First Colony Vision, we understand that peak athletic performance requires more than just physical prowess. Vision plays a crucial role in every sport, from tracking a fast-moving ball to judging distances and reacting quickly to changing situations. Our specialized sports vision services are designed to optimize your visual skills and give you a competitive advantage.'
          ]
        },
        {
          heading: 'Key Visual Skills for Athletes',
          list: [
            { term: 'Visual Acuity', text: 'See clearly at all distances to track objects, opponents, and the playing field with precision.' },
            { term: 'Depth Perception', text: 'Accurately judge distances for catching, throwing, and avoiding obstacles.' },
            { term: 'Eye-Hand Coordination', text: 'Seamlessly connect what you see with your physical actions, improving timing and accuracy.' },
            { term: 'Peripheral Vision', text: 'Maintain awareness of your surroundings and anticipate plays.' },
            { term: 'Tracking', text: 'Smoothly follow moving objects with your eyes, keeping your focus sharp.' },
            { term: 'Visual Reaction Time', text: 'React quickly to visual stimuli, gaining crucial milliseconds in competition.' },
            { term: 'Focus Flexibility', text: 'Shift focus rapidly between objects and distances, maintaining visual clarity.' },
            { term: 'Convergence and Divergence', text: 'Effortlessly focus on objects both near and far, ensuring optimal vision at all times.' }
          ]
        },
        {
          heading: 'Why Choose First Colony Vision for Sports Vision?',
          paragraphs: [
            "Our experienced optometrists have advanced training in sports vision and utilize the latest technologies to assess and enhance your visual skills. We understand the unique demands of different sports and tailor our programs to your specific needs and goals. Whether you're a seasoned professional or a budding athlete, we can help you unlock your full potential through optimized vision."
          ]
        }
      ]}
      ctaBody="Gain a competitive edge with our specialized sports vision services. Contact First Colony Vision today to schedule a consultation."
      relatedServices={[
        { title: 'Contact Lens Exam', slug: 'contact-lens-exam' },
        { title: 'Comprehensive Eye Exam', slug: 'comprehensive-eye-exam' },
        { title: 'Child Eye Exam', slug: 'child-eye-exam' },
        { title: 'Myopia Control', slug: 'myopia-control' }
      ]}
    />
  )
}

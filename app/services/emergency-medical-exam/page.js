import ServiceDetailLayout from '@/components/ServiceDetailLayout'

export default function Page() {
  return (
    <ServiceDetailLayout
      title="Emergency Eye Exam"
      intro="Eye emergencies can range from minor irritations to severe injuries that threaten your vision. We provide prompt and expert care when you need it most."
      image="/images/hero-eye-exam.jpg"
      imageAlt="Optometrist providing urgent eye care"
      sections={[
        {
          heading: 'Recognizing and Responding to Eye Emergencies',
          paragraphs: [
            "Eye emergencies can range from minor irritations to severe injuries that threaten your vision. Because the eye is so delicate, even seemingly small injuries can lead to serious complications if left untreated. At Sugar Land Vision, we're equipped to handle a wide range of eye emergencies, providing prompt and expert care to protect your sight. We understand that eye emergencies can be frightening, and we're here to provide compassionate and effective treatment when you need it most."
          ]
        },
        {
          heading: 'Common Eye Emergencies',
          list: [
            { term: 'Trauma', text: 'Cuts, scratches, punctures, or blunt force injuries to the eye or eyelid.' },
            { term: 'Foreign Objects', text: 'Anything lodged in the eye, such as dust, debris, metal shavings, or glass.' },
            { term: 'Burns', text: 'Chemical or thermal burns to the eye or surrounding area.' },
            { term: 'Chemical Exposure', text: 'Contact with irritants or corrosive substances.' },
            { term: 'Photic Retinopathy', text: 'Damage to the retina from exposure to intense light (e.g., looking directly at the sun).' },
            { term: 'Sudden Vision Changes', text: 'Loss of vision (partial or total), double vision, floaters, blurred vision, or other visual disturbances.' },
            { term: 'Painful Red Eye', text: 'Redness, irritation, and pain in the eye, which may be accompanied by discharge.' },
            { term: 'Other Urgent Eye Problems', text: 'Conditions like blood clots, glaucoma attacks, or infections requiring immediate attention.' }
          ]
        },
        {
          heading: 'When to Seek Emergency Eye Care',
          paragraphs: ['Any of the following symptoms warrant immediate attention from an eye care professional:'],
          list: [
            { text: 'Bleeding or discharge from or around the eye' },
            { text: 'Bruising around the eye' },
            { text: 'Decreased or loss of vision (partial or total) in one or both eyes' },
            { text: 'Double vision' },
            { text: 'Pupils of unequal size' },
            { text: 'Eye pain (especially if severe or accompanied by other symptoms)' },
            { text: 'New or severe headaches, especially with eye pain or vision changes' },
            { text: 'The sensation of something in the eye that cannot be removed' },
            { text: 'Sensitivity to light' },
            { text: 'Stinging or burning in the eye' },
            { text: 'One eye not moving like the other' },
            { text: 'One eye bulging or protruding' },
            { text: 'Nausea or vomiting with eye pain (may indicate glaucoma or a neurological issue)' }
          ]
        },
        {
          heading: 'Why Choose Sugar Land Vision for Your Eye Emergency?',
          paragraphs: [
            'While urgent care centers can be helpful, they often lack the specialized equipment and expertise needed to accurately diagnose and treat complex eye conditions. At Sugar Land Vision, our optometrists have the advanced training and technology to handle a wide range of eye emergencies, ensuring you receive the best possible care. We can quickly assess your situation, provide appropriate treatment, and minimize the risk of long-term vision problems. We also understand the importance of timely intervention and strive to see emergency patients as quickly as possible.'
          ]
        }
      ]}
      ctaBody="Experiencing an eye emergency? Contact Sugar Land Vision right away for prompt, expert care."
      relatedServices={[
        { title: 'Red Eye Care', slug: 'red-eye-care' },
        { title: 'Comprehensive Eye Exam', slug: 'comprehensive-eye-exam' },
        { title: 'Diabetic Eye Exam', slug: 'diabetic-eye-exam' },
        { title: 'Migraine Management', slug: 'migraine-management' }
      ]}
    />
  )
}

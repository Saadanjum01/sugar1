import BlogPostLayout from '@/components/BlogPostLayout'

export default function Page() {
  return (
    <BlogPostLayout
      title="What Are Floaters?"
      category="Eye Health"
      intro="Understanding those small spots drifting across your vision."
      image="/images/eye-closeup.jpg"
      imageAlt="Close up of a human eye"
      sections={[
        {
          heading: 'What Causes Floaters?',
          paragraphs: [
            "Floaters are small specks, threads, or cobweb-like shapes that drift through your field of vision, often most noticeable against a bright background like a clear sky or a blank page. They're caused by tiny clumps of the gel-like vitreous that fills the inside of your eye, which cast shadows on your retina as they move."
          ]
        },
        {
          heading: 'Are Floaters Normal?',
          paragraphs: [
            'A few floaters are common, especially as we get older and the vitreous naturally changes texture. Most floaters are harmless and become less noticeable over time as your brain adapts to them.'
          ]
        },
        {
          heading: 'When Floaters Need Attention',
          list: [
            { text: 'A sudden increase in the number of floaters' },
            { text: 'Flashes of light in your vision' },
            { text: 'A dark shadow or curtain appearing in your peripheral vision' },
            { text: 'Any sudden change in vision' }
          ],
          paragraphs: [
            'These can be signs of a retinal tear or detachment, which requires prompt evaluation. If you notice any of the changes above, contact our office right away.'
          ]
        }
      ]}
      ctaBody="Concerned about floaters or a sudden change in your vision? Contact Sugar Land Vision to schedule an evaluation."
      relatedReading={[
        { title: 'Diabetic Eye Health 101', href: '/blog/diabetic-eye-health-101' },
        { title: 'Choosing the Right Contacts', href: '/blog/choosing-the-right-contacts' },
        { title: 'Emergency Eye Exam', href: '/services/emergency-medical-exam' }
      ]}
    />
  )
}

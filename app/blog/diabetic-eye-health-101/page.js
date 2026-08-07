import BlogPostLayout from '@/components/BlogPostLayout'

export default function Page() {
  return (
    <BlogPostLayout
      title="Diabetic Eye Health 101"
      category="Diabetic Care"
      intro="What every diabetic patient should know about eye exams."
      image="/images/diabetic-equipment.jpg"
      imageAlt="Eye testing equipment"
      sections={[
        {
          heading: 'Why Diabetes and Eye Health Are Connected',
          paragraphs: [
            'Diabetes affects millions of Americans, and while most people know it impacts blood sugar and overall health, fewer realize how significantly it can affect vision. High blood sugar can damage the small blood vessels in the retina over time -- a condition called diabetic retinopathy -- and it can develop with no early symptoms at all.'
          ]
        },
        {
          heading: 'How Often Should Diabetic Patients Get an Eye Exam?',
          paragraphs: [
            'Anyone with Type 1 or Type 2 diabetes should have a comprehensive, dilated eye exam at least once a year, even without noticeable vision changes. Early stages of diabetic retinopathy often show no symptoms, which is why regular screening is the best defense against vision loss.'
          ]
        },
        {
          heading: 'Simple Habits That Protect Your Eyes',
          list: [
            { text: 'Keep blood sugar levels as consistent as possible' },
            { text: 'Manage blood pressure and cholesterol' },
            { text: 'Schedule annual dilated eye exams, even if your vision feels fine' },
            { text: 'Report any sudden vision changes to your eye doctor right away' }
          ]
        }
      ]}
      ctaBody="Protect your vision from diabetes with our specialized diabetic eye exams. Contact Sugar Land Vision today to schedule an appointment."
      relatedReading={[
        { title: 'Diabetic Eye Exam Service', href: '/services/diabetic-eye-exam' },
        { title: 'What Are Floaters?', href: '/blog/what-are-floaters' },
        { title: 'Choosing the Right Contacts', href: '/blog/choosing-the-right-contacts' }
      ]}
    />
  )
}

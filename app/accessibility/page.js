import LegalLayout from '@/components/LegalLayout'

export default function AccessibilityPage() {
  return (
    <LegalLayout
      title="Accessibility Statement"
      intro="Our commitment to making this website usable by everyone."
      updatedNote="Placeholder document -- to be reviewed for full compliance prior to launch."
    >
      <div>
        <h3 className="font-bold text-xl text-[#1E2749] mb-3">Our Commitment</h3>
        <p className="text-[#33415C] text-base leading-relaxed">
          Sugar Land Vision is committed to ensuring digital accessibility for people of all abilities. We aim for this website to meet applicable accessibility laws and standards, including the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and the Americans with Disabilities Act (ADA).
        </p>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#1E2749] mb-3">Accessibility Features</h3>
        <ul className="space-y-3">
          {[
            'Semantic HTML structure to support screen readers',
            'Sufficient color contrast between text and background',
            'Keyboard-navigable menus and forms',
            'Descriptive alt text for images',
            'Responsive layout that adapts to assistive zoom and mobile devices',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-[#33415C] text-[15.5px] leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B33951] flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#1E2749] mb-3">Ongoing Efforts</h3>
        <p className="text-[#33415C] text-base leading-relaxed">
          We continue to review and improve the accessibility of our website. If you use assistive technology and encounter a barrier, we want to know so we can address it.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#1E2749] mb-3">Feedback</h3>
        <p className="text-[#33415C] text-base leading-relaxed">
          If you experience any difficulty accessing content on this website, please contact us at 281-916-2020 so we can assist you and make improvements.
        </p>
      </div>
    </LegalLayout>
  )
}

import LegalLayout from '@/components/LegalLayout'

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="How First Colony Vision collects, uses, and protects your information."
      updatedNote="Placeholder document -- final policy to be supplied by the practice prior to launch."
    >
      <div>
        <h3 className="font-bold text-xl text-[#1E2749] mb-3">1. Information We Collect</h3>
        <p className="text-[#33415C] text-base leading-relaxed">
          When you visit our website or request an appointment, we may collect information such as your name, phone number, email address, and any details you choose to share about your reason for visiting. This placeholder section will be replaced with the practice&apos;s finalized data collection policy.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#1E2749] mb-3">2. How We Use Your Information</h3>
        <p className="text-[#33415C] text-base leading-relaxed">
          Information submitted through our website is used to respond to appointment requests, answer questions, and communicate with you about your care. We do not sell your personal information to third parties.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#1E2749] mb-3">3. Cookies and Website Analytics</h3>
        <p className="text-[#33415C] text-base leading-relaxed">
          Our website may use cookies or similar technologies to understand how visitors use the site and to improve our services. You can control cookie preferences through your browser settings.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#1E2749] mb-3">4. Protected Health Information</h3>
        <p className="text-[#33415C] text-base leading-relaxed">
          Any protected health information shared with our practice is handled in accordance with HIPAA regulations. See our{' '}
          <a href="/hipaa" className="text-[#B33951] font-semibold hover:underline">HIPAA Notice</a> for details on how your medical information is protected.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#1E2749] mb-3">5. Contact Us</h3>
        <p className="text-[#33415C] text-base leading-relaxed">
          If you have questions about this privacy policy, please contact us at 281-916-2020 or visit us at 16126 Southwest Fwy, Ste 180, Sugar Land, TX 77479.
        </p>
      </div>
    </LegalLayout>
  )
}

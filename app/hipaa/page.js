import LegalLayout from '@/components/LegalLayout'

export default function HipaaPage() {
  return (
    <LegalLayout
      title="HIPAA Notice of Privacy Practices"
      intro="How First Colony Vision protects your health information under HIPAA."
      updatedNote="Placeholder document -- First Colony Vision will supply its official HIPAA Notice of Privacy Practices for publication on this page."
    >
      <div>
        <h3 className="font-bold text-xl text-[#093F42] mb-3">Our Commitment to Your Privacy</h3>
        <p className="text-[#6E7C77] text-base leading-relaxed">
          First Colony Vision is committed to protecting the privacy of your health information in accordance with the Health Insurance Portability and Accountability Act (HIPAA). This notice describes how your medical information may be used and disclosed, and how you can access it.
        </p>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#093F42] mb-3">How We May Use and Disclose Your Health Information</h3>
        <ul className="space-y-3">
          <li className="flex gap-3 text-[#6E7C77] text-[15.5px] leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#37B2B8] flex-shrink-0"></span>
            <span><b className="text-[#093F42]">For treatment</b> -- to coordinate your care among our providers and any specialists you&apos;re referred to.</span>
          </li>
          <li className="flex gap-3 text-[#6E7C77] text-[15.5px] leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#37B2B8] flex-shrink-0"></span>
            <span><b className="text-[#093F42]">For payment</b> -- to bill insurance providers and process payments for services rendered.</span>
          </li>
          <li className="flex gap-3 text-[#6E7C77] text-[15.5px] leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#37B2B8] flex-shrink-0"></span>
            <span><b className="text-[#093F42]">For healthcare operations</b> -- to manage and improve the quality of care we provide.</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#093F42] mb-3">Your Rights</h3>
        <ul className="space-y-3">
          <li className="flex gap-3 text-[#6E7C77] text-[15.5px] leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#37B2B8] flex-shrink-0"></span>
            <span>The right to request a copy of your medical records.</span>
          </li>
          <li className="flex gap-3 text-[#6E7C77] text-[15.5px] leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#37B2B8] flex-shrink-0"></span>
            <span>The right to request corrections to your health information.</span>
          </li>
          <li className="flex gap-3 text-[#6E7C77] text-[15.5px] leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#37B2B8] flex-shrink-0"></span>
            <span>The right to request restrictions on certain uses or disclosures.</span>
          </li>
          <li className="flex gap-3 text-[#6E7C77] text-[15.5px] leading-relaxed">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#37B2B8] flex-shrink-0"></span>
            <span>The right to receive a paper copy of this notice upon request.</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-xl text-[#093F42] mb-3">Questions or Concerns</h3>
        <p className="text-[#6E7C77] text-base leading-relaxed">
          If you have questions about our privacy practices or wish to file a complaint, please contact our office at 281-916-2020 or visit us at 16126 Southwest Fwy, Ste 180, Sugar Land, TX 77479.
        </p>
      </div>
    </LegalLayout>
  )
}

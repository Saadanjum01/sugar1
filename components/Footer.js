import Link from 'next/link'
import { Phone, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#093F42] text-white py-16 sm:py-20 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-12 sm:mb-16">
          <div>
            <Link href="/" className="inline-flex flex-col leading-none mb-6" aria-label="First Colony Vision — home">
              <span className="font-display font-semibold text-[17px] text-white" style={{ letterSpacing: '-0.02em' }}>
                First Colony
              </span>
              <span className="text-[11px] font-semibold tracking-[0.12em] text-[#37B2B8]">
                VISION
              </span>
            </Link>
            <p className="text-[#6E7C77] text-sm leading-relaxed">
              Family eye care in First Colony, Sugar Land, Texas
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-widest text-white">EXPLORE</h4>
            <div className="space-y-2.5">
              <Link href="/services" className="block text-[#6E7C77] text-sm hover:text-[#37B2B8] transition-colors">Services</Link>
              <Link href="/doctor" className="block text-[#6E7C77] text-sm hover:text-[#37B2B8] transition-colors">Our Team</Link>
              <Link href="/insurance" className="block text-[#6E7C77] text-sm hover:text-[#37B2B8] transition-colors">Insurance</Link>
              <Link href="/blog" className="block text-[#6E7C77] text-sm hover:text-[#37B2B8] transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-widest text-white">CONTACT</h4>
            <a href="tel:281-916-2020" className="text-[#6E7C77] text-sm block mb-2 hover:text-[#37B2B8] transition-colors">
              281-916-2020
            </a>
            <p className="text-[#6E7C77] text-sm leading-relaxed mb-2">
              16126 Southwest Fwy Ste 180<br />
              Sugar Land, TX 77479
            </p>
            <p className="text-[#6E7C77] text-sm">
              Tue–Fri: 9:30 AM–6:00 PM
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-widest text-white">LEGAL</h4>
            <div className="space-y-2.5">
              <Link href="/privacy" className="block text-[#6E7C77] text-sm hover:text-[#37B2B8] transition-colors">Privacy Policy</Link>
              <Link href="/hipaa" className="block text-[#6E7C77] text-sm hover:text-[#37B2B8] transition-colors">HIPAA Notice</Link>
              <Link href="/accessibility" className="block text-[#6E7C77] text-sm hover:text-[#37B2B8] transition-colors">Accessibility</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 tracking-widest text-white">FOLLOW</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#6E7C77] hover:text-[#37B2B8] transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#6E7C77] hover:text-[#37B2B8] transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#6E7C77] hover:text-[#37B2B8] transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-[#6E7C77] text-sm">
          <p>© 2026 First Colony Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

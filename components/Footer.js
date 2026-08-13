import Link from 'next/link'
import { Phone, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1E2749] text-white py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div>
            <Link href="/" className="inline-flex bg-white rounded-xl px-4 py-3 mb-6" aria-label="Sugar Land Vision Center — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.png"
                alt="Sugar Land Vision Center"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[#59607A] text-sm leading-relaxed">
              Premium eye care in Sugar Land, Texas
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 tracking-widest">EXPLORE</h4>
            <div className="space-y-2.5">
              <Link href="/services" className="block text-[#59607A] text-sm hover:text-[#B33951] transition-colors">Services</Link>
              <Link href="/doctor" className="block text-[#59607A] text-sm hover:text-[#B33951] transition-colors">Our Team</Link>
              <Link href="/insurance" className="block text-[#59607A] text-sm hover:text-[#B33951] transition-colors">Insurance</Link>
              <Link href="/frames" className="block text-[#59607A] text-sm hover:text-[#B33951] transition-colors">Frames</Link>
              <Link href="/blog" className="block text-[#59607A] text-sm hover:text-[#B33951] transition-colors">Blog</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 tracking-widest">CONTACT</h4>
            <a href="tel:281-916-2020" className="text-[#59607A] text-sm block mb-2 hover:text-[#B33951] transition-colors">
              281-916-2020
            </a>
            <p className="text-[#59607A] text-sm leading-relaxed mb-2">
              16126 Southwest Fwy Ste 180<br/>
              Sugar Land, TX 77479
            </p>
            <p className="text-[#59607A] text-sm">
              Tue–Fri: 9:30 AM–6:00 PM
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 tracking-widest">LEGAL</h4>
            <div className="space-y-2.5">
              <Link href="/privacy" className="block text-[#59607A] text-sm hover:text-[#B33951] transition-colors">Privacy Policy</Link>
              <Link href="/hipaa" className="block text-[#59607A] text-sm hover:text-[#B33951] transition-colors">HIPAA Notice</Link>
              <Link href="/accessibility" className="block text-[#59607A] text-sm hover:text-[#B33951] transition-colors">Accessibility</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 tracking-widest">FOLLOW</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#59607A] hover:text-[#B33951] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#59607A] hover:text-[#B33951] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#59607A] hover:text-[#B33951] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-[#59607A] text-sm">
          <p>© 2026 Sugar Land Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

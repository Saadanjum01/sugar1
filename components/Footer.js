import Link from 'next/link'
import { Phone, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A1828] text-white py-20 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl mb-6">SUGAR LAND VISION</h3>
            <p className="text-[#8B9A9F] text-sm leading-relaxed">
              Premium eye care in Sugar Land, Texas
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 tracking-widest">LOCATION</h4>
            <p className="text-[#8B9A9F] text-sm leading-relaxed">
              16126 Southwest Fwy Ste 180<br/>
              Sugar Land, TX 77479
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 tracking-widest">CONTACT</h4>
            <a href="tel:281-916-2020" className="text-[#8B9A9F] text-sm block mb-2 hover:text-[#C85A3E] transition-colors">
              281-916-2020
            </a>
            <p className="text-[#8B9A9F] text-sm">
              Tue–Fri: 9:30 AM–6:00 PM
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 tracking-widest">FOLLOW</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#8B9A9F] hover:text-[#C85A3E] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#8B9A9F] hover:text-[#C85A3E] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#8B9A9F] hover:text-[#C85A3E] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-[#8B9A9F] text-sm">
          <p>© 2026 Sugar Land Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

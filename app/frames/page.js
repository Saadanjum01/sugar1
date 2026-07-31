'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FramesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/30271002/pexels-photo-30271002.jpeg"
            alt="Designer eyewear"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1828] via-[#0A1828]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full px-8 lg:px-16 py-32">
          <Link href="/" className="inline-flex items-center space-x-2 text-sm font-bold mb-12 text-white hover:text-[#C85A3E] transition-colors">
            <span>←</span>
            <span>BACK</span>
          </Link>
          <div className="max-w-4xl">
            <div className="text-[#C85A3E] text-sm font-bold mb-6 tracking-widest">PREMIUM EYEWEAR</div>
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8">
              DESIGNER<br/>FRAMES
            </h1>
            <p className="text-xl text-[#B8C4CE] max-w-xl mb-12 leading-relaxed">
              Curated collection of luxury eyewear from world-renowned designers. Style meets function.
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-32 px-8 lg:px-16">
        <div className="mb-20">
          <h2 className="font-display text-5xl lg:text-7xl mb-6">FEATURED BRANDS</h2>
          <div className="h-2 w-32 bg-[#C85A3E]"></div>
        </div>

        {/* Tom Ford */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
            <div>
              <div className="text-[#C85A3E] text-sm font-bold mb-4 tracking-widest">LUXURY FASHION</div>
              <h3 className="font-display text-6xl lg:text-8xl mb-8">TOM FORD</h3>
              <p className="text-xl text-[#8B9A9F] mb-8 leading-relaxed">
                Italian craftsmanship meets modern elegance. Bold designs that command attention and exude confidence.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C85A3E]"></div>
                  <span className="text-lg">Handcrafted in Italy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C85A3E]"></div>
                  <span className="text-lg">Premium acetate & metal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C85A3E]"></div>
                  <span className="text-lg">Iconic T-logo detail</span>
                </div>
              </div>
              <button className="inline-flex items-center space-x-3 px-10 py-4 bg-[#0A1828] text-white font-bold hover:bg-[#C85A3E] transition-all">
                <span>VIEW COLLECTION</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                  alt="Tom Ford eyewear collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.pexels.com/photos/30271002/pexels-photo-30271002.jpeg"
                  alt="Tom Ford eyewear"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1643110279326-6ff17149856a"
                  alt="Tom Ford frames"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1508296695146-257a814070b4?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                  alt="Luxury eyewear"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wiley X */}
        <div className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square">
                  <img 
                    src="https://images.pexels.com/photos/5201894/pexels-photo-5201894.jpeg"
                    alt="Wiley X sports eyewear"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square">
                  <img 
                    src="https://images.pexels.com/photos/5201894/pexels-photo-5201894.jpeg"
                    alt="Wiley X eyewear"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1769414123505-d53607809609?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxkZXNpZ25lciUyMGdsYXNzZXN8ZW58MHx8fHwxNzg1NDM2Mzg4fDA&ixlib=rb-4.1.0&q=85"
                    alt="Wiley X frames"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                    alt="Wiley X protective frames"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-[#C85A3E] text-sm font-bold mb-4 tracking-widest">PERFORMANCE & PROTECTION</div>
              <h3 className="font-display text-6xl lg:text-8xl mb-8">WILEY X</h3>
              <p className="text-xl text-[#8B9A9F] mb-8 leading-relaxed">
                High-performance eyewear engineered for protection. Perfect for active lifestyles, sports, and tactical applications.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C85A3E]"></div>
                  <span className="text-lg">ANSI Z87.1 certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C85A3E]"></div>
                  <span className="text-lg">Shatterproof lenses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C85A3E]"></div>
                  <span className="text-lg">UV400 protection</span>
                </div>
              </div>
              <button className="inline-flex items-center space-x-3 px-10 py-4 bg-[#0A1828] text-white font-bold hover:bg-[#C85A3E] transition-all">
                <span>VIEW COLLECTION</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lens Options */}
      <section className="py-32 px-8 lg:px-16 bg-[#0A1828] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl lg:text-7xl mb-20 text-center">PREMIUM LENS OPTIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'ANTI-REFLECTIVE', desc: 'Eliminates glare for clearer vision' },
              { title: 'BLUE LIGHT', desc: 'Filters harmful digital screen light' },
              { title: 'PROGRESSIVE', desc: 'Seamless multi-distance correction' },
              { title: 'PHOTOCHROMIC', desc: 'Auto-adjusting to light conditions' },
              { title: 'POLARIZED', desc: 'Superior glare reduction outdoors' },
              { title: 'HIGH-INDEX', desc: 'Thinner, lighter for strong Rx' }
            ].map((lens) => (
              <div key={lens.title} className="border-2 border-white/20 p-8 hover:bg-[#C85A3E] hover:border-[#C85A3E] transition-all group">
                <h3 className="font-display text-2xl mb-3 group-hover:text-white">{lens.title}</h3>
                <p className="text-[#B8C4CE] group-hover:text-white/90">{lens.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-32 px-8 lg:px-16 text-center">
        <h2 className="font-display text-5xl lg:text-7xl mb-8">MORE COMING SOON</h2>
        <p className="text-xl text-[#8B9A9F] max-w-2xl mx-auto mb-12">
          We're constantly expanding our collection. Visit our office to see our full selection and find your perfect frames.
        </p>
        <a href="#book" className="inline-block px-12 py-5 bg-[#C85A3E] text-white font-bold text-lg hover:bg-[#0A1828] transition-all rounded-xl">
          SCHEDULE FITTING
        </a>
      </section>
    </div>
  )
}

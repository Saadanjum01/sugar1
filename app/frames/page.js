'use client'

import { useState, useMemo } from 'react'
import { IconGlasses } from '@/components/BrandIcons'

const BRANDS = ['Tom Ford', 'Wiley X', 'Ray-Ban', 'Oakley', 'Warby Parker']
const STYLES = ['Optical', 'Sunglasses', 'Sport']

const PRODUCTS = [
  { id: 1,  name: 'Havana Round',      brand: 'Tom Ford',     style: 'Optical',     price: 285, img: '/images/frames/frame-01.jpg' },
  { id: 2,  name: 'Aviator Classic',   brand: 'Ray-Ban',      style: 'Sunglasses',  price: 165, img: '/images/frames/frame-02.jpg' },
  { id: 3,  name: 'Tortoise Rim',      brand: 'Warby Parker', style: 'Optical',     price: 145, img: '/images/frames/frame-03.jpg' },
  { id: 4,  name: 'Field Runner',      brand: 'Wiley X',      style: 'Sport',       price: 195, img: '/images/frames/frame-04.jpg' },
  { id: 5,  name: 'Minimal Steel',     brand: 'Warby Parker', style: 'Optical',     price: 135, img: '/images/frames/frame-05.jpg' },
  { id: 6,  name: 'Gold Round',        brand: 'Tom Ford',     style: 'Optical',     price: 310, img: '/images/frames/frame-06.jpg' },
  { id: 7,  name: 'Slim Acetate',      brand: 'Ray-Ban',      style: 'Optical',     price: 175, img: '/images/frames/frame-07.jpg' },
  { id: 8,  name: 'Everyday Black',    brand: 'Warby Parker', style: 'Optical',     price: 125, img: '/images/frames/frame-08.jpg' },
  { id: 9,  name: 'Clear Crystal',     brand: 'Ray-Ban',      style: 'Optical',     price: 155, img: '/images/frames/frame-09.jpg' },
  { id: 10, name: 'Signature Gold',    brand: 'Tom Ford',     style: 'Sunglasses',  price: 340, img: '/images/frames/frame-10.jpg' },
  { id: 11, name: 'Tablet Thin',       brand: 'Warby Parker', style: 'Optical',     price: 140, img: '/images/frames/frame-11.jpg' },
  { id: 12, name: 'Matte Black Wrap',  brand: 'Oakley',       style: 'Sport',       price: 210, img: '/images/frames/frame-12.jpg' },
  { id: 13, name: 'Studio Frame',      brand: 'Ray-Ban',      style: 'Sunglasses',  price: 180, img: '/images/frames/frame-13.jpg' },
  { id: 14, name: 'Everyday Sport',    brand: 'Wiley X',      style: 'Sport',       price: 220, img: '/images/frames/frame-14.jpg' },
  { id: 15, name: 'Leather Case Set',  brand: 'Oakley',       style: 'Sunglasses',  price: 250, img: '/images/frames/frame-15.jpg' },
  { id: 16, name: 'Bold Rectangle',    brand: 'Oakley',       style: 'Sunglasses',  price: 190, img: '/images/frames/frame-16.jpg' },
  { id: 17, name: 'Mirror Red',        brand: 'Wiley X',      style: 'Sport',       price: 205, img: '/images/frames/frame-17.jpg' },
  { id: 18, name: 'Pouch Classic',     brand: 'Oakley',       style: 'Sunglasses',  price: 225, img: '/images/frames/frame-18.jpg' },
  { id: 19, name: 'Color Pop Set',     brand: 'Warby Parker', style: 'Sunglasses',  price: 150, img: '/images/frames/frame-19.jpg' },
  { id: 20, name: 'Red Accent',        brand: 'Ray-Ban',      style: 'Sunglasses',  price: 170, img: '/images/frames/frame-20.jpg' },
  { id: 21, name: 'Sunset Wrap',       brand: 'Wiley X',      style: 'Sport',       price: 215, img: '/images/frames/frame-21.jpg' },
  { id: 22, name: 'Everyday Classic',  brand: 'Warby Parker', style: 'Optical',     price: 130, img: '/images/frames/frame-22.jpg' },
]

export default function FramesPage() {
  const [brandFilter, setBrandFilter] = useState('All')
  const [styleFilter, setStyleFilter] = useState('All')
  const [sort, setSort] = useState('featured')

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (brandFilter !== 'All' && p.brand !== brandFilter) return false
      if (styleFilter !== 'All' && p.style !== styleFilter) return false
      return true
    })
    if (sort === 'price-asc')  list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [brandFilter, styleFilter, sort])

  return (
    <div className="min-h-screen bg-white">

      {/* Page header */}
      <div className="bg-[#FBF7F1] border-b border-[#E7EBEA]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-16 pb-14 lg:pt-20 lg:pb-16">
          <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
            <IconGlasses size={15} className="text-[#B85E31]" />
            Eyewear
          </div>
          <h1
            className="font-display text-[38px] sm:text-[50px] text-[#16201E] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Frames chosen with a real eye
          </h1>
          <p className="text-[#6E7C77] text-[16.5px] leading-relaxed max-w-xl">
            A curated selection of quality eyewear — chosen for how they look, how they fit, and how long they last.
          </p>
        </div>
      </div>

      {/* Editorial intro — inspired by mockup two-column frames section */}
      <section className="py-14 sm:py-20 lg:py-[100px] px-5 sm:px-8 lg:px-16 bg-[#FBF7F1]">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden h-72 lg:h-96" style={{ boxShadow: '0 4px 24px rgba(15,50,52,.1)' }}>
            <img
              src="/images/frames/frame-06.jpg"
              alt="Eyewear at First Colony Vision"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-[#37B2B8] text-xs font-semibold mb-3 tracking-widest">OUR COLLECTION</div>
            <h2
              className="font-display text-2xl sm:text-4xl font-medium text-[#093F42] mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              Eyewear that fits your life, not just your face
            </h2>
            <p className="text-[#6E7C77] text-base leading-relaxed mb-5">
              We carry brands known for quality construction and lasting style — from everyday optical to
              sport-performance sunglasses. Every frame in our collection has been selected by hand.
            </p>
            <p className="text-[#6E7C77] text-base leading-relaxed mb-7">
              Not sure what to look for? Come in and browse — our team will help you find something
              that feels right and looks the part.
            </p>
            <a
              href="/book"
              className="inline-block px-7 py-3.5 bg-[#0D5D62] text-white font-semibold text-sm rounded-xl hover:bg-[#093F42] transition-colors"
            >
              Book to browse in person
            </a>
          </div>
        </div>
      </section>

      {/* Brand spotlight cards */}
      <section className="py-10 sm:py-14 px-5 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-[#F7F8F7] rounded-2xl p-7 text-center" style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}>
            <div className="rounded-xl overflow-hidden h-24 mb-4">
              <img src="/images/frames/frame-06.jpg" alt="Tom Ford eyewear" className="w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-[#093F42]">Tom Ford</div>
          </div>
          <div className="bg-[#F7F8F7] rounded-2xl p-7 text-center" style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}>
            <div className="rounded-xl overflow-hidden h-24 mb-4">
              <img src="/images/frames/frame-04.jpg" alt="Wiley X eyewear" className="w-full h-full object-cover" />
            </div>
            <div className="font-semibold text-[#093F42]">Wiley X</div>
          </div>
          <div className="bg-[#F7F8F7] rounded-2xl p-7 text-center flex flex-col items-center justify-center" style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}>
            <div className="w-11 h-11 rounded-xl bg-[#E2F3F0] flex items-center justify-center mb-4">
              <span className="text-[#0D5D62] font-bold text-lg">+</span>
            </div>
            <div className="font-semibold text-[#093F42]">More Brands Soon</div>
          </div>
        </div>
        <p className="text-center text-xs text-[#6E7C77] mt-6 max-w-2xl mx-auto">
          Product photography shown is representative stock photography for demo purposes, not official brand imagery or real inventory. Prices are illustrative placeholders.
        </p>
      </section>

      {/* Catalogue with filters */}
      <section className="py-8 sm:py-12 px-5 sm:px-8 lg:px-16 bg-[#F7F8F7]">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="px-4 py-2.5 rounded-full border border-[#E7EBEA] bg-white text-sm font-semibold text-[#093F42] focus:outline-none focus:border-[#37B2B8]"
            >
              <option value="All">All Brands</option>
              {BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
            <select
              value={styleFilter}
              onChange={(e) => setStyleFilter(e.target.value)}
              className="px-4 py-2.5 rounded-full border border-[#E7EBEA] bg-white text-sm font-semibold text-[#093F42] focus:outline-none focus:border-[#37B2B8]"
            >
              <option value="All">All Styles</option>
              {STYLES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2.5 rounded-full border border-[#E7EBEA] bg-white text-sm font-semibold text-[#093F42] focus:outline-none focus:border-[#37B2B8]"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <div className="ml-auto text-sm text-[#6E7C77] font-semibold">{filtered.length} frames</div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl overflow-hidden group" style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}>
                <div className="aspect-square overflow-hidden bg-[#F7F8F7]">
                  <img
                    src={p.img}
                    alt={`${p.brand} ${p.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="text-[11px] font-semibold text-[#37B2B8] tracking-wide mb-1">{p.brand.toUpperCase()}</div>
                  <h4 className="font-semibold text-[#093F42] text-sm mb-1">{p.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6E7C77] text-xs">{p.style}</span>
                    <span className="font-semibold text-[#093F42] text-sm">${p.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#6E7C77]">No frames match those filters.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 lg:py-[100px] px-5 sm:px-8 lg:px-16 text-center">
        <h2
          className="font-display text-2xl sm:text-4xl font-medium text-[#093F42] mb-4"
          style={{ letterSpacing: '-0.03em' }}
        >
          Find your next pair
        </h2>
        <p className="text-[#6E7C77] text-base sm:text-lg max-w-xl mx-auto mb-8">
          Come browse our full frame collection in person — no appointment needed just to look.
        </p>
        <a
          href="/book"
          className="inline-block px-9 py-4 bg-[#0D5D62] text-white font-semibold text-sm hover:bg-[#093F42] transition-colors rounded-xl"
        >
          Book an Appointment
        </a>
      </section>
    </div>
  )
}

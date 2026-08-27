'use client'

import { useState, useEffect } from 'react'

const slides = [
  { src: '/images/eye-closeup.jpg', alt: 'Close-up detail of a healthy eye' },
  { src: '/images/diabetic-equipment.jpg', alt: 'Patient undergoing a vision exam with a phoropter' },
  { src: '/images/pediatric-glasses.jpg', alt: 'Child smiling in her new glasses' },
  { src: '/images/frames/frame-10.jpg', alt: 'A pair of eyeglass frames' },
]

export default function HeroSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="rounded-[20px] overflow-hidden shadow-[0_34px_64px_-20px_rgba(6,38,40,.5)] relative"
      style={{ aspectRatio: '4/4.4' }}
    >
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

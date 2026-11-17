'use client'

import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

// Silent looping campaign film. React 18 doesn't server-render the `muted` attribute,
// which makes iOS block autoplay, so muted is forced and play() retried after mount.
// Respects prefers-reduced-motion and has a pause control (WCAG 2.2.2).
export default function BrandVideo({ src, poster, label, className = '' }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const v = ref.current
    v.muted = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) v.pause()
    else v.play().catch(() => {})
    setPlaying(!v.paused) // in case it was already playing before hydration
  }, [])

  const toggle = () => {
    const v = ref.current
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  return (
    <div className={`relative overflow-hidden bg-[#16201E] ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        aria-label={label}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause ${label}` : `Play ${label}`}
        className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/85 hover:bg-white text-[#093F42] flex items-center justify-center transition-colors"
      >
        {playing ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
      </button>
    </div>
  )
}

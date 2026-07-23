'use client'

import { useRef, useState } from 'react'
import { Play, MapPin, Calendar } from 'lucide-react'
import { asset } from '../lib/site'
import { FadeIn } from '../components/FadeIn'

export function Spot() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playVideo = () => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {})
  }

  return (
    <section
      id="spot"
      className="relative bg-charcoal py-section overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12 lg:mb-16 text-center">
          <FadeIn>
            <span className="text-caption text-soft-gold tracking-[0.3em] uppercase block mb-6">
              Spot officiel
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif text-display-lg text-pure-white mb-6">
              Acclamons Jésus 2026 — Centre Culturel Grand Tambour
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-pure-white/60">
              <span className="inline-flex items-center gap-2 text-body">
                <Calendar size={18} className="text-soft-gold" aria-hidden="true" />
                28 – 30 août 2026
              </span>
              <span className="inline-flex items-center gap-2 text-body">
                <MapPin size={18} className="text-soft-gold" aria-hidden="true" />
                Kinshasa, RDC
              </span>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.25}>
          <div className="relative mx-auto max-w-5xl">
            <div className="relative aspect-video overflow-hidden rounded-sm border border-pure-white/10 bg-deep-black shadow-2xl">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster={asset('/images/hero-worship.jpg')}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={asset('/videos/spot-acclamons-jesus-2026.mp4')} type="video/mp4" />
              </video>

              {!isPlaying && (
                <button
                  type="button"
                  className="absolute inset-0 flex items-center justify-center bg-deep-black/35 transition-colors hover:bg-deep-black/25"
                  aria-label="Lire le spot officiel"
                  onClick={playVideo}
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-pure-white/30 bg-deep-black/60 text-pure-white backdrop-blur-sm transition-transform hover:scale-105">
                    <Play size={36} className="ml-1" aria-hidden="true" />
                  </span>
                </button>
              )}
            </div>

            <p className="mt-6 text-center text-body text-pure-white/50 max-w-2xl mx-auto leading-relaxed">
              Découvrez l&apos;ambiance de la 5e édition : trois jours d&apos;adoration,
              de solidarité et de célébration au service de la paix, avec Michel Bakenda
              et ses invités au Centre Culturel Grand Tambour.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

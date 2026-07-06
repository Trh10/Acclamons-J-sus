'use client'

import { asset } from '../lib/site'

interface ImageParallaxProps {
  src: string
  alt: string
  className?: string
}

export function ImageParallax({ src, alt, className = '' }: ImageParallaxProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(src)}
        alt={alt}
        className="h-full w-full object-cover grayscale"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/20 via-transparent to-deep-black/40" />
    </div>
  )
}

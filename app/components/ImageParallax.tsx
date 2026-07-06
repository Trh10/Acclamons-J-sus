'use client'

import Image from 'next/image'

interface ImageParallaxProps {
  src: string
  alt: string
  className?: string
}

export function ImageParallax({ src, alt, className = '' }: ImageParallaxProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale"
        sizes="(max-width: 1024px) 100vw, 50vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/20 via-transparent to-deep-black/40" />
    </div>
  )
}

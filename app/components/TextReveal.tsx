'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  splitBy?: 'words' | 'chars' | 'lines'
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 1.2,
  splitBy = 'words'
}: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      return
    }
    const fallback = window.setTimeout(() => controls.start('visible'), 800)
    return () => window.clearTimeout(fallback)
  }, [isInView, controls])

  const splitText = () => {
    if (splitBy === 'words') {
      return children.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: duration,
                  delay: delay + i * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }
            }}
            initial="hidden"
            animate={controls}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))
    }
    return children
  }

  return (
    <span ref={ref} className={className}>
      {splitText()}
    </span>
  )
}

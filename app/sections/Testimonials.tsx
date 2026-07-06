'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '../components/FadeIn'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: 'Acclamons Jésus n\'est pas qu\'un concert. C\'est un lieu où la louange rencontre la solidarité, où l\'on prie pour la paix à l\'Est et où l\'on soutient les familles des FARDC.',
    author: 'Participante',
    role: 'Édition précédente',
    location: 'Kinshasa, RDC'
  },
  {
    quote: 'Voir des milliers de voix s\'élever pour Jésus au Grand Tambour, tout en sachant que chaque geste aide une famille de militaire — c\'est cela la paix en action.',
    author: 'Bénévole solidarité',
    role: 'Plateforme FARDC',
    location: 'Kinshasa, RDC'
  },
  {
    quote: 'Michel Bakenda a su transformer un festival gospel en mouvement patriotique et spirituel. La 5e édition promet d\'être historique.',
    author: 'Membre du clergé',
    role: 'Partenaire pastoral',
    location: 'Kinshasa, RDC'
  },
  {
    quote: 'Depuis la diaspora, nous suivons Acclamons Jésus avec fierté. Nathalie Makoma et les autres artistes portent la voix de la paix bien au-delà des frontières.',
    author: 'Membre diaspora',
    role: 'Soutien à distance',
    location: 'Europe'
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative bg-cream py-section overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-caption text-charcoal/50 tracking-[0.3em] uppercase block mb-6">
              Témoignages
            </span>
            <h2 className="font-serif text-display-md text-charcoal">
              Des vies touchées, une paix proclamée.
            </h2>
          </div>
        </FadeIn>

        <div className="relative">
          <div className="absolute -top-8 left-0 lg:-left-12 text-[12rem] leading-none text-soft-gold/10 font-serif select-none pointer-events-none">
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <blockquote className="font-serif text-display-sm text-charcoal leading-relaxed mb-12 max-w-4xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div className="space-y-2">
                <p className="font-serif text-xl text-charcoal">
                  {testimonials[current].author}
                </p>
                <p className="text-caption text-charcoal/50 tracking-widest uppercase">
                  {testimonials[current].role} — {testimonials[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-3 border border-charcoal/20 text-charcoal/60 hover:text-charcoal hover:border-soft-gold transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'bg-soft-gold w-8' : 'bg-charcoal/20 hover:bg-charcoal/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 border border-charcoal/20 text-charcoal/60 hover:text-charcoal hover:border-soft-gold transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { TextReveal } from '../components/TextReveal'
import { FadeIn } from '../components/FadeIn'

const pillars = [
  { title: 'Adoration', desc: 'La musique, la prière et la Parole fusionnent pour créer une atmosphère propice aux rencontres avec le divin.' },
  { title: 'Paix', desc: 'Prier et adorer pour la paix à l\'Est de la RDC — un investissement spirituel destiné à produire des fruits tangibles.' },
  { title: 'Solidarité', desc: 'Une plateforme structurée au service des familles des FARDC déployées sur les lignes de front.' },
  { title: 'Communion', desc: 'Rapprocher civils et militaires, diaspora et mère patrie, autour d\'une même espérance.' },
  { title: 'Espoir', desc: 'Dans un contexte de détresse, la foi demeure l\'un des derniers bastions de résilience.' },
  { title: 'Action', desc: 'La traduction concrète de la foi : dons matériels, fonds financiers et accompagnement psycho-spirituel.' },
]

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative min-h-screen bg-cream py-section overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#C8A86B_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-24 lg:mb-32">
          <FadeIn>
            <span className="text-caption text-charcoal/50 tracking-[0.3em] uppercase block mb-6">
              Histoire &amp; Identité
            </span>
          </FadeIn>

          <h2 className="font-serif text-display-lg text-charcoal max-w-4xl">
            <TextReveal delay={0.2}>
              Bien plus qu&apos;un concert : une assemblée sacrée
            </TextReveal>
            <TextReveal delay={0.4}>
              où la louange devient action,
            </TextReveal>
            <TextReveal delay={0.6}>
              et la foi devient espérance pour la paix.
            </TextReveal>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10">
          {pillars.map((pillar, index) => (
            <FadeIn
              key={pillar.title}
              delay={index * 0.1}
              className="bg-cream p-8 lg:p-12 group hover:bg-warm-gray transition-colors duration-700"
            >
              <span className="text-caption text-soft-gold tracking-widest uppercase block mb-4">
                0{index + 1}
              </span>
              <h3 className="font-serif text-display-sm text-charcoal mb-4 group-hover:text-deep-black transition-colors">
                {pillar.title}
              </h3>
              <p className="text-body-sm text-charcoal/60 leading-relaxed">
                {pillar.desc}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.8} className="mt-24 lg:mt-32 text-center">
          <div className="gold-line mx-auto mb-8" />
          <blockquote className="font-serif text-display-md text-charcoal/80 italic max-w-4xl mx-auto">
            &ldquo;Heureux ceux qui œuvrent pour la paix, car ils seront appelés fils de Dieu.&rdquo;
          </blockquote>
          <cite className="text-caption text-charcoal/50 tracking-widest uppercase mt-6 block not-italic">
            — Matthieu 5 : 9
          </cite>
        </FadeIn>
      </div>
    </section>
  )
}

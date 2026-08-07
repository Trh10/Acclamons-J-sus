'use client'

import { Calendar, ExternalLink, MapPin, Ticket } from 'lucide-react'
import { FadeIn } from '../components/FadeIn'
import { TICKETING_URL } from '../lib/site'

const accessOptions = [
  {
    title: 'Accès Standard',
    description: 'Entrée pour le grand concert du dimanche 30 août.',
    tag: '30 août · Concert',
  },
  {
    title: 'Accès VIP',
    description: 'Zone privilégiée et avantages confirmés par la production.',
    tag: '30 août · VIP',
  },
  {
    title: 'Pass 3 jours',
    description: 'Participation complète du 28 au 30 août.',
    tag: '28 – 30 août',
  },
]

export function Tickets() {
  return (
    <section
      id="tickets"
      className="relative bg-deep-black py-section overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(201,146,42,0.12),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-soft-gold/30 bg-soft-gold/10 px-4 py-2 text-caption text-soft-gold tracking-[0.25em] uppercase mb-6">
              <Ticket size={16} aria-hidden="true" />
              Billetterie ouverte
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-serif text-display-lg text-pure-white mb-6">
              Réservez votre place dès maintenant.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-body-lg text-pure-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
              Les billets officiels de la 5<sup>e</sup> édition sont disponibles sur{' '}
              <strong className="text-pure-white/80">Ticketnayo</strong>. Paiement sécurisé
              par Mobile Money et retrait de vos e-billets en quelques clics.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-pure-white/60 mb-10">
              <span className="inline-flex items-center gap-2">
                <Calendar size={18} className="text-soft-gold" aria-hidden="true" />
                30 août 2026 · Grand concert
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin size={18} className="text-soft-gold" aria-hidden="true" />
                Centre Culturel Grand Tambour, Kinshasa
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <a
              href={TICKETING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="legacy-btn inline-flex items-center gap-2 text-base"
            >
              <Ticket size={18} aria-hidden="true" />
              Acheter mes billets sur Ticketnayo
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {accessOptions.map((option, index) => (
            <FadeIn key={option.title} delay={0.15 + index * 0.08}>
              <a
                href={TICKETING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-sm border border-pure-white/10 bg-charcoal/30 p-6 transition-colors hover:border-soft-gold/40 hover:bg-charcoal/50"
              >
                <span className="text-caption text-soft-gold tracking-[0.2em] uppercase">
                  {option.tag}
                </span>
                <h3 className="font-serif text-2xl text-pure-white mt-4 mb-3">
                  {option.title}
                </h3>
                <p className="text-body text-pure-white/55 leading-relaxed">
                  {option.description}
                </p>
                <span className="inline-flex items-center gap-2 mt-6 text-caption text-soft-gold uppercase tracking-widest">
                  Voir les tarifs
                  <ExternalLink size={14} aria-hidden="true" />
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

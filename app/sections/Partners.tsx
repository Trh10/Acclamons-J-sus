'use client'

import { FadeIn } from '../components/FadeIn'

const partners = [
  { name: 'Hillsong', tier: 'platinum' },
  { name: 'Elevation Church', tier: 'platinum' },
  { name: 'Compassion', tier: 'gold' },
  { name: 'World Vision', tier: 'gold' },
  { name: 'Samaritans Purse', tier: 'silver' },
  { name: 'YouVersion', tier: 'silver' },
  { name: 'Worship Together', tier: 'bronze' },
  { name: 'Praise Charts', tier: 'bronze' },
]

export function Partners() {
  return (
    <section className="relative bg-deep-black py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-caption text-soft-gold tracking-[0.3em] uppercase block mb-6">
              Partenaires
            </span>
            <h2 className="font-serif text-display-md text-pure-white">
              Ensemble pour la mission.
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-charcoal/20">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-deep-black p-12 flex items-center justify-center group hover:bg-charcoal/20 transition-colors duration-500"
              >
                <span className={`font-serif text-xl text-pure-white/40 group-hover:text-pure-white transition-colors duration-500 ${
                  partner.tier === 'platinum' ? 'lg:text-2xl' : ''
                }`}>
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

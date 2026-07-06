'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '../components/FadeIn'
import { TextReveal } from '../components/TextReveal'
import { Heart, Package, Wallet, HandHeart, ArrowRight } from 'lucide-react'

const stats = [
  { icon: Heart, value: '+10 000', label: 'Personnes attendues sur 3 jours', color: 'text-soft-gold' },
  { icon: Package, value: '3', label: 'Mécanismes d\'assistance', color: 'text-soft-gold' },
  { icon: Wallet, value: '5<sup>e</sup>', label: 'Édition d\'Acclamons Jésus', color: 'text-soft-gold' },
  { icon: HandHeart, value: '+ 6', label: 'Artistes de renom', color: 'text-soft-gold' },
]

const projects = [
  {
    title: 'Collecte de dons matériels',
    location: 'Kinshasa · FARDC',
    description: 'Des bacs de collecte accueillent vivres, vêtements, produits d\'hygiène et fournitures scolaires. Les dons sont inventoriés, triés et distribués aux familles les plus vulnérables.',
    image: '/images/humanitarian-volunteers.jpg',
    raised: 'En cours',
    goal: 'Objectif communautaire'
  },
  {
    title: 'Collecte de fonds financiers',
    location: 'Mobile Money · Virement',
    description: 'Compte bancaire dédié et canaux M-Pesa, Orange Money, Airtel Money pour financer bourses scolaires, soins médicaux et kits d\'urgence. Commission de transparence pour la traçabilité.',
    image: '/images/financial-donations.jpg',
    raised: 'Plateforme active',
    goal: '100 % aux familles FARDC'
  },
  {
    title: 'Accompagnement psycho-spirituel',
    location: 'Grand Tambour · Camps',
    description: 'Espace d\'écoute, de conseil et de prière pour les familles en anxiété et en isolement. Pasteurs, encadreurs et psychologues mobilisés pour un soutien holistique.',
    image: '/images/psycho-spiritual-support.jpg',
    raised: 'Mobilisation',
    goal: 'Soutien holistique'
  },
]

export function Humanitarian() {
  const containerRef = useRef(null)

  const scrollToDon = () => {
    document.querySelector('#faire-un-don')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="humanitarian"
      ref={containerRef}
      className="relative bg-cream py-section overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-24">
          <FadeIn>
            <span className="text-caption text-charcoal/50 tracking-[0.3em] uppercase block mb-6">
              Plateforme d&apos;assistance
            </span>
          </FadeIn>

          <h2 className="font-serif text-display-lg text-charcoal mb-8">
            <TextReveal>
              Au cœur battant : les familles des FARDC.
            </TextReveal>
          </h2>

          <FadeIn delay={0.3}>
            <p className="text-body-lg text-charcoal/60 leading-relaxed">
              La dimension humanitaire n&apos;est pas un ajout opportuniste, mais une réponse
              structurée à un besoin réel et urgent. Des milliers de familles de militaires
              vivent dans la précarité et l&apos;oubli — nourriture, soins, scolarité, réconfort spirituel.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10 mb-24">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-cream p-8 lg:p-12 text-center">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                <span className="font-serif text-display-sm text-charcoal block mb-2" dangerouslySetInnerHTML={{ __html: stat.value }} />
                <span className="text-caption text-charcoal/50 tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="group grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 border border-charcoal/10 hover:border-soft-gold/30 hover:bg-warm-gray transition-all duration-700">
                <div className="relative aspect-video lg:aspect-[16/10] overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-caption text-soft-gold tracking-widest uppercase">
                      {project.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-display-sm text-charcoal mb-4 group-hover:text-deep-black transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-body-md text-charcoal/60 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex justify-between text-caption text-charcoal/50 mb-2">
                      <span>{project.raised}</span>
                      <span>{project.goal}</span>
                    </div>
                    <div className="h-1 bg-charcoal/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-soft-gold"
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={scrollToDon}
                    className="flex items-center gap-2 text-caption text-charcoal tracking-widest uppercase group-hover:text-soft-gold transition-colors"
                  >
                    Contribuer à ce projet
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div id="faire-un-don" className="mt-24">
          <FadeIn delay={0.5}>
          <div className="text-center mb-12">
            <span className="text-caption text-charcoal/50 tracking-[0.3em] uppercase block mb-6">
              Faire un don
            </span>
            <h3 className="font-serif text-display-md text-charcoal mb-4">
              Soutenez concrètement les familles des FARDC.
            </h3>
            <p className="text-body-md text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
              Chaque contribution — financière ou matérielle — est inventoriée, tracée et distribuée
              par la commission de transparence. Modes de versement : Mobile Money (M-Pesa, Orange, Airtel),
              virement bancaire, diaspora, sur place au Grand Tambour ou via la billetterie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/10 mb-12">
            {[
              { title: 'Mobile Money', detail: 'M-Pesa · Orange Money · Airtel Money' },
              { title: 'Virement bancaire', detail: 'Comptes USD/CDF Rawbank' },
              { title: 'Sur place', detail: 'Guichet solidarité · 28 – 30 août 2026' },
            ].map((item) => (
              <div key={item.title} className="bg-cream p-8 text-center">
                <h4 className="font-serif text-xl text-charcoal mb-2">{item.title}</h4>
                <p className="text-body-sm text-charcoal/60">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/commande.html" className="legacy-btn">
              Faire un don
            </a>
            <p className="mt-6 text-body-sm text-charcoal/50 max-w-md mx-auto">
              Don financier ou matériel via la billetterie · Mobile Money et virement sur place au festival
            </p>
          </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

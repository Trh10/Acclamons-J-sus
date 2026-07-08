'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { asset } from '../lib/site'
import { FadeIn } from '../components/FadeIn'
import { TextReveal } from '../components/TextReveal'
import { ChevronRight, Clock, MapPin, Users } from 'lucide-react'

const days = [
  {
    day: 'Vendredi',
    date: '28 Août',
    theme: 'Descente humanitaire',
    description: 'Action humanitaire de proximité dans les camps militaires de Kinshasa : invitation des familles des FARDC, collecte de dons et lancement officiel de la plateforme de solidarité.',
    events: [
      { time: '08H00', title: 'Rassemblement & briefing', location: 'Centre Culturel Grand Tambour' },
      { time: '09H00', title: 'Départ en caravane', location: 'Camps militaires (Kokolo, Lufungula, Tshatshi…)' },
      { time: '10H00 – 12H00', title: 'Rencontres avec les familles', location: 'Camps militaires' },
      { time: '12H00 – 13H00', title: 'Prière & adoration', location: 'Camps militaires' },
      { time: '14H00 – 16H00', title: 'Visite des familles vulnérables', location: 'Kinshasa' },
      { time: '16H00 – 17H00', title: 'Conférence de presse', location: 'Grand Tambour' },
      { time: '18H00', title: 'Retour & préparation', location: 'Centre Culturel Grand Tambour' },
    ]
  },
  {
    day: 'Samedi',
    date: '29 Août',
    theme: 'Jeunes artistes',
    description: 'Mise en lumière de la relève du gospel congolais : concours de talents chrétiens, louange communautaire et prière pour la paix.',
    events: [
      { time: '10H00', title: 'Ouverture des portes', location: 'Centre Culturel Grand Tambour' },
      { time: '11H00 – 12H30', title: 'Session de louange', location: 'Grande scène' },
      { time: '13H00 – 14H00', title: 'Pause déjeuner', location: 'Espaces forains' },
      { time: '14H00 – 17H00', title: 'Concours de talents', location: 'Grande scène' },
      { time: '17H00 – 18H00', title: 'Délibération du jury', location: 'Grande scène' },
      { time: '18H00 – 19H00', title: 'Concert de clôture', location: 'Grande scène' },
      { time: '19H00 – 20H00', title: 'Prière pour la paix', location: 'Grande scène' },
    ]
  },
  {
    day: 'Dimanche',
    date: '30 Août',
    theme: 'Show de célébration',
    description: 'L\'apogée de l\'événement : Michel Bakenda et une constellation d\'artistes internationaux pour un grand concert d\'adoration retransmis en direct.',
    events: [
      { time: '14H00', title: 'Ouverture des portes', location: 'Centre Culturel Grand Tambour' },
      { time: '15H00 – 15H30', title: 'Louange d\'ouverture', location: 'Grande scène' },
      { time: 'Show', title: 'Rosette Ngoie & Eunice Manyanga', location: 'Grande scène', artist: 'Relève féminine du gospel' },
      { time: 'Show', title: 'Nathalie Makoma', location: 'Grande scène', artist: 'Voix de la diaspora congolaise' },
      { time: 'Show', title: 'Benjamin Dube', location: 'Grande scène', artist: 'Gospel panafricain (Afrique du Sud)' },
      { time: 'Show', title: 'Moïse Mbiye', location: 'Grande scène', artist: 'Icône du gospel congolais' },
      { time: 'Grand final', title: 'Grand concert de Michel Bakenda', location: 'Grande scène', artist: 'Avec tous les artistes' },
      { time: 'Clôture', title: 'Prière pour la paix', location: 'Grande scène' },
    ]
  },
]

export function Experience() {
  const [activeDay, setActiveDay] = useState(0)

  return (
    <section
      id="experience"
      className="relative bg-cream py-section overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24">
          <FadeIn>
            <span className="text-caption text-charcoal/50 tracking-[0.3em] uppercase block mb-6">
              Programme détaillé
            </span>
          </FadeIn>

          <h2 className="font-serif text-display-lg text-charcoal max-w-3xl">
            <TextReveal>
              Trois jours, un même élan vers la paix.
            </TextReveal>
          </h2>
        </div>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-4 mb-16 border-b border-charcoal/10 pb-8">
            {days.map((day, index) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(index)}
                className={`relative px-6 py-4 text-left transition-all duration-500 ${
                  activeDay === index ? 'bg-charcoal text-pure-white' : 'bg-transparent text-charcoal/60 hover:text-charcoal'
                }`}
              >
                <span className="text-caption tracking-widest uppercase block">
                  Jour {index + 1} · {day.day}
                </span>
                <span className="font-serif text-lg mt-1 block">
                  {day.date}
                </span>
                {activeDay === index && (
                  <motion.div
                    layoutId="activeDay"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-soft-gold"
                    transition={{ duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16"
          >
            <div className="lg:col-span-1">
              <h3 className="font-serif text-display-md text-charcoal mb-4">
                {days[activeDay].theme}
              </h3>
              <p className="text-body-md text-charcoal/60 leading-relaxed mb-8">
                {days[activeDay].description}
              </p>
              <div className="flex items-center gap-4 text-caption text-charcoal/40">
                <Users size={16} />
                <span>+ 10 000 personnes attendues</span>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {days[activeDay].events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 border border-charcoal/10 hover:border-soft-gold/50 hover:bg-warm-gray transition-all duration-500"
                >
                  <div className="flex items-center gap-3 text-soft-gold min-w-[100px]">
                    <Clock size={16} />
                    <span className="text-caption tracking-widest">{event.time}</span>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-serif text-xl text-charcoal group-hover:text-deep-black transition-colors">
                      {event.title}
                    </h4>
                    {'artist' in event && event.artist && (
                      <p className="text-body-sm text-charcoal/50 mt-1">
                        {event.artist}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-caption text-charcoal/40">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                  </div>

                  <ChevronRight
                    size={20}
                    className="text-charcoal/20 group-hover:text-soft-gold group-hover:translate-x-1 transition-all duration-300 hidden sm:block"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <FadeIn delay={0.5} className="mt-16 text-center">
          <a href={asset('/commande.html')} className="btn-sacred text-charcoal border-charcoal hover:text-pure-white inline-block">
            Réserver pour le grand concert
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

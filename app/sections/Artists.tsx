'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '../components/FadeIn'
import { TextReveal } from '../components/TextReveal'
import { Music } from 'lucide-react'
import { asset } from '../lib/site'

const artists = [
  {
    name: 'Moïse Mbiye',
    genre: 'L\'icône du gospel congolais',
    image: '/images/artist-moise-mbiye.jpg',
    bio: 'Pasteur de l\'église Cité Béthel, auteur-compositeur et interprète. Son style mêle gospel et rumba congolaise. Six albums à son actif, dont « Héros », « Triomphe » et « Royal ».',
  },
  {
    name: 'Nathalie Makoma',
    genre: 'La voix de la diaspora',
    image: '/images/artist-natalie-makoma.jpg',
    bio: 'Chanteuse congolo-hollandaise, leader du groupe Makoma et lauréate du Kora Award 2002. Son album « Na Ndimi » témoigne d\'un ancrage spirituel renouvelé.',
  },
  {
    name: 'Benjamin Dube',
    genre: 'L\'apôtre du gospel sud-africain',
    image: '/images/artist-benjamin-dube.jpg',
    bio: 'Pasteur et fondateur du High Praise Centre Church à Johannesburg, plus de quinze albums dont plusieurs disques d\'or et de platine. La dimension panafricaine de l\'événement.',
  },
  {
    name: 'Eunice Manyanga',
    genre: 'La relève féminine',
    image: '/images/artist-eunice-manyanga.jpg',
    bio: 'Spécialiste de la fusion des rythmes africains traditionnels et du gospel féminin. Ses titres « Liziba » et « Amina » ont touché une audience internationale.',
  },
  {
    name: 'Rosette Ngoie',
    genre: 'La relève féminine',
    image: '/images/artist-rosette-ngoie.jpg',
    bio: 'Chantre de renom, elle complète cette représentation féminine qui témoigne de la place centrale des femmes dans la louange et l\'intercession pour la paix.',
  },
  {
    name: 'Michel Bakenda',
    genre: 'Hôte & maître de cérémonie',
    image: '/images/michel-bakenda-portrait.png',
    bio: 'Figure incontournable du gospel congolais. Le grand concert du Jour 3 rassemble tous les artistes autour de Michel Bakenda pour un moment d\'adoration sans précédent, retransmis en direct.',
  },
]

export function Artists() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section
      id="artists"
      className="relative bg-deep-black py-section overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <FadeIn>
              <span className="text-caption text-soft-gold tracking-[0.3em] uppercase block mb-6">
                Artistes &amp; Invités
              </span>
            </FadeIn>

            <h2 className="font-serif text-display-lg text-pure-white max-w-2xl">
              <TextReveal>
                Une constellation du gospel africain.
              </TextReveal>
            </h2>
          </div>

          <FadeIn delay={0.3}>
            <p className="text-body-md text-pure-white/50 max-w-md">
              Chaque artiste incarne des valeurs de foi, d&apos;excellence et d&apos;engagement social.
              Ensemble, ils bâtissent une cathédrale sonore d&apos;adoration et d&apos;intercession pour la paix.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/20">
          {artists.map((artist, index) => (
            <FadeIn
              key={artist.name}
              delay={index * 0.1}
              className="relative bg-deep-black group"
            >
              <div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                      filter: hoveredIndex === index ? 'grayscale(0%)' : 'grayscale(100%)'
                    }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="absolute inset-0"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${asset(artist.image)})` }}
                    />
                  </motion.div>

                  <motion.div
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent"
                  />

                  <motion.div
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 p-8 flex flex-col justify-end"
                  >
                    <span className="text-caption text-soft-gold tracking-widest uppercase mb-2">
                      {artist.genre}
                    </span>
                    <p className="text-body-sm text-pure-white/80 leading-relaxed mb-6">
                      {artist.bio}
                    </p>
                    <div className="flex items-center gap-4">
                      <Music size={20} className="text-pure-white/60" />
                    </div>
                  </motion.div>
                </div>

                <div className="p-6 border-t border-charcoal/20">
                  <h3 className="font-serif text-xl text-pure-white group-hover:text-soft-gold transition-colors duration-500">
                    {artist.name}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} className="mt-16 text-center">
          <a href={asset('/commande.html')} className="btn-sacred inline-block">
            Réserver ma place
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

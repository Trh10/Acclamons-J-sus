'use client'

import { useState } from 'react'
import { asset } from '../lib/site'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '../components/FadeIn'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/images/editions/edition-2017-poster.png', caption: '1ère édition — Septembre 2017' },
  { src: '/images/editions/edition-2018-poster.png', caption: '2ème édition — Août 2018' },
  { src: '/images/editions/edition-2019-poster.png', caption: '3ème édition — Août 2019' },
  { src: '/images/editions/edition-2019-poster-orange.png', caption: '3ème édition — Affiche Orange' },
  { src: '/images/editions/arrivee-artistes.png', caption: 'Accueil des artistes invités' },
  { src: '/images/editions/coulisses-artistes.png', caption: 'Moment de joie en coulisses' },
  { src: '/images/editions/scene-adoration.png', caption: 'Adoration sur scène' },
  { src: '/images/editions/scene-duo-chant.png', caption: 'Duo de louange sur scène' },
  { src: '/images/editions/scene-chorale.png', caption: 'Chorale et artistes sur scène' },
  { src: '/images/editions/scene-ecran-acclamons.png', caption: 'Acclamons Jésus sur grand écran' },
  { src: '/images/editions/scene-louange.png', caption: 'Moment de louange intense' },
  { src: '/images/editions/public-soiree.png', caption: 'Le public en soirée' },
  { src: '/images/editions/public-applaudissements.png', caption: 'Le public en communion' },
  { src: '/images/editions/public-orange.png', caption: 'Festival et partenaires Orange' },
  { src: '/images/editions/public-interieur.png', caption: 'Public recueilli et attentif' },
  { src: '/images/editions/interview-presse.png', caption: 'Interview et échanges médias' },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section
      id="gallery"
      className="relative bg-deep-black py-section overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 text-center">
          <FadeIn>
            <span className="text-caption text-soft-gold tracking-[0.3em] uppercase block mb-6">
              Médias
            </span>
          </FadeIn>

          <h2 className="font-serif text-display-lg text-pure-white">
            Souvenirs des éditions précédentes.
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <motion.div
                className="relative overflow-hidden cursor-pointer group break-inside-avoid mb-4"
                onClick={() => setSelectedImage(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="relative aspect-[3/4] bg-charcoal/20"
                  style={{ paddingBottom: `${(index % 3 + 2) * 20}%` }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{ backgroundImage: `url(${asset(image.src)})` }}
                  />
                  <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/40 transition-all duration-500" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <span className="text-caption text-pure-white tracking-widest uppercase">
                      {image.caption}
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-pure-white/60 hover:text-pure-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-pure-white/60 hover:text-pure-white transition-colors"
              onClick={(e) => { e.stopPropagation(); prevImage() }}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-pure-white/60 hover:text-pure-white transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage() }}
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${asset(galleryImages[selectedImage].src)})`,
                  aspectRatio: '3/4'
                }}
              />
              <p className="text-center text-caption text-pure-white/60 mt-4 tracking-widest uppercase">
                {galleryImages[selectedImage].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

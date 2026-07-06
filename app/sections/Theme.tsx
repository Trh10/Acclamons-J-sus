'use client'

import Image from 'next/image'
import { TextReveal } from '../components/TextReveal'
import { FadeIn } from '../components/FadeIn'

export function Theme() {
  return (
    <section
      id="theme"
      className="relative min-h-screen bg-deep-black flex items-center overflow-hidden py-section"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#1B1B1B_0%,_#080808_70%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-soft-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">
          <div className="text-left">
            <FadeIn>
              <span className="text-caption text-soft-gold tracking-[0.5em] uppercase block mb-8">
                Thématique 2026
              </span>
            </FadeIn>

            <h2 className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-pure-white leading-none mb-8 tracking-tight">
              <TextReveal delay={0.2}>
                PAIX
              </TextReveal>
            </h2>

            <FadeIn delay={0.3}>
              <p className="font-serif text-display-sm text-pure-white/60 italic max-w-xl mb-10 leading-snug">
                &ldquo;Je vous laisse la paix, je vous donne ma paix ; je ne vous la donne pas comme le monde la donne.&rdquo;
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-px bg-soft-gold/30" />
                <span className="text-caption text-soft-gold tracking-widest uppercase">
                  Jean 14 : 27
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-body-lg text-pure-white/50 max-w-xl leading-relaxed">
                La paix n&apos;est pas seulement l&apos;absence de guerre. Le terme hébreu
                « shalom » englobe la santé, la prospérité, la sécurité et l&apos;harmonie.
                Cette édition invite les familles des FARDC, ouvre une plateforme de dons
                dédiée et affirme que prier pour la paix est un acte de citoyenneté responsable.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left">
            <div className="theme-photo-frame relative aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/images/theme-peace-children.jpg"
                alt="Enfants dans un village — symbole d'espérance et de paix"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="theme-photo-grain" aria-hidden="true" />
              <div className="theme-photo-vignette" aria-hidden="true" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

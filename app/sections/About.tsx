'use client'

import { TextReveal } from '../components/TextReveal'
import { FadeIn } from '../components/FadeIn'
import { ImageParallax } from '../components/ImageParallax'

export function About() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      className="relative bg-deep-black py-section overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 lg:mb-48">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="text-caption text-soft-gold tracking-[0.3em] uppercase block mb-6">
                Préambule &amp; Contexte
              </span>
            </FadeIn>

            <h2 className="font-serif text-display-lg text-pure-white mb-8">
              <TextReveal>
                Adorer, un acte de paix et de résistance.
              </TextReveal>
            </h2>

            <FadeIn delay={0.4}>
              <p className="text-body-lg text-pure-white/60 mb-6 leading-relaxed">
                L&apos;Est de la République Démocratique du Congo traverse, depuis plus
                de deux décennies, une crise sécuritaire et humanitaire d&apos;une ampleur
                sans précédent. Les FARDC portent le fardeau de la souveraineté nationale
                et de la protection des populations civiles.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-body-md text-pure-white/40 leading-relaxed">
                Derrière chaque uniforme se tient une famille qui attend, dans l&apos;angoisse
                et le silence. C&apos;est dans cette optique que Michel Bakenda a conçu cette
                cinquième édition : une vocation humanitaire, patriotique et spirituelle.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="mt-12 flex items-center gap-8">
                <div>
                  <span className="font-serif text-display-md text-soft-gold">+10 000</span>
                  <p className="text-caption text-pure-white/50 tracking-widest uppercase mt-2">Personnes attendues</p>
                </div>
                <div className="w-px h-16 bg-pure-white/10" />
                <div>
                  <span className="font-serif text-display-md text-soft-gold">3</span>
                  <p className="text-caption text-pure-white/50 tracking-widest uppercase mt-2">Jours</p>
                </div>
                <div className="w-px h-16 bg-pure-white/10" />
                <div>
                  <span className="font-serif text-display-md text-soft-gold">5<sup>e</sup></span>
                  <p className="text-caption text-pure-white/50 tracking-widest uppercase mt-2">Édition</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left" className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <ImageParallax
                src="/images/worship-portrait.png"
                alt="Artiste gospel en adoration sur scène"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 to-transparent" />
            </div>
          </FadeIn>
        </div>

        <div className="relative h-px mb-32 lg:mb-48 overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-soft-gold to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <FadeIn direction="right">
            <div className="relative aspect-[4/5] overflow-hidden">
              <ImageParallax
                src="/images/michel-bakenda-portrait.png"
                alt="Portrait de Michel Bakenda"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 to-transparent" />
            </div>
          </FadeIn>

          <div>
            <FadeIn>
              <span className="text-caption text-soft-gold tracking-[0.3em] uppercase block mb-6">
                Hôte &amp; Visionnaire
              </span>
            </FadeIn>

            <h2 className="font-serif text-display-lg text-pure-white mb-8">
              <TextReveal>
                Michel Bakenda, l&apos;initiateur du projet.
              </TextReveal>
            </h2>

            <FadeIn delay={0.4}>
              <p className="text-body-lg text-pure-white/60 mb-6 leading-relaxed">
                Chantre de l&apos;Éternel, auteur-compositeur de renommée internationale
                et fondateur de la structure « Autour du Trône » et de sa fondation,
                il porte une vision qui dépasse le cadre artistique pour investir
                le champ de l&apos;action sociale.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-body-md text-pure-white/40 leading-relaxed mb-8">
                Avec Acclamons Jésus, Michel Bakenda réunit soutien concret, encouragement
                des jeunes talents et grand moment d&apos;adoration pour faire monter une
                même acclamation vers Jésus, au service de la paix.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <button
                type="button"
                onClick={() => scrollTo('#humanitarian')}
                className="btn-sacred"
              >
                Découvrir la plateforme FARDC
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

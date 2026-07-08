'use client'

import { FadeIn } from '../components/FadeIn'
import { asset } from '../lib/site'
import { Instagram, Youtube, Facebook, Music, Heart, Mail, MapPin } from 'lucide-react'

const navItems = [
  { label: 'Le Festival', href: '#about' },
  { label: 'Programme', href: '#experience' },
  { label: 'Artistes', href: '#artists' },
  { label: 'Billetterie', href: asset('/commande.html') },
  { label: 'Solidarité FARDC', href: '#humanitarian' },
  { label: 'Faire un don', href: '#faire-un-don' },
]

export function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="relative bg-deep-black border-t border-charcoal/20">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <FadeIn className="lg:col-span-1">
            <img
              src={asset('/logos/logo-officiel.png')}
              alt="Acclamons Jésus Celebration"
              className="h-20 w-auto max-w-[280px] mb-6"
            />
            <p className="text-body-sm text-pure-white/50 leading-relaxed mb-6">
              5<sup>e</sup> édition · 28 – 30 août 2026 · Centre Culturel Grand Tambour, Kinshasa.
              Un projet de la Fondation Michel Bakenda et de la structure « Autour du Trône ».
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 text-pure-white/40 hover:text-soft-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 text-pure-white/40 hover:text-soft-gold transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="p-2 text-pure-white/40 hover:text-soft-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 text-pure-white/40 hover:text-soft-gold transition-colors" aria-label="Musique">
                <Music size={20} />
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h4 className="text-caption text-soft-gold tracking-widest uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navItems.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="text-body-sm text-pure-white/50 hover:text-pure-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <a href={link.href} className="text-body-sm text-pure-white/50 hover:text-pure-white transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h4 className="text-caption text-soft-gold tracking-widest uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-soft-gold mt-1 flex-shrink-0" />
                <span className="text-body-sm text-pure-white/50">
                  Centre Culturel Grand Tambour<br />
                  Lingwala, Kinshasa<br />
                  République Démocratique du Congo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-soft-gold flex-shrink-0" />
                <a href="mailto:contact@acclamonsjesus.com" className="text-body-sm text-pure-white/50 hover:text-pure-white transition-colors">
                  contact@acclamonsjesus.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-soft-gold mt-1 flex-shrink-0" />
                <span className="text-body-sm text-pure-white/50">
                  Fondation Michel Bakenda<br />
                  Structure « Autour du Trône »
                </span>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h4 className="text-caption text-soft-gold tracking-widest uppercase mb-6">
              Newsletter
            </h4>
            <p className="text-body-sm text-pure-white/50 mb-4">
              Rejoignez-nous pour la Paix. Soyez rappelé dès l&apos;ouverture officielle des réservations.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="votreemail@example.com"
                className="w-full px-4 py-3 bg-charcoal/20 border border-charcoal/20 text-pure-white placeholder:text-pure-white/30 focus:border-soft-gold focus:outline-none transition-colors"
              />
              <button type="submit" className="w-full btn-sacred text-xs">
                Rejoindre
              </button>
            </form>
          </FadeIn>
        </div>
      </div>

      <div className="border-t border-charcoal/20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-caption text-pure-white/30 tracking-wider">
              © 2026 Acclamons Jésus pour la Paix. Tous droits réservés.
            </p>

            <div className="flex items-center gap-8">
              <button type="button" onClick={() => scrollTo('#humanitarian')} className="text-caption text-pure-white/30 hover:text-pure-white/60 transition-colors">
                Solidarité FARDC
              </button>
              <button type="button" onClick={() => scrollTo('#faire-un-don')} className="text-caption text-pure-white/30 hover:text-pure-white/60 transition-colors">
                Faire un don
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-caption text-pure-white/20 flex items-center justify-center gap-2">
              Fait avec <Heart size={12} className="text-soft-gold" /> pour la gloire de Dieu et la paix en RDC
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

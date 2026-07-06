'use client'

import { useState, useEffect } from 'react'
import { Ticket, Menu, X } from 'lucide-react'
import { asset } from '../lib/site'

const navLinks = [
  { name: 'Contexte', href: '#about' },
  { name: 'Concept', href: '#manifesto' },
  { name: 'La Paix', href: '#theme' },
  { name: 'Artistes', href: '#artists' },
  { name: 'Programme', href: '#experience' },
  { name: 'Solidarité', href: '#humanitarian' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const useDarkLogo = isScrolled || menuOpen
  const logoSrc = asset(
    useDarkLogo ? '/logos/logo-edition5-noir.png' : '/logos/logo-edition5-blanc-dore.png'
  )

  return (
    <header
      className={`site-header${isScrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-active' : ''}`}
      id="siteHeader"
    >
      <nav className="legacy-nav legacy-container" aria-label="Navigation principale">
        <a
          href="#hero"
          className="legacy-brand"
          aria-label="Acclamons Jésus pour la Paix"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
        >
          <img
            src={logoSrc}
            alt="Acclamons Jésus — 5e édition"
            className="legacy-brand-logo"
            width={120}
            height={72}
          />
        </a>

        <div className={`legacy-nav-links${menuOpen ? ' is-open' : ''}`} id="navLinks">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="legacy-nav-actions">
          <a href={asset('/commande.html')} className="legacy-btn">
            <Ticket size={18} aria-hidden="true" />
            Réserver
          </a>
          <button
            type="button"
            className="legacy-icon-button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="navLinks"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

'use client'

import { useState, useEffect, useRef, useCallback, type CSSProperties } from 'react'
import { Calendar, MapPin, Users, Ticket, Church } from 'lucide-react'
import { asset } from '../lib/site'

const HERO_SLIDE_COUNT = 3
const HERO_DURATIONS = [4200, 4200, 5600]
const COUNTDOWN_TARGET = new Date('2026-08-28T08:00:00+01:00').getTime()

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function slideStyle(active: boolean, options?: { padBottom?: boolean; centered?: boolean }): CSSProperties {
  const { padBottom, centered } = options ?? {}
  return {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: centered ? 'center' : 'flex-end',
    padding: padBottom
      ? '96px 0 clamp(180px, 22vh, 280px)'
      : centered
        ? '96px 0'
        : '96px 0 clamp(150px, 17vh, 220px)',
    opacity: active ? 1 : 0,
    visibility: active ? 'visible' : 'hidden',
    transform: active ? 'none' : 'translateY(28px)',
    pointerEvents: active ? 'auto' : 'none',
    transition: 'opacity 900ms cubic-bezier(0.22, 1, 0.36, 1), transform 900ms cubic-bezier(0.22, 1, 0.36, 1), visibility 900ms',
  }
}

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' })
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const slideRef = useRef(0)

  const showSlide = useCallback((index: number) => {
    const next = ((index % HERO_SLIDE_COUNT) + HERO_SLIDE_COUNT) % HERO_SLIDE_COUNT
    slideRef.current = next
    setActiveSlide(next)
  }, [])

  const scheduleSlide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      showSlide(slideRef.current + 1)
      scheduleSlide()
    }, HERO_DURATIONS[slideRef.current])
  }, [showSlide])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      showSlide(2)
      return
    }
    showSlide(0)
    scheduleSlide()

    const onVisibility = () => {
      if (document.hidden) {
        if (timerRef.current) clearTimeout(timerRef.current)
      } else {
        scheduleSlide()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [showSlide, scheduleSlide])

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, COUNTDOWN_TARGET - Date.now())
      setCountdown({
        days: pad(Math.floor(diff / 86400000)),
        hours: pad(Math.floor((diff % 86400000) / 3600000)),
        minutes: pad(Math.floor((diff % 3600000) / 60000)),
        seconds: pad(Math.floor((diff % 60000) / 1000)),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const hero = document.getElementById('hero')
    const video = hero?.querySelector('video')
    if (!hero || !video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const goToSlide = (index: number) => {
    showSlide(index)
    scheduleSlide()
  }

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="legacy-hero" id="hero" aria-label="Accueil">
      <video
        className="legacy-hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={asset('/images/hero-worship.jpg')}
      >
        <source src={asset('/hero-video.mp4')} type="video/mp4" />
      </video>
      <div className="legacy-hero-aura" aria-hidden="true" />
      <div className="legacy-hero-shine" aria-hidden="true" />

      <div
        className="legacy-hero-slides"
        style={{ position: 'relative', width: '100%', minHeight: 'min(820px, calc(100svh - 88px))' }}
      >
        <div
          className={`legacy-hero-slide${activeSlide === 0 ? ' is-live' : ''}`}
          data-slide="0"
          style={slideStyle(activeSlide === 0, { centered: true })}
          aria-hidden={activeSlide !== 0}
        >
          <div className="legacy-hero-slide-inner">
            <div className="legacy-hero-brand-row">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset('/logos/logo-edition5-blanc-dore.png')}
                alt="Acclamons Jésus — 5e édition"
                className="legacy-hero-edition-logo"
              />
            </div>
          </div>
        </div>

        <div
          className={`legacy-hero-slide${activeSlide === 1 ? ' is-live' : ''}`}
          data-slide="1"
          style={slideStyle(activeSlide === 1, { padBottom: true })}
          aria-hidden={activeSlide !== 1}
        >
          <div className="legacy-hero-slide-inner">
            <p className="legacy-hero-kicker">Notre mission 2026</p>
            <p className="legacy-hero-desc">
              Trois jours d&apos;adoration, de solidarité et de célébration au service de la paix
              à l&apos;Est de la RDC et des familles des FARDC, portés par Michel Bakenda et une
              constellation d&apos;artistes du gospel africain.
            </p>
          </div>
        </div>

        <div
          className={`legacy-hero-slide${activeSlide === 2 ? ' is-live' : ''}`}
          data-slide="2"
          style={slideStyle(activeSlide === 2)}
          aria-hidden={activeSlide !== 2}
        >
          <div className="legacy-hero-slide-inner">
            <div>
              <p className="legacy-hero-kicker">Rejoignez-nous</p>
              <div className="legacy-hero-meta">
                <span>
                  <Calendar size={18} className="legacy-hero-meta-icon" aria-hidden="true" />
                  28 – 30 août 2026
                </span>
                <span>
                  <MapPin size={18} className="legacy-hero-meta-icon" aria-hidden="true" />
                  Centre Culturel Grand Tambour, Kinshasa
                </span>
                <span>
                  <Users size={18} className="legacy-hero-meta-icon" aria-hidden="true" />
                  + 10 000 personnes attendues
                </span>
              </div>
              <div className="legacy-hero-actions">
                <a href={asset('/commande.html')} className="legacy-btn">
                  <Ticket size={18} aria-hidden="true" />
                  Réserver ma place
                </a>
                <button type="button" className="legacy-btn ghost" onClick={() => scrollTo('#manifesto')}>
                  <Church size={18} aria-hidden="true" />
                  Découvrir le projet
                </button>
              </div>
            </div>
            <aside className="legacy-hero-panel" aria-label="Compte à rebours">
              <div className="legacy-countdown-heading">
                <span>Compte à rebours</span>
                <strong>28-30 août 2026</strong>
              </div>
              <div className="legacy-countdown-grid">
                <div className="legacy-countdown-item"><strong>{countdown.days}</strong><span>Jours</span></div>
                <div className="legacy-countdown-item"><strong>{countdown.hours}</strong><span>Heures</span></div>
                <div className="legacy-countdown-item"><strong>{countdown.minutes}</strong><span>Min</span></div>
                <div className="legacy-countdown-item"><strong>{countdown.seconds}</strong><span>Sec</span></div>
              </div>
              <div className="legacy-hero-days">
                <div><strong>Jour 1</strong><span>Descente humanitaire</span></div>
                <div><strong>Jour 2</strong><span>Jeunes talents</span></div>
                <div><strong>Jour 3</strong><span>Show de célébration</span></div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="legacy-hero-progress" aria-label="Progression des slides">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            type="button"
            className={activeSlide === i ? 'is-active' : ''}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </section>
  )
}

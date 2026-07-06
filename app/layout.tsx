import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from './components/Navigation'
import { asset } from './lib/site'

export const metadata: Metadata = {
  title: 'Acclamons Jésus pour la Paix | Festival Gospel 2026',
  description: '5e édition du 28 au 30 août 2026 au Centre Culturel Grand Tambour, Kinshasa. Trois jours d\'adoration, de solidarité FARDC et de célébration avec Michel Bakenda et ses invités.',
  keywords: ['gospel', 'Kinshasa', 'FARDC', 'Michel Bakenda', 'paix', 'louange', 'RDC', 'festival'],
  openGraph: {
    title: 'Acclamons Jésus pour la Paix — 5e Édition 2026',
    description: '28-30 août 2026 · Centre Culturel Grand Tambour · Kinshasa',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Manrope:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={asset('/logos/logo-edition5-blanc-dore.png')} type="image/png" />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}

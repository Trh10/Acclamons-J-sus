import { Hero } from './sections/Hero'
import { Spot } from './sections/Spot'
import { Manifesto } from './sections/Manifesto'
import { About } from './sections/About'
import { Theme } from './sections/Theme'
import { Experience } from './sections/Experience'
import { Artists } from './sections/Artists'
import { Humanitarian } from './sections/Humanitarian'
import { Gallery } from './sections/Gallery'
import { Testimonials } from './sections/Testimonials'
import { Footer } from './sections/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Spot />
      <Manifesto />
      <About />
      <Theme />
      <Experience />
      <Artists />
      <Humanitarian />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  )
}

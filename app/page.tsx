import { Hero } from './sections/Hero'
import { Manifesto } from './sections/Manifesto'
import { About } from './sections/About'
import { Theme } from './sections/Theme'
import { Experience } from './sections/Experience'
import { Artists } from './sections/Artists'
import { Humanitarian } from './sections/Humanitarian'
import { Testimonials } from './sections/Testimonials'
import { Footer } from './sections/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Manifesto />
      <About />
      <Theme />
      <Experience />
      <Artists />
      <Humanitarian />
      <Testimonials />
      <Footer />
    </main>
  )
}

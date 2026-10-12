import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Mission from './components/Mission'
import Testimonial from './components/Testimonial'
import CallVideo from './components/CallVideo'
import Pricing from './components/Pricing'
import CtaBanner from './components/CtaBanner'
import Newsletter from './components/Newsletter'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Mission />
        <Testimonial />
        <CallVideo />
        <Pricing />
        <CtaBanner />
        <Newsletter />
      </main>
      <Partners />
      <Footer />
    </>
  )
}
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Cabanas from '@/components/Cabanas'
import SobreNosotros from '@/components/SobreNosotros'
import Ubicacion from '@/components/Ubicacion'
import ReservasRapidas from '@/components/ReservasRapidas'
import FAQ from '@/components/FAQ'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Cabanas />
      <SobreNosotros />
      <Ubicacion />
      <ReservasRapidas />
      <FAQ />
      <Contacto />
      <Footer />
    </main>
  )
}
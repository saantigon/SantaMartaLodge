import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Cabanas from '@/components/Cabanas'
import SobreNosotros from '@/components/SobreNosotros'
import ImageGallery from '@/components/ImageGallery'
import Ubicacion from '@/components/Ubicacion'
import WhatsAppReservas from '@/components/WhatsAppReservas'
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
      <ImageGallery />
      <Ubicacion />
      <WhatsAppReservas />
      <FAQ />
      <Contacto />
      <Footer />
    </main>
  )
}
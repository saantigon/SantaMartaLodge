import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Cabanas from '@/components/Cabanas'
import SobreNosotros from '@/components/SobreNosotros'
import ImageGallery from '@/components/ImageGallery'
import Ubicacion from '@/components/Ubicacion'
import WhatsAppReservas from '@/components/WhatsAppReservas'
import Opiniones from '@/components/Opiniones'
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
      <Opiniones />
      <FAQ />
      <Contacto />
      <Footer />
    </main>
  )
}
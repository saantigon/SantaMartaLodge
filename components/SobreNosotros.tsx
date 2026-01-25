import { Heart, Leaf, Star } from 'lucide-react'

export default function SobreNosotros() {
  const valores = [
    {
      icono: <Heart size={32} />,
      titulo: "Hospitalidad",
      descripcion: "Nos dedicamos a brindar una experiencia cálida y acogedora a cada huésped."
    },
    {
      icono: <Leaf size={32} />,
      titulo: "Sostenibilidad",
      descripcion: "Comprometidos con el cuidado del medio ambiente y prácticas eco-amigables."
    },
    {
      icono: <Star size={32} />,
      titulo: "Calidad",
      descripcion: "Mantenemos los más altos estándares en nuestras instalaciones y servicios."
    }
  ]

  return (
    <section id="sobre-nosotros" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="about-grid">
          <div>
            <div style={{
              background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--secondary-color) 100%)',
              padding: '2rem',
              borderRadius: '1rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: 'var(--text-primary)'
              }}>
                Nuestra Historia
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '1rem'
              }}>
                Ubicados en Villa de las Rosas, Córdoba, en el corazón del Valle de Traslasierra, 
                nuestras cabañas son el punto de partida ideal para explorar el Cerro Champaquí, 
                la cumbre más alta de la provincia. Conocida como la "Capital del Senderismo", 
                esta región ofrece una experiencia única de turismo de naturaleza y aventura.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8'
              }}>
                Rodeados de arroyos cristalinos, senderos señalizados y la majestuosidad de las 
                Sierras de Córdoba, ofrecemos el equilibrio perfecto entre comodidad y conexión 
                con la naturaleza. Un destino ideal para quienes buscan slow travel, ecoturismo 
                y experiencias auténticas en las sierras.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {valores.map((valor, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  background: 'var(--primary-color)',
                  borderRadius: '1rem'
                }}>
                  <div style={{
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {valor.icono}
                  </div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}>
                    {valor.titulo}
                  </h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: '1.6'
                  }}>
                    {valor.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
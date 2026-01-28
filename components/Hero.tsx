import Image from 'next/image'

export default function Hero() {
  return (
    <section style={{
      background: 'var(--white)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '80px',
      position: 'relative'
    }}>
      {/* Imagen panorámica */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '50vh',
        minHeight: '400px',
        overflow: 'hidden'
      }}>
        <Image
          src="/images/hero/cerro-panoramico.jpg"
          alt="Vista panorámica del Cerro Champaquí"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        {/* Overlay sutil para mejorar legibilidad */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3))',
          zIndex: 1
        }} />
      </div>

      {/* Contenido del Hero */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
        position: 'relative',
        padding: '3rem 0'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            textAlign: 'center'
          }}>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: 'var(--text-primary)'
            }}>
              Bienvenido a Santa Marta Lodge
            </h1>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              En el corazón del Valle de Traslasierra, al pie del Cerro Champaquí, se encuentra tu refugio perfecto para desconectar, explorar senderos y vivir la naturaleza serrana.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="https://wa.me/5493388670986?text=Hola! Quiero hacer una consulta sobre las cabañas Santa Marta Lodge" target="_blank" className="btn btn-primary">
                Consultar por WhatsApp
              </a>
              <a href="#cabanas" className="btn btn-secondary">
                Ver Cabañas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
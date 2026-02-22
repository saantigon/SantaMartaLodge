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
        height: '60vh',
        minHeight: '400px',
        overflow: 'hidden'
      }}>
        <Image
          src="/images/hero/cerro-panoramico-recorte22.jpg"
          alt="Vista panorámica del Cerro Champaquí"
          width={2560}
          height={1280}
          priority
          quality={90}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 70%'
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
        background: '#E2BB92',
        position: 'relative',
        padding: '1.5rem 0'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0'
          }}>
            {/* Título */}
            <div style={{ marginBottom: '0' }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.6875rem)',
                fontWeight: 'bold',
                margin: '0',
                color: 'var(--text-primary)',
                fontFamily: "'Spring LP', 'Brush Script MT', cursive",
                lineHeight: '1'
              }}>
                Bienvenido a Santa Marta Lodge
              </h1>
            </div>

            {/* Párrafo */}
            <div style={{ marginBottom: '1rem' }}>
              <p style={{
                fontSize: '1.375rem',
                color: 'var(--text-secondary)',
                maxWidth: '850px',
                margin: '0',
                lineHeight: '1.2'
              }}>
                En el corazón del Valle de Traslasierra, al pie del Cerro Champaquí, se encuentra tu refugio perfecto para desconectar, explorar senderos y vivir la naturaleza serrana.
              </p>
            </div>

            {/* Botones */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="https://wa.me/5493388670986?text=Hola! Quiero hacer una consulta sobre las cabañas Santa Marta Lodge" 
                target="_blank" 
                className="btn"
                style={{
                  background: '#A94B17',
                  color: '#F4EFEA'
                }}
              >
                Consultar por WhatsApp
              </a>
              <a 
                href="#cabanas" 
                className="btn"
                style={{
                  background: '#A94B17',
                  color: '#F4EFEA'
                }}
              >
                Ver Cabañas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
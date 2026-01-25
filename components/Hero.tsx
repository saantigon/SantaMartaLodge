export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Imágenes flotantes de fondo */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              animation: `float${i} ${8 + i * 2}s ease-in-out infinite`,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`
            }}
          >
            {i % 2 === 0 ? '🏡' : '🌲'}
          </div>
        ))}
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div>
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
              En el corazón del Valle de Traslasierra, al pie del Cerro Champaquí. 
              Tu refugio perfecto para desconectar, explorar senderos y vivir la naturaleza serrana.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="https://wa.me/5493388670986?text=Hola! Quiero hacer una consulta sobre las cabañas de Santa Marta Lodge" target="_blank" className="btn btn-primary">
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
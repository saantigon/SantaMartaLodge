export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px'
    }}>
      <div className="container">
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
              Bienvenido a Santa Marta
            </h1>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '2rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Disfruta de la tranquilidad y belleza natural en nuestras cómodas cabañas. 
              El lugar perfecto para desconectar y crear recuerdos inolvidables.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#reservas" className="btn btn-primary">
                Reservar Ahora
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
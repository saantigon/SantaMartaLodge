import { MapPin, Clock, Car } from 'lucide-react'

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="section" style={{ background: 'var(--neutral-light)' }}>
      <div className="container">
        <h2 className="section-title">Nuestra Ubicación</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="location-grid">
          
          {/* Mapa */}
          <div className="card">
            <div style={{
              height: '400px',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              marginBottom: '1rem'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168!2d-58.3816!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzEzLjMiUyA1OMKwMjInNTcuOCJX!5e0!3m2!1ses!2sar!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Santa Marta Lodge"
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Santa Marta Lodge
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                📍 Ruta Provincial 123, Km 45, Villa Serrana
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Coordenadas: -34.6037, -58.3816
              </p>
            </div>
          </div>

          {/* Información de acceso */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <Car size={24} style={{ color: 'var(--text-primary)' }} />
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  Cómo Llegar
                </h4>
              </div>
              <ul style={{
                listStyle: 'none',
                color: 'var(--text-secondary)',
                lineHeight: '1.8'
              }}>
                <li>🚗 2 horas desde la capital</li>
                <li>🛣️ Ruta asfaltada hasta km 40</li>
                <li>🏔️ 5 km de camino de ripio</li>
                <li>🅿️ Estacionamiento gratuito</li>
              </ul>
            </div>

            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <Clock size={24} style={{ color: 'var(--text-primary)' }} />
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  Horarios
                </h4>
              </div>
              <div style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <p><strong>Check-in:</strong> 15:00 - 20:00</p>
                <p><strong>Check-out:</strong> 08:00 - 11:00</p>
                <p><strong>Recepción:</strong> 24 horas</p>
                <p><strong>Emergencias:</strong> Siempre disponible</p>
              </div>
            </div>
          </div>

          {/* Puntos de interés */}
          <div className="card">
            <h4 style={{
              color: 'var(--text-primary)',
              fontSize: '1.2rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Puntos de Interés Cercanos
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏞️</div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Parque Nacional
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  15 min caminando
                </p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏊</div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Lago Cristalino
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  5 min caminando
                </p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🥾</div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Senderos
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Acceso directo
                </p>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏪</div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Pueblo
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  10 min en auto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}
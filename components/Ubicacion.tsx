import { Clock, Car } from 'lucide-react'

export default function Ubicacion() {
  // Color de fondo del módulo - Cambiar el código HEX aquí
  const backgroundColor = '#E2BB92';

  return (
    <section id="ubicacion" className="section" style={{ background: backgroundColor }}>
      <div className="container">
        <h2 className="section-title">Nuestra ubicación</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="location-grid">
          
          {/* Mapa */}
          <div className="card" style={{backgroundColor: '#EFE6DC'}}>
            <div style={{
              height: '400px',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              marginBottom: '1rem',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.789!2d-65.0676!3d-31.9607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDU3JzM4LjUiUyA2NcKwMDQnMDMuNCJX!5e0!3m2!1ses!2sar!4v1234567890"
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
                📍 Villa de las Rosas, Valle de Traslasierra, Córdoba
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Coordenadas: 31°57'38.5"S 65°04'03.4"W
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem', fontStyle: 'italic' }}>
                Portal del Champaquí - Capital del Senderismo
              </p>
            </div>
          </div>

          {/* Información de acceso */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            <div className="card" style={{backgroundColor: '#EFE6DC'}}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <Car size={24} style={{ color: 'var(--text-primary)' }} />
                <h4 style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  Cómo llegar
                </h4>
              </div>
              <ul style={{
                listStyle: 'none',
                color: 'var(--text-secondary)',
                lineHeight: '1.8'
              }}>
                <li>🚗 Desde Córdoba Capital: 3 horas</li>
                <li>🛣️ Ruta Provincial 14 (asfaltada)</li>
                <li>🏔️ Valle de Traslasierra</li>
                <li>🅿️ Estacionamiento gratuito</li>
                <li>🛬 Desde el Aeropuerto Internacional Valle del Conlara: 1 hora</li>
              </ul>
            </div>

            <div className="card" style={{backgroundColor: '#EFE6DC'}}>
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
                <p><strong>Check-in:</strong> Desde las 13:00 hs</p>
                <p><strong>Check-out:</strong> Hasta las 10:00 hs</p>
                <p><strong>Recepción:</strong> 24 horas</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem', fontStyle: 'italic' }}>
                Tanto el horario de check-in como el de check-out podrán ser modificados con antelación.
              </p>
              </div>
            </div>
          </div>

          {/* Puntos de interés */}
          <div className="card" style={{backgroundColor: '#EFE6DC'}}>
            <h4 style={{
              color: 'var(--text-primary)',
              fontSize: '1.2rem',
              marginBottom: '1rem',
              textAlign: 'center'
            }}>
              Puntos de interés cercanos
            </h4>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {/* inicio cerro */}
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏔️</div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Cerro Champaquí
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Acceso Los Molles
                </p>
              </div>
              {/* fin cerro */}
              {/* inicio feria */}
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎨</div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Feria artesanal
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  En el pueblo
                </p>
              </div> 
              {/* fin feria */}
              {/* inicio senderos */}
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🥾</div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Red de senderos
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Cercanía a distintos accesos
                </p>
              </div>
              {/* fin senderos */}
              {/* inicio bodegas */}
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🍷</div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Bodegas y viñedos
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Zona cercana
                </p>
              </div>
              {/* fin bodegas */}
              {/* inicio dique */}
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌊</div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Dique La Viña
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  20 min en auto
                </p>
              </div>
              {/* fin dique */} 
              {/* inicio balneario */}
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💧</div>
                <h5 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Balneario Guasmara
                </h5>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  5 min en auto
                </p>
              </div>
              {/* fin balneario */}                           
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

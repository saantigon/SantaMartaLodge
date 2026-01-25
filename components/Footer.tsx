import { Heart, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--text-primary) 0%, #1A202C 100%)',
      color: 'var(--white)',
      padding: '3rem 0 1rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          
          {/* Información principal */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🏡 Santa Marta Lodge
            </h3>
            <p style={{
              color: '#CBD5E0',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Tu refugio perfecto en la naturaleza. Más de 15 años brindando 
              experiencias únicas en un entorno natural privilegiado.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a href="#" style={{ color: '#CBD5E0', fontSize: '1.5rem' }}>📷</a>
              <a href="#" style={{ color: '#CBD5E0', fontSize: '1.5rem' }}>📘</a>
              <a href="#" style={{ color: '#CBD5E0', fontSize: '1.5rem' }}>💬</a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Enlaces Rápidos
            </h4>
            <ul style={{
              listStyle: 'none',
              color: '#CBD5E0'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#cabanas" style={{ color: '#CBD5E0', textDecoration: 'none' }}>
                  Nuestras Cabañas
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="https://wa.me/5493388670986" target="_blank" style={{ color: '#CBD5E0', textDecoration: 'none' }}>
                  Reservar por WhatsApp
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#ubicacion" style={{ color: '#CBD5E0', textDecoration: 'none' }}>
                  Cómo Llegar
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#faq" style={{ color: '#CBD5E0', textDecoration: 'none' }}>
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Contacto
            </h4>
            <div style={{ color: '#CBD5E0' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <MapPin size={16} />
                <span style={{ fontSize: '0.9rem' }}>
                  Ruta Provincial 123, Km 45
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <Phone size={16} />
                <span style={{ fontSize: '0.9rem' }}>
                  +54 11 1234-5678
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                <Mail size={16} />
                <span style={{ fontSize: '0.9rem' }}>
                  reservas@santamarta.com
                </span>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Horarios de Atención
            </h4>
            <div style={{ color: '#CBD5E0', fontSize: '0.9rem' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Check-in:</strong> 15:00 - 20:00
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Check-out:</strong> 08:00 - 11:00
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Consultas:</strong> 8:00 - 22:00
              </p>
              <p>
                <strong>Emergencias:</strong> 24 horas
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div style={{
          borderTop: '1px solid #4A5568',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            color: '#CBD5E0',
            fontSize: '0.9rem',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            © 2024 Santa Marta Lodge. Hecho con <Heart size={16} style={{ color: '#F56565' }} /> para nuestros huéspedes.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#CBD5E0'
          }}>
            <a href="#" style={{ color: '#CBD5E0', textDecoration: 'none' }}>
              Términos y Condiciones
            </a>
            <a href="#" style={{ color: '#CBD5E0', textDecoration: 'none' }}>
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
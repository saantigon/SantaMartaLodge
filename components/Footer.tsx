'use client'

import { Heart, MapPin, Phone, Mail } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaCalendarCheck } from 'react-icons/fa'

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
              En el corazón del Valle de Traslasierra, al pie del Cerro Champaquí. Tu refugio perfecto para desconectar, explorar senderos y vivir la naturaleza serrana.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              <a 
                href="https://instagram.com/santamartalodge" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#E4405F', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FaInstagram />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#1877F2', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://wa.me/5493388670986" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#25D366', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://booking.com" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  color: '#003580', 
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <FaCalendarCheck />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>
              Enlaces rápidos
            </h4>
            <ul style={{
              listStyle: 'none',
              color: '#CBD5E0'
            }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#cabanas" style={{ color: '#CBD5E0', textDecoration: 'none' }}>
                  Nuestras cabañas
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="https://wa.me/5493388670986" target="_blank" style={{ color: '#CBD5E0', textDecoration: 'none' }}>
                  Reservar por WhatsApp
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#ubicacion" style={{ color: '#CBD5E0', textDecoration: 'none' }}>
                  Cómo llegar
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#faq" style={{ color: '#CBD5E0', textDecoration: 'none' }}>
                  Preguntas frecuentes
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
                  Ángel Marcucci S/N, Villa de Las Rosas
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
                  +54 9 3388 670986
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
                  santamartalodgevdlr@gmail.com
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
                <strong>Check-in:</strong> Desde las 13:00 hs
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Check-out:</strong> Hasta las 10:00 hs
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Consultas:</strong> 8:00 hs - 22:00 hs
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
            © 2026 Santa Marta Lodge. Hecho con <Heart size={16} style={{ color: '#F56565' }} /> para nuestros huéspedes.
          </p>
        </div>
      </div>
    </footer>
  )
}
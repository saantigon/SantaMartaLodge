'use client'

import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaCalendarCheck } from 'react-icons/fa'

export default function Contacto() {
  const contactos = [
    {
      tipo: "Reservas y consultas",
      icono: <Phone size={24} />,
      principal: "+54 9 3388 670986",
      secundario: "WhatsApp disponible",
      horario: "Lun a Dom: 8:00 - 22:00"
    },
    {
      tipo: "Email",
      icono: <Mail size={24} />,
      principal: "santamartalodgevdlr@gmail.com",
      secundario: "santamartalodgevdlr@gmail.com",
      horario: "Respuesta en 24hs"
    }
  ]

  const redesSociales = [
    { nombre: "WhatsApp", url: "https://wa.me/5493388670986?text=Hola! Quiero hacer una consulta sobre Santa Marta Lodge", icon: <FaWhatsapp size={24} />, color: '#25D366' },
    { nombre: "Instagram", url: "https://instagram.com/santamartalodge", icon: <FaInstagram size={24} />, color: '#E4405F' },
    { nombre: "Facebook", url: "https://facebook.com", icon: <FaFacebookF size={24} />, color: '#1877F2' },
    { nombre: "Booking", url: "https://booking.com", icon: <FaCalendarCheck size={24} />, color: '#003580' }
  ]

  return (
    <section id="contacto" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <h2 className="section-title">Contactos útiles</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {contactos.map((contacto, index) => (
            <div key={index} className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  background: 'var(--primary-color)',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  color: 'var(--text-primary)'
                }}>
                  {contacto.icono}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  {contacto.tipo}
                </h3>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem'
                }}>
                  {contacto.principal}
                </p>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem'
                }}>
                  {contacto.secundario}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem'
                }}>
                  <Clock size={14} />
                  {contacto.horario}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Redes sociales */}
        <div className="card" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: 'var(--text-primary)'
          }}>
            Seguinos en redes sociales
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            {redesSociales.map((red, index) => (
              <a
                key={index}
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.25rem',
                  background: 'var(--secondary-color)',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontWeight: '500',
                  transition: 'all 0.3s ease',
                  border: `2px solid transparent`
                }}
                className="social-link"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = red.color
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <span style={{ color: red.color, display: 'flex', alignItems: 'center' }}>
                  {red.icon}
                </span>
                {red.nombre}
              </a>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{
            background: 'var(--accent-color)',
            padding: '1.5rem',
            borderRadius: '1rem',
            textAlign: 'center'
          }}>
            <MapPin size={32} style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} />
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: 'var(--text-primary)'
            }}>
              Dirección completa
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Ángel Marcucci S/N<br />
              Villa de Las Rosas, (5885) Departamento San Javier, Córdoba<br />
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
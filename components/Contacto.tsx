import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function Contacto() {
  const contactos = [
    {
      tipo: "Reservas y Consultas",
      icono: <Phone size={24} />,
      principal: "+54 11 1234-5678",
      secundario: "WhatsApp disponible",
      horario: "Lun a Dom: 8:00 - 22:00"
    },
    {
      tipo: "Email",
      icono: <Mail size={24} />,
      principal: "reservas@santamarta.com",
      secundario: "info@santamarta.com",
      horario: "Respuesta en 24hs"
    },
    {
      tipo: "Emergencias",
      icono: <Phone size={24} />,
      principal: "+54 11 9876-5432",
      secundario: "Solo urgencias",
      horario: "24 horas"
    }
  ]

  const redesSociales = [
    { nombre: "WhatsApp", icono: "💬", enlace: "https://wa.me/5491123456789?text=Hola! Quiero hacer una consulta sobre Santa Marta Lodge" },
    { nombre: "Instagram", icono: "📷", enlace: "#" },
    { nombre: "Facebook", icono: "📘", enlace: "#" },
    { nombre: "TripAdvisor", icono: "✈️", enlace: "#" }
  ]

  return (
    <section id="contacto" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <h2 className="section-title">Contactos Útiles</h2>
        
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
            Síguenos en Redes Sociales
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
                href={red.enlace}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  background: 'var(--secondary-color)',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                  fontWeight: '500',
                  transition: 'transform 0.3s ease'
                }}
                className="social-link"
              >
                <span style={{ fontSize: '1.2rem' }}>{red.icono}</span>
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
              Dirección Completa
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Ruta Provincial 123, Km 45<br />
              Villa Serrana, Provincia<br />
              Código Postal: 1234
            </p>
          </div>

          <div style={{
            background: 'var(--success-color)',
            padding: '1.5rem',
            borderRadius: '1rem',
            textAlign: 'center'
          }}>
            <MessageCircle size={32} style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} />
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: 'var(--text-primary)'
            }}>
              Respuesta Garantizada
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Te respondemos en menos de 2 horas<br />
              durante horario de atención<br />
              ¡Tu consulta es importante!
            </p>
          </div>

          <div style={{
            background: 'var(--primary-color)',
            padding: '1.5rem',
            borderRadius: '1rem',
            textAlign: 'center'
          }}>
            <Phone size={32} style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} />
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: 'var(--text-primary)'
            }}>
              Atención Personalizada
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Hablamos español e inglés<br />
              Personal capacitado<br />
              Servicio amigable y profesional
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
'use client'
import { MessageCircle, Phone, Clock, CheckCircle } from 'lucide-react'

export default function WhatsAppReservas() {
  const whatsappNumber = "5493388670986"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  const pasos = [
    {
      numero: 1,
      titulo: "Contactá por WhatsApp",
      descripcion: "Envianos un mensaje con tus fechas preferidas y número de huéspedes.",
      icono: <MessageCircle size={32} />
    },
    {
      numero: 2,
      titulo: "Confirmamos disponibilidad",
      descripcion: "Te respondemos inmediatamente con la disponibilidad y otros detalles que requieras.",
      icono: <CheckCircle size={32} />
    },
    {
      numero: 3,
      titulo: "Reserva confirmada",
      descripcion: "Con una seña del 20% asegurás tu reserva. El resto se paga al llegar.",
      icono: <Phone size={32} />
    }
  ]

  return (
    <section id="reservas" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <h2 className="section-title">Reservas por WhatsApp</h2>
        
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Hacemos nuestras reservas de forma personal a través de WhatsApp para brindarte 
            la mejor atención y resolver todas tus dudas al instante.
          </p>
          
          <a 
            href={`${whatsappLink}?text=Hola! Quiero hacer una reserva en Santa Marta Lodge. ¿Podrían ayudarme?`}
            target="_blank"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 2rem',
              background: '#25D366',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
            }}
            className="whatsapp-btn"
          >
            <MessageCircle size={24} />
            Reservar por WhatsApp
          </a>
        </div>

        {/* Proceso de reserva */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {pasos.map((paso) => (
            <div key={paso.numero} className="card" style={{ textAlign: 'center' }}>
              <div style={{
                background: 'var(--primary-color)',
                width: '4rem',
                height: '4rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'var(--text-primary)'
              }}>
                {paso.icono}
              </div>
              <div style={{
                background: 'var(--secondary-color)',
                color: 'var(--text-primary)',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontWeight: 'bold'
              }}>
                {paso.numero}
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: 'var(--text-primary)'
              }}>
                {paso.titulo}
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6'
              }}>
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          <div style={{
            background: 'var(--success-color)',
            padding: '1.5rem',
            borderRadius: '1rem',
            textAlign: 'center'
          }}>
            <Clock size={32} style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} />
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Respuesta inmediata
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Te respondemos en menos de 30 minutos.
            </p>
          </div>

          <div style={{
            background: 'var(--accent-color)',
            padding: '1.5rem',
            borderRadius: '1rem',
            textAlign: 'center'
          }}>
            <CheckCircle size={32} style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} />
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Pago flexible
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Seña del 20% para reservar, el resto se abona al momento del check-in.
            </p>
          </div>

          <div style={{
            background: 'var(--primary-color)',
            padding: '1.5rem',
            borderRadius: '1rem',
            textAlign: 'center'
          }}>
            <MessageCircle size={32} style={{ color: 'var(--text-primary)', marginBottom: '1rem' }} />
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Atención personalizada
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Estamos a disposición para lo que necesites durante toda tu estadía.
            </p>
          </div>
        </div>

        {/* Horarios de atención */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          background: 'var(--neutral-light)',
          padding: '2rem',
          borderRadius: '1rem'
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            Horarios de atención WhatsApp
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <div>
              <strong>Lunes a sábados:</strong><br />
              9:00 - 20:00 hs
            </div>
            <div>
              <strong>Domingos:</strong><br />
              11:00 - 18:00 hs
            </div>            
          </div>
        </div>
      </div>
    </section>
  )
}
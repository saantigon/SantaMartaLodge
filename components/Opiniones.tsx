'use client'

import { Star, Mail, MessageCircle } from 'lucide-react'
import { FaGoogle } from 'react-icons/fa'

export default function Opiniones() {

  return (
    <section id="opiniones" className="section" style={{ background: 'var(--neutral-light)' }}>
      <div className="container">
        {/* Botones para dejar opinión */}
        <div className="card" style={{
          textAlign: 'center',
          padding: '2rem',
          background: 'linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            ¿Ya nos visitaste?
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '2rem',
            fontSize: '1rem'
          }}>
            Nos encantaría conocer tu experiencia. Dejanos tu opinión:
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#4285F4',
                padding: '0.75rem 1.5rem'
              }}
            >
              <FaGoogle size={20} />
              Opinar en Google
            </a>
            
            <a
              href="mailto:reservas@santamarta.com?subject=Opinión sobre mi estadía&body=Hola! Quiero compartir mi experiencia en Santa Marta Lodge..."
              className="btn btn-secondary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem'
              }}
            >
              <Mail size={20} />
              Enviar por Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

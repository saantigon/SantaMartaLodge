'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      pregunta: "¿Qué actividades puedo hacer en Villa de las Rosas?",
      respuesta: "Villa de las Rosas es la Capital del Senderismo de Traslasierra. Puedes hacer trekking al Cerro Champaquí, recorrer senderos como La Calandria y Los Jilgueros, visitar el Balneario Guasmara, el Dique La Viña, hacer cabalgatas, mountain bike, y visitar la feria artesanal del pueblo."
    },
    {
      pregunta: "¿Cuál es la política de cancelación?",
      respuesta: "Puedes cancelar hasta 48 horas antes del check-in sin costo. Cancelaciones con menos tiempo tienen un cargo del 50% de la primera noche."
    },
    {
      pregunta: "¿Qué tan lejos está el Cerro Champaquí?",
      respuesta: "Estamos en el Portal del Champaquí. Desde nuestras cabañas tienes acceso directo a las rutas de ascenso a la cumbre más alta de Córdoba (2790 m). Es ideal para trekkings de día completo o travesías de varios días."
    },
    {
      pregunta: "¿Se permiten mascotas?",
      respuesta: "Sí, aceptamos mascotas en todas nuestras cabañas. Hay un cargo adicional por noche por mascota. Deben estar vacunadas y ser de buen comportamiento."
    },
    {
      pregunta: "¿Qué incluye el precio de la cabaña?",
      respuesta: "El precio incluye: ropa de cama, toallas, WiFi, estacionamiento, acceso a senderos, uso de parrillas y limpieza final. No incluye comida ni bebidas."
    },
    {
      pregunta: "¿Hay lugares para comer cerca?",
      respuesta: "En Villa de las Rosas (a pocos minutos) encontrarás restaurantes con gastronomía regional, pizzerías, confiterías y la feria de productores con productos orgánicos, aceite de oliva artesanal y vinos de Traslasierra."
    },
    {
      pregunta: "¿Cuál es la mejor época para visitar?",
      respuesta: "Villa de las Rosas es hermosa todo el año. Primavera y otoño son ideales para trekking. Verano es perfecto para balnearios y arroyos. Invierno ofrece paisajes únicos y menos turistas. El clima serrano es templado y agradable."
    },
    {
      pregunta: "¿Hay señal de celular e internet?",
      respuesta: "Hay WiFi gratuito en todas las cabañas. La señal de celular es limitada pero funcional para emergencias. ¡Perfecto para desconectar y disfrutar la naturaleza!"
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" className="section" style={{ background: 'var(--neutral-light)' }}>
      <div className="container">
        <h2 className="section-title">Preguntas Frecuentes</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="card" style={{ marginBottom: '1rem' }}>
              <button
                onClick={() => toggleItem(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  margin: 0
                }}>
                  {faq.pregunta}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp size={20} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
                ) : (
                  <ChevronDown size={20} style={{ color: 'var(--text-secondary)', flexShrink: 0 }} />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div style={{
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--neutral-medium)'
                }}>
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {faq.respuesta}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          background: 'var(--primary-color)',
          padding: '2rem',
          borderRadius: '1rem'
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'var(--text-primary)'
          }}>
            ¿No encontraste lo que buscabas?
          </h3>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem'
          }}>
            Estamos aquí para ayudarte. Contáctanos por WhatsApp y resolveremos todas tus dudas.
          </p>
          <a href="https://wa.me/5493388670986?text=Hola! Tengo una consulta sobre Santa Marta Lodge" target="_blank" className="btn btn-secondary">
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
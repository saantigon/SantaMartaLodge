'use client'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqs = [
    {
      pregunta: "¿Cuál es la política de cancelación?",
      respuesta: "Puedes cancelar hasta 48 horas antes del check-in sin costo. Cancelaciones con menos tiempo tienen un cargo del 50% de la primera noche."
    },
    {
      pregunta: "¿Se permiten mascotas?",
      respuesta: "Sí, aceptamos mascotas en todas nuestras cabañas. Hay un cargo adicional de $15 por noche por mascota. Deben estar vacunadas y ser de buen comportamiento."
    },
    {
      pregunta: "¿Qué incluye el precio de la cabaña?",
      respuesta: "El precio incluye: ropa de cama, toallas, WiFi, estacionamiento, acceso a senderos, uso de parrillas y limpieza final. No incluye comida ni bebidas."
    },
    {
      pregunta: "¿Hay servicio de comidas?",
      respuesta: "No tenemos restaurante, pero todas las cabañas tienen cocina completamente equipada. En el pueblo (10 min) hay varios restaurantes y un supermercado."
    },
    {
      pregunta: "¿Cuál es la edad mínima para hacer una reserva?",
      respuesta: "El huésped principal debe ser mayor de 18 años. Los menores deben estar acompañados por un adulto responsable."
    },
    {
      pregunta: "¿Hay actividades incluidas?",
      respuesta: "Incluimos acceso gratuito a senderos, área de fogatas, juegos de mesa y kayaks (sujeto a disponibilidad). También organizamos caminatas guiadas los fines de semana."
    },
    {
      pregunta: "¿Qué debo traer?",
      respuesta: "Recomendamos traer: comida y bebidas, protector solar, repelente, ropa cómoda para caminar, y linterna. Proporcionamos todo lo demás."
    },
    {
      pregunta: "¿Hay señal de celular e internet?",
      respuesta: "Hay WiFi gratuito en todas las cabañas. La señal de celular es limitada pero funcional para emergencias. ¡Perfecto para desconectar!"
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
          <a href="https://wa.me/5491123456789?text=Hola! Tengo una consulta sobre Santa Marta Lodge" target="_blank" className="btn btn-secondary">
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
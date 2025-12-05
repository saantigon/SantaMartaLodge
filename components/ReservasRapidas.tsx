'use client'
import { useState } from 'react'
import { Calendar, Users, Phone, Mail } from 'lucide-react'
import { useReservas } from '@/lib/reservas'

export default function ReservasRapidas() {
  const { crearReserva, verificarDisponibilidad, recargarReservas } = useReservas()
  const [enviando, setEnviando] = useState(false)
  const [formData, setFormData] = useState({
    fechaEntrada: '',
    fechaSalida: '',
    huespedes: '2',
    cabana: '',
    nombre: '',
    email: '',
    telefono: '',
    comentarios: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEnviando(true)
    
    try {
      const nuevaReserva = await crearReserva({
        cabaña: formData.cabana,
        fechaInicio: formData.fechaEntrada,
        fechaFin: formData.fechaSalida,
        huespedes: parseInt(formData.huespedes),
        cliente: {
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono
        },
        comentarios: formData.comentarios
      })
      
      // Recargar datos para actualizar el calendario
      await recargarReservas()
      
      // Forzar recarga de página para actualizar calendario
      window.location.reload()
      
      alert('¡Reserva creada exitosamente! Te contactaremos para confirmar.')
      setFormData({
        fechaEntrada: '',
        fechaSalida: '',
        huespedes: '2',
        cabana: '',
        nombre: '',
        email: '',
        telefono: '',
        comentarios: ''
      })
    } catch (error: any) {
      const mensaje = error.message || 'Error al crear la reserva. Inténtalo nuevamente.'
      alert(mensaje)
    } finally {
      setEnviando(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="reservas" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <h2 className="section-title">Reservas Rápidas</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          
          {/* Formulario de reserva */}
          <div className="card">
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              textAlign: 'center',
              color: 'var(--text-primary)'
            }}>
              Solicitar Reserva
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                  }}>
                    <Calendar size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Fecha de Entrada
                  </label>
                  <input
                    type="date"
                    name="fechaEntrada"
                    value={formData.fechaEntrada}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid var(--neutral-medium)',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                  }}>
                    <Calendar size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Fecha de Salida
                  </label>
                  <input
                    type="date"
                    name="fechaSalida"
                    value={formData.fechaSalida}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid var(--neutral-medium)',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                  }}>
                    <Users size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Número de Huéspedes
                  </label>
                  <select
                    name="huespedes"
                    value={formData.huespedes}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid var(--neutral-medium)',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="1">1 persona</option>
                    <option value="2">2 personas</option>
                    <option value="3">3 personas</option>
                    <option value="4">4 personas</option>
                    <option value="5">5 personas</option>
                    <option value="6">6 personas</option>
                  </select>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                  }}>
                    Tipo de Cabaña
                  </label>
                  <select
                    name="cabana"
                    value={formData.cabana}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid var(--neutral-medium)',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Seleccionar cabaña</option>
                    <option value="familiar">Cabaña Familiar</option>
                    <option value="romantica">Cabaña Romántica</option>
                    <option value="aventurera">Cabaña Aventurera</option>
                  </select>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                  }}>
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid var(--neutral-medium)',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--text-primary)'
                  }}>
                    <Mail size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '2px solid var(--neutral-medium)',
                      borderRadius: '0.5rem',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  <Phone size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid var(--neutral-medium)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)'
                }}>
                  Comentarios Adicionales
                </label>
                <textarea
                  name="comentarios"
                  value={formData.comentarios}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid var(--neutral-medium)',
                    borderRadius: '0.5rem',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                  placeholder="Solicitudes especiales, preguntas, etc."
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  fontSize: '1.1rem',
                  opacity: enviando ? 0.7 : 1,
                  cursor: enviando ? 'not-allowed' : 'pointer'
                }}
                disabled={enviando}
              >
                {enviando ? 'Procesando...' : 'Enviar Solicitud de Reserva'}
              </button>
            </form>
          </div>

          {/* Información adicional */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem'
          }}>
            <div style={{
              background: 'var(--success-color)',
              padding: '1.5rem',
              borderRadius: '1rem',
              textAlign: 'center'
            }}>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                ✅ Confirmación Rápida
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Te contactaremos en menos de 2 horas para confirmar tu reserva
              </p>
            </div>

            <div style={{
              background: 'var(--primary-color)',
              padding: '1.5rem',
              borderRadius: '1rem',
              textAlign: 'center'
            }}>
              <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                💳 Pago Flexible
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Acepta seña del 30% y el resto al llegar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
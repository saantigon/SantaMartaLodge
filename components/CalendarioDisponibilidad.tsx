'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Calendar, X } from 'lucide-react'
import { useReservas } from '@/lib/reservas'

export default function CalendarioDisponibilidad() {
  const [mesActual, setMesActual] = useState(new Date())
  const [cabañaSeleccionada, setCabañaSeleccionada] = useState('familiar')
  const [disponibilidadMes, setDisponibilidadMes] = useState<any[]>([])
  const { obtenerDisponibilidadMes } = useReservas()

  const cabañas = [
    { id: 'familiar', nombre: 'Cabaña Familiar', color: '#E8F4F8' },
    { id: 'romantica', nombre: 'Cabaña Romántica', color: '#F0E6FF' },
    { id: 'aventurera', nombre: 'Cabaña Aventurera', color: '#FFE4E6' }
  ]

  useEffect(() => {
    const cargarDisponibilidad = async () => {
      try {
        console.log('Cargando disponibilidad para:', cabañaSeleccionada, mesActual.getFullYear(), mesActual.getMonth() + 1)
        const data = await obtenerDisponibilidadMes(
          cabañaSeleccionada,
          mesActual.getFullYear(),
          mesActual.getMonth() + 1
        )
        console.log('Datos de disponibilidad recibidos:', data.length, 'días')
        setDisponibilidadMes(data)
      } catch (error) {
        console.error('Error al cargar disponibilidad:', error)
      }
    }
    cargarDisponibilidad()
  }, [cabañaSeleccionada, mesActual, obtenerDisponibilidadMes])

  const obtenerDiasDelMes = () => {
    const año = mesActual.getFullYear()
    const mes = mesActual.getMonth()
    const primerDia = new Date(año, mes, 1)
    const ultimoDia = new Date(año, mes + 1, 0)
    const diasEnMes = ultimoDia.getDate()
    const diaSemanaInicio = primerDia.getDay()

    const dias = []
    
    // Días del mes anterior
    for (let i = diaSemanaInicio - 1; i >= 0; i--) {
      const fecha = new Date(año, mes, -i)
      dias.push({ fecha, esDelMes: false })
    }
    
    // Días del mes actual
    for (let dia = 1; dia <= diasEnMes; dia++) {
      const fecha = new Date(año, mes, dia)
      dias.push({ fecha, esDelMes: true })
    }
    
    return dias
  }

  const obtenerEstadoFecha = (fecha: Date) => {
    const fechaStr = fecha.toISOString().split('T')[0]
    const disponibilidad = disponibilidadMes.find(d => d.fecha === fechaStr)
    const resultado = disponibilidad || { disponible: true, estado: 'disponible', precio: 0 }
    
    // Log solo para fechas con reservas
    if (!resultado.disponible) {
      console.log('Fecha reservada encontrada:', fechaStr, resultado)
    }
    
    return resultado
  }

  const mesAnterior = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() - 1))
    setDisponibilidadMes([])
  }

  const mesSiguiente = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() + 1))
    setDisponibilidadMes([])
  }

  const nombresMeses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  return (
    <section id="disponibilidad" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <h2 className="section-title">Disponibilidad de Cabañas</h2>
        
        {/* Selector de cabaña */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {cabañas.map((cabaña) => (
            <button
              key={cabaña.id}
              onClick={() => setCabañaSeleccionada(cabaña.id)}
              style={{
                padding: '0.75rem 1.5rem',
                border: `2px solid ${cabañaSeleccionada === cabaña.id ? 'var(--text-primary)' : 'var(--neutral-medium)'}`,
                borderRadius: '0.5rem',
                background: cabañaSeleccionada === cabaña.id ? cabaña.color : 'var(--white)',
                cursor: 'pointer',
                fontWeight: cabañaSeleccionada === cabaña.id ? 'bold' : 'normal',
                transition: 'all 0.3s ease'
              }}
            >
              {cabaña.nombre}
            </button>
          ))}
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Header del calendario */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            padding: '1rem',
            background: 'var(--primary-color)',
            borderRadius: '0.5rem'
          }}>
            <button onClick={mesAnterior} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}>
              <ChevronLeft size={20} />
            </button>
            
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'var(--text-primary)'
            }}>
              {nombresMeses[mesActual.getMonth()]} {mesActual.getFullYear()}
            </h3>
            
            <button onClick={mesSiguiente} style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Días de la semana */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '1px',
            marginBottom: '1px'
          }}>
            {diasSemana.map((dia) => (
              <div key={dia} style={{
                padding: '0.5rem',
                textAlign: 'center',
                fontWeight: 'bold',
                background: 'var(--neutral-medium)',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem'
              }}>
                {dia}
              </div>
            ))}
          </div>

          {/* Días del mes */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '1px',
            background: 'var(--neutral-medium)'
          }}>
            {obtenerDiasDelMes().map((dia, index) => {
              const estadoFecha = obtenerEstadoFecha(dia.fecha)
              const esHoy = dia.fecha.toDateString() === new Date().toDateString()
              const reservado = !estadoFecha.disponible && estadoFecha.estado === 'confirmada'
              const pendiente = !estadoFecha.disponible && estadoFecha.estado === 'pendiente'
              
              return (
                <div
                  key={index}
                  style={{
                    padding: '0.75rem 0.5rem',
                    textAlign: 'center',
                    background: dia.esDelMes ? 
                      (reservado ? '#FED7D7' : 
                       pendiente ? '#FEFCBF' : 
                       'var(--white)') : 
                      'var(--neutral-light)',
                    color: dia.esDelMes ? 
                      (reservado || pendiente ? 'var(--text-primary)' : 'var(--text-secondary)') : 
                      '#A0AEC0',
                    fontSize: '0.9rem',
                    position: 'relative',
                    border: esHoy ? '2px solid var(--text-primary)' : 'none',
                    minHeight: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {dia.fecha.getDate()}
                  {reservado && (
                    <X size={12} style={{
                      position: 'absolute',
                      top: '2px',
                      right: '2px',
                      color: '#E53E3E'
                    }} />
                  )}
                  {pendiente && (
                    <Calendar size={12} style={{
                      position: 'absolute',
                      top: '2px',
                      right: '2px',
                      color: '#D69E2E'
                    }} />
                  )}
                </div>
              )
            })}
          </div>

          {/* Leyenda */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '1rem',
                height: '1rem',
                background: 'var(--white)',
                border: '1px solid var(--neutral-medium)'
              }} />
              <span style={{ fontSize: '0.9rem' }}>Disponible</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '1rem',
                height: '1rem',
                background: '#FEFCBF',
                border: '1px solid var(--neutral-medium)'
              }} />
              <span style={{ fontSize: '0.9rem' }}>Pendiente</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{
                width: '1rem',
                height: '1rem',
                background: '#FED7D7',
                border: '1px solid var(--neutral-medium)'
              }} />
              <span style={{ fontSize: '0.9rem' }}>Reservado</span>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          <div className="card">
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
              📅 Reservas en Tiempo Real
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              El calendario se actualiza automáticamente cuando se realizan nuevas reservas.
            </p>
          </div>
          
          <div className="card">
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
              ⚡ Confirmación Instantánea
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Las reservas se confirman al instante y bloquean las fechas automáticamente.
            </p>
          </div>
          
          <div className="card">
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>
              🔄 Sincronización Múltiple
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Conectado con todos los canales de reserva para evitar solapamientos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
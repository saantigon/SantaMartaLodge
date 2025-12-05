import { useState, useEffect } from 'react'

export interface Reserva {
  id: string
  cabana_tipo: 'familiar' | 'romantica' | 'aventurera'
  fecha_inicio: string
  fecha_fin: string
  numero_huespedes: number
  cliente_nombre: string
  cliente_email: string
  estado: 'pendiente' | 'confirmada' | 'cancelada'
  precio_total: number
  created_at: string
  comentarios?: string
}

class ReservasService {
  async obtenerReservas(): Promise<Reserva[]> {
    const response = await fetch('/api/reservas')
    if (!response.ok) throw new Error('Error al obtener reservas')
    return response.json()
  }

  async crearReserva(reserva: {
    cabaña: string
    fechaInicio: string
    fechaFin: string
    huespedes: number
    cliente: { nombre: string; email: string; telefono: string }
    comentarios?: string
  }): Promise<Reserva> {
    const response = await fetch('/api/reservas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reserva)
    })
    
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'Error al crear reserva')
    }
    
    return data
  }

  async verificarDisponibilidad(
    cabaña: string, 
    fechaInicio: string, 
    fechaFin: string
  ): Promise<boolean> {
    const response = await fetch(`/api/disponibilidad?cabaña=${cabaña}&fecha_inicio=${fechaInicio}&fecha_fin=${fechaFin}`)
    if (!response.ok) return false
    const data = await response.json()
    return data.disponible
  }

  async obtenerDisponibilidadMes(
    cabaña: string,
    año: number,
    mes: number
  ): Promise<any[]> {
    const response = await fetch(`/api/disponibilidad?cabaña=${cabaña}&año=${año}&mes=${mes}`)
    if (!response.ok) throw new Error('Error al obtener disponibilidad')
    return response.json()
  }
}

export const reservasService = new ReservasService()

export function useReservas() {
  const [reservas, setReservas] = useState<Reserva[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    reservasService.obtenerReservas()
      .then(data => {
        setReservas(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const recargarReservas = async () => {
    try {
      const data = await reservasService.obtenerReservas()
      setReservas(data)
    } catch (error) {
      console.error('Error al recargar reservas:', error)
    }
  }

  return {
    reservas,
    loading,
    recargarReservas,
    crearReserva: reservasService.crearReserva.bind(reservasService),
    verificarDisponibilidad: reservasService.verificarDisponibilidad.bind(reservasService),
    obtenerDisponibilidadMes: reservasService.obtenerDisponibilidadMes.bind(reservasService)
  }
}
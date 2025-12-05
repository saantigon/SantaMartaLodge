import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
})

export { pool }

export interface Reserva {
  id: string
  cabana_id: string
  cliente_id: string
  fecha_inicio: string
  fecha_fin: string
  numero_huespedes: number
  precio_total: number
  estado: 'pendiente' | 'confirmada' | 'cancelada'
  comentarios?: string
  codigo_reserva: string
  created_at: string
}

export interface Cliente {
  id: string
  nombre: string
  email: string
  telefono?: string
  created_at: string
}

export interface Cabana {
  id: string
  nombre: string
  tipo: 'familiar' | 'romantica' | 'aventurera'
  capacidad_maxima: number
  precio_base: number
  descripcion?: string
  amenidades: string[]
  activa: boolean
  created_at: string
}
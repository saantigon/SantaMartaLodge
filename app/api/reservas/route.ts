import { NextRequest, NextResponse } from 'next/server'
import { pool } from '@/lib/database'

export async function GET() {
  try {
    const result = await pool.query(`
      SELECT 
        r.*,
        c.nombre as cabana_nombre,
        c.tipo as cabana_tipo,
        cl.nombre as cliente_nombre,
        cl.email as cliente_email
      FROM reservas r
      JOIN cabanas c ON r.cabana_id = c.id
      JOIN clientes cl ON r.cliente_id = cl.id
      ORDER BY r.created_at DESC
    `)
    
    return NextResponse.json(result.rows)
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener reservas' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { cabaña, fechaInicio, fechaFin, huespedes, cliente, comentarios } = body
    
    console.log('Datos recibidos:', { cabaña, fechaInicio, fechaFin, huespedes })

    // Verificar disponibilidad
    const disponible = await pool.query(
      'SELECT verificar_disponibilidad($1, $2, $3) as disponible',
      [cabaña, fechaInicio, fechaFin]
    )
    
    console.log('Resultado disponibilidad:', disponible.rows[0])

    if (!disponible.rows[0]?.disponible) {
      return NextResponse.json({ error: 'Fechas no disponibles' }, { status: 400 })
    }

    // Crear o encontrar cliente
    let clienteResult = await pool.query(
      'SELECT id FROM clientes WHERE email = $1',
      [cliente.email]
    )

    let clienteId
    if (clienteResult.rows.length === 0) {
      const nuevoCliente = await pool.query(
        'INSERT INTO clientes (nombre, email, telefono) VALUES ($1, $2, $3) RETURNING id',
        [cliente.nombre, cliente.email, cliente.telefono]
      )
      clienteId = nuevoCliente.rows[0].id
    } else {
      clienteId = clienteResult.rows[0].id
    }

    // Obtener cabaña
    const cabanaResult = await pool.query(
      'SELECT id, precio_base FROM cabanas WHERE tipo = $1 AND activa = true',
      [cabaña]
    )

    const cabanaData = cabanaResult.rows[0]
    const dias = Math.ceil((new Date(fechaFin).getTime() - new Date(fechaInicio).getTime()) / (1000 * 60 * 60 * 24))
    const precioTotal = cabanaData.precio_base * dias

    // Crear reserva
    const reservaResult = await pool.query(`
      INSERT INTO reservas (
        cabana_id, cliente_id, fecha_inicio, fecha_fin, 
        numero_huespedes, precio_total, comentarios, codigo_reserva
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, '')
      RETURNING *
    `, [
      cabanaData.id, clienteId, fechaInicio, fechaFin,
      huespedes, precioTotal, comentarios
    ])

    return NextResponse.json(reservaResult.rows[0], { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear reserva' }, { status: 500 })
  }
}
import { NextRequest, NextResponse } from 'next/server'
import { pool } from '@/lib/database'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const cabaña = searchParams.get('cabaña')
    const año = searchParams.get('año')
    const mes = searchParams.get('mes')

    console.log('Consultando disponibilidad:', { cabaña, año, mes })

    if (!cabaña || !año || !mes) {
      return NextResponse.json({ error: 'Parámetros requeridos: cabaña, año, mes' }, { status: 400 })
    }

    const result = await pool.query(`
      WITH fechas_mes AS (
        SELECT generate_series(
          DATE($2 || '-' || $3 || '-01'),
          (DATE($2 || '-' || $3 || '-01') + INTERVAL '1 month - 1 day')::DATE,
          '1 day'::INTERVAL
        )::DATE as fecha
      ),
      cabana_info AS (
        SELECT id, precio_base FROM cabanas WHERE tipo = $1 AND activa = true LIMIT 1
      )
      SELECT 
        TO_CHAR(fm.fecha, 'YYYY-MM-DD') as fecha,
        CASE 
          WHEN r.id IS NOT NULL THEN false
          ELSE true
        END as disponible,
        ci.precio_base as precio,
        COALESCE(r.estado, 'disponible') as estado
      FROM fechas_mes fm
      CROSS JOIN cabana_info ci
      LEFT JOIN reservas r ON r.cabana_id = ci.id 
        AND fm.fecha >= r.fecha_inicio 
        AND fm.fecha < r.fecha_fin
        AND r.estado IN ('confirmada', 'pendiente')
      ORDER BY fm.fecha
    `, [cabaña, año, mes])

    console.log('Resultado disponibilidad:', result.rows.length, 'días')
    console.log('Primeros 3 días:', result.rows.slice(0, 3))

    return NextResponse.json(result.rows)
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener disponibilidad' }, { status: 500 })
  }
}
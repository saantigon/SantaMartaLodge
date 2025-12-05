# Base de Datos PostgreSQL - Santa Marta Lodge

## Configuración

### 1. Instalar PostgreSQL
```bash
# Windows (con Chocolatey)
choco install postgresql

# O descargar desde: https://www.postgresql.org/download/
```

### 2. Crear la base de datos
```bash
# Conectar a PostgreSQL
psql -U postgres

# Ejecutar el schema
\i database/schema.sql
```

### 3. Configurar variables de entorno
Editar `.env.local`:
```
DATABASE_URL="postgresql://usuario:password@localhost:5432/santa_marta_lodge"
```

### 4. Instalar dependencias
```bash
npm install
```

## Estructura de Tablas

### `cabanas`
- Información de las cabañas disponibles
- Tipos: familiar, romantica, aventurera
- Precios base y amenidades

### `clientes`
- Datos de los clientes
- Email único para identificación

### `reservas`
- Reservas realizadas
- Estados: pendiente, confirmada, cancelada
- Código único generado automáticamente

## API Endpoints

### GET `/api/reservas`
Obtiene todas las reservas con información completa

### POST `/api/reservas`
Crea nueva reserva
```json
{
  "cabaña": "familiar",
  "fechaInicio": "2024-01-15",
  "fechaFin": "2024-01-18",
  "huespedes": 4,
  "cliente": {
    "nombre": "Juan Pérez",
    "email": "juan@email.com",
    "telefono": "+54911234567"
  },
  "comentarios": "Solicitud especial"
}
```

### GET `/api/disponibilidad`
Verifica disponibilidad por mes
```
/api/disponibilidad?cabaña=familiar&año=2024&mes=1
```

## Funciones de Base de Datos

### `verificar_disponibilidad(tipo, fecha_inicio, fecha_fin)`
Verifica si una cabaña está disponible en las fechas solicitadas

### `generar_codigo_reserva()`
Genera código único para cada reserva (formato: SML20240115XXXX)

## Comandos Útiles

```sql
-- Ver todas las reservas
SELECT * FROM vista_reservas_completa;

-- Verificar disponibilidad
SELECT verificar_disponibilidad('familiar', '2024-01-15', '2024-01-18');

-- Obtener reservas por estado
SELECT * FROM reservas WHERE estado = 'confirmada';
```
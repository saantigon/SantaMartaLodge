-- Santa Marta Lodge - Base de Datos PostgreSQL

CREATE DATABASE santa_marta_lodge;
\c santa_marta_lodge;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de cabañas
CREATE TABLE cabanas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL CHECK (tipo IN ('familiar', 'romantica', 'aventurera')),
    capacidad_maxima INTEGER NOT NULL,
    precio_base DECIMAL(10,2) NOT NULL,
    descripcion TEXT,
    amenidades JSONB,
    activa BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de clientes
CREATE TABLE clientes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de reservas
CREATE TABLE reservas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    cabana_id UUID NOT NULL REFERENCES cabanas(id),
    cliente_id UUID NOT NULL REFERENCES clientes(id),
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    numero_huespedes INTEGER NOT NULL,
    precio_total DECIMAL(10,2) NOT NULL,
    estado VARCHAR(20) NOT NULL DEFAULT 'pendiente' 
        CHECK (estado IN ('pendiente', 'confirmada', 'cancelada')),
    comentarios TEXT,
    codigo_reserva VARCHAR(20) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    CONSTRAINT fechas_validas CHECK (fecha_fin > fecha_inicio)
);

-- Índices
CREATE INDEX idx_reservas_fechas ON reservas(fecha_inicio, fecha_fin);
CREATE INDEX idx_reservas_cabana ON reservas(cabana_id);
CREATE INDEX idx_reservas_estado ON reservas(estado);

-- Función para generar código de reserva
CREATE OR REPLACE FUNCTION generar_codigo_reserva()
RETURNS TEXT AS $$
BEGIN
    RETURN 'SML' || TO_CHAR(NOW(), 'YYYYMMDD') || LPAD(FLOOR(RANDOM() * 10000)::TEXT, 4, '0');
END;
$$ LANGUAGE plpgsql;

-- Trigger para código automático
CREATE OR REPLACE FUNCTION set_codigo_reserva()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.codigo_reserva IS NULL OR NEW.codigo_reserva = '' THEN
        NEW.codigo_reserva := generar_codigo_reserva();
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_codigo_reserva
    BEFORE INSERT ON reservas
    FOR EACH ROW
    EXECUTE FUNCTION set_codigo_reserva();

-- Función para verificar disponibilidad
CREATE OR REPLACE FUNCTION verificar_disponibilidad(
    p_cabana_tipo VARCHAR(50),
    p_fecha_inicio DATE,
    p_fecha_fin DATE
)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN NOT EXISTS (
        SELECT 1 FROM reservas r
        JOIN cabanas c ON r.cabana_id = c.id
        WHERE c.tipo = p_cabana_tipo 
        AND r.estado IN ('confirmada', 'pendiente')
        AND NOT (r.fecha_fin <= p_fecha_inicio OR r.fecha_inicio >= p_fecha_fin)
    );
END;
$$ LANGUAGE plpgsql;

-- Insertar cabañas iniciales
INSERT INTO cabanas (nombre, tipo, capacidad_maxima, precio_base, descripcion, amenidades) VALUES
('Cabaña Familiar', 'familiar', 6, 120.00, 'Perfecta para familias, con amplio espacio y todas las comodidades.', 
 '["WiFi", "Estacionamiento", "Cocina completa", "Terraza"]'),
('Cabaña Romántica', 'romantica', 2, 80.00, 'Ideal para parejas que buscan un escape romántico y privado.',
 '["WiFi", "Jacuzzi", "Chimenea", "Vista al lago"]'),
('Cabaña Aventurera', 'aventurera', 4, 100.00, 'Para los amantes de la aventura y actividades al aire libre.',
 '["WiFi", "Parrilla", "Kayaks", "Senderos"]');
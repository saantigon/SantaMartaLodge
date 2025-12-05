-- Datos de prueba para Santa Marta Lodge
\c santa_marta_lodge;

-- Insertar algunos clientes de prueba
INSERT INTO clientes (nombre, email, telefono) VALUES
('Juan Pérez', 'juan.perez@email.com', '+54911234567'),
('María García', 'maria.garcia@email.com', '+54911234568'),
('Carlos López', 'carlos.lopez@email.com', '+54911234569');

-- Insertar algunas reservas de prueba
INSERT INTO reservas (cabana_id, cliente_id, fecha_inicio, fecha_fin, numero_huespedes, precio_total, estado, comentarios, codigo_reserva)
SELECT 
    c.id,
    cl.id,
    '2024-01-15',
    '2024-01-18',
    4,
    360.00,
    'confirmada',
    'Reserva de prueba - Familia con niños',
    'SML202401150001'
FROM cabanas c, clientes cl 
WHERE c.tipo = 'familiar' AND cl.email = 'juan.perez@email.com';

INSERT INTO reservas (cabana_id, cliente_id, fecha_inicio, fecha_fin, numero_huespedes, precio_total, estado, comentarios, codigo_reserva)
SELECT 
    c.id,
    cl.id,
    '2024-01-20',
    '2024-01-22',
    2,
    160.00,
    'pendiente',
    'Luna de miel - Solicitan decoración especial',
    'SML202401200002'
FROM cabanas c, clientes cl 
WHERE c.tipo = 'romantica' AND cl.email = 'maria.garcia@email.com';

INSERT INTO reservas (cabana_id, cliente_id, fecha_inicio, fecha_fin, numero_huespedes, precio_total, estado, comentarios, codigo_reserva)
SELECT 
    c.id,
    cl.id,
    '2024-01-25',
    '2024-01-28',
    3,
    300.00,
    'confirmada',
    'Grupo de amigos - Actividades de aventura',
    'SML202401250003'
FROM cabanas c, clientes cl 
WHERE c.tipo = 'aventurera' AND cl.email = 'carlos.lopez@email.com';

-- Verificar que todo se insertó correctamente
SELECT 
    r.codigo_reserva,
    c.nombre as cabana,
    cl.nombre as cliente,
    r.fecha_inicio,
    r.fecha_fin,
    r.estado,
    r.precio_total
FROM reservas r
JOIN cabanas c ON r.cabana_id = c.id
JOIN clientes cl ON r.cliente_id = cl.id
ORDER BY r.created_at;
import { Users, Wifi, Car, Coffee, Waves, Flame, Wind, Snowflake, UtensilsCrossed } from 'lucide-react'
import Image from 'next/image'

export default function Cabanas() {
  // Color de fondo del módulo - Cambiar el código HEX aquí
  const backgroundColor = '#EFE6DC';
  // Color de fondo de los recuadros de cabañas - Cambiar el código HEX aquí
  const cardBackgroundColor = '#F4EFEA';

  // Función para detectar si es un emoji o una ruta de imagen
  const isEmoji = (str: string) => {
    // Detecta si el string tiene menos de 5 caracteres y no contiene "/" o "."
    return str.length < 5 && !str.includes('/') && !str.includes('.')
  }

  const cabanas = [
    {
      id: 1,
      nombre: "Pacha",
      capacidad: "2 personas",
      precio: "$95.000/noche",
      imagen: "/images/cabanas/cabañaTierra.png",
      amenidades: ["WiFi", "Estacionamiento", "Cocina completa", "Pileta", "Parrilla/Asador", "Aire Acondicionado", "Calefacción", "Desayuno"],
      descripcion: "Perfecta para 2 personas. Equipada para hasta 4 personas.",
      disponible: true
    },
    {
      id: 2,
      nombre: "Wayra",
      capacidad: "2 personas",
      precio: "$95.000/noche",
      imagen: "/images/cabanas/cabañaAire.png",
      amenidades: ["WiFi", "Estacionamiento", "Cocina completa", "Pileta", "Parrilla/Asador", "Aire Acondicionado", "Calefacción", "Desayuno"],
      descripcion: "Perfecta para 2 personas. Equipada para hasta 4 personas.",
      disponible: false,
      estado: "En preparación - Próxima a terminarse"
    },
    {
      id: 3,
      nombre: "Yaku",
      capacidad: "2 personas",
      precio: "$95.000/noche",
      imagen: "/images/cabanas/cabañaAgua.png",
      amenidades: ["WiFi", "Estacionamiento", "Cocina completa", "Pileta", "Parrilla/Asador", "Aire Acondicionado", "Calefacción", "Desayuno"],
      descripcion: "Perfecta para 2 personas. Equipada para hasta 4 personas.",
      disponible: false,
      estado: "Próximamente - En construcción"
    }
  ]

  const getIcon = (amenidad: string) => {
    switch (amenidad) {
      case 'WiFi': return <Wifi size={16} />
      case 'Estacionamiento': return <Car size={16} />
      case 'Cocina completa': return <Coffee size={16} />
      case 'Pileta': return <Waves size={16} />
      case 'Parrilla/Asador': return <Flame size={16} />
      case 'Aire Acondicionado': return <Wind size={16} />
      case 'Calefacción': return <Snowflake size={16} />
      case 'Desayuno': return <UtensilsCrossed size={16} />
      default: return <Users size={16} />
    }
  }

  return (
    <section id="cabanas" className="section" style={{ background: backgroundColor }}>
      <div className="container">
        <h2 className="section-title">Nuestras cabañas</h2>
        <div style={{
          display: 'grid',
          backgroundColor: '#00000',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {cabanas.map((cabana) => (
            <div key={cabana.id} className="card" style={{
              background: cardBackgroundColor,
              opacity: cabana.disponible ? 1 : 0.85,
              position: 'relative',
              border: cabana.disponible ? 'none' : '2px solid #f59e0b'
            }}>
              {!cabana.disponible && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: cabana.id === 2 ? '#f59e0b' : '#CCCCCC',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '1rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  zIndex: 10
                }}>
                  {cabana.id === 2 ? '🔨 Casi lista' : '🚧 En construcción'}
                </div>
              )}
              <div style={{
                textAlign: 'center',
                marginBottom: '1rem',
                filter: cabana.disponible ? 'none' : 'grayscale(20%)',
                position: 'relative',
                width: '100%',
                height: isEmoji(cabana.imagen) ? 'auto' : '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {isEmoji(cabana.imagen) ? (
                  <div style={{ fontSize: '4rem' }}>
                    {cabana.imagen}
                  </div>
                ) : (
                  <Image
                    src={cabana.imagen}
                    alt={`Cabaña ${cabana.nombre}`}
                    width={cabana.id === 1 ? 120 : 140}
                    height={cabana.id === 1 ? 120 : 140}
                    style={{ 
                      objectFit: 'contain',
                      width: cabana.id === 1 ? '120px' : '140px',
                      height: cabana.id === 1 ? '120px' : '140px'
                    }}
                  />
                )}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                {cabana.nombre}
              </h3>
              {!cabana.disponible && (
                <p style={{
                  textAlign: 'center',
                  fontSize: '0.85rem',
                  color: cabana.id === 2 ? '#f59e0b' : '#64748b',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {cabana.estado}
                </p>
              )}
              <p style={{
                color: 'var(--text-secondary)',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                {cabana.descripcion}
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
                padding: '0.5rem',
                background: 'var(--primary-color)',
                borderRadius: '0.5rem',
                backgroundColor: '#CCCCCC'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={16} />
                  {cabana.capacidad}
                </span>
                <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>
                  {cabana.precio}
                </span>
              </div>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '0.85rem', 
                marginBottom: '1rem',
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                Consultar por promociones
              </p>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>
                  Amenidades:
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '0.5rem'
                }}>
                  {cabana.amenidades.map((amenidad, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)'
                    }}>
                      {getIcon(amenidad)}
                      {amenidad}
                    </div>
                  ))}
                </div>
              </div>
              {cabana.disponible ? (
                <a 
                  href={`https://wa.me/5493388670986?text=Hola! Me interesa la Cabaña ${cabana.nombre}. ¿Podrían darme más información?`}
                  target="_blank" 
                  className="btn btn-primary" 
                  style={{ 
                    width: '100%', 
                    textAlign: 'center', 
                    display: 'block',
                    backgroundColor: '#A94B17',
                    color: '#FFFFFF'
                  }}
                >
                  Consultar por WhatsApp
                </a>
              ) : (
                <button 
                  disabled
                  className="btn btn-primary" 
                  style={{ 
                    width: '100%', 
                    textAlign: 'center', 
                    display: 'block',
                    opacity: 0.5,
                    background: '#CCCCCC',
                    cursor: 'not-allowed'
                  }}
                >
                  {cabana.id === 2 ? 'Próximamente disponible' : 'En construcción'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
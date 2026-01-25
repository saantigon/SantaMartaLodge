import { Users, Wifi, Car, Coffee } from 'lucide-react'

export default function Cabanas() {
  const cabanas = [
    {
      id: 1,
      nombre: "Nina",
      capacidad: "2 personas",
      precio: "$95.000/noche",
      imagen: "🏡",
      amenidades: ["WiFi", "Estacionamiento", "Cocina completa", "Pileta", "Parrilla/Asador", "Aire Acondicionado", "Calefacción", "Desayuno"],
      descripcion: "Perfecta para 2 personas. Equipada para hasta 4 personas."
    },
    {
      id: 2,
      nombre: "Wayra (En preparación)",
      capacidad: "2 personas",
      precio: "$95.000/noche",
      imagen: "💕",
      amenidades: ["WiFi", "Estacionamiento", "Cocina completa", "Pileta", "Parrilla/Asador", "Aire Acondicionado", "Calefacción", "Desayuno"],
      descripcion: "Perfecta para 2 personas. Equipada para hasta 4 personas."
    },
    {
      id: 3,
      nombre: "Yaku (Proximamente)",
      capacidad: "2 personas",
      precio: "$95.000/noche",
      imagen: "🏔️",
      amenidades: ["WiFi", "Estacionamiento", "Cocina completa", "Pileta", "Parrilla/Asador", "Aire Acondicionado", "Calefacción", "Desayuno"],
      descripcion: "Perfecta para 2 personas. Equipada para hasta 4 personas."
    }
  ]

  const getIcon = (amenidad: string) => {
    switch (amenidad) {
      case 'WiFi': return <Wifi size={16} />
      case 'Estacionamiento': return <Car size={16} />
      case 'Cocina completa': return <Coffee size={16} />
      default: return <Users size={16} />
    }
  }

  return (
    <section id="cabanas" className="section" style={{ background: 'var(--neutral-light)' }}>
      <div className="container">
        <h2 className="section-title">Nuestras Cabañas</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {cabanas.map((cabana) => (
            <div key={cabana.id} className="card">
              <div style={{
                fontSize: '4rem',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                {cabana.imagen}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                textAlign: 'center'
              }}>
                {cabana.nombre}
              </h3>
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
                marginBottom: '1rem',
                padding: '0.5rem',
                background: 'var(--primary-color)',
                borderRadius: '0.5rem'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={16} />
                  {cabana.capacidad}
                </span>
                <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>
                  {cabana.precio}
                </span>
              </div>
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
              <a href="https://wa.me/5493388670986?text=Hola! Me interesa la Cabaña Familiar. ¿Podrían darme más información?" target="_blank" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                Consultar por WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
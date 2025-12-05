'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Placeholder para imágenes - reemplazar con rutas reales
  const images = [
    { src: '/images/gallery/cabaña1.jpg', alt: 'Cabaña Familiar exterior', category: 'Cabañas' },
    { src: '/images/gallery/cabaña2.jpg', alt: 'Cabaña Romántica', category: 'Cabañas' },
    { src: '/images/gallery/cabaña3.jpg', alt: 'Cabaña Aventurera', category: 'Cabañas' },
    { src: '/images/gallery/interior1.jpg', alt: 'Interior acogedor', category: 'Interiores' },
    { src: '/images/gallery/interior2.jpg', alt: 'Cocina equipada', category: 'Interiores' },
    { src: '/images/gallery/interior3.jpg', alt: 'Sala de estar', category: 'Interiores' },
    { src: '/images/gallery/paisaje1.jpg', alt: 'Vista al lago', category: 'Paisajes' },
    { src: '/images/gallery/paisaje2.jpg', alt: 'Senderos naturales', category: 'Paisajes' },
    { src: '/images/gallery/actividades1.jpg', alt: 'Kayaks en el lago', category: 'Actividades' }
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="galeria" className="section" style={{ background: 'var(--neutral-light)' }}>
      <div className="container">
        <h2 className="section-title">Galería de Imágenes</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              style={{
                position: 'relative',
                aspectRatio: '4/3',
                borderRadius: '0.5rem',
                overflow: 'hidden',
                cursor: 'pointer',
                background: 'var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
              className="gallery-item"
            >
              <img
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                color: 'white',
                padding: '1rem 0.5rem 0.5rem',
                textAlign: 'center'
              }}>
                <span style={{ 
                  fontSize: '0.8rem',
                  background: 'var(--secondary-color)',
                  color: 'var(--text-primary)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem'
                }}>
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para imagen ampliada */}
        {selectedImage !== null && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--white)',
                border: 'none',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={20} />
            </button>
            
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '1rem',
                background: 'var(--white)',
                border: 'none',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{
              maxWidth: '90%',
              maxHeight: '90%',
              textAlign: 'center'
            }}>
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '0.5rem'
                }}
              />
              <div style={{
                background: 'var(--white)',
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem'
              }}>
                <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  {images[selectedImage].alt}
                </h3>
                <span style={{
                  background: 'var(--secondary-color)',
                  color: 'var(--text-primary)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.9rem'
                }}>
                  {images[selectedImage].category}
                </span>
              </div>
            </div>

            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '1rem',
                background: 'var(--white)',
                border: 'none',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>


    </section>
  )
}
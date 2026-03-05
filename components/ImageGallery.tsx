'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ImageGallery() {
  // Color de fondo del módulo - Cambiar el código HEX aquí
  const backgroundColor = '#EFE6DC';

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas')

  // Generar array de imágenes automáticamente
  const generateImages = () => {
    const images = [];
    
    // Imágenes PACHA (Nina)
    for (let i = 1; i <= 14; i++) {
      if ([4, 5].includes(i)) continue; // Saltar números que no existen
      images.push({
        src: `/images/gallery/PACHA${i}.jpg`,
        alt: `Cabaña Nina - Foto ${i}`,
        category: 'Nina'
      });
    }
    
    // Imágenes WAYRA
    for (let i = 1; i <= 5; i++) {
      images.push({
        src: `/images/gallery/WAYRA${i}.jpg`,
        alt: `Cabaña Wayra - Foto ${i}`,
        category: 'Wayra'
      });
    }
    
    // Imágenes PARQUE
    for (let i = 1; i <= 7; i++) {
      if (i === 4) continue; // Saltar número que no existe
      images.push({
        src: `/images/gallery/PARQUE${i}.jpg`,
        alt: `Parque y Exteriores - Foto ${i}`,
        category: 'Exteriores'
      });
    }
    
    // Imágenes PILETA
    for (let i = 2; i <= 3; i++) {
      images.push({
        src: `/images/gallery/PILETA${i}.jpg`,
        alt: `Pileta - Foto ${i}`,
        category: 'Pileta'
      });
    }
    
    return images;
  };

  const images = generateImages();

  // Obtener categorías únicas
  const categories = ['Todas', ...Array.from(new Set(images.map(img => img.category)))];

  // Filtrar imágenes por categoría
  const filteredImages = selectedCategory === 'Todas' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = images.findIndex((_, idx) => idx === selectedImage);
      setSelectedImage((currentIndex + 1) % images.length);
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = images.findIndex((_, idx) => idx === selectedImage);
      setSelectedImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    }
  }

  return (
    <section id="galeria" className="section" style={{ background: backgroundColor }}>
      <div className="container">
        <h2 className="section-title">Galería de imágenes</h2>
        
        {/* Filtros de categoría */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '2rem',
                border: 'none',
                background: selectedCategory === category ? '#A94B17' : 'var(--secondary-color)',
                color: selectedCategory === category ? '#F4EFEA' : 'var(--text-primary)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(images.findIndex(img => img.src === image.src))}
              style={{
                position: 'relative',
                cursor: 'pointer',
                paddingBottom: '2.5rem'
              }}
              className="gallery-item"
            >
              <div style={{
                position: 'relative',
                aspectRatio: '4/3',
                overflow: 'hidden',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center'
              }}>
                <span style={{ 
                  fontSize: '0.9rem',
                  background: '#A94B17',
                  color: '#F4EFEA',
                  padding: '0.4rem 1rem',
                  borderRadius: '0.5rem',
                  fontWeight: '600',
                  display: 'inline-block',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                }}>
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal simplificado para imagen ampliada */}
        {selectedImage !== null && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
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
                justifyContent: 'center',
                zIndex: 1001
              }}
            >
              <X size={20} />
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
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
                justifyContent: 'center',
                zIndex: 1001
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div 
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                textAlign: 'center'
              }}
              onClick={(e) => e.stopPropagation()}
            >
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
                marginTop: '1rem'
              }}>
                <span style={{
                  background: '#A94B17',
                  color: '#F4EFEA',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  display: 'inline-block'
                }}>
                  {images[selectedImage].category}
                </span>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
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
                justifyContent: 'center',
                zIndex: 1001
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
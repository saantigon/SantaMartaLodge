'use client'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: '#cabanas', label: 'Cabañas' },
    { href: '#sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '#galeria', label: 'Galería' },
    { href: '#ubicacion', label: 'Ubicación' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contacto', label: 'Contacto' }
  ]

  return (
    <header style={{ 
      background: 'var(--white)', 
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000
    }}>
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '1rem'
      }}>
        <div style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold',
          color: 'var(--text-primary)'
        }}>
          🏡 Santa Marta Lodge
        </div>

        {/* Desktop Menu */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '2rem',
            alignItems: 'center'
          }}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                  className="nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav style={{
          background: 'var(--white)',
          borderTop: '1px solid var(--neutral-medium)',
          display: 'block'
        }} className="mobile-nav">
          <ul style={{ 
            listStyle: 'none',
            padding: '1rem'
          }}>
            {menuItems.map((item) => (
              <li key={item.href} style={{ marginBottom: '0.5rem' }}>
                <a 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '0.5rem',
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    fontWeight: '500'
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}


    </header>
  )
}
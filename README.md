# Complejo de Cabañas Santa Marta

Una página web moderna y responsive para un complejo de cabañas, desarrollada con Next.js 14 y React.

## 🏡 Características

- **Diseño Responsive**: Optimizado para móviles, tablets y computadoras
- **Paleta de Colores Pastel**: Diseño suave y relajante
- **Secciones Completas**:
  - Showcase de cabañas con detalles
  - Información del emprendimiento
  - Mapa de ubicación
  - Sistema de reservas rápidas
  - FAQ interactivo
  - Contactos útiles

## 🚀 Tecnologías

- **Next.js 14** - Framework de React
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Lucide React** - Iconos modernos
- **CSS-in-JS** - Estilos integrados

## 📱 Responsive Design

La página está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Paleta de Colores

```css
--primary-color: #E8F4F8 (Azul pastel)
--secondary-color: #F0E6FF (Lavanda pastel)
--accent-color: #FFE4E6 (Rosa pastel)
--success-color: #C6F6D5 (Verde pastel)
--neutral-light: #F7FAFC (Gris muy claro)
```

## 🛠️ Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   npm start
   ```

## 📂 Estructura del Proyecto

```
├── app/
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/
│   ├── Header.tsx       # Navegación
│   ├── Hero.tsx         # Sección hero
│   ├── Cabanas.tsx      # Showcase de cabañas
│   ├── SobreNosotros.tsx # Información del emprendimiento
│   ├── Ubicacion.tsx    # Mapa y ubicación
│   ├── ReservasRapidas.tsx # Formulario de reservas
│   ├── FAQ.tsx          # Preguntas frecuentes
│   ├── Contacto.tsx     # Información de contacto
│   └── Footer.tsx       # Pie de página
└── package.json
```

## ✨ Funcionalidades

### 🏠 Sección de Cabañas
- Muestra diferentes tipos de cabañas
- Información de capacidad y precios
- Amenidades incluidas
- Botones de disponibilidad

### 📍 Ubicación
- Placeholder para mapa interactivo
- Información de acceso
- Puntos de interés cercanos
- Horarios de check-in/out

### 📝 Reservas Rápidas
- Formulario completo de reserva
- Validación de campos
- Selección de fechas y huéspedes
- Información de contacto

### ❓ FAQ Interactivo
- Preguntas frecuentes expandibles
- Respuestas detalladas
- Interfaz intuitiva

### 📞 Contactos Útiles
- Múltiples formas de contacto
- Horarios de atención
- Redes sociales
- Información de emergencias

## 🔧 Personalización

Para personalizar la página:

1. **Colores**: Modifica las variables CSS en `app/globals.css`
2. **Contenido**: Edita los componentes en la carpeta `components/`
3. **Imágenes**: Reemplaza los emojis con imágenes reales
4. **Mapa**: Integra Google Maps o similar en `components/Ubicacion.tsx`

## 📱 Optimización Mobile

- Menú hamburguesa en móviles
- Grids responsivos
- Botones táctiles optimizados
- Formularios adaptables
- Tipografía escalable

## 🌐 SEO Ready

- Meta tags configurados
- Estructura semántica HTML
- Títulos jerárquicos
- Alt texts preparados para imágenes

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.
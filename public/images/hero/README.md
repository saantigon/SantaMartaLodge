# Imágenes Hero - Guía de Optimización

## Imagen Actual
- `cerro-panoramico.jpg`

## Especificaciones Recomendadas

### Para la mejor calidad sin pixelación:

**Dimensiones**: 3000px × 1500px (ratio 2:1)
- Cubre pantallas 4K sin pérdida de calidad
- Se adapta perfectamente al contenedor del hero (50vh)

**Formato**:
1. **WebP** (recomendado) - Next.js lo generará automáticamente
2. **JPEG** de alta calidad (85-90%)

**Peso objetivo**: 300-500 KB después de optimización

## Cómo Optimizar tu Imagen

### Opción 1: Herramientas Online (Más Fácil)
1. Ve a [Squoosh.app](https://squoosh.app)
2. Sube tu imagen
3. Redimensiona a 3000×1500px
4. Ajusta calidad JPEG a 85-90%
5. Descarga y reemplaza `cerro-panoramico.jpg`

### Opción 2: Photoshop
1. Abre tu imagen
2. Image → Image Size → 3000×1500px
3. Filter → Sharpen → Unsharp Mask (Amount: 50%, Radius: 1px)
4. File → Export → Save for Web
5. JPEG, Quality: 85-90%
6. Guarda como `cerro-panoramico.jpg`

### Opción 3: GIMP (Gratis)
1. Abre tu imagen
2. Image → Scale Image → 3000×1500px
3. Filters → Enhance → Sharpen (Sharpness: 30)
4. File → Export As → JPEG
5. Quality: 85-90%

## Optimización Automática de Next.js

Next.js automáticamente:
- ✅ Genera versiones WebP y AVIF (mejor compresión)
- ✅ Crea múltiples tamaños para diferentes dispositivos
- ✅ Lazy loading (carga solo cuando es visible)
- ✅ Optimiza la calidad según el dispositivo

## Tamaños Generados Automáticamente

Para diferentes dispositivos, Next.js generará:
- **Mobile**: 640px, 750px, 828px
- **Tablet**: 1080px, 1200px
- **Desktop**: 1920px, 2048px
- **4K**: 3840px

## Verificar Calidad

Después de reemplazar la imagen:
1. Reinicia el servidor (`npm run dev`)
2. Abre en navegador
3. Inspecciona con DevTools → Network
4. Verifica que se cargue en formato WebP
5. Prueba en diferentes tamaños de pantalla

## Consejos Adicionales

- **Iluminación**: Asegúrate de que la imagen tenga buen contraste
- **Punto focal**: El centro de interés debe estar en el centro o tercio superior
- **Horizonte**: Mantén el horizonte nivelado
- **Colores**: Ajusta saturación y vibrance para que se vea atractiva

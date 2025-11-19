# Cómo Agregar tu Foto a la Página

## 📁 Paso 1: Colocar la Imagen en la Carpeta Public

### 1.1. Crear la carpeta de imágenes (si no existe)

En la raíz de tu proyecto, dentro de la carpeta `public`, crea una carpeta llamada `images`:

```
web_innovatec/
├── public/
│   ├── images/          ← Crea esta carpeta
│   │   └── foto-franco.jpg  ← Tu foto aquí
│   ├── robots.txt
│   └── site.webmanifest
```

### 1.2. Agregar tu foto

1. Copia tu foto a la carpeta `public/images/`
2. **Recomendaciones para el nombre:**
   - Usa un nombre descriptivo: `foto-franco.jpg` o `franco-perfil.jpg`
   - Evita espacios: usa guiones (`-`) en lugar de espacios
   - Usa minúsculas: `foto-franco.jpg` mejor que `Foto-Franco.jpg`

3. **Formatos recomendados:**
   - `.jpg` o `.jpeg` (mejor para fotos)
   - `.png` (si necesitas transparencia)
   - `.webp` (mejor compresión, pero verifica compatibilidad)

4. **Tamaño recomendado:**
   - Para foto de perfil: 400x400px o 500x500px (cuadrada)
   - Peso: menos de 200KB (optimiza la imagen antes de subirla)

---

## 💻 Paso 2: Referenciar la Imagen en el Código

### Cómo Funciona:

- **En desarrollo:** Las imágenes en `public/` se sirven desde la raíz (`/`)
- **En producción (Hostinger):** Funciona igual, las imágenes en `public/` se copian a la raíz del sitio

### Sintaxis:

```astro
<!-- Imagen desde public/images/foto-franco.jpg -->
<img src="/images/foto-franco.jpg" alt="Descripción" />
```

**Importante:**
- El `/` al inicio significa "desde la raíz del sitio"
- `public/images/` se convierte en `/images/` en la URL
- No uses `./` o rutas relativas complicadas

---

## 📝 Paso 3: Actualizar la Página "Sobre Mí"

Ve a `src/pages/sobre-mi.astro` y reemplaza el placeholder (líneas 59-64) con tu foto:

**Antes:**
```astro
<div class="flex justify-center mb-8">
  <div class="w-48 h-48 rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary flex items-center justify-center">
    <span class="text-6xl" aria-hidden="true">👤</span>
  </div>
</div>
```

**Después:**
```astro
<div class="flex justify-center mb-8">
  <img
    src="/images/foto-franco.jpg"
    alt="Franco Paul Cantero Brunelli - Desarrollador de Software"
    class="w-48 h-48 rounded-full object-cover border-4 border-accent shadow-lg"
  />
</div>
```

---

## ✅ Paso 4: Probar Localmente

1. Ejecuta `npm run dev`
2. Ve a `http://localhost:4321/sobre-mi`
3. Verifica que la imagen se vea correctamente

---

## 🚀 Paso 5: Subir a Hostinger

Cuando ejecutes `npm run build`:
- Las imágenes en `public/images/` se copian automáticamente a `dist/images/`
- Al subir `dist/` a Hostinger, las imágenes estarán en `/images/` en tu sitio
- La ruta `/images/foto-franco.jpg` funcionará perfectamente

**No necesitas hacer nada especial**, el sistema de build de Astro se encarga de todo.

---

## 🎨 Opciones de Estilo

### Foto circular (recomendado para perfil):
```astro
<img
  src="/images/foto-franco.jpg"
  alt="Franco Paul Cantero Brunelli"
  class="w-48 h-48 rounded-full object-cover border-4 border-accent shadow-lg"
/>
```

### Foto rectangular con bordes redondeados:
```astro
<img
  src="/images/foto-franco.jpg"
  alt="Franco Paul Cantero Brunelli"
  class="w-64 h-80 rounded-lg object-cover border-2 border-light-border dark:border-dark-border shadow-lg"
/>
```

### Foto responsive (se adapta al tamaño de pantalla):
```astro
<img
  src="/images/foto-franco.jpg"
  alt="Franco Paul Cantero Brunelli"
  class="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-accent shadow-lg"
/>
```

---

## 📋 Checklist

- [ ] Carpeta `public/images/` creada
- [ ] Foto agregada a `public/images/`
- [ ] Foto optimizada (tamaño y peso)
- [ ] Código actualizado en `sobre-mi.astro`
- [ ] Probado localmente (`npm run build` y `npm run dev`)
- [ ] Subido a Hostinger
- [ ] Verificado en el sitio en vivo

---

## 💡 Tips Adicionales

### Optimizar la Imagen:

1. **Redimensionar:**
   - Usa un editor de imágenes (Photoshop, GIMP, o herramientas online)
   - Redimensiona a 400x400px o 500x500px para foto de perfil

2. **Comprimir:**
   - Usa herramientas como [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
   - Reduce el peso sin perder mucha calidad

3. **Formato:**
   - `.jpg` para fotos con muchos colores
   - `.png` solo si necesitas transparencia
   - `.webp` para mejor compresión (pero verifica compatibilidad)

### Accesibilidad:

Siempre incluye un `alt` descriptivo:
```astro
alt="Franco Paul Cantero Brunelli - Desarrollador de Software"
```

Esto ayuda a:
- Lectores de pantalla
- SEO
- Cuando la imagen no carga

---

¿Necesitas ayuda con algún paso específico? Avísame.


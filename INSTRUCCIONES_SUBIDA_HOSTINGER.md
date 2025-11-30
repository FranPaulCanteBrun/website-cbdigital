# 📤 Instrucciones para Subir Cambios a Hostinger

## ✅ Verificación Pre-Subida

### 1. Verificar que el build esté actualizado
```bash
npm run build
```

### 2. Verificar contenido de la carpeta `dist`
Debe contener:
- ✅ `index.html`
- ✅ `servicios/index.html`
- ✅ `proyectos/index.html`
- ✅ `contacto/index.html`
- ✅ `sobre-mi/index.html`
- ✅ `testimonios/index.html`
- ✅ `sitemap.xml`
- ✅ `robots.txt`
- ✅ `site.webmanifest`
- ✅ `images/cb_digital_favicon_ok.png` ⚠️ **IMPORTANTE**
- ✅ `images/foto-franco.jpg`
- ✅ `images/fondo_horizontal.jpg` (si la usas)
- ✅ `assets/` (carpeta con CSS y JS)

## 📋 Pasos para Subir a Hostinger

### Opción 1: Subir TODO el contenido de `dist/` (RECOMENDADO)

1. **Accede al File Manager de Hostinger**
   - Ve a tu panel de Hostinger
   - Abre **File Manager**
   - Navega a `public_html/`

2. **Elimina archivos antiguos** (IMPORTANTE)
   - Selecciona TODOS los archivos y carpetas dentro de `public_html/`
   - Elimínalos (o haz backup primero)
   - **EXCEPTO**: No elimines `.htaccess` si ya lo tienes configurado

3. **Sube TODO el contenido de `dist/`**
   - Selecciona TODOS los archivos y carpetas dentro de `dist/`
   - Súbelos a `public_html/`
   - Asegúrate de que la estructura sea:
     ```
     public_html/
     ├── index.html
     ├── sitemap.xml
     ├── robots.txt
     ├── site.webmanifest
     ├── images/
     │   ├── cb_digital_favicon_ok.png
     │   ├── foto-franco.jpg
     │   └── fondo_horizontal.jpg
     ├── assets/
     ├── servicios/
     ├── proyectos/
     ├── contacto/
     ├── sobre-mi/
     └── testimonios/
     ```

4. **Sube el archivo `.htaccess`**
   - Ubicación en tu proyecto: `public/.htaccess`
   - Sube a: `public_html/.htaccess`
   - Asegúrate de que el nombre sea exactamente `.htaccess` (con el punto)

### Opción 2: Subir solo archivos modificados

Si prefieres subir solo lo que cambió:

**Archivos que DEBES subir:**
- ✅ `dist/index.html` (nuevo)
- ✅ `dist/servicios/index.html` (nuevo con secciones de detalle)
- ✅ `dist/proyectos/index.html` (traducción actualizada)
- ✅ `dist/sobre-mi/index.html` (actualizado)
- ✅ `dist/testimonios/index.html` (actualizado)
- ✅ `dist/contacto/index.html` (actualizado)
- ✅ `dist/sitemap.xml` (mejorado con hreflang)
- ✅ `dist/robots.txt` (actualizado)
- ✅ `dist/site.webmanifest` (favicon actualizado)
- ✅ `dist/images/cb_digital_favicon_ok.png` ⚠️ **NUEVO - CRÍTICO**
- ✅ `dist/assets/` (carpeta completa - CSS/JS nuevos)
- ✅ `public/.htaccess` → `public_html/.htaccess`

## 🔧 Solución de Problemas: No Veo los Cambios

### Problema 1: Caché del Navegador

**Solución:**
1. **Hard Refresh:**
   - Windows/Linux: `Ctrl + Shift + R` o `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

2. **Modo Incógnito:**
   - Abre una ventana de incógnito
   - Visita tu sitio: `https://cbdigital.com.ar`

3. **Limpiar Caché del Navegador:**
   - Chrome: Configuración → Privacidad → Borrar datos de navegación
   - Firefox: Configuración → Privacidad → Limpiar datos
   - Selecciona "Imágenes y archivos en caché"

### Problema 2: Caché del Servidor (Hostinger)

**Solución:**
1. **Espera 5-10 minutos** después de subir los archivos
2. **Verifica que los archivos se subieron correctamente:**
   - En File Manager, verifica que `images/cb_digital_favicon_ok.png` existe
   - Verifica que `servicios/index.html` tiene el nuevo contenido

3. **Forzar recarga del servidor:**
   - Haz un pequeño cambio en cualquier archivo HTML
   - Guarda y vuelve a subir
   - Esto fuerza al servidor a regenerar la caché

### Problema 3: Archivos No Se Subieron Correctamente

**Verificación:**
1. **Verifica el tamaño de los archivos:**
   - `cb_digital_favicon_ok.png` debe tener ~670 KB
   - Si el tamaño es 0 o muy pequeño, no se subió bien

2. **Verifica permisos:**
   - Archivos: `644` (rw-r--r--)
   - Carpetas: `755` (rwxr-xr-x)

3. **Verifica que las carpetas se crearon:**
   - `images/` debe existir dentro de `public_html/`
   - `servicios/` debe existir dentro de `public_html/`

### Problema 4: Favicon No Aparece

**Verificación paso a paso:**
1. Verifica que el archivo existe:
   ```
   https://cbdigital.com.ar/images/cb_digital_favicon_ok.png
   ```
   Si no carga, el archivo no está en el lugar correcto.

2. Verifica el HTML:
   - Abre `https://cbdigital.com.ar`
   - Click derecho → Ver código fuente
   - Busca: `<link rel="icon"`
   - Debe decir: `href="/images/cb_digital_favicon_ok.png"`

3. **Solución si no aparece:**
   - Sube el archivo manualmente a `public_html/images/`
   - Verifica permisos: `644`
   - Espera 5 minutos y prueba de nuevo

## 🔍 Verificación Post-Subida

### Checklist de Verificación:

1. **Favicon:**
   - [ ] Visita `https://cbdigital.com.ar`
   - [ ] Verifica que el favicon aparece en la pestaña del navegador
   - [ ] Verifica que `https://cbdigital.com.ar/images/cb_digital_favicon_ok.png` carga

2. **Página de Servicios:**
   - [ ] Visita `https://cbdigital.com.ar/servicios`
   - [ ] Verifica que las tarjetas tienen el link "Ver detalles"
   - [ ] Haz clic en una tarjeta y verifica que hace scroll a la sección correspondiente
   - [ ] Verifica que las secciones de detalle están presentes

3. **SEO:**
   - [ ] Verifica `https://cbdigital.com.ar/sitemap.xml`
   - [ ] Verifica `https://cbdigital.com.ar/robots.txt`
   - [ ] Abre código fuente y busca `hreflang` (debe estar presente)

4. **Color del Hero:**
   - [ ] Visita la página principal
   - [ ] Verifica que el subtítulo tiene color `#00baf8` (azul claro)

5. **Traducciones:**
   - [ ] Cambia el idioma a EN
   - [ ] Verifica que las traducciones están actualizadas

## 🚨 Si Aún No Funciona

### Último Recurso: Subida Completa

1. **Backup de lo actual:**
   - Descarga todo de `public_html/` como backup

2. **Elimina TODO en `public_html/`** (excepto `.htaccess` si lo necesitas)

3. **Sube TODO de nuevo desde `dist/`:**
   - Selecciona todos los archivos y carpetas
   - Sube en un solo paso
   - Espera a que termine completamente

4. **Verifica permisos:**
   - Archivos: `644`
   - Carpetas: `755`

5. **Espera 10 minutos** y prueba de nuevo

## 📞 Verificación Técnica

### Comandos para verificar desde terminal:

```bash
# Verificar que el favicon existe en dist
ls -lh dist/images/cb_digital_favicon_ok.png

# Verificar tamaño (debe ser ~670 KB)
# Verificar que el HTML referencia el favicon correcto
grep -i "favicon" dist/index.html
```

### Verificación en el navegador:

1. Abre DevTools (F12)
2. Ve a la pestaña **Network**
3. Recarga la página (Ctrl+R)
4. Busca `cb_digital_favicon_ok.png`
5. Verifica que carga con código `200` (no `404`)

## ✅ Confirmación Final

Después de subir, verifica estos URLs directamente:

- ✅ `https://cbdigital.com.ar/images/cb_digital_favicon_ok.png` → Debe mostrar la imagen
- ✅ `https://cbdigital.com.ar/sitemap.xml` → Debe mostrar el XML
- ✅ `https://cbdigital.com.ar/robots.txt` → Debe mostrar el texto
- ✅ `https://cbdigital.com.ar/servicios` → Debe mostrar la página con secciones

---

**Nota:** Si después de seguir todos estos pasos aún no ves los cambios, puede ser un problema de caché del CDN de Hostinger. En ese caso, contacta al soporte de Hostinger para que limpien la caché del servidor.


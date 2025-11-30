# 🔧 Solución: Favicon No Aparece (Problema de Caché)

## 🔍 Diagnóstico

Si el archivo `cb_digital_favicon_ok.png` carga directamente pero no aparece como favicon, es un problema de **caché del navegador**.

Los favicons son uno de los recursos que los navegadores cachean más agresivamente.

## ✅ Soluciones (en orden de efectividad)

### Solución 1: Forzar Recarga del Favicon (MÁS EFECTIVO)

**Opción A: Agregar parámetro de versión al favicon**

Modifica temporalmente el HTML para forzar la recarga:

1. Abre `src/layouts/BaseLayout.astro`
2. Cambia temporalmente la línea del favicon a:
   ```astro
   <link rel="icon" type="image/png" href="/images/cb_digital_favicon_ok.png?v=2" />
   ```
3. Ejecuta `npm run build`
4. Sube el nuevo `index.html` a Hostinger
5. Esto fuerza al navegador a descargar el favicon de nuevo

**Opción B: Usar un nombre diferente temporalmente**

1. Renombra el archivo: `cb_digital_favicon_ok.png` → `favicon.png`
2. Actualiza la referencia en `BaseLayout.astro`
3. Build y sube

### Solución 2: Limpiar Caché del Navegador

**Chrome/Edge:**
1. Abre DevTools (F12)
2. Click derecho en el botón de recargar
3. Selecciona **"Vaciar caché y volver a cargar de forma forzada"**

**Firefox:**
1. `Ctrl + Shift + Delete`
2. Selecciona "Caché"
3. Marca "Todo"
4. Click en "Limpiar ahora"

**Safari:**
1. `Cmd + Option + E` (limpiar caché)
2. `Cmd + Shift + R` (recargar)

### Solución 3: Modo Incógnito

1. Abre una ventana de incógnito
2. Visita `https://cbdigital.com.ar`
3. Si aparece el favicon aquí, confirma que es caché

### Solución 4: Verificar en Otro Navegador

Prueba en un navegador que nunca hayas usado para visitar el sitio. Si funciona ahí, confirma que es caché.

### Solución 5: Verificar que el Archivo Esté Correctamente Subido

**En Hostinger File Manager:**
1. Ve a `public_html/images/`
2. Verifica que `cb_digital_favicon_ok.png` existe
3. Verifica el tamaño del archivo (debe ser ~670 KB)
4. Verifica permisos: debe ser `644` (rw-r--r--)

**Verificación directa:**
Abre en el navegador:
```
https://cbdigital.com.ar/images/cb_digital_favicon_ok.png
```

Si carga la imagen, el archivo está bien subido.

### Solución 6: Agregar Múltiples Formatos de Favicon

Algunos navegadores prefieren diferentes formatos. Podemos agregar:

```astro
<!-- Favicons -->
<link rel="icon" type="image/png" sizes="32x32" href="/images/cb_digital_favicon_ok.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/images/cb_digital_favicon_ok.png" />
<link rel="shortcut icon" href="/images/cb_digital_favicon_ok.png" />
<link rel="apple-touch-icon" href="/images/cb_digital_favicon_ok.png" />
<link rel="manifest" href="/site.webmanifest" />
```

## 🚨 Solución Definitiva: Agregar Versión al Favicon

Voy a modificar el código para agregar un parámetro de versión que fuerza la actualización.


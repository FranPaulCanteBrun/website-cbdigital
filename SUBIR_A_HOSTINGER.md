# Guía: Subir Sitio a Hostinger

## ✅ Lo que ya tienes listo:
- ✅ Formulario de contacto funcionando con EmailJS
- ✅ Build del proyecto completado
- ✅ Dominio vinculado en Hostinger
- ✅ Variables de entorno configuradas (ya están incluidas en el build)

---

## Paso 1: Verificar que el build esté actualizado

El build ya está hecho, pero si hiciste cambios, ejecuta:

```bash
npm run build
```

Esto creará/actualizará la carpeta `dist` con todos los archivos estáticos.

---

## Paso 2: Ubicar la carpeta dist

La carpeta `dist` está en la raíz de tu proyecto:

**Ruta completa:**
```
D:\Datos User\Documents\web_innovatec\dist
```

**Contenido a subir:**
- Todos los archivos y carpetas DENTRO de `dist`
- NO subas la carpeta `dist` misma, solo su contenido

---

## Paso 3: Acceder al File Manager de Hostinger

1. Inicia sesión en tu cuenta de Hostinger
2. Ve a **"hPanel"** (panel de control)
3. Busca **"File Manager"** o **"Administrador de Archivos"**
4. Haz clic para abrirlo

---

## Paso 4: Navegar a la carpeta correcta

En el File Manager de Hostinger:

1. Ve a la carpeta **`public_html`** (esta es la carpeta raíz de tu sitio web)
2. Si tu dominio está en un subdirectorio, ve a ese subdirectorio
3. **Importante:** Esta es la carpeta donde deben estar los archivos de tu sitio

---

## Paso 5: Limpiar archivos antiguos (si existen)

Si hay archivos antiguos en `public_html`:

1. Selecciona todos los archivos y carpetas existentes
2. Elimínalos o muévelos a una carpeta de respaldo
3. **Asegúrate de no eliminar archivos importantes** como `.htaccess` si los tienes

---

## Paso 6: Subir los archivos

### Opción A: Subir por arrastrar y soltar (más fácil)

1. Abre el explorador de archivos de Windows
2. Navega a: `D:\Datos User\Documents\web_innovatec\dist`
3. Selecciona **TODOS** los archivos y carpetas dentro de `dist`
4. Arrástralos y suéltalos en el File Manager de Hostinger (en la carpeta `public_html`)

### Opción B: Subir por comprimir y descomprimir

1. En Windows, comprime la carpeta `dist` en un archivo ZIP
2. En el File Manager de Hostinger, sube el archivo ZIP
3. Haz clic derecho en el ZIP → **"Extract"** o **"Extraer"**
4. Elimina el archivo ZIP después de extraer

---

## Paso 7: Verificar la estructura

Después de subir, la estructura en `public_html` debería verse así:

```
public_html/
├── index.html
├── contacto/
│   └── index.html
├── sobre-mi/
│   └── index.html
├── servicios/
│   └── index.html
├── proyectos/
│   └── index.html
├── testimonios/
│   └── index.html
├── assets/
│   └── (archivos CSS, JS, imágenes)
└── (otros archivos estáticos)
```

---

## Paso 8: Probar el sitio

1. Abre tu navegador
2. Ve a tu dominio (ej: `https://tudominio.com`)
3. Verifica que:
   - ✅ La página principal carga correctamente
   - ✅ La navegación funciona
   - ✅ Todas las páginas se ven bien
   - ✅ El formulario de contacto funciona
   - ✅ El tema claro/oscuro funciona

---

## Paso 9: Probar el formulario de contacto

1. Ve a la página de contacto en tu sitio en vivo
2. Completa el formulario con datos de prueba
3. Envía el mensaje
4. Verifica que:
   - ✅ Aparece el mensaje de éxito
   - ✅ Recibes el email en tu Gmail

---

## ⚠️ Notas Importantes

### Variables de Entorno
- Las variables de entorno (`PUBLIC_EMAILJS_*`) ya están incluidas en el build
- No necesitas configurar nada adicional en Hostinger
- El formulario funcionará automáticamente

### HTTPS
- Asegúrate de que tu sitio use HTTPS (Hostinger lo configura automáticamente)
- Si no está activado, actívalo en el panel de Hostinger

### Dominio
- Si acabas de vincular el dominio, puede tardar unas horas en propagarse completamente
- Si no carga, espera unas horas y prueba nuevamente

---

## 🔧 Solución de Problemas

### El sitio no carga
- Verifica que los archivos estén en `public_html` (no en un subdirectorio)
- Verifica que `index.html` esté en la raíz de `public_html`
- Espera unas horas si acabas de vincular el dominio

### El formulario no funciona
- Verifica que las variables de entorno estén en el `.env` y hayas ejecutado `npm run build`
- Revisa la consola del navegador (F12) para ver errores
- Verifica que EmailJS esté cargando (revisa la pestaña Network en las herramientas de desarrollador)

### Las imágenes no se ven
- Verifica que la carpeta de imágenes se haya subido correctamente
- Verifica las rutas de las imágenes en el código

### El tema oscuro/claro no funciona
- Verifica que los archivos JavaScript se hayan subido correctamente
- Revisa la consola del navegador para errores

---

## ✅ Checklist Final

Antes de considerar que todo está listo:

- [ ] Build ejecutado (`npm run build`)
- [ ] Archivos subidos a `public_html` en Hostinger
- [ ] Sitio carga correctamente en el navegador
- [ ] Todas las páginas funcionan
- [ ] Navegación funciona
- [ ] Formulario de contacto funciona
- [ ] Recibes emails del formulario
- [ ] Tema claro/oscuro funciona
- [ ] Sitio se ve bien en móvil (responsive)

---

## 🎉 ¡Listo!

Una vez que todo funcione, tu sitio estará en línea y el formulario de contacto funcionará perfectamente.

Si encuentras algún problema, avísame y te ayudo a solucionarlo.


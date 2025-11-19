# Cómo Probar tu Sitio en Hostinger

## Paso 1: Acceder a tu Sitio

### Opción A: Usar tu Dominio
1. Abre tu navegador (Chrome, Firefox, Edge, etc.)
2. Escribe tu dominio en la barra de direcciones:
   - `https://tudominio.com`
   - O `http://tudominio.com` (si HTTPS aún no está activo)

### Opción B: Usar la IP o URL Temporal
Si tu dominio aún no está completamente propagado, Hostinger te habrá dado:
- Una URL temporal (ej: `https://tudominio.hosting.com`)
- O una IP temporal

Puedes usar cualquiera de estas opciones para probar mientras el dominio se propaga.

---

## Paso 2: Verificar la Página Principal

1. Deberías ver la página de inicio de CB Digital
2. Verifica que:
   - ✅ El logo y el header se ven correctamente
   - ✅ Los textos se leen bien
   - ✅ Las imágenes cargan
   - ✅ El menú de navegación está visible

---

## Paso 3: Probar la Navegación

Haz clic en cada enlace del menú y verifica:

- ✅ **Inicio** → Lleva a la página principal
- ✅ **Sobre Mí** → Muestra tu información
- ✅ **Servicios** → Lista todos los servicios (incluyendo IA)
- ✅ **Proyectos** → Muestra tus proyectos
- ✅ **Testimonios** → Muestra los testimonios
- ✅ **Contacto** → Muestra el formulario de contacto

---

## Paso 4: Probar el Formulario de Contacto

### 4.1. Ir a la página de contacto
1. Haz clic en "Contacto" en el menú
2. O ve directamente a: `https://tudominio.com/contacto`

### 4.2. Completar el formulario
1. **Nombre:** Escribe un nombre de prueba (ej: "Test Usuario")
2. **Email:** Escribe un email válido (puede ser el tuyo)
3. **Mensaje:** Escribe un mensaje de prueba (ej: "Este es un mensaje de prueba del formulario")

### 4.3. Enviar el formulario
1. Haz clic en el botón "Enviar" o "Send"
2. Deberías ver:
   - ✅ El botón muestra "Enviando..." mientras procesa
   - ✅ Aparece un mensaje de éxito: "¡Mensaje enviado! Te contactaré pronto."
   - ✅ El formulario se limpia

### 4.4. Verificar el email
1. Revisa tu bandeja de entrada de Gmail
2. Deberías recibir un email con:
   - ✅ Asunto: "Nuevo mensaje de contacto desde CB Digital"
   - ✅ Nombre del usuario
   - ✅ Email del usuario
   - ✅ Mensaje completo

---

## Paso 5: Probar el Tema Claro/Oscuro

1. Busca el botón de cambio de tema (generalmente un ícono de sol/luna)
2. Haz clic para cambiar entre tema claro y oscuro
3. Verifica que:
   - ✅ El cambio se aplica inmediatamente
   - ✅ Los colores se ven bien en ambos temas
   - ✅ El texto es legible en ambos temas

---

## Paso 6: Probar en Móvil (Responsive)

### Opción A: En tu teléfono
1. Abre tu navegador móvil
2. Ve a tu dominio
3. Verifica que:
   - ✅ El menú se adapta (hamburguesa)
   - ✅ Los textos son legibles
   - ✅ Las imágenes se ajustan
   - ✅ El formulario es fácil de usar

### Opción B: En el navegador de escritorio
1. Presiona `F12` para abrir las herramientas de desarrollador
2. Haz clic en el ícono de dispositivo móvil (o presiona `Ctrl+Shift+M`)
3. Selecciona diferentes tamaños de pantalla (iPhone, iPad, etc.)
4. Verifica que el sitio se ve bien en todos los tamaños

---

## Paso 7: Probar el Cambio de Idioma

1. Busca el selector de idioma (ES/EN)
2. Haz clic para cambiar entre español e inglés
3. Verifica que:
   - ✅ Los textos cambian correctamente
   - ✅ El menú se traduce
   - ✅ Las páginas se traducen
   - ✅ El formulario se traduce

---

## Paso 8: Verificar la Velocidad

1. Abre las herramientas de desarrollador (`F12`)
2. Ve a la pestaña **"Network"** o **"Red"**
3. Recarga la página (`F5` o `Ctrl+R`)
4. Verifica que:
   - ✅ La página carga en menos de 3 segundos
   - ✅ Las imágenes se cargan rápidamente
   - ✅ No hay errores en la consola

---

## Paso 9: Verificar SEO Básico

1. Haz clic derecho en la página → **"Ver código fuente"** o **"View Page Source"**
2. Verifica que:
   - ✅ Hay un `<title>` con el nombre del sitio
   - ✅ Hay una `<meta name="description">`
   - ✅ Hay etiquetas Open Graph (og:title, og:description, etc.)

---

## Paso 10: Probar los Enlaces Externos

Verifica que los enlaces funcionen:
- ✅ Enlaces a LinkedIn
- ✅ Enlaces a GitHub
- ✅ Enlaces a redes sociales (si los tienes)

---

## ✅ Checklist de Pruebas

Marca cada ítem cuando lo hayas verificado:

- [ ] Sitio carga correctamente
- [ ] Página principal se ve bien
- [ ] Navegación funciona en todas las páginas
- [ ] Formulario de contacto funciona
- [ ] Recibes emails del formulario
- [ ] Tema claro/oscuro funciona
- [ ] Cambio de idioma funciona
- [ ] Sitio se ve bien en móvil
- [ ] Imágenes cargan correctamente
- [ ] No hay errores en la consola
- [ ] Velocidad de carga es aceptable

---

## 🔧 Solución de Problemas

### El sitio no carga
- Espera unas horas si acabas de vincular el dominio
- Verifica que los archivos estén en `public_html`
- Verifica que `index.html` esté en la raíz

### El formulario no funciona
- Abre la consola del navegador (`F12` → pestaña "Console")
- Busca errores en rojo
- Verifica que EmailJS esté cargando (pestaña "Network")

### Las imágenes no se ven
- Verifica que la carpeta de imágenes se haya subido
- Verifica las rutas de las imágenes en el código

### El tema no cambia
- Verifica que los archivos JavaScript se hayan subido
- Revisa la consola del navegador para errores

---

## 🎉 ¡Listo!

Si todo funciona correctamente, tu sitio está en línea y funcionando perfectamente.

Si encuentras algún problema, avísame y te ayudo a solucionarlo.


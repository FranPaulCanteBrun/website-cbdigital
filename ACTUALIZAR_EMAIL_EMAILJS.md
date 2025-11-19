# Actualizar Email de Destino en EmailJS

## ✅ Cambios Realizados en el Código

He actualizado el código para que el formulario envíe a `cbdigitalapps@gmail.com` en lugar de `francocanteropaul@gmail.com`.

**Archivos actualizados:**
- ✅ `src/components/forms/ContactForm.astro` - Email de destino del formulario
- ✅ `src/pages/contacto.astro` - Link de email en la página de contacto
- ✅ `src/layouts/BaseLayout.astro` - Schema.org JSON-LD (SEO)

---

## ⚠️ Importante: Verificar Template en EmailJS

El código ahora envía a `cbdigitalapps@gmail.com`, pero también necesitas verificar que el **template en EmailJS** esté configurado correctamente.

### Paso 1: Verificar el Template en EmailJS

1. Ve a tu cuenta de EmailJS
2. Ve a **"Email Templates"**
3. Abre el template que estás usando (el que tiene el Template ID que configuraste)
4. Verifica el campo **"To Email"** o **"To"**

### Paso 2: Actualizar el Template (si es necesario)

Si el template tiene un campo "To Email" o "To":

1. Cámbialo a: `cbdigitalapps@gmail.com`
2. O déjalo vacío si quieres que el código lo controle (recomendado)

**Nota:** En EmailJS, si dejas el campo "To Email" vacío en el template, el código puede controlar el destinatario. Pero si está configurado, ese valor tiene prioridad.

### Paso 3: Verificar el Service (Gmail)

1. Ve a **"Email Services"** en EmailJS
2. Verifica que el servicio de Gmail esté conectado a la cuenta correcta
3. Si conectaste `cbdigitalapps@gmail.com`, perfecto
4. Si conectaste otro Gmail, puedes:
   - Agregar un nuevo servicio con `cbdigitalapps@gmail.com`
   - O cambiar el servicio existente

---

## 🔄 Opciones de Configuración

### Opción 1: Controlar desde el Código (Recomendado)

**En el Template de EmailJS:**
- Deja el campo "To Email" vacío o pon: `{{to_email}}`

**En el código:**
- Ya está configurado para enviar a `cbdigitalapps@gmail.com`

**Ventaja:** Puedes cambiar el email de destino fácilmente desde el código.

### Opción 2: Controlar desde EmailJS

**En el Template de EmailJS:**
- Pon directamente: `cbdigitalapps@gmail.com` en el campo "To Email"

**En el código:**
- El campo `to_email` se ignora, pero puedes dejarlo por si acaso

**Ventaja:** El email está centralizado en EmailJS.

---

## ✅ Verificación

Después de actualizar:

1. **Reconstruye el proyecto:**
   ```bash
   npm run build
   ```

2. **Sube los archivos actualizados a Hostinger**

3. **Prueba el formulario:**
   - Completa el formulario en tu sitio
   - Envía un mensaje de prueba
   - Verifica que llegue a `cbdigitalapps@gmail.com`

---

## 📋 Checklist

- [ ] Código actualizado (ya hecho)
- [ ] Build ejecutado (ya hecho)
- [ ] Template de EmailJS verificado/actualizado
- [ ] Service de Gmail conectado a la cuenta correcta
- [ ] Formulario probado en el sitio en vivo
- [ ] Email recibido en `cbdigitalapps@gmail.com`

---

## 🔧 Si el Email Sigue Llegando al Email Incorrecto

1. **Verifica el Template en EmailJS:**
   - El campo "To Email" puede estar sobrescribiendo el código

2. **Verifica el Service:**
   - El servicio puede estar conectado a otro Gmail

3. **Verifica el Build:**
   - Asegúrate de haber ejecutado `npm run build` después de los cambios
   - Asegúrate de haber subido los archivos actualizados a Hostinger

4. **Limpia la caché:**
   - Limpia la caché del navegador
   - O prueba en modo incógnito

---

¿Necesitas ayuda para verificar o actualizar el template en EmailJS? Avísame.


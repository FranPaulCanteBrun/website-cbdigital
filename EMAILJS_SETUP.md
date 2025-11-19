# Configuración de EmailJS para Hostinger

## ¿Qué es EmailJS?

EmailJS es un servicio que permite enviar emails directamente desde el navegador sin necesidad de un servidor backend. Es perfecto para sitios estáticos como el que desplegarás en Hostinger.

## ¿EmailJS o Zoho Mail? ¿Cuál es la diferencia?

**EmailJS** es el servicio que necesitas configurar para que tu formulario funcione. Es el "intermediario" que envía los emails desde tu sitio web.

**Zoho Mail** (o Gmail, Outlook, etc.) es solo la cuenta de email que usarás. EmailJS se conecta a tu cuenta de email para enviar los mensajes.

**En resumen:**
- ✅ **Solo necesitas configurar EmailJS** (es lo que hace funcionar el formulario)
- ✅ **Zoho Mail es opcional** (puedes usar Gmail, Outlook, o cualquier otro proveedor)
- ✅ **EmailJS se conecta a tu cuenta de email** (Zoho, Gmail, etc.) para enviar los mensajes

**Ejemplo del flujo:**
1. Usuario completa el formulario en tu sitio web
2. EmailJS recibe los datos
3. EmailJS se conecta a tu cuenta de email (Zoho, Gmail, etc.)
4. EmailJS envía el email a tu bandeja de entrada

## Plan Gratuito

- **200 emails/mes** (suficiente para la mayoría de sitios web)
- Sin tarjeta de crédito requerida
- Configuración rápida

## Pasos para Configurar EmailJS

### 1. Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar un servicio de email

1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email:
   - **Gmail** (más fácil, recomendado para empezar)
   - **Zoho Mail** (si ya tienes cuenta profesional)
   - **Outlook** (si usas Microsoft)
   - **Otros proveedores** (EmailJS soporta muchos)
4. Conecta tu cuenta de email (te pedirá permisos)
5. **Guarda el "Service ID"** (lo necesitarás después)

**Nota:** No necesitas configurar Zoho Mail por separado. Solo necesitas tener una cuenta de email (puede ser Gmail, Zoho, Outlook, etc.) y EmailJS se conectará a ella.

### 3. Crear una plantilla de email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura la plantilla con estos campos:

**Asunto del email:**
```
Nuevo mensaje de contacto desde CB Digital
```

**Contenido del email:**
```
Nuevo mensaje de contacto:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de CB Digital.
```

4. **Guarda el "Template ID"** (lo necesitarás después)

### 4. Obtener tu Public Key

1. Ve a **"Account"** → **"General"**
2. Encuentra tu **"Public Key"** (también llamada "Public API Key")
3. **Cópiala** (la necesitarás después)

### 5. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto con estas variables:

```env
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
```

**Ejemplo:**
```env
PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
PUBLIC_EMAILJS_SERVICE_ID=service_1234567
PUBLIC_EMAILJS_TEMPLATE_ID=template_abcdefg
```

### 6. Reconstruir el proyecto

Después de agregar las variables de entorno, ejecuta:

```bash
npm run build
```

Esto incluirá las variables de entorno en el build estático.

## Verificación

1. Ejecuta `npm run dev` para probar localmente
2. Ve a la página de contacto
3. Envía un mensaje de prueba
4. Verifica que recibas el email en tu bandeja de entrada

## Notas Importantes

- Las variables que empiezan con `PUBLIC_` son accesibles desde el cliente (navegador)
- No uses variables privadas aquí, ya que serán visibles en el código fuente
- El plan gratuito tiene límite de 200 emails/mes
- EmailJS maneja automáticamente el spam y la seguridad

## Solución de Problemas

### El formulario no envía emails

1. Verifica que las variables de entorno estén correctamente configuradas
2. Asegúrate de haber ejecutado `npm run build` después de agregar las variables
3. Revisa la consola del navegador para ver errores
4. Verifica que el Service ID y Template ID sean correctos

### Error: "EmailJS no está cargado"

- Verifica que tengas conexión a internet
- El script de EmailJS se carga desde un CDN

### Error: "Configuración de EmailJS incompleta"

- Verifica que todas las variables de entorno estén configuradas
- Asegúrate de que las variables empiecen con `PUBLIC_`

## Soporte

Si tienes problemas, consulta la documentación oficial de EmailJS:
[https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)


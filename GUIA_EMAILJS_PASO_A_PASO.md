# Guía Paso a Paso: Configuración de EmailJS

## Paso 1: Crear cuenta en EmailJS ✅

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu email

---

## Paso 2: Configurar Email Service (ESTÁS AQUÍ)

### 2.1. Ir a Email Services

1. En el dashboard de EmailJS, ve a **"Email Services"** (en el menú lateral)
2. Haz clic en **"Add New Service"**

### 2.2. Seleccionar proveedor de email

Aparecerán opciones como:
- Gmail
- Zoho
- Outlook
- SendGrid
- etc.

**Recomendación:** Selecciona **Gmail** (es el más fácil de configurar)

### 2.3. Llenar los campos

Cuando seleccionas un proveedor, aparecen dos campos:

#### Campo 1: **Name**
- **Qué es:** Un nombre descriptivo para identificar este servicio
- **Ejemplo:** `Mi Gmail Personal` o `Gmail CB Digital` o simplemente `Gmail`
- **Importante:** Este nombre es solo para ti, para identificar el servicio en EmailJS
- **Puedes poner:** Cualquier nombre que te ayude a recordar qué es

#### Campo 2: **Service ID**
- **Qué es:** Un identificador único para este servicio
- **Ejemplo:** `service_abc123` o `gmail_cbdigital` o `service_contacto`
- **Importante:** 
  - Debe ser único
  - Solo puede contener letras, números y guiones bajos
  - No puede tener espacios ni caracteres especiales
  - EmailJS puede generar uno automáticamente si lo dejas vacío
- **Recomendación:** Déjalo vacío y EmailJS generará uno automáticamente, o pon algo como `service_gmail` o `service_contacto`

### 2.4. Conectar tu cuenta de email

Después de llenar los campos (o dejarlos con valores por defecto):

1. Haz clic en **"Connect Account"** o **"Connect"**
2. Se abrirá una ventana para autorizar a EmailJS a usar tu cuenta de email
3. Inicia sesión con tu cuenta de Gmail (o el proveedor que elegiste)
4. Autoriza los permisos que EmailJS solicita
5. Una vez autorizado, volverás a EmailJS y verás que el servicio está conectado

### 2.5. Guardar el Service ID

Una vez que el servicio esté conectado:

1. Verás el **Service ID** en la lista de servicios
2. **Cópialo** (lo necesitarás más adelante)
3. Se verá algo como: `service_abc123xyz` o `service_gmail_123`

**Ejemplo de cómo se ve:**
```
Name: Gmail CB Digital
Service ID: service_abc123xyz  ← COPIA ESTO
Status: Connected ✅
```

---

## Paso 3: Crear Email Template

### 3.1. Ir a Email Templates

1. En el menú lateral, ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**

### 3.2. Configurar la plantilla

#### Campo: **Template Name**
- **Ejemplo:** `Formulario de Contacto` o `Contact Form`

#### Campo: **Subject** (Asunto del email)
```
Nuevo mensaje de contacto desde CB Digital
```

#### Campo: **Content** (Contenido del email)
```
Nuevo mensaje de contacto:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de CB Digital.
```

**Importante:** Las variables `{{from_name}}`, `{{from_email}}`, y `{{message}}` son las que usa el formulario. No las cambies.

#### Campo: **From Name** (Opcional)
- Puedes dejarlo vacío o poner: `CB Digital`

#### Campo: **From Email** (Opcional)
- Déjalo vacío (usará el email de tu cuenta conectada)

#### Campo: **Reply To** (Opcional)
- Puedes poner: `{{from_email}}` para que puedas responder directamente al usuario

### 3.3. Guardar y copiar Template ID

1. Haz clic en **"Save"**
2. Verás el **Template ID** (algo como `template_abc123`)
3. **Cópialo** (lo necesitarás después)

---

## Paso 4: Obtener Public Key

1. Ve a **"Account"** → **"General"** (en el menú lateral)
2. Busca la sección **"API Keys"** o **"Public Key"**
3. Verás algo como: `abcdefghijklmnop` o `public_abc123xyz`
4. **Cópialo** (lo necesitarás después)

---

## Paso 5: Configurar variables en tu proyecto

### 5.1. Crear archivo .env

En la raíz de tu proyecto (donde está `package.json`), crea un archivo llamado `.env`:

```env
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
```

### 5.2. Reemplazar con tus valores

Reemplaza los valores con los que copiaste:

**Ejemplo:**
```env
PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
PUBLIC_EMAILJS_SERVICE_ID=service_abc123xyz
PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
```

### 5.3. Guardar el archivo

Guarda el archivo `.env` en la raíz del proyecto.

---

## Paso 6: Reconstruir el proyecto

Ejecuta en la terminal:

```bash
npm run build
```

Esto incluirá las variables de entorno en el build estático.

---

## Paso 7: Probar el formulario

1. Ejecuta `npm run dev`
2. Ve a la página de contacto en tu navegador
3. Completa el formulario con datos de prueba
4. Envía el mensaje
5. Revisa tu bandeja de entrada (deberías recibir el email)

---

## Resumen de los 3 valores que necesitas

1. **Public Key** → En "Account" → "General"
2. **Service ID** → En "Email Services" (después de conectar)
3. **Template ID** → En "Email Templates" (después de crear la plantilla)

---

## Solución de Problemas

### No puedo conectar mi cuenta de Gmail

- Asegúrate de estar usando la cuenta correcta
- Verifica que tengas permisos para autorizar aplicaciones
- Intenta con otra cuenta de Gmail si es necesario

### El Service ID no aparece

- Asegúrate de haber guardado el servicio
- Refresca la página
- Verifica que el servicio esté en estado "Connected"

### El Template ID no aparece

- Asegúrate de haber guardado la plantilla
- Verifica que la plantilla esté en la lista de templates

### El formulario no envía emails

1. Verifica que las 3 variables estén en el archivo `.env`
2. Asegúrate de haber ejecutado `npm run build` después de crear el `.env`
3. Revisa la consola del navegador (F12) para ver errores
4. Verifica que los IDs sean correctos (sin espacios ni caracteres extra)

---

## ¿Necesitas ayuda?

Si te quedas atascado en algún paso, avísame y te ayudo específicamente con ese paso.


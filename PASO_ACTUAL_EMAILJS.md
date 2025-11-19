# Siguiente Paso: Configurar Email Template en EmailJS

## ✅ Lo que ya tienes hecho:
- ✅ Cuenta de EmailJS creada
- ✅ Gmail vinculado como servicio
- ✅ Service ID copiado (¿lo copiaste? Si no, vuelve a Email Services y cópialo)

---

## 📝 Paso Actual: Crear Email Template

### 1. Ir a Email Templates

1. En el dashboard de EmailJS, ve a **"Email Templates"** (en el menú lateral izquierdo)
2. Haz clic en **"Create New Template"** o **"New Template"**

### 2. Llenar los campos de la plantilla

#### Campo: **Template Name**
- **Ejemplo:** `Formulario de Contacto` o `Contact Form CB Digital`
- **Qué poner:** Un nombre descriptivo para identificar esta plantilla

#### Campo: **Subject** (Asunto del email)
```
Nuevo mensaje de contacto desde CB Digital
```

**O en inglés si prefieres:**
```
New contact message from CB Digital
```

#### Campo: **Content** (Contenido del email)

Copia y pega esto exactamente:

```
Nuevo mensaje de contacto:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de CB Digital.
```

**⚠️ IMPORTANTE:** 
- Las variables `{{from_name}}`, `{{from_email}}`, y `{{message}}` DEBEN estar exactamente así
- No cambies los nombres de estas variables
- Son las que usa el formulario para enviar los datos

#### Campo: **From Name** (Opcional)
- Puedes dejarlo vacío
- O poner: `CB Digital` o `Sitio Web CB Digital`

#### Campo: **From Email** (Opcional)
- Déjalo vacío (usará el email de tu cuenta de Gmail conectada)

#### Campo: **Reply To** (Opcional pero recomendado)
- Pon: `{{from_email}}`
- Esto permite que cuando respondas el email, vaya directamente al usuario que completó el formulario

### 3. Guardar la plantilla

1. Haz clic en **"Save"** o **"Create Template"**
2. Verás el **Template ID** (algo como `template_abc123xyz`)
3. **¡COPIA EL TEMPLATE ID!** Lo necesitarás después

---

## 🔑 Siguiente Paso: Obtener Public Key

Después de crear el template, necesitas el Public Key:

1. Ve a **"Account"** → **"General"** (en el menú lateral)
2. Busca la sección **"API Keys"** o **"Public Key"**
3. Verás algo como: `abcdefghijklmnop` o `public_abc123xyz`
4. **¡COPIA EL PUBLIC KEY!** Lo necesitarás después

---

## 📋 Resumen: Los 3 valores que necesitas

Tienes que copiar estos 3 valores:

1. ✅ **Service ID** → Ya lo tienes (de Email Services)
2. ⏳ **Template ID** → Lo obtendrás ahora (de Email Templates)
3. ⏳ **Public Key** → Lo obtendrás después (de Account → General)

---

## 🎯 Después de tener los 3 valores

Una vez que tengas los 3 valores, los configurarás en tu proyecto:

1. Crear archivo `.env` en la raíz del proyecto
2. Agregar las 3 variables con tus valores
3. Ejecutar `npm run build`
4. Probar el formulario

---

## 💡 Consejo

Mientras creas el template, ten abierto un bloc de notas o documento para copiar los 3 valores:
- Service ID: `_________________`
- Template ID: `_________________`
- Public Key: `_________________`

Así no los perderás.

---

¿Necesitas ayuda con algún campo específico del template? Avísame y te ayudo.


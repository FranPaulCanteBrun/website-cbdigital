# Configurar Variables de Entorno para EmailJS

## ✅ Lo que ya tienes:
- ✅ Service ID
- ✅ Template ID  
- ✅ Public Key

---

## Paso 1: Crear archivo .env

1. Ve a la raíz de tu proyecto (donde está `package.json`)
2. Crea un archivo nuevo llamado `.env` (con el punto al inicio)
3. **Importante:** El archivo debe llamarse exactamente `.env` (no `env.txt` ni `.env.txt`)

### Ubicación del archivo:
```
web_innovatec/
├── package.json
├── astro.config.mjs
├── .env          ← AQUÍ (en la raíz, junto a package.json)
└── src/
```

---

## Paso 2: Agregar las variables

Abre el archivo `.env` y pega esto, reemplazando con tus valores reales:

```env
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
PUBLIC_EMAILJS_SERVICE_ID=tu_service_id_aqui
PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
```

### Ejemplo con valores reales:

```env
PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
PUBLIC_EMAILJS_SERVICE_ID=service_gmail_123xyz
PUBLIC_EMAILJS_TEMPLATE_ID=template_abc789xyz
```

### ⚠️ IMPORTANTE:
- **NO** dejes espacios alrededor del `=`
- **NO** uses comillas (ni simples ni dobles)
- **SÍ** usa el prefijo `PUBLIC_` en todas las variables
- Copia los valores exactamente como los copiaste de EmailJS

---

## Paso 3: Guardar el archivo

Guarda el archivo `.env` en la raíz del proyecto.

---

## Paso 4: Reconstruir el proyecto

Abre la terminal en la raíz del proyecto y ejecuta:

```bash
npm run build
```

Esto incluirá las variables de entorno en el build estático.

**Espera a que termine** (verás "Build Complete!" cuando termine).

---

## Paso 5: Probar el formulario localmente

1. Ejecuta en la terminal:
   ```bash
   npm run dev
   ```

2. Abre tu navegador en: `http://localhost:4321/contacto`

3. Completa el formulario con datos de prueba:
   - Nombre: `Test Usuario`
   - Email: `test@ejemplo.com`
   - Mensaje: `Este es un mensaje de prueba`

4. Haz clic en "Enviar"

5. Revisa tu bandeja de Gmail - deberías recibir el email con los datos completos

---

## ✅ Verificación

Si todo está bien:
- ✅ El formulario se envía sin errores
- ✅ Aparece mensaje de éxito: "¡Mensaje enviado! Te contactaré pronto."
- ✅ Recibes el email en Gmail con los datos completos (nombre, email, mensaje)

---

## ❌ Solución de Problemas

### Error: "Configuración de EmailJS incompleta"
- Verifica que las 3 variables estén en el archivo `.env`
- Verifica que empiecen con `PUBLIC_`
- Verifica que no haya espacios alrededor del `=`
- Asegúrate de haber ejecutado `npm run build` después de crear el `.env`

### Error: "EmailJS no está cargado"
- Verifica tu conexión a internet
- El script de EmailJS se carga desde un CDN

### El email llega pero los campos están vacíos
- Verifica que los nombres de las variables en el template sean exactamente:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{message}}`
- Verifica que el Template ID sea correcto

### No recibo el email
- Revisa la carpeta de spam
- Verifica que el Service ID sea correcto
- Verifica que Gmail esté correctamente conectado en EmailJS

---

## 🎯 Siguiente Paso

Una vez que el formulario funcione localmente:
1. Ejecuta `npm run build` nuevamente
2. Sube la carpeta `dist` a Hostinger
3. El formulario funcionará en producción también

---

¿Necesitas ayuda con algún paso específico? Avísame.


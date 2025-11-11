# 🔧 Solución: Error 500 en Vercel

Si estás viendo un error **500: INTERNAL_SERVER_ERROR** o **FUNCTION_INVOCATION_FAILED** en Vercel, sigue estos pasos:

## 🔍 Paso 1: Verificar los Logs en Vercel

1. **Ve a tu proyecto en Vercel Dashboard**
2. **Haz clic en "Deployments"** (en el menú superior)
3. **Selecciona el último deploy** (el que está fallando)
4. **Haz clic en "Functions"** (en la parte inferior)
5. **Busca el archivo** `api/contact` o similar
6. **Haz clic en los logs** para ver el error específico

**Los logs te dirán exactamente qué está fallando.**

---

## ✅ Paso 2: Verificar Variables de Entorno

El error más común es que las **variables de entorno no están configuradas** en Vercel.

### Cómo verificar y configurar:

1. **En Vercel Dashboard**, ve a tu proyecto
2. **Settings** → **Environment Variables**
3. **Verifica que tengas estas 4 variables:**

   ```
   RESEND_API_KEY = re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   RESEND_FROM_EMAIL = onboarding@resend.dev
   RESEND_TO_EMAIL = tu_email@gmail.com
   PUBLIC_SITE_URL = https://tu-proyecto.vercel.app
   ```

4. **Para cada variable, verifica:**
   - ✅ El nombre está escrito **exactamente** como se muestra arriba (sin espacios)
   - ✅ El valor está correcto
   - ✅ Está aplicada a **Production, Preview, Development** (marca las 3)

5. **Si falta alguna variable:**
   - Haz clic en **"Add"**
   - Ingresa el nombre y valor
   - Marca **Production, Preview, Development**
   - Haz clic en **"Save"**

---

## 🔄 Paso 3: Redeploy Después de Cambiar Variables

**IMPORTANTE**: Después de agregar o cambiar variables de entorno, debes hacer **Redeploy**:

1. **Ve a "Deployments"**
2. **Haz clic en los tres puntos (⋯)** del último deploy
3. **Selecciona "Redeploy"**
4. **Espera a que termine el build**

---

## 🐛 Paso 4: Errores Comunes y Soluciones

### Error: "RESEND_API_KEY no está configurada"

**Solución:**
- Verifica que `RESEND_API_KEY` esté en Environment Variables
- Asegúrate de que el nombre sea exactamente `RESEND_API_KEY` (sin espacios)
- Verifica que la API Key sea válida (debe empezar con `re_`)
- Haz Redeploy después de agregarla

### Error: "Invalid API Key" o "Unauthorized"

**Solución:**
- Verifica que copiaste la API Key completa desde Resend
- Asegúrate de que no haya espacios antes o después de la API Key
- Verifica que la API Key esté activa en [Resend Dashboard](https://resend.com/api-keys)

### Error: "Domain not verified" o "Invalid from address"

**Solución:**
- Si usas `onboarding@resend.dev`, esto no debería pasar
- Verifica que `RESEND_FROM_EMAIL` sea exactamente `onboarding@resend.dev`
- Si usas tu propio dominio, debes verificar el dominio en Resend primero

### Error: "Build Failed"

**Solución:**
- Revisa los logs del build en Vercel
- Verifica que todas las dependencias estén en `package.json`
- Prueba hacer build local: `npm run build`

---

## 📋 Checklist de Verificación

Antes de reportar el error, verifica:

- [ ] Variables de entorno configuradas en Vercel (4 variables)
- [ ] Variables aplicadas a Production, Preview, Development
- [ ] Redeploy realizado después de cambiar variables
- [ ] Logs de Vercel revisados (Deployments → Functions → logs)
- [ ] API Key de Resend es válida y activa
- [ ] Build local funciona (`npm run build`)

---

## 🔗 Cómo Ver los Logs en Vercel (Paso a Paso)

1. **Abre Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Selecciona tu proyecto**
3. **Haz clic en "Deployments"** (arriba)
4. **Haz clic en el último deploy** (el más reciente)
5. **Desplázate hacia abajo** hasta ver "Functions"
6. **Busca** `api/contact` o el nombre de tu función
7. **Haz clic en "View Function Logs"** o en el nombre de la función
8. **Verás los logs** con el error específico

---

## 💡 Consejos

- **Los logs son tu mejor amigo**: Siempre revisa los logs primero
- **Las variables de entorno son sensibles**: Verifica que no haya espacios extra
- **Redeploy siempre**: Después de cambiar variables, haz redeploy
- **Prueba localmente primero**: Si funciona local, el problema es la configuración en Vercel

---

## 🆘 Si Nada Funciona

1. **Copia el error exacto** de los logs de Vercel
2. **Verifica que todas las variables estén configuradas**
3. **Haz un nuevo deploy** desde cero:
   - Ve a Settings → General
   - Haz clic en "Remove Project" (esto NO borra tu código)
   - Vuelve a importar el proyecto

---

**¿Necesitas más ayuda?** Comparte el error específico de los logs de Vercel y te ayudo a solucionarlo.


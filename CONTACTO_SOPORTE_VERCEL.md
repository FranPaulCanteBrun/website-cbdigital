# 📞 Información para Contactar Soporte de Vercel

## 🔍 Problema

Error al desplegar proyecto Astro en Vercel:
```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/var/task/dist/server/entry.mjs'
```

## 📋 Información del Proyecto

### Versiones
- **Astro**: 5.15.4
- **@astrojs/vercel**: 9.0.0
- **Node.js**: 22.x (configurado en Vercel)

### Configuración

**astro.config.mjs:**
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'server',
  adapter: vercel(),
  build: { assets: 'assets' },
});
```

**vercel.json:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "geolocation=(), microphone=(), camera=()"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.resend.com; frame-ancestors 'none';"
        }
      ]
    }
  ]
}
```

### Configuración en Vercel

- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist` (por defecto de Astro)
- **Install Command**: `npm install`
- **Root Directory**: `./`
- **Node.js Version**: 22.x

### Estructura Generada

El adapter genera correctamente:
```
.vercel/output/
  functions/
    _render.func/
      dist/
        server/
          entry.mjs ✅ (existe)
      .vc-config.json (handler: "dist/server/entry.mjs")
```

### Logs del Build

El build local muestra:
```
[@astrojs/vercel] Bundling function
[@astrojs/vercel] Copying static files to .vercel/output/static
```

### Logs de Runtime en Vercel

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/var/task/dist/server/entry.mjs'
```

## 🔍 Análisis

1. ✅ El build local funciona correctamente
2. ✅ El archivo `entry.mjs` se genera en la ubicación correcta
3. ✅ El `.vc-config.json` apunta correctamente a `dist/server/entry.mjs`
4. ❌ Vercel no encuentra el archivo en runtime

## 💡 Posibles Causas

1. Vercel no está usando correctamente la estructura `.vercel/output`
2. Problema de compatibilidad entre Astro 5.15.4 y @astrojs/vercel 9.0.0
3. Bug en el adapter de Vercel
4. Configuración incorrecta en el proyecto de Vercel

## 📝 Pasos Ya Intentados

1. ✅ Verificar que Framework Preset sea "Astro"
2. ✅ Verificar Output Directory
3. ✅ Actualizar versiones a las más recientes
4. ✅ Simplificar configuración del adapter
5. ✅ Verificar que `vercel.json` sea válido
6. ✅ Verificar que el build local funcione

## 🆘 Solicitud de Ayuda

¿Pueden revisar por qué Vercel no encuentra el archivo `entry.mjs` que el adapter de Astro genera correctamente?

**Deployment ID**: `dpl_5uN36Qmupnh7JhBNdyBYFJTvWosv`
**Project ID**: `prj_PAsO0oFxltnT8GYoZwOYbagIl0uO`


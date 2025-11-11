# 🔧 Solución: Error "Cannot find module entry.mjs" en Vercel

## 🔍 Problema

El error `Cannot find module '/var/task/dist/server/entry.mjs'` indica que Vercel no está encontrando el archivo de entrada del servidor después del build.

## ✅ Solución Paso a Paso

### Paso 1: Verificar Configuración del Proyecto en Vercel

1. **Ve a tu proyecto en Vercel Dashboard**
2. **Settings** → **General**
3. **Verifica la configuración del Build:**

   - **Framework Preset**: Debe ser `Astro` (o `Other` si no aparece Astro)
   - **Build Command**: Debe ser `npm run build` o `astro build`
   - **Output Directory**: Debe estar **VACÍO** o `.vercel/output` (el adapter lo maneja automáticamente)
   - **Install Command**: `npm install` (o dejar por defecto)
   - **Root Directory**: `./` (dejar por defecto)

4. **⚠️ IMPORTANTE**: Si "Output Directory" tiene algún valor, **BÓRRALO** y déjalo vacío

### Paso 2: Limpiar y Rehacer el Deploy

1. **En Vercel Dashboard**, ve a **Deployments**
2. **Elimina el deploy fallido** (opcional, pero recomendado):
   - Haz clic en los tres puntos (⋯) del deploy
   - Selecciona "Delete"
3. **Haz un nuevo deploy**:
   - Haz clic en los tres puntos (⋯) del último commit
   - Selecciona "Redeploy"
   - O simplemente haz un nuevo push a GitHub

### Paso 3: Verificar que el Código Esté Actualizado

Asegúrate de que tu código en GitHub tenga la configuración correcta:

1. **Verifica que `astro.config.mjs` tenga:**
   ```javascript
   adapter: vercel({
     functionPerRoute: false,
   }),
   ```

2. **Haz commit y push si es necesario:**
   ```bash
   git add astro.config.mjs
   git commit -m "Fix Vercel adapter configuration"
   git push
   ```

### Paso 4: Verificar Variables de Entorno

Aunque no es la causa directa del error, asegúrate de que las variables estén configuradas:

1. **Settings** → **Environment Variables**
2. Verifica que tengas:
   - `RESEND_API_KEY`
   - `RESEND_FROM_EMAIL`
   - `RESEND_TO_EMAIL`
   - `PUBLIC_SITE_URL`

### Paso 5: Verificar Logs del Build

1. **Ve a Deployments**
2. **Selecciona el nuevo deploy**
3. **Revisa los logs del build** (no los de runtime)
4. **Verifica que el build termine exitosamente**

---

## 🐛 Si el Problema Persiste

### Opción A: Recrear el Proyecto en Vercel

1. **En Vercel Dashboard**, ve a tu proyecto
2. **Settings** → **General**
3. **Desplázate hacia abajo** hasta "Danger Zone"
4. **Haz clic en "Remove Project"** (esto NO borra tu código en GitHub)
5. **Vuelve a importar el proyecto**:
   - "Add New..." → "Project"
   - Selecciona tu repositorio
   - **Configura correctamente** (ver Paso 1)
   - Haz deploy

### Opción B: Verificar Versiones

Asegúrate de que las versiones sean compatibles:

```json
{
  "dependencies": {
    "@astrojs/vercel": "^9.0.0",
    "astro": "^5.15.4"
  }
}
```

Si tienes versiones diferentes, actualiza:

```bash
npm install @astrojs/vercel@latest astro@latest
```

### Opción C: Usar Modo Edge (Alternativa)

Si el problema persiste, puedes intentar usar el modo Edge:

```javascript
// astro.config.mjs
adapter: vercel({
  mode: 'edge',
}),
```

**Nota**: El modo Edge tiene algunas limitaciones, pero puede funcionar mejor en algunos casos.

---

## 📋 Checklist de Verificación

Antes de reportar el problema, verifica:

- [ ] Output Directory está vacío en Vercel
- [ ] Build Command es `npm run build`
- [ ] Framework Preset es `Astro` o `Other`
- [ ] Código actualizado en GitHub con `astro.config.mjs` correcto
- [ ] Nuevo deploy realizado después de los cambios
- [ ] Logs del build muestran éxito
- [ ] Versiones de `@astrojs/vercel` y `astro` son compatibles

---

## 🔗 Recursos

- [Documentación de Astro + Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Documentación de Vercel Adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/)

---

**¿Sigue fallando?** Comparte:
1. Los logs del BUILD (no runtime)
2. La configuración de tu proyecto en Vercel (Settings → General)
3. El contenido de tu `astro.config.mjs`


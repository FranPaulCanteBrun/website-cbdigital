# 🔧 Solución Definitiva: Error "Cannot find module entry.mjs"

## 🔍 Diagnóstico

El error `Cannot find module '/var/task/dist/server/entry.mjs'` indica que Vercel no está encontrando el archivo de entrada generado por el adapter de Astro.

**Causa probable**: Vercel no está detectando correctamente que es un proyecto Astro, o la configuración del proyecto en Vercel está incorrecta.

## ✅ Solución Paso a Paso

### Paso 1: Verificar Configuración en Vercel (CRÍTICO)

1. **Ve a tu proyecto en Vercel Dashboard**
2. **Settings** → **General**
3. **Verifica EXACTAMENTE estas configuraciones:**

   ```
   Framework Preset: Astro
   Build Command: npm run build
   Output Directory: (DEBE ESTAR VACÍO - NO poner nada)
   Install Command: npm install
   Root Directory: ./
   Node.js Version: 22.x (o 20.x)
   ```

4. **⚠️ MUY IMPORTANTE**: 
   - Si "Output Directory" tiene CUALQUIER valor (incluso `.vercel/output`), **BÓRRALO COMPLETAMENTE**
   - El adapter de Astro maneja esto automáticamente
   - Si hay algo escrito ahí, Vercel intentará usar esa ruta en lugar de la generada por el adapter

### Paso 2: Verificar que el Framework Preset sea "Astro"

1. **En Settings → General**, busca "Framework Preset"
2. **Si dice "Other" o algo diferente a "Astro":**
   - Haz clic en el dropdown
   - Selecciona **"Astro"** explícitamente
   - Guarda los cambios

### Paso 3: Verificar Node.js Version

1. **En Settings → General**, busca "Node.js Version"
2. **Asegúrate de que sea 22.x o 20.x**
3. Si no está configurado, selecciona **22.x**

### Paso 4: Eliminar y Recrear el Proyecto (Si los pasos anteriores no funcionan)

1. **Settings** → **General** → **Danger Zone**
2. **"Remove Project"** (esto NO borra tu código en GitHub)
3. **Vuelve a importar el proyecto:**
   - "Add New..." → "Project"
   - Selecciona tu repositorio
   - **IMPORTANTE**: Cuando Vercel te pregunte por la configuración:
     - Framework Preset: **Selecciona "Astro"** (NO "Other")
     - Build Command: `npm run build`
     - Output Directory: **DÉJALO VACÍO** (NO pongas nada)
     - Install Command: `npm install`
   - Haz clic en "Deploy"

### Paso 5: Verificar Logs del Build

1. **Ve a Deployments**
2. **Selecciona el deploy**
3. **Revisa los logs del BUILD** (no los de runtime)
4. **Busca estas líneas:**
   ```
   [@astrojs/vercel] Bundling function
   [@astrojs/vercel] Copying static files to .vercel/output/static
   ```
   Si ves estas líneas, el build está funcionando correctamente.

---

## 🐛 Si el Problema Persiste

### Opción A: Verificar que el Código Esté en GitHub

Asegúrate de que tu código con la configuración correcta esté en GitHub:

```bash
git status
git add .
git commit -m "Fix Vercel configuration"
git push
```

### Opción B: Verificar Versiones

Asegúrate de tener versiones compatibles:

```bash
npm install @astrojs/vercel@latest astro@latest
```

Luego haz commit y push.

### Opción C: Contactar Soporte de Vercel

Si nada funciona, puede ser un bug del adapter o de Vercel. Contacta soporte con:
- Los logs del BUILD (no runtime)
- La configuración de tu proyecto (Settings → General)
- El contenido de `astro.config.mjs`
- El contenido de `package.json`

---

## 📋 Checklist Final

Antes de reportar el problema, verifica:

- [ ] Framework Preset es **"Astro"** (no "Other")
- [ ] Output Directory está **COMPLETAMENTE VACÍO**
- [ ] Build Command es `npm run build`
- [ ] Node.js Version es 22.x o 20.x
- [ ] Código actualizado en GitHub
- [ ] Logs del BUILD muestran `[@astrojs/vercel] Bundling function`
- [ ] Proyecto recreado desde cero si es necesario

---

## 💡 Nota Importante

El problema **NO** está en tu código. El código está correcto. El problema está en la **configuración del proyecto en Vercel**, específicamente:

1. **Framework Preset** debe ser "Astro"
2. **Output Directory** debe estar VACÍO

Si estos dos puntos están correctos, el problema debería resolverse.


# 🚀 Configuración de Seguridad en Hostinger

## 📋 Pasos Rápidos

### 1. Subir `.htaccess` ⚠️ **OBLIGATORIO**

1. Accede al **File Manager** de Hostinger
2. Navega a `public_html/` (raíz de tu sitio)
3. Sube el archivo `public/.htaccess` desde tu proyecto
4. Asegúrate de que el archivo se llame exactamente `.htaccess` (con el punto al inicio)
5. Verifica permisos: `644` o `rw-r--r--`

**Ubicación del archivo en tu proyecto:**
```
web_innovatec/public/.htaccess
```

**Ubicación en Hostinger:**
```
public_html/.htaccess
```

### 2. Activar SSL/HTTPS 🔒 **CRÍTICO**

1. Ve a **Panel de Control Hostinger** → **SSL**
2. Activa **Let's Encrypt SSL** (gratis y automático)
3. Espera 5-10 minutos a que se active
4. Verifica que `https://cbdigital.com.ar` funcione

**Después de activar SSL:**
1. Edita `.htaccess` en Hostinger
2. Descomenta estas líneas (quita el `#`):
   ```apache
   # Forzar HTTPS
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   
   # HSTS
   Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
   ```

### 3. Verificar que Funciona ✅

**Herramientas de Verificación:**

1. **Security Headers:**
   ```
   https://securityheaders.com/?q=https://cbdigital.com.ar
   ```
   Deberías obtener al menos **B** (preferiblemente **A**)

2. **Mozilla Observatory:**
   ```
   https://observatory.mozilla.org/analyze/cbdigital.com.ar
   ```

3. **Desde Terminal:**
   ```bash
   curl -I https://cbdigital.com.ar
   ```
   Deberías ver headers como:
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Content-Security-Policy: ...`

### 4. Verificar Protección de Archivos 🔒

Intenta acceder a estos URLs (deberían dar **403 Forbidden**):
- `https://cbdigital.com.ar/.env`
- `https://cbdigital.com.ar/.git`
- `https://cbdigital.com.ar/package.json`

---

## ⚠️ Problemas Comunes

### El `.htaccess` no funciona

**Causas posibles:**
1. El archivo no está en `public_html/`
2. El archivo tiene nombre incorrecto (debe ser `.htaccess` exactamente)
3. Hostinger tiene deshabilitado `mod_headers` o `mod_rewrite` (contacta soporte)

**Solución:**
- Verifica la ubicación del archivo
- Contacta soporte de Hostinger si persiste

### Los headers no aparecen

**Causas posibles:**
1. `mod_headers` no está habilitado
2. El `.htaccess` tiene errores de sintaxis

**Solución:**
- Revisa la sintaxis del `.htaccess`
- Contacta soporte de Hostinger para habilitar `mod_headers`

### SSL no funciona

**Causas posibles:**
1. DNS no está configurado correctamente
2. El certificado aún no se ha activado

**Solución:**
- Espera 10-15 minutos después de activar SSL
- Verifica DNS con `dig cbdigital.com.ar` o `nslookup cbdigital.com.ar`

---

## 📝 Checklist Final

Antes de considerar que todo está configurado:

- [ ] `.htaccess` subido a `public_html/`
- [ ] SSL/HTTPS activado y funcionando
- [ ] Headers de seguridad verificados en securityheaders.com
- [ ] Archivos sensibles bloqueados (403 Forbidden)
- [ ] HTTPS forzado (redirige HTTP a HTTPS)
- [ ] Sitio funciona correctamente con todas las configuraciones

---

## 📞 Soporte

Si tienes problemas:
1. Revisa `SEGURIDAD_WEB.md` para detalles técnicos
2. Contacta soporte de Hostinger desde el panel
3. Verifica logs de error en Hostinger

---

**Última actualización:** Noviembre 2025


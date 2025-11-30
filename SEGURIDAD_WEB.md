# 🔒 Guía de Seguridad Web - CB Digital

## 📋 Índice
1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Configuración de Hostinger](#configuración-de-hostinger)
3. [Headers de Seguridad](#headers-de-seguridad)
4. [Protección del Formulario](#protección-del-formulario)
5. [Content Security Policy (CSP)](#content-security-policy-csp)
6. [Recomendaciones Adicionales](#recomendaciones-adicionales)
7. [Checklist de Seguridad](#checklist-de-seguridad)
8. [Monitoreo y Mantenimiento](#monitoreo-y-mantenimiento)

---

## 🎯 Resumen Ejecutivo

Este documento detalla todas las medidas de seguridad implementadas en el sitio web de CB Digital y las configuraciones necesarias en Hostinger.

### Estado Actual de Seguridad: ✅ **ALTO**

- ✅ Headers de seguridad configurados
- ✅ Protección contra XSS
- ✅ Protección contra clickjacking
- ✅ Validación y sanitización de inputs
- ✅ Honeypot anti-spam
- ✅ Rate limiting
- ✅ CSP configurado
- ✅ Protección de archivos sensibles

---

## 🖥️ Configuración de Hostinger

### 1. Subir archivo `.htaccess`

El archivo `.htaccess` ya está creado en `public/.htaccess`. Debes subirlo a la raíz de tu sitio en Hostinger.

**Ubicación en Hostinger:**
```
/public_html/.htaccess
```

**Pasos:**
1. Accede al File Manager de Hostinger
2. Navega a `public_html/`
3. Sube el archivo `.htaccess` desde `public/.htaccess`
4. Asegúrate de que el archivo tenga permisos `644`

### 2. Configurar SSL/HTTPS

**⚠️ CRÍTICO:** Activa SSL en Hostinger para habilitar HTTPS.

**Pasos:**
1. Ve a **Panel de Control Hostinger** → **SSL**
2. Activa **Let's Encrypt SSL** (gratis)
3. Espera a que se active (puede tardar unos minutos)
4. Una vez activo, descomenta estas líneas en `.htaccess`:
   ```apache
   # Forzar HTTPS
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   
   # HSTS
   Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
   ```

### 3. Configurar Dominio

Asegúrate de que tu dominio esté correctamente configurado:

- **DNS A Record:** Apunta a la IP de Hostinger
- **DNS CNAME:** Para subdominios (si aplica)
- **Verificar:** Usa herramientas como `dig` o `nslookup`

---

## 🛡️ Headers de Seguridad

### Headers Implementados

| Header | Valor | Propósito |
|--------|-------|-----------|
| `X-Frame-Options` | `DENY` | Previene clickjacking |
| `X-Content-Type-Options` | `nosniff` | Previene MIME sniffing |
| `X-XSS-Protection` | `1; mode=block` | Protección XSS (navegadores antiguos) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Controla qué información se envía en referrer |
| `Permissions-Policy` | `geolocation=(), microphone=(), camera=()` | Desactiva características del navegador |
| `Content-Security-Policy` | Ver sección CSP | Controla qué recursos se pueden cargar |
| `Strict-Transport-Security` | `max-age=31536000` | Fuerza HTTPS (solo con SSL activo) |

### Verificar Headers

Puedes verificar que los headers estén funcionando usando:

**Herramientas Online:**
- https://securityheaders.com/
- https://observatory.mozilla.org/

**Desde Terminal:**
```bash
curl -I https://cbdigital.com.ar
```

---

## 📝 Protección del Formulario

### Medidas Implementadas

#### 1. **Validación con Zod**
- ✅ Validación de tipos
- ✅ Validación de longitud
- ✅ Validación de formato (email)
- ✅ Sanitización automática

#### 2. **Sanitización Mejorada**
```typescript
// Protección contra:
- XSS (Cross-Site Scripting)
- Inyección SQL (preventiva)
- Event handlers maliciosos
- Caracteres de control
- Protocolos peligrosos (javascript:, data:, vbscript:)
```

#### 3. **Honeypot**
- Campo oculto `website` que los bots suelen completar
- Si está lleno, el formulario se rechaza silenciosamente

#### 4. **Rate Limiting**
- Límite de 3 envíos por 5 minutos
- Almacenado en `localStorage`
- Previene spam y ataques de fuerza bruta

#### 5. **Validación del Lado del Cliente y Servidor**
- Validación en el navegador (UX)
- Validación en el servidor (seguridad)

### Mejoras Recomendadas (Futuro)

1. **reCAPTCHA v3** (Google)
   - Detección invisible de bots
   - No requiere interacción del usuario

2. **CSRF Token**
   - Protección contra Cross-Site Request Forgery
   - Útil si implementas autenticación

3. **IP Blocking**
   - Bloquear IPs sospechosas
   - Requiere backend más complejo

---

## 🔐 Content Security Policy (CSP)

### CSP Actual

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https:;
connect-src 'self' https://api.emailjs.com https://api.resend.com;
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
upgrade-insecure-requests;
```

### Explicación

- **`default-src 'self'`**: Solo recursos del mismo origen por defecto
- **`script-src`**: Permite scripts propios + EmailJS CDN + Google Fonts
- **`style-src`**: Permite estilos propios + Google Fonts
- **`connect-src`**: Permite conexiones a EmailJS y Resend APIs
- **`frame-ancestors 'none'`**: No permite que el sitio sea embebido
- **`upgrade-insecure-requests`**: Fuerza HTTPS para recursos HTTP

### ⚠️ Nota sobre `unsafe-inline`

Actualmente usamos `unsafe-inline` porque:
- Astro genera estilos inline
- EmailJS requiere scripts inline

**Mejora Futura:** Implementar nonces o hashes para eliminar `unsafe-inline`.

---

## 🔒 Protección de Archivos

### Archivos Bloqueados

El `.htaccess` bloquea acceso a:
- Archivos que empiezan con `.` (`.env`, `.git`, etc.)
- Archivos `.env`, `.git`, `.log`, `.md`, `.json`, `.lock`
- Directorios sin `index.html`

### Verificar Protección

Intenta acceder a:
```
https://cbdigital.com.ar/.env
https://cbdigital.com.ar/.git
https://cbdigital.com.ar/package.json
```

Deberían devolver **403 Forbidden**.

---

## 📊 Recomendaciones Adicionales

### 1. **Backups Regulares**

**Hostinger ofrece backups automáticos**, pero también puedes:
- Hacer backup manual antes de cambios importantes
- Guardar backups en otro lugar (Google Drive, Dropbox)

### 2. **Monitoreo de Seguridad**

**Herramientas Recomendadas:**
- **Uptime Robot**: Monitoreo de disponibilidad
- **Google Search Console**: Alertas de seguridad
- **Sucuri**: Escaneo de malware (pago)

### 3. **Actualizaciones**

- ✅ Mantén Astro y dependencias actualizadas
- ✅ Revisa `npm audit` regularmente
- ✅ Actualiza Node.js cuando sea necesario

### 4. **Configuración de Email**

**EmailJS:**
- ✅ Usa variables de entorno para API keys
- ✅ Limita el uso del servicio
- ✅ Monitorea emails recibidos

### 5. **Logs y Auditoría**

**Hostinger proporciona logs de acceso:**
- Revisa logs regularmente
- Busca patrones sospechosos
- Monitorea intentos de acceso a archivos bloqueados

---

## ✅ Checklist de Seguridad

### Configuración Inicial

- [ ] Subir `.htaccess` a Hostinger
- [ ] Activar SSL/HTTPS en Hostinger
- [ ] Verificar que HTTPS funciona
- [ ] Descomentar reglas de HTTPS en `.htaccess`
- [ ] Verificar headers en securityheaders.com
- [ ] Actualizar `robots.txt` con URL correcta
- [ ] Verificar que archivos sensibles están bloqueados

### Verificación de Seguridad

- [ ] Headers de seguridad funcionando
- [ ] CSP no bloquea recursos necesarios
- [ ] Formulario valida correctamente
- [ ] Honeypot funciona
- [ ] Rate limiting funciona
- [ ] HTTPS forzado (con SSL activo)
- [ ] Archivos sensibles bloqueados

### Mantenimiento Regular

- [ ] Revisar logs mensualmente
- [ ] Actualizar dependencias trimestralmente
- [ ] Verificar SSL no expirado
- [ ] Revisar emails recibidos del formulario
- [ ] Probar formulario periódicamente

---

## 🔍 Monitoreo y Mantenimiento

### Herramientas de Verificación

1. **Security Headers**
   ```
   https://securityheaders.com/?q=https://cbdigital.com.ar
   ```
   
   2. **Mozilla Observatory**
   ```
   https://observatory.mozilla.org/analyze/cbdigital.com.ar
   ```
   
   3. **SSL Labs**
   ```
   https://www.ssllabs.com/ssltest/analyze.html?d=cbdigital.com.ar
   ```
   
   4. **Google PageSpeed Insights**
   ```
   https://pagespeed.web.dev/?url=https://cbdigital.com.ar
   ```

### Alertas Recomendadas

Configura alertas para:
- ⚠️ Caída del sitio (Uptime Robot)
- ⚠️ Cambios en archivos críticos (GitHub)
- ⚠️ Intentos de acceso sospechosos (Hostinger logs)
- ⚠️ Exceso de emails del formulario (EmailJS)

---

## 🚨 Respuesta a Incidentes

### Si Detectas un Problema

1. **Inmediato:**
   - Cambia todas las contraseñas
   - Revisa logs de acceso
   - Verifica integridad de archivos

2. **Corto Plazo:**
   - Restaura desde backup si es necesario
   - Bloquea IPs sospechosas en `.htaccess`
   - Notifica a usuarios si hay fuga de datos

3. **Largo Plazo:**
   - Analiza cómo ocurrió el incidente
   - Implementa medidas preventivas adicionales
   - Documenta lecciones aprendidas

---

## 📞 Contacto y Soporte

Si necesitas ayuda con la seguridad:

- **Hostinger Soporte**: Desde el panel de control
- **Documentación Astro**: https://docs.astro.build
- **OWASP Top 10**: https://owasp.org/www-project-top-ten/

---

## 📝 Notas Finales

- Este documento debe actualizarse cuando se hagan cambios de seguridad
- Revisa la configuración después de cada actualización importante
- La seguridad es un proceso continuo, no un estado

**Última actualización:** Noviembre 2025


/**
 * Sitemap XML - CB Digital
 * 
 * Genera sitemap.xml automáticamente con soporte multiidioma.
 */

import type { APIRoute } from 'astro';

const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://cbdigital.com.ar';

const pages = [
  '',
  '/servicios',
  '/proyectos',
  '/testimonios',
  '/sobre-mi',
  '/contacto',
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${siteUrl}${page}" />
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}${page}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${page}" />
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};


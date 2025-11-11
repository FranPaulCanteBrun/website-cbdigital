import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C_ZiHlav.mjs';
import { manifest } from './manifest_Do5wSWGT.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.astro.mjs');
const _page2 = () => import('./pages/contacto.astro.mjs');
const _page3 = () => import('./pages/proyectos.astro.mjs');
const _page4 = () => import('./pages/servicios.astro.mjs');
const _page5 = () => import('./pages/sitemap.xml.astro.mjs');
const _page6 = () => import('./pages/sobre-mi.astro.mjs');
const _page7 = () => import('./pages/testimonios.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/contact.ts", _page1],
    ["src/pages/contacto.astro", _page2],
    ["src/pages/proyectos.astro", _page3],
    ["src/pages/servicios.astro", _page4],
    ["src/pages/sitemap.xml.ts", _page5],
    ["src/pages/sobre-mi.astro", _page6],
    ["src/pages/testimonios.astro", _page7],
    ["src/pages/index.astro", _page8]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6753cff8-c11e-4b91-9af6-7deed8127351",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

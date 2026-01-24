import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://matigrojas.github.io',
  base: '/',
  // Si añadiste redirecciones para el multi-idioma, van aquí
  redirects: {
    '/': '/es',
  },
});
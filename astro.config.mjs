import { defineConfig } from 'astro/config';

export default defineConfig({
  // URL principal de tu sitio
  site: 'https://matigrojas.github.io',
  
  // Si el repo se llama 'matigrojas.github.io', base debe ser '/' o no estar.
  // Solo usarías base: '/nombre-repo' si el repositorio tuviera otro nombre.
  base: '/', 
});

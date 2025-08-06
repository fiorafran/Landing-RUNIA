// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  
  // Optimizaciones de build
  build: {
    // Generar assets optimizados
    assets: '_astro',
    // Minificar HTML
    inlineStylesheets: 'auto',
  },
  
  // Optimizaciones de SEO
  site: 'https://chatbotsia.com',
  trailingSlash: 'never',
  
  // Optimizaciones de desarrollo
  devToolbar: {
    enabled: true,
  },
  
  // Configuración de output
  output: 'static',
  
  // Optimizaciones de prefetch
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  }
});

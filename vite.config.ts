import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'assets/images/*.png', 'assets/images/*.jpg', 'assets/images/*.svg', 'data/*.json'],
      manifest: {
        name: 'GRE Coder - Guía de Respuesta en Caso de Emergencia',
        short_name: 'GRE Coder',
        description: 'Decodificador y Consulta Rápida GRE 2024 / ERG para Materiales Peligrosos',
        theme_color: '#ea580c',
        background_color: '#f8fafc',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192 512x512',
            type: 'image/svg+xml'
          },
          {
            src: 'assets/images/ic_erg.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,jpg,html}']
      }
    })
  ]
});

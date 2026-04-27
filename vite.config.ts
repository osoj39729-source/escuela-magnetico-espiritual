import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  // Soporte para múltiples API keys separadas por coma
  const geminiKeys = env.GEMINI_API_KEY || '';
  return {
    plugins: [
      react(), 
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: { enabled: true },
        manifest: {
          name: 'Escuela Magnetico-Espiritual de la Comuna Universal',
          short_name: 'EMECU',
          description: 'Plataforma educativa de la Escuela Magnetico-Espiritual de la Comuna Universal',
          theme_color: '#0f172a',
          background_color: '#0f172a',
          display: 'standalone',
          icons: [
            {
              src: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(geminiKeys),
      'process.env.API_KEY': JSON.stringify(geminiKeys),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            motion: ['motion/react'],
            pdf: ['jspdf'],
          },
        },
      },
    },
    server: {
      host: true,
      open: true,
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});

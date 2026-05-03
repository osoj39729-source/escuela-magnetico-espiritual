import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.emecu.maestro.trincado',
  appName: 'Escuela Magnetico-Espiritual de la Comuna Universal',
  webDir: 'dist',
  server: {
    url: 'https://maestro-trincado.vercel.app',
    cleartext: true
  }
};

export default config;

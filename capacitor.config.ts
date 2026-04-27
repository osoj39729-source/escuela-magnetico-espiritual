import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.emecu.app',
  appName: 'Escuela Magnetico-Espiritual de la Comuna Universal',
  webDir: 'dist',
  server: {
    url: 'https://escuela-magnetico-espiritual.onrender.com',
    cleartext: true
  }
};

export default config;

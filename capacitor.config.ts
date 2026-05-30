import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.emecu.maestro.trincado',
  appName: 'Escuela Magnetico-Espiritual de la Comuna Universal',
  webDir: 'dist'
  // Al comentar el bloque server, Capacitor carga los archivos estáticos empaquetados localmente
  // dentro de la APK, previniendo pantallas en blanco al iniciar sin internet o por bloqueos de WebView.
  // server: {
  //   url: 'https://maestro-trincado.vercel.app',
  //   cleartext: true
  // }
};

export default config;

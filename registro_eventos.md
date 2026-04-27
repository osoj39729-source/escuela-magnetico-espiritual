<!--
INSTRUCCIÓN PARA IAs: Antes de interactuar, leer este historial.
Documentar todo nuevo cambio al final de este archivo detallando la fecha, los archivos modificados y el motivo del cambio. Esto actúa como la "caja negra" del proyecto.
-->

# Registro de Eventos - Cátedra Maestro Joaquín Trincado

Este documento registra todas las modificaciones importantes, decisiones arquitectónicas y eventos de mantenimiento del proyecto.

## [2026-04-27] - Inicio del Plan de Evolución
- **Motivo**: El usuario aprobó el plan de modernización para soportar 1 millón de usuarios, convertir la web en App móvil (Capacitor) y crear un rotador de API Keys.
- **Archivos modificados**: Creación de este archivo `registro_eventos.md`.
## [2026-04-27] - Inicio del Plan de Evolución
- **Motivo**: El usuario aprobó el plan de modernización.
- **Siguiente paso**: Implementar el rotador de API Keys y migrar el servidor.

---

## [2026-04-27] - Fase 1: Rotador de API Keys inteligente completado
- **Motivo**: Implementar un sistema de rotación de claves que permita uso de múltiples API Keys de Gemini para respuestas casi instantáneas sin límite de cuota.
- **Archivos modificados**:
  - `src/services/geminiService.ts` → Función `loadApiKeys()` lee `GEMINI_API_KEY` del .env (soporta múltiples claves separadas por coma). Función `getNextApiKey()` ahora es pública (exportada).
  - `src/App.tsx` → Importa y usa `getNextApiKey()` en lugar de leer directamente `process.env`.
  - `src/get_indices.ts` → Importa y usa `getNextApiKey()`.
  - `.env` → Preparado para recibir `GEMINI_API_KEY=clave1,clave2,clave3`
- **Cómo agregar más claves**: Editar `.env` y separar las claves por coma. Ej: `GEMINI_API_KEY=AIzaSy..._key1,AIzaSy..._key2`
- **Comportamiento**: Si una clave supera su límite (error 429), el sistema espera 60s antes de reintentarla y usa la siguiente disponible automáticamente.

---

## [2026-04-27] - Fase 2: PWA + Configuración de Despliegue en Vercel
- **Motivo**: Convertir la app en Progressive Web App (instalable en celular) y preparar el despliegue en Vercel para soportar 1 millón de usuarios globales.
- **Archivos creados/modificados**:
  - `public/manifest.json` → Manifiesto PWA: permite instalar la app en Android/iOS desde el navegador como si fuera nativa.
  - `public/sw.js` → Service Worker: cachea la app para uso offline y acelera la carga en móviles.
  - `index.html` → Agregados meta tags PWA (viewport-fit, apple-mobile-web-app-capable, theme-color, manifest link).
  - `vite.config.ts` → Configurado `manualChunks` para dividir el bundle en partes más pequeñas (mejor carga en celulares).
  - `vercel.json` → Configuración de Vercel: SPA routing, headers de seguridad y caché.
  - `deploy.sh` / `DESPLEGAR_VERCEL.bat` → Scripts de despliegue automático (doble click en Windows).
- **Para desplegar**: Ejecutar `DESPLEGAR_VERCEL.bat` (necesita cuenta en vercel.com y hacer login con `vercel login` la primera vez).


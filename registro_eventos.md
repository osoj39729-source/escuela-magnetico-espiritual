<!--
INSTRUCCIÓN PARA IAs: Antes de interactuar, leer este historial.
Documentar todo nuevo cambio al final de este archivo detallando la fecha, los archivos modificados y el motivo del cambio. Esto actúa como la "caja negra" del proyecto.
-->

# Registro de Eventos - Cátedra Maestro Joaquín Trincado

Este documento registra todas las modificaciones importantes, decisiones arquitectónicas y eventos de mantenimiento del proyecto.

## [2026-04-29] - Actualización de API Key y Sincronización
- **Motivo**: Las llaves de Gemini anteriores estaban bloqueadas. Se procedió a clonar una copia limpia del repositorio y actualizar la llave maestra.
- **Cambios**:
  - Repositorio clonado en `C:\Users\58424\Desktop\proyectos 2`.
  - Reemplazo de la llave maestra `AIzaSyDO...` por la nueva `AIzaSyA1...` en `gemini-backend.ts`, `App.tsx` y `geminiService.ts`.
  - Creación de archivo `.env` con la nueva llave.
- **Resultado**: Sistema listo para operar con la nueva cuota de Google AI Studio.
## [2026-04-29] - Fix: Error de Renderizado (setPersistence)
- **Motivo**: El despliegue en Render fallaba con un error de referencia `setPersistence is not defined`.
- **Cambios**:
  - `src/App.tsx` → Se agregaron los imports faltantes `setPersistence` y `browserLocalPersistence` desde `./firebase`.
- **Resultado**: La aplicación ahora carga correctamente en entornos de producción (Render/Vercel).
## [2026-04-29] - Fix: Modelo Gemini 404
- **Motivo**: El modelo `gemini-1.5-flash-8b` devolvía error 404 en el despliegue de Render.
- **Cambios**:
  - `gemini-backend.ts` y `geminiService.ts` → Se actualizó el modelo a `gemini-1.5-flash` para mayor compatibilidad y estabilidad.
- **Resultado**: El Maestro Virtual vuelve a responder correctamente.


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


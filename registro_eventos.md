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
## [2026-04-29] - Fix Final: Estabilidad de Imagen y API
- **Motivo**: La imagen local fallaba en Render y el modelo presentaba errores 429/404.
- **Cambios**:
  - `App.tsx` → `TRINCADO_IMG` ahora usa el link directo de GitHub Raw para asegurar carga al 100%.
  - `geminiService.ts` → Migración de `v1beta` a `v1` para mayor estabilidad en el Puente Directo.
- **Resultado**: Imagen y AI funcionando de forma resiliente.
## [2026-04-29] - Blindaje de Seguridad y Variables de Entorno
- **Motivo**: Proteger la API Key en un repositorio público de GitHub para evitar revocaciones automáticas por parte de Google.
- **Cambios**:
  - `gemini-backend.ts` → Ahora solo carga llaves desde `process.env.GEMINI_API_KEY`.
  - `src/services/geminiService.ts` → El Puente Directo ahora usa `import.meta.env.VITE_GEMINI_API_KEY`.
  - `App.tsx` → Se eliminó la llave hardcodeada en la función de mensajes motivacionales.
  - `.gitignore` → Se añadió `.env` para evitar subidas accidentales de claves locales.
## [2026-04-29] - Versión 1.2.4: Logo Oficial EMECU
- **Motivo**: Ajustar el logo de la APK al escudo oficial (sin el número 14).
- **Cambios**:
  - `public/logo_catorce.svg` → Rediseñado con círculo negro, estrella blanca de 14 puntas, triángulo central con ancla y texto circular ("ESCUELA MAGNETICO-ESPIRITUAL COMUNA UNIVERSAL").
- **Resultado**: El logo ahora refleja exactamente el escudo que aparece en el intro de la aplicación.

## [2026-04-29] - Versión 1.2.2 y 1.2.3: Diseño Responsivo y Mejoras UX
- **Motivo**: Corregir problemas de desplazamiento en móviles y actualizar la identidad visual de la APK.
- **Cambios**:
  - `App.tsx` → Layout del aula actualizado para permitir scroll en móviles y aviso específico para bloqueos de Brave Browser en login Google.
  - `index.css` → Forzado de scroll vertical y optimización de tacto para móviles.
  - `public/logo_catorce.svg` → Creado el nuevo logo basado en los 7 colores de la bandera.
  - `manifest.json` y `index.html` → Actualizados para usar el nuevo logo y permitir cualquier orientación de pantalla.
- **Resultado**: Aula totalmente navegable en móviles. Identidad visual unificada. Mejor diagnóstico de errores de login.






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


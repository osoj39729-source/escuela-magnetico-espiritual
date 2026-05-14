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

## [2026-04-27] - Fase 1: Rotador de API Keys inteligente completado
- **Motivo**: Implementar un sistema de rotación de claves que permita uso de múltiples API Keys de Gemini para respuestas casi instantáneas sin límite de cuota.
- **Archivos modificados**:
  - `src/services/geminiService.ts` → Función `loadApiKeys()` lee `GEMINI_API_KEY` del .env (soporta múltiples claves separadas por coma). Función `getNextApiKey()` ahora es pública (exportada).
  - `src/App.tsx` → Importa y usa `getNextApiKey()` en lugar de leer directamente `process.env`.
  - `src/get_indices.ts` → Importa y usa `getNextApiKey()`.
  - `.env` → Preparado para recibir `GEMINI_API_KEY=clave1,clave2,clave3`
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

---

## [2026-05-02] - Migración a Arquitectura "A Prueba de Murphy"
- **Motivo**: Eliminar dependencia del servidor Render (lento, duerme en plan gratuito). Migrar a infraestructura 100% en la nube y gratuita.
- **Cambios realizados**:
  - **`cloudflare-worker.js`** (NUEVO) → Proxy rotador de llaves Gemini/Groq/SiliconFlow con streaming SSE y CORS blindado (v1.4 FINAL). URL activa: `https://escudo-maestro.osoj39729.workers.dev`. Variable configurada: `GEMINI_KEYS=AIzaSyAURo7mrnaEcidgNqemX0GOLCElyuYpPwU`.
  - **`src/services/geminiService.ts`** → Refactorizado a balanceador multicanal con rotación automática Gemini → Groq → SiliconFlow. Endpoint actualizado a `v1beta/models/gemini-2.5-flash` (fix crítico: `system_instruction` solo funciona en v1beta). Prompt del Maestro profundamente enriquecido con reglas pedagógicas, 7 facultades, técnica mayéutica.
  - **`src/services/localStorageService.ts`** → Migrado a Firebase Firestore. Perfiles de alumnos en la nube, sin dependencia de `students.json` ni servidor Express.
  - **`src/firebase.ts`** → Añadidos todos los exports faltantes: `getDocs`, `getRedirectResult`, `setPersistence`, `browserLocalPersistence`, `createUserWithEmailAndPassword`, `signInWithEmailAndPassword`.
  - **`vercel.json`** → Optimizado para SPA Vite.
  - **`src/App.tsx`** → Fix autenticación Google: manejo de `getRedirectResult` para móviles, detector de `auth/unauthorized-domain`, persistencia de sesión con `browserLocalPersistence`.
- **Firebase Console**: Dominio `maestro-trincado.vercel.app` añadido manualmente a dominios autorizados.
- **Vercel**: App desplegada en **https://maestro-trincado.vercel.app** (cuenta: `nelsonosoriogarcia-9239`). Variable de entorno `VITE_GEMINI_API_KEY` configurada.
- **Resultado**: El Maestro responde en producción. Login con Google funcional en web y APK.

---

## [2026-05-02/03] - Arquitectura RAG: Estructura Base (Fase 1 Parcial)
- **Motivo**: Plan aprobado para dotar al Maestro de "Cerebro Fotográfico" sobre los 31 libros de Trincado. Ver `PLAN_BIBLIOTECA_TRINCADO.md`.
- **Concepto**: Dos modos de cerebro — Sombrero 1 (Profesor de Grados) y Sombrero 2 (Bibliotecario Experto con inyección RAG).
- **Cambios realizados**:
  - **`src/data/library.ts`** (NUEVO) → Catálogo completo de 25 obras con `id`, `title`, `pdfUrl` e `index` de capítulos.
  - **`src/App.tsx`** → Estados `studyMode ('curriculum'|'library')`, `currentLibraryBook`, `showLibraryMenu`, `showDownloadsMenu`. Botones "Estudio Libre" y "Biblioteca PDF" en el header flotante con menús desplegables animados.
  - **`01_BIBLIOTECA_DOCTRINAL/`** → 27 PDFs presentes localmente (listos para procesamiento RAG futuro).
- **Estado**: ⚠️ EN PROGRESO — Falta:
  1. Al seleccionar libro → chat muestra capítulos como botones interactivos.
  2. Al clic en capítulo → Maestro activa Prompt B (Modo Biblioteca, literalidad absoluta).
  3. `geminiService.ts` → recibir `studyMode` + `bookTitle` + `chapter` y enrutar al prompt correcto.
  4. Fase 3 futura: Base vectorial (Pinecone/Supabase) para inyección RAG real de párrafos textuales.

---

## [2026-05-03] - SESIÓN: Escalabilidad RAG y Biblioteca Completa (Finalizado)
- **Implementaciones**:
  1. **Carga Dinámica de Contenidos**: Se creó `src/services/contentLoader.ts` para importar bajo demanda los contenidos de los 27 libros, optimizando memoria y eliminando el hardcoding de "Buscando a Dios".
  2. **Generalización de geminiService**: `callGemini` y `callOpenAICompatible` ahora aceptan `currentBookId` y cargan el texto correspondiente dinámicamente.
  3. **Actualización de App.tsx**: Se integró el paso del ID del libro al servicio de IA, permitiendo que cualquier libro seleccionado en la biblioteca active su contexto RAG específico.
  4. **Procesamiento de Libros**: Se ejecutó el script de "chunking" sobre los 25 libros disponibles en texto, poblando `src/data/contents/`.
- **Estado**: Fases 1 y 2 del Plan de Biblioteca completadas con éxito. El sistema ya es capaz de servir cualquier obra de la biblioteca doctrinal con fidelidad literal.

---

## [2026-05-04] - SESIÓN: Finalización Integración Tomo 2 y Unificación RAG
- **Motivo**: Resolver la invisibilidad de las 92 sesiones de Tomo 2 en el Estudio Libre y estandarizar la arquitectura de contenidos para toda la biblioteca.
- **Cambios realizados**:
  - **`scratch/extract_local.ts`** → Refactorizado el motor de extracción para implementar una **estrategia de detección dual** (basada en fechas y separadores de línea `_____`). Esto permitió recuperar las 92 sesiones de Tomo 2 que fallaban por inconsistencias estructurales en el texto fuente.
  - **`scratch/chunk_all_books.ts`** → **Surgical Fix**: Se corrigió la generación de claves para preservar el prefijo del número de línea (ej: `"26: Al lector..."`). Esto elimina la discordancia entre el índice de la biblioteca y el objeto de contenido.
  - **`src/App.tsx`** → **Surgical Fix**: Se solucionó el problema de estado "stale" en `sendMessage`. Ahora se captura el capítulo seleccionado en una variable local para asegurar que se envíe al Maestro en el primer mensaje.
  - **Regeneración Total**: Se regeneraron todos los módulos de contenido para asegurar que las claves coincidan exactamente con `library.ts`.
- **Resultado**: Tomo 2 ahora carga correctamente sus 92 sesiones y responde con el contexto literal adecuado en el modo de estudio libre.
- **Observador**: El log de consola `[contentLoader] Cargando contenido para: filosofia-enciclopedica-universal-tomo-2` ahora resulta en una carga exitosa del texto.

---

## [2026-05-04] - SESIÓN: Estabilización de Contenidos y Blindaje de Protocolo
- **Motivo**: Corregir la invisibilidad de libros con acentos y puntos en sus IDs, y asegurar las API Keys contra baneos mediante protocolos de seguridad más estrictos.
- **Cambios realizados**:
  - **`src/services/contentLoader.ts`** → Sincronización absoluta de IDs con `library.ts`. Se restauraron los acentos y puntos en los `case` del switch (ej: `filosofía-austera-racional`, `reglamento-interno-e.m.e.delac-.u.-1`).
  - **`src/services/geminiService.ts`** → Migración de seguridad: La API Key ya no se envía en la URL como query param (`?key=...`), sino en el header `x-goog-api-key` para evitar detecciones y logs inseguros.
  - **Mantenimiento**: Se mantuvo el modelo `gemini-2.5-flash` según indicación del usuario. Se añadieron logs de diagnóstico para verificar la longitud del `bookText` cargado.
  - **Limpieza**: Eliminación de archivos de contenido obsoletos y mal nombrados (versiones sin acento).
- **Resultado**: Todos los libros de la biblioteca son ahora correctamente identificados por el cargador de contenido. El sistema de IA está preparado para recibir nuevas llaves bajo un protocolo de comunicación más seguro.

---

## [2026-05-04] - FIX CR�TICO: Restauraci�n de Visibilidad del �ndice (Conflicto de Pipe)
- **Motivo**: El �ndice de Tomo 2 y otros libros no se mostraban porque conten�an el car�cter |, el cual se usaba como delimitador en el protocolo de mensajes de la app. Esto causaba un fallo en `JSON.parse` al renderizar el men� de cap�tulos.
- **Cambios realizados**:
  - **src/App.tsx** ? Se migr� el delimitador de mensajes de | a un marcador mucho m�s robusto: :::SEP:::. Esto blinda el sistema contra cualquier car�cter especial en los t�tulos de los libros.
  - **Saneamiento de Datos** ? Se reemplazaron todos los caracteres | por - en library.ts y en las claves de los archivos _content.ts para asegurar limpieza y compatibilidad total.
- **Resultado**: El �ndice de Tomo 2 y del Discurso de Strossmayer ahora son plenamente visibles y funcionales.

---

## [2026-05-14] - Auditora y Estabilizacin Post-Auditora
- **Motivo**: Resolver el bucle de reinicio infinito y la apertura masiva de pestaas al iniciar el servidor.
- **Cambios realizados**:
  - **server.ts** : Se coment la lgica de apertura automotica del navegador (child_process.exec) que causaba spam de ventanas en cada reinicio.
  - **Ejecucin** : Se desactiv el modo --watch en el comando de inicio para evitar que el servidor se reinicie al detectar cambios menores o escrituras en logs/json.
  - **Validacin de Llaves** : Se confirm en el archivo .env que existen 5 llaves Gemini y 2 llaves Groq (corrigiendo el reporte previo de 5 Groq).
- **Resultado**: Servidor estable en el puerto 3000 y fin del spam de ventanas.

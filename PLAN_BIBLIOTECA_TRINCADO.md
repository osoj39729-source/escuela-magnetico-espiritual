# Plan de Implementación: Gran Biblioteca Virtual Trincado

Este documento detalla la estrategia técnica para incorporar el estudio libre de libros específicos y la descarga de PDFs, manteniendo la elegancia y sin dañar el sistema actual de grados académicos.

## 🚨 User Review Required (Revisión Requerida)
> [!IMPORTANT]
> **Origen de los PDFs:** Como audité anteriormente, la aplicación no tiene los PDFs pesados guardados adentro (para mantenerla rápida). Para el botón de "Descargar PDF", pondré enlaces temporales (placeholders). Necesitaré que me indiques si los vas a subir a un servidor tuyo o si ya tienes los enlaces (Google Drive, página web, etc.) para conectarlos en el futuro.
> 
> **Índices de Libros:** Voy a crear una estructura de datos para los índices de los libros. Incluiré capítulos representativos para que funcione la interactividad, pero la lista completa de capítulos de *todos* los libros tomará tiempo en llenarse en el futuro.

## 🛠️ Cambios Propuestos

### 1. Nueva Estructura de Datos
#### [NEW] `src/data/library.ts`
- Se creará un archivo dedicado a la "Biblioteca Completa".
- Contendrá un arreglo con todos los libros (los de los 13 grados y los extras).
- Cada libro tendrá: `id`, `título`, `portada`, `url_pdf` y un `index` (arreglo con los títulos de sus capítulos).

### 2. Modificación de la Interfaz Principal
#### [MODIFY] `src/App.tsx`
- **Nuevos Botones:** En la cabecera (Header), al lado del botón "Grados de Estudio", se añadirá un elegante botón desplegable llamado **"Biblioteca Virtual"**.
- **Menú de la Biblioteca:** Este menú tendrá dos secciones:
  1. **Estudiar Libro Específico:** Abre una ventana modal elegante donde el estudiante elige cualquier libro.
  2. **Descargar Obras (PDF):** Abre una lista de descarga directa.
- **Interactividad en el Chat:** Cuando el estudiante elija "Estudiar Libro", el Maestro limpiará el chat y enviará un mensaje de bienvenida especial que contendrá **botones interactivos** correspondientes al índice del libro elegido. Al hacer clic en un capítulo, el Maestro comenzará la disertación sobre ese punto exacto.

### 3. Adaptación del Motor de Inteligencia Artificial
#### [MODIFY] `src/services/geminiService.ts`
- Se actualizará el motor para soportar dos modos de estudio: `curriculum` (el actual de 13 grados) y `free_study` (estudio libre de biblioteca).
- El sistema de instrucciones (`SYSTEM_INSTRUCTION`) se ajustará para que, si el alumno elige un capítulo libre, el Maestro ignore el avance del grado actual y se concentre 100% en el libro y capítulo seleccionado de la biblioteca.

## ✅ Plan de Verificación
1. **Prueba Visual:** Asegurar que los botones nuevos armonicen con el diseño oscuro/ámbar y no saturen la pantalla de teléfonos móviles.
2. **Prueba de Interactividad:** Hacer clic en un libro de la biblioteca, verificar que el índice aparezca en el chat, hacer clic en un capítulo y confirmar que la IA responda específicamente sobre ese tema.
3. **Compilación Segura:** Validar que `npm run build` pase sin errores para garantizar que la nueva estructura no afecte a Android/Google Play.

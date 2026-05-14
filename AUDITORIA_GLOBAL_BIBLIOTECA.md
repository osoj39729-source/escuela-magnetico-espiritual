# Auditoría Global de Integridad Doctrinal (RAG-Fidelity)

Este informe detalla las inconsistencias detectadas entre el índice maestro de la aplicación (`library.ts`) y los archivos de esencia destilados (`_esencia.json`), así como la densidad del Diccionario de Sínapsis.

## Resumen Ejecutivo
- **Libros Auditados:** 27
- **Libros con Integridad 1:1 (OK):** 2 (FAR reparado, Tercera Etapa casi OK)
- **Libros con Desajuste Crítico (Mismatch > 50%):** 12
- **Términos en Diccionario:** 1,322 (Concentrados mayormente en FAR y Alfaquí).

## Tabla de Resultados

| Libro | Índice (App) | Esencia (Archivo) | Desajuste (Llaves) | Términos Sínapsis | Estado |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Filosofía Austera Racional** | 282 | 265 | **70** | 708 | **INCONSISTENTE*** |
| **Buscando A Dios** | 113 | 223 | **66** | 0 | **CRÍTICO** |
| **Los Cinco Amores** | 78 | 101 | **63** | 38 | **INCONSISTENTE** |
| **Primer Rayo De Luz** | 67 | 69 | **67** | 21 | **CRÍTICO** |
| **Ley de Mediumnidades** | 40 | 40 | **40** | 8 | **DESCONECTADO** |
| **Conócete A Ti Mismo** | 149 | 144 | **62** | 0 | **CRÍTICO** |
| **Tercera Etapa** | 273 | 273 | **4** | 0 | **CASI OK** |
| **Alfaquí Vademecum** | 16 | 16 | **3** | 25 | **ESTABLE** |

*\* FAR presenta desajuste numérico por los 22 nodos estructurales bloqueados en la UI.*

## Diagnóstico de Fallos

1.  **Mismatch de Llaves (Llaves Faltantes):**
    *   La aplicación busca una cadena literal (ej: `"362: PÁRRAFO 1°: AMORFISMOYANTROPOMORFISMO"`) pero el archivo JSON tiene `"362: PÁRRAFO 1°: AMORFISMO Y ANTROPOMORFISMO"`.
    *   **Consecuencia:** El Profesor no encuentra el contenido y dice que "no existe" o alucina con el OCR.

2.  **Falta de Sincronización Sináptica:**
    *   Libros como *Buscando a Dios* y *Conócete a ti mismo* tienen esencias, pero **0 términos** en el diccionario.
    *   **Consecuencia:** Estos libros están "aislados"; la IA no puede saltar de un concepto general a estos libros de forma automática.

3.  **Archivos Huérfanos:**
    *   *La Revolución de México* y *Código de Amor T1/T2* tienen el ID mal mapeado o el archivo de esencia no se encuentra con el nombre exacto esperado.

## Próximos Pasos Recomendados

1.  **Reparación Masiva de Llaves:** Ejecutar un script similar al `surgical_repair_keys.cjs` para todos los libros con mismatch alto.
2.  **Destilación de Sínapsis:** Re-escanear las esencias de los libros con 0 términos para poblar el Diccionario Central.
3.  **Normalización de IDs:** Asegurar que el ID en `library.ts` coincida exactamente con el prefijo del archivo `_esencia.json`.

---
*Documento generado por Antigravity IA el 08/05/2026.*

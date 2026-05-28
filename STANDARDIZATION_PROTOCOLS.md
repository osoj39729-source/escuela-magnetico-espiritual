# Protocolos de Estandarización Doctrinal

Este documento es el **Manifiesto de Verdad** para la gestión de datos en la plataforma del Maestro Joaquín Trincado. Su cumplimiento es obligatorio para evitar la fragmentación de trabajos previos.

## 1. Identificación de Obras (IDs Únicos)
Para evitar que un cambio en el nombre de un archivo oculte el trabajo realizado, se establece el uso de **IDs Normalizados (Slug)**:
- **Regla:** Solo minúsculas, sin acentos, guiones en lugar de espacios.
- **Ejemplo:** `buscando-a-dios-joaquin-trincado` (Correcto) vs `Buscando_a_Dios` (Incorrecto).

## 2. Esquema de Esencia Polimórfico
Dado que existen trabajos con diferentes nombres de llaves, el sistema debe ser capaz de leer ambos formatos. El **Estándar Maestro** es:

| Llave Estándar | Aliases Aceptados | Propósito |
| :--- | :--- | :--- |
| `PilotoDeCoherencia` | `Sinapsis`, `Contexto`, `Resumen` | El DNA doctrinal del tema. |
| `IdeaCentral` | `IdeasCentrales`, `Esencia` | **Todas** las ideas y conceptos importantes del autor, no solo una principal. |
| `CitaInelutable` | `CitasIneludibles`, `CitaPrincipal` | **Todas** las frases o citas literales importantes del autor. |
| `EjemploPedagogico` | `EjemplosPedagogicos`, `Analogia` | **Todos** los ejemplos y puentes de comprensión provistos por el autor. |
| `NodosSinapticos` | `DiccionarioSinaptico`, `ConexionDoctrinal` | Vínculos al Diccionario Central. |

## 3. Modo Experto Doctrinal (Conciencia Global)
La destilación de **Esencias** y la actualización del **Diccionario Sináptico** no deben realizarse de forma aislada. El agente debe operar en "Modo Experto", lo que implica:
- **Estudio Previo:** Antes de destilar un nodo, el agente debe tener conciencia de la interconexión con el resto de las obras del Maestro (Buscando a Dios, Filosofía Austera Racional, etc.).
- **Contextualización Histórico-Espiritual:** Cada término y concepto debe ser evaluado según su importancia y significado dentro de la cosmogonía total de Trincado.
- **Integridad Sináptica:** Los vínculos al Diccionario Central deben reflejar esta conciencia global, evitando redundancias y asegurando que cada nodo aporte a la estructura RAG de forma coherente con el sistema completo.

## 4. Inyección del Trinomio (RAG-Fidelity)
Ninguna lección se considerará completa si falta uno de estos componentes:
1.  **Capa Literal:** Texto exacto del archivo `_content.json`.
2.  **Capa Esencial:** Datos estructurados del archivo `_esencia.json` (FAR-5 Modo Experto).
3.  **Capa Sináptica:** Definiciones extendidas recuperadas del `diccionario_sinapsis.json` basadas en los `NodosSinapticos`.

## 5. Checklist de Integración (Audit Obligatorio)
Antes de marcar un libro como "OK", el agente debe verificar:
- [ ] ¿El ID en `library.ts` coincide con los archivos físicos?
- [ ] ¿La cobertura 1:1 es > 95%?
- [ ] ¿Los nodos tienen al menos 2 sinapsis vinculadas al diccionario central?
- [ ] ¿La destilación refleja la conciencia global del corpus doctrinal?

---
*Última actualización: 09/05/2026 | Antigravity AI*


// ÍNDICE MAESTRO - Laudo de Rigor
// Unificación de la estructura atómica para RAG

import { LR_ANTECEDENTES } from './cap1_antecedentes';
import { LR_HISTORIA } from './cap2_historia';
import { LR_ARTICULOS } from './cap3_articulos';

export const LAUDO_DE_RIGOR_MAP = {
  book_id: "laudo-de-rigor",
  titulo: "Laudo de Rigor",
  grado: "Ley y Reglamento",
  filtro_pedagogico: "Legislación Espiritual: El reglamento definitivo de las comunicaciones.",
  eje_central: "El decreto final que pone orden en el uso de las facultades medianímicas. Establece la conexión histórica con la prohibición de Moisés, cierra el ciclo de la Escuela Esénica y abre la EMECU bajo un régimen de austeridad, horarios fijos y responsabilidad compartida entre el Guía y el Médium para erradicar la superchería.",
  
  secciones: [
    LR_ANTECEDENTES,
    LR_HISTORIA,
    LR_ARTICULOS
  ],

  indice_rapido: {
    "supercheria": { ref: "supercheria_perversidad_encarnada" },
    "moises 36 siglos": { ref: "moises_prohibicion_original" },
    "escuela esenica": { ref: "transicion_esenica_emecu" },
    "horarios sesiones": { ref: "viernes_domingo_medianimicas" },
    "martes estudio": { ref: "martes_estudio" },
    "magnetizar": { ref: "prohibicion_magnetismo_aislado" },
    "responsabilidad guias": { ref: "responsabilidad_guias_familiares" }
  }
};

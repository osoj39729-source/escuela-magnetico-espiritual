
// ÍNDICE MAESTRO - Filosofía Enciclopédica Universal Tomo I
// Unificación de la estructura atómica para RAG

import { FEU1_APERTURA } from './cap1_apertura';
import { FEU1_MORAL } from './cap2_moral';
import { FEU1_JUICIO } from './cap3_juicio';

export const FILOSOFIA_ENCICLOPEDICA_UNIVERSAL_TOMO_1_MAP = {
  book_id: "filosofia-enciclopedica-universal-tomo-1",
  titulo: "Filosofía Enciclopédica Universal (Tomo I)",
  grado: "Superior",
  filtro_pedagogico: "Grado Superior — Conocimiento Universal: Recopilación de comunicaciones y expansiones filosóficas.",
  eje_central: "La primera parte de la gran enciclopedia de la Escuela. Recoge las comunicaciones fundamentales de 1911 que sientan las bases de la unificación del pensamiento y la llamada definitiva al juicio universal de los espíritus.",
  
  secciones: [
    FEU1_APERTURA,
    FEU1_MORAL,
    FEU1_JUICIO
  ],

  indice_rapido: {
    "conocimiento integral": { ref: "conocimiento_universal_necesidad" },
    "paz": { ref: "paz_entre_nosotros_real" },
    "caridad": { ref: "caridad_insulto_hermano" },
    "pensamiento unificado": { ref: "pensamiento_fuerza_magnetica" },
    "juicio universal": { ref: "juicio_revision_history" },
    "concierto de los mundos": { ref: "concierto_mundos_feu1" }
  }
};

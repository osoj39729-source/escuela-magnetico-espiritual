
// ÍNDICE MAESTRO - Primer Rayo de Luz (Grado 6)
// Unificación de la estructura atómica para RAG

import { PRL_PROGRAMA } from './cap1_proclama';
import { PRL_CONTROVERSIA } from './cap2_controversia';
import { PRL_SYLLABUS } from './cap3_syllabus';
import { PRL_SENTENCIA } from './cap4_sentencia';

export const PRIMER_RAYO_DE_LUZ_MAP = {
  book_id: "primer-rayo-de-luz",
  titulo: "Primer Rayo de Luz",
  grado: 6,
  filtro_pedagogico: "Grado 6 — Crítica y Juicio: El análisis de los extremos y la sentencia al dogma.",
  eje_central: "La obra que juzga la controversia entre el dogma religioso y el materialismo. Expone el Syllabus de Pío IX como prueba de la prevaricación de la Iglesia y emite la sentencia final que libera a la humanidad de la esclavitud espiritual.",
  
  secciones: [
    PRL_PROGRAMA,
    PRL_CONTROVERSIA,
    PRL_SYLLABUS,
    PRL_SENTENCIA
  ],

  indice_rapido: {
    "ley y sustancia": { ref: "ley_sustancia_una" },
    "fe ciega": { ref: "fe_ciega_crimen" },
    "darwin": { ref: "superacion_moises_darwin" },
    "moises": { ref: "superacion_moises_darwin" },
    "syllabus": { ref: "syllabus_excomuniones" },
    "pio ix": { ref: "iglesia_contra_racionalismo" },
    "sentencia": { ref: "sentencia_final_rayo" }
  }
};

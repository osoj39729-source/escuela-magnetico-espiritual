
// ÍNDICE MAESTRO - Los Extremos se Tocan
// Unificación de la estructura atómica para RAG

import { LEST_PRINCIPIOS } from './cap1_2_principios';
import { LEST_HISTORIA } from './cap3_11_historia';
import { LEST_CATASTROFE } from './cap12_18_catastrofe';
import { LEST_FUTURO } from './cap19_38_futuro';

export const LOS_EXTREMOS_SE_TOCAN_MAP = {
  book_id: "los-extremos-se-tocan",
  titulo: "Los Extremos se Tocan",
  grado: "Superior-Filosófico",
  filtro_pedagogico: "Grado Superior: El análisis de la historia y el destino de la humanidad.",
  eje_central: "Una obra maestra de la sociología espiritual. Analiza cómo el dogmatismo y el materialismo han llevado a la humanidad a la guerra, y propone la unificación bajo el mandato de 'Ama a tu hermano' y el establecimiento de la Comuna Universal.",
  
  secciones: [
    LEST_PRINCIPIOS,
    LEST_HISTORIA,
    LEST_CATASTROFE,
    LEST_FUTURO
  ],

  indice_rapido: {
    "ley del amor": { ref: "amor_ley_fundamental" },
    "leyes fatales": { ref: "afinidad_justicia_igualdad" },
    "adan y eva": { ref: "adan_eva_misioneros_est" },
    "causa de la guerra": { ref: "religion_causa_guerra" },
    "dia del amor": { ref: "dia_del_amor_civilizacion" },
    "ama a tu hermano": { ref: "ama_a_tu_hermano_ley_suprema" },
    "extremos": { ref: "culpables_guerra_est" }
  }
};

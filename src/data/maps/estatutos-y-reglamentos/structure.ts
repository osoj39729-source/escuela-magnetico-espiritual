
// ÍNDICE MAESTRO - Estatutos y Reglamentos
// Unificación de la estructura atómica para RAG

import { ER_DEFINICION } from './cap1_definicion';
import { ER_ECONOMIA } from './cap2_economia';
import { ER_DIRECCION } from './cap3_direccion';

export const ESTATUTOS_Y_REGLAMENTOS_MAP = {
  book_id: "estatutos-y-reglamentos",
  titulo: "Estatutos y Reglamentos",
  grado: "Institucional",
  filtro_pedagogico: "Organización de la EMECU: Las bases legales y administrativas.",
  eje_central: "El marco legal que rige la vida de la Escuela Magnético-Espiritual de la Comuna Universal. Define su carácter apolítico y universal, su régimen de propiedad comunal bajo la figura del Maestro Nato y su estructura de gobierno basada en el mérito, el trabajo en común y la responsabilidad civil ante las naciones.",
  
  secciones: [
    ER_DEFINICION,
    ER_ECONOMIA,
    ER_DIRECCION
  ],

  indice_rapido: {
    "estatutos": { ref: "sin_credo_politico_religioso" },
    "propiedad": { ref: "propiedad_legal_maestro" },
    "maestro nato": { ref: "maestro_nato_autoridad" },
    "asamblea": { ref: "asamblea_meritos_derechos" },
    "trabajo en comun": { ref: "trabajo_usufructo_comun" },
    "universal": { ref: "universalidad_acatamiento_leyes" }
  }
};


// ÍNDICE MAESTRO - Filosofía Austera Racional (Grado 8)
// Unificación de la estructura atómica para RAG

import { FAR_METODO } from './cap1_metodo';
import { FAR_ETICA_1 } from './cap2_etica_fundamentos';
import { FAR_ETICA_2 } from './cap3_etica_personal';
import { FAR_ETICA_3 } from './cap4_etica_social';
import { FAR_ETICA_4 } from './cap5_etica_justicia';
import { FAR_POLITICA } from './cap6_politica';
import { FAR_SINTESIS } from './cap7_sintesis';

export const FILOSOFIA_AUSTERA_RACIONAL_MAP = {
  book_id: "filosofia-austera-racional",
  titulo: "Filosofía Austera Racional",
  grado: 8,
  filtro_pedagogico: "Grado 8 — Razón y Ética: La base filosófica de la EMECU.",
  eje_central: "La obra que define el método de pensamiento de la Escuela. Descompone la ética, la moral, el estado y la religión para reconstruirlos sobre la base de la razón soberana y la ley del espíritu.",
  
  secciones: [
    FAR_METODO,
    FAR_ETICA_1,
    FAR_ETICA_2,
    FAR_ETICA_3,
    FAR_ETICA_4,
    FAR_POLITICA,
    FAR_SINTESIS
  ],

  indice_rapido: {
    "que es filosofia austera": { ref: "filosofia_austera_definicion" },
    "razon": { ref: "razon_soberana_far" },
    "sentido moral": { ref: "sentido_moral_definicion" },
    "responsabilidad": { ref: "responsabilidad_moral_individual" },
    "suicidio": { ref: "suicidio_error_ley" },
    "caridad": { ref: "caridad_baldon_far" },
    "justicia": { ref: "justicia_definicion_far" },
    "estado": { ref: "estado_no_es_gobierno" },
    "commune": { ref: "socialismo_anarquismo_comunismo" },
    "espiritismo no es religion": { ref: "espiritismo_no_religion_far" }
  }
};

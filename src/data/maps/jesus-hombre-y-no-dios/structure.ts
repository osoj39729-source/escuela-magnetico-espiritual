
// ÍNDICE MAESTRO - Jesús Hombre y no Dios (Grado 3)
// Unificación de la estructura atómica para RAG

import { JHN_DESPLOME } from './cap1_desplome';
import { JHN_VIDA_JESUS } from './cap2_vida_humana';
import { JHN_JUAN_BAUTISTA } from './cap3_juan';
import { JHN_TRAICION } from './cap4_traicion';
import { JHN_SIN_TEMPLOS } from './cap5_sin_templos';

export const JESUS_HOMBRE_Y_NO_DIOS_MAP = {
  book_id: "jesus-hombre-y-no-dios",
  titulo: "Jesús Hombre y no Dios",
  grado: 3,
  filtro_pedagogico: "Grado 3 — Historia Crítica: La verdadera figura de Jesús y Juan el Bautista.",
  eje_central: "La desmitificación radical de la figura de Jesús de Nazareth. Lo presenta como un hombre misionero, un revolucionario de la Commune y un estudiante de las leyes naturales, denunciando el secuestro de su mensaje por parte de la Iglesia Católica.",
  
  secciones: [
    JHN_DESPLOME,
    JHN_VIDA_JESUS,
    JHN_JUAN_BAUTISTA,
    JHN_TRAICION,
    JHN_SIN_TEMPLOS
  ],

  indice_rapido: {
    "divinidad de jesus": { ref: "jesus_hombre_real" },
    "familia de jesus": { ref: "familia_de_jesus_real" },
    "hermanos de jesus": { ref: "familia_de_jesus_real" },
    "juan el bautista": { ref: "juan_precursor_magnetico" },
    "redencion": { ref: "jesus_no_redentor_pecados" },
    "pecado original": { ref: "jesus_no_redentor_pecados" },
    "templos": { ref: "jesus_apostoles_sin_templos" },
    "misa": { ref: "misa_ritual_paganismo" },
    "concilio de nicea": { ref: "jesus_hombre_real" }
  }
};

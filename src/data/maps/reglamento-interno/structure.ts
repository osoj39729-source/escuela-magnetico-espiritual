
// ÍNDICE MAESTRO - Reglamento Interno
// Unificación de la estructura atómica para RAG

import { RI_PRINCIPIOS } from './cap1_principios';
import { RI_ADMISION } from './cap2_admision';
import { RI_ORGANIZACION } from './cap3_organizacion';

export const REGLAMENTO_INTERNO_MAP = {
  book_id: "reglamento-interno",
  titulo: "Reglamento Interno",
  grado: "Institucional-Práctico",
  filtro_pedagogico: "Funcionamiento de las Cátedras: La disciplina del estudiante.",
  eje_central: "El manual operativo para los adherentes y autoridades de la EMECU. Establece los grados de estudio (Novato, Simpatizante, Adherente), la disciplina dentro del local, la responsabilidad de los médiums, la jerarquía de cargos (Directores, Celadores) y las normas éticas para evitar el fanatismo y la deslealtad doctrinal.",
  
  secciones: [
    RI_PRINCIPIOS,
    RI_ADMISION,
    RI_ORGANIZACION
  ],

  indice_rapido: {
    "grados": { ref: "grados_estudio_emecu_ri" },
    "novato": { ref: "grado_novato" },
    "simpatizante": { ref: "grado_simpatizante" },
    "adherente": { ref: "grado_adherente" },
    "celador": { ref: "celadores_representantes" },
    "director": { ref: "directores_servidores_no_mandones" },
    "disciplina": { ref: "conducta_en_sesion_ri" },
    "fanatismo": { ref: "no_fanaticos_solo_estudio_ri" }
  }
};

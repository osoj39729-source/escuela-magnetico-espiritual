
// ÍNDICE MAESTRO - El Magnetismo en su Origen (Grado 5)
// Unificación de la estructura atómica para RAG

import { MAG_TEORIA } from './cap1_teoria';
import { MAG_GRADOS } from './cap2_grados';
import { MAG_OPERATIVA } from './cap3_operativa';
import { MAG_INSTRUCCIONES } from './cap4_instrucciones';
import { MAG_FISICA } from './cap5_fisica';

export const EL_MAGNETISMO_EN_SU_ORIGEN_MAP = {
  book_id: "el-magnetismo-en-su-origen",
  titulo: "El Magnetismo en su Origen",
  grado: 5,
  filtro_pedagogico: "Grado 5 — Ciencia y Técnica: El Método Supremo de la Escuela.",
  eje_central: "La explicación del magnetismo como la substancia única del universo y el manual técnico para el desarrollo de la mediumnidad y la curación magnética.",
  
  secciones: [
    MAG_TEORIA,
    MAG_GRADOS,
    MAG_OPERATIVA,
    MAG_INSTRUCCIONES,
    MAG_FISICA
  ],

  indice_rapido: {
    "que es magnetismo": { ref: "magnetismo_substancia_unica" },
    "hombre dinamo": { ref: "el_hombre_dinamo" },
    "sonambulismo": { ref: "grado4_sonambulismo_verbal" },
    "desdoblamiento": { ref: "grado6_desdoblamiento" },
    "voluntad razonada": { ref: "voluntad_razonada_operar" },
    "sexualidad": { ref: "amor_de_la_carne" },
    "celibato": { ref: "amor_de_la_carne" },
    "pobreza": { ref: "no_declaracion_pobreza" },
    "electrones": { ref: "electrones_vivos" },
    "curacion": { ref: "atraccion_espiritus" }
  }
};


// ÍNDICE MAESTRO - El Espiritismo Estudiado (Grado 7)
// Unificación de la estructura atómica para RAG

import { EES_CONCEPTOS } from './cap1_conceptos';
import { EES_CIENCIAS } from './cap2_ciencias';
import { EES_FACULTADES } from './cap3_facultades';
import { EES_FENOMENOS } from './cap4_fenomenos';
import { EES_DETRACTORES } from './cap5_detractores';

export const EL_ESPIRITISMO_ESTUDIADO_MAP = {
  book_id: "el-espiritismo-estudiado",
  titulo: "El Espiritismo Estudiado",
  grado: 7,
  filtro_pedagogico: "Grado 7 — Técnica y Ciencia: El estudio profundo de los fenómenos y su relación con las ciencias.",
  eje_central: "El manual técnico definitivo de la Escuela. Analiza el espiritismo frente a la medicina, la química y otras ciencias, detalla la mecánica de las facultades medianímicas y desenmascara a los detractores misticistas.",
  
  secciones: [
    EES_CONCEPTOS,
    EES_CIENCIAS,
    EES_FACULTADES,
    EES_FENOMENOS,
    EES_DETRACTORES
  ],

  indice_rapido: {
    "ciencia": { ref: "medicina_limitacion_material" },
    "quimica": { ref: "quimica_magnetica_afin" },
    "medicina": { ref: "medicina_limitacion_material" },
    "mediumnidad": { ref: "mediums_parlantes" },
    "levitacion": { ref: "levitacion_anulacion_gravedad" },
    "materializacion": { ref: "materializacion_densificacion_fluido" },
    "misticismo": { ref: "misticismo_neurosis_espiritual" },
    "espiritualismo": { ref: "espiritualismo_desvio_dogmatico" }
  }
};

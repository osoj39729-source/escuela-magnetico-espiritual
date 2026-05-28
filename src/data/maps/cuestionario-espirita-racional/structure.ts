
// ÍNDICE MAESTRO - Cuestionario Espírita Racional
// Unificación de la estructura atómica para RAG

import { CER_BASICOS } from './cap1_basicos';
import { CER_DESMITIFICACION } from './cap2_desmitificacion';
import { CER_MARIA_MEDIUMNIDAD } from './cap3_maria';

export const CUESTIONARIO_ESPIRITA_RACIONAL_MAP = {
  book_id: "cuestionario-espirita-racional",
  titulo: "Cuestionario Espírita Racional",
  grado: "Pedagógico",
  filtro_pedagogico: "Cuestionario de Introducción: 88 preguntas y respuestas clave.",
  eje_central: "Un compendio de las dudas más frecuentes resueltas por el Maestro. Cubre desde la naturaleza de la Escuela hasta los detalles más íntimos de la vida de Jesús y María, funcionando como un catecismo racional para el adherente.",
  
  secciones: [
    CER_BASICOS,
    CER_DESMITIFICACION,
    CER_MARIA_MEDIUMNIDAD
  ],

  indice_rapido: {
    "que es la escuela": { ref: "escuela_no_religion_respuesta" },
    "infierno": { ref: "purgatorio_infierno_no_existen" },
    "purgatorio": { ref: "purgatorio_infierno_no_existen" },
    "jesus": { ref: "jesus_origen_humano_respuesta" },
    "maria": { ref: "maria_siete_hijos_cer" },
    "hermanos de jesus": { ref: "maria_siete_hijos_cer" },
    "alma": { ref: "alma_envoltura_fluida" },
    "juramento": { ref: "juramento_fidelidad_verdad" }
  }
};

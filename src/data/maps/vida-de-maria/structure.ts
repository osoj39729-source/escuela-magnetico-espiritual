
// ÍNDICE MAESTRO - Vida de María
// Unificación de la estructura atómica para RAG

import { VDM_ORIGENES } from './cap1_2_origenes';
import { VDM_FAMILIA } from './cap3_5_familia';
import { VDM_MADRE } from './cap6_8_madre';
import { VDM_MISION_FINAL } from './cap9_13_mision';

export const VIDA_DE_MARIA_MAP = {
  book_id: "vida-de-maria",
  titulo: "Vida de María",
  grado: "Complementario (Grado 3)",
  filtro_pedagogico: "Historia y Biografía: La mujer y madre frente al mito de la virgen.",
  eje_central: "La reconstrucción de la vida real de María de Nazareth. Despoja a María de todo atributo sobrenatural y la presenta como una misionera consciente, esposa de José y madre de siete hijos, clave en la organización de la obra de Jesús.",
  
  secciones: [
    VDM_ORIGENES,
    VDM_FAMILIA,
    VDM_MADRE,
    VDM_MISION_FINAL
  ],

  indice_rapido: {
    "virginidad": { ref: "maria_no_virgen_mitica" },
    "padres de maria": { ref: "joaquin_ana_padres" },
    "jose esposo": { ref: "jose_compañero_mision" },
    "concepcion de jesus": { ref: "concepcion_jesus_verdad" },
    "hijos de maria": { ref: "maria_madre_muchos" },
    "hermanos de jesus": { ref: "maria_madre_muchos" },
    "asuncion": { ref: "desencarnacion_maria" },
    "mision en españa": { ref: "viaje_maria_españa" }
  }
};

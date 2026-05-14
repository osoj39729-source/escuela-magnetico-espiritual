
// ÍNDICE MAESTRO - Filosofía Enciclopédica Universal Tomo II
// Unificación de la estructura atómica para RAG

import { FEU2_JUICIO_RELIGIONES } from './cap1_juicio_religiones';
import { FEU2_FUERZA_ISLAM } from './cap2_fuerza_islam';
import { FEU2_CONQUISTA } from './cap3_conquista';

export const FILOSOFIA_ENCICLOPEDICA_UNIVERSAL_TOMO_2_MAP = {
  book_id: "filosofia-enciclopedica-universal-tomo-2",
  titulo: "Filosofía Enciclopédica Universal (Tomo II)",
  grado: "Superior",
  filtro_pedagogico: "Grado Superior — Juicio Histórico: La comparecencia de las huestes ante la ley del amor.",
  eje_central: "La segunda parte de la enciclopedia. Se centra en el juicio espiritual a las grandes potencias religiosas y políticas de la historia (Vaticano, Reformistas, Islam, Conquistadores), estableciendo la justicia histórica para la nueva era.",
  
  secciones: [
    FEU2_JUICIO_RELIGIONES,
    FEU2_FUERZA_ISLAM,
    FEU2_CONQUISTA
  ],

  indice_rapido: {
    "juicio monjes": { ref: "monjismo_anulacion_vida" },
    "calvino y lutero": { ref: "protestantismo_hijo_dogma" },
    "mahoma": { ref: "islam_desvio_amor" },
    "napoleon": { ref: "napoleon_instrumento_ciego" },
    "conquista de america": { ref: "conquista_crimen_religioso" },
    "incas": { ref: "reparacion_historica_espiritual" },
    "justicia historica": { ref: "reparacion_historica_espiritual" }
  }
};


// ÍNDICE MAESTRO - El Espiritismo en su Asiento (Grado 4)
// Unificación de la estructura atómica para RAG

import { ESA_PRINCIPIOS } from './cap1_3_principios';
import { ESA_PRACTICA } from './cap1_4_practica';
import { ESA_REINADO } from './cap1_5_reinado';
import { ESA_LEY_MEDIUMS } from './cap2_1_ley_mediums';
import { ESA_APORTES_ANTROPO } from './cap2_3_aportes';
import { ESA_VOZ_ESPIRITUAL } from './cap2_4_voz';

export const EL_ESPIRITISMO_EN_SU_ASIENTO_MAP = {
  book_id: "el-espiritismo-en-su-asiento",
  titulo: "El Espiritismo en su Asiento",
  grado: 4,
  filtro_pedagogico: "Grado 4 — Ciencia y Filosofía: La base doctrinal y técnica del espiritismo racional.",
  eje_central: "La consolidación del espiritismo como la base de toda verdad. Incluye la crítica a las religiones, la definición técnica de la mediumnidad y las leyes de comunicación con el mundo espiritual.",
  
  secciones: [
    ESA_PRINCIPIOS,
    ESA_PRACTICA,
    ESA_REINADO,
    ESA_LEY_MEDIUMS,
    ESA_APORTES_ANTROPO,
    ESA_VOZ_ESPIRITUAL
  ],

  indice_rapido: {
    "que es espiritismo": { ref: "espiritismo_definicion_asiento" },
    "enemigos": { ref: "prejuicio_enemigo_principal" },
    "mediums": { ref: "medium_instrumento_no_santo" },
    "mal uso": { ref: "espiritismo_no_es_adivinacion" },
    "juicio final": { ref: "juicio_final_liquidacion" },
    "ley mediumnidad": { ref: "ley_mediumnidad_articulo1" },
    "aportes": { ref: "aportes_desintegracion_materia" },
    "definicion hombre": { ref: "hombre_trinidad_asiento" },
    "derecho espiritus": { ref: "libertad_expresion_espiritual" }
  }
};

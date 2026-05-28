
// ÍNDICE MAESTRO - Buscando a Dios (Grado 2)
// Unificación de la estructura atómica para RAG

import { BAD_DESPERTAR } from './cap1_3_despertar';
import { BAD_JUICIO_PAPADO } from './cap4_10_papado';
import { BAD_BORGIAS } from './cap11_borgias';
import { BAD_DESCUBRIMIENTO } from './cap12_13_descubrimiento';
import { BAD_DOCTRINA } from './cap14_16_doctrina';
import { BAD_REVELACION_FINAL } from './cap17_epilogo';

export const BUSCANDO_A_DIOS_MAP = {
  book_id: "buscando-a-dios",
  titulo: "Buscando a Dios",
  grado: 2,
  filtro_pedagogico: "Grado 2 — Historia Personal y Crítica: La búsqueda de la verdad fuera del dogma.",
  eje_central: "El relato autobiográfico de Joaquín Trincado sobre su ruptura con la Iglesia Católica y su descubrimiento del Espiritismo Racional. Incluye una cruda crítica histórica al papado y la revelación de su misión espiritual.",
  
  secciones: [
    BAD_DESPERTAR,
    BAD_JUICIO_PAPADO,
    BAD_BORGIAS,
    BAD_DESCUBRIMIENTO,
    BAD_DOCTRINA,
    BAD_REVELACION_FINAL
  ],

  indice_rapido: {
    "duda": { ref: "duda_metodica_espiritual" },
    "infalibilidad": { ref: "infalibilidad_blasfemia_razon" },
    "borgia": { ref: "borgia_bacanal_crimen" },
    "vaticano": { ref: "santidad_papal_farsa" },
    "escuela esenica": { ref: "escuela_esenica_rememoracion" },
    "espiritismo origen": { ref: "espiritismo_antiguo_creador" },
    "jesus de nazareth": { ref: "comunicacion_jesus_nazareth_bad" },
    "mision trincado": { ref: "trincado_instrumento_ley" }
  }
};

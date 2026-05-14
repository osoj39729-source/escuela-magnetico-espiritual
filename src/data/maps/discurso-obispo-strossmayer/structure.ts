
// ÍNDICE MAESTRO - Discurso del Obispo Strossmayer
// Unificación de la estructura atómica para RAG

import { ST_APERTURA } from './cap1_apertura';
import { ST_JUICIO } from './cap2_juicio';

export const DISCURSO_OBISPO_STROSSMAYER_MAP = {
  book_id: "discurso-obispo-strossmayer",
  titulo: "Discurso del Obispo Strossmayer",
  grado: "Crítica Histórica",
  filtro_pedagogico: "Crítica al Dogma: La demolición de la infalibilidad papal.",
  eje_central: "El discurso histórico pronunciado en el Concilio Vaticano I, donde se demuestra la falsedad de la sucesión apostólica de Pedro y la blasfemia de la infalibilidad papal. Incluye el análisis crítico de Joaquín Trincado que integra este hecho en el juicio final a las religiones.",
  
  secciones: [
    ST_APERTURA,
    ST_JUICIO
  ],

  indice_rapido: {
    "pedro papa": { ref: "pedro_nunca_estuvo_en_roma" },
    "infalibilidad": { ref: "infalibilidad_error_racional" },
    "concilio vaticano": { ref: "pedro_nunca_estuvo_en_roma" },
    "vaticano": { ref: "vaticano_sentenciado_strossmayer" }
  }
};

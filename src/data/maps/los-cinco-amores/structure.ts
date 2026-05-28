
// ÍNDICE MAESTRO - Los Cinco Amores (Grado 1)
// Unificación de la estructura atómica para RAG

import { LCA_INICIALES } from './cap1_2_familia_ciudadano';
import { LCA_REGIONAL } from './cap3_regional';
import { LCA_NACIONAL } from './cap4_nacional';
import { LCA_UNIVERSAL } from './cap5_universal';

export const LOS_CINCO_AMORES_MAP = {
  book_id: "los-cinco-amores",
  titulo: "Los Cinco Amores",
  grado: 1,
  filtro_pedagogico: "Grado 1 — Ética y Sentimiento: La escala del amor como motor del progreso.",
  eje_central: "La definición del amor como ley de afinidad que se expande en cinco grados: Familia, Ciudadano, Regional, Nacional y Universal. Es el inicio del camino espiritual del hombre.",
  
  secciones: [
    LCA_INICIALES,
    LCA_REGIONAL,
    LCA_NACIONAL,
    LCA_UNIVERSAL
  ],

  indice_rapido: {
    "familia": { ref: "familia_base_escuela" },
    "amor ciudadano": { ref: "amor_ciudadano_definicion" },
    "economias": { ref: "las_14_economias_resumen" },
    "mestizaje": { ref: "amor_belleza_etnicismo" },
    "naturaleza": { ref: "amor_naturaleza_aprovechamiento" },
    "estado": { ref: "estado_es_el_pueblo" },
    "soberania": { ref: "soberania_real_poder" },
    "amor universal": { ref: "parte5_amor_universal" },
    "commune": { ref: "amor_solo_en_commune" }
  }
};

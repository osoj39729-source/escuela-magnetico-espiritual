
// ÍNDICE MAESTRO - La Revolución de México
// Unificación de la estructura atómica para RAG

import { RM_ANCESTRAL } from './cap1_3_ancestral';
import { RM_MADERO } from './cap8_madero';
import { RM_VILLA } from './cap10_14_villa';
import { RM_FILOSOFIA } from './cap11_20_filosofia';

export const LA_REVOLUCION_DE_MEXICO_MAP = {
  book_id: "la-revolucion-de-mexico",
  titulo: "La Revolución de México",
  grado: "Histórico-Social",
  filtro_pedagogico: "Historia y Sociología: El estallido de la libertad en el continente americano.",
  eje_central: "El análisis de la Revolución Mexicana como un evento de trascendencia espiritual y universal. Reivindica a Madero como el misionero de la idea y a Pancho Villa como el apóstol de la fuerza, proyectando la revolución hacia la meta final de la Comuna Universal.",
  
  secciones: [
    RM_ANCESTRAL,
    RM_MADERO,
    RM_VILLA,
    RM_FILOSOFIA
  ],

  indice_rapido: {
    "atlantida": { ref: "mexico_atlantida_remanente" },
    "madero": { ref: "madero_espiritista_consciente" },
    "pancho villa": { ref: "villa_justicia_natural" },
    "revolucion": { ref: "mexico_faro_libertad" },
    "commune": { ref: "commune_regimen_universal_rm" },
    "justicia": { ref: "villa_justicia_natural" }
  }
};

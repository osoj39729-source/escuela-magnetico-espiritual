
// ÍNDICE MAESTRO - Profilaxis de la Vida (Grado 9)
// Unificación de la estructura atómica para RAG

import { PDV_ORIGENES } from './cap1_3_origenes';
import { PDV_CRIANZA } from './cap4_crianza';
import { PDV_EDUCACION } from './cap5_7_educacion';
import { PDV_SOCIEDAD } from './cap8_11_sociedad';
import { PDV_VISION_GLOBAL } from './cap12_15_vision';
import { PDV_TRANSFORMACION } from './cap16_24_transformacion';
import { PDV_ECONOMIA } from './apendice_economia';

export const PROFILAXIS_DE_LA_VIDA_MAP = {
  book_id: "profilaxis-de-la-vida",
  titulo: "Profilaxis de la Vida",
  grado: 9,
  filtro_pedagogico: "Grado 9 — Higiene y Conducta: Las leyes para la encarnación y la vida social.",
  eje_central: "Instrucciones prácticas de los 24 Ancianos sobre la concepción, crianza, educación y administración del mundo. Es el manual de vida para el hombre de la Commune.",
  
  secciones: [
    PDV_ORIGENES,
    PDV_CRIANZA,
    PDV_EDUCACION,
    PDV_SOCIEDAD,
    PDV_VISION_GLOBAL,
    PDV_TRANSFORMACION,
    PDV_ECONOMIA
  ],

  indice_rapido: {
    "concepcion": { ref: "cap1_concepcion" },
    "embarazo": { ref: "cap2_cuidados_madre" },
    "parto": { ref: "cap3_alumbramiento" },
    "alimentacion": { ref: "cap4_lactancia_crianza" },
    "educacion": { ref: "cap5_7_educacion" },
    "herencia": { ref: "cap9_reparto_bienes" },
    "tradicion": { ref: "cap10_tradicion_traicion" },
    "nacion": { ref: "cap11_concepto_familias_naciones" },
    "mal mundial": { ref: "cap14_causas_mal_mundial" },
    "apocalipsis": { ref: "cap20_21_tragedia_decretos" },
    "economia": { ref: "economia_definicion" },
    "remedios naturales": { ref: "cap4_lactancia_crianza" }
  }
};

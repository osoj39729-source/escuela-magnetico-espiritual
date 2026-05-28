
// ÍNDICE MAESTRO - Alfaquí Vademécum
// Unificación de la estructura atómica para RAG

import { AV_PRINCIPIOS } from './cap1_4_principios';
import { AV_CREACION_HOMBRE } from './cap5_7_creacion';
import { AV_REGIMEN } from './cap10_11_regimen';

export const ALFAQUI_VADEMECUM_MAP = {
  book_id: "alfaqui-vademecum",
  titulo: "Alfaquí Vademécum",
  grado: "Manual del Alfaquí",
  filtro_pedagogico: "Manual de Referencia Rápida: Definiciones directas y concisas.",
  eje_central: "Una guía de consulta rápida estructurada en preguntas y respuestas. Proporciona definiciones atómicas sobre Eloí, el espíritu, la vida, la creación y la ley, diseñada para la instrucción directa del Alfaquí.",
  
  secciones: [
    AV_PRINCIPIOS,
    AV_CREACION_HOMBRE,
    AV_REGIMEN
  ],

  indice_rapido: {
    "que es eloi": { ref: "eloi_axioma_universal" },
    "que es vida": { ref: "vida_causa_efecto" },
    "que es espiritu": { ref: "espiritu_vida_del_todo" },
    "fin creacion": { ref: "creacion_eterna_progreso" },
    "definicion hombre": { ref: "hombre_ser_racional_vademecum" },
    "libertad": { ref: "libertad_con_responsabilidad_vademecum" },
    "justicia": { ref: "justicia_amor_ley_trinidad" }
  }
};

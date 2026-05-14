
// ÍNDICE MAESTRO - Ley de las Mediumnidades en General
// Unificación de la estructura atómica para RAG

import { LM_FUNDAMENTOS } from './cap1_fundamentos';
import { LM_ETICA_MEDIUM } from './cap2_etica';
import { LM_PRACTICA } from './cap3_practica';
import { LM_FACULTADES_MAYORES } from './cap4_medicina';

export const LEY_DE_LAS_MEDIUMNIDADES_MAP = {
  book_id: "ley-de-las-mediumnidades-en-general",
  titulo: "Ley de las Mediumnidades en General",
  grado: "Técnico-Legal",
  filtro_pedagogico: "Grado Técnico: La legislación de la comunicación espiritual.",
  eje_central: "El cuerpo legal que regula la práctica de la mediumnidad en la Escuela. Establece los deberes del médium, las normas de las sesiones y las bases para la medicina del espíritu, condenando el mercantilismo y el misticismo espiritualista.",
  
  secciones: [
    LM_FUNDAMENTOS,
    LM_ETICA_MEDIUM,
    LM_PRACTICA,
    LM_FACULTADES_MAYORES
  ],

  indice_rapido: {
    "espiritualismo": { ref: "espiritismo_no_religion_ley" },
    "lucro": { ref: "medium_no_se_pertenece" },
    "caridad": { ref: "palabra_caridad_alerta" },
    "desdoblamiento": { ref: "desdoblamiento_poder_supremo" },
    "locura": { ref: "enajenacion_histerismo_causa" },
    "enfermedad": { ref: "curad_espiritu_curar_materia" },
    "reunion familiar": { ref: "reunion_familiar_medium" }
  }
};

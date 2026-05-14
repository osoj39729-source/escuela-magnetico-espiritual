import fs from 'fs';

const BUSCANDO_A_DIOS_INDEX = [
  "Prólogo",
  "Introducción",
  "CAPITULO PRIMERO: La naturaleza terrestre",
  "CAPITULO SEGUNDO: Sus habitantes irracionales",
  "CAPITULO TERCERO: Sus habitantes racionales",
  "CAPITULO CUARTO: EL HOMBRE Y SUS FACULTADES",
  "PÁRRAFO I: EL HOMBRE DE SANGRE CÁLIDA",
  "PÁRRAFO II: EL HOMBRE DE SANGRE HELADA",
  "PARRAFO III: EL HOMBRE DE SANGRE TEMPLADA",
  "PÁRRAFO IV: EL HOMBRE CONSTITUYE LA FAMILIA",
  "CAPITULO QUINTO: EL HOMBRE: SUS FUERZAS OCULTAS",
  "PARRAFO I: EL HOMBRE EXPERIMENTA",
  "PARRAFO II: A LA CONCIENCIA SOLO PUEDEN HABLARLE OTRAS CONCIENCIAS",
  "PARRAFO III: EL ALMA ES EL ARCHIVO-CONCIENCIA DEL HOMBRE",
  "PARRAFO IV: EL HOMBRE VA SIEMPRE MAS ALLA",
  "CAPITULO SEXTO: LAS RELIGIONES: SU FIN",
  "CAPITULO SEPTIMO: ESCALA PROGRESIVA DE LAS RELIGIONES",
  "Párrafo I: LA RELIGION FULICA",
  "Párrafo II: LA RAZA ADAMICA",
  "Párrafo III: LA VEDANTA",
  "Párrafo IV: LA LEY ESCRITA O DECALOGO DE MOISES",
  "Párrafo V: TRAGEDIA ENTRE MOISES Y EL PUEBLO",
  "Párrafo VI: ALGUNAS RELIGIONES QUE SIGUEN LA LEY DEL SINAI",
  "Párrafo VII: LA RELIGION BUDA O IGLESIA BUDA",
  "Párrafo VIII: LA LEY DE MOISES Y EL PUEBLO DE ISRAEL",
  "CAPITULO SÉPTIMO [Bis]: JUAN EL SOLITARIO Y JESUS NAZARENO",
  "Párrafo I: UN HOMBRE FUERTE Y AUSTERO: JUAN",
  "Párrafo II: JESUS DE NAZARETH",
  "Párrafo III: JUAN Y JESUS NO SON HOMBRES SOBRENATURALES",
  "Párrafo IV: PERSECUCIÓN DE LOS SACERDOTES A JESÚS",
  "Párrafo V: FUNDACIÓN DE LA IGLESIA CRISTIANA",
  "CAPITULO NOVENO: LA RELIGION CRISTIANA Y LA IGLESIA CATOLICA",
  "Párrafo I: JESUS NI SUS APOSTOLES NO LEVANTARON TEMPLOS",
  "Párrafo II: TOMA FORMA LA IGLESIA CATOLICA",
  "Párrafo III: PREMEDITACION INAUDITA",
  "Párrafo IV: LA FALACIA Y LA FUERZA BRUTAS JUNTAS",
  "Párrafo V: LA IGLESIA CATOLICA IMPONE LA IGNORANCIA",
  "Párrafo VI: LA ESPAÑA PAGANA Y LA FOBIA DE LOS PAPAS",
  "Párrafo VII: LA CONCUPISCENCIA ESTA EN AUGE",
  "Capítulo Décimo: CULTOS, RITOS Y DOGMAS DE LA RELIGION CATOLICA",
  "Párrafo I: EL BOATO PROVOCADOR",
  "Párrafo II: VERDADES MATEMÁTICAS",
  "Párrafo III: EL CRIMEN DEL SACRAMENTO DE LA EUCARISTIA",
  "Párrafo IV: PIO IX INFALIBLEMENTE FALIBLE",
  "Párrafo V: TRISTE FIN DE LA RELIGIÓN CATÓLICA",
  "Capítulo Undécimo: MI SITUACIÓN, EL SILLABUS Y CONDENAS A CLÉRIGOS",
  "Párrafo I: BUSCANDO NUEVOS CAMINOS",
  "Párrafo II: MAJANDO LAS GRANZAS",
  "Párrafo III: ALGUNAS CAUSAS DE CLÉRIGOS ANTE LA JUSTICIA",
  "Párrafo IV: HISTORIA INTERESANTE, UN PAPA Y PAPÁ QUE HACE RAYA. RODRIGO",
  "Párrafo V: LA CONDESA DE VALLADOLID ESPOSA DE BORGIA",
  "Párrafo VI: NOCHE DE TERRIBLES TRAGEDIAS",
  "Párrafo VII: HORRORES Y BACANAL",
  "Párrafo VIII: BACANAL, CRÍMENES Y FRATRICIDIO",
  "Párrafo IX: UN ESPÍA",
  "Párrafo X: LA FATALIDAD LOS PERSIGUE",
  "Párrafo XI: UNA MENTIRA PIADOSA LOS PIERDE A TODOS",
  "Párrafo XII: LA LUJURIA EN SU GRADO MÁXIMO",
  "Párrafo XIII: PUSILANIMIDAD DE LOS REYES ESCLAVOS DE LA RELIGION",
  "Párrafo XIV: JUANUCHO HACE HONOR A SUS JURAMENTOS",
  "Párrafo XV: SAVONAROLA",
  "Párrafo XVI: MUERTE DE LA CONDESA Y ESTUPRO DE VALENCIA",
  "Párrafo XVII: MUERTE DE JUANUCHO, VALENCIA Y ADUCIO",
  "Párrafo XVIII: LA SANTIDAD DE LOS PONTIFICES",
  "Capítulo Duodécimo: LA RAZÓN TIENE RAZÓN, LA IGLESIA CATÓLICA MIENTE",
  "Párrafo I: DESCUBRIMIENTOS EN MI VIAJE",
  "Párrafo II: CONFIRMACIONES",
  "Párrafo III: LA ESCUELA ESENICA",
  "Párrafo IV: EL GRITO DE LA CONCIENCIA",
  "Párrafo V: EL ASIENTO DEL DIOS DE AMOR",
  "Capítulo Trece: EL ESPIRITISMO, O IGLESIA UNIVERSAL",
  "Párrafo I: EL ESPIRITISMO ES TAN ANTIGUO COMO EL CREADOR",
  "Párrafo II: LOS TENIDOS POR LOCOS, SON LOS CUERDOS HOY",
  "Párrafo III: SIGUE LA MATERIA DEL ANTERIOR",
  "Capítulo Catorce: DOCTRINA DEL ESPIRITISMO",
  "Párrafo I: Mi principio fundamental dictado por el mismo Abraham",
  "Párrafo II: LA TIERRA SOLIDARIZADA CON EL UNIVERSO",
  "Párrafo III: AMOR ES LA LEY",
  "Párrafo IV: MI CONFESIÓN",
  "Capítulo Quince: [Preguntas Fundamentales]",
  "Párrafo I: QUE ES EL ESPIRITISMO",
  "Párrafo II: EL HOMBRE ES LA ESENCIA VIVA DE LAS COSAS VIVAS",
  "Párrafo III: ¿ DE DONDE VIENE ?",
  "Párrafo IV: ¿PORQUE ESTAMOS AQUÍ ?",
  "Párrafo V: ¿DONDE VA ?",
  "Capítulo Décimosexto: EL UNIVERSO-GRANDEZA DE DIOS",
  "Párrafo I: LA CIENCIA LLENA DE VACÍOS",
  "Párrafo II: LOS HOMBRES SON MALOS Y VICIOSOS",
  "Párrafo III: GRANDEZA DEL UNIVERSO Y TODO EL NOS PERTENECE",
  "Párrafo IV: UN PUNTO DE LA GRANDEZA DEL HOMBRE",
  "Párrafo V: REFLEXIONES LÓGICAS",
  "Párrafo VI: JUSTIFICACIÓN A KARDEC",
  "CAPITULO DECIMOSEPTIMO: CONFIRMACIONES DE TODO LO ANTERIOR",
  "Párrafo I: MI PEDIDO",
  "Párrafo II: TESTIMONIO DE JUAN (BAUTISTA) EL SOLITARIO",
  "Párrafo III: SORPRESA, PEDIDO Y PROMESA",
  "Párrafo IV: EL LOBO, EL PASTOR, EL PALO Y LA CORDERA",
  "Párrafo V: VERDADES AMARGAS Y ACUSADORAS",
  "CAPITULO DECIMO OCTAVO: CONFIRMACIONES",
  "Párrafo II: EL ESPÍRITU DE VERDAD",
  "Párrafo III: LLAMADA A JUICIO A LOS ESPÍRITUS Y LOS HOMBRES",
  "EPÍLOGO: El Juicio Universal",
  "Párrafo II: ¿ QUIEN SOY YO ?",
  "PUNTO FINAL. LA BESTIA 666",
  "112 Temas del Cuestionario Espirita Racional"
];

const content = `export interface LibraryBook {
  id: string;
  title: string;
  pdfUrl?: string;
  index: string[];
}

export const LIBRARY_BOOKS: LibraryBook[] = [
  {
    id: "alfaqui-vademecum",
    title: "Alfaqui Vademecum",
    pdfUrl: "/biblioteca/Alfaqui-Vademecum.pdf",
    index: ["Prólogo", "Introducción", "Consejos y Recomendaciones", "Los 13 Grados", "Conclusión"]
  },
  {
    id: "buscando-a-dios-joaquin-trincado",
    title: "Buscando a Dios",
    pdfUrl: "/biblioteca/Buscando-A-Dios-Joaquin-Trincado.pdf",
    index: ${JSON.stringify(BUSCANDO_A_DIOS_INDEX, null, 2)}
  },
  {
    id: "conocete-a-ti-mismo-1",
    title: "Conócete a ti mismo",
    pdfUrl: "/biblioteca/Conocete_a_Ti_Mismo-1.pdf",
    index: [
      "Conócete a ti Mismo",
      "Pauta Pedagógica",
      "La Escuela Magnético-Espiritual",
      "Consejos y Recomendaciones",
      "El amor lo medirás por el que tengas a tu hermano",
      "El progreso se adquiere por esfuerzo propio",
      "No queremos fe ciega, sino estudio"
    ]
  },
  {
    id: "cuestionario-espirita-racional",
    title: "Cuestionario Espirita Racional",
    pdfUrl: "/biblioteca/cuestionario espirita racional.pdf",
    index: Array.from({length: 112}, (_, i) => \`Pregunta \${i + 1}\`)
  },
  {
    id: "filosof-a-austera-racional",
    title: "Filosofía Austera Racional",
    pdfUrl: "/biblioteca/FILOSOFÍA AUSTERA RACIONAL.pdf",
    index: ["PRÓLOGO", "INTRODUCCIÓN", "CAPÍTULO I: El Universo", "CAPÍTULO II: La Creación", "CAPÍTULO III: El Espíritu", "CAPÍTULO IV: La Reencarnación", "CAPÍTULO V: La Ley de Afinidad", "CAPÍTULO VI: El Juicio Final", "EPÍLOGO"]
  }
];
`;

fs.writeFileSync('F:/proyectos 2/trincado descargado de github/src/data/library.ts', content);
console.log("library.ts actualizado con el índice LITERAL de Buscando a Dios.");

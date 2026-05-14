import fs from 'fs';

const BUSCANDO_A_DIOS_INDEX = [
  "Prólogo",
  "Introducción",
  "CAPITULO PRIMERO: La naturaleza terrestre",
  "CAPITULO SEGUNDO: Sus habitantes irracionales",
  "CAPITULO TERCERO: Sus habitantes racionales",
  "CAPITULO CUARTO: Los profetas",
  "CAPITULO QUINTO: La Doctrina de Jesús",
  "1. Bienaventurados los pobres de espíritu",
  "2. Bienaventurados los tristes",
  "3. Bienaventurados los mansos",
  "4. Bienaventurados los que tienen hambre y sed de Justicia",
  "5. Bienaventurados los misericordiosos",
  "6. Bienaventurados los limpios de corazón",
  "7. Bienaventurados los pacificadores",
  "8. Bienaventurados los que padecen persecución",
  "9. Vosotros sois la sal de la tierra",
  "10. Vosotros sois la Luz del mundo",
  "11. No penséis que he venido para invalidar la ley",
  "12. Cualquiera que se enojase sin razón con su hermano",
  "13. Vuelve en amistad con tu hermano",
  "14. Ponte de acuerdo con tu adversario",
  "15. Cualquiera que mira a una mujer para codiciarla",
  "16. No juréis en ninguna manera",
  "17. Ojo por ojo, y diente por diente",
  "18. Amad a vuestros enemigos",
  "19. Sed pues vosotros perfectos",
  "20. No hagáis vuestra limosna delante de los hombres",
  "21. Cuando tú haces limosna no sepa tu mano izquierda",
  "22. Cuando orares, no seas como los hipócritas",
  "23. Padre nuestro que estás en los cielos",
  "24. Perdónanos nuestras deudas",
  "25. No hagáis tesoros en la tierra",
  "26. Donde estuviese vuestro tesoro allá estará vuestro corazón",
  "27. Ninguno puede servir a dos señores",
  "28. No os acongojéis por vuestra vida",
  "29. Mirad a las aves del cielo",
  "30. Aprended de los lirios del campo",
  "31. Buscad primero el reino de Dios y su justicia",
  "32. No juzguéis, por que también no seáis juzgados",
  "33. ¿Por qué miras la arista que está en el ojo de tu hermano?",
  "34. No deis lo santo a los perros",
  "35. Pedid y recibiréis, buscad y hallaréis",
  "36. Entrar por la puerta estrecha",
  "37. Guardaos de los falsos profetas",
  "38. Por sus frutos los conoceréis",
  "39. No cualquiera que dice: Señor, Señor",
  "40. El varón prudente que edificó su casa sobre la peña",
  "CAPITULO SEXTO: El Espiritismo Luz y Verdad",
  "CAPITULO SEPTIMO: La ley es una, la substancia una",
  "CAPITULO OCTAVO: El Magnetismo Espiritual",
  "CAPITULO NOVENO: La Reencarnación",
  "CAPITULO DECIMO: El Juicio Final",
  "EPÍLOGO: La Bestia 666",
  "112 Temas del Cuestionario Espirita Racional"
];

const FILOSOFIA_AUSTERA_INDEX = [
  "PRÓLOGO",
  "INTRODUCCIÓN",
  "CAPÍTULO I: El Universo",
  "CAPÍTULO II: La Creación",
  "CAPÍTULO III: El Espíritu",
  "CAPÍTULO IV: La Reencarnación",
  "CAPÍTULO V: La Ley de Afinidad",
  "CAPÍTULO VI: El Juicio Final",
  "EPÍLOGO"
];

const libraryBooks = [
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
    index: BUSCANDO_A_DIOS_INDEX
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
    index: [
      "¿Cómo se llama nuestra Escuela?",
      "¿Quién es su fundador?",
      "¿Qué fines persigue nuestra Escuela?",
      "¿Qué se entiende por 'La Comuna'?",
      "¿El Espiritismo es religión?",
      "¿Cómo se llama nuestro Padre, en el Universo?",
      "¿Dónde radica el alma?",
      "¿Qué es el espíritu y dónde radica?"
    ]
  },
  {
    id: "filosof-a-austera-racional",
    title: "Filosofía Austera Racional",
    pdfUrl: "/biblioteca/FILOSOFÍA AUSTERA RACIONAL.pdf",
    index: FILOSOFIA_AUSTERA_INDEX
  },
  {
    id: "ley-de-las-mediumidades-en-general",
    title: "Ley de las Mediumidades",
    pdfUrl: "/biblioteca/LEY DE LAS MEDIUMIDADES EN GENERAL.pdf",
    index: ["Prefacio", "Art. 33", "Art. 34", "Art. 35", "Art. 36", "Art. 37", "Art. 38", "El Maestro Juez"]
  }
];

const content = `export interface LibraryBook {
  id: string;
  title: string;
  pdfUrl?: string;
  index: string[];
}

export const LIBRARY_BOOKS: LibraryBook[] = ${JSON.stringify(libraryBooks, null, 2)};
`;

fs.writeFileSync('F:/proyectos 2/trincado descargado de github/src/data/library.ts', content);
console.log("library.ts actualizado con éxito.");

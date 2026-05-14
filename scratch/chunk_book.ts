import * as fs from 'fs';
import * as path from 'path';

const inputFile = 'F:\\proyectos 2\\trincado descargado de github\\scratch\\buscando_a_dios_full.txt';
const outputFile = 'F:\\proyectos 2\\trincado descargado de github\\src\\data\\buscando_a_dios_content.ts';

const fullText = fs.readFileSync(inputFile, 'utf-8');

const INDEX = [
      "Prólogo",
      "INTRODUCCIÓN",
      "CAPITULO PRIMERO: LA NATURALEZA TERRESTRE",
      "CAPITULO SEGUNDO: SUS HABITANTES IRRACIONALES",
      "CAPITULO TERCERO: SUS HABITANTES RACIONALES",
      "PÁRRAFO I: EL HOMBRE DE SANGRE CÁLIDA",
      "PÁRRAFO II: EL HOMBRE DE SANGRE HELADA",
      "PARRAFO III: EL HOMBRE DE SANGRE TEMPLADA",
      "PÁRRAFO IV: EL HOMBRE CONSTITUYE LA FAMILIA",
      "CAPITULO CUARTO: EL HOMBRE Y SUS FACULTADES",
      "PARRAFO I: EL HOMBRE ENCIENDE EL FUEGO",
      "PARRAFO II: EL HOMBRE TIENE LA FACULTAD DE DISCERNIR",
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
      "Párrafo IV: PERSECUCIÓN DE LOS SACERPOTES A JESÚS",
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
      "Párrafo XVI: MUERTE DE LA CONDESA y ESTUPRO DE VALENCIA",
      "Párrafo XVII: MUERTE DE JUANUCHO, VALENCIA y ADUCIO",
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
      "Párrafo I: Mi principio fundamental dictado por el mismo Abraham ante muchos testigos presenciales.",
      "Párrafo II: LA TIERRA SOLIDARIZADA CON EL UNIVERSO",
      "Párrafo III: AMOR ES LA LEY",
      "Párrafo IV: MI CONFESIÓN",
      "Cápitulo Décimoquinto: NO SE PUEDE IR MAS ALLA DEL ESPIRITISMO",
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
      "EPÍLOGO",
      "Párrafo II: ¿ QUIEN SOY YO ?",
      "EPILOGÓN",
      "Punto 1: El Anticristo. ¿Cuál es?",
      "Punto 2: El Espiritismo según un Presbítero",
      "PUNTO FINAL. LA BESTIA 666"
];

function normalize(text: string): string {
    return text.toLowerCase()
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/[^a-z0-9]/g, '')
        .trim();
}

const lines = fullText.split('\n');
const results: Record<string, string> = {};
let currentKey = "";
let currentContent: string[] = [];

let nextIndexToMatch = 0;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
        if (currentKey) currentContent.push(lines[i]);
        continue;
    }
    
    const normLine = normalize(line);
    const indexTitle = INDEX[nextIndexToMatch];
    
    if (!indexTitle) {
        if (currentKey) currentContent.push(lines[i]);
        continue;
    }

    let matched = false;
    
    if (indexTitle === "EPÍLOGO") {
        if (normLine === "epilogo") matched = true;
    } else if (indexTitle === "EPILOGÓN") {
        if (normLine === "epilogon") matched = true;
    } else if (indexTitle.startsWith("Punto 1:")) {
        if (normLine.startsWith("punto1") || (normLine.startsWith("punto") && normLine.includes("anticristo"))) matched = true;
    } else if (indexTitle.startsWith("Punto 2:")) {
        if (normLine.startsWith("punto2") || (normLine.startsWith("punto") && normLine.includes("presbitero"))) matched = true;
    } else if (indexTitle.startsWith("Punto I:")) {
        if (normLine === "i" && line.length < 5) matched = true;
        else if (line.toUpperCase().startsWith("I:")) matched = true;
    } else if (indexTitle.startsWith("Párrafo I: Mi principio fundamental")) {
        // Strict literal match for Cap 14 Paragraph 1
        if (normLine.includes("principifundamental") && normLine.includes("abraham")) matched = true;
    } else {
        const normIndex = normalize(indexTitle.split(':')[0]);
        const fullNormIndex = normalize(indexTitle);
        if (normLine === normIndex || normLine === fullNormIndex || 
            (normIndex.length > 8 && normLine.includes(normIndex))) {
            matched = true;
        }
    }

    if (matched) {
        if (currentKey) {
            results[currentKey] = currentContent.join('\n').trim();
        }
        currentKey = indexTitle;
        currentContent = [];
        nextIndexToMatch++;
    } else {
        if (currentKey) currentContent.push(lines[i]);
    }
}

if (currentKey) {
    results[currentKey] = currentContent.join('\n').trim();
}

INDEX.forEach(key => {
    if (!results[key] || results[key].length < 10) {
        results[key] = "Contenido en proceso de extracción o no disponible en esta sección.";
    }
});

const outputData = `export const BUSCANDO_A_DIOS_CONTENT: Record<string, string> = ${JSON.stringify(results, null, 2)};`;
fs.writeFileSync(outputFile, outputData);
console.log('Successfully generated buscando_a_dios_content.ts with literal and strictly limited index.');

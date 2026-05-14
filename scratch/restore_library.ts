import fs from 'fs';
import path from 'path';

const TEXTS_DIR = 'f:/proyectos 2/trincado descargado de github/scratch/texts';
const LIBRARY_FILE = 'f:/proyectos 2/trincado descargado de github/src/data/library.ts';

function cleanLibraryFile() {
    let content = fs.readFileSync(LIBRARY_FILE, 'utf8');
    // Regex para encontrar cada bloque de libro y su índice
    // Buscamos desde "id": "..." hasta el final del array "index": [...]
    const bookRegex = /\{\s*"id":\s*"([^"]+)"[\s\S]+?"index":\s*\[([\s\S]*?)\]\s*\}/g;
    
    // Esto es peligroso si el JSON está muy roto.
    // Intentaremos una aproximación más conservadora:
    // Reemplazar todo lo que esté entre "index": [ y el primer ] que sea seguido por } o , {
    const fixedContent = content.replace(/("index":\s*\[)[\s\S]+?(\]\s*(\}|,)) /g, '$1 [] $2');
    // No, mejor no.
}

// Intentaremos restaurar library.ts manualmente a un estado base limpio.
const BASE_LIBRARY = `
export const LIBRARY_BOOKS = [
  {
    "id": "alfaqui-vademecum",
    "title": "Alfaqui Vademecum",
    "pdfUrl": "/biblioteca/alfaqui vademecum.pdf",
    "index": []
  },
  {
    "id": "buscando-a-dios-joaquin-trincado",
    "title": "Buscando A Dios Joaquin Trincado",
    "pdfUrl": "/biblioteca/buscando a dios joaquin trincado.pdf",
    "index": []
  },
  {
    "id": "codigo-de-amor-universal-tomo2-1975",
    "title": "Codigo De Amor Universal Tomo2 1975",
    "pdfUrl": "/biblioteca/codigo de amor universal tomo2 1975.pdf",
    "index": []
  },
  {
    "id": "codigodeamoruniversaltomoi-1",
    "title": "Codigodeamoruniversaltomoi 1",
    "pdfUrl": "/biblioteca/CodigodeAmorUniversalTomoI-1.pdf",
    "index": []
  },
  {
    "id": "conocete-a-ti-mismo-1",
    "title": "Conocete A Ti Mismo 1",
    "pdfUrl": "/biblioteca/Conocete_a_Ti_Mismo-1.pdf",
    "index": []
  },
  {
    "id": "cuestionario-espirita-racional",
    "title": "Cuestionario Espirita Racional",
    "pdfUrl": "/biblioteca/cuestionario espirita racional.pdf",
    "index": []
  },
  {
    "id": "el-espiritismo-estudiado",
    "title": "El Espiritismo Estudiado",
    "pdfUrl": "/biblioteca/EL ESPIRITISMO ESTUDIADO.pdf",
    "index": []
  },
  {
    "id": "el-magnetismo-en-su-origen",
    "title": "El Magnetismo En Su Origen",
    "pdfUrl": "/biblioteca/el magnetismo en su origen.pdf",
    "index": []
  },
  {
    "id": "espiritismo-en-su-asiento",
    "title": "Espiritismo En Su Asiento",
    "pdfUrl": "/biblioteca/ESPIRITISMO EN SU ASIENTO.pdf",
    "index": []
  },
  {
    "id": "estatutos-y-reglamentos",
    "title": "Estatutos Y Reglamentos",
    "pdfUrl": "/biblioteca/estatutos y reglamentos.pdf",
    "index": []
  },
  {
    "id": "filosofia-enciclopedica-universal-tomo-1",
    "title": "Filosofia Enciclopedica Universal Tomo 1",
    "pdfUrl": "/biblioteca/filosofia enciclopedica universal tomo 1.pdf",
    "index": []
  },
  {
    "id": "filosofia-enciclopedica-universal-tomo-2",
    "title": "Filosofia Enciclopedica Universal Tomo 2",
    "pdfUrl": "/biblioteca/filosofia enciclopedica universal tomo 2.pdf",
    "index": []
  },
  {
    "id": "filosofía-austera-racional",
    "title": "Filosofía Austera Racional",
    "pdfUrl": "/biblioteca/FILOSOFÍA AUSTERA RACIONAL.pdf",
    "index": []
  },
  {
    "id": "jesús-hombre-y-no-dios",
    "title": "Jesús Hombre Y No Dios",
    "pdfUrl": "/biblioteca/jesús hombre y no dios.pdf",
    "index": []
  },
  {
    "id": "la-revolución-de-méxico",
    "title": "La Revolución De México",
    "pdfUrl": "/biblioteca/la revolución de méxico.pdf",
    "index": []
  },
  {
    "id": "laudode-rigor",
    "title": "Laudode Rigor",
    "pdfUrl": "/biblioteca/laudode rigor.pdf",
    "index": []
  },
  {
    "id": "ley-de-las-mediumidades-en-general",
    "title": "Ley De Las Mediumidades En General",
    "pdfUrl": "/biblioteca/ley de las mediumidades en general.pdf",
    "index": []
  },
  {
    "id": "los-cinco-amores",
    "title": "Los Cinco Amores",
    "pdfUrl": "/biblioteca/los cinco amores.pdf",
    "index": []
  },
  {
    "id": "los-extremos-se-tocan",
    "title": "Los Extremos Se Tocan",
    "pdfUrl": "/biblioteca/los extremos se tocan.pdf",
    "index": []
  },
  {
    "id": "primer-rayo-de-luz",
    "title": "Primer Rayo De Luz",
    "pdfUrl": "/biblioteca/primer rayo de luz.pdf",
    "index": []
  },
  {
    "id": "profilaxis-de-la-vida",
    "title": "Profilaxis De La Vida",
    "pdfUrl": "/biblioteca/profilaxis de la vida.pdf",
    "index": []
  },
  {
    "id": "reglamento-interno-e.m.e.delac-.u.-1",
    "title": "Reglamento Interno E.m.e.delac .u. 1",
    "pdfUrl": "/biblioteca/reglamento interno e.m.e.delac .u.-1.pdf",
    "index": []
  },
  {
    "id": "tercera-etapa",
    "title": "Tercera Etapa",
    "pdfUrl": "/biblioteca/tercera etapa.pdf",
    "index": []
  },
  {
    "id": "v-i-d-a---d-e----m-a-r-i-a",
    "title": "V I D A   D E    M A R I A",
    "pdfUrl": "/biblioteca/v i d a   d e    m a r i a.pdf",
    "index": []
  },
  {
    "id": "[1library.co]-discurso-obispo-strossmayer",
    "title": "[1library.co] Discurso Obispo Strossmayer",
    "pdfUrl": "/biblioteca/[1library.co] discurso obispo strossmayer.pdf",
    "index": []
  }
];
`;

fs.writeFileSync(LIBRARY_FILE, BASE_LIBRARY);
console.log("library.ts restaurado a estado base limpio.");

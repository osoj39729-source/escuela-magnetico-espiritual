import fs from 'fs';
import path from 'path';

// Normalización atómica (igual que en geminiService.ts)
const normalize = (s) => s
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]/gi, "")
  .toLowerCase();

function validar() {
  const libPath = path.resolve('F:/trincado/src/data/library.ts');
  const jsonDir = path.resolve('F:/trincado/public/data/contents');
  
  let libContent = fs.readFileSync(libPath, 'utf8');
  // Extraer el array de libros
  const startIdx = libContent.indexOf('LIBRARY_BOOKS: LibraryBook[] = [');
  const arrayStart = libContent.indexOf('[', startIdx);
  // Encontrar el fin del array (esto asume que el array es el último gran bloque exportado)
  const arrayEnd = libContent.lastIndexOf(']');
  
  const arrayStr = libContent.substring(arrayStart, arrayEnd + 1);
  
  let books;
  try {
    books = eval(arrayStr);
  } catch (e) {
    console.error("No se pudo evaluar library.ts", e);
    return;
  }

  let totalLinks = 0;
  let brokenLinks = 0;
  
  console.log("==================================================");
  console.log("INICIANDO VALIDACIÓN ATÓMICA DE SÍNAPSIS DOCTRINAL");
  console.log("==================================================\n");

  for (const book of books) {
    const bookId = book.id;
    const chapters = book.index;
    
    const jsonPath = path.join(jsonDir, `${bookId}_content.json`);
    if (!fs.existsSync(jsonPath)) {
      console.log(`[ALERTA CRÍTICA] Archivo de datos no encontrado: ${bookId}`);
      continue;
    }
    
    let contentObj;
    try {
      let contentStr = fs.readFileSync(jsonPath, 'utf8');
      contentStr = contentStr.replace(/^\uFEFF/, ''); // Eliminar BOM
      contentObj = JSON.parse(contentStr);
    } catch (e) {
      console.log(`[ALERTA CRÍTICA] JSON Corrupto: ${bookId} -> ${e.message}`);
      continue;
    }
    
    // Crear mapa de llaves normalizadas
    const jsonKeysNormalized = {};
    for (const key of Object.keys(contentObj)) {
      jsonKeysNormalized[normalize(key)] = key;
    }
    
    for (const chapter of chapters) {
      totalLinks++;
      const normChapter = normalize(chapter);
      
      if (!jsonKeysNormalized[normChapter]) {
        // Fallback: prefijo numérico
        const numPrefix = chapter.split(':')[0].trim();
        let prefixSalvage = false;
        if (numPrefix && !isNaN(Number(numPrefix))) {
          const match = Object.keys(contentObj).find(k => k.startsWith(numPrefix + ':'));
          if (match) prefixSalvage = true;
        }
        
        if (!prefixSalvage) {
          console.log(`❌ SÍNAPSIS ROTA IRREPARABLE en [${bookId}]:`);
          console.log(`   Índice exige: '${chapter}'`);
          brokenLinks++;
        }
      }
    }
  }

  console.log(`\n==================================================`);
  console.log(`RESUMEN DE AUDITORÍA:`);
  console.log(`Total de Átomos (Sínapsis) Validados: ${totalLinks}`);
  console.log(`Sínapsis Totalmente Rotas: ${brokenLinks}`);
  console.log(`==================================================`);
  
  if (brokenLinks === 0) {
    console.log("ESTADO: PERFECCIÓN ESTRUCTURAL LOGRADA.");
  }
}

validar();

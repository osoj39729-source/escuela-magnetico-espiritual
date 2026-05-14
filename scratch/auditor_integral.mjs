import fs from 'fs';
import path from 'path';

// Normalización atómica (EXACTAMENTE la misma que usa la IA en la app)
const normalize = (s) => s
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]/gi, "")
  .toLowerCase();

function iniciarAuditoriaIntegral() {
  const libPath = path.resolve('F:/trincado/src/data/library.ts');
  const jsonDir = path.resolve('F:/trincado/public/data/contents');
  const reportPath = path.resolve('F:/trincado/scratch/reporte_auditoria.txt');
  
  let libContent = fs.readFileSync(libPath, 'utf8');
  const startIdx = libContent.indexOf('LIBRARY_BOOKS: LibraryBook[] = [');
  const arrayStart = libContent.indexOf('[', startIdx);
  const arrayEnd = libContent.lastIndexOf(']');
  const arrayStr = libContent.substring(arrayStart, arrayEnd + 1);
  
  let books;
  try {
    books = eval(arrayStr);
  } catch (e) {
    console.error("Fallo masivo al evaluar library.ts", e);
    return;
  }

  let totalCapitulos = 0;
  let exitoAbsoluto = 0;
  let fallosRAG = [];
  let librosProblematicos = new Set();
  
  console.log("==================================================");
  console.log("🚀 ACTIVANDO AGENTE INSPECTOR: AUDITORÍA RAG SIMULADA");
  console.log("==================================================\n");

  for (const book of books) {
    const bookId = book.id;
    const chapters = book.index;
    
    const jsonPath = path.join(jsonDir, `${bookId}_content.json`);
    if (!fs.existsSync(jsonPath)) {
      fallosRAG.push(`CRÍTICO: JSON ausente para libro [${bookId}]`);
      continue;
    }
    
    let contentObj;
    try {
      let contentStr = fs.readFileSync(jsonPath, 'utf8');
      contentStr = contentStr.replace(/^\uFEFF/, '');
      contentObj = JSON.parse(contentStr);
    } catch (e) {
      fallosRAG.push(`CRÍTICO: JSON corrupto en libro [${bookId}]: ${e.message}`);
      continue;
    }
    
    // Simular memoria de la IA (diccionario de llaves normalizadas)
    const jsonKeysNormalized = {};
    for (const key of Object.keys(contentObj)) {
      jsonKeysNormalized[normalize(key)] = key;
    }
    
    for (const chapter of chapters) {
      totalCapitulos++;
      const targetKey = normalize(chapter);
      
      const foundOriginalKey = jsonKeysNormalized[targetKey];
      
      if (!foundOriginalKey) {
        // Fallback de Prefijo Numérico (tal cual lo hace la IA en geminiService)
        const numPrefix = chapter.split(':')[0].trim();
        let prefixFoundKey = null;
        if (numPrefix && !isNaN(Number(numPrefix))) {
          prefixFoundKey = Object.keys(contentObj).find(k => k.startsWith(numPrefix + ':'));
        }
        
        if (!prefixFoundKey) {
          fallosRAG.push(`RAG CIEGO en [${bookId}]: No encontró -> "${chapter}"`);
          librosProblematicos.add(bookId);
        } else {
          // Evaluar salud del texto recuperado por prefijo
          const texto = contentObj[prefixFoundKey];
          if (!texto || texto.length < 5) {
            fallosRAG.push(`TEXTO VACÍO en [${bookId}] por Prefijo: "${chapter}" -> Recuperó llave: "${prefixFoundKey}" pero no tiene contenido.`);
            librosProblematicos.add(bookId);
          } else {
            exitoAbsoluto++;
          }
        }
      } else {
        // Evaluar salud del texto recuperado por normalización
        const texto = contentObj[foundOriginalKey];
        if (!texto || texto.length < 5) {
          fallosRAG.push(`TEXTO VACÍO en [${bookId}] por Normalización: "${chapter}"`);
          librosProblematicos.add(bookId);
        } else {
          exitoAbsoluto++;
        }
      }
    }
  }

  // Escribir reporte
  fs.writeFileSync(reportPath, fallosRAG.join('\n'), 'utf8');

  console.log(`\n==================================================`);
  console.log(`📊 RESULTADOS DE LA AUDITORÍA RAG:`);
  console.log(`- Capítulos Simulados: ${totalCapitulos}`);
  console.log(`- Recuperaciones Exitosas (Texto Sano): ${exitoAbsoluto}`);
  console.log(`- Fallas de Recuperación (Ceguera RAG): ${fallosRAG.length}`);
  console.log(`- Libros con Fallas: ${Array.from(librosProblematicos).join(', ')}`);
  console.log(`==================================================`);
  console.log(`📄 Reporte detallado guardado en: ${reportPath}`);
}

iniciarAuditoriaIntegral();

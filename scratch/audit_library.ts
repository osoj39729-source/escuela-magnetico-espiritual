import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LIBRARY_BOOKS } from '../src/data/library.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const RESULTS_FILE = path.join(__dirname, 'audit_results.json');

async function runAudit() {
  console.log("Iniciando Auditoría de Biblioteca Doctrinal...");
  const report: any = {};

  for (const book of LIBRARY_BOOKS) {
    const contentPath = path.join(ROOT, 'public', 'data', 'contents', `${book.id}_content.json`);
    const esenciaPath = path.join(ROOT, 'public', 'data', 'contents', `${book.id}_esencia.json`);

    report[book.id] = {
      title: book.title,
      hasContent: fs.existsSync(contentPath),
      hasEsencia: fs.existsSync(esenciaPath),
      invalidNodes: [] as string[],
      totalNodes: book.index.length
    };

    if (report[book.id].hasContent) {
      const content = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
      
      for (const node of book.index) {
        const text = content[node] || "";
        
        // Criterios de nodo inválido:
        // 1. Está vacío
        // 2. Es demasiado corto (< 50 caracteres)
        // 3. Contiene solo el título repetido
        // 4. Es solo un número de página (ej: "Página 123")
        
        const cleanText = text.trim();
        if (cleanText.length < 50) {
          report[book.id].invalidNodes.push(node);
        } else {
          // Check for noise patterns
          const noisePatterns = [
              /^[0-9\s\.\:\-]+$/, // Solo números y puntos
              /^[A-Z\s]+$/,       // Solo mayúsculas (títulos cortos)
          ];
          if (noisePatterns.some(p => p.test(cleanText))) {
            report[book.id].invalidNodes.push(node);
          }
        }
      }
    } else {
      // Si no tiene contenido, todos los nodos son inválidos
      report[book.id].invalidNodes = book.index;
    }
  }

  fs.writeFileSync(RESULTS_FILE, JSON.stringify(report, null, 2));
  
  // Generar un resumen legible
  console.log("\n--- RESUMEN DE AUDITORÍA ---");
  Object.keys(report).forEach(id => {
    const r = report[id];
    console.log(`${r.hasContent ? '✅' : '❌'} ${r.title}: ${r.invalidNodes.length}/${r.totalNodes} nodos marcados como bloqueables.`);
  });
  console.log("\nResultados detallados en:", RESULTS_FILE);
}

runAudit().catch(console.error);

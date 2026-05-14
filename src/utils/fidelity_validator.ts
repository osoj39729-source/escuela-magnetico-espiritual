import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..', '..'); // Subir dos niveles para llegar a la raíz del proyecto

export interface FidelityReport {
  isValid: boolean;
  errors: string[];
  missingKeys: string[];
  coveragePct: number;
}

/**
 * Validador de Fidelidad Doctrinal
 * Asegura que las esencias cumplan con el protocolo 1:1 y el Diccionario Sináptico.
 */
export function validateBookFidelity(bookId: string, indexNodes: string[]): FidelityReport {
  const esenciaPath = path.join(ROOT, 'public', 'data', 'contents', `${bookId}_esencia.json`);
  const errors: string[] = [];
  const missingKeys: string[] = [];
  
  if (!fs.existsSync(esenciaPath)) {
    return { isValid: false, errors: ['Archivo de esencia no encontrado.'], missingKeys: indexNodes, coveragePct: 0 };
  }

  const esencias = JSON.parse(fs.readFileSync(esenciaPath, 'utf-8'));
  let validCount = 0;

  for (const node of indexNodes) {
    const esc = esencias[node];
    if (!esc) {
      missingKeys.push(node);
      continue;
    }

    // Validación de Estructura de Estandarización
    const requiredKeys = [
      'PilotoDeCoherencia', 
      'CitaInelutable', 
      'EjemploPedagogico', 
      'IdeasPrincipales', 
      'NodosSinapticos', 
      'ContextoDiccionario'
    ];

    const missingInNode = requiredKeys.filter(k => !esc[k] || (Array.isArray(esc[k]) && esc[k].length === 0));
    
    if (missingInNode.length > 0) {
      errors.push(`Nodo [${node}] incompleto. Faltan: ${missingInNode.join(', ')}`);
    } else {
      // Validar que cada nodo sináptico tenga su contexto
      const terms = esc.NodosSinapticos;
      const contexts = Object.keys(esc.ContextoDiccionario || {});
      const missingContexts = terms.filter((t: string) => !contexts.includes(t));
      
      if (missingContexts.length > 0) {
        errors.push(`Nodo [${node}] sin contexto para: ${missingContexts.join(', ')}`);
      } else {
        validCount++;
      }
    }
  }

  const coveragePct = Math.round((validCount / indexNodes.length) * 100);

  return {
    isValid: errors.length === 0 && missingKeys.length === 0,
    errors,
    missingKeys,
    coveragePct
  };
}

// Script de ejecución rápida para auditoría manual
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const bookId = process.argv[2] || 'buscando-a-dios-joaquin-trincado';
  // Nota: En producción importaríamos LIBRARY_BOOKS, aquí simulamos para el log
  console.log(`[VALIDADOR] Ejecutando auditoría de fidelidad para: ${bookId}...`);
}

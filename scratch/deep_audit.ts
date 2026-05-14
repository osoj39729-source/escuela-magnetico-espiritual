import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LIBRARY_BOOKS } from '../src/data/library.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const RESULTS_FILE = path.join(__dirname, 'deep_audit_results.json');

async function runDeepAudit() {
  console.log("Iniciando AUDITORÍA DE SINCERIDAD (Deep Audit)...");
  const report: any = {};

  for (const book of LIBRARY_BOOKS) {
    const esenciaPath = path.join(ROOT, 'public', 'data', 'contents', `${book.id}_esencia.json`);
    
    const stats = {
      title: book.title,
      totalIndexNodes: book.index.length,
      esenciaNodes: 0,
      coverage1to1: 0,
      groupedNodesDetected: [] as string[],
      missingNodes: [] as string[],
      synapseDensity: 0, // % de nodos con sinapsis
      status: "INCOMPLETE"
    };

    if (fs.existsSync(esenciaPath)) {
      const esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf-8'));
      const esenciaKeys = Object.keys(esencia);
      stats.esenciaNodes = esenciaKeys.length;

      let valid1to1 = 0;
      let synapseCount = 0;

      for (const node of book.index) {
        if (esencia[node]) {
          valid1to1++;
          const data = esencia[node];
          if ((data.NodosSimapticos && data.NodosSimapticos.length > 0) || 
              (data.ConexionDoctrinal && data.ConexionDoctrinal.length > 0)) {
            synapseCount++;
          }
        } else {
          stats.missingNodes.push(node);
        }
      }

      // Detectar agrupaciones (Rango de temas en una sola llave)
      for (const key of esenciaKeys) {
        if (key.includes('-') || key.toLowerCase().includes(' al ') || key.toLowerCase().includes(' a la ')) {
          stats.groupedNodesDetected.push(key);
        }
      }

      stats.coverage1to1 = Math.round((valid1to1 / book.index.length) * 100);
      stats.synapseDensity = Math.round((synapseCount / (valid1to1 || 1)) * 100);
      
      if (stats.coverage1to1 > 95 && stats.groupedNodesDetected.length === 0) {
        stats.status = "FIDELIDAD 1:1";
      } else if (stats.groupedNodesDetected.length > 0) {
        stats.status = "ERROR: AGRUPACIONES DETECTADAS";
      }
    } else {
      stats.status = "MISSING_ESENCIA";
    }

    report[book.id] = stats;
  }

  fs.writeFileSync(RESULTS_FILE, JSON.stringify(report, null, 2));
  
  console.log("\n--- REPORTE DE SINCERIDAD DOCTRINAL ---");
  Object.keys(report).forEach(id => {
    const r = report[id];
    let icon = "❌";
    if (r.status === "FIDELIDAD 1:1") icon = "✅";
    if (r.status === "ERROR: AGRUPACIONES DETECTADAS") icon = "⚠️";
    
    console.log(`${icon} ${r.title}`);
    console.log(`   - Cobertura 1:1: ${r.coverage1to1}%`);
    console.log(`   - Densidad Sináptica: ${r.synapseDensity}%`);
    console.log(`   - Estado: ${r.status}`);
    if (r.groupedNodesDetected.length > 0) {
      console.log(`   - Agrupaciones: ${r.groupedNodesDetected.length} encontradas.`);
    }
  });
}

runDeepAudit().catch(console.error);

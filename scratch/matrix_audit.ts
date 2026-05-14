import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LIBRARY_BOOKS } from '../src/data/library.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const CONTENTS_DIR = path.join(ROOT, 'public', 'data', 'contents');

function normalize(s: string) {
  if (!s) return "";
  return s.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
}

async function runMatrixAudit() {
  console.log("Iniciando AUDITORÍA DE MATRIZ 3D (Fidelidad Total)...");
  
  const globalReport: any = {};
  const globalDict = JSON.parse(fs.readFileSync(path.join(ROOT, 'public', 'data', 'diccionario_sinapsis.json'), 'utf-8')).CONCEPTOS || {};

  for (const book of LIBRARY_BOOKS) {
    const contentPath = path.join(CONTENTS_DIR, `${book.id}_content.json`);
    const esenciaPath = path.join(CONTENTS_DIR, `${book.id}_esencia.json`);

    const bookStats = {
      title: book.title,
      totalNodes: book.index.length,
      literalOK: 0,
      esenciaOK: 0,
      synapseOK: 0,
      fullyInterconnected: 0,
      mismatchedKeys: [] as string[],
      missingEsencia: [] as string[]
    };

    let contents = {};
    let esencias = {};

    if (fs.existsSync(contentPath)) contents = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
    if (fs.existsSync(esenciaPath)) esencias = JSON.parse(fs.readFileSync(esenciaPath, 'utf-8'));

    const contentKeysNorm = Object.keys(contents).reduce((acc, k) => { acc[normalize(k)] = k; return acc; }, {} as any);
    const esenciaKeysNorm = Object.keys(esencias).reduce((acc, k) => { acc[normalize(k)] = k; return acc; }, {} as any);

    for (const node of book.index) {
      const nodeNorm = normalize(node);
      const hasLiteral = contents[node] || contentKeysNorm[nodeNorm];
      const hasEsencia = esencias[node] || esenciaKeysNorm[nodeNorm];
      
      let hasSynapse = false;
      if (hasEsencia) {
        const esc = esencias[node] || esencias[esenciaKeysNorm[nodeNorm]];
        const terms = esc.NodosSinapticos || esc.DiccionarioSinaptico || esc.ConexionDoctrinal || [];
        if (terms.length > 0) {
          // Verificar si al menos un término existe en el diccionario global
          hasSynapse = terms.some((t: string) => globalDict[t.includes('#') ? t.split('#')[0] : t]);
        }
      }

      if (hasLiteral) bookStats.literalOK++;
      if (hasEsencia) bookStats.esenciaOK++;
      if (hasSynapse) bookStats.synapseOK++;
      
      if (hasLiteral && hasEsencia && hasSynapse) {
        bookStats.fullyInterconnected++;
      } else {
        if (!hasEsencia) bookStats.missingEsencia.push(node);
        if (!contents[node] && !esencias[node]) bookStats.mismatchedKeys.push(node);
      }
    }

    globalReport[book.id] = bookStats;
  }

  // Generar Reporte Markdown
  let md = "# Reporte de Matriz Doctrinal 3D\n\n";
  md += "| Libro | Nodos | Literal | Esencia | Sinapsis | Interconexión | Estado |\n";
  md += "| :--- | :---: | :---: | :---: | :---: | :---: | :--- |\n";

  for (const id in globalReport) {
    const r = globalReport[id];
    const pct = Math.round((r.fullyInterconnected / r.totalNodes) * 100);
    let status = "🔴 Crítico";
    if (pct > 50) status = "⚠️ Parcial";
    if (pct > 90) status = "✅ Óptimo";
    
    md += `| ${r.title} | ${r.totalNodes} | ${r.literalOK} | ${r.esenciaOK} | ${r.synapseOK} | **${pct}%** | ${status} |\n`;
  }

  fs.writeFileSync(path.join(ROOT, 'REPORTE_MATRIZ_DOCTRINAL.md'), md);
  console.log("Auditoría finalizada. Reporte generado en REPORTE_MATRIZ_DOCTRINAL.md");
}

runMatrixAudit().catch(console.error);

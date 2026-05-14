import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const CONTENTS_DIR = path.join(ROOT, 'public', 'data', 'contents');
const SYNAPSIS_PATH = path.join(ROOT, 'public', 'data', 'diccionario_sinapsis.json');

function normalizeTerm(s: string) {
  return s.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "");
}

async function runSynapticBridge() {
  console.log("Iniciando PUENTE DE SÍNAPSIS (Normalización Neural)...");
  
  const globalDict = JSON.parse(fs.readFileSync(SYNAPSIS_PATH, 'utf-8')).CONCEPTOS || {};
  const dictKeys = Object.keys(globalDict);
  const dictKeysNorm = dictKeys.reduce((acc, k) => { acc[normalizeTerm(k)] = k; return acc; }, {} as any);

  const files = fs.readdirSync(CONTENTS_DIR).filter(f => f.endsWith('_esencia.json'));
  let totalRepairs = 0;

  for (const file of files) {
    const filePath = path.join(CONTENTS_DIR, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    let fileChanged = false;

    for (const nodeKey in data) {
      const node = data[nodeKey];
      // Buscar cualquier llave que contenga sinapsis (polimorfismo)
      const synKey = ['NodosSinapticos', 'DiccionarioSinaptico', 'ConexionDoctrinal', 'Sinapsis'].find(k => node[k]);
      
      if (synKey) {
        const originalTerms = Array.isArray(node[synKey]) ? node[synKey] : [node[synKey]];
        const repairedTerms: string[] = [];

        for (const term of originalTerms) {
          if (typeof term !== 'string') continue;
          
          const termOnly = term.includes('#') ? term.split('#')[0] : term;
          const norm = normalizeTerm(termOnly);

          if (globalDict[termOnly]) {
            // Ya estaba bien, lo dejamos igual
            repairedTerms.push(term);
          } else if (dictKeysNorm[norm]) {
            // Encontramos coincidencia normalizada
            const finalTerm = term.includes('#') ? `${dictKeysNorm[norm]}#${term.split('#')[1]}` : dictKeysNorm[norm];
            repairedTerms.push(finalTerm);
            totalRepairs++;
            fileChanged = true;
          } else {
            // No se encuentra, pero lo dejamos normalizado para futuros mapeos
            repairedTerms.push(term);
          }
        }
        
        // Estandarizar a la llave oficial NodosSinapticos
        node.NodosSinapticos = repairedTerms;
        fileChanged = true;
      }
    }

    if (fileChanged) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      console.log(`[REPARADO] ${file}`);
    }
  }

  console.log(`\nPUENTE COMPLETADO. Se restauraron ${totalRepairs} vínculos sinápticos.`);
}

runSynapticBridge().catch(console.error);

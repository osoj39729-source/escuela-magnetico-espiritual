const fs = require('fs');
const path = require('path');

const root = 'F:/proyectos 2/trincado descargado de github/src';
const contentsDir = path.join(root, 'data/contents');

// ---- 1. Leer claves de cada archivo de contenido ----
const contentKeys = {};
const files = fs.readdirSync(contentsDir).filter(f => f.endsWith('_content.ts'));

for (const file of files) {
  const bookId = file.replace('_content.ts', '');
  const raw = fs.readFileSync(path.join(contentsDir, file), 'utf8');
  const keys = [];
  // Match lines like:  "key": "value  (key may contain any chars except ")
  const regex = /^\s{2}"([^"]+)":\s*"/gm;
  let m;
  while ((m = regex.exec(raw)) !== null) keys.push(m[1]);
  contentKeys[bookId] = keys;
}

// ---- 2. Leer library.ts y extraer index arrays por bookId ----
const libRaw = fs.readFileSync(path.join(root, 'data/library.ts'), 'utf8');
const libraryIndex = {};

// Extract book blocks
const bookRegex = /"id":\s*"([^"]+)"[\s\S]*?"index":\s*\[([\s\S]*?)\]/g;
let bm;
while ((bm = bookRegex.exec(libRaw)) !== null) {
  const bookId = bm[1];
  const indexBlock = bm[2];
  const entries = [];
  const entryRegex = /"([^"]+)"/g;
  let em;
  while ((em = entryRegex.exec(indexBlock)) !== null) entries.push(em[1]);
  libraryIndex[bookId] = entries;
}

// ---- 3. Normalize function ----
function normalize(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function numPrefix(s) {
  const parts = s.split(':');
  if (parts.length > 0 && !isNaN(Number(parts[0].trim()))) return parts[0].trim();
  return null;
}

// ---- 4. Cross-reference ----
const results = {};

for (const [bookId, indexEntries] of Object.entries(libraryIndex)) {
  // Find matching content file (may have different naming)
  let matchedContentId = bookId;
  if (!contentKeys[bookId]) {
    // Try to find by similarity
    const possible = Object.keys(contentKeys).find(k =>
      k.toLowerCase().includes(bookId.toLowerCase().substring(0, 10))
    );
    matchedContentId = possible || null;
  }

  const cKeys = matchedContentId ? contentKeys[matchedContentId] : [];
  const normalizedContent = cKeys.map(k => ({ orig: k, norm: normalize(k), num: numPrefix(k) }));

  const bookResult = {
    contentFile: matchedContentId || 'NOT FOUND',
    totalIndexEntries: indexEntries.length,
    totalContentKeys: cKeys.length,
    matched: 0,
    matchedByNorm: 0,
    matchedByNum: 0,
    missing: []
  };

  for (const entry of indexEntries) {
    const normEntry = normalize(entry);
    const numEntry = numPrefix(entry);

    // Exact match
    if (cKeys.includes(entry)) {
      bookResult.matched++;
      continue;
    }
    // Normalized match
    const normMatch = normalizedContent.find(c => c.norm === normEntry);
    if (normMatch) {
      bookResult.matchedByNorm++;
      continue;
    }
    // Number prefix match
    if (numEntry) {
      const numMatch = normalizedContent.find(c => c.num === numEntry);
      if (numMatch) {
        bookResult.matchedByNum++;
        continue;
      }
    }
    // No match
    bookResult.missing.push(entry.substring(0, 80));
  }

  bookResult.totalMatched = bookResult.matched + bookResult.matchedByNorm + bookResult.matchedByNum;
  bookResult.parity = cKeys.length === 0 ? 'NO_CONTENT' :
    Math.round((bookResult.totalMatched / indexEntries.length) * 100) + '%';

  results[bookId] = bookResult;
}

// ---- 5. Output ----
console.log('\n===== AUDITORÍA DE PARIDAD LIBRARY.TS vs CONTENT FILES =====\n');
let totalOk = 0, totalFail = 0;

for (const [bookId, r] of Object.entries(results)) {
  const pct = parseInt(r.parity) || 0;
  const status = r.parity === 'NO_CONTENT' ? '❌ SIN ARCHIVO' : pct === 100 ? '✅ OK' : pct >= 80 ? '⚠️  PARCIAL' : '❌ CRITICO';
  if (pct === 100) totalOk++; else totalFail++;

  console.log(`${status} [${r.parity}] ${bookId}`);
  console.log(`       Archivo: ${r.contentFile} | Index: ${r.totalIndexEntries} | Content keys: ${r.totalContentKeys} | Exactas: ${r.matched} | Por normalizacion: ${r.matchedByNorm} | Por numero: ${r.matchedByNum}`);
  if (r.missing.length > 0 && r.missing.length <= 10) {
    r.missing.forEach(m => console.log(`       FALTA: "${m}"`));
  } else if (r.missing.length > 10) {
    r.missing.slice(0, 5).forEach(m => console.log(`       FALTA: "${m}"`));
    console.log(`       ... y ${r.missing.length - 5} mas`);
  }
  console.log('');
}

console.log(`===== RESUMEN: ${totalOk} libros OK, ${totalFail} con problemas =====\n`);
fs.writeFileSync('audit_results.json', JSON.stringify(results, null, 2), 'utf8');
console.log('Resultados completos guardados en audit_results.json');

const fs = require('fs');
const path = require('path');

const root = 'F:/proyectos 2/trincado descargado de github/src';
const contentsDir = path.join(root, 'data/contents');

// ─── Helper: extract ALL keys from a _content.ts file ───────────────────────
function extractKeys(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const keys = [];
  const regex = /^\s{2}"([^"]+)":\s*"/gm;
  let m;
  while ((m = regex.exec(raw)) !== null) keys.push(m[1]);
  return keys;
}

// ─── Helper: extract first 200 chars of value for a key ─────────────────────
function extractSample(filePath, key) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`"${escaped}":\\s*"([\\s\\S]{0,300})"`, '');
  const m = regex.exec(raw);
  return m ? m[1].substring(0, 200) : null;
}

// ─── Helper: count garbled chars (non-latin, non-space control chars) ────────
function countGarbled(text) {
  // Characters that look like encoding corruption
  const garbledPattern = /[ǭǸǧ\u0100-\u017F]{1}/g;
  const matches = text.match(garbledPattern) || [];
  return matches.length;
}

// ─── Helper: detect if text has significant garbling ─────────────────────────
function hasGarbling(text) {
  // Detect: non-breaking spaces, replacement chars, garbled unicode sequences
  const garbage = (text.match(/[\uFFFD\x00-\x08\x0B\x0E-\x1F\u0080-\u009F]/g) || []).length;
  const extended = (text.match(/[ǭǸǧǬǀǁǭǴ]/g) || []).length;
  return garbage > 0 || extended > 5;
}

// ─── ANALYZE 3 FAILING BOOKS ─────────────────────────────────────────────────
const failing = [
  'la-revoluci-n-de-m-xico',
  'reglamento-interno-e-m-e-delac--u--1',
  '-1library-co--discurso-obispo-strossmayer'
];

console.log('\n====== ANÁLISIS PROFUNDO: LIBROS CON 0% PARIDAD ======\n');

for (const bookId of failing) {
  const filePath = path.join(contentsDir, bookId + '_content.ts');
  if (!fs.existsSync(filePath)) {
    console.log(`❌ ARCHIVO NO EXISTE: ${bookId}_content.ts\n`);
    continue;
  }
  
  const keys = extractKeys(filePath);
  console.log(`📚 ${bookId}`);
  console.log(`   Claves encontradas en el archivo (${keys.length}):`);
  keys.forEach((k, i) => console.log(`   [${i}] "${k}"`));

  // Sample first key content
  if (keys.length > 0) {
    const sample = extractSample(filePath, keys[0]);
    console.log(`\n   Muestra de contenido (1era clave):`);
    console.log(`   "${sample}"`);
    if (sample && hasGarbling(sample)) {
      console.log(`   ⚠️  TEXTO CORRUPTO DETECTADO`);
    }
  }
  console.log('');
}

// ─── SCAN ALL BOOKS FOR ENCODING CORRUPTION ──────────────────────────────────
console.log('\n====== ESCANEO DE CORRUPCIÓN EN TODOS LOS ARCHIVOS ======\n');

const allFiles = fs.readdirSync(contentsDir).filter(f => f.endsWith('_content.ts'));
const corruptionReport = [];

for (const file of allFiles) {
  const bookId = file.replace('_content.ts', '');
  const filePath = path.join(contentsDir, file);
  const raw = fs.readFileSync(filePath, 'utf8');
  
  // Sample first 5000 chars of content values only (not keys)
  const valueMatches = raw.match(/":\s*"([\s\S]{1,500})"/g) || [];
  let totalGarbled = 0;
  let sampleCorrupt = '';
  
  for (const vm of valueMatches.slice(0, 20)) {
    const garbled = countGarbled(vm);
    totalGarbled += garbled;
    if (garbled > 3 && !sampleCorrupt) {
      sampleCorrupt = vm.substring(0, 100);
    }
  }
  
  const level = totalGarbled === 0 ? '✅ LIMPIO' : totalGarbled < 20 ? '⚠️  LEVE' : '❌ SEVERO';
  corruptionReport.push({ bookId, level, totalGarbled, sampleCorrupt });
  console.log(`${level} [${totalGarbled} chars corruptos] ${bookId}`);
  if (sampleCorrupt) console.log(`   Muestra: ${sampleCorrupt.substring(0, 120)}`);
}

// Save full report
fs.writeFileSync('deep_audit_results.json', JSON.stringify({ failing_analysis: failing, corruption: corruptionReport }, null, 2));
console.log('\n📄 Reporte completo: deep_audit_results.json');

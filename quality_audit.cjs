const fs = require('fs');
const path = require('path');

const contentsDir = 'F:/proyectos 2/trincado descargado de github/src/data/contents';
const libPath = 'F:/proyectos 2/trincado descargado de github/src/data/library.ts';

// ── READABILITY SCORER ─────────────────────────────────────────────────────────
// A truly readable Spanish text will have:
//  - Words of average length > 3
//  - Low ratio of single-char "words" (< 15%)
//  - Presence of common Spanish function words
//  - Long consecutive runs without spaces are bad
//  - "D", "P", "r" patterns separated by spaces = OCR garbage

function scoreReadability(text) {
  if (!text || text.length < 20) return { score: 0, reason: 'too_short', grade: 'EMPTY' };

  // Tokenize into "words"
  const words = text.split(/\s+/).filter(w => w.length > 0);
  if (words.length < 5) return { score: 5, reason: 'too_few_words', grade: 'GARBAGE' };

  const totalWords = words.length;
  const singleCharWords = words.filter(w => w.length === 1).length;
  const singleCharRatio = singleCharWords / totalWords;

  // Average word length
  const avgLen = words.reduce((s, w) => s + w.length, 0) / totalWords;

  // Common Spanish words presence
  const spanishWords = ['de', 'la', 'el', 'en', 'que', 'es', 'y', 'los', 'del', 'se', 'un', 'por', 'con', 'las', 'no', 'su', 'al', 'lo', 'como', 'más', 'pero', 'sus', 'le', 'ya', 'o', 'este', 'fue', 'ha', 'si', 'porque', 'son', 'todo', 'esta', 'ser', 'cuando'];
  const wordSet = new Set(words.map(w => w.toLowerCase().replace(/[^a-záéíóúüñ]/gi, '')));
  const spanishHits = spanishWords.filter(sw => wordSet.has(sw)).length;
  const spanishRatio = spanishHits / spanishWords.length;

  // Consecutive single-char sequences (major OCR garbage signal)
  const singleSeqMatch = text.match(/(?:\b\w\s+){4,}/g) || [];
  const longestSingleSeq = singleSeqMatch.reduce((max, s) => Math.max(max, s.trim().split(/\s+/).length), 0);

  // Score calculation (0-100)
  let score = 100;
  score -= singleCharRatio * 150;   // penalize heavily for single chars
  score -= Math.max(0, 4 - avgLen) * 15; // penalize short avg word length
  score += spanishRatio * 20;        // reward Spanish words
  score -= longestSingleSeq * 2;    // penalize long single-char sequences
  score = Math.max(0, Math.min(100, Math.round(score)));

  let grade;
  if (score >= 70) grade = 'GOOD';
  else if (score >= 40) grade = 'PARTIAL';
  else if (score >= 20) grade = 'POOR';
  else grade = 'GARBAGE';

  return { score, singleCharRatio: Math.round(singleCharRatio * 100), avgLen: Math.round(avgLen * 10) / 10, spanishRatio: Math.round(spanishRatio * 100), longestSingleSeq, grade };
}

// ── EXTRACT ALL CHAPTER CONTENT FROM A FILE ───────────────────────────────────
function extractChapters(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const chapters = {};
  // Match: "key": "value"  — value may be multiline up to next key
  const regex = /"([^"]+)":\s*"((?:[^"\\]|\\[\s\S])*?)"/gm;
  let m;
  while ((m = regex.exec(raw)) !== null) {
    chapters[m[1]] = m[2].replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  }
  return chapters;
}

// ── EXTRACT LIBRARY INDEX ─────────────────────────────────────────────────────
function extractLibrary(libPath) {
  const raw = fs.readFileSync(libPath, 'utf8');
  const lib = {};
  const bookRegex = /"id":\s*"([^"]+)"[\s\S]*?"index":\s*\[([\s\S]*?)\]/g;
  let bm;
  while ((bm = bookRegex.exec(raw)) !== null) {
    const bookId = bm[1];
    const indexBlock = bm[2];
    const entries = [];
    const entryRegex = /"([^"]+)"/g;
    let em;
    while ((em = entryRegex.exec(indexBlock)) !== null) entries.push(em[1]);
    lib[bookId] = entries;
  }
  return lib;
}

// ── MAIN AUDIT ────────────────────────────────────────────────────────────────
console.log('\n====== AUDITORÍA DE CALIDAD DE CONTENIDO RAG ======\n');
console.log('Evaluando calidad real del texto de CADA capítulo en CADA libro...\n');

const library = extractLibrary(libPath);
const files = fs.readdirSync(contentsDir).filter(f => f.endsWith('_content.ts'));

const fullReport = {};
let totalChapters = 0, goodChapters = 0, partialChapters = 0, poorChapters = 0, garbageChapters = 0, missingChapters = 0;

for (const file of files) {
  const bookId = file.replace('_content.ts', '');
  const filePath = path.join(contentsDir, file);
  const chapters = extractChapters(filePath);
  const indexEntries = library[bookId] || [];

  const bookReport = {
    totalInIndex: indexEntries.length,
    totalInContent: Object.keys(chapters).length,
    chapters: {},
    summary: { GOOD: 0, PARTIAL: 0, POOR: 0, GARBAGE: 0, MISSING: 0 }
  };

  for (const entry of indexEntries) {
    const text = chapters[entry] || null;
    if (!text) {
      bookReport.chapters[entry] = { grade: 'MISSING', score: 0 };
      bookReport.summary.MISSING++;
      missingChapters++;
    } else {
      const q = scoreReadability(text);
      bookReport.chapters[entry] = { grade: q.grade, score: q.score, singleCharRatio: q.singleCharRatio, avgWordLen: q.avgLen };
      bookReport.summary[q.grade]++;
      if (q.grade === 'GOOD') goodChapters++;
      else if (q.grade === 'PARTIAL') partialChapters++;
      else if (q.grade === 'POOR') poorChapters++;
      else garbageChapters++;
    }
    totalChapters++;
  }

  // Book-level status
  const total = indexEntries.length;
  const good = bookReport.summary.GOOD;
  const pct = total > 0 ? Math.round((good / total) * 100) : 0;
  const hasProblems = bookReport.summary.GARBAGE > 0 || bookReport.summary.POOR > 0 || bookReport.summary.MISSING > 0;

  const status = !hasProblems ? '✅' : pct >= 80 ? '⚠️ ' : '❌';

  console.log(`${status} ${bookId}`);
  console.log(`   ✅ GOOD: ${bookReport.summary.GOOD} | ⚠️  PARTIAL: ${bookReport.summary.PARTIAL} | 🔴 POOR: ${bookReport.summary.POOR} | ❌ GARBAGE: ${bookReport.summary.GARBAGE} | ❓ MISSING: ${bookReport.summary.MISSING}`);

  // List problem chapters
  if (hasProblems) {
    Object.entries(bookReport.chapters)
      .filter(([, v]) => v.grade !== 'GOOD' && v.grade !== 'PARTIAL')
      .slice(0, 8)
      .forEach(([k, v]) => console.log(`   [${v.grade}/${v.score}] "${k.substring(0, 70)}"`));
    const remaining = Object.entries(bookReport.chapters).filter(([, v]) => v.grade !== 'GOOD' && v.grade !== 'PARTIAL').length - 8;
    if (remaining > 0) console.log(`   ... y ${remaining} más`);
  }
  console.log('');

  fullReport[bookId] = bookReport;
}

console.log('═══════════════════════════════════════════════════════════════════');
console.log(`TOTAL CAPÍTULOS ANALIZADOS: ${totalChapters}`);
console.log(`  ✅ GOOD    : ${goodChapters} (${Math.round(goodChapters/totalChapters*100)}%)`);
console.log(`  ⚠️  PARTIAL : ${partialChapters} (${Math.round(partialChapters/totalChapters*100)}%)`);
console.log(`  🔴 POOR    : ${poorChapters} (${Math.round(poorChapters/totalChapters*100)}%)`);
console.log(`  ❌ GARBAGE : ${garbageChapters} (${Math.round(garbageChapters/totalChapters*100)}%)`);
console.log(`  ❓ MISSING : ${missingChapters} (${Math.round(missingChapters/totalChapters*100)}%)`);

fs.writeFileSync('content_quality_report.json', JSON.stringify(fullReport, null, 2), 'utf8');
console.log('\n📄 Reporte detallado guardado en content_quality_report.json\n');

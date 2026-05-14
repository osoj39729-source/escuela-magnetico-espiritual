import * as fs from 'fs';
import * as path from 'path';

const BOOKS = [
  { id: 'estatutos-y-reglamentos', file: '01_BIBLIOTECA_DOCTRINAL/estatutos y reglamentos.txt' },
  { id: 'ley-de-las-mediumidades-en-general', file: '01_BIBLIOTECA_DOCTRINAL/LEY DE LAS MEDIUMIDADES EN GENERAL.txt' },
  { id: 'laudode-rigor', file: '01_BIBLIOTECA_DOCTRINAL/laudode rigor.txt' }
];

async function segment() {
  for (const book of BOOKS) {
    if (!fs.existsSync(book.file)) {
      console.log(`File not found: ${book.file}`);
      continue;
    }

    const text = fs.readFileSync(book.file, 'utf8');
    const sections: Record<string, string> = {};
    let currentTitle = 'INTRODUCCION';
    let currentContent: string[] = [];

    const lines = text.split('\n');
    for (let line of lines) {
      const trimmed = line.trim();
      
      // Detection of potential headers
      const isArticle = /^(?:Art\.|ARTICULO|Artculo|ART%CULO|Artculo|Artculo)\s*\d+/i.test(trimmed);
      const isCapitulo = /^(?:CAPITULO|CAP?TULO)\s*\d+/i.test(trimmed);
      const isPrefacio = trimmed.startsWith('PREFACIO') || trimmed.startsWith('INTRODUCCI');
      const isAllCapHeader = trimmed === trimmed.toUpperCase() && trimmed.length > 5 && trimmed.length < 60 && !trimmed.includes('?') && !trimmed.includes('¿');

      if (isArticle || isCapitulo || isPrefacio || isAllCapHeader) {
        if (currentTitle && currentContent.length > 0) {
          sections[currentTitle] = currentContent.join('\n').trim();
        }
        currentTitle = trimmed;
        currentContent = [];
      } else {
        currentContent.push(line);
      }
    }
    
    if (currentTitle && currentContent.length > 0) {
      sections[currentTitle] = currentContent.join('\n').trim();
    }

    // Save CONTENT file
    const contentPath = `src/data/contents/${book.id}_content.ts`;
    const contentBody = `export const CONTENT: Record<string, string> = ${JSON.stringify(sections, null, 2)};\n`;
    fs.writeFileSync(contentPath, contentBody);
    console.log(`Generated ${contentPath} with ${Object.keys(sections).length} themes.`);
  }
}

segment();

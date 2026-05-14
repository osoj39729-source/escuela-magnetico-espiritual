import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LIBRARY_BOOKS } from '../src/data/library.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const CONTENTS_DIR = path.join(ROOT, 'public', 'data', 'contents');

function normalize(s: string) {
  return s.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/gi, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

async function relinkOrphans() {
  console.log("Iniciando RE-VINCULACIÓN DE OBRAS HUÉRFANAS...");
  
  const files = fs.readdirSync(CONTENTS_DIR);
  const bookIds = LIBRARY_BOOKS.map(b => b.id);

  for (const file of files) {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const isEsencia = basename.endsWith('_esencia');
    const isContent = basename.endsWith('_content');
    
    if (!isEsencia && !isContent) continue;

    const originalId = isEsencia ? basename.replace('_esencia', '') : basename.replace('_content', '');
    const normalizedId = normalize(originalId);

    // Si el ID original no está en library.ts pero el normalizado sí, lo renombramos
    if (!bookIds.includes(originalId) && bookIds.includes(normalizedId)) {
      const oldPath = path.join(CONTENTS_DIR, file);
      const newFileName = `${normalizedId}${isEsencia ? '_esencia' : '_content'}${ext}`;
      const newPath = path.join(CONTENTS_DIR, newFileName);

      if (!fs.existsSync(newPath)) {
        console.log(`[VINCULANDO] ${file} -> ${newFileName}`);
        fs.copyFileSync(oldPath, newPath);
      } else {
        console.log(`[DUPLICADO] ${file} ya tiene una versión normalizada.`);
      }
    }
  }
}

relinkOrphans().catch(console.error);

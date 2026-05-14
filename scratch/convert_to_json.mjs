import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../src/data/contents');
const destDir = path.join(__dirname, '../public/data/contents');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('_content.ts'));
let successCount = 0;
let errorCount = 0;

for (const file of files) {
  const srcPath = path.join(srcDir, file);
  const destName = file.replace('.ts', '.json');
  const destPath = path.join(destDir, destName);
  
  let content = fs.readFileSync(srcPath, 'utf8');
  
  const startIdx = content.indexOf('{');
  const endIdx = content.lastIndexOf('}');
  
  if (startIdx === -1 || endIdx === -1) {
    console.error(`Omitiendo ${file}: no se encontró estructura de objeto`);
    continue;
  }
  
  let objStr = content.substring(startIdx, endIdx + 1);
  
  // Limpiar posibles comas finales (trailing commas) que rompen JSON.parse
  objStr = objStr.replace(/,\s*([}\]])/g, '$1');
  
  try {
    const obj = JSON.parse(objStr);
    // Guardar formateado
    fs.writeFileSync(destPath, JSON.stringify(obj, null, 2), 'utf8');
    console.log(`Conversión exitosa: ${file} -> ${destName}`);
    successCount++;
    
    // Eliminamos el archivo TS antiguo para aligerar a Vite inmediatamente
    fs.unlinkSync(srcPath);
  } catch (e) {
    console.error(`ERROR parseando ${file}:`, e.message);
    errorCount++;
  }
}

console.log(`\nResumen: ${successCount} exitosos, ${errorCount} con errores.`);

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// Intentar cargar la librería directamente desde el archivo de la librería
const pdfPath = path.resolve(__dirname, '../node_modules/pdf-parse/lib/pdf-parse.js');
const pdf = require(pdfPath);

const PDF_FILE = path.resolve(__dirname, '../01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa.pdf');
const OUTPUT_PATH = path.resolve(__dirname, './texts/tercera-etapa.txt');

async function extractFullText() {
    console.log(`Iniciando extracción completa de: ${PDF_FILE}`);
    try {
        if (!fs.existsSync(PDF_FILE)) {
            console.error(`Error: El archivo no existe en ${PDF_FILE}`);
            return;
        }
        const dataBuffer = fs.readFileSync(PDF_FILE);
        const data = await pdf(dataBuffer);

        console.log(`Páginas procesadas: ${data.numpages}`);
        
        const cleanedText = data.text
            .replace(/\r\n/g, '\n')
            .replace(/\t/g, ' ')
            .replace(/ +/g, ' ')
            .trim();

        if (cleanedText.length < 100) {
            console.warn('ADVERTENCIA: El texto extraído es muy corto. Es posible que el PDF sea una imagen (escaneado).');
        }

        if (!fs.existsSync(path.dirname(OUTPUT_PATH))) {
            fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
        }

        fs.writeFileSync(OUTPUT_PATH, cleanedText);
        console.log(`Éxito: Texto guardado en ${OUTPUT_PATH} (${cleanedText.length} caracteres)`);
    } catch (error) {
        console.error('Error durante la extracción:', error);
    }
}

extractFullText();

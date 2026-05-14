import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);
const pdf = require(path.resolve(__dirname, '../node_modules/pdf-parse/lib/pdf-parse.js'));

const PDF_FILE = path.resolve(__dirname, '../01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa.pdf');

async function checkMetadata() {
    console.log(`Analizando metadatos de: ${PDF_FILE}`);
    try {
        const dataBuffer = fs.readFileSync(PDF_FILE);
        const data = await pdf(dataBuffer);

        console.log('Metadatos encontrados:');
        console.log(JSON.stringify(data.metadata, null, 2));
        console.log('Info encontrada:');
        console.log(JSON.stringify(data.info, null, 2));
        
        // pdf-parse doesn't easily expose bookmarks, but let's check info.Title etc.
        if (data.info && data.info.Title) {
            console.log(`Título: ${data.info.Title}`);
        }
        
    } catch (error) {
        console.error('Error:', error);
    }
}

checkMetadata();

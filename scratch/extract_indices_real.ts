import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const API_KEYS = [
  process.env.VITE_GEMINI_API_KEY,
  process.env.VITE_GEMINI_KEY_1,
  process.env.VITE_GEMINI_KEY_2,
  process.env.VITE_GEMINI_KEY_3,
  process.env.VITE_GEMINI_KEY_4
].filter(Boolean);

let currentKeyIndex = 0;

function getNextAIModel() {
  const key = API_KEYS[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  const genAI = new GoogleGenerativeAI(key);
  return genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
}

const DOCS_DIR = 'F:/proyectos 2/trincado descargado de github/01_BIBLIOTECA_DOCTRINAL';
const OUTPUT_FILE = 'F:/proyectos 2/trincado descargado de github/src/data/library.ts';

async function extractIndex(filePath) {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    
    const sampleText = data.text.substring(0, 60000);
    const fileName = path.basename(filePath);

    const prompt = `
    Analiza el siguiente texto del libro "${fileName}" de Joaquín Trincado.
    Extrae el ÍNDICE completo y literal.
    
    REGLAS:
    1. Devuelve un array JSON de strings: ["Tema 1", "Tema 2", ...]
    2. BUSCANDO A DIOS tiene exactamente 112 temas numerados. Captúralos todos.
    3. No incluyas números de página.
    4. Si no hay índice, extrae los títulos de los párrafos o capítulos que veas.
    5. Solo responde el JSON, nada más.

    TEXTO:
    ${sampleText}
    `;

    const model = getNextAIModel();
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const jsonStr = text.replace(/```json|```/g, '').trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error(`Error en ${path.basename(filePath)}:`, error.message);
    // Si es error de cuota, esperar y reintentar con otra llave
    if (error.message.includes('429')) {
       console.log("Cuota agotada, rotando llave...");
       return extractIndex(filePath); 
    }
    return ["Error en extracción"];
  }
}

async function main() {
  const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.pdf'));
  const libraryData = [];

  for (const file of files) {
    console.log(`Procesando: ${file}...`);
    const filePath = path.join(DOCS_DIR, file);
    const index = await extractIndex(filePath);
    
    const id = file.toLowerCase().replace(/\.pdf$/, '').replace(/[^a-z0-9]/g, '-');
    libraryData.push({
      id,
      title: file.replace(/\.pdf$/, '').replace(/-/g, ' '),
      pdfUrl: `/biblioteca/${file}`,
      index: index
    });
    
    console.log(`✓ ${file}: ${index.length} temas.`);
    await new Promise(resolve => setTimeout(resolve, 5000)); // Pausa de seguridad
  }

  const content = `export interface LibraryBook {
  id: string;
  title: string;
  pdfUrl?: string;
  index: string[];
}

export const LIBRARY_BOOKS: LibraryBook[] = ${JSON.stringify(libraryData, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, content);
  console.log("\nProceso finalizado. library.ts actualizado.");
}

main().catch(console.error);

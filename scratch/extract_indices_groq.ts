import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
import dotenv from 'dotenv';

dotenv.config();

const GROQ_KEYS = [
  process.env.VITE_GROQ_KEY_1,
  process.env.VITE_GROQ_KEY_2,
  process.env.VITE_GROQ_KEY_3,
  process.env.VITE_GROQ_KEY_4,
  process.env.VITE_GROQ_KEY_5
].filter(Boolean);

let currentKeyIndex = 0;

async function callGroq(prompt) {
  const key = GROQ_KEYS[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % GROQ_KEYS.length;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: "Extrae el índice. Devuelve JSON: { \"index\": [...] }. Sé breve." },
          { role: "user", content: prompt }
        ],
        temperature: 0,
        max_tokens: 4000,
        response_format: { type: "json_object" }
      })
    });

    const data = await response.json();
    if (data.choices && data.choices[0]) {
      return data.choices[0].message.content;
    }
    throw new Error(JSON.stringify(data));
  } catch (e) {
    console.error("Error en Groq:", e.message);
    if (e.message.includes('429')) {
       await new Promise(r => setTimeout(r, 5000));
       return callGroq(prompt); 
    }
    return JSON.stringify({ index: ["Error"] });
  }
}

const DOCS_DIR = 'F:/proyectos 2/trincado descargado de github/01_BIBLIOTECA_DOCTRINAL';
const OUTPUT_FILE = 'F:/proyectos 2/trincado descargado de github/src/data/library.ts';

async function extractIndex(filePath) {
  const fileName = path.basename(filePath);
  console.log(`Procesando: ${fileName}...`);
  
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdf(dataBuffer);
    const text = data.text;
    
    // Muestra pequeña para no saturar TPM
    const sampleText = text.substring(0, 2000) + "\n...\n" + text.substring(text.length - 2000); 

    let prompt = `Analiza "${fileName}". Extrae el ÍNDICE.
    Si es "Buscando a Dios", busca los 112 temas (párrafos numerados) y lístalos todos.`;

    const resultText = await callGroq(prompt + "\nTEXTO:\n" + sampleText);
    const result = JSON.parse(resultText);
    return result.index || [];
  } catch (error) {
    return ["Error"];
  }
}

async function main() {
  const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.pdf'));
  const libraryData = [];

  for (const file of files) {
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
    await new Promise(resolve => setTimeout(resolve, 2000));
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
  console.log("\nProceso finalizado.");
}

main().catch(console.error);

import fs from 'fs';
import path from 'path';
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

async function callGroq(prompt: string): Promise<string> {
    const key = GROQ_KEYS[currentKeyIndex];
    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${key}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [{ role: "user", content: prompt }],
                temperature: 0,
                response_format: { type: "json_object" }
            })
        });

        if (!response.ok) {
            if (response.status === 429 && currentKeyIndex < GROQ_KEYS.length - 1) {
                currentKeyIndex++;
                return callGroq(prompt);
            }
            throw new Error(`Groq API error: ${response.statusText}`);
        }

        const data = await response.json();
        return JSON.stringify(data.choices[0].message.content);
    } catch (e: any) {
        throw e;
    }
}

async function extractPerfectIndex(bookId: string, textPath: string): Promise<string[]> {
    const text = fs.readFileSync(textPath, 'utf-8');
    
    // Reducir la cantidad de texto para no exceder el límite de tokens de Groq (Bad Request)
    const startText = text.substring(0, 15000);
    const endText = text.substring(text.length - 15000);

    const prompt = `
    Extrae el índice del siguiente libro. Devuelve SOLO un array JSON con los títulos exactos en orden.
    Ejemplo: { "index": ["PRÓLOGO", "CAPÍTULO I: LA LUZ", "PÁRRAFO 1: ORIGEN"] }
    
    TEXTO:
    ${startText}
    ...
    ${endText}
    `;

    try {
        console.log(`[PerfectIndex] Extrayendo índice de ${bookId} vía Groq...`);
        const result = await callGroq(prompt);
        const parsed = JSON.parse(JSON.parse(result)); // Doble parse por el stringify previo
        return parsed.index || [];
    } catch (e: any) {
        console.error(`Error extrayendo índice de ${bookId}:`, e.message);
        return [];
    }
}

async function main() {
    const books = [
        "alfaqui-vademecum",
        "los-cinco-amores",
        "el-espiritismo-estudiado",
        "con-ocete-a-ti-mismo-1",
        "ley-de-las-mediumidades-en-general"
    ];
    
    for (const book of books) {
        const textFiles = fs.readdirSync('f:/proyectos 2/trincado descargado de github/scratch/texts');
        const fileName = textFiles.find(f => f.includes(book.replace(/-/g, '_')) || f.includes(book));
        
        if (!fileName) {
            console.warn(`No se encontró texto para ${book}`);
            continue;
        }

        const textPath = `f:/proyectos 2/trincado descargado de github/scratch/texts/${fileName}`;
        const index = await extractPerfectIndex(book, textPath);
        
        if (index.length > 0) {
            fs.writeFileSync(`f:/proyectos 2/trincado descargado de github/scratch/indices/${book}_index.json`, JSON.stringify(index, null, 2));
            console.log(`✓ ${book}: ${index.length} secciones extraídas.`);
        } else {
            console.error(`✗ ${book}: Fallo en la extracción.`);
        }
    }
}

main();

import fs from 'fs';
import path from 'path';

const TEXTS_DIR = 'F:/proyectos 2/trincado descargado de github/scratch/texts';
const OUTPUT_DIR = 'F:/proyectos 2/trincado descargado de github/src/data/contents';
const LIBRARY_FILE = 'F:/proyectos 2/trincado descargado de github/src/data/library.ts';

function normalize(text: string): string {
    return text.toLowerCase()
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/[^a-z0-9]/g, '')
        .trim();
}

async function chunkAll() {
    const libraryContent = fs.readFileSync(LIBRARY_FILE, 'utf-8');
    // Regex flexible para encontrar el array LIBRARY_BOOKS
    const booksMatch = libraryContent.match(/export const LIBRARY_BOOKS[^=]*=\s*(\[[\s\S]*?\]);/);
    if (!booksMatch) throw new Error("Could not find LIBRARY_BOOKS in library.ts");
    
    // Usamos una función para parsear el array de forma segura (soporta trailing commas y comillas simples)
    let books;
    try {
        // Quitamos el export y evaluamos como JS
        books = Function(`return ${booksMatch[1]}`)();
    } catch (e) {
        console.error("Error parsing LIBRARY_BOOKS array:", e);
        // Fallback: intentar limpiar trailing commas y usar JSON.parse
        const cleaned = booksMatch[1].replace(/,\s*\]/g, ']').replace(/,\s*\}/g, '}');
        books = JSON.parse(cleaned);
    }
    
    for (const book of books) {
        if (!book.index || book.index.length === 0) continue;
        console.log(`Processing ${book.title}...`);
        
        // El nombre del archivo suele ser el ID con guiones bajos o similar
        const fileName = book.id.replace(/-/g, '_') + '.txt';
        const textPath = path.join(TEXTS_DIR, fileName);
        
        // Intentar otras variantes de nombre
        let finalPath = textPath;
        if (!fs.existsSync(finalPath)) {
            const altName = book.id.replace(/-/g, '-') + '.txt'; // Ya tiene guiones
            finalPath = path.join(TEXTS_DIR, altName);
        }
        if (!fs.existsSync(finalPath)) {
            // Caso especial para conocete_a_ti_mismo-1.txt
            if (book.id === 'conocete-a-ti-mismo-1') finalPath = path.join(TEXTS_DIR, 'conocete_a_ti_mismo-1.txt');
            if (book.id === 'filosofia-enciclopedica-universal-tomo-1') finalPath = path.join(TEXTS_DIR, 'filosofia-enciclopedica-universal-tomo_1.txt');
            if (book.id === 'filosofia-enciclopedica-universal-tomo-2') finalPath = path.join(TEXTS_DIR, 'filosofia-enciclopedica-universal-tomo_2.txt');
        }

        if (!fs.existsSync(finalPath)) {
            console.log(`  Skipping: ${finalPath} not found.`);
            continue;
        }

        const fullText = fs.readFileSync(finalPath, 'utf-8');
        const lines = fullText.split('\n');
        
        const sections: Record<string, string> = {};
        for (let i = 0; i < book.index.length; i++) {
            const entry = book.index[i];
            const nextEntry = book.index[i + 1];
            
            // Usamos regex para extraer el número de línea de forma robusta (soporta "Num: Title" o "Num:Title")
            const match = entry.match(/^(\d+):/);
            if (!match) {
                console.warn(`  Warning: No line number found for entry "${entry}" in ${book.title}. Skipping.`);
                continue;
            }
            
            const lineNum = parseInt(match[1]);
            const nextMatch = nextEntry ? nextEntry.match(/^(\d+):/) : null;
            const nextLineNum = nextMatch ? parseInt(nextMatch[1]) : lines.length + 1;
            
            // El contenido se extrae desde lineNum hasta nextLineNum
            const content = lines.slice(lineNum - 1, nextLineNum - 1).join('\n').trim();
            
            // IMPORTANTE: La clave DEBE ser el entry exacto para coincidir con la UI
            sections[entry] = content;
        }
        
        const outputFileName = `${book.id}_content.ts`;
        const tsContent = `export const CONTENT: Record<string, string> = ${JSON.stringify(sections, null, 2)};`;
        
        fs.writeFileSync(path.join(OUTPUT_DIR, outputFileName), tsContent);
        console.log(`  Generated ${outputFileName} with ${Object.keys(sections).length} sections.`);
    }
}

chunkAll().catch(console.error);

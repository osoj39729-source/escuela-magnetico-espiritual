import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');

const BIBLIOTECA_DIR = 'F:/proyectos 2/trincado descargado de github/public/biblioteca';
const OUTPUT_DIR = 'F:/proyectos 2/trincado descargado de github/scratch/texts';

if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

async function convertAll() {
    const files = fs.readdirSync(BIBLIOTECA_DIR).filter(f => f.endsWith('.pdf'));
    
    for (const file of files) {
        const inputPath = path.join(BIBLIOTECA_DIR, file);
        const outName = file.replace('.pdf', '.txt').toLowerCase().replace(/ /g, '_');
        const outputPath = path.join(OUTPUT_DIR, outName);
        
        if (fs.existsSync(outputPath)) {
            console.log(`Skipping ${file}, already exists.`);
            continue;
        }

        console.log(`Converting ${file}...`);
        try {
            const buffer = fs.readFileSync(inputPath);
            const data = await pdf(buffer);
            fs.writeFileSync(outputPath, data.text);
            console.log(`Saved to ${outName}`);
        } catch (err) {
            console.error(`Error converting ${file}:`, err);
        }
    }
}

convertAll().catch(console.error);

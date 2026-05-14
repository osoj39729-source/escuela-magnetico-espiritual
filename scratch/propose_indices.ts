import fs from 'fs';
import path from 'path';

const TEXTS_DIR = 'F:/proyectos 2/trincado descargado de github/scratch/texts';
const PROPOSALS_DIR = 'F:/proyectos 2/trincado descargado de github/scratch/proposals';

if (!fs.existsSync(PROPOSALS_DIR)) fs.mkdirSync(PROPOSALS_DIR);

function cleanTitle(text: string): string {
    return text.replace(/\.{2,}/g, '').replace(/\s+/g, ' ').trim();
}

async function analyze() {
    const files = fs.readdirSync(TEXTS_DIR).filter(f => f.endsWith('.txt'));
    
    for (const file of files) {
        const text = fs.readFileSync(path.join(TEXTS_DIR, file), 'utf-8');
        const lines = text.split('\n');
        const index = [];
        
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            if (!line) continue;
            
            const upper = line.toUpperCase();
            const isHeader = upper.startsWith('CAP') || upper.startsWith('CÁP') || upper.startsWith('PARRAFO') || 
                             upper.startsWith('PÁRRAFO') || upper.startsWith('PROLOGO') || upper.startsWith('PRÓLOGO') || 
                             upper.startsWith('INTRO') || upper.startsWith('EPIL') || upper.startsWith('EPÍL') || 
                             upper.startsWith('PUNTO FINAL') || upper.startsWith('PREGUNTA') || upper.startsWith('ART') ||
                             upper.startsWith('LECC') || upper.startsWith('GRADO');
                
            if (isHeader && line.length < 150) {
                let fullTitle = cleanTitle(line);
                
                // Look ahead for sub-title if line is short (e.g. "Capítulo 1")
                if (fullTitle.length < 40 && i + 1 < lines.length) {
                    let next = lines[i+1].trim();
                    if (next && next.length < 100 && !next.toUpperCase().startsWith('CAP') && !next.toUpperCase().startsWith('PARRAFO')) {
                        fullTitle += ': ' + cleanTitle(next);
                    }
                }
                
                // Avoid duplicates (e.g. from the book's index and actual chapters)
                // But for now, let's keep them and filter later
                index.push(fullTitle);
            }
        }
        
        // Final deduplication and cleaning
        const uniqueIndex = Array.from(new Set(index)).filter(t => t.length > 5);
        
        fs.writeFileSync(path.join(PROPOSALS_DIR, file.replace('.txt', '.json')), JSON.stringify(uniqueIndex, null, 2));
        console.log(`Extracted index for ${file} (${uniqueIndex.length} items)`);
    }
}

analyze().catch(console.error);

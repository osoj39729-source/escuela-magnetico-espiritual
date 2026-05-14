import fs from 'fs';
import path from 'path';

const PROPOSALS_DIR = 'F:/proyectos 2/trincado descargado de github/scratch/proposals';
const LIBRARY_FILE = 'F:/proyectos 2/trincado descargado de github/src/data/library.ts';

function mapFileNameToId(filename: string): string {
    const name = filename.replace('.json', '');
    if (name.includes('buscando-a-dios')) return 'buscando-a-dios-joaquin-trincado';
    if (name.includes('conocete_a_ti_mismo')) return 'conocete-a-ti-mismo-1';
    if (name.includes('cuestionario')) return 'cuestionario-espirita-racional';
    if (name.includes('alfaqui')) return 'alfaqui-vademecum';
    if (name.includes('codigo-de-amor-universal-tomo2')) return 'codigo-de-amor-universal-tomo-2';
    if (name.includes('codigodeamoruniversaltomoi')) return 'codigo-de-amor-universal-tomo-i';
    // Add more mappings as needed, or use a fuzzy match
    return name;
}

async function updateLibrary() {
    let content = fs.readFileSync(LIBRARY_FILE, 'utf-8');
    const proposals = fs.readdirSync(PROPOSALS_DIR).filter(f => f.endsWith('.json'));
    
    for (const file of proposals) {
        const index = JSON.parse(fs.readFileSync(path.join(PROPOSALS_DIR, file), 'utf-8'));
        if (index.length === 0) continue;
        
        const bookId = mapFileNameToId(file);
        console.log(`Updating ${bookId}...`);
        
        // Use a regex to find the book object by ID and replace its index
        const regex = new RegExp(`(id:\\s*"${bookId}"[\\s\\S]*?index:\\s*\\[)([\\s\\S]*?)(\\])`, 'm');
        const match = content.match(regex);
        
        if (match) {
            const newIndexStr = JSON.stringify(index, null, 8).replace('[', '').replace(']', '').trim();
            content = content.replace(regex, `$1\n        ${newIndexStr}\n      $3`);
        } else {
            console.log(`Could not find book with ID ${bookId} in library.ts`);
        }
    }
    
    fs.writeFileSync(LIBRARY_FILE, content);
    console.log('Library.ts updated with literal indices.');
}

updateLibrary().catch(console.error);

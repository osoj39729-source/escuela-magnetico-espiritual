import fs from 'fs';
import path from 'path';

const BIBLIOTECA_DIR = 'F:/proyectos 2/trincado descargado de github/public/biblioteca';
const PROPOSALS_DIR = 'F:/proyectos 2/trincado descargado de github/scratch/proposals';
const LIBRARY_FILE = 'F:/proyectos 2/trincado descargado de github/src/data/library.ts';

function cleanId(filename: string): string {
    return filename.replace('.pdf', '').toLowerCase().replace(/[^a-z0-9]/g, '-');
}

function cleanTitle(filename: string): string {
    return filename.replace('.pdf', '').replace(/-/g, ' ').replace(/_/g, ' ')
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(' ');
}

async function generate() {
    const files = fs.readdirSync(BIBLIOTECA_DIR).filter(f => f.endsWith('.pdf'));
    const books = [];

    for (const file of files) {
        const id = cleanId(file);
        const title = cleanTitle(file);
        const proposalFile = file.toLowerCase().replace(/ /g, '_').replace('.pdf', '.json');
        const proposalPath = path.join(PROPOSALS_DIR, proposalFile);
        
        let index = ["Prólogo", "Introducción", "Capítulo 1", "Conclusión"];
        if (fs.existsSync(proposalPath)) {
            index = JSON.parse(fs.readFileSync(proposalPath, 'utf-8'));
            // Filtering: Remove items that look like they are from the table of contents (contain dots or numbers at end)
            // But keep literal headers.
            index = index.filter(t => !t.includes('....'));
        }

        books.push({
            id,
            title,
            pdfUrl: `/biblioteca/${file}`,
            index
        });
    }

    const content = `export interface LibraryBook {
  id: string;
  title: string;
  pdfUrl?: string;
  index: string[];
}

export const LIBRARY_BOOKS: LibraryBook[] = ${JSON.stringify(books, null, 2)};
`;

    fs.writeFileSync(LIBRARY_FILE, content);
    console.log(`Generated library.ts with ${books.length} books.`);
}

generate().catch(console.error);

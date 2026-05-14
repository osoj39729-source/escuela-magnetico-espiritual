import fs from 'fs';
import path from 'path';

const LIBRARY_FILE = 'f:/proyectos 2/trincado descargado de github/src/data/library.ts';

function sanitizeIndex(index: string[]): string[] {
    const keywords = [
        'CAPÍTULO', 'CAPITULO', 'CAP.', 'PÁRRAFO', 'PARRAFO', 'PÁR.', 
        'PRÓLOGO', 'PROLOGO', 'INTRODUCCIÓN', 'INTRODUCCION', 
        'EPÍLOGO', 'EPILOGO', 'EPILOGÓN', 'EPILOGON', 
        'PUNTO', 'CONCLUSIÓN', 'CONCLUSION', 'ÍNDICE', 'INDICE', 
        'CUESTIONARIO', 'LECCIÓN', 'LECCION', 'MAESTRO', 'DISCIPULO', 'D.-', 'M.-'
    ];

    return index.filter(item => {
        const trimmed = item.trim();
        if (!trimmed) return false;

        // Si empieza con una palabra clave conocida (ignorando mayúsculas/minúsculas para el match)
        const upperTrimmed = trimmed.toUpperCase();
        if (keywords.some(k => upperTrimmed.startsWith(k))) {
            // Pero si es demasiado largo (> 200 caracteres), probablemente es texto del cuerpo que empezó con la palabra
            if (trimmed.length > 200) return false;
            return true;
        }

        // Si es corto (< 60 caracteres) y está en mayúsculas
        if (trimmed.length < 80 && trimmed === upperTrimmed && /[A-Z]/.test(trimmed)) {
            return true;
        }

        // Si empieza con número seguido de punto o paréntesis (ej: "1.", "1)") y es corto
        if (/^\d+[.)]/.test(trimmed) && trimmed.length < 100) {
            return true;
        }

        return false;
    });
}

function main() {
    const content = fs.readFileSync(LIBRARY_FILE, 'utf-8');
    const match = content.match(/export const LIBRARY_BOOKS: LibraryBook\[\] = (\[[\s\S]*?\]);/);
    if (!match) {
        console.error("No se encontró LIBRARY_BOOKS en library.ts");
        return;
    }

    const books = JSON.parse(match[1]);
    const cleanedBooks = books.map((book: any) => ({
        ...book,
        index: sanitizeIndex(book.index)
    }));

    const newContent = content.replace(
        /export const LIBRARY_BOOKS: LibraryBook\[\] = \[[\s\S]*?\];/,
        `export const LIBRARY_BOOKS: LibraryBook[] = ${JSON.stringify(cleanedBooks, null, 2)};`
    );

    fs.writeFileSync(LIBRARY_FILE, newContent);
    console.log("library.ts sanitizado con éxito.");
}

main();

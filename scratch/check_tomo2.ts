import { LIBRARY_BOOKS } from '../src/data/library';
import { CONTENT as TOMO2_CONTENT } from '../src/data/contents/filosofia-enciclopedica-universal-tomo-2_content';

const book = LIBRARY_BOOKS.find(b => b.id === 'filosofia-enciclopedica-universal-tomo-2');
if (!book) {
    console.log('Book not found');
    process.exit(1);
}

let missing = 0;
for (const chapter of book.index) {
    if (!TOMO2_CONTENT[chapter]) {
        console.log(`MISSING: "${chapter}"`);
        missing++;
    }
}

console.log(`Total: ${book.index.length}`);
console.log(`Missing: ${missing}`);

import { LIBRARY_BOOKS } from '../src/data/library';
import fs from 'fs';

const contentLoaderPath = './src/services/contentLoader.ts';
const contentLoaderContent = fs.readFileSync(contentLoaderPath, 'utf-8');

LIBRARY_BOOKS.forEach(book => {
    const casePattern = new RegExp(`case\\s+['"]${book.id}['"]`, 'i');
    if (!casePattern.test(contentLoaderContent)) {
        console.log(`MISMATCH/MISSING: "${book.id}"`);
    }
});

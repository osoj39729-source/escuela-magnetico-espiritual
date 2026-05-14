import { LIBRARY_BOOKS } from '../src/data/library';
import fs from 'fs';

const contentLoaderPath = './src/services/contentLoader.ts';
const contentLoaderContent = fs.readFileSync(contentLoaderPath, 'utf-8');

console.log('--- START ID CHECK ---');
LIBRARY_BOOKS.forEach(book => {
    const escapedId = book.id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const casePattern = new RegExp(`case\\s+['"]${escapedId}['"]`, 'i');
    if (!casePattern.test(contentLoaderContent)) {
        console.log(`MISSING CASE for ID: "${book.id}"`);
    }
});
console.log('--- END ID CHECK ---');

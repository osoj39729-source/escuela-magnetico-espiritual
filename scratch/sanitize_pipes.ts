import fs from 'fs';
import path from 'path';

const LIBRARY_FILE = './src/data/library.ts';
const CONTENTS_DIR = './src/data/contents';

// 1. Sanitize library.ts
let libContent = fs.readFileSync(LIBRARY_FILE, 'utf-8');
const pipeCount = (libContent.match(/\|/g) || []).length;
console.log(`Found ${pipeCount} pipes in library.ts`);

// Replace pipes in index entries (between quotes)
libContent = libContent.replace(/"([^"]*\|[^"]*)"/g, (match, p1) => {
    return `"${p1.replace(/\|/g, '-')}"`;
});
fs.writeFileSync(LIBRARY_FILE, libContent);
console.log('Sanitized library.ts');

// 2. Sanitize content files
const files = fs.readdirSync(CONTENTS_DIR);
files.forEach(file => {
    if (file.endsWith('_content.ts')) {
        const filePath = path.join(CONTENTS_DIR, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        if (content.includes('|')) {
            // Replace pipes in keys
            content = content.replace(/"([^"]*\|[^"]*)"\s*:/g, (match, p1) => {
                return `"${p1.replace(/\|/g, '-')}" :`;
            });
            fs.writeFileSync(filePath, content);
            console.log(`Sanitized ${file}`);
        }
    }
});

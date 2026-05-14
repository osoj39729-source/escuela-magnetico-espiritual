const fs = require('fs');

// Count sections in each content file
const c1 = fs.readFileSync('src/data/contents/filosofia-enciclopedica-universal-tomo-1_content.ts', 'utf8');
const c2 = fs.readFileSync('src/data/contents/filosofia-enciclopedica-universal-tomo-2_content.ts', 'utf8');

const t1Titles = c1.match(/"title": "/g) || [];
const t2Titles = c2.match(/"title": "/g) || [];

console.log('Tomo 1 indexed sections:', t1Titles.length);
console.log('Tomo 2 indexed sections:', t2Titles.length);

// Show first 10 titles of each
const t1TitlesFull = c1.match(/"title": ".*?"/g) || [];
const t2TitlesFull = c2.match(/"title": ".*?"/g) || [];

console.log('\nTomo 1 - First 10 titles:');
t1TitlesFull.slice(0, 10).forEach(t => console.log(' ', t));

console.log('\nTomo 2 - First 10 titles:');
t2TitlesFull.slice(0, 10).forEach(t => console.log(' ', t));

console.log('\nTomo 2 - Last 5 titles:');
t2TitlesFull.slice(-5).forEach(t => console.log(' ', t));

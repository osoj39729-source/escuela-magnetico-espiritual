const fs = require('fs');
const content = fs.readFileSync('src/data/contents/filosof-a-austera-racional_content.ts', 'utf8');
const keys = [];
const regex = /"([^"]+)":\s*"/g;
let m;
while ((m = regex.exec(content)) !== null) {
    keys.push(m[1]);
}
console.log(keys.length + ' keys found.');
fs.writeFileSync('keys_far.json', JSON.stringify(keys, null, 2));

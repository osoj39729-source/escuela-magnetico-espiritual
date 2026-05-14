const fs = require('fs');
const path = 'F:/trincado/public/data/contents/v-i-d-a---d-e----m-a-r-i-a_esencia.json';

let content = fs.readFileSync(path, 'utf8').trim();

// Ensure it ends correctly
if (content.endsWith('}')) {
    // Check if it needs another }
    try {
        JSON.parse(content);
        console.log('JSON is already valid.');
    } catch (e) {
        console.log('JSON invalid, attempting fix...');
        // If it fails, maybe it's missing a closing brace for the last node or the root
        // Let's try adding one and check
        if (JSON.parse(content + '}')) {
             fs.writeFileSync(path, content + '}', 'utf8');
             console.log('Fixed by adding one }');
        } else if (JSON.parse(content + '}}')) {
             fs.writeFileSync(path, content + '}}', 'utf8');
             console.log('Fixed by adding }}');
        }
    }
}

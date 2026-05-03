const https = require('https');

const apiKey = "AIzaSyCeS9R02lXOTcxw5zu-1oXWCa3mvDyqDGE";
const projectId = "eme-de-la-cu";

const options = {
  hostname: 'firestore.googleapis.com',
  port: 443,
  path: `/v1/projects/${projectId}/databases/(default)/documents?key=${apiKey}`,
  method: 'GET'
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(`Status Code: ${res.statusCode}`);
    console.log("Raw Response:", data.substring(0, 200));
    if (res.statusCode === 200) {
      console.log("✅ ÉXITO: La llave de Firebase está ACTIVA.");
    } else {
      console.error(`❌ ERROR: Código ${res.statusCode}`);
    }
  });
});

req.on('error', (e) => console.error(e));
req.end();

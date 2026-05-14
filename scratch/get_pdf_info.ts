
import fs from 'fs';
import pdf from 'pdf-parse';

const pdfPath = 'F:/proyectos 2/trincado descargado de github/01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa.pdf';

async function getPages() {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdf(dataBuffer);
  console.log('Pages:', data.numpages);
  console.log('Metadata:', JSON.stringify(data.info, null, 2));
}

getPages();

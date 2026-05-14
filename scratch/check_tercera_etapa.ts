
import fs from 'fs';
import pdf from 'pdf-parse';

const pdfPath = 'F:/proyectos 2/trincado descargado de github/01_BIBLIOTECA_DOCTRINAL/Tercera-Etapa.pdf';

async function checkPdf() {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    
    console.log('--- PDF INFO ---');
    console.log('Pages:', data.numpages);
    console.log('Metadata:', data.info);
    console.log('Text Length:', data.text.trim().length);
    console.log('Sample Text (first 500 chars):');
    console.log(data.text.substring(0, 500));
    
    if (data.text.trim().length < 100) {
      console.log('\n[!] WARNING: Very little text found. This PDF is likely image-only/scanned.');
    } else {
      console.log('\n[OK] Text found. It might be searchable.');
    }
  } catch (error) {
    console.error('Error reading PDF:', error);
  }
}

checkPdf();

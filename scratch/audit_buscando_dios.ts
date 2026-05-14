import { validateBookFidelity } from '../src/utils/fidelity_validator.js';
import { LIBRARY_BOOKS } from '../src/data/library.js';

async function auditBuscandoDios() {
  const book = LIBRARY_BOOKS.find(b => b.id === 'buscando-a-dios-joaquin-trincado');
  if (!book) return;

  console.log(`\n=== AUDITORÍA DE FIDELIDAD: ${book.title} ===`);
  const report = validateBookFidelity(book.id, book.index);

  console.log(`\n[ESTADÍSTICAS]`);
  console.log(`- Cobertura de Fidelidad Total: ${report.coveragePct}%`);
  console.log(`- Temas Faltantes (Sin Esencia): ${report.missingKeys.length}`);
  console.log(`- Temas Corruptos (Incompletos): ${report.errors.length}`);

  if (report.errors.length > 0) {
    console.log(`\n[TEMAS CORRUPTOS - REQUIEREN REPARACIÓN]`);
    report.errors.slice(0, 10).forEach(err => console.log(`  🔴 ${err}`));
    if (report.errors.length > 10) console.log(`  ... y ${report.errors.length - 10} más.`);
  }

  if (report.missingKeys.length > 0) {
    console.log(`\n[TEMAS FALTANTES - REQUIEREN DESTILACIÓN]`);
    report.missingKeys.slice(0, 10).forEach(key => console.log(`  ⚪ ${key}`));
    if (report.missingKeys.length > 10) console.log(`  ... y ${report.missingKeys.length - 10} más.`);
  }
}

auditBuscandoDios().catch(console.error);

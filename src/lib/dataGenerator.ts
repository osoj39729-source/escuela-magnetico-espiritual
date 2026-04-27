import * as fs from 'fs';
import * as path from 'path';

const gradesData = [
  { grade: 1, title: "Grado 1: El Discurso del Obispo Stromayer", book: "El Discurso del Obispo Stromayer", lessonsCount: 50, themes: Array.from({length: 50}, (_, i) => `Tema ${i+1}: Análisis del Discurso - Parte ${i+1}`) },
  { grade: 2, title: "Grado 2: Buscando a Dios", book: "Buscando a Dios", lessonsCount: 113, themes: Array.from({length: 113}, (_, i) => `Tema ${i+1}: La Racionalidad del Creador - Capítulo ${i+1}`) },
  { grade: 3, title: "Grado 3: Primer Rayo de Luz", book: "Primer Rayo de Luz", lessonsCount: 144, themes: Array.from({length: 144}, (_, i) => `Tema ${i+1}: Primeros Pasos Racionales - Capítulo ${i+1}`) },
  { grade: 4, title: "Grado 4: Espiritismo en su Asiento", book: "Espiritismo en su Asiento", lessonsCount: 55, themes: Array.from({length: 55}, (_, i) => `Tema ${i+1}: Fundamentos Técnicos - Capítulo ${i+1}`) },
  { grade: 5, title: "Grado 5: Filosofía Austera Racional", book: "Filosofía Austera Racional (Partes 1 & 2)", lessonsCount: 83, themes: Array.from({length: 83}, (_, i) => `Tema ${i+1}: Filosofía Austera I y II - Capítulo ${i+1}`) },
  { grade: 6, title: "Grado 6: Los Cinco Amores", book: "Los Cinco Amores / Filosofía Enciclopédica Universal", lessonsCount: 117, themes: Array.from({length: 117}, (_, i) => `Tema ${i+1}: Evolución y Enfoque Universal - Capítulo ${i+1}`) },
  { grade: 7, title: "Grado 7: Magnetismo en su Origen", book: "Magnetismo en su Origen / Filosofía Austera Racional (Parte 3)", lessonsCount: 164, themes: Array.from({length: 164}, (_, i) => `Tema ${i+1}: Magnetismo y Razón - Capítulo ${i+1}`) },
  { grade: 8, title: "Grado 8: Espiritismo Estudiado", book: "Espiritismo Estudiado / Filosofía Austera Racional (Parte 4)", lessonsCount: 101, themes: Array.from({length: 101}, (_, i) => `Tema ${i+1}: Estudio Sistémico - Capítulo ${i+1}`) },
  { grade: 9, title: "Grado 9: Profilaxis de la Vida", book: "Profilaxis de la Vida / Filosofía Austera Racional (Parte 5)", lessonsCount: 122, themes: Array.from({length: 122}, (_, i) => `Tema ${i+1}: La Vida Racional - Capítulo ${i+1}`) },
  { grade: 10, title: "Grado 10: Los Extremos se Tocan", book: "Los Extremos se Tocan / Filosofía Enciclopédica Universal (Tomo 2)", lessonsCount: 137, themes: Array.from({length: 137}, (_, i) => `Tema ${i+1}: La Síntesis Universal - Capítulo ${i+1}`) },
  { grade: 11, title: "Grado 11: Conócete a ti Mismo", book: "Conócete a ti Mismo / El Alfaquí (Vademécum)", lessonsCount: 136, themes: Array.from({length: 136}, (_, i) => `Tema ${i+1}: El Autoexamen Racional - Capítulo ${i+1}`) },
  { grade: 12, title: "Grado 12: Código de Amor Universal", book: "Código de Amor Universal (Tomos 1 y 2)", lessonsCount: 95, themes: Array.from({length: 95}, (_, i) => `Tema ${i+1}: Axiomas del Código - Capítulo ${i+1}`) },
  { grade: 13, title: "Grado 13: Compilación de Reglamentos", book: "Compilación de Reglamentos", lessonsCount: 50, themes: Array.from({length: 50}, (_, i) => `Tema ${i+1}: Organización y Ley - Capítulo ${i+1}`) }
];

const dataPath = path.join(process.cwd(), 'src/data/grades');

if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath, { recursive: true });
}

gradesData.forEach(g => {
  const content = `export const GRADE_${g.grade} = {
  id: ${g.grade},
  title: "${g.title}",
  type: "book",
  book: "${g.book}",
  lessonsCount: ${g.lessonsCount},
  themes: ${JSON.stringify(g.themes, null, 2)}
};
`;
  fs.writeFileSync(path.join(dataPath, `grade${g.grade}.ts`), content);
});

console.log('All grades generated.');

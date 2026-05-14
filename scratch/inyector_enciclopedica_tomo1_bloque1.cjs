const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';

const esencia = {
  "Prólogo e Introito: La Cátedra del Espíritu de Verdad": {
    "PilotoDeCoherencia": "Establece que la Filosofía Enciclopédica es la culminación de la verdad eterna, siendo la obra de Allan Kardec solo un prefacio necesario. Define el Espiritismo no como religión, sino como la ciencia máxima (Esciencia) que se une a la Electricidad como su esposa luminosa. Declara que no se dará otra ley ni otra sabiduría en los siglos restantes de vida de la Tierra.",
    "IdeasSecundarias": [
      "Allan Kardec fue el secretario de Moisés (en la Escuela Esénica) y su misión fue confirmar el cumplimiento de los tiempos.",
      "La Electricidad es la fuerza Omnipotente y madre de todo lo creado.",
      "La Escuela Magnético-Espiritual de la Comuna Universal es el edificio levantado sobre sillares de granito que durará por siempre."
    ],
    "CitasIneludibles": [
      "Allan Kardec... sólo traía la misión de confirmar que se había 'Cumplido el tiempo'.",
      "La Electricidad, fuerza Omnipotente y madre de todo lo creado.",
      "Otra ley ni otra sabiduría, no se os dará, ni aquí ni más allá."
    ]
  },
  "Comunicaciones de 1910: El Despertar del Juez": {
    "PilotoDeCoherencia": "Recopila las primeras comunicaciones donde se adiestra a las médiums y se establecen los principios de la Escuela. Se enfatiza la necesidad de la unidad de ideas y la prohibición de preguntas capciosas. Define al 'Juez' como hombre, para que pueda juzgar a los espíritus que fueron hombres, demostrando el máximo amor del Padre.",
    "IdeasSecundarias": [
      "El Juez es hombre para dar confianza a sus hermanos en el juicio.",
      "Se debe sacar bien del mal y tolerar sin consentir el error religioso.",
      "Las comunicaciones de espíritus en tinieblas sirven de espejo y advertencia para los encarnados."
    ],
    "CitasIneludibles": [
      "El Juez es hombre, para juzgar a los espíritus que fueron hombres.",
      "Tolerar y no consentir.",
      "la caridad es injusticia; la beneficencia es justicia comunal obligatoria."
    ]
  }
};

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 1 de Filosofía Enciclopédica Universal Tomo 1 inyectado.');

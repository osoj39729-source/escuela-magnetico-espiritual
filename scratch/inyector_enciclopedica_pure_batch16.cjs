const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 16 - Claves 151 a 170)
const nuevosNodos = {
  "8786: Octubre 28 de 1911 - Posesión Portillo": {
    "PilotoDeCoherencia": "Cimientos del Edificio. Los antecesores legaron los cimientos de la verdad; hoy es fácil levantar el edificio siguiendo los planos trazados por la voluntad y la razón.",
    "CitaInelutable": "También os legaron los cimientos de un edificio... hoy es fácil levantarlo siguiendo los planos.",
    "EjemploPedagogico": "El abuelo puso la piedra fundamental; al nieto le toca poner los ladrillos y el techo siguiendo el mapa que el abuelo le dejó.",
    "ConexionDoctrinal": ["Evolución de la Doctrina", "Voluntad y Razón"],
    "NodosSimapticos": []
  },
  "8933: Octubre 28 de 1911 (hora 21) - Posesión M. P.": {
    "PilotoDeCoherencia": "Choque de Clases Espirituales. Un espíritu de alcurnia (papa o monarca) se ve humillado al ser atraído a un centro de 'obreros manuales', cuestionando por qué no está con los magnates.",
    "CitaInelutable": "¿Por qué me veo empujado hacia vosotros...Pobres...Obreros...Manuales?",
    "EjemploPedagogico": "El rey que cae al lodo y se queja de que las hormigas lo toquen; en el espíritu, el traje de rey no existe, solo el valor del alma.",
    "ConexionDoctrinal": ["Igualdad Universal", "Justicia de Revisión"],
    "NodosSimapticos": ["Orgullo de Clase (Espiritual)"]
  },
  "9102: Noviembre 3 de 1911 - Posesión Portillo": {
    "PilotoDeCoherencia": "Martirio Real vs Martirio Bíblico. Una niña hospiciana de 8 años relata su sufrimiento real, afirmando haber padecido más que el Jesucristo bíblico por el odio de sus patrones.",
    "CitaInelutable": "Padecí más que Nuestro Señor, sí, más que Jesucristo... era una hospiciana pequeña.",
    "EjemploPedagogico": "El dolor de un niño real que sufre hoy pesa más en la balanza de Dios que la leyenda de un mártir pintado en un cuadro.",
    "ConexionDoctrinal": ["Sufrimiento Humano", "Crítica a la Victimización Religiosa"],
    "NodosSimapticos": []
  },
  "9132: Noviembre 5 de 1911 - Posesión Portillo": {
    "PilotoDeCoherencia": "Luz al Dominio del Mundo. Se celebra que la luz pase al dominio del mundo mediante el cumplimiento del juramento del misionero en los consejos del Padre.",
    "CitaInelutable": "Es hora que pase la luz al dominio del mundo... cumplimiento de su juramento.",
    "EjemploPedagogico": "El sol ya no solo brilla en la cima de la montaña, sino que baja a iluminar las calles de la ciudad para que todos vean.",
    "ConexionDoctrinal": ["Misión de Trincado", "Era de Luz"],
    "NodosSimapticos": []
  },
  "9290: Noviembre 5 de 1911, noche - Posesión M. P.": {
    "PilotoDeCoherencia": "Día de Demolición. El espíritu se multiplica para combatir las armas mortíferas de los hombres, denunciando la falta de aprovechamiento de la luz en todos los tiempos.",
    "CitaInelutable": "Día aciago, de lucha y de demolición... ocasionado todo por una falta pequeña.",
    "EjemploPedagogico": "Un pequeño descuido en el fuego de la cocina puede quemar toda la casa; la falta de luz en el alma quema a la humanidad entera.",
    "ConexionDoctrinal": ["Lucha contra la Guerra", "Responsabilidad Colectiva"],
    "NodosSimapticos": []
  },
  "9342: Noviembre 7 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Instrucción Directa. La importancia de la instrucción que se recibe en las sesiones para que los hombres dejen de ser esclavos de la ignorancia y el error.",
    "CitaInelutable": "Instruiros, hermanos... para que no seáis más esclavos.",
    "EjemploPedagogico": "La escuela es la llave que abre los grillos de la mente; el que aprende a pensar, ya no puede ser mandado por un amo ciego.",
    "ConexionDoctrinal": ["Importancia de la Instrucción", "Libertad por el Saber"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Orgullo de Clase (Espiritual)": {
    "Definición": "Persistencia del prejuicio de superioridad social o jerárquica en el espíritu tras la muerte física. Se manifiesta cuando entidades que ocuparon puestos de poder o riqueza se resisten a ser instruidas en centros humildes o por personas de clase trabajadora, retrasando así su propio progreso.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Queja del espíritu magnate, Octubre de 1911).",
    "Conexiones": ["Igualdad Universal", "Prejuicio", "Justicia de Revisión"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo en su Asiento"]
  },
  "Martirio Real": {
    "Definición": "Sufrimiento auténtico y a menudo anónimo padecido por los seres humanos en la tierra debido a la injusticia, la pobreza y el desamor. La doctrina lo antepone al 'martirio dogmático' de los santos bíblicos, señalando que el dolor de un niño o un desvalido tiene un valor expiatorio y una demanda de justicia real ante Eloí.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Caso de la niña hospiciana, Noviembre de 1911).",
    "Conexiones": ["Justicia Universal", "Sufrimiento", "Expiación"],
    "Obras": ["Filosofía Enciclopédica Universal"]
  },
  "Era de Luz": {
    "Definición": "Período histórico y espiritual que se inicia con la revelación de la verdad racional y el cumplimiento de las misiones de justicia en la tierra. Se caracteriza por el fin del dominio de la ignorancia dogmática y la instauración del conocimiento como base de la libertad humana.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Anuncio de Noviembre de 1911).",
    "Conexiones": ["Misión de Trincado", "Progreso", "Verdad"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Espiritismo en su Asiento"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 6 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 16) y 3 términos sinápticos.');

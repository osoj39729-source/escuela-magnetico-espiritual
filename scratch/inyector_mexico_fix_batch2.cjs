const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/la-revolucion-de-mexico_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - La Revolución de México (Batch 2 - Claves 7 a 13)
const nuevosNodos = {
  "007: CAPITULO SÉPTIMO: LA OLA DE LA VERDAD": {
    "PilotoDeCoherencia": "Purificación Social. El progreso actúa como una ola del mar que arroja a la orilla las impurezas y errores (la 'brasa') para quemarlos al fuego del avance humano.",
    "CitaInelutable": "El mar no puede tener impurezas en sus aguas que son Esencia... la causa es la resistencia de la brasa que por ley, la ola tiene que arrojar al último rincón para quemarla allí.",
    "EjemploPedagogico": "Una marea alta que limpia la playa de basura acumulada; no es que el mar sea violento por odio, sino que su propia naturaleza pura no tolera lo que está podrido.",
    "ConexionDoctrinal": ["La Ola de la Verdad (Alegoría)", "Evolución Social"],
    "NodosSimapticos": ["La Ola de la Verdad (Alegoría)"]
  },
  "008: CAPITULO OCTAVO: MADERO Y SU ASESINATO": {
    "PilotoDeCoherencia": "Martirio Político. Francisco I. Madero es un mandatario cuya sangre lavó sus yerros, cayendo víctima del odio y la ambición ajena antes de poder ejecutar su programa.",
    "CitaInelutable": "Madero no era bendito... pero su sangre lavó, si algún yerro tenía... fue un mártir porque lo mató el odio y la ambición.",
    "EjemploPedagogico": "Un sembrador que es asesinado justo cuando está echando las semillas; su muerte no invalida el campo, sino que lo fertiliza con la urgencia de justicia.",
    "ConexionDoctrinal": ["Justicia Histórica", "Mártires de la Libertad"],
    "NodosSimapticos": []
  },
  "009: CAPITULO NUEVE: EL GENERAL HUERTA EN SUS HECHOS": {
    "PilotoDeCoherencia": "Egoísmo Tiránico. Victoriano Huerta encarna el libertinaje y el egoísmo del antiguo régimen de Díaz, sentándose a la mesa del dictador para conspirar contra la verdad.",
    "CitaInelutable": "Como oficial del Dictador, fue uno de los más libertinos y de los más egoístas... 'Dios los cría y ellos se encuentran'.",
    "EjemploPedagogico": "Un lobo con piel de oveja que entra en el redil solo para abrirle la puerta al cazador; su lealtad no es hacia el rebaño, sino hacia su propio vientre.",
    "ConexionDoctrinal": ["Antagonismo Revolucionario", "Egoísmo"],
    "NodosSimapticos": []
  },
  "010: CAPITULO DIEZ: PANCHO VILLA Y SUS HECHOS": {
    "PilotoDeCoherencia": "Justificación del Guerrero. Villa no es un bandido, sino un hombre empujado por la injusticia (defensa del honor de su hermana) a ser el brazo ejecutor de la Ley Divina.",
    "CitaInelutable": "Villa no es bandido, es obligado a serlo... por defender a su ultrajada hermana... Villa honró el uniforme de militar.",
    "EjemploPedagogico": "Un hombre que debe vivir en la selva para proteger a su familia de una jauría de lobos; ante los ojos de la ciudad es un salvaje, pero ante la justicia es un guardián.",
    "ConexionDoctrinal": ["Pancho Villa (Misión)", "Ley de Justicia"],
    "NodosSimapticos": ["Pancho Villa (Misión)"]
  },
  "011: CAPITULO ONCE: LO QUE PERSIGUE LA REVOLUCIÓN": {
    "PilotoDeCoherencia": "Paz Matando la Guerra. La revolución busca la paz verdadera eliminando la raíz única de todos los conflictos: la religión y el dogma.",
    "CitaInelutable": "Mata la guerra con la guerra, quitando las causas que la originan. La raíz única de las guerras es la religión.",
    "EjemploPedagogico": "Para curar una infección, no basta con poner una venda (paz efímera), hay que aplicar el bisturí (revolución) para sacar el pus (dogma) de raíz.",
    "ConexionDoctrinal": ["Odio Religioso (Causa)", "Paz Verdadera"],
    "NodosSimapticos": ["Odio Religioso (Causa)"]
  },
  "012: CAPITULO DOCE: LA REVOLUCIÓN MEXICANA ES MUNDIAL": {
    "PilotoDeCoherencia": "Tierra Prometida. El conflicto mexicano es el inicio de una transformación global que tiene a América Latina como el escenario central del progreso espiritual.",
    "CitaInelutable": "La Revolución Mexicana es mundial... América Latina es la tierra prometida.",
    "EjemploPedagogico": "Una chispa en un granero seco que no se queda en un rincón, sino que incendia toda la estructura para dejar espacio a una construcción nueva y moderna.",
    "ConexionDoctrinal": ["Revolución Mundial (Concepto)", "América Latina"],
    "NodosSimapticos": ["Revolución Mundial (Concepto)"]
  },
  "013: CAPÍTULO TRECE: LA REVOLUCIÓN TRIUNFA POR LEY INEXORABLE": {
    "PilotoDeCoherencia": "Fuerza de Ley. La evolución es el proceso natural, pero cuando el hombre se opone a ella, surge la revolución como la justicia que impone el progreso por la fuerza.",
    "CitaInelutable": "La evolución es la ley, la revolución la justicia de la ley... se impone por la justicia que dice fuerza de ley.",
    "EjemploPedagogico": "Un río que fluye tranquilo hasta que alguien le pone un dique; el agua se acumula y finalmente rompe el dique para seguir su camino natural; esa rotura es la revolución.",
    "ConexionDoctrinal": ["Evolución vs Revolución", "Justicia de la Ley"],
    "NodosSimapticos": ["Evolución vs Revolución"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Evolución vs Revolución": {
    "Definición": "Concepto dialéctico de la doctrina trincadista. La evolución es el proceso gradual y pacífico de progreso. La revolución es la intervención drástica de la Ley de Justicia para eliminar los obstáculos artificiales (dogmas, tiranías) que impiden el flujo natural de la evolución.",
    "Contexto": "La Revolución de México (Capítulo Trece).",
    "Conexiones": ["Justicia", "Progreso", "Ley"],
    "Obras": ["La Revolución de México", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 2 (FIX) de La Revolución de México (7 nodos 1:1) y términos sinápticos. Villa y la Ley Inexorable sellados.');

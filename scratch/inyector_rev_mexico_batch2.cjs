const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/la-revolucion-de-mexico_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - La Revolución de México (Batch 2 - Capítulos 7 a 12)
const nuevosNodos = {
  "004: Capítulo 7: La Ola de la Verdad": {
    "PilotoDeCoherencia": "Purificación Social. El progreso actúa como una ola del mar que arroja a la orilla las impurezas y errores (la 'brasa') para quemarlos al fuego del avance humano.",
    "CitaInelutable": "El mar no puede tener impurezas en sus aguas que son Esencia... la causa es la resistencia de la brasa que por ley, la ola tiene que arrojar al último rincón para quemarla allí.",
    "EjemploPedagogico": "Una marea alta que limpia la playa de basura acumulada; no es que el mar sea violento por odio, sino que su propia naturaleza pura no tolera lo que está podrido.",
    "ConexionDoctrinal": ["La Ola de la Verdad (Alegoría)", "Evolución Social"],
    "NodosSimapticos": ["La Ola de la Verdad (Alegoría)"]
  },
  "005: Capítulo 8-9: Madero el Mártir vs Huerta el Libertino": {
    "PilotoDeCoherencia": "Dualidad Histórica. Francisco I. Madero es un mártir cuya sangre lavó sus yerros; Victoriano Huerta es el ejemplo del egoísmo y libertinaje que traiciona a la justicia.",
    "CitaInelutable": "Madero... su sangre lavó, si algún yerro tenía... Huerta... uno de los más libertinos y de los más egoístas.",
    "EjemploPedagogico": "El contraste entre el sembrador que muere cuidando su campo (Madero) y el capataz traidor que quema la cosecha para robar las tierras (Huerta).",
    "ConexionDoctrinal": ["Justicia Histórica", "Traición y Lealtad"],
    "NodosSimapticos": []
  },
  "006: Capítulo 10: Pancho Villa y su Misión de Justicia": {
    "PilotoDeCoherencia": "Justificación del Guerrero. Villa no es un bandido por naturaleza, sino por necesidad ante la injusticia (defensa del honor de su hermana); es un instrumento de la Ley Divina para la purificación de México.",
    "CitaInelutable": "Villa no es bandido, es obligado a serlo... por defender a su ultrajada hermana... Villa honró el uniforme de militar en tanto que el corruptor lo denigró.",
    "EjemploPedagogico": "Un hombre que debe vivir en la selva para proteger a su familia de una jauría de lobos; ante los ojos de la ciudad es un salvaje, pero ante la justicia es un guardián de la vida.",
    "ConexionDoctrinal": ["Pancho Villa (Misión)", "Ley de Justicia"],
    "NodosSimapticos": ["Pancho Villa (Misión)"]
  },
  "007: Capítulo 11-12: El Alcance Mundial de la Revolución": {
    "PilotoDeCoherencia": "Eje Latinoamericano. La Revolución Mexicana busca la paz verdadera eliminando la raíz de la guerra (la religión) y marca a América Latina como la 'Tierra Prometida' para el progreso mundial.",
    "CitaInelutable": "México hoy persigue con la revolución, asentar la paz verdadera... La Revolución Mexicana es mundial... América Latina es la tierra prometida.",
    "EjemploPedagogico": "Una primera luz que se enciende en un rincón de la casa (México) para anunciar que el amanecer ha llegado para todo el mundo (América y el infinito).",
    "ConexionDoctrinal": ["Revolución Mundial (Concepto)", "América Latina (Tierra Prometida)"],
    "NodosSimapticos": ["Revolución Mundial (Concepto)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Pancho Villa (Misión)": {
    "Definición": "Guerrero y líder revolucionario mexicano reconocido en la doctrina de Trincado como un instrumento de la Justicia Universal. Su aparente bandidaje es reinterpretado como una reacción necesaria contra la corrupción del régimen de Díaz, cumpliendo la función de purificador social en la lucha por la Comuna.",
    "Contexto": "La Revolución de México (Capítulo Diez).",
    "Conexiones": ["Justicia", "Revolución", "Purificación"],
    "Obras": ["La Revolución de México"]
  },
  "La Ola de la Verdad (Alegoría)": {
    "Definición": "Concepto metafísico que describe el movimiento cíclico e imparable del progreso humano. Al igual que el mar limpia sus aguas arrojando la basura a la orilla, la Ola de la Verdad expulsa de las sociedades los dogmas y los hombres egoístas que impiden la fraternidad.",
    "Contexto": "La Revolución de México (Capítulo Siete).",
    "Conexiones": ["Evolución", "Justicia Universal", "Esencia"],
    "Obras": ["La Revolución de México"]
  },
  "Revolución Mundial (Concepto)": {
    "Definición": "Visión de que los conflictos de liberación nacional, específicamente el mexicano, son parte de un plan cosmogónico para instaurar la Comuna Universal. Establece que la paz solo llegará cuando se erradiquen las causas de la guerra (religiones y fronteras).",
    "Contexto": "La Revolución de México (Capítulos Once y Doce).",
    "Conexiones": ["Paz", "Comuna Universal", "América Latina"],
    "Obras": ["La Revolución de México"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 2 de La Revolución de México (4 nodos) y 3 términos sinápticos. Villa y la Ola de la Verdad sellados.');

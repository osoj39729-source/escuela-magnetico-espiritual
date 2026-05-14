const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/la-revolucion-de-mexico_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - La Revolución de México (Batch 3 - FINAL - Claves 14 a 20)
const nuevosNodos = {
  "014: CAPÍTULO CATORCE: EL GENERAL VILLA ES UN APÓSTOL DEL COMUNISMO": {
    "PilotoDeCoherencia": "Ley de Necesidad. El comunismo no es un sistema inventado, sino una ley de necesidad que Villa encarna al luchar contra el absolutismo y la propiedad egoísta.",
    "CitaInelutable": "El comunismo ha dejado de ser un sistema, para convertirse en ley de necesidad entre los hombres.",
    "EjemploPedagogico": "Un náufrago que intenta ser dueño de toda la isla, pero comprende que para sobrevivir debe compartir los frutos con los demás; el hambre le enseña que la propiedad privada es un estorbo para la vida.",
    "ConexionDoctrinal": ["Comunismo (Axioma)", "Ley de Necesidad"],
    "NodosSimapticos": ["Comunismo (Axioma)"]
  },
  "015: CAPITULO QUINCE: LA COMUNA ES EL RÉGIMEN UNIVERSAL": {
    "PilotoDeCoherencia": "Ley Común. La naturaleza no reconoce fronteras; la división de la tierra en naciones es un acto de ambición humana que la Ley Natural desmiente en cada acto.",
    "CitaInelutable": "Ciego debe ser el que en la naturaleza no vea la Ley común... la Ley natural lo desmiente todo en un solo acto.",
    "EjemploPedagogico": "Una colmena de abejas donde no hay fronteras entre los panales; todas trabajan para la misma miel porque saben que esa es la única forma de que la colmena prospere.",
    "ConexionDoctrinal": ["Régimen Comunal", "Fraternidad Universal"],
    "NodosSimapticos": ["Régimen Comunal"]
  },
  "016: CAPITULO DIECISEIS: LA FELICIDAD EN EL RÉGIMEN COMUNAL": {
    "PilotoDeCoherencia": "Destino Inevitable. La humanidad es empujada por la ley hacia el régimen comunal como única vía para la felicidad verdadera, liquidando la cadena del progreso de cada mundo.",
    "CitaInelutable": "La humanidad sólo puede ser feliz en el régimen comunal y a él es empujada por la ley.",
    "EjemploPedagogico": "Un barco que navega por un canal estrecho; puede intentar ir en contra de la corriente o hacia las orillas rocosas, pero finalmente la corriente lo llevará al puerto seguro donde todos pueden desembarcar.",
    "ConexionDoctrinal": ["Felicidad Universal", "Ley de Evolución"],
    "NodosSimapticos": []
  },
  "017: CAPITULO DIECISIETE: LAS DOS CAUSAS ÚNICAS DE LAS GUERRAS": {
    "PilotoDeCoherencia": "Odio Religioso. Solo existe una causa real para las guerras: el odio infundido por las religiones al dividir a los hombres en bandos 'salvados' y 'condenados'.",
    "CitaInelutable": "De las dos causas aparentes que causan las guerras, sólo es una... el usurpador le infunde el odio a los que no pertenecen a su dogma.",
    "EjemploPedagogico": "Un maestro que enseña a la mitad de su clase a odiar a la otra mitad porque no leen el mismo libro; el conflicto no nace de los niños, sino de la semilla de división plantada por el maestro.",
    "ConexionDoctrinal": ["Odio Religioso (Causa)", "Causa de las Guerras"],
    "NodosSimapticos": ["Odio Religioso (Causa)"]
  },
  "018: CAPITULO DIECIOCHO: HUERTA Y VILLA JUZGADOS POR LA RAZÓN": {
    "PilotoDeCoherencia": "Juicio de Conciencia. No se juzga por nombres, sino por los actos y la trinidad (cuerpo, alma, espíritu) del hombre como responsable único ante la Ley de Libertad.",
    "CitaInelutable": "Al hombre no lo hace el nombre... es solo cuando ve, comprende y obra como trinidad... el espíritu, único responsable de los actos.",
    "EjemploPedagogico": "Un juez que no mira el apellido del acusado ni su uniforme, sino el rastro de sus acciones y la intención de su corazón para ver si actuó por amor o por egoísmo.",
    "ConexionDoctrinal": ["Justicia de la Razón", "Ley de Libertad"],
    "NodosSimapticos": []
  },
  "019: CAPÍTULO DIECINUEVE: LAS REPÚBLICAS SUDAMERICANAS Y SU CAUSA COMÚN": {
    "PilotoDeCoherencia": "Solidaridad Continental. Argentina, Chile y Brasil (ABC) actúan como la voz de paz y justicia en defensa de los hermanos de México, reconociendo que su causa es común e indivisible.",
    "CitaInelutable": "Las Repúblicas Sudamericanas no pueden ser indiferentes... su causa es común... la Argentina con Chile llamaron al Brasil.",
    "EjemploPedagogico": "Tres hermanos que corren a ayudar a un cuarto hermano que está siendo atacado; saben que si el cuarto cae, el agresor irá luego por ellos porque la familia es una.",
    "ConexionDoctrinal": ["Unidad Sudamericana", "Bloque ABC"],
    "NodosSimapticos": []
  },
  "020: CAPÍTULO VEINTE: EL TRIUNFO DE VILLA Y LA PAZ MUNDIAL": {
    "PilotoDeCoherencia": "Liquidación de la Carestía. El triunfo de la causa de Villa representa el fin de la 'paz armada' y la carestía artificial, instaurando el gobierno del pueblo para el bienestar común.",
    "CitaInelutable": "El triunfo de la causa de Villa es el triunfo definitivo de la verdadera paz... implantar el gobierno del pueblo, por el pueblo y para el pueblo.",
    "EjemploPedagogico": "Un granero lleno de trigo mientras la gente afuera muere de hambre porque los soldados custodian la puerta para una guerra que nadie quiere; la paz llega cuando el pueblo abre el granero y comparte el pan.",
    "ConexionDoctrinal": ["Paz Verdadera", "Gobierno del Pueblo"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

console.log('✅ ¡OBRA COMPLETADA! Inyectado Batch 3 (FIX FINAL) de La Revolución de México (21 nodos 1:1 en total). Estructura íntegra sellada.');

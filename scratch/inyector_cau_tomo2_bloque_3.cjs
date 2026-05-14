const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "328: Todo es Magnetismo Espiritual: Ley de Fraternidad": {
    "PilotoDeCoherencia": "Axioma fundamental que establece que la energía espiritual es la base de toda existencia y fraternidad. La Comuna es el estado natural de la vida, evidente en los elementos básicos (luz, agua, aire) que son comunes por necesidad. Privatizar estos bienes o imponerse sobre otro ser humano es una rebelión contra la Ley Natural y una locura ambiciosa.",
    "IdeasSecundarias": [
      "La igualdad en el nacimiento y la muerte prohíbe la supremacía de un hombre sobre otro.",
      "Los beneficios de la naturaleza son absolutamente comunales por mandato del Creador.",
      "El magnetismo espiritual es la fuerza que debe unir a todos los mundos en paz."
    ],
    "CitasIneludibles": [
      "Todo es Magnetismo Espiritual. Téngase por Ley de estudio eterno y de fraternidad universal.",
      "La Comuna es la perfección de las humanidades... beneficios son absolutamente comunales",
      "todo es común de todos y en todas partes"
    ]
  },
  "401: ARTÍCULO 1º al 3º: Valor Nominal y Justicia de Transición": {
    "PilotoDeCoherencia": "El ser humano es el único valor real de la Comuna. Se establece un periodo de 90 años para la transición total, iniciando con la justicia salarial: se debe gravar la riqueza acumulada para garantizar al trabajador un salario digno y holgado. La mujer es reconocida como pilar fundamental, consejera y parte integrante primera de la sociedad.",
    "IdeasSecundarias": [
      "El número de hombres y mujeres es el único cómputo de valor para la administración comunal.",
      "La maternidad es respetada como misión primera, pero no excluye a la mujer de la vida productiva.",
      "La transición está bajo la dirección espiritual del Espíritu de Verdad y el Juez."
    ],
    "CitasIneludibles": [
      "El valor nominal de la comuna, son los hombres, y no puede haber clases ni privilegios",
      "la mujer... es parte integrante y primera... buena consejera en lo material y lo espiritual",
      "gravando a la riqueza acaparada, con una contribución equivalente a todas las necesidades del trabajador"
    ]
  },
  "604: ARTÍCULO 1º al 3º: Diseño de Ciudades Agrícolas": {
    "PilotoDeCoherencia": "Manda la reorganización de la población en ciudades agrícolas autosuficientes de 100,000 habitantes y regionales de 300,000. El diseño urbano prioriza la salud, la educación y el recreo, integrando parques y talleres en una estructura radial eficiente que elimine el hacinamiento y la miseria de las ciudades antiguas.",
    "IdeasSecundarias": [
      "Cada ciudad debe producir su alimento más un 50% para el intercambio con otras zonas.",
      "El transporte (vías férreas, tranvías, automóviles) se organiza según los cuatro puntos cardinales.",
      "El objetivo es elevar la civilización mediante la asistencia personal y la educación de la juventud en entornos naturales."
    ],
    "CitasIneludibles": [
      "se manda: que se formen ciudades agrícolas de 100.000 habitantes... con sujeción a lo que en los siguientes se dice.",
      "territorios... suficientes para producir... la suficiente alimentación... más el 50 % para el cambio",
      "servirán para recreo y solaz de sus moradores."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia del CAU Tomo II (Bloque 3) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Magnetismo_Espiritual_Universal": {
    "palabras_clave": ["magnetismo", "energía", "fraternidad", "estudio eterno", "vínculo", "sustancia"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#328: Todo es Magnetismo Espiritual: Ley de Fraternidad"],
    "contexto_real": "La ley suprema que explica la interconexión de todos los seres y mundos, siendo el fundamento de la Comuna Universal."
  },
  "Valor_Nominal_Humano": {
    "palabras_clave": ["valor nominal", "hombres", "mujeres", "riqueza acaparada", "salario", "justicia salarial"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#401: ARTÍCULO 1º al 3º: Valor Nominal y Justicia de Transición"],
    "contexto_real": "Principio económico que sustituye el valor del dinero por el valor intrínseco de la vida humana y su capacidad de trabajo."
  },
  "Ciudades_Agricolas_Comunales": {
    "palabras_clave": ["ciudad agrícola", "100000 habitantes", "recreo", "autosuficiencia", "diseño urbano", "pueblos"],
    "nodos_sinapticos": ["codigo-de-amor-universal-tomo-2_esencia.json#604: ARTÍCULO 1º al 3º: Diseño de Ciudades Agrícolas"],
    "contexto_real": "Modelo de asentamiento humano diseñado para la armonía con la naturaleza, el trabajo productivo y el desarrollo integral del espíritu."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para el Tomo II.');

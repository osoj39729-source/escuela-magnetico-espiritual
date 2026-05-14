const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "8890 y 9924: La Herencia Universal y el Futuro de la Ciencia": {
    "PilotoDeCoherencia": "Proclama que todos los hombres son herederos del universo y de sus fuerzas naturales por derecho ilimitado. En la nueva era, la ciencia (mecánica, química, física) dejará de ser instrumento de explotación religiosa para convertirse en el 'acólito' del hombre productor, quien oficiará sobre su propia conciencia y bajo la bóveda del infinito.",
    "IdeasSecundarias": [
      "El progreso se hereda de generación en generación; heredar del espíritu es el verdadero acto de justicia.",
      "La ciencia servirá para que el hombre sea director de la máquina y no máquina explotada.",
      "La insignia del ancla reemplazará a la cruz de afrenta, simbolizando la seguridad en la ley natural."
    ],
    "CitasIneludibles": [
      "el hombre es heredero de todo el universo",
      "La ciencia, entonces será el acólito del sacerdote hombre, que oficiará en el trabajo",
      "la cruz se habrá quitado de la afrenta de los hombres y se establece como insignia el ancla"
    ]
  },
  "9041: El Mandato Único - Ama a tu Hermano": {
    "PilotoDeCoherencia": "Sintetiza toda la ley en un solo mandato imperativo: 'Ama a tu hermano'. Explica que el amor de familia, aunque sagrado, es imperfecto por su naturaleza particular; el amor perfecto es el que se expande a la sociedad, la nación y el mundo entero, reflejando el amor sin singularidad del Creador.",
    "IdeasSecundarias": [
      "El amor de familia es la base, pero no el fin; detenerse en él es estancarse en una imperfección.",
      "El mandato es sencillo pero contundente, reasumiendo todos los decretos divinos previos.",
      "El amor perfecto relativo al mundo es el que no hace acepción de personas."
    ],
    "CitasIneludibles": [
      "este sencillo mandato: 'AMA A TU HERMANO'",
      "hasta el amor sagrado de la familia es una imperfección (por ser amor particular)",
      "el amor perfecto, relativo al mundo... es el amor sin mancilla"
    ]
  },
  "10284: El Discurso del Espíritu de Verdad": {
    "PilotoDeCoherencia": "Cierra la obra con la autoridad del 'Espíritu de Verdad' en representación de Eloí. Advierte que los tiempos son cumplidos y que la justicia recaerá al instante sobre los que no aprovechan la luz de la razón, pues ya no queda espacio en la atmósfera de la tierra para almacenar más injusticias.",
    "IdeasSecundarias": [
      "La justicia hoy es inmediata porque la impunidad secular ha llegado a su límite.",
      "El orgullo es el gusano que seca los árboles que una vez fueron frondosos (instituciones/hombres).",
      "La palabra del Maestro de Maestros se presenta con carácter de justicia inapelable."
    ],
    "CitasIneludibles": [
      "esa firma vista por primera vez en la tierra con carácter de justicia: El Espíritu de Verdad",
      "ya no hay espacio en la atmósfera de la tierra, para almacenar injusticias",
      "la justicia recae al instante, porque ya no hay espacio"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Extremos se Tocan (Bloque 5) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Mandato_Unico_Amor": {
    "palabras_clave": ["ama a tu hermano", "amor universal", "fin de la familia particular", "mandato supremo", "fraternidad"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#9041: El Mandato Único - Ama a tu Hermano"],
    "contexto_real": "Simplificación máxima de la ley ética trincadista como motor único de la Comuna Universal."
  },
  "Ciencia_Acolito_del_Hombre": {
    "palabras_clave": ["ciencia acólito", "hombre productor", "fin de explotación", "máquina al servicio", "trabajo digno"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#8890 y 9924: La Herencia Universal y el Futuro de la Ciencia"],
    "contexto_real": "Visión tecnológica de la Comuna donde la ciencia potencia la libertad humana en lugar de esclavizarla."
  },
  "Espiritu_de_Verdad": {
    "palabras_clave": ["espíritu de verdad", "justicia inmediata", "tiempos cumplidos", "Eloí", "fin de la injusticia"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#10284: El Discurso del Espíritu de Verdad"],
    "contexto_real": "Representación de la Inteligencia Suprema encargada de ejecutar la liquidación de deudas y la apertura de la nueva era."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 5) para Los Extremos se Tocan.');

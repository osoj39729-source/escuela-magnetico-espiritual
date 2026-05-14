const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "14183 al 14346: Dinámica del Movimiento y Mímica Defensiva": {
    "PilotoDeCoherencia": "Explica que mientras la sensación es un aviso de protección, la defensa efectiva reside en el movimiento. Define la mímica defensiva como la respuesta instintiva para proteger órganos, sanar lesiones y compensar impresiones intensas que podrían dañar los centros cerebrales. Introduce la mímica simpática como el conjunto de movimientos armónicos secundarios que acompañan a la acción principal.",
    "IdeasSecundarias": [
      "Los nervios son excitantes naturales de los músculos; el movimiento es el resultado de impulsiones centrífugas.",
      "La mímica (gestos y signos) es el lenguaje denunciador de las causas internas y externas que afectan al ser.",
      "El instinto de protección pone en correlación inmediata las sensaciones con sus órganos adyacentes de defensa."
    ],
    "CitasIneludibles": [
      "la sensación equivale a un aviso... pero la defensa efectiva radica en el movimiento",
      "todo movimiento reflejo, caracteriza un determinado fenómeno sensible",
      "Mímica Simpática... serie de movimientos, es una correlación simpática entre los fenómenos"
    ]
  },
  "14400 y 14509: La Inhibición y el Poder Moderador del Espíritu": {
    "PilotoDeCoherencia": "Sostiene que la capacidad de modificar o impedir movimientos reflejos (inhibición) reside materialmente en el cerebro, pero su agente inteligente es únicamente el espíritu. El cerebro actúa como el hardware que modera la respuesta, pero es el espíritu quien ejerce el mando voluntario, el cual se debilita durante el sueño o en estados de daño cerebral.",
    "IdeasSecundarias": [
      "La inhibición es perceptible incluso en los animales, pero en el hombre alcanza el grado de volición racional.",
      "La voluntad sentida y realizada surge de un 'plebiscito determinante' entre motivos externos e internos.",
      "El impulso, aunque lento, es la característica distintiva de la volición frente al simple reflejo automático."
    ],
    "CitasIneludibles": [
      "no conociendo otro agente inteligente que el espíritu, es este, ese poder moderador",
      "el tal poder moderador, puede residir en el cerebro; y entonces... es el espíritu",
      "Plebiscito determinante del acto volitivo"
    ]
  },
  "14691: Discernimiento y Libertad del Espíritu": {
    "PilotoDeCoherencia": "Define el discernimiento como un juicio de conciencia que revela el grado de progreso y las facultades del espíritu. La voluntad es la demostración práctica de la acción espiritual, manifestando su dominio o esclavitud ante la materia. Aclara que el libre albedrío es la acción espontánea del ser, pero reconoce que no es absoluto pues está sujeto a la ley.",
    "IdeasSecundarias": [
      "La deliberación y la decisión son los pasos previos a la acción volitiva consciente.",
      "El discernimiento permite asociar ideas con juicio para resolverse con libertad.",
      "El grado de progreso del espíritu se mide por la calidad de sus actos volitivos y su capacidad de abstención."
    ],
    "CitasIneludibles": [
      "El discernimiento... es un juicio de conciencia revelante de las facultades y progreso del espíritu",
      "la voluntad, es igualmente una demostración de la acción del mismo espíritu",
      "la comprensión de que el libre albedrío no es absoluto"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 10) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Poder_Moderador": {
    "palabras_clave": ["poder moderador", "inhibición", "espíritu sobre cerebro", "control de impulsos", "mando espiritual"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#14400 y 14509: La Inhibición y el Poder Moderador del Espíritu"],
    "contexto_real": "Facultad del espíritu para frenar o modificar las respuestas automáticas del cuerpo, ejerciendo su soberanía sobre la materia."
  },
  "Plebiscito_Determinante": {
    "palabras_clave": ["plebiscito determinante", "voluntad", "motivos internos", "motivos externos", "acto volitivo"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#14400 y 14509: La Inhibición y el Poder Moderador del Espíritu"],
    "contexto_real": "Proceso interno de deliberación donde el espíritu evalúa todos los factores antes de ejecutar una decisión voluntaria."
  },
  "Discernimiento_Progresivo": {
    "palabras_clave": ["discernimiento", "juicio de conciencia", "grado de progreso", "facultades espirituales", "balanza del espíritu"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#14691: Discernimiento y Libertad del Espíritu"],
    "contexto_real": "Capacidad de evaluar la realidad moral y social que indica el nivel de evolución alcanzado por un espíritu determinado."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 10) para Filosofía Austera Racional.');

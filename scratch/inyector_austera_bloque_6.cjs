const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "8449 al 8653: Psicología del Espíritu vs. Fenómenos Conscientes": {
    "PilotoDeCoherencia": "Establece que la raíz de la psicología es única en el Padre común de los espíritus. Desmiente el concepto de 'fenómeno consciente', argumentando que si se actúa con conocimiento y sentimiento, no hay fenómeno accidental, sino una acción deliberada del espíritu. Distingue que mientras las leyes físicas se rigen por la equivalencia de fuerzas, las psíquicas obedecen al aumento constante de la energía interior.",
    "IdeasSecundarias": [
      "La psicología no deriva de la metafísica ni viceversa; ambas están presentes en toda acción del ser.",
      "El progreso no permite el retroceso del alma; cada existencia aporta nuevos valores primordiales.",
      "Wundt es reconocido como el puente que hace perceptibles los principios de la energía psíquica mediante el método experimental."
    ],
    "CitasIneludibles": [
      "la raíz es única en el padre común de los espíritus",
      "no puede ser fenómeno: el que existe sólo cuando lo producimos con conocimiento",
      "las Psíquicas, obedecen al aumento extenso e interno de la energía interior"
    ]
  },
  "8775 y 8975: El Espíritu como Único Ser Consciente": {
    "PilotoDeCoherencia": "Sentencia que la conciencia y el alma no son la causa de la psicología, sino meros sensores y reflectores del 'Psicólogo Espíritu', el único ser verdaderamente consciente. Cualquier estudio del hombre que prescinda del espíritu es un estudio vacío y falto de razón. Define el organismo humano como el instrumento necesario para las funciones de protección y conservación de la vida.",
    "IdeasSecundarias": [
      "El alma es el sensor que comunica al espíritu con el mundo material.",
      "Las funciones fisiológicas y psicológicas son inseparables en el estudio científico del hombre.",
      "El cuerpo encierra aparatos adecuados para que el espíritu manifieste su voluntad y preserve la especie."
    ],
    "CitasIneludibles": [
      "la conciencia y el alma, no son la causa Psicológica, sino los sensores y reflectores del Psicólogo Espíritu",
      "todo estudio en el que se prescinda del espíritu... será un estudio vacío",
      "el espíritu, único Ser consciente"
    ]
  },
  "9231: El Sistema Nervioso como Instrumento del Espíritu": {
    "PilotoDeCoherencia": "Inicia el análisis anatómico del sistema nervioso (centros espinales y cerebrales) como la red de comunicación del espíritu con su envoltura. Describe la médula espinal con sus sustancias blanca y gris como el centro hiperbólico que distribuye los nervios raquídeos para la vida orgánica y de relación.",
    "IdeasSecundarias": [
      "El sistema nervioso es la vía por la cual el espíritu percibe los estímulos externos.",
      "La anatomía fisiológica es el mapa de acción del ser en la materia.",
      "La disposición de los 31 pares de nervios responde a la necesidad de control absoluto del organismo."
    ],
    "CitasIneludibles": [
      "El sistema nervioso se compone de Centros, cordones y órganos terminales",
      "substancia gris... dispuesta esta última en forma hiperbólica",
      "formando 31 pares que llamamos 8 cervicales, 12 dorsales, 5 lumbares y 6 sacros"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 6) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Espiritu_Unico_Consciente": {
    "palabras_clave": ["espíritu consciente", "causa psicológica", "psicólogo espíritu", "único ser", "sujeto de la vida"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#8775 y 8975: El Espíritu como Único Ser Consciente"],
    "contexto_real": "Definición axiomática que quita la primacía al alma y a la mente para dársela al espíritu como el motor real de la conciencia."
  },
  "Sensores_y_Reflectores": {
    "palabras_clave": ["sensores", "reflectores", "alma reflectora", "conciencia sensora", "instrumental anímico"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#8775 y 8975: El Espíritu como Único Ser Consciente"],
    "contexto_real": "Metáfora tecnológica para explicar que el alma y el cerebro no generan pensamiento, sino que lo transmiten o reflejan."
  },
  "Energia_Psiquica_Infinita": {
    "palabras_clave": ["energía interior", "aumento de energía", "ley psíquica", "fuerza del espíritu", "no equivalencia"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#8449 al 8653: Psicología del Espíritu vs. Fenómenos Conscientes"],
    "contexto_real": "Principio que establece que el espíritu no se gasta al actuar, sino que su potencia aumenta internamente con el ejercicio de la voluntad."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 6) para Filosofía Austera Racional.');

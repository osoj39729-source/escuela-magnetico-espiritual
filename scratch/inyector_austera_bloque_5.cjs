const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "7195 y 7259: El Contrato Social vs. el Comunismo de Soberanía": {
    "PilotoDeCoherencia": "Critica el 'Contrato Social' tradicional por ser una tiranía que legisla la desigualdad y la supremacía irracional. Propone en su lugar la Soberanía Individual y el Comunismo (como el de los Comuneros de Castilla), donde cada individuo es soberano en el seno de la sociedad y el bienestar común es superior a cualquier corona o mandato religioso.",
    "IdeasSecundarias": [
      "La libertad humana real anula la necesidad de contratos sociales que establecen diferencias de derechos.",
      "La plutocracia y el parasitismo son los únicos beneficiarios de las leyes de derecho desigual.",
      "El comunismo es el destino infalible de la asociación humana que busca defender la persona y sus bienes sin coaccionar su soberanía."
    ],
    "CitasIneludibles": [
      "El contrato social... es una tiranía legislada por la brutalidad",
      "cada individuo es tanto como el rey; pero que todos juntos eran más que el rey",
      "doctrina que conducía infaliblemente al comunismo"
    ]
  },
  "7380 al 7514: La Corrupción Romana y el Sacrificio de Bruno": {
    "PilotoDeCoherencia": "Identifica a Roma como el germen de las catástrofes mundiales y la corrupción de los principios racionales. Destaca el envío de 'obreros preclaros' como Giordano Bruno, quien fue quemado por predicar la verdad frente a las concupiscencias del papado, demostrando que Italia siempre ha protestado contra la esclavitud religiosa a pesar de la traición de sus élites.",
    "IdeasSecundarias": [
      "El imperio papal ha corrompido todos los principios desde Cicerón hasta 1870.",
      "Giordano Bruno se mantuvo luminoso y audaz incluso entre las llamas de la hoguera.",
      "Las invasiones extranjeras en Italia fueron a menudo provocadas por la astucia del papado para mantener su control."
    ],
    "CitasIneludibles": [
      "allí donde han recibido el golpe mortal toda las filosofías racionales",
      "Giordano Bruno... audaz, luminoso y sin rodeos",
      "el pueblo italiano siempre ha protestado de la esclavitud a que lo han querido someter"
    ]
  },
  "7638 y 7655: Del Iluminismo de Wolff al Criticismo de Kant": {
    "PilotoDeCoherencia": "Valora el Iluminismo de Wolff por poner la Razón como guía de la moral y la finalidad humana. Eleva el Criticismo de Kant como el hito que marca el progreso definitivo, al someter a juicio la 'razón pura' y la 'razón práctica', permitiendo que el hombre conozca las cosas por las cosas mismas y no por imposiciones externas.",
    "IdeasSecundarias": [
      "Wolff sentó el principio de la razón como directriz de los actos humanos.",
      "Kant inició la revolución moral y social al analizar la facultad de conocer los objetos que afectan nuestra sensibilidad.",
      "El criticismo prepara a la humanidad para su renovación total mediante el juicio fundado del derecho y la metafísica."
    ],
    "CitasIneludibles": [
      "la Razón que debería regir los actos humanos",
      "marcando el principio definitivo del progreso abierto y descubierto",
      "la razón pura es el análisis del conocimiento"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 5) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Soberania_Individual": {
    "palabras_clave": ["soberanía individual", "cada individuo es rey", "comunismo", "derecho igual", "fin de tiranía"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#7195 y 7259: El Contrato Social vs. el Comunismo de Soberanía"],
    "contexto_real": "Pilar de la Comuna Universal donde la libertad personal es absoluta y no puede ser cedida a ninguna autoridad política o religiosa."
  },
  "Criticismo_Racional": {
    "palabras_clave": ["criticismo", "Kant", "razón pura", "razón práctica", "juicio de las cosas", "progreso abierto"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#7638 y 7655: Del Iluminismo de Wolff al Criticismo de Kant"],
    "contexto_real": "Herramienta mental de la Escuela para evaluar la realidad y el conocimiento sin aceptar dogmas ni prejuicios heredados."
  },
  "Corrupcion_Romana": {
    "palabras_clave": ["corrupción Roma", "germen de catástrofe", "imperio papal", "Moisés traicionado", "esclavitud religiosa"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#7380 al 7514: La Corrupción Romana y el Sacrificio de Bruno"],
    "contexto_real": "Denuncia de la sede central del dogma como el lugar donde se han adulterado sistemáticamente las leyes del progreso."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 5) para Filosofía Austera Racional.');

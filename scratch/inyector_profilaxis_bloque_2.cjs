const fs = require('fs');
const path = 'F:/trincado/public/data/contents/profilaxis-de-la-vida_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "2590 y 2897: Lactancia y Régimen Alimenticio Profiláctico": {
    "PilotoDeCoherencia": "Establece pautas para la crianza saludable del infante, priorizando la lactancia natural auxiliada por remedios homeopáticos como el Árnica 6ª para la madre. Detalla una dieta basada en cereales, legumbres y lácteos preparados con especias curativas (canela, cacao), eliminando el uso de alcohol y estimulantes nocivos.",
    "IdeasSecundarias": [
      "El Árnica es el remedio profiláctico por excelencia para la preparación y recuperación materna.",
      "La alimentación debe ser nutritiva y sencilla (sémola, lentejas, harinas de centeno y gluten).",
      "Se promueve el uso de café homeopático y leche hervida con yema de huevo como reconstituyentes."
    ],
    "CitasIneludibles": [
      "debe administrarse árnica 6ª cada tres, cada cinco o más minutos",
      "nada de esto se debe consentir y apurando sólo las lecciones",
      "Puede tomarse leche bien hervida (en vez de vino)"
    ]
  },
  "3220 al 3526: Higiene del Hogar y Crítica a las Modas": {
    "PilotoDeCoherencia": "Denuncia los vicios sociales y modas que atentan contra la salud. Advierte sobre los peligros higiénicos del mate (contagio) y el exceso de azúcar (obesidad). Condena el calzado deformante (tacos altos, puntas finas) como causa de enfermedades internas y deudas con la procreación, exigiendo un ambiente de orden y limpieza absoluta en la habitación del enfermo.",
    "IdeasSecundarias": [
      "El mate puede ser un vicio que propicia el contagio de enfermedades por falta de precaución.",
      "Las modas (zapatos altos) causan torsiones óseas y trastornos funcionales en ovarios y matriz.",
      "La habitación del enfermo debe mantenerse entre 16 y 20 grados, sin alfombras y con aire puro."
    ],
    "CitasIneludibles": [
      "la obesidad es también causa de muerte",
      "los zapatos, éste es otro de los inconvenientes de las modas... origina pataleo",
      "La pieza del enfermo debe todos los días limpiarse con un estropajo humedecido, para no levantar polvo"
    ]
  },
  "4193 al 5046: Procreación Divina vs. Pecado Original": {
    "PilotoDeCoherencia": "Desmantela el concepto religioso de 'pecado original', afirmando que la procreación es una ley divina, inflexible y sagrada mediante la cual el espíritu construye el universo en el cuerpo humano. La educación moral debe centrarse en el valor del alma sobre el lucro material, utilizando el lema de Xavier sobre el detrimento del alma.",
    "IdeasSecundarias": [
      "El escándalo lo crea la ley que prohíbe los hechos naturales, no los hechos en sí mismos.",
      "La procreación es la ley por la cual el hombre se perpetúa reproduciéndose de sí mismo.",
      "La educación moral del niño es el freno de sus futuras concupiscencias como hombre."
    ],
    "CitasIneludibles": [
      "La procreación es una ley divina, inflexible e ineludible",
      "pecado original... mereciera echar del paraíso a Adán y Eva; pero ya sabéis que (es falso)",
      "¿Qué aprovecharía al hombre lucrar todo el mundo si su alma puede sufrir detrimento?"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Profilaxis de la Vida (Bloque 2) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Profilaxis_Hogar_y_Cuerpo": {
    "palabras_clave": ["higiene", "temperatura ambiente", "limpieza húmeda", "moda deformante", "obesidad", "mate contagio"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#3220 al 3526: Higiene del Hogar y Crítica a las Modas"],
    "contexto_real": "Aplicación de principios de salud física y ambiental para evitar el desgaste del cuerpo-instrumento."
  },
  "Arnica_y_Homeopatia": {
    "palabras_clave": ["árnica", "homeopatía", "secale cornutum", "6a potencia", "remedios naturales", "lactancia"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#2590 y 2897: Lactancia y Régimen Alimenticio Profiláctico"],
    "contexto_real": "Uso de la medicina vibracional para apoyar los procesos biológicos de procreación y crianza sin químicos invasivos."
  },
  "Educacion_Moral_Xavier": {
    "palabras_clave": ["Xavier", "detrimento del alma", "lucro vs alma", "educación moral", "freno concupiscencia"],
    "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#4193 al 5046: Procreación Divina vs. Pecado Original"],
    "contexto_real": "Base pedagógica que prioriza la salud espiritual y la integridad del ser sobre el éxito material transitorio."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 2) para Profilaxis de la Vida.');

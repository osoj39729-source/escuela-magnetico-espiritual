const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "5877 y 6356: Los Culpables de la Conflagración Mundial": {
    "PilotoDeCoherencia": "Identifica a las religiones (el sistema del 'cristo') como los verdaderos culpables de la guerra y el mal mundial, por fomentar el error y la confusión (Babilonia). Aunque Francisco José encendió la mecha, la causa raíz es el antagonismo ideológico y religioso que impide el dominio de los instintos y la formación de la conciencia.",
    "IdeasSecundarias": [
      "Todos los gobiernos son responsables, pero el sistema religioso es el que 'cobra' las deudas acumuladas.",
      "El error proviene del antagonismo entre los hombres, alimentado por causas teológicas y políticas.",
      "Dominar los instintos es el requisito indispensable para tener conciencia y justicia."
    ],
    "CitasIneludibles": [
      "el culpable es sólo el cristo y cobra",
      "Los culpables, en rigor, del mal mundial, son los que fomentan el error",
      "ha llegado a la confusión; a la Babilonia ininteligible"
    ]
  },
  "6212: La Inexistencia de la Gracia y el Perdón": {
    "PilotoDeCoherencia": "Ataca el concepto de 'gracia' y 'perdón' como las mayores injusticias posibles. Sostiene que si el Creador perdonara deudas o diera lo no ganado, dejaría de ser un Padre justo y se negaría a sí mismo. La Creación se rige por la Ley de Justicia, donde cada ser debe ganar su progreso mediante el esfuerzo y la compensación.",
    "IdeasSecundarias": [
      "Las religiones, filosofías de prejuicio y hasta el espiritismo amalgamado (espiritualismo) viven de la falsa esperanza de la gracia.",
      "El perdón es parcialidad; la justicia es la ley que valida al autor de la vida.",
      "La compensación es el único camino real para el equilibrio del espíritu."
    ],
    "CitasIneludibles": [
      "¿Puede ser el perdón y la gracia del Creador? ¿Dónde habría mayor injusticia?",
      "desde el instante que el Creador hiciera gracia... dejaría de ser justo",
      "se negaría a sí mismo de ser el autor de la vida"
    ]
  },
  "7215: Preguntas a la Conciencia y la Escuela": {
    "PilotoDeCoherencia": "Plantea los interrogantes fundamentales que la EME de la CU resuelve para despertar al hombre: su origen, su destino, su trinidad (espíritu, alma, cuerpo) y la presencia del Creador en cada ser. Define al hombre como la realidad del 'Arca de Noé', portador de todas las semillas de la creación.",
    "IdeasSecundarias": [
      "El hombre debe conocer su trinidad y cuál de sus partes es la primera (el espíritu).",
      "El Creador reside en cada hombre, presenciando sus aciertos y errores en tiempo real.",
      "La Escuela enseña las leyes máximas y fatales que rigen la vida eterna y continuada."
    ],
    "CitasIneludibles": [
      "¿Conoce el hombre su trinidad, cómo y de qué se formó?",
      "su padre el creador está real y por entero en cada hombre",
      "él es como hombre, la realidad del Arca de Noé"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Extremos se Tocan (Bloque 3) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Justicia_vs_Gracia": {
    "palabras_clave": ["justicia", "gracia", "perdón", "ley de justicia", "injusticia divina", "compensación"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#6212: La Inexistencia de la Gracia y el Perdón"],
    "contexto_real": "Principio rector que elimina el misticismo del perdón regalado por la responsabilidad absoluta de los actos."
  },
  "Culpabilidad_del_Cristo": {
    "palabras_clave": ["el cristo", "culpa religiosa", "causa error", "conflagración", "Babilonia", "antagonismo"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#5877 y 6356: Los Culpables de la Conflagración Mundial"],
    "contexto_real": "Identificación de la doctrina religiosa como el motor de odio que lleva a las guerras mundiales."
  },
  "Preguntas_Conciencia": {
    "palabras_clave": ["preguntas conciencia", "trinidad humana", "origen del hombre", "arca de noé real", "Hellí en el hombre"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#7215: Preguntas a la Conciencia y la Escuela"],
    "contexto_real": "Cuestionario pedagógico utilizado para evaluar el grado de despertar espiritual y racional del individuo."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 3) para Los Extremos se Tocan.');

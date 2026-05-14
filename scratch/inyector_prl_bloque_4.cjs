const fs = require('fs');
const path = 'F:/trincado/public/data/contents/primer-rayo-de-luz_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "4761: Filosofía vs. Teología - El Filo que Corta y el Teo que Ata": {
    "PilotoDeCoherencia": "Utilizando la metáfora de Diderot, Trincado define la Filosofía como la sabiduría que desata y corta las cadenas de la ignorancia (filo), mientras que la Teología es la ciencia que ata y aprisiona la razón (teo). Sostiene que incluso el teólogo, al pedir que se 'sople la bujía' de la razón, admite implícitamente que su sistema no puede coexistir con la luz del pensamiento propio.",
    "IdeasSecundarias": [
      "La Filosofía es abierta y progresiva; la Teología es cerrada, limitada y estancada.",
      "La religión necesita de la Teología para justificar sus dogmas ante la incapacidad de la razón.",
      "La 'bujía' de la razón es la única luz verdadera para encontrar el camino en la selva de la existencia."
    ],
    "CitasIneludibles": [
      "el filo corta, desata: el teo, ata, aprisiona",
      "Filosofía es sabiduría abierta: Teología ciencia cerrada",
      "sopla tu bujía... Este desconocido es un teólogo"
    ]
  },
  "5839: Desmitificación del Nacimiento de Jesús": {
    "PilotoDeCoherencia": "Trincado rompe el mito católico del nacimiento en Belén. Afirma con precisión que Jesús nació el 4 de Diciembre en Nazareth, en una casa amplia con jardines, no en un portal miserable. Revela la existencia de una familia numerosa (12 hermanos) y la presencia del tío Jaime, desmantelando la narrativa de la virginidad y la pobreza ficticia.",
    "IdeasSecundarias": [
      "Jesús nació en Nazareth el 4 de diciembre, no el 25 en Belén.",
      "La familia de Jesús estaba compuesta por 14 miembros nucleares (padres y 12 hijos) más familiares cercanos.",
      "El mito del portal y los pastores fue una invención para victimizar y divinizar una figura humana."
    ],
    "CitasIneludibles": [
      "Jesús no nació en Belén, ni el 24 de diciembre, sino el 4 y en Nazareth",
      "casa grande con jardines y todo",
      "se juntaron hasta 12 hermanos de Jesús"
    ]
  },
  "6185: El Plagio Jesuita y la Santa Justicia": {
    "PilotoDeCoherencia": "Denuncia la reacción de la Iglesia ante la potencia de la obra. Explica que los jesuitas publicaron un libro titulado 'El Rayo de Luz' apenas tres meses después del original de Trincado para desviar la atención, lo cual interpreta como una validación indirecta del impacto de su 'Primer Rayo de Luz'.",
    "IdeasSecundarias": [
      "La Iglesia utiliza el plagio y la confusión de títulos como estrategia de contención.",
      "La aparición del libro jesuita confirma la veracidad y el peligro que 'El Primer Rayo de Luz' representa para el dogma.",
      "La 'Santa Justicia' es el cumplimiento de la ley natural que tarde o temprano expone la verdad."
    ],
    "CitasIneludibles": [
      "tres meses mas tarde... los jesuitas publicaron, El rayo de Luz",
      "para desviar la atención de nuestro libro, pero confirman todo",
      "No tardar... por Santa Justicia"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Primer Rayo de Luz (Bloque 4) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Filosofia_vs_Teologia": {
    "palabras_clave": ["filosofía", "teología", "desatar", "apresar", "sabiduría abierta", "ciencia cerrada"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#4761: Filosofía vs. Teología - El Filo que Corta y el Teo que Ata"],
    "contexto_real": "Distinción fundamental entre el pensamiento libre que busca la verdad y el pensamiento dogmático que busca el control."
  },
  "Nacimiento_Real_de_Jesus": {
    "palabras_clave": ["4 de diciembre", "Nazareth", "12 hermanos", "familia de Jesús", "mito de Belén"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#5839: Desmitificación del Nacimiento de Jesús"],
    "contexto_real": "Corrección histórica de la biografía de Jesús, devolviéndole su humanidad y entorno familiar real."
  },
  "Reaccion_Jesuita": {
    "palabras_clave": ["plagio", "Jesuitas", "El Rayo de Luz", "confusión de títulos", "validación"],
    "nodos_sinapticos": ["primer-rayo-de-luz_esencia.json#6185: El Plagio Jesuita y la Santa Justicia"],
    "contexto_real": "Evidencia histórica del impacto de la Escuela y las tácticas de desinformación de las órdenes religiosas."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 4) para Primer Rayo de Luz.');

const fs = require('fs');
const path = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "23613: La Beneficencia como Mandato de Shet": {
    "PilotoDeCoherencia": "Rescata la ley de beneficencia legislada por Shet (Manu) hace 57 siglos: 'Es hombre y basta'. Establece que la ayuda al hermano es un deber fraternal ineludible, sin distinción de credo o nación. Diferencia esta beneficencia obligatoria de la 'caridad' religiosa, que es discrecional y a menudo humillante.",
    "IdeasSecundarias": [
      "Israel mandaba dejar parte de la cosecha para el que no tuviera, como un derecho natural del necesitado.",
      "La dominación opresora (como la inglesa en India) destruyó estas costumbres humanas para imponer leyes de castigo.",
      "La beneficencia es la base de la solidaridad en la Comuna Universal."
    ],
    "CitasIneludibles": [
      "Es hombre y basta para admitirlo en tu casa como miembro de tu familia",
      "la beneficencia, como no lo harían hoy los modernos legisladores",
      "la beneficencia es ley... legislada por Shet, hace 57 siglos"
    ]
  },
  "23686 y 23835: Amor y Afinidad: La Fuerza y la Máquina": {
    "PilotoDeCoherencia": "Define el amor como la ley eterna y única de la cual proceden los mundos. Explica la relación entre espíritu y materia como la de una fuerza impulsora y una máquina: ambas son la misma sustancia en diferentes grados. El espíritu dirige y la materia ejecuta. Denuncia el uso de la afinidad química para la destrucción bendecida por la religión.",
    "IdeasSecundarias": [
      "La materia es la máquina y el espíritu la fuerza; ninguno obra nada sin el otro.",
      "La afinidad universal conecta todo lo que existe en una red de amor y justicia.",
      "La religión ha excomulgado a la ciencia para luego usar sus frutos en la guerra, demostrando su maldad intrínseca."
    ],
    "CitasIneludibles": [
      "Por el amor existen los mundos y el fin de éstos es el hombre",
      "materia es la Máquina; materia es la fuerza; la fuerza sin la máquina, nada obra",
      "la religión primero condenó... y hemos visto más tarde a esos ministros... bendecir las armas"
    ]
  },
  "23995 al 24304: Justicia, Libertad y la Verdadera Naturaleza del Estado": {
    "PilotoDeCoherencia": "Define la Justicia como una Ley Plebiscitaria que representa los derechos inalienables del hombre. Distingue la libertad (obrar dentro de la ley) del libertinaje (obrar contra la moral y la ley), criticando la corrupción política moderna. Redefine el Estado no como el gobierno, sino como una 'posición' de armonía y unión federada bajo una constitución que protege la independencia individual.",
    "IdeasSecundarias": [
      "Cualquiera que no cumple todos los artículos de la ley es transgresor; la justicia no tiene acepción de personas.",
      "La transgresión por maldad (causa) es imperdonable; la transgresión por defensa (efecto) tiene atenuantes.",
      "El Estado es una federación de voluntades que se amolda incluso a los más atrasados para elevarlos."
    ],
    "CitasIneludibles": [
      "La justicia es la representación de los derechos del hombre",
      "libertad consiste en obrar todo lo que las leyes no prohiben. Y es libertinaje obrar lo que la ley prohibe",
      "el Estado es una posición en que se encuentran una cosa, un individuo, una sociedad"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Filosofía Austera Racional (Bloque 16) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Beneficencia_Mandato_Shet": {
    "palabras_clave": ["beneficencia", "Shet", "Manu", "es hombre y basta", "deber fraternal", "ayuda mutua"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#23613: La Beneficencia como Mandato de Shet"],
    "contexto_real": "Ley ancestral que obliga a todo ser humano a socorrer a otro sin preguntar por su origen o creencia."
  },
  "Ley_Plebiscitaria": {
    "palabras_clave": ["justicia plebiscitaria", "derechos del hombre", "ley plebiscito", "transgresión", "igualdad ante la ley"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#23995 al 24304: Justicia, Libertad y la Verdadera Naturaleza del Estado"],
    "contexto_real": "Sistema de justicia donde la ley emana de la voluntad común y se aplica con rigor absoluto para garantizar la libertad."
  },
  "Estado_como_Posicion": {
    "palabras_clave": ["estado", "posición de armonía", "federación", "constitución racional", "no es gobierno", "unión de voluntades"],
    "nodos_sinapticos": ["filosof-a-austera-racional_esencia.json#23995 al 24304: Justicia, Libertad y la Verdadera Naturaleza del Estado"],
    "contexto_real": "Concepción del Estado como el equilibrio de derechos y deberes entre individuos soberanos, y no como un poder opresor."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 16) para Filosofía Austera Racional.');

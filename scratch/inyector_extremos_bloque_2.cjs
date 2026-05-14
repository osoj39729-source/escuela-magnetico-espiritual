const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "3673 al 4536: La Adulteración de la Historia y el Imperio de los Papas": {
    "PilotoDeCoherencia": "Describe la era de oscuridad histórica iniciada por Constantino, donde los archivos de Egipto y Grecia fueron quemados para ocultar la verdad y asentar el dogma. Explica que las guerras de religión transformaron el Islam original (pacífico) en una fuerza belicosa como respuesta a la agresión cristiana, y cómo el Papado sometió a Europa mediante la inquisición y el control de reyes.",
    "IdeasSecundarias": [
      "La cruz pasó de ser un patíbulo a un adorno de supremacía y opresión.",
      "La religión católica buscó destruir cualquier archivo que desmintiera sus errores, pero falló en Asia (China, India, Japón).",
      "El Mahometismo belicoso fue una consecuencia directa de las provocaciones cristianas continuadas."
    ],
    "CitasIneludibles": [
      "Toda ella (la historia) ha sido adulterada y mejor dicho, hecha a conveniencia",
      "quemaron cuanto encontraron los cristianos, en Egipto y Grecia",
      "surgió en Turquía un estado belicoso... por las guerras que les llevaban los cristianos"
    ]
  },
  "4823 y 5159: Américo Vespucio y la Tierra Prometida": {
    "PilotoDeCoherencia": "Reinterpreta el descubrimiento de América bajo la Ley de Afinidad. Sostiene que América no fue la tierra prometida a Moisés, sino la tierra para el espíritu de Jacob (encarnado en Vespucio) para llevar la palabra de Hellí que el Sinaí no pudo completar. Define el siglo XIX como el siglo de las luces pero también de lutos apocalípticos.",
    "IdeasSecundarias": [
      "Vespucio fue llevado por la ley de afinidad a las islas que Jehová mentó por Isaías.",
      "La Masonería surge como un freno necesario al Papado, aunque limitada por sus métodos conspirativos.",
      "Napoleón representa el inicio de la emancipación de los oprimidos frente al absolutismo religioso."
    ],
    "CitasIneludibles": [
      "No es la tierra pisada por Colón la prometida a Moisés; pero sí son aquéllas con la América del Sur",
      "Américo, es aquel ordenado y la tomó, cuando era su tiempo",
      "sale al descubierto la masonería... freno férreo del Papado"
    ]
  },
  "5493: Los Dos Polos vs. Los Dos Extremos": {
    "PilotoDeCoherencia": "Establece la distinción filosófica fundamental del libro: los 'Polos' son de la Ley Natural (Espíritu y Materia) y manifiestan la vida. Los 'Extremos' son efectos del error (Religión vs. Materialismo/Anarquía) y solo generan conflicto y muerte al faltar a la ley de armonía.",
    "IdeasSecundarias": [
      "Los dos polos son la causa de la vida demostrada: el espíritu y el éter (materia).",
      "Los dos extremos son el resultado de la ignorancia y el fanatismo de ambos lados del espectro ideológico.",
      "La unidad se encuentra en el equilibrio de los polos, no en la colisión de los extremos."
    ],
    "CitasIneludibles": [
      "los dos extremos, no de la ley, sino de los que faltan a la ley por diferentes errores",
      "los dos polos son de la ley, con los cuales ha de manifestarse la vida",
      "los dos polos, los constituye, en realidad... el espíritu"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Extremos se Tocan (Bloque 2) integrada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Polos_vs_Extremos": {
    "palabras_clave": ["polos", "extremos", "ley vs error", "espíritu-materia", "conflicto ideológico", "armonía"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#5493: Los Dos Polos vs. Los Dos Extremos"],
    "contexto_real": "Diferenciación entre las fuerzas naturales necesarias para la vida y las desviaciones humanas que causan la guerra."
  },
  "Adulteracion_Historica": {
    "palabras_clave": ["historia adulterada", "quema de archivos", "Constantino", "Egipto", "Grecia", "mentira religiosa"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#3673 al 4536: La Adulteración de la Historia y el Imperio de los Papas"],
    "contexto_real": "Denuncia de la sistemática destrucción de pruebas históricas por parte del catolicismo para imponer su narrativa."
  },
  "Americo_Vespucio_Mision": {
    "palabras_clave": ["Vespucio", "Jacob", "América", "tierra prometida", "afinidad", "ley de Hellí"],
    "nodos_sinapticos": ["los-extremos-se-tocan_esencia.json#4823 y 5159: Américo Vespucio y la Tierra Prometida"],
    "contexto_real": "Misión espiritual de la colonización de América como refugio para la nueva doctrina, desplazando el eje de Europa."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado (Bloque 2) para Los Extremos se Tocan.');

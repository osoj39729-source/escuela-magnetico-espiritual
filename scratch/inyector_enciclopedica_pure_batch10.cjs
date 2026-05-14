const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosofia-enciclopedica-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Filosofía Enciclopédica Universal Tomo 1 (Batch 10 - Claves 114 a 133)
const nuevosNodos = {
  "4789: Julio 9 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Luz de la Discusión. El diálogo y la discusión racional entre hermanos generan luz y conclusiones elevadas que los espíritus celebran.",
    "CitaInelutable": "Vemos con gusto vuestras discusiones, y de ellas hacéis la luz; seguid.",
    "EjemploPedagogico": "Dos piedras chocando (ideas) sacan la chispa que enciende la hoguera de la sabiduría.",
    "ConexionDoctrinal": ["Diálogo Racional", "Estudio Colectivo"],
    "NodosSimapticos": []
  },
  "4982: Julio 15 de 1911 - Posesión M. Portillo": {
    "PilotoDeCoherencia": "Amputación de Fluidos. Ante la confabulación de malos fluidos que hacen sufrir al misionero, es necesario 'cortar por lo sano' y amputar las influencias negativas.",
    "CitaInelutable": "Va a ser necesario cortar por lo sano, pues mucho más vale amputar.",
    "EjemploPedagogico": "Si una rama está podrida y amenaza al árbol entero, el jardinero debe cortarla sin dudar para salvar la vida del tronco.",
    "ConexionDoctrinal": ["Defensa Magnética", "Higiene Mental"],
    "NodosSimapticos": ["Materia Infecta"]
  },
  "5061: Julio 16 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Ley de los Afines. La verdad de la ciencia y de la vida reside en la ley de afinidad; el espíritu debe buscarla para encontrar las causas que originan la existencia.",
    "CitaInelutable": "En las doctrinas que defendéis está la verdad... la encontraréis... en la ley de los afines.",
    "EjemploPedagogico": "El imán solo atrae al hierro porque son afines; así tu espíritu atrae el conocimiento que tu alma está preparada para recibir.",
    "ConexionDoctrinal": ["Ley de los Afines (Afinidad)", "Causas de la Vida"],
    "NodosSimapticos": ["Ley de los Afines (Afinidad)"]
  },
  "5126: Julio 18 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Fracaso y Resiliencia. Los misioneros pueden fallar por la imperfección de la materia, pero la orden es levantarse y seguir amando sin desmayar.",
    "CitaInelutable": "Vosotros también torcéis vuestras misiones... mas no desmayar, levantaos.",
    "EjemploPedagogico": "El niño que aprende a caminar se cae muchas veces, pero solo llega a ser hombre el que se levanta y vuelve a intentar el paso.",
    "ConexionDoctrinal": ["Responsabilidad del Misionero", "Progreso por Esfuerzo"],
    "NodosSimapticos": []
  },
  "5152: Julio 21 de 1911 - Posesión M. Portillo": {
    "PilotoDeCoherencia": "Reconocimiento del Misionero. Los espíritus identifican y agradecen a aquellos que aceptan mandatos de luz, reconociendo la grandeza del espíritu sobre la desgracia de la materia.",
    "CitaInelutable": "Gracias, misionero mío... grande en tu espíritu porque has sido...",
    "EjemploPedagogico": "El uniforme del soldado puede estar roto, pero el general reconoce el valor del hombre que lo lleva puesto.",
    "ConexionDoctrinal": ["Jerarquía del Trabajo", "Dignidad Espiritual"],
    "NodosSimapticos": []
  },
  "5213: Julio 23 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Fuego Purificador. Los hermanos son portadores del fuego que consumirá los abrojos (errores) de la tierra para preparar la siega de la nueva era.",
    "CitaInelutable": "Vosotros estáis llenos del fuego que ha de consumir los abrojos.",
    "EjemploPedagogico": "Para sembrar trigo nuevo, primero hay que quemar la maleza seca que asfixia la tierra.",
    "ConexionDoctrinal": ["Abrojos (Simbología)", "Nueva Era"],
    "NodosSimapticos": ["Abrojos (Simbología)"]
  },
  "5304: Julio 25 de 1911 - Posesión M. P.": {
    "PilotoDeCoherencia": "Tierra Bendita de Expiación. La tierra es el escenario necesario para expiar errores pasados y ganar la elevación espiritual mediante el sufrimiento consciente.",
    "CitaInelutable": "En el planeta tierra, se expía para elevarse... Bendita tierra.",
    "EjemploPedagogico": "La fragua es caliente y ruda, pero es el único lugar donde el hierro se convierte en espada de acero.",
    "ConexionDoctrinal": ["Mundo de Expiación", "Progreso por Sufrimiento"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Ley de los Afines (Afinidad)": {
    "Definición": "Ley universal que rige la atracción y unión de los seres y las ideas basándose en la similitud de sus vibraciones y propósitos. Es la base de la ciencia del espíritu y explica cómo se forman los grupos de estudio, las familias espirituales y la atracción de fluidos en el universo.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Sesión del 16 de Julio de 1911).",
    "Conexiones": ["Magnetismo", "Justicia de la Ley (Atracción)", "Sintonía"],
    "Obras": ["Filosofía Enciclopédica Universal", "El Magnetismo en su Origen"]
  },
  "Abrojos (Simbología)": {
    "Definición": "Término metafórico utilizado para representar los errores, prejuicios, dogmas y pasiones inferiores que obstaculizan el progreso de la humanidad. Deben ser 'consumidos' por el fuego de la verdad y el amor para permitir la siembra de la nueva era comunal.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Mensaje del 23 de Julio de 1911).",
    "Conexiones": ["Mundo de Expiación", "Juicio Final", "Purificación"],
    "Obras": ["Filosofía Enciclopédica Universal", "Primer Rayo de Luz"]
  },
  "Materia Infecta": {
    "Definición": "Estado de la materia física o de los fluidos periespirituales cuando están saturados de influencias negativas, vicios o pensamientos de baja vibración. Requiere una acción de 'amputación' o limpieza magnética profunda para restaurar la salud y la conexión con el espíritu de luz.",
    "Contexto": "Filosofía Enciclopédica Universal Tomo 1 (Advertencia del Hermano Pío y sesiones de Julio de 1911).",
    "Conexiones": ["Curación Espiritual", "Fluidos", "Higiene Mental"],
    "Obras": ["Filosofía Enciclopédica Universal", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 7 nodos PURA CALIDAD 1:1 de Filosofía Enciclopédica Tomo 1 (Batch 10) y 3 términos sinápticos.');

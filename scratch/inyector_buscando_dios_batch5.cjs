const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Buscando a Dios (Batch 5 - Claves 1692 a 2358)
const nuevosNodos = {
  "031: Párrafo VIII: LA LEY DE MOISÉS Y EL PUEBLO DE ISRAEL": {
    "PilotoDeCoherencia": "Resistencia Nacional. Israel como pueblo custodio de la ley de Moisés, enfrentado a la tentación constante de la supremacía material sobre la misión espiritual.",
    "CitaInelutable": "LA LEY DE MOISES Y EL PUEBLO DE ISRAEL... la lucha por mantener la unidad de la ley.",
    "EjemploPedagogico": "Un guardia que debe vigilar un cofre con documentos valiosos; el peligro no solo viene de afuera, sino de su propio deseo de vender los documentos por monedas de oro.",
    "ConexionDoctrinal": ["Moisés", "Israel (Misión)"],
    "NodosSimapticos": []
  },
  "032: CAPITULO SÉPTIMO: JUAN EL SOLITARIO Y JESÚS NAZARENO": {
    "PilotoDeCoherencia": "Precursores de la Verdad. Se inicia el estudio de los dos pilares de la misión del Dios Amor: Juan como el ejecutor de la justicia y Jesús como el misionero del amor.",
    "CitaInelutable": "JUAN EL SOLITARIO Y JESUS NAZARENO... dos hombres para una sola causa.",
    "EjemploPedagogico": "El sol y la lluvia; Juan es la lluvia que limpia la tierra y quita el polvo; Jesús es el sol que hace que las semillas limpias empiecen a brotar con fuerza.",
    "ConexionDoctrinal": ["Juan el Solitario (Misión)", "Jesús de Nazareth (Hombre)"],
    "NodosSimapticos": ["Juan el Solitario (Misión)", "Jesús de Nazareth (Hombre)"]
  },
  "033: Párrafo I: UN HOMBRE FUERTE Y AUSTERO: JUAN": {
    "PilotoDeCoherencia": "Austeridad Esenia. Juan el Bautista es un hombre de voluntad de hierro que vive en el desierto para no ser contaminado por la hipocresía de las ciudades.",
    "CitaInelutable": "UN HOMBRE FUERTE Y AUSTERO: JUAN... su voz resuena en el desierto de las conciencias.",
    "EjemploPedagogico": "Un anacoreta que prefiere comer frutos silvestres y vestir pieles antes que usar túnicas de seda pagadas con el engaño de los templos; su fuerza viene de su integridad.",
    "ConexionDoctrinal": ["Esenios", "Justicia"],
    "NodosSimapticos": []
  },
  "034: Párrafo II: JESÚS DE NAZARETH": {
    "PilotoDeCoherencia": "Misión de Amor. Jesús se presenta como el hermano mayor que enseña la ley del amor universal, desafiando las leyes de casta y privilegio con la sencillez de la verdad.",
    "CitaInelutable": "JESUS DE NAZARETH... yo soy el camino, la verdad y la vida [del espíritu].",
    "EjemploPedagogico": "Un hermano que llega a una casa donde todos se pelean por la herencia; no reclama nada para sí, sino que les enseña a trabajar juntos para que la casa sea de todos por igual.",
    "ConexionDoctrinal": ["Jesús de Nazareth (Hombre)", "Amor Universal"],
    "NodosSimapticos": ["Jesús de Nazareth (Hombre)"]
  },
  "035: Párrafo III: NO SON HOMBRES SOBRENATURALES": {
    "PilotoDeCoherencia": "Naturalidad Espiritual. Se rechaza la divinización de Juan y Jesús; sus facultades son humanas potenciadas por el estudio, el dominio del magnetismo y la evolución del espíritu.",
    "CitaInelutable": "JUAN Y JESUS NO SON HOMBRES SOBRENATURALES... todo en ellos es conforme a las leyes naturales.",
    "EjemploPedagogico": "Un atleta olímpico que hace cosas que parecen imposibles para la gente común; no es que tenga 'superpoderes' mágicos, sino que ha entrenado su cuerpo y su mente más que los demás.",
    "ConexionDoctrinal": ["Hombre Sobrenatural (Crítica)", "Magnetismo Espiritual"],
    "NodosSimapticos": ["Hombre Sobrenatural (Crítica)"]
  },
  "036: Párrafo IV: PERSECUCIÓN DE LOS SACERDOTES A JESÚS": {
    "PilotoDeCoherencia": "Conflicto con la Casta. Los sacerdotes persiguen a Jesús no por sus ideas, sino porque su enseñanza de la verdad libre destruye el negocio y el poder de los templos.",
    "CitaInelutable": "PERSECUCIÓN DE LOS SACERDOTES A JESÚS... temen perder la supremacía sobre el pueblo ignorante.",
    "EjemploPedagogico": "Un vendedor de velas en una ciudad oscura que intenta apagar las lámparas eléctricas que un inventor ha instalado gratis en las calles; teme que nadie vuelva a comprarle velas.",
    "ConexionDoctrinal": ["Antagonismo Sacerdotal", "Libertad de Conciencia"],
    "NodosSimapticos": []
  },
  "037: Párrafo V: FUNDACIÓN DE LA IGLESIA CRISTIANA": {
    "PilotoDeCoherencia": "Desviación del Mensaje. La iglesia cristiana no fue fundada por Jesús, sino por hombres que usaron su nombre para crear un nuevo sistema de control basado en el dogma y el rito.",
    "CitaInelutable": "FUNDACIÓN DE LA IGLESIA CRISTIANA... se enterró la verdad para levantar el altar.",
    "EjemploPedagogico": "Un grupo de personas que toma las cartas de un sabio que enseñaba a sanar con plantas, y en lugar de sanar, construyen una tienda para vender pedazos de las cartas como si fueran amuletos mágicos.",
    "ConexionDoctrinal": ["Cristianismo (Crítica)", "Desviación Doctrinal"],
    "NodosSimapticos": []
  }
};

// Merging some intro markers with their paragraphs to keep the 113 structure
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Juan el Solitario (Misión)": {
    "Definición": "Juan el Bautista. Misionero de la Justicia y precursor de la era del Amor. Su papel fue preparar el terreno mediante la denuncia de la corrupción y el llamado a la rectitud moral antes de la misión pública de Jesús.",
    "Contexto": "Buscando a Dios (Capítulo Séptimo).",
    "Conexiones": ["Justicia", "Precursor", "Esenios"],
    "Obras": ["Buscando a Dios", "Jesús Hombre y no Dios"]
  },
  "Jesús de Nazareth (Hombre)": {
    "Definición": "Espíritu de alta evolución que encarnó en Nazareth para enseñar la fraternidad universal. La doctrina lo define como un hombre trino sujeto a leyes naturales, rechazando su divinización religiosa.",
    "Contexto": "Buscando a Dios (Capítulo Séptimo).",
    "Conexiones": ["Amor", "Hermano Mayor", "Misionero"],
    "Obras": ["Buscando a Dios", "Jesús Hombre y no Dios"]
  },
  "Hombre Sobrenatural (Crítica)": {
    "Definición": "Término que denuncia la creencia irracional en seres con naturalezas divinas o mágicas. Sostiene que todo hecho 'milagroso' es en realidad una aplicación consciente de leyes de magnetismo y dominio espiritual por parte de hombres evolucionados.",
    "Contexto": "Buscando a Dios (Capítulo Séptimo).",
    "Conexiones": ["Naturaleza", "Magnetismo", "Ley"],
    "Obras": ["Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 5 de Buscando a Dios (7 nodos 1:1) y 3 términos sinápticos. Juan y Jesús sellados.');

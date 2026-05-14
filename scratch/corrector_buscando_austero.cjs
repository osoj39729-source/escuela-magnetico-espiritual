const fs = require('fs');
const path = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "Hellí — La Causa Única Encontrada por la Razón": {
    "PilotoDeCoherencia": "Hellí no es el Dios de los templos. Es la Causa Primera, encontrada por la Razón pura, no por la fe ciega. Es la Sustancia Única que todo lo impregna: magnetismo, amor, ley. No se reza a Hellí, se le estudia, se le comprende y se cumple su ley en cada acto. Quien cumple la ley de amor obra con Hellí aunque nunca haya pisado una iglesia.",
    "CitaInelutable": "Hellí no necesita templos. Necesita hijos que cumplan su ley: Ama a tu hermano como a ti mismo.",
    "EjemploPedagogico": "El astrónomo que calcula la órbita de un planeta sin error, obedece a Hellí sin saberlo. La ley es la misma, se le llame como se le llame.",
    "ConexionDoctrinal": ["Magnetismo Espiritual", "Causa Primera", "Ley de Amor", "Anti-Dios Comercial"],
    "NodosSimapticos": ["Hellí", "Causa Única", "Dios Racional", "Sustancia Universal"]
  },
  "Jesús de Nazaret — El Hombre Misionero": {
    "PilotoDeCoherencia": "Jesús de Nazaret fue un hombre de carne y hueso, nacido el 4 de diciembre en Nazaret, hijo legítimo de José y María, formado en la Escuela de Gamaliel, imbuido de la ética esenia. Su mandato fue el mismo de Shet: 'Ama a tu hermano'. La iglesia lo convirtió en dios para ser propietaria de su mensaje. El Cristo-dios es la mixtificación; el Jesús-hombre es la verdad histórica que la Escuela restituye.",
    "CitaInelutable": "Jesús dijo: Ama a tu hermano. La iglesia añadió: y págame el diezmo. Eso no es Jesús, es la Ramera.",
    "EjemploPedagogico": "El 25 de diciembre es el solsticio solar pagano que Roma tomó prestado. La fecha real del nacimiento de Jesús — 4 de diciembre — es un hecho que la doctrina preserva contra la mixtificación litúrgica.",
    "ConexionDoctrinal": ["Gamaliel", "Esenios", "Anti-Deificación", "Jaime"],
    "NodosSimapticos": ["Jesús Hombre", "4 de Diciembre", "Gamaliel", "Anti-Cristo Dios"]
  },
  "Joaquín Trincado como Jaime": {
    "PilotoDeCoherencia": "Trincado opera bajo la identidad espiritual de Jaime, hermano de Jesús en la encarnación misionera del primer siglo. No es un reclamo de poder ni de divinidad — es la continuidad de la misión interrumpida. Como el maestro que regresa a verificar si sus alumnos aprendieron, Jaime vuelve como Trincado para entregar el Código que faltaba y restaurar la Escuela.",
    "CitaInelutable": "No vengo a fundar una religión. Vengo a entregar las herramientas para que cada espíritu encuentre a su Padre por sí mismo.",
    "EjemploPedagogico": "Así como Shet fue el Primer Instructor que luego fue adulterado por las religiones de Oriente, Jaime-Trincado es el segundo ciclo de la misma corriente de luz, llegando cuando el error acumulado lo hace necesario.",
    "ConexionDoctrinal": ["Shet", "Continuidad Misionera", "Escuela Magnetológica", "Jesús Histórico"],
    "NodosSimapticos": ["Jaime", "Trincado Continuador", "Misión No Religiosa"]
  },
  "La Bestia 666 — Diagnóstico Histórico": {
    "PilotoDeCoherencia": "La Bestia 666 no es un ser diabólico del futuro. Es el número que el Apocalipsis asigna al sistema religioso que prostituyó la verdad: el papado romano y su alianza histórica con el poder político. El 666 es un diagnóstico, no una profecía del fin del mundo. Entenderlo libera al espíritu del terror que ese número fue diseñado para infundir.",
    "CitaInelutable": "La Bestia vive en el Vaticano, no en el infierno. Y su arma no es el fuego, es la ignorancia bendecida.",
    "EjemploPedagogico": "Que el 666 haya aterrado a millones durante siglos prueba que cumplió su función de control. El estudiante que comprende su significado histórico y racional queda permanentemente libre de ese terror.",
    "ConexionDoctrinal": ["Ramera de Babilonia", "Papado", "Apocalipsis Racional", "Dominio del Dogma"],
    "NodosSimapticos": ["666", "Bestia", "Papado", "Ramera", "Apocalipsis"]
  },
  "36: Prólogo": {
    "PilotoDeCoherencia": "Este libro es la vanguardia del razonamiento libre. No es un ataque — es el hacha que tala la maraña de dioses comerciales para dejar ver al verdadero Padre Hellí. El buscador honesto que no lo entienda a la primera lectura debe releerlo: el hábito del dogma opone resistencia, pero la Razón siempre termina por abrirse paso.",
    "CitaInelutable": "Quien busca a Dios por miedo, busca al verdugo. Quien lo busca por amor, encuentra al Padre.",
    "EjemploPedagogico": "El libro está escrito para el hambriento de verdad, no para el satisfecho con sus creencias. Si no genera preguntas en el lector, es que el lector aún no ha comenzado a buscar.",
    "ConexionDoctrinal": ["Hellí", "Juicio Crítico", "Filosofía Austera Racional"],
    "NodosSimapticos": ["Búsqueda Racional", "Anti-Dogma", "Padre Universal"]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Buscando a Dios CORREGIDO. Total nodos:', Object.keys(esencia).length);

// Diccionario de Sinapsis
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic, {
  "Hellí": { "Definición": "La Causa Primera y Única encontrada por la Razón, no por la fe. Sustancia Universal: magnetismo, amor y ley. No se reza — se estudia y se cumple.", "Conexiones": ["Causa Primera", "Magnetismo", "Ley de Amor"], "Obras": ["Buscando a Dios", "Filosofía Austera Racional"] },
  "Jaime": { "Definición": "Identidad espiritual de Trincado: hermano de Jesús en su encarnación misionera, retornado para completar la misión interrumpida por la iglesia.", "Conexiones": ["Jesús Histórico", "Continuidad Misionera", "Shet"], "Obras": ["Buscando a Dios", "Los Cinco Amores"] },
  "Bestia 666": { "Definición": "Diagnóstico histórico del Apocalipsis: el número del sistema religioso (papado romano) que prostituyó la verdad mediante el terror y la alianza con el poder político.", "Conexiones": ["Ramera", "Papado", "Apocalipsis Racional"], "Obras": ["Buscando a Dios", "Primer Rayo de Luz"] },
  "Jesús Histórico": { "Definición": "Hombre nacido el 4 de diciembre en Nazaret, hijo de José y María, formado en la Escuela de Gamaliel. Su mandato: Ama a tu hermano. Deificado por Roma para monopolizar su enseñanza.", "Conexiones": ["Gamaliel", "Jaime", "4 de Diciembre"], "Obras": ["Buscando a Dios", "Jesús Hombre y No Dios"] }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario actualizado: Hellí, Jaime, Bestia 666, Jesús Histórico.');

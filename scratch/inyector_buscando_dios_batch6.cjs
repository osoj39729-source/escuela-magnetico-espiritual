const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Buscando a Dios (Batch 6 - Claves 2472 a 2923)
const nuevosNodos = {
  "038: CAPITULO NOVENO: LA RELIGIÓN CRISTIANA Y LA IGLESIA CATÓLICA": {
    "PilotoDeCoherencia": "Anatomía de la Apostasía. Se analiza cómo la institución católica se apropió del nombre de Cristo para establecer una supremacía política y económica opuesta a la fraternidad.",
    "CitaInelutable": "LA RELIGION CRISTIANA Y LA IGLESIA CATOLICA... el estudio de la gran mentira universal.",
    "EjemploPedagogico": "Un impostor que se pone el uniforme de un médico famoso y abre una clínica; usa el prestigio del médico para vender venenos, mientras los pacientes creen que están siendo curados.",
    "ConexionDoctrinal": ["Cristianismo (Crítica)", "Iglesia Católica (Análisis)"],
    "NodosSimapticos": ["Religión Cristiana (Crítica)"]
  },
  "039: Párrafo I: JESÚS NI SUS APÓSTOLES NO LEVANTARON TEMPLOS": {
    "PilotoDeCoherencia": "Espiritualidad sin Muros. Jesús enseñó en las plazas y campos; el templo de piedra es una invención sacerdotal para encerrar a Dios y cobrar entrada a los fieles.",
    "CitaInelutable": "JESUS NI SUS APOSTOLES NO LEVANTARON TEMPLOS... su altar era el corazón y su templo el universo.",
    "EjemploPedagogico": "Un maestro que enseña a leer bajo la sombra de un árbol; no necesita un edificio de mármol para que las letras tengan sentido, solo necesita la voluntad del alumno y la claridad de la lección.",
    "ConexionDoctrinal": ["Antitemplismo", "Verdad Libre"],
    "NodosSimapticos": []
  },
  "040: Párrafo II: TOMA FORMA LA IGLESIA CATÓLICA": {
    "PilotoDeCoherencia": "Institucionalización del Error. Se documenta el proceso histórico por el cual el movimiento original fue absorbido por el poder romano para crear una herramienta de dominio estatal.",
    "CitaInelutable": "TOMA FORMA LA IGLESIA CATOLICA... la alianza del trono y el altar.",
    "EjemploPedagogico": "Una corriente de agua pura que es desviada por un canal de plomo hacia una fábrica; el agua sigue fluyendo, pero ahora está contaminada y solo sirve para mover las máquinas del dueño de la fábrica.",
    "ConexionDoctrinal": ["Constantino", "Alianza Trono-Altar"],
    "NodosSimapticos": []
  },
  "041: Párrafo III: PREMEDITACIÓN INAUDITA": {
    "PilotoDeCoherencia": "Estrategia de Oscuridad. El Vaticano planificó sistemáticamente la eliminación de documentos y testigos que pudieran contradecir sus dogmas, asegurando su reinado sobre la ignorancia.",
    "CitaInelutable": "PREMEDITACION INAUDITA... ocultar la luz para que el pueblo no vea su esclavitud.",
    "EjemploPedagogico": "Un estafador que quema todas las facturas y contratos antes de que llegue la auditoría; pretende que su riqueza es legítima porque nadie puede probar el robo original.",
    "ConexionDoctrinal": ["Premeditación Inaudita", "Censura Histórica"],
    "NodosSimapticos": ["Premeditación Inaudita"]
  },
  "042: Párrafo IV: LA FALACIA Y LA FUERZA BRUTAS JUNTAS": {
    "PilotoDeCoherencia": "Coerción Religiosa. Cuando el engaño (falacia) no bastaba, la iglesia usó la espada y la tortura (fuerza bruta) para imponer su fe, contradiciendo el mensaje de paz.",
    "CitaInelutable": "LA FALACIA Y LA FUERZA BRUTAS JUNTAS... la inquisición como argumento final.",
    "EjemploPedagogico": "Un vendedor que intenta convencerte de que su producto es el mejor, y si no lo compras, saca un revólver y te obliga a firmar el contrato; el contrato no vale por el producto, sino por el miedo.",
    "ConexionDoctrinal": ["Inquisición", "Coerción"],
    "NodosSimapticos": []
  },
  "043: Párrafo V: LA IGLESIA CATÓLICA IMPONE LA IGNORANCIA": {
    "PilotoDeCoherencia": "Freno al Progreso. La institución combatió la ciencia y la alfabetización para mantener al pueblo en una minoría de edad mental perpetua, facilitando su explotación.",
    "CitaInelutable": "LA IGLESIA CATOLICA IMPONE LA IGNORANCIA... prohibir el libro es prohibir la libertad.",
    "EjemploPedagogico": "Un carcelero que apaga todas las luces de la prisión y le dice a los presos que afuera no hay nada más que oscuridad y monstruos, para que no tengan deseos de escapar.",
    "ConexionDoctrinal": ["Anticientificismo Religioso", "Ignorancia (Freno)"],
    "NodosSimapticos": []
  },
  "044: Párrafo VI: LA ESPAÑA PAGANA Y LA FOBIA DE LOS PAPAS": {
    "PilotoDeCoherencia": "Resistencia Ibérica. Se analiza cómo la espiritualidad natural de los pueblos hispanos fue aplastada por el fanatismo romano, generando una fobia papal hacia la libertad de pensamiento en la península.",
    "CitaInelutable": "LA ESPAÑA PAGANA Y LA FOBIA DE LOS PAPAS... el espíritu libre de la raza frente al yugo romano.",
    "EjemploPedagogico": "Un jardín silvestre lleno de flores variadas que es cubierto con cemento por un dueño que solo quiere ver un piso gris y uniforme; las flores intentan romper el cemento en las grietas.",
    "ConexionDoctrinal": ["España (Misión)", "Fanatismo"],
    "NodosSimapticos": []
  },
  "045: Párrafo VII: LA CONCUPISCENCIA ESTÁ EN AUGE": {
    "PilotoDeCoherencia": "Corrupción Moral. La obsesión por los placeres materiales y el poder mundano dentro de la jerarquía eclesiástica, oculta bajo una máscara de santidad ficticia.",
    "CitaInelutable": "LA CONCUPISCENCIA ESTA EN AUGE... el vicio vestido de púrpura.",
    "EjemploPedagogico": "Un banquete de lujo celebrado en el sótano de un hospital mientras arriba los pacientes mueren por falta de medicina; los anfitriones dicen que están 'rezando por las almas' mientras beben el vino más caro.",
    "ConexionDoctrinal": ["Concupiscencia", "Hipocresía"],
    "NodosSimapticos": []
  },
  "046: Capítulo Décimo: CULTOS, RITOS Y DOGMAS": {
    "PilotoDeCoherencia": "Análisis Litúrgico. Se inicia el examen de las formas externas que la iglesia usa para hipnotizar a las masas, sustituyendo la ley natural por ceremonias vacías.",
    "CitaInelutable": "CULTOS, RITOS Y DOGMAS DE LA RELIGION CATOLICA... la cáscara que oculta el vacío espiritual.",
    "EjemploPedagogico": "Una caja de regalo con un lazo de seda y papel brillante; cuando la abres, descubres que no hay nada dentro; lo que compraste fue el envoltorio, no el regalo.",
    "ConexionDoctrinal": ["Liturgia (Crítica)", "Fetiches"],
    "NodosSimapticos": []
  },
  "047: Párrafo I: EL BOATO PROVOCADOR": {
    "PilotoDeCoherencia": "Insulto a la Pobreza. El lujo excesivo de los altares y vestimentas es denunciado como un acto criminal frente a la miseria de los pueblos, alejando al hombre del Dios Amor.",
    "CitaInelutable": "EL BOATO PROVOCADOR... oro y piedras preciosas que cubren la podredumbre moral.",
    "EjemploPedagogico": "Un mendigo que pide pan a la puerta de una iglesia recubierta de oro; el cura sale con una túnica bordada en hilos de plata para decirle que 'el sufrimiento es el camino al cielo'.",
    "ConexionDoctrinal": ["Boato Provocador", "Justicia Social"],
    "NodosSimapticos": ["Boato Provocador"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Religión Cristiana (Crítica)": {
    "Definición": "Análisis doctrinal que desmitifica el cristianismo como continuación del mensaje de Jesús, definiéndolo como un sistema político-religioso creado en Roma para el dominio de las masas mediante el dogma.",
    "Contexto": "Buscando a Dios (Capítulo Noveno).",
    "Conexiones": ["Iglesia", "Dogma", "Roma"],
    "Obras": ["Buscando a Dios", "Los Extremos se Tocan"]
  },
  "Premeditación Inaudita": {
    "Definición": "Denuncia de la conspiración histórica de la jerarquía católica para falsificar textos, eliminar la historia real de Jesús y mantener a la humanidad en la ignorancia para asegurar su supremacía.",
    "Contexto": "Buscando a Dios (Capítulo Noveno).",
    "Conexiones": ["Conspiración", "Vaticano", "Ignorancia"],
    "Obras": ["Buscando a Dios"]
  },
  "Boato Provocador": {
    "Definición": "Término que señala el lujo ostentoso y el derroche de las instituciones religiosas como una ofensa a la dignidad humana y una distracción materialista que impide la verdadera conexión espiritual.",
    "Contexto": "Buscando a Dios (Capítulo Décimo).",
    "Conexiones": ["Lujo", "Hipocresía", "Injusticia"],
    "Obras": ["Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 6 de Buscando a Dios (10 nodos 1:1) y 3 términos sinápticos. Crítica institucional sellada.');

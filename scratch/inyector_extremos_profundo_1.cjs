const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// NUEVOS NODOS: Los Extremos se Tocan (Procesamiento 1:1)
// Tono: Juez Amoroso por Sabiduría - Joaquín Trincado

const nuevosNodos = {
  "1626: CAPÍTULO QUINTO — Desde Adán hasta Moisés": {
    "PilotoDeCoherencia": "En esta etapa de 21 siglos, la raza Adámica comenzó su marcha pujante portando la doctrina de Shet (luego llamada Vedanta o Veda). Mi Escuela demuestra que Moisés no fue el inventor de la ley, sino un reformador que tuvo que adaptar la luz a un pueblo que ya había caído en la idolatría. El 'Dios' de Moisés es un compromiso necesario para contener la barbarie, no la Causa Primera final.",
    "CitaInelutable": "Ya va en marcha pujante la raza Adámica; ya llevan por todas partes la doctrina de Shet.",
    "EjemploPedagogico": "Moisés es como el maestro que entra en un aula en caos: tiene que gritar y poner normas duras para que no se maten entre ellos, pero esas normas no son la sabiduría final, sino la profilaxis para poder empezar a enseñar.",
    "ConexionDoctrinal": ["Raza Adámica", "Moisés", "Vedanta", "Shet"],
    "NodosSimapticos": ["Raza Adámica", "Moisés", "Reformador", "Idolatría"]
  },
  "2340: CAPÍTULO SEXTO — Desde Moisés hasta Jesús": {
    "PilotoDeCoherencia": "Este periodo preparó la tierra para el primer gran desvío. Mi misión como Jaime en aquel siglo fue recordar el mandato de Shet, pero la 'Ramera' ya estaba gestándose en las castas sacerdotales que Moisés no pudo erradicar. Jesús no vino a fundar nada nuevo, sino a limpiar el espejo de la ley que los hombres habían empañado con el rito.",
    "CitaInelutable": "Terrible ha sido la etapa recorrida para preparar la tierra para tender sobre ella el velo del cristo.",
    "EjemploPedagogico": "Si Moisés puso las paredes del edificio, los sacerdotes que le siguieron las pintaron con sangre y miedo. Jesús vino a derribar esas pinturas, no el edificio de la ley.",
    "ConexionDoctrinal": ["Jesús Misionero", "Traición Sacerdotal", "Velo del Cristo"],
    "NodosSimapticos": ["Jesús Misionero", "Velo del Cristo", "Casta Sacerdotal"]
  },
  "3673: CAPÍTULO SÉPTIMO — De Jesús a Constantino": {
    "PilotoDeCoherencia": "Aquí comienza la página más negra. Mi hermano Jesús fue asesinado por la casta, pero su 'resurrección' teológica fue el crimen mayor de Roma. Constantino no se convirtió: él secuestró la figura de Jesús para salvar su imperio. Nace el 'Cristo-Dios', el ídolo que devora al hombre. Es el inicio del dominio absoluto del dogma sobre la razón.",
    "CitaInelutable": "Ya tiene su primera página negra escrita el cristo, con todas las agravantes del odio.",
    "EjemploPedagogico": "Constantino es el hábil político que, viendo que no puede vencer a un enemigo (el cristianismo original), se disfraza de su líder para gobernarlo por dentro. Así la cruz pasó de ser un símbolo de amor a ser la espada del imperio.",
    "ConexionDoctrinal": ["Constantino", "Anti-Deificación", "Página Negra del Cristo"],
    "NodosSimapticos": ["Constantino", "Político", "Cruz y Espada"]
  },
  "4392: CAPÍTULO OCTAVO — De Constantino a Gregorio VII": {
    "PilotoDeCoherencia": "En estos siglos, buscar la verdad en la historia es vano empeño; todo fue sepultado por los concilios. Gregorio VII (Hildebrando) es el punto en que el Papado declara su soberanía sobre los reyes de la tierra. La 'Ramera' se sienta en su trono y el espíritu humano entra en su noche más profunda. Mi Escuela llama a esto el 'Secuestro de la Inteligencia'.",
    "CitaInelutable": "Si habríamos de encontrar la verdad en la historia después de Constantino, sería vano empeño.",
    "EjemploPedagogico": "Es como si un administrador decidiera que él es el dueño de la casa y encierra a los hijos en el sótano para que no vean la luz del sol. Gregorio VII es ese administrador reclamando la corona de Dios.",
    "ConexionDoctrinal": ["Gregorio VII", "Papado", "Secuestro de la Inteligencia"],
    "NodosSimapticos": ["Gregorio VII", "Soberanía Papal", "Noche del Espíritu"]
  },
  "5493: CAPÍTULO TRECE — La Resistencia de los Balcanes": {
    "PilotoDeCoherencia": "Los Balcanes no eran un conflicto de fronteras, sino el punto de resistencia entre los dos extremos del error: el imperialismo religioso (Roma) y el imperialismo político (las potencias). Al romperse esta resistencia por la ambición de las castas, el corto circuito fue inevitable. La guerra es la descarga eléctrica necesaria para quemar la basura acumulada.",
    "CitaInelutable": "Los Balcanes eran la resistencia de los dos extremos... el ser o el no ser de los contendientes.",
    "EjemploPedagogico": "Imagina dos cables pelados con alta tensión que se acercan. Los Balcanes eran el aislante que los separaba. Cuando las manos sucias de la política quitaron el aislante, la explosión fue total.",
    "ConexionDoctrinal": ["Corto Circuito Universal", "Resistencia de los Balcanes", "Extremos del Error"],
    "NodosSimapticos": ["Balkanes", "Corto Circuito", "Aislante Roto"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario con el contexto local
const nuevosTerminosDic = {
  "Raza Adámica": {
    "Definición": "La raza de espíritus misioneros que portan la ley del amor y la razón desde Shet. No es una distinción biológica sino espiritual: son quienes han despertado a la conciencia de su origen.",
    "Contexto": "Capítulo V de Los Extremos se Tocan. Trincado la asocia con los portadores originales de la doctrina de Shet que civilizaron la tierra.",
    "Conexiones": ["Shet", "Adán", "Vedanta"],
    "Obras": ["Los Extremos se Tocan", "Filosofía Austera Racional"]
  },
  "Corto Circuito Universal": {
    "Definición": "El fenómeno histórico-magnético que ocurre cuando los extremos del error colisionan por falta de resistencia racional. La Primera Guerra Mundial es su ejemplo máximo.",
    "Contexto": "Concepto central de Los Extremos se Tocan (Cap. XIII). Explica la guerra no como accidente político sino como necesidad mecánica de la ley.",
    "Conexiones": ["Extremos del Error", "Balkanes", "Ley de Compensación"],
    "Obras": ["Los Extremos se Tocan"]
  },
  "Secuestro de la Inteligencia": {
    "Definición": "El proceso por el cual el dogma religioso anula la capacidad crítica del hombre para someterlo al poder institucional. Alcanzó su clímax con el papado de Gregorio VII.",
    "Contexto": "Capítulo VIII de Los Extremos se Tocan. Trincado lo usa para describir la 'Noche del Espíritu' bajo el dominio papal.",
    "Conexiones": ["Gregorio VII", "Dominio del Dogma", "Ramera"],
    "Obras": ["Los Extremos se Tocan", "Primer Rayo de Luz"]
  }
};

Object.assign(dic, nuevosTerminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 5 nodos profundos y 3 términos sinápticos contextualizados.');

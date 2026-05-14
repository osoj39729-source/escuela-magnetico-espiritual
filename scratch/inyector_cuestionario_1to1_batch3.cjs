const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/cuestionario-espirita-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Cuestionario Espírita Racional (Batch 3 - Preguntas 51 a 80)
const nuevosNodos = {
  "825: Preguntas 51-52: Evidencia de la Reencarnación": {
    "PilotoDeCoherencia": "Se citan casos documentados (como el concierto de piano de una niña de 5 años en Buenos Aires, 1933) para probar empíricamente la reencarnación. Las religiones ocultan estas facultades innatas tildándolas de 'milagros' para evitar reconocer la vida continuada.",
    "CitaInelutable": "Niños vemos con suma frecuencia que pintan o recitan sin que nadie les haya enseñado en su corta edad. ¿Queréis mejor prueba de la reencarnación?",
    "EjemploPedagogico": "Un niño que dibuja como un maestro sin haber ido a la escuela es un viajero que trajo su equipaje (conocimiento) de un viaje anterior (vida pasada).",
    "ConexionDoctrinal": ["Prueba de Reencarnación", "Sabiduría Innata", "Ocultamiento Religioso"],
    "NodosSimapticos": ["Viajero con Equipaje", "Niños Prodigio", "Milagro Refutado"]
  },
  "859: Preguntas 53-55: El Fraude del Infierno y Purgatorio": {
    "PilotoDeCoherencia": "Análisis económico-espiritual del dogma. Las religiones ocultan la reencarnación porque destruiría sus negocios. El infierno es el 'banco' de los sacerdotes; el purgatorio es una 'riquísima mina' de la que solo salen los ricos pagando misas. Ninguno de estos lugares existe en el Universo del Padre.",
    "CitaInelutable": "El infierno es el banco de los ministros religiosos, y el purgatorio una riquísima mina.",
    "EjemploPedagogico": "Es como un secuestrador imaginario: la religión te convence de que tiene secuestrada el alma de tu padre en un pozo (purgatorio) y te cobra rescate (misas) para sacarlo. El pozo está vacío; el negocio es real.",
    "ConexionDoctrinal": ["Inexistencia del Infierno", "Negocio del Purgatorio", "Fraude Económico Religioso"],
    "NodosSimapticos": ["Secuestro Imaginario", "Banco del Sacerdote", "Mina de Misas"]
  },
  "911: Pregunta 56: El Verdadero Infierno Material": {
    "PilotoDeCoherencia": "El único infierno real es la miseria material en la Tierra impuesta por la desigualdad. Se describe la agonía de los padres de familia que ven a sus hijos sufrir de hambre o falta de atención médica sin poder hacer nada. Ese infierno no se cura rezando ni con fetiches, sino con la Comuna.",
    "CitaInelutable": "Preguntárselo a los millones de padres que ven a sus hijos macilentos de hambre. ¿Queréis mayor infierno? Ese es un infierno real con todos sus horrores.",
    "EjemploPedagogico": "El infierno no está bajo tierra lleno de fuego; está en la esquina, en un hospital que rechaza a un niño porque sus padres no tienen dinero para pagar.",
    "ConexionDoctrinal": ["Infierno Material", "Miseria Humana", "Ineficacia del Rezo"],
    "NodosSimapticos": ["Hambre como Infierno", "Hospital Rechazado"]
  },
  "931: Preguntas 57-58: La Aberración del Limbo": {
    "PilotoDeCoherencia": "Se denuncia el 'limbo' como una explotación aberrante: cargarle un pecado imaginario a un niño por la falta de un rito (bautismo) de sus padres, enviándolo a un lugar oscuro hasta que paguen. El dogma es el verdadero mal mundial.",
    "CitaInelutable": "Le han cargado el delito de sus padres a un niño sin uso de razón, explotando el limbo hasta que alguien pague.",
    "EjemploPedagogico": "Es como si el gobierno encarcelara a un bebé recién nacido porque su abuelo no pagó un impuesto, y exigiera dinero para soltarlo. Una ley así sería monstruosa; así es el dogma.",
    "ConexionDoctrinal": ["Inexistencia del Limbo", "Absurdo del Bautismo", "Explotación Infantil Dogmática"],
    "NodosSimapticos": ["Bebé Encarcelado", "Impuesto Espiritual"]
  },
  "965: Preguntas 59-62: Jesús el Hombre, Asesinado por Sacerdotes": {
    "PilotoDeCoherencia": "La demitificación total de Jesús. Fue un hombre de grado superior, no un dios exclusivo. Fue asesinado por los sacerdotes de su época (Anás y Caifás), quienes se abrogaron derechos divinos y no toleraron la prédica de Jesús: Amor, Fraternidad y Trabajo productivo, virtudes que estorban al clero parásito.",
    "CitaInelutable": "Jesús fue asesinado por los sacerdotes de la religión porque predicó el amor y el trabajo que regenera, cosas que les molestan.",
    "EjemploPedagogico": "A Jesús no lo mató el pueblo; lo mató el sindicato de mercaderes del templo porque su doctrina de trabajo y fraternidad los dejaba sin negocio.",
    "ConexionDoctrinal": ["Rehabilitación de Jesús", "Asesinato Clerical", "Trilogía: Amor-Fraternidad-Trabajo"],
    "NodosSimapticos": ["Sindicato del Templo", "Jesús Hombre", "Mártir de la Fraternidad"]
  },
  "1051: Preguntas 64-66: Nacimiento Natural y Padres de Jesús": {
    "PilotoDeCoherencia": "Afirmación tajante del cumplimiento de la Ley Natural: Jesús nació de la unión física de un hombre y una mujer. El dogma de la concepción por el 'espíritu santo' es una burda mentira. Sus padres físicos fueron José de Nazareth (El Carpintero) y María de Jericó.",
    "CitaInelutable": "Eso del espíritu santo es una burda mentira que nadie que razona debe creer. Jesús nació por la única ley natural.",
    "EjemploPedagogico": "El Creador no rompe las reglas de la biología que Él mismo diseñó para que naciera un hijo. Jesús es hijo de la carne y del amor de José y María.",
    "ConexionDoctrinal": ["Nacimiento Natural", "Negación del Espíritu Santo", "José y María Físicos"],
    "NodosSimapticos": ["Mentira Dogmática", "Biología Divina"]
  },
  "1094: Preguntas 67-70: La Maternidad Proficua de María y José": {
    "PilotoDeCoherencia": "Defensa del honor de María contra la difamación religiosa (que al sacarla de la ley natural la hace adúltera dogmática). María tuvo 7 hijos con José. José, siendo viudo, aportó 5 hijos de su matrimonio anterior, sumando los 12 hijos del Patriarca. Se reivindica a María como madre modelo, no como deidad virgen.",
    "CitaInelutable": "La religión católica difama a María sacándola de la ley natural; María fue madre de 7 hijos y esposa modelo de José el patriarca.",
    "EjemploPedagogico": "Llamar virgen a una madre de 7 hijos es borrar el mérito de su maternidad. La Escuela le devuelve su trono de Madre real, quitándole la corona de diosa falsa.",
    "ConexionDoctrinal": ["María Madre Proficua", "José Patriarca de 12", "Difamación de la Virginidad"],
    "NodosSimapticos": ["Madre Real vs Diosa Falsa", "Honra de la Maternidad"]
  },
  "1170: Preguntas 71-73: La Grandeza Histórica de María (Eva)": {
    "PilotoDeCoherencia": "La grandeza de María no está en un mito de virginidad, sino en su valentía al acompañar a su hijo Jesús y hacer suyas las doctrinas que le costaron la vida. Se revela que el espíritu de María encarnó por primera vez en la Tierra como Eva. Ella reina por amor, no por títulos celestiales falsos.",
    "CitaInelutable": "La primera encarnación en la tierra fue Eva y la última María, que entre las dos, valen por todas.",
    "EjemploPedagogico": "María es como la madre del soldado revolucionario que, sabiendo que matarán a su hijo, toma la misma bandera y marcha a su lado.",
    "ConexionDoctrinal": ["Encarnaciones de María", "Eva-María", "Reina del Amor Terrenal"],
    "NodosSimapticos": ["Valentía Maternal", "Madre del Mártir", "Eva Raíz"]
  },
  "1223: Preguntas 74-76: Jesús no fundó religión": {
    "PilotoDeCoherencia": "Jesús no fundó ninguna iglesia; al contrario, vino a destruir el monopolio religioso al expulsar a los mercaderes del templo (que eran los mismos sacerdotes lucrando con lo divino). Indicar un camino falso (la religión) a un hombre sediento de verdad es un acto de extrema perversidad.",
    "CitaInelutable": "No fundó ninguna religión, puesto que vino a destruir todas las que existían y sacó a latigazos a los sacerdotes del templo.",
    "EjemploPedagogico": "Decir que Jesús fundó el Vaticano es como decir que el hombre que inventó la medicina fundó la enfermedad.",
    "ConexionDoctrinal": ["Jesús Antirreligioso", "Sacerdotes como Mercaderes", "Perversidad del Dogma"],
    "NodosSimapticos": ["Látigo en el Templo", "Mercaderes de lo Divino"]
  },
  "1280: Preguntas 77-79: Desmitificación de Fecha, Lugar y Muerte": {
    "PilotoDeCoherencia": "Corrección histórica absoluta. Jesús no nació el 24 de Diciembre (fecha mitológica de todos los dioses solares para hacerlo mito), nació el 4 de Diciembre. No nació en Belén, sino en Nazareth. Y el axioma más crítico: no murió en la cruz.",
    "CitaInelutable": "Jesús nació el 4 de Diciembre en Nazareth. Y no murió en la cruz, murió en la Escuela Esénica a los 88 días después.",
    "EjemploPedagogico": "Roma falsificó el acta de nacimiento y el certificado de defunción para fabricar un dios a la medida de sus imperios.",
    "ConexionDoctrinal": ["Nacimiento 4 de Diciembre", "Nazareth vs Belén", "Sobrevivencia a la Cruz"],
    "NodosSimapticos": ["Falsificación Histórica", "Escape Esenio", "Mito Solar"]
  },
  "1332: Pregunta 80: El Alma Humana": {
    "PilotoDeCoherencia": "Inicio de los grados superiores. Definición técnica del alma: no es el espíritu, sino la envoltura material quintiescenciada del espíritu (periespíritu), formada por el residuo evolutivo de las almas animales, cuyo estudio profundo se delega al 'Conócete a ti mismo'.",
    "CitaInelutable": "El alma humana es la envoltura del espíritu, materia quintiescencial de las almas animales.",
    "EjemploPedagogico": "El espíritu es el astronauta; el alma es el traje espacial (hecho de la materia más fina de la Tierra) que le permite caminar en el planeta.",
    "ConexionDoctrinal": ["Definición de Alma", "Envoltura Espiritual", "Evolución Animal"],
    "NodosSimapticos": ["Traje Espacial", "Periespíritu", "Cuerpo Quintiescencial"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "El Banco de la Religión": {
    "Definición": "Término analítico usado por la Escuela para definir al Infierno y al Purgatorio como instituciones de chantaje financiero forjadas por los sacerdotes para extraer riquezas de la humanidad mediante el terror al castigo después de la muerte.",
    "Contexto": "Preguntas 53 a 55 del Cuestionario Espírita Racional.",
    "Conexiones": ["Infierno", "Purgatorio", "Mercaderes del Templo"],
    "Obras": ["Cuestionario Espírita Racional", "El Espiritismo Estudiado"]
  },
  "Difamación de la Virginidad": {
    "Definición": "El acto religioso de sacar a María de la Ley Natural de procreación (imponiéndole una concepción milagrosa), lo cual, ante las leyes lógicas del matrimonio de José, constituye una acusación de adulterio velada en el dogma.",
    "Contexto": "Preguntas 64 a 69 del Cuestionario Espírita Racional.",
    "Conexiones": ["María de Nazareth", "Ley Natural", "Espíritu Santo"],
    "Obras": ["Cuestionario Espírita Racional", "Filosofía Austera Racional"]
  },
  "Jesús en la Cruz": {
    "Definición": "Revelación histórica y doctrinal que afirma que Jesús no falleció durante la crucifixión romana, sino que fue rescatado por José de Arimatea y llevado a la Escuela Esénica, donde murió de sus heridas 88 días después.",
    "Contexto": "Pregunta 79 del Cuestionario Espírita Racional.",
    "Conexiones": ["Jesús Hombre", "Escuela Esénica", "Fin del Mito"],
    "Obras": ["Cuestionario Espírita Racional", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 11 nodos 1:1 (Preguntas 51-80 combinadas racionalmente) de Cuestionario Espírita Racional y 3 términos sinápticos.');

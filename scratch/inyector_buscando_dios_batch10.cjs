const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Buscando a Dios (Batch 10 - Claves 7785 a 8826)
const nuevosNodos = {
  "078: Párrafo I: EL ESPIRITISMO ES TAN ANTIGUO COMO EL CREADOR": {
    "PilotoDeCoherencia": "Eternidad de la Ley. El espiritismo no es un método nuevo, sino el nombre moderno de la ley única de la creación que ha regido siempre el progreso del espíritu.",
    "CitaInelutable": "EL ESPIRITISMO ES TAN ANTIGUO COMO EL CREADOR... es la ley de la vida misma.",
    "EjemploPedagogico": "La gravedad existía antes de que Newton la nombrara; el espiritismo es la 'gravedad espiritual' que ha mantenido unidos a los mundos y espíritus desde el principio de los tiempos.",
    "ConexionDoctrinal": ["Espiritismo (Antigüedad)", "Ley Eterna"],
    "NodosSimapticos": ["Espiritismo (Antigüedad)"]
  },
  "079: Capítulo XXII: REFERENCIAS BÍBLICAS": {
    "PilotoDeCoherencia": "Crítica a la Prohibición. Se analizan los versículos del Levítico y Deuteronomio usados por las religiones para prohibir la comunicación con los espíritus, exponiendo su error.",
    "CitaInelutable": "Levítico... Deuteronomio... la prohibición de la luz por quienes viven en las sombras.",
    "EjemploPedagogico": "Un ciego que prohíbe el uso de espejos en su casa para que nadie pueda decirle que su cara está sucia; la prohibición no cambia la realidad, solo mantiene la ignorancia.",
    "ConexionDoctrinal": ["Biblia (Crítica)", "Prejuicio Religioso"],
    "NodosSimapticos": []
  },
  "080: Párrafo II: LOS TENIDOS POR LOCOS SON LOS CUERDOS": {
    "PilotoDeCoherencia": "Sabiduría Incomprendida. Aquellos que ven la verdad espiritual han sido tildados de locos por una sociedad hipnotizada por el dogma, pero hoy se revelan como los únicos cuerdos.",
    "CitaInelutable": "LOS TENIDOS POR LOCOS, SON LOS CUERDOS HOY... la cordura de la razón frente a la demencia del rito.",
    "EjemploPedagogico": "En un manicomio donde todos los internos creen que son reyes, el único que dice que son prisioneros es llamado loco por los demás; el tiempo demostrará quién tenía la razón.",
    "ConexionDoctrinal": ["Razón vs Locura", "Juicio de Mayorías"],
    "NodosSimapticos": []
  },
  "081: Capítulo Catorce: DOCTRINA DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Principios Fundamentales. Se exponen los pilares de la doctrina dictados desde Abraham, centrados en la unidad de la ley y la fraternidad universal.",
    "CitaInelutable": "DOCTRINA DEL ESPIRITISMO... mi principio fundamental dictado por el mismo Abraham.",
    "EjemploPedagogico": "Los planos maestros de una ciudad futura; no son sugerencias, son las leyes de construcción que aseguran que todos tengan casa, luz y agua sin privilegios.",
    "ConexionDoctrinal": ["Principios Doctrinales", "Abraham (Misión)"],
    "NodosSimapticos": []
  },
  "082: Párrafo I: PRINCIPIO FUNDAMENTAL (ABRAHAM)": {
    "PilotoDeCoherencia": "Raíz Histórica. La doctrina no nace de la nada, sino que es la continuación de la misión iniciada por Abraham para la implantación de la ley de amor.",
    "CitaInelutable": "Mi principio fundamental dictado por el mismo Abraham ante muchos testigos.",
    "EjemploPedagogico": "Un testamento que ha pasado de mano en mano por generaciones; aunque el papel sea viejo, la voluntad del testador sigue siendo la ley que debe cumplirse.",
    "ConexionDoctrinal": ["Abraham (Misión)", "Continuidad"],
    "NodosSimapticos": []
  },
  "083: Párrafo II: LA TIERRA SOLIDARIZADA CON EL UNIVERSO": {
    "PilotoDeCoherencia": "Célula Cósmica. Nuestro mundo no es un ente aislado, sino una parte integrante del cuerpo del universo, sujeta a la solidaridad obligatoria de todos los mundos.",
    "CitaInelutable": "LA TIERRA SOLIDARIZADA CON EL UNIVERSO... nada existe por sí solo.",
    "EjemploPedagogico": "Un órgano de tu cuerpo; el corazón no puede decir 'yo voy por mi cuenta'; está solidarizado con los pulmones y la sangre; si la tierra falla, el concierto universal se resiente.",
    "ConexionDoctrinal": ["Tierra Solidarizada", "Solidaridad Universal"],
    "NodosSimapticos": ["Tierra Solidarizada"]
  },
  "084: Párrafo III: AMOR ES LA LEY": {
    "PilotoDeCoherencia": "Mandato Supremo. El amor no es un sentimiento romántico, sino la ley de atracción y justicia que debe regir todas las relaciones humanas.",
    "CitaInelutable": "AMOR ES LA LEY... para implantar la ley de Amor.",
    "EjemploPedagogico": "El cemento que mantiene unidos los ladrillos de un edificio; sin amor (atracción/cohesión), el edificio social se derrumba y vuelve a ser solo polvo disperso.",
    "ConexionDoctrinal": ["Ley de Amor", "Justicia"],
    "NodosSimapticos": []
  },
  "085: Párrafo IV: MI CONFESIÓN": {
    "PilotoDeCoherencia": "Convicción Personal. El autor entrega su testimonio basado en el convencimiento racional y la experiencia, llamando a todos los hombres a la misma reflexión sincera.",
    "CitaInelutable": "Oíd hombres todos de la tierra mi confesión, hija de mis convencimientos.",
    "EjemploPedagogico": "Un científico que publica sus notas personales después de años de experimento; no pide que le crean por fe, sino que miren sus resultados y saquen sus propias conclusiones.",
    "ConexionDoctrinal": ["Sinceridad Doctrinal", "Testimonio"],
    "NodosSimapticos": []
  },
  "086: Párrafo I: QUÉ ES EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Definición Esencial. Es la ciencia de la vida y el estudio de las causas, que devuelve al hombre su dignidad de espíritu eterno y libre.",
    "CitaInelutable": "QUE ES EL ESPIRITISMO... el conocimiento de sí mismo y del Creador.",
    "EjemploPedagogico": "Encender la luz en una habitación donde has estado a oscuras; el espiritismo no 'crea' los muebles, solo te permite verlos y saber dónde estás sentado.",
    "ConexionDoctrinal": ["Definición de Espiritismo", "Ciencia de la Vida"],
    "NodosSimapticos": []
  },
  "087: Párrafo II: EL HOMBRE ES LA ESENCIA VIVA": {
    "PilotoDeCoherencia": "Antropología Metafísica. El hombre es el resumen de todas las formas y fuerzas de la naturaleza; en él se concentra la capacidad de transformar el universo.",
    "CitaInelutable": "EL HOMBRE ES LA ESENCIA VIVA DE LAS COSAS VIVAS... el punto de unión de todas las leyes.",
    "EjemploPedagogico": "Una semilla que contiene en su interior el mapa de todo el árbol, el fruto y la futura sombra; el hombre es la semilla del espíritu que florecerá en el universo.",
    "ConexionDoctrinal": ["Esencia Viva", "Hombre Trino"],
    "NodosSimapticos": ["Esencia Viva"]
  },
  "088: Párrafo III: ¿DE DÓNDE VIENE?": {
    "PilotoDeCoherencia": "Origen Espiritual. El hombre no viene del fango por azar, sino que es un espíritu emanado del Creador que desciende a la materia para progresar.",
    "CitaInelutable": "¿ DE DONDE VIENE ? Del Creador, nuestro Padre común.",
    "EjemploPedagogico": "Un rayo de luz que sale del sol; viaja por el espacio y llega a la tierra para dar calor; la luz viene del sol, aunque ahora esté calentando una piedra en el suelo.",
    "ConexionDoctrinal": ["Emanación", "Origen del Espíritu"],
    "NodosSimapticos": []
  },
  "089: Párrafo IV: ¿POR QUÉ ESTAMOS AQUÍ?": {
    "PilotoDeCoherencia": "Finalidad de la Encarnación. Estamos aquí para trabajar, aprender y dominar la materia, convirtiéndonos en maestros de nosotros mismos a través del esfuerzo.",
    "CitaInelutable": "¿PORQUE ESTAMOS AQUÍ ? Para progresar, para estudiar y para amarnos.",
    "EjemploPedagogico": "Un estudiante que asiste a la universidad; no está allí por castigo, sino porque necesita los conocimientos que solo la práctica y el estudio pueden darle para ser un profesional.",
    "ConexionDoctrinal": ["Misión de la Vida", "Progreso"],
    "NodosSimapticos": []
  },
  "090: Párrafo V: ¿A DÓNDE VA?": {
    "PilotoDeCoherencia": "Destino Infinito. El hombre camina hacia la perfección y la unión con todos los espíritus de luz en el concierto infinito del universo.",
    "CitaInelutable": "¿DONDE VA ? Hacia la perfección, hacia la Comuna Universal.",
    "EjemploPedagogico": "Un río que fluye hacia el mar; no importa cuántas piedras encuentre en el camino, su destino final es fundirse con las aguas inmensas del océano.",
    "ConexionDoctrinal": ["Perfección", "Comuna Universal"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Espiritismo (Antigüedad)": {
    "Definición": "Axioma que establece que el espiritismo no es una invención moderna ni una religión nacida en el siglo XIX, sino la ley eterna del progreso y la comunicación de conciencias que existe desde el origen del universo.",
    "Contexto": "Buscando a Dios (Capítulo Trece).",
    "Conexiones": ["Ley Eterna", "Progreso", "Historia"],
    "Obras": ["Buscando a Dios", "El Espiritismo en su Asiento"]
  },
  "Tierra Solidarizada": {
    "Definición": "Concepto cosmogónico que define al planeta Tierra como una unidad vibratoria y legal integrada en el concierto del universo. Implica que la evolución terrestre está vinculada al destino de todos los mundos habitados.",
    "Contexto": "Buscando a Dios (Capítulo Catorce).",
    "Conexiones": ["Solidaridad", "Universo", "Ley"],
    "Obras": ["Buscando a Dios", "Filosofía Enciclopédica"]
  },
  "Esencia Viva": {
    "Definición": "Definición del hombre como el portador de la chispa espiritual y el resumen de todas las leyes biológicas y energéticas de la naturaleza. El hombre es la 'esencia' porque en él la creación toma conciencia de sí misma.",
    "Contexto": "Buscando a Dios (Capítulo Catorce).",
    "Conexiones": ["Antropología", "Espíritu", "Vida"],
    "Obras": ["Buscando a Dios", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 10 de Buscando a Dios (13 nodos 1:1) y 3 términos sinápticos. Doctrina fundamental sellada.');

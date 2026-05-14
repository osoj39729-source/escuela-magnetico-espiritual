const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/cuestionario-espirita-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Cuestionario Espírita Racional (Batch 3 - Claves 40 a 59)
const nuevosNodos = {
  "686: Pregunta 44: ¿Dentro de las Cátedras hay: categorías o clases?": {
    "PilotoDeCoherencia": "La nivelación social y espiritual. En la Escuela no existen clases sociales. Todos son iguales materialmente (ricos o mendigos) y los derechos solo se adquieren por el cumplimiento previo de los deberes.",
    "CitaInelutable": "Todos somos iguales, sean ricos o mendigos en lo material y derechos, por los deberes cumplidos; porque, en justicia, no podemos tener derechos, si no hemos cumplido deberes.",
    "EjemploPedagogico": "No puedes reclamar un salario (derecho) si antes no trabajaste (deber). En la cátedra, el rico y el pobre se sientan en la misma silla y se ganan su grado por esfuerzo.",
    "ConexionDoctrinal": ["Igualdad Doctrinal", "Deberes antes que Derechos"],
    "NodosSimapticos": ["Derecho por Deber"]
  },
  "702: Pregunta 45: ¿Los cargos de dirección dan algún: derecho sobre los demás adherentes o simpatizantes?": {
    "PilotoDeCoherencia": "Naturaleza de la autoridad trincadista. Los cargos no otorgan poder tiránico, sino la responsabilidad de cumplir fielmente una misión. Esta fidelidad es la que genera el respeto natural y la autoridad de maestro.",
    "CitaInelutable": "Los cargos son para cumplirlos fielmente; eso, por fuerza da el derecho de respeto, ya que representa una autoridad de maestro (a lo que todos debemos llegar).",
    "EjemploPedagogico": "El director no es un jefe que da látigo; es el hermano mayor que marca el paso. Su autoridad nace del respeto que inspira su trabajo.",
    "ConexionDoctrinal": ["Autoridad por Respeto", "Misión Directiva"],
    "NodosSimapticos": []
  },
  "723: Pregunta 46: ¿Merece la pena ocupar cargos en: los Consejos o administrativos?": {
    "PilotoDeCoherencia": "El sacrificio del dirigente. Ocupar un cargo no es un honor mundano, es un sacrificio ('El Amor es Sacrificio'). Quien lo ostenta demuestra que tiene una misión de engrandecer la Escuela, no su ego.",
    "CitaInelutable": "“El Amor es Sacrificio”, y todo aquel hermano que ostenta un cargo, ello indica una misión y vale la pena que seamos dignos de merecerlo y debe sacrificarse.",
    "EjemploPedagogico": "Aceptar un cargo es como cargar una mochila más pesada para aliviar al resto del grupo.",
    "ConexionDoctrinal": ["El Amor es Sacrificio", "El Cargo como Misión"],
    "NodosSimapticos": ["Mochila Directiva"]
  },
  "742: Pregunta 47: ¿Qué medidas deben ser: tomadas en estos casos?": {
    "PilotoDeCoherencia": "Disciplina y corrección fraterna. Ante la indisciplina, se exige reprensión fraterna directa. Si no hay corrección ('fe de obras'), se notifica al Consejo, dejando la expulsión como recurso extremo exclusivo del Maestro Director General.",
    "CitaInelutable": "Llamarles la atención fraternalmente, y si no se corrigiesen, lo notificará al Consejo, exigiendo fé de obras; pero sólo al Maestro Director General compete la expulsión.",
    "EjemploPedagogico": "Si un hermano se equivoca, primero lo abrazas y lo corriges. Si insiste, avisas al grupo. La cirugía mayor (expulsión) solo la hace el cirujano jefe.",
    "ConexionDoctrinal": ["Disciplina Fraterna", "Exigencia de Fe de Obras", "Jurisdicción de Expulsión"],
    "NodosSimapticos": ["Corrección Fraterna"]
  },
  "767: Pregunta 48: ¿Existe la reencarnación y se: prueba de algún modo?. . .": {
    "PilotoDeCoherencia": "El fundamento lógico de la reencarnación. Trincado usa la filosofía (Schopenhauer) para demostrar que una sola vida es absurda e insuficiente para alcanzar la sabiduría. Sin reencarnación, no podría existir el progreso.",
    "CitaInelutable": "Sí; porque si esta no existiera, no podría existir el progreso en ninguna de sus ramas. Si una sola existencia fuese la vida, no habría sabios... para que haya genios, es preciso la preexistencia.",
    "EjemploPedagogico": "Si la escuela durara solo un día de clases en toda la vida, nadie aprendería a leer. Necesitamos volver a la escuela (reencarnar) todos los días para graduarnos.",
    "ConexionDoctrinal": ["Ley de Reencarnación", "Preexistencia del Espíritu", "Necesidad de Progreso"],
    "NodosSimapticos": ["El Día de Clases Cósmico"]
  },
  "785: Pregunta 49: ¿Puede apreciarse aun a simple vista los: progresos y la verdad de la reencarnación?": {
    "PilotoDeCoherencia": "La evidencia empírica de la reencarnación: los niños prodigio. Aquellos que demuestran maestría artística en su infancia prueban que el conocimiento ya estaba almacenado en su espíritu antes de nacer.",
    "CitaInelutable": "Sí, pues con frecuencia vemos y oímos hablar de niños precoces que en su infancia son grandes artistas sin tener tiempo ni estudios para ello.",
    "EjemploPedagogico": "Un niño de 5 años que toca a Mozart a la perfección no aprendió a tocar en 5 años; su espíritu lleva siglos practicando el piano.",
    "ConexionDoctrinal": ["Niños Precoces", "Evidencia de Vidas Pasadas"],
    "NodosSimapticos": ["El Archivo del Espíritu"]
  },
  "809: Pregunta 50:": {
    "PilotoDeCoherencia": "Campos de manifestación frecuente. La reencarnación se hace más evidente en las bellas artes (música, pintura, poesía), donde la técnica y la sensibilidad requeridas hacen imposible el aprendizaje en los primeros años de vida física.",
    "CitaInelutable": "La música, la pintura y poesía, son los más notados, por cuanto es bien conocido los casos de niños que a los 5 años de edad, han dado conciertos de piano.",
    "EjemploPedagogico": "Las artes son el idioma más rápido del espíritu. Por eso, el genio reencarnado pinta o toca música antes de aprender a atarse los zapatos.",
    "ConexionDoctrinal": ["El Arte como Prueba Espiritual", "El Genio Precoz"],
    "NodosSimapticos": []
  },
  "825: Pregunta 51: ¿Dónde se ha dado algún caso: de estos?": {
    "PilotoDeCoherencia": "Validación histórica y contemporánea. Trincado cita un evento específico en Buenos Aires (1933) para anclar la filosofía en hechos reales, denunciando de paso que las religiones suelen robarse estos casos para venderlos como 'milagros'.",
    "CitaInelutable": "En la ciudad de Buenos Aires... en el mes de Diciembre de 1933, se llevaron a cabo varios conciertos de piano por una niña de 5 años... y no pocos tomó la religión por milagro.",
    "EjemploPedagogico": "Cuando la niña toca el piano, el racionalista dice: 'He ahí a un espíritu viejo'. El cura dice: 'Es un milagro de Dios'. El espiritismo explica, la religión explota.",
    "ConexionDoctrinal": ["Pruebas Históricas", "Expropiación Religiosa del Fenómeno"],
    "NodosSimapticos": ["Milagro Robado"]
  },
  "842: Pregunta 52: ¿Es suficiente eso para creer: en la reencarnación?": {
    "PilotoDeCoherencia": "La reencarnación no es fe, es deducción científica. La constante observación de habilidades innatas obliga a la razón a aceptar la continuidad de la vida.",
    "CitaInelutable": "Sí, porque niños vemos con suma frecuencia, que pintan, dibujan, o recitan poesías que nadie les ha enseñado en su corta edad. ¿Queréis mejor prueba de la reencarnación...?",
    "EjemploPedagogico": "Si encuentras una casa ya construida en medio del desierto, sabes que alguien la construyó antes. Si ves a un niño genio, sabes que su mente ya fue construida antes.",
    "ConexionDoctrinal": ["Deducción Racional", "Continuidad de la Vida"],
    "NodosSimapticos": []
  },
  "859: ¿Por qué las religiones han": {
    "PilotoDeCoherencia": "Enlace a la revelación del encubrimiento teológico.",
    "CitaInelutable": "¿Por qué las religiones han ocultado tan claras verdades?",
    "EjemploPedagogico": "Preparación para el golpe final al dogma.",
    "ConexionDoctrinal": ["Estructura del Cuestionario"],
    "NodosSimapticos": []
  },
  "861: Pregunta 53:": {
    "PilotoDeCoherencia": "Estructura formal de la pregunta 53.",
    "CitaInelutable": "PREGUNTA 53",
    "EjemploPedagogico": "Estructura.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "865: ¿Por qué las religiones han": {
    "PilotoDeCoherencia": "La aniquilación del Infierno como modelo de negocio. Trincado declara que si la religión admite la reencarnación (la vida eterna continuada), la muerte deja de existir, y con ella desaparece el miedo. Sin miedo, el 'infierno' se cierra, y el infierno es 'el banco de los ministros religiosos'.",
    "CitaInelutable": "Porque con la vida eterna y continuada, es decir, con la inexistencia de la muerte, se les acaba el infierno... porque, en realidad, el infierno, es el banco de los sacerdotes.",
    "EjemploPedagogico": "Si la gente sabe que la muerte es solo un cambio de ropa (reencarnación), nadie pagará el peaje para no ir al infierno. El infierno no es fuego, es la cuenta bancaria del Vaticano.",
    "ConexionDoctrinal": ["El Infierno como Banco", "Ocultamiento de la Reencarnación", "Fin de la Muerte Ficticia"],
    "NodosSimapticos": ["El Banco del Miedo"]
  },
  "876: Pregunta 54: ¿Qué es el purgatorio?": {
    "PilotoDeCoherencia": "La aniquilación del Purgatorio. Si el infierno es un banco, el purgatorio es una 'riquísima mina' extorsiva diseñada para sacarle dinero a los ricos y mantener a los pobres en sufrimiento imaginario.",
    "CitaInelutable": "El purgatorio es una riquísima mina tan grande como irracional, puesto que de allí sólo se salvarían los ricos... y allí quedarían en sufrimiento, los que sus familiares no tuvieron dinero.",
    "EjemploPedagogico": "El purgatorio es un secuestro espiritual inventado: paga la misa y tu familiar sale libre; si no tienes dinero, se queda sufriendo. Es la máxima estafa moral.",
    "ConexionDoctrinal": ["El Purgatorio como Mina Comercial", "Estafa Religiosa", "Justicia Condicionada al Dinero"],
    "NodosSimapticos": ["Secuestro Espiritual"]
  },
  "893: Pregunta 55: ¿Luego el infierno y el: purgatorio no existen? . . .": {
    "PilotoDeCoherencia": "Reubicación cosmológica del sufrimiento. El infierno/purgatorio mítico no existe. Lo que sí existe físicamente en el Universo son los 'mundos primitivos' de expiación (las 'muchas moradas' que mencionó Jesús).",
    "CitaInelutable": "No: existen sólo en las mentes de los ignorantes y fanáticos; los que sí en realidad existen son, los mundos primitivos.",
    "EjemploPedagogico": "No hay un caldero de fuego bajo la tierra. Pero si eres un asesino constante, la ley magnética te enviará a nacer en un planeta prehistórico donde los dinosaurios te perseguirán. Ese es el verdadero infierno físico.",
    "ConexionDoctrinal": ["Inexistencia del Infierno Mítico", "Mundos Primitivos", "Las Muchas Moradas"],
    "NodosSimapticos": ["Infierno Físico"]
  },
  "911: ¿Ha presentido el hombre en este mundo": {
    "PilotoDeCoherencia": "Enlace hacia el infierno terrenal material.",
    "CitaInelutable": "¿Ha presentido el hombre en este mundo algún infierno o gloria, real o verdadera?",
    "EjemploPedagogico": "Preparación de la respuesta.",
    "ConexionDoctrinal": ["Estructura del Cuestionario"],
    "NodosSimapticos": []
  },
  "913: Pregunta 56:": {
    "PilotoDeCoherencia": "Estructura formal de la pregunta 56.",
    "CitaInelutable": "PREGUNTA 56",
    "EjemploPedagogico": "Estructura.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "917: ¿Ha presentido el hombre en este mundo": {
    "PilotoDeCoherencia": "El verdadero infierno social. Trincado baja el concepto al dolor de la clase trabajadora: el infierno real no es fuego de ultratumba, es el padre que ve a sus hijos morir de hambre en la miseria.",
    "CitaInelutable": "Preguntárselo a los millones de padres de familia que ven a sus hijos macilentos de hambre y sin ropa para cubrir sus carnes... ¿La mente humana lo ha forjado mayor? Ese es un infierno real.",
    "EjemploPedagogico": "Mientras el cura te asusta con demonios invisibles, el verdadero demonio (el hambre) está devorando al hijo del obrero. El Espiritismo viene a apagar este infierno material con la Comuna.",
    "ConexionDoctrinal": ["Infierno Social Terrenal", "Miseria Humana", "Rechazo del Terrorismo Mítico"],
    "NodosSimapticos": ["El Demonio del Hambre"]
  },
  "931: Pregunta 57: ¿Qué es el limbo pues?. . .": {
    "PilotoDeCoherencia": "La aniquilación del Limbo. Trincado lo define como una falacia 'absolutamente irracional', inventada para cobrar por el bautismo. Cargarle el 'pecado' de los padres a un niño inocente es aberrante.",
    "CitaInelutable": "Como es absolutamente irracional pensar que un niño que desencarna antes del uso de la razón pueda pecar, le han cargado el delito, (según ellos) de sus padres, que se olvidaron de bautizarlo.",
    "EjemploPedagogico": "Creer en el Limbo es creer que el Creador castigaría a un bebé con prisión eterna solo porque sus padres no le tiraron agua en la cabeza. Una locura teológica.",
    "ConexionDoctrinal": ["Inexistencia del Limbo", "El Bautismo Comercial", "Irracionalidad del Pecado Original"],
    "NodosSimapticos": ["Prisión para Bebés"]
  },
  "948: Pregunta 58: ¿Qué es lo que existe en verdad,: de esas falacias ya viejas?": {
    "PilotoDeCoherencia": "El resumen contundente. El infierno, el limbo y el purgatorio son puras falacias. Lo único real que ha dejado la religión es la Ignorancia, señalada como la causa de todo el mal mundial.",
    "CitaInelutable": "Eso; la falacia; ENGAÑO, FRAUDE Y MENTIRA; pero lo que existe en realidad es, la ignorancia sembrada por los sacerdotes... siendo ello la causa de todo el mal mundial.",
    "EjemploPedagogico": "El diablo no existe, pero la ignorancia sí. Y la ignorancia sembrada por el sacerdocio ha matado más gente que cualquier monstruo imaginario.",
    "ConexionDoctrinal": ["Religión como Falacia", "La Ignorancia como Causa del Mal"],
    "NodosSimapticos": ["La Verdadera Bestia (Ignorancia)"]
  },
  "965: Pregunta 59: ¿Jesús es de origen: divino?": {
    "PilotoDeCoherencia": "La humanización definitiva de Jesús. Todos los espíritus somos de origen divino. Jesús no es un Dios, es un hombre en estado de progreso avanzado, que fue asesinado por predicar el amor y la libertad, no por expiar pecados.",
    "CitaInelutable": "Todos los espíritus, aun los más perversos, somos de origen divino; pero Jesús, es un hombre como nosotros... que por predicar el amor y la libertad de la humanidad, fue asesinado.",
    "EjemploPedagogico": "Jesús fue el hermano mayor valiente que enfrentó al imperio y al sacerdocio. Decir que era Dios es quitarle el mérito de su valentía humana.",
    "ConexionDoctrinal": ["Jesús Hombre", "Rechazo de la Divinidad Cristiana", "El Asesinato del Misionero"],
    "NodosSimapticos": ["El Misionero Asesinado"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "El Banco del Miedo": {
    "Definición": "Concepto trincadista utilizado para definir al 'Infierno' religioso. Se expone como una invención teológica creada exclusivamente para extorsionar a las masas; ocultando la verdad científica de la reencarnación para poder cobrar el 'salvoconducto' de la muerte.",
    "Contexto": "Cuestionario Espírita Racional (Pregunta 53).",
    "Conexiones": ["Inexistencia del Infierno", "Lucro Teológico", "Ocultamiento de la Reencarnación"],
    "Obras": ["Cuestionario Espírita Racional", "Conócete a ti mismo"]
  },
  "El Demonio del Hambre": {
    "Definición": "Metáfora de la sociología racionalista. Se establece que el único infierno real y doloroso al que debe temerse y combatirse es la miseria material y el hambre de la clase obrera, causada por las supremacías, y no el fuego mítico del clero.",
    "Contexto": "Cuestionario Espírita Racional (Pregunta 56).",
    "Conexiones": ["Infierno Social Terrenal", "Comuna de Amor y Ley"],
    "Obras": ["Cuestionario Espírita Racional", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 20 nodos PURA CALIDAD 1:1 de Cuestionario Espirita Racional (Batch 3) y 2 términos sinápticos.');

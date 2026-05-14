const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/cuestionario-espirita-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Cuestionario Espírita Racional (Batch 5 Final - Claves 75 a 88)
const nuevosNodos = {
  "1242: Pregunta 75:": {
    "PilotoDeCoherencia": "Estructura formal de la pregunta 75.",
    "CitaInelutable": "PREGUNTA 75",
    "EjemploPedagogico": "Estructura.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "1246: ¿Cómo las religiones dicen que fué a los": {
    "PilotoDeCoherencia": "El desenmascaramiento del Templo. Trincado aclara que Jesús no sacó a vendedores de frutas, sino a los sacerdotes, quienes son los verdaderos 'mercaderes de las cosas divinas'. Ellos lucran con la ignorancia vendiendo fetiches y parcelas en un falso cielo.",
    "CitaInelutable": "¿Acaso los sacerdotes no son mercaderes de las cosas que llaman divinas? No otra cosa puede decirse de los que a sabiendas ciegan a la humanidad... para venderles fetiches y hasta el cielo.",
    "EjemploPedagogico": "Si entras a una iglesia y pagas por una misa para salvar tu alma, estás comprando en el mercado que Jesús intentó destruir a latigazos.",
    "ConexionDoctrinal": ["Sacerdotes como Mercaderes", "Venta del Cielo", "Lucro Divino"],
    "NodosSimapticos": ["Mercado de Fetiches"]
  },
  "1257: Pregunta 76: ¿Qué nombre encuadra bien a: esos delitos?. . .": {
    "PilotoDeCoherencia": "La calificación penal del sacerdocio: Perversidad. Trincado usa una analogía feroz: el sacerdote es como un hombre que, viendo a alguien morir de sed (sed de conocimiento), lo manda por el camino equivocado a propósito para que muera (lo condena al dogma).",
    "CitaInelutable": "Perversidad: y voy a discurrir: imaginarse que un día de fuerte calor vas caminando por el campo y la sed te agobia... y te indica un camino diferente.",
    "EjemploPedagogico": "No es solo ignorancia, es maldad calculada. El clero sabe la Verdad pero esconde el agua y te vende arena bendita.",
    "ConexionDoctrinal": ["Perversidad Religiosa", "El Falso Camino", "Asesinato Espiritual"],
    "NodosSimapticos": ["Sed de Conocimiento"]
  },
  "1280: Pregunta 77: ¿Cuándo nació Jesús?": {
    "PilotoDeCoherencia": "Rectificación cronológica y destrucción del mito solar. Jesús nació el 4 de Diciembre, no el 24. La fecha del 24 fue un invento católico copiado de la mitología pagana (el solsticio donde nacían todos los dioses falsos) para convertir a Jesús en un mito y no en un hombre histórico.",
    "CitaInelutable": "Jesús nació el día 4 de Diciembre de nuestros años y no el 24... Según la mitología, todos los Dioses los hacían nacer el 24 de Diciembre; por lo cual al hacer Dios a Jesús, lo hacen también un Mito.",
    "EjemploPedagogico": "Cambiarle la fecha de cumpleaños al 24 de diciembre fue la estrategia de Roma para disfrazar al carpintero de dios solar romano (Mitra/Sol Invictus).",
    "ConexionDoctrinal": ["Nacimiento de Jesús", "4 de Diciembre", "El Mito del 24 de Diciembre"],
    "NodosSimapticos": ["Mitología del 24 de Diciembre"]
  },
  "1296: Pregunta 78: ¿Jesús nació en Belén?. . .": {
    "PilotoDeCoherencia": "Rectificación geográfica. Jesús no nació en Belén, sino en Nazareth. El apelativo 'Jesús de Nazareth' no era un adorno, era su identificación civil en una época sin apellidos formales.",
    "CitaInelutable": "No. En Nazareth... fijémonos en que se llamó Jesús de Nazareth, y Jesús el Galileo; no puede ser pues de Belén.",
    "EjemploPedagogico": "El nombre de Belén se forzó teológicamente para cumplir profecías judías a la fuerza. El Espiritismo devuelve la verdad geográfica: era galileo de Nazareth.",
    "ConexionDoctrinal": ["Nacimiento en Nazareth", "Rechazo del Mito de Belén"],
    "NodosSimapticos": []
  },
  "1312: Pregunta 79: ¿Jesús murió en la cruz?": {
    "PilotoDeCoherencia": "La aniquilación del dogma de la resurrección. Jesús NO murió en la cruz. Su cuerpo no resucitó por arte de magia; fue bajado vivo por los esenios y llevado a su escuela secreta, donde falleció de sus heridas tiempo después.",
    "CitaInelutable": "No; Jesús murió en la Escuela Esénica.",
    "EjemploPedagogico": "La cruz no mató a Jesús aquel viernes; lo mataron las heridas semanas después en la cama de un hospital esenio. No hay resurrección física de muertos, hay biología.",
    "ConexionDoctrinal": ["Supervivencia a la Cruz", "La Escuela Esénica", "Fin del Mito de Resurrección"],
    "NodosSimapticos": ["Muerte Esénica"]
  },
  "1321: donde fué llevado por José de Arimatea: a los 88 días después de la crucifixión. Pero este punto culminante, como todos los de Jesús, en la “Filosofía Austera Racional”, están documentados.": {
    "PilotoDeCoherencia": "La fecha exacta del deceso material. Jesús falleció a los 88 días después de la crucifixión, al cuidado de José de Arimatea en la Escuela Esénica. Trincado remite al libro 'Filosofía Austera Racional' para la prueba documentada de este hecho.",
    "CitaInelutable": "Fué llevado por José de Arimatea a los 88 días después de la crucifixión. Pero este punto culminante... en la 'Filosofía Austera Racional', están documentados.",
    "EjemploPedagogico": "No voló al cielo en cuerpo y alma; murió como cualquier hombre herido y fue enterrado en secreto por sus hermanos esenios.",
    "ConexionDoctrinal": ["Los 88 Días", "José de Arimatea", "Documentación Trincadista"],
    "NodosSimapticos": ["Los 88 Días de Agonía"]
  },
  "1332: Pregunta 80: ¿Qué es el alma humana?": {
    "PilotoDeCoherencia": "Definición atómica-espiritual. El alma no es el espíritu inteligente. El alma es solo una 'materia quintiescencial' extraída de la evolución animal, que sirve de envoltura (traje) al espíritu.",
    "CitaInelutable": "Es materia quintiescencial de las almas animales y le sirven de envoltura al espíritu.",
    "EjemploPedagogico": "El espíritu es el astronauta (la inteligencia), el alma es el traje espacial (materia sutil), y el cuerpo físico es la nave.",
    "ConexionDoctrinal": ["El Alma como Envoltura", "Materia Quintiescencial", "Diferencia entre Alma y Espíritu"],
    "NodosSimapticos": ["Traje Espacial del Espíritu"]
  },
  "1347: Pregunta 81: ¿Dónde radica el alma?": {
    "PilotoDeCoherencia": "Ubicación y función biológica del alma. Radica en 'todo el ser' y su única función y manifestación de vida es la sensibilidad (sistema nervioso sensitivo).",
    "CitaInelutable": "En todo el ser de los seres, y se manifiesta en la sensibilidad que es su única facultad.",
    "EjemploPedagogico": "El alma es la red de cables sensibles que le avisan al espíritu que el cuerpo tocó el fuego.",
    "ConexionDoctrinal": ["Sensibilidad como Alma", "Ubicación del Alma"],
    "NodosSimapticos": []
  },
  "1358: Pregunta 82: como materia, sirve de cuerpo y neutral: al espíritu desencarnado, para materializarse y dejarse ver. ¿Qué es el espíritu y dónde radica?": {
    "PilotoDeCoherencia": "Identidad del Espíritu. El espíritu no es el alma ni la sangre; es la entidad inteligente superior. Radica en todo el cuerpo dándole el calor que mantiene la vida, pero advirtiendo: 'como la lámpara no es la luz, tampoco es el [cuerpo la vida]'.",
    "CitaInelutable": "En todo el cuerpo del hombre y él da el calor de la sangre que mantiene la vida, pero que no es la vida; y como la lámpara no es la luz, tampoco es el cuerpo la vida.",
    "EjemploPedagogico": "La bombilla de cristal (cuerpo) no tiene luz propia; brilla solo mientras la corriente eléctrica (espíritu) pasa por ella.",
    "ConexionDoctrinal": ["El Espíritu como Vida", "Calor de la Sangre"],
    "NodosSimapticos": ["La Corriente Vital"]
  },
  "1380: Pregunta 83: ¿Existe alguna relación entre el: mundo espiritual y el material?": {
    "PilotoDeCoherencia": "El axioma de interdependencia cósmica. No hay barrera mística. La sustancia es una sola. El mundo espiritual y material están obligados a relacionarse por la ley de 'El universo solidarizado'.",
    "CitaInelutable": "Existe, no sólo relación sino que, 'la substancia una sola es en infinitos grados de relativo progreso' y una de las proclamas de nuestra Escuela dice: 'El universo solidarizado'.",
    "EjemploPedagogico": "El más allá y el más acá son la misma habitación dividida por una cortina delgada. El aire (éter) pasa de un lado a otro constantemente.",
    "ConexionDoctrinal": ["Solidaridad Cósmica", "Unidad de Sustancia"],
    "NodosSimapticos": []
  },
  "1400: Pregunta 84: ¿Cómo se efectúa la comunicación: de los espíritus?": {
    "PilotoDeCoherencia": "Definición de la mediumnidad. La comunicación se logra a través de los médiums, que son simplemente 'intermediarios' sensibles. No son magos, son operadores de un telégrafo biológico con una alta responsabilidad moral.",
    "CitaInelutable": "Por medio de los médiums, o sea seres intermediarios entre los espíritus y los hombres... muy meritorios y también muy responsables en su buen o mal uso.",
    "EjemploPedagogico": "El médium es el teléfono. El espíritu marca el número y el hombre escucha. Si el teléfono está sucio de fanatismo, la llamada se corta.",
    "ConexionDoctrinal": ["El Médium Intermediario", "Responsabilidad Mediúmnica"],
    "NodosSimapticos": ["Teléfono Espiritual"]
  },
  "1417: Pregunta 85: ¿Los médiums son seres: excepcionales?": {
    "PilotoDeCoherencia": "La desmitificación del médium. Nadie es excepcional en el universo (solo Eloí). Los médiums son personas con un grado diferente de progreso magnético. De hecho, Trincado afirma que hay médiums en todas partes, aunque ellos mismos lo ignoren.",
    "CitaInelutable": "Del Padre Creador abajo, no puede existir ningún ser excepcional... médiums, los hay en todas partes aun ignorándolo los mismos médiums.",
    "EjemploPedagogico": "Ser médium no es tener superpoderes ni ser un elegido; es tener la piel psíquica más delgada que el resto. Cualquiera puede desarrollarlo.",
    "ConexionDoctrinal": ["Rechazo de Seres Excepcionales", "Universalidad de la Mediumnidad"],
    "NodosSimapticos": ["Piel Psíquica"]
  },
  "1436: Pregunta 86: ¿Sabes lo que supone ser: juramentado?. . .": {
    "PilotoDeCoherencia": "El pacto trincadista final. Ser juramentado no es un pacto de sangre místico; es la solemne promesa consciente de acatar la Ley de Amor, que se traduce exclusivamente en una acción: 'AMANDO AL HERMANO'.",
    "CitaInelutable": "Haber acatado la Ley de Amor que se ha proclamado y que hemos prometido cumplirla como nos enseña nuestra Escuela AMANDO AL HERMANO, que son todos los hombres.",
    "EjemploPedagogico": "El juramento en la Escuela no se hace besando una cruz, se hace prometiendo no usurpar jamás el trabajo ni la dignidad del prójimo.",
    "ConexionDoctrinal": ["El Juramento Racionalista", "Acato de la Ley de Amor"],
    "NodosSimapticos": ["Pacto Fraterno"]
  },
  "1453: Pregunta 87: ¿Y qué significa ser: presentado a la Escuela?. . .": {
    "PilotoDeCoherencia": "El bautismo racionalista (sin agua). La 'Presentación' (generalmente de niños) es el acto donde los padres renuevan su promesa de Amor y se comprometen a educar a la nueva vida en la Fraternidad y sostener la creación de Colonias Comunales.",
    "CitaInelutable": "Significa, renovar esa promesa de cumplir la Ley de Amor y prometer defender y sostener las doctrinas de fraternidad que nuestra Escuela enseña... ensayándola en las Colonias Comunales.",
    "EjemploPedagogico": "En lugar de lavarle la cabeza a un bebé para 'borrarle' un pecado inventado, se le presenta a la sociedad como un futuro ciudadano libre y sin dogmas.",
    "ConexionDoctrinal": ["Presentación a la Escuela", "Sostén de las Colonias", "Reemplazo del Bautismo"],
    "NodosSimapticos": ["Bautismo Racional"]
  },
  "1473: Pregunta 88:": {
    "PilotoDeCoherencia": "El conflicto final entre dogma y familia. Trincado responde qué debe hacer un joven si sus padres (cegados por la religión) le prohíben estudiar el Espiritismo. La respuesta, aunque triste, prioriza la emancipación de la Razón sobre la tiranía paterna cuando esta se basa en el error dogmático.",
    "CitaInelutable": "Muchos son los padres que no presentan a sus hijos a la Escuela, y muchos son también los que por sus prejuicios y errores religiosos prohíben a sus niños estudiar las doctrinas de la verdad.",
    "EjemploPedagogico": "El respeto a los padres es ley, pero si el padre exige que el hijo se saque los ojos (apague su razón), el hijo tiene el deber de proteger su propia luz.",
    "ConexionDoctrinal": ["Emancipación Intelectual", "El Conflicto Familiar por el Dogma"],
    "NodosSimapticos": ["Rebelión por la Luz"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Muerte Esénica (Los 88 Días)": {
    "Definición": "Doctrina histórica de la Escuela Magnético-Espiritual que aniquila el mito cristiano de la resurrección. Establece que Jesús no murió el día de la crucifixión, sino que fue bajado vivo, atendido por José de Arimatea en la Escuela Secreta de los Esenios, y falleció por sus heridas exactamente 88 días después.",
    "Contexto": "Cuestionario Espírita Racional (Preguntas 79 y 80).",
    "Conexiones": ["Destrucción del Mito de Resurrección", "José de Arimatea", "Supervivencia a la Cruz"],
    "Obras": ["Cuestionario Espírita Racional", "Filosofía Austera Racional"]
  },
  "El Mito del 24 de Diciembre": {
    "Definición": "Denuncia histórica y astronómica donde la Escuela demuestra que el nacimiento de Jesús ocurrió el 4 de Diciembre. La iglesia católica adulteró la fecha al 24 de Diciembre para hacerla coincidir con el solsticio de invierno y la adoración de los dioses paganos (Mitra/Sol Invictus), convirtiendo a Jesús en un 'Mito' o Dios Solar.",
    "Contexto": "Cuestionario Espírita Racional (Pregunta 77).",
    "Conexiones": ["Nacimiento de Jesús", "Adulteración Católica", "Sincretismo Pagano"],
    "Obras": ["Cuestionario Espírita Racional", "Jesús Hombre y no Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 16 nodos PURA CALIDAD 1:1 de Cuestionario Espirita Racional (Batch 5 FINAL) y 2 términos sinápticos. OBRA COMPLETADA 100%.');

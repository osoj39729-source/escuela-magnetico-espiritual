const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

const nuevosNodos = {
  "9177: CAPÍTULO TREINTA Y CUATRO — Recogiendo y atando cabos. Acción final": {
    "PilotoDeCoherencia": "Recojo toda la madeja de la historia. La ciencia, liberada del dogma, será el acólito del hombre que oficia en el trabajo. El trabajo es el único culto verdadero. Aquí establezco que la liquidación no es el fin, sino el desbroce para que la siembra de la Comuna pueda florecer sin estorbos.",
    "CitaInelutable": "La ciencia, entonces será el acólito del sacerdote hombre, que oficiará en el trabajo.",
    "EjemploPedagogico": "Es como un constructor que ha terminado de limpiar el terreno de escombros: ahora puede empezar a levantar las columnas de la nueva casa sobre roca firme. La ciencia pone las herramientas; el espíritu pone el propósito.",
    "ConexionDoctrinal": ["Ciencia y Trabajo", "Acción Final", "Sacerdocio del Trabajo"],
    "NodosSimapticos": ["Ciencia Acólito", "Sacerdote Hombre", "Atando Cabos"]
  },
  "9942: PROCLAMA — El Universo solidarizado": {
    "PilotoDeCoherencia": "Esta es la síntesis absoluta. No hay división entre espíritu y materia, entre Dios y creación. Todo es Magnetismo Espiritual. La solidaridad es la ley universal. El mundo debe comunizarse porque es la única forma de vivir en armonía con la unidad de la sustancia.",
    "CitaInelutable": "El Universo, solidarizado. El Mundo todo, comunizado. La ley es una. La substancia una.",
    "EjemploPedagogico": "Es el teorema final. Después de toda la demostración histórica y racional, llegamos a la unidad. Si la sustancia es una, el interés debe ser uno: el bienestar de todos.",
    "ConexionDoctrinal": ["Proclama", "Universo Solidarizado", "Mundo Comunizado", "Sustancia Única"],
    "NodosSimapticos": ["Proclama", "Sustancia Una", "Universo Solidarizado"]
  },
  "9990: CAPÍTULO 35 — Epílogo": {
    "PilotoDeCoherencia": "Este epílogo es un testimonio de la lucha. El libro tuvo que esperar porque el mundo no estaba listo para oír la verdad desnuda. Pero la Ley tiene sus tiempos y este libro sale cuando el dolor ha ablandado la dureza del corazón humano para que la semilla entre profunda.",
    "CitaInelutable": "Este libro no debía tener por remate un epílogo, pero... se ha esperado inútilmente.",
    "EjemploPedagogico": "Es como el médico que tiene la cura pero debe esperar a que el paciente reconozca que está enfermo para que acepte el tratamiento. La guerra es ese reconocimiento forzoso.",
    "ConexionDoctrinal": ["Tiempos de la Ley", "Espera Misionera", "Resistencia al Cambio"],
    "NodosSimapticos": ["Epílogo Doloroso", "Espera de la Ley", "Semilla en el Dolor"]
  },
  "10284: EL ESPÍRITU DE VERDAD": {
    "PilotoDeCoherencia": "No firmo como hombre, firmo como el Espíritu de Verdad que la Escuela representa. Es la firma de la justicia que vuelve a la tierra para reclamar su lugar. Quien tiene oídos para oír, que oiga; quien tiene razón para pensar, que juzgue.",
    "CitaInelutable": "EL ESPÍRITU DE VERDAD. ... con carácter de justicia.",
    "EjemploPedagogico": "No es una firma de orgullo, es una firma de responsabilidad. Es el sello que garantiza que lo dicho no es opinión, sino ley demostrada.",
    "ConexionDoctrinal": ["Espíritu de Verdad", "Firma de Justicia", "Escuela Magnetológica"],
    "NodosSimapticos": ["Espíritu de Verdad", "Firma de Justicia", "Sello Doctrinal"]
  },
  "10393: CAPÍTULO 36 — Octubre 4 de 1916": {
    "PilotoDeCoherencia": "Vuelvo sobre estas páginas con dolor profundo. La guerra sigue y el hombre no aprende. Pero la Naturaleza no callará: los volcanes, los terremotos, las tormentas hablarán para despertar al hombre que no quiso oír la voz de la razón. La profilaxis será física si la moral falla.",
    "CitaInelutable": "Vuelvo sobre este libro, con mayor dolor que hace un año... por las demostraciones terribles de la naturaleza.",
    "EjemploPedagogico": "Si un niño no entiende por la palabra del padre, terminará entendiendo por el golpe contra la pared que el padre le avisó que no cruzara. La naturaleza es esa pared que el hombre insiste en golpear.",
    "ConexionDoctrinal": ["Hechos de la Naturaleza", "Dolor Misionero", "Advertencia Final"],
    "NodosSimapticos": ["Dolor de 1916", "Advertencia de la Naturaleza", "Profilaxis Física"]
  },
  "10605: CAPÍTULO 37 — Degeneración de la guerra y lucro": {
    "PilotoDeCoherencia": "Denuncio la degeneración final: países sin conciencia que lucran con la sangre ajena. La guerra como negocio es el clímax de la bajeza humana. Esto traerá la ruina económica y moral del mundo viejo. Nada quedará en pie de este sistema de pillaje bendecido por la religión.",
    "CitaInelutable": "La guerra como lucro de los países sin conciencia, traerá la ruina mundial, económica y moral.",
    "EjemploPedagogico": "Es el buitre que espera a que el guerrero muera para comer. Esos países buitres creen que ganan, pero están cavando su propia tumba en la ruina que ellos mismos provocan.",
    "ConexionDoctrinal": ["Ruina Económica", "Guerra como Lucro", "Degeneración Humana"],
    "NodosSimapticos": ["Lucro de Sangre", "Ruina Mundial", "Países Buitres"]
  },
  "11139: CAPÍTULO 38 — Juicio Supremo": {
    "PilotoDeCoherencia": "El diagnóstico final es implacable. Buscamos la raíz de cada motivo de guerra y siempre caemos en la concupiscencia de las religiones. La religión es la causa de las causas. El Juicio Supremo es la sentencia de la Razón sobre el pasado para que el futuro sea libre.",
    "CitaInelutable": "Todo el libro está preñado de motivos de guerra... caemos, como por ley de gravedad... en las religiones.",
    "EjemploPedagogico": "Es el veredicto del juez después de examinar todas las pruebas. El culpable es el dogma religioso que dividió a los hombres. La sentencia es su desaparición definitiva de la faz de la tierra.",
    "ConexionDoctrinal": ["Juicio Supremo", "Concupiscencia Religiosa", "Causa de las Causas"],
    "NodosSimapticos": ["Juicio Supremo", "Causa de Causas", "Gravedad de la Culpa"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Espíritu de Verdad": {
    "Definición": "La representación colectiva de la sabiduría y la justicia que la Escuela Magnetológica trae a la tierra. No es un ente místico sino la conciencia racional del universo manifestada.",
    "Contexto": "Firma final de Los Extremos se Tocan. Trincado lo usa para dar carácter de sentencia impersonal y justa a su obra.",
    "Conexiones": ["Escuela Magnetológica", "Juicio Supremo", "Jaime"],
    "Obras": ["Los Extremos se Tocan", "Buscando a Dios"]
  },
  "Causa de las Causas": {
    "Definición": "En el diagnóstico de Trincado sobre el mal mundial, identifica a las religiones (el dogma) como la raíz primaria de la que derivan todas las guerras, injusticias y miserias.",
    "Contexto": "Capítulo 38 de Los Extremos se Tocan. Es la conclusión del Juicio Supremo.",
    "Conexiones": ["Religión y Poder", "Concupiscencia Religiosa", "Juicio Supremo"],
    "Obras": ["Los Extremos se Tocan", "Primer Rayo de Luz"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 7 nodos finales 1:1 y 2 términos sinápticos. LIBRO COMPLETADO AL 100%.');

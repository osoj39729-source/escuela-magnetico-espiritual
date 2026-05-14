const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';

// Re-destilación completa de "Los Extremos se Tocan"
// Tono: Juez Amoroso por Sabiduría — Austero, firme en la sentencia, sin despotismo.
// La ley opera como gravedad: no castiga, la consecuencia natural se aplica sola.

const esencia = {
  "7: PREMISA — El Escalpelo sin Misericordia": {
    "PilotoDeCoherencia": "Este libro es un bisturí de la Razón. No tiene piedad con el error porque el error tampoco tiene piedad con quien lo padece. Su título resume la ley histórica: los extremos del error siempre se tocan, se destruyen mutuamente, y lo que sobrevive es el Polo de la Ley. El libro fue escrito en plena Primera Guerra Mundial — la demostración más brutal de que los extremos se tocan.",
    "CitaInelutable": "Foco de luz demasiado fuerte y potente, y escalpelo sin misericordia de cirujano.",
    "EjemploPedagogico": "La guerra de 1914 no fue un accidente — fue la colisión inevitable de los extremos del error que la humanidad había acumulado durante siglos bajo la dirección de la iglesia y el militarismo.",
    "ConexionDoctrinal": ["Extremos del Error", "Polos de la Ley", "Ley de Amor", "Primera Guerra Mundial"],
    "NodosSimapticos": ["Extremos", "Polos", "Escalpelo de la Razón", "Error Acumulado"]
  },
  "253-484: PREFACIO y PRÓLOGO — La Palabra que no Pasa": {
    "PilotoDeCoherencia": "Desde el Sánscrito de Shet hasta Jesús y hasta este libro, la Ley Única ha sido siempre la misma: 'Ama a tu hermano'. Todo lo que no quepa en ese mandato es error. La guerra es el extremo del anti-amor alcanzando su clímax. La paz no vendrá de tratados ni gobiernos — vendrá cuando la humanidad decida amar.",
    "CitaInelutable": "Pasarán los cielos y la tierra, pero no pasará la palabra de Jehová: Ama a tu hermano.",
    "EjemploPedagogico": "Isaías lo dijo, Jesús lo repitió, el Sánscrito lo fundó hace 57 siglos. La misma verdad, repetida por distintos maestros en distintas épocas, no es coincidencia — es la Ley haciéndose escuchar.",
    "ConexionDoctrinal": ["Shet", "Sánscrito", "Ley de Amor", "Continuidad de la Escuela"],
    "NodosSimapticos": ["Mandato Único", "Ama a tu Hermano", "Continuidad Doctrinal"]
  },
  "579-580: LOS DOS POLOS — Distinción Fundamental": {
    "PilotoDeCoherencia": "Hay que distinguir con precisión: los Polos son los extremos de la Ley (el Bien y el Bien Mayor, la Ley en su mínimo y en su máximo). Los Extremos del Error son las desviaciones opuestas que se chocan porque ninguna es la Ley. El capitalismo y el comunismo ateo son dos extremos; ambos chocarán. El Polo de la Ley está en el centro: la Comuna de la Escuela.",
    "CitaInelutable": "Los extremos del error siempre se tocan. Los polos de la ley nunca colisionan — se complementan.",
    "EjemploPedagogico": "El imán tiene dos polos: Norte y Sur. Son opuestos pero forman una unidad. Los extremos del error son dos imanes que se rechazan hasta que uno destruye al otro. La diferencia es: los polos son parte de la ley; los extremos son traición a ella.",
    "ConexionDoctrinal": ["Polos de la Ley", "Extremos del Error", "Ley de Compensación"],
    "NodosSimapticos": ["Dos Polos", "Extremos del Error", "Distinción Polo-Extremo"]
  },
  "581-720: CAP. I — La Ley Única: El Amor": {
    "PilotoDeCoherencia": "El Amor no es un sentimiento — es la Ley estructural del Universo. Es la fuerza que mantiene los planetas en órbita, que hace que los seres se agrupen, que obliga al progreso. Las leyes humanas que no se deriven de esta Ley Única son provisionales y caducas. La guerra es la negación del amor — y por eso la guerra siempre termina destruyendo a quienes la provocan.",
    "CitaInelutable": "El Amor es la Ley única que rige el universo; es la ley madre de todas las demás leyes.",
    "EjemploPedagogico": "La gravedad no castiga al que cae desde un edificio — simplemente opera. Así opera la Ley de Amor: quien la viola no recibe castigo externo; la consecuencia natural de su violación se aplica sola, con la misma precisión de la gravedad.",
    "ConexionDoctrinal": ["Ley de Amor", "Leyes Fatales", "Ley de Compensación"],
    "NodosSimapticos": ["Amor como Ley", "Ley Única", "Ley Madre"]
  },
  "721-1052: CAP. II — Las Cuatro Leyes Fatales": {
    "PilotoDeCoherencia": "De la Ley de Amor se derivan cuatro leyes fatales — son fatales porque son de necesidad, no de capricho: Afinidad (los iguales se atraen), Justicia (cada acto tiene su consecuencia exacta), Igualdad (todos los espíritus son iguales en origen) y Compensación (lo que se da se recibe). Ningún poder humano o religioso puede suspenderlas. Son la geometría del Universo.",
    "CitaInelutable": "De la máxima ley de amor se derivan estas cuatro leyes fatales, porque son justicia de necesidad.",
    "EjemploPedagogico": "La Ley de Compensación no es el karma místico oriental ni la venganza del dios bíblico. Es la contabilidad exacta del Universo: cada deuda se paga, cada servicio se retribuye, no como premio o castigo sino como ecuación que se equilibra.",
    "ConexionDoctrinal": ["Afinidad", "Justicia Universal", "Igualdad Espiritual", "Compensación"],
    "NodosSimapticos": ["Leyes Fatales", "Afinidad", "Justicia", "Igualdad", "Compensación"]
  },
  "1053-1386: CAP. III — Adán, Eva y la Familia Misionera": {
    "PilotoDeCoherencia": "Adán y Eva no son el primer hombre y la primera mujer biológicos — son los primeros iniciados de la Escuela de Shet, los primeros en recibir el mandato racional. El pecado original no existe: existe la ignorancia original, que la Escuela viene a corregir. La familia de Adán fue misionera — su misión era sembrar la ley del amor en la tierra recién inaugurada para la razón.",
    "CitaInelutable": "El Adán bíblico ha traído a los hombres dando cabezadas de incredulidad, por causa del dogma, arma del libertinaje.",
    "EjemploPedagogico": "El relato del Edén es una alegoría doctrinal adulterada: la serpiente es el dogma religioso que ofrece conocimiento sin trabajo; el fruto prohibido es la verdad que la iglesia no quiere que el pueblo alcance por sí mismo.",
    "ConexionDoctrinal": ["Adán", "Eva", "Shet", "Familia Misionera", "Anti-Pecado Original"],
    "NodosSimapticos": ["Adán", "Eva", "Familia Misionera", "Pecado Original Falso"]
  },
  "1387-1538: CAP. IV — El Sánscrito y la Ley de Shet": {
    "PilotoDeCoherencia": "El Sánscrito es la primera escritura racional de la humanidad, creada por Shet hace 57 siglos. No es solo un idioma — es la doctrina de la verdad codificada. Todo lo que viene después: el Vedanta, el Veda, el budismo, el judaísmo, son derivaciones adulteradas del tronco original de Shet. Quien estudia el Sánscrito bebe de la fuente sin intermediarios.",
    "CitaInelutable": "El Sánscrito es la doctrina de la verdad, lo suficiente claro para la secular epopeya de la regeneración de la familia.",
    "EjemploPedagogico": "Como un río que nace puro en la montaña y va enturbiándose a medida que recorre tierras contaminadas, la verdad de Shet fue enturbiada por cada civilización que la recibió y la mezcló con sus intereses de poder.",
    "ConexionDoctrinal": ["Shet", "Sánscrito", "Ley de Amor", "Origen de las Religiones"],
    "NodosSimapticos": ["Sánscrito", "Shet", "Primera Escritura Racional", "57 Siglos"]
  },
  "1626-4535: CAPS. V al VIII — Historia Misionera desde Adán hasta el Papado": {
    "PilotoDeCoherencia": "El libro traza el mapa histórico de la ley y el error: desde Adán-Shet hasta Moisés (21 siglos), desde Moisés hasta Jesús, desde Jesús hasta Constantino (la gran traición), desde Constantino hasta Gregorio VII (la consolidación del papado). En cada etapa se repite el mismo patrón: la Ley aparece en un Misionero, la iglesia lo toma, lo convierte en dogma y lo usa para oprimir.",
    "CitaInelutable": "La historia después de Constantino: toda la verdad quedó sepultada bajo la autoridad de los concilios.",
    "EjemploPedagogico": "Constantino no se convirtió al cristianismo porque vio una cruz en el cielo — la usó como bandera política para unificar su imperio. Así nació la iglesia católica: como instrumento de poder, no como comunidad de fe.",
    "ConexionDoctrinal": ["Constantino", "Jesús Misionero", "Papado", "Adulteración Histórica"],
    "NodosSimapticos": ["Constantino", "Traición a Jesús", "Papado", "Historia Misionera"]
  },
  "4536-5732: CAPS. IX al XIII — De Gregorio VII a la Primera Guerra Mundial": {
    "PilotoDeCoherencia": "Desde Gregorio VII hasta los Balcanes se despliega el largo proceso de colisión de los extremos: el imperialismo religioso choca con el imperialismo político, el capitalismo choca con el nacionalismo. Los Balcanes fueron la resistencia final antes de la explosión. La guerra de 1914 no fue un accidente — fue la ecuación de los extremos acumulados llegando a su resultado inevitable.",
    "CitaInelutable": "Los Balcanes eran la resistencia de los dos extremos. Cuando se rompió esa resistencia, se originó la catástrofe.",
    "EjemploPedagogico": "Una olla a presión con la válvula cerrada no explota por accidente — explota porque la acumulación de presión no tiene otro destino. La humanidad había acumulado siglos de injusticia religiosa y política. Los Balcanes fueron la válvula que se cerró definitivamente.",
    "ConexionDoctrinal": ["Primera Guerra Mundial", "Extremos del Error", "Ley de Compensación", "Papado"],
    "NodosSimapticos": ["Balcanes", "Primera Guerra", "Colisión de Extremos", "Resistencia Rota"]
  },
  "5877-6547: CAPS. XV al XVIII — Los Culpables y la Ley que Triunfa": {
    "PilotoDeCoherencia": "La pregunta: ¿quién prendió la mecha? La respuesta: los que fomentaron el error durante siglos — las congregaciones religiosas, los estados militaristas, el capital sin conciencia. No como acusación para el odio, sino como diagnóstico para la corrección. La Ley no viene a vengarse — viene a liquidar la cuenta y abrir el nuevo ciclo. Los culpables son los que se auto-excluyen de la paz futura.",
    "CitaInelutable": "Los culpables, en rigor, del mal mundial, son los que fomentan el error, por el cual perciben beneficio.",
    "EjemploPedagogico": "El médico que diagnostica cáncer no odia al paciente ni al tumor — estudia la causa y aplica el tratamiento. Así opera la Escuela: nombra al culpable no para condenarlo sino para que el error no se repita.",
    "ConexionDoctrinal": ["Culpables del Error", "Ley de Justicia", "Liquidación de Cuentas"],
    "NodosSimapticos": ["Culpables", "Fomentar el Error", "Liquidación", "Justicia sin Odio"]
  },
  "6881-7357: CAPS. XX-XXI — La Tierra Manchada y lo que Enseña la Escuela": {
    "PilotoDeCoherencia": "Después del diagnóstico viene la prescripción. La Escuela Magnetológica de la Comuna Universal enseña lo que ninguna universidad ni iglesia enseña: el origen del espíritu, las leyes de la naturaleza, la mecánica del progreso, la estructura de la familia sana, la economía justa. No como dogma — como ciencia de la vida.",
    "CitaInelutable": "Lo que sabe y enseña la Escuela Magnético-Espiritual de la Comuna Universal.",
    "EjemploPedagogico": "La Escuela no tiene templo porque la verdad no necesita edificio. No tiene sacerdotes porque la relación con el Padre es directa. No tiene ritual porque la ley opera igual en el campo que en un palacio.",
    "ConexionDoctrinal": ["Escuela Magnetológica", "Comuna Universal", "Enseñanza Racional"],
    "NodosSimapticos": ["Escuela", "Ciudad Invisible", "Enseñanza sin Dogma"]
  },
  "7454-7836: CAPS. XXIII-XXV — El Alba de la Justicia y el Día del Amor": {
    "PilotoDeCoherencia": "El Alba de la Justicia llega cuando el hombre ya no teme a la fantasía religiosa y asume el C.G.S. (Código de Gobierno Social). El Día del Amor es la inauguración de la nueva civilización: no de paz por agotamiento, sino de paz por convicción. El 'Cuerpo Ideal' del Día del Amor no es una utopía — es la descripción de lo que la humanidad puede construir cuando aplica la ley.",
    "CitaInelutable": "Por fin podemos formar el cuerpo ideal sin nada abstracto.",
    "EjemploPedagogico": "El cuerpo ideal incluye: el hombre que trabaja, la mujer que educa, el niño que aprende, el anciano que guía — cada rol sostenido en el amor y la ley, no en el poder ni el miedo.",
    "ConexionDoctrinal": ["C.G.S.", "Cuerpo Ideal Social", "Día del Amor", "Civilización Racional"],
    "NodosSimapticos": ["Día del Amor", "Cuerpo Ideal", "CGS", "Nueva Civilización"]
  },
  "8795-9177: CAPS. XXXI-XXXIV — Eloí, la Herencia Universal y el Mandato Único": {
    "PilotoDeCoherencia": "Solo Eloí es propietario del Universo — por eso ningún hombre puede apropiarse de la tierra. Todos los hombres son herederos del Universo — por eso la pobreza es un crimen social, no un destino divino. El mandato único que recoge todo es: 'Ama a tu hermano'. No hay más ley que esta. Todo lo demás — política, economía, familia — es aplicación de esta ley.",
    "CitaInelutable": "Solo Eloí es propietario del Universo. Todos los hombres son herederos. Ama a tu hermano.",
    "EjemploPedagogico": "Si Eloí es el único propietario y todos somos sus hijos, entonces cada hombre que muere de hambre en un mundo con alimentos suficientes es víctima de un robo — no de la voluntad del Padre.",
    "ConexionDoctrinal": ["Eloí", "Propiedad Universal", "Herencia de los Hijos", "Mandato Único"],
    "NodosSimapticos": ["Eloí", "Solo Eloí Propietario", "Herencia Universal", "Ama a tu Hermano"]
  },
  "9942-9947: PROCLAMA Final — La Síntesis": {
    "PilotoDeCoherencia": "La proclama final del libro es la destilación de toda la doctrina en tres líneas: El Universo, solidarizado. El Mundo todo, comunizado. La ley es una. La sustancia una. Uno es el principio. Uno es el fin. Todo es Magnetismo Espiritual. No hay nada más que decir. Todo lo anterior fue la demostración; esto es el teorema.",
    "CitaInelutable": "El Universo, solidarizado. El Mundo todo, comunizado. La ley es una. La substancia una. Todo es Magnetismo Espiritual. — Joaquín Trincado.",
    "EjemploPedagogico": "Como un matemático que después de 300 páginas de demostración escribe el QED — quod erat demonstrandum — Trincado cierra el libro con la proclama que resume todo. El trabajo del estudiante es comprender la demostración para que el teorema no sea una frase vacía.",
    "ConexionDoctrinal": ["Magnetismo Espiritual", "Solidaridad Universal", "Comunismo Racional", "Sustancia Única"],
    "NodosSimapticos": ["Proclama Final", "Magnetismo Espiritual", "Universo Solidarizado", "Mundo Comunizado"]
  },
  "11139-11145: CAP. 38 — Juicio Supremo: El Diagnóstico Final": {
    "PilotoDeCoherencia": "El Juicio Supremo no es el juicio bíblico al final de los tiempos — es el análisis racional que la historia pronuncia sobre las causas de la guerra y el sufrimiento. El veredicto es claro: las religiones, al mezclar lo espiritual con lo carnal (la concupiscencia que Trincado señala 'sin microscopio'), han sido el motor del desorden. La Escuela es la alternativa probada.",
    "CitaInelutable": "En cualquier religión que examinamos, aun sin microscopio, al tentón, encontramos la concupiscencia que las alimenta.",
    "EjemploPedagogico": "El juicio de un médico forense no condena al muerto ni al vivo — determina la causa de la muerte para que no se repita. Así opera el Juicio Supremo de la Escuela: no para condenar sino para diagnosticar con precisión quirúrgica.",
    "ConexionDoctrinal": ["Juicio Supremo", "Causas de la Guerra", "Religión y Poder", "Diagnóstico Doctrinal"],
    "NodosSimapticos": ["Juicio Supremo", "Diagnóstico Final", "Concupiscencia Religiosa"]
  }
};

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Los Extremos se Tocan RE-DESTILADO. Total nodos:', Object.keys(esencia).length);

// Actualización del Diccionario de Sínapsis
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic, {
  "Extremos del Error": {
    "Definición": "Las desviaciones opuestas a la Ley que inevitablemente chocan y se destruyen. No son los polos de la Ley sino las escapadas hacia los opuestos irracionales. El capitalismo salvaje y el comunismo ateo son ejemplos de extremos que colisionarán.",
    "Contexto": "Concepto central de 'Los Extremos se Tocan'. La historia es la demostración de esta ley: todo extremo busca su opuesto y ambos se destruyen, dejando espacio para que emerja el Polo de la Ley.",
    "Conexiones": ["Polos de la Ley", "Ley de Compensación", "Primera Guerra Mundial"],
    "Obras": ["Los Extremos se Tocan"]
  },
  "Polos de la Ley": {
    "Definición": "Los extremos legítimos de la Ley — el bien y el bien mayor, la ley en su expresión mínima y máxima. No colisionan porque son parte de la misma ley. Son complementarios, no contradictorios.",
    "Contexto": "Distinción fundamental de 'Los Extremos se Tocan': no confundir los polos (que son ley) con los extremos (que son error).",
    "Conexiones": ["Extremos del Error", "Ley de Amor", "Ley de Afinidad"],
    "Obras": ["Los Extremos se Tocan"]
  },
  "Leyes Fatales": {
    "Definición": "Las cuatro leyes que se derivan de la Ley de Amor: Afinidad (los semejantes se atraen), Justicia (cada acto tiene consecuencia exacta), Igualdad (todos los espíritus son iguales en origen) y Compensación (la contabilidad exacta del Universo). Son fatales porque operan por necesidad, no por voluntad.",
    "Contexto": "Definidas en el Capítulo II de 'Los Extremos se Tocan'. Son la geometría del Universo — no pueden ser suspendidas por ningún poder humano o religioso.",
    "Conexiones": ["Ley de Amor", "Ley de Justicia", "Ley de Compensación", "Ley de Afinidad"],
    "Obras": ["Los Extremos se Tocan", "Código de Amor Universal"]
  },
  "Eloí": {
    "Definición": "El nombre que Trincado usa para el Padre Universal en su rol de Propietario Único del Universo. Solo Eloí es propietario — por tanto ningún hombre puede apropiarse de la tierra. Todos los hombres son sus herederos.",
    "Contexto": "Proclamado en el Cap. XXXI de 'Los Extremos se Tocan'. Fundamento doctrinal de la economía comunal: si Eloí es el único propietario, la propiedad privada de la tierra es un robo.",
    "Conexiones": ["Hellí", "Propiedad Universal", "Herencia de los Hijos", "Comuna"],
    "Obras": ["Los Extremos se Tocan", "Código de Amor Universal"]
  },
  "Día del Amor": {
    "Definición": "El período histórico futuro (y en proceso) en que la humanidad aplica la Ley de Amor conscientemente. No es un evento apocalíptico sino una transición: el punto en que la mayoría actúa bajo la ley y no bajo el error.",
    "Contexto": "Caps. XXIII-XXV de 'Los Extremos se Tocan'. El 'Cuerpo Ideal' del Día del Amor es la descripción concreta de la sociedad que emerge cuando los extremos del error han colisionado y la Ley ocupa su lugar.",
    "Conexiones": ["Cuerpo Ideal Social", "CGS", "Nueva Civilización", "Ley de Amor"],
    "Obras": ["Los Extremos se Tocan"]
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario actualizado: Extremos, Polos, Leyes Fatales, Eloí, Día del Amor.');

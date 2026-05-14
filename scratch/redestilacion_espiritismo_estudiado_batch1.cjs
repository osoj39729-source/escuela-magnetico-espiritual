const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 — RESET TOTAL, claves idénticas al content.json
const esencia = {
  "19: <<FILOSOFÍA AUSTERA RACIONAL>>: POR ____________ BUENOS AIRES, ENERO DE 1922": {
    "PilotoDeCoherencia": "Portada y Autoría. Obra publicada en Buenos Aires, enero de 1922, Año 11 de la Nueva Era, sellando la propiedad intelectual soberana del Maestro.",
    "CitaInelutable": "<<FILOSOFÍA AUSTERA RACIONAL>> POR JOAQUÍN TRINCADO. AÑO 11. NUEVA ERA.",
    "EjemploPedagogico": "El sello de un contrato maestro; no es el contenido todavía, pero certifica quién lo escribe, cuándo y con qué autoridad moral.",
    "ConexionDoctrinal": ["Maestro Fundador", "Nueva Era"],
    "NodosSimapticos": []
  },
  "42: PRÓLOGO: Engorrosa es mi situación.": {
    "PilotoDeCoherencia": "Posición Doctrinal. Trincado declara su aislamiento entre los espiritualistas, los religiosos y los materialistas, ninguno de los cuales acepta la verdad austera de la Escuela.",
    "CitaInelutable": "Engorrosa es mi situación. Sostengo los principios austeros del Espiritismo en su Luz y Verdad.",
    "EjemploPedagogico": "Un árbitro en un partido donde todos los equipos lo abuchean; no le agrada a nadie porque aplica el reglamento sin favoritismos.",
    "ConexionDoctrinal": ["Austeridad", "Soberanía Doctrinal"],
    "NodosSimapticos": []
  },
  "50: El Universo solidarizado.": {
    "PilotoDeCoherencia": "Primer Verso de la Proclama. Axioma que establece que no existe nada aislado en la creación; toda existencia es solidaria e interdependiente.",
    "CitaInelutable": "El Universo solidarizado.",
    "EjemploPedagogico": "El sistema circulatorio; ningún vaso sanguíneo trabaja por sí solo; todos son solidarios con el corazón que los mueve.",
    "ConexionDoctrinal": ["Solidaridad Universal", "Tierra Solidarizada"],
    "NodosSimapticos": []
  },
  "52: El mundo todo Comunizado.": {
    "PilotoDeCoherencia": "Segunda Tesis de la Proclama. La comuni­zación de todos los recursos y derechos es la consecuencia natural de la solidaridad universal.",
    "CitaInelutable": "El mundo todo Comunizado.",
    "EjemploPedagogico": "Un edificio de apartamentos con un generador común; cuando uno falla, todos se quedan sin luz; cuando todos aportan, todos gozan de la energía.",
    "ConexionDoctrinal": ["Comuna Universal", "Fraternidad"],
    "NodosSimapticos": []
  },
  "54: La Ley es una y la Substancia una.": {
    "PilotoDeCoherencia": "Monismo Racional. No existen leyes separadas para el espíritu y para la materia; es la misma ley la que rige al átomo y al espíritu evolucionado.",
    "CitaInelutable": "La Ley es una y la Substancia una. Uno es el principio, uno es el fin.",
    "EjemploPedagogico": "La gravedad que atrae una manzana al suelo es la misma que mantiene la Tierra en órbita alrededor del Sol; una sola ley, infinitas manifestaciones.",
    "ConexionDoctrinal": ["Ley Única", "Monismo"],
    "NodosSimapticos": ["Ley Única (Monismo)"]
  },
  "58: Todo es Magnetismo Espiritual.": {
    "PilotoDeCoherencia": "Física del Espíritu. El magnetismo espiritual es la fuerza fundamental que mueve y relaciona todo lo existente, tanto en el plano material como en el espiritual.",
    "CitaInelutable": "Todo es Magnetismo Espiritual. Que nadie ha podido ni podrá mejorar ni siquiera igualar.",
    "EjemploPedagogico": "El electromagnetismo en la física moderna; invisible pero omnipresente, capaz de mover trenes y curar enfermos; el magnetismo espiritual es su expresión más elevada.",
    "ConexionDoctrinal": ["Magnetismo Espiritual", "Física Espiritual"],
    "NodosSimapticos": []
  },
  "340: PRIMERA PARTE: EXISTENCIA DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Apertura Demostrativa. Se abre la obra con la prueba de que el espiritismo no es una opinión ni una fe, sino un hecho de la naturaleza.",
    "CitaInelutable": "PRIMERA PARTE: EXISTENCIA DEL ESPIRITISMO.",
    "EjemploPedagogico": "El primer capítulo de un tratado de física que empieza demostrando que la materia existe antes de explicar sus propiedades.",
    "ConexionDoctrinal": ["Espiritismo (Existencia)", "Prueba Racional"],
    "NodosSimapticos": []
  },
  "346: CAPÍTULO PRIMERO: LO QUE FORMA Y SE LLAMA ESPIRITISMO": {
    "PilotoDeCoherencia": "Definición Ontológica. Se establece qué es el espiritismo en su esencia más pura, diferenciándolo de las corrientes deformadas que usurpan ese nombre.",
    "CitaInelutable": "LO QUE FORMA Y SE LLAMA ESPIRITISMO... esa palabra resuena con el desagrado de un seco golpe.",
    "EjemploPedagogico": "La diferencia entre oro puro y una aleación barata; ambas brillan, pero solo una resiste el fuego del análisis racional.",
    "ConexionDoctrinal": ["Definición de Espiritismo", "Crítica al Espiritualismo"],
    "NodosSimapticos": []
  },
  "473: PÁRRAFO II: CÓMO SE FORMA EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Génesis de la Doctrina. El espiritismo se forma a partir de la ley de solidaridad universal y la unidad de la substancia; no es una religión inventada, sino una verdad descubierta.",
    "CitaInelutable": "CÓMO SE FORMA EL ESPIRITISMO: «El Universo solidarizado» hemos dicho en el primer verso.",
    "EjemploPedagogico": "La cristalización del agua; no es un proceso arbitrario, sino el resultado inevitable de las leyes físicas actuando sobre la substancia; así se forma la doctrina.",
    "ConexionDoctrinal": ["Solidaridad Universal", "Ley Única"],
    "NodosSimapticos": []
  },
  "592: CAPÍTULO SEGUNDO: PATERNIDAD DE LOS ESPÍRITUS": {
    "PilotoDeCoherencia": "Filiación Universal. Todos los espíritus son hijos del mismo Padre Creador; la paternidad de Dios no es metáfora religiosa sino realidad física de emanación.",
    "CitaInelutable": "PATERNIDAD DE LOS ESPÍRITUS... Hijo de Dios, pero en el sentido real de la emanación.",
    "EjemploPedagogico": "Las chispas que salen de una hoguera; son del mismo fuego, tienen la misma naturaleza, aunque cada una ilumine un rincón diferente del mundo.",
    "ConexionDoctrinal": ["Emanación", "Padre Creador"],
    "NodosSimapticos": []
  },
  "724: PÁRRAFO II: CAÍN Y ABEL": {
    "PilotoDeCoherencia": "Alegoría Racial. Caín y Abel no son personajes históricos literales, sino símbolos de las dos razas morales: el trabajador (Abel) y el parásito (Caín).",
    "CitaInelutable": "CAÍN Y ABEL... bíblicos, no han existido como hijos de Adán y Eva literales.",
    "EjemploPedagogico": "Los dos tipos de relación con la tierra: el campesino que la trabaja y la alimenta (Abel) y el especulador que la compra para revenderla sin cultivarla (Caín).",
    "ConexionDoctrinal": ["Caín y Abel (Alegoría)", "Razas Morales"],
    "NodosSimapticos": ["Caín y Abel (Alegoría)"]
  },
  "888: CAPÍTULO TERCERO: MANDATO DEL PADRE CREADOR A SUS HIJOS": {
    "PilotoDeCoherencia": "La Misión Original. Antes de encarnar, cada familia de espíritus recibe el mandato del Padre: estudiar, amar y progresar hasta el retorno a la luz.",
    "CitaInelutable": "MANDATO DEL PADRE CREADOR A SUS HIJOS... cada vez que el Padre crea una familia de espíritus.",
    "EjemploPedagogico": "Un padre que envía a sus hijos a estudiar medicina en otro país; les da dinero, instrucciones y un propósito; el regreso glorioso es el plan desde el primer día.",
    "ConexionDoctrinal": ["Mandato del Padre", "Misión de la Vida"],
    "NodosSimapticos": []
  },
  "971: PÁRRAFO II: EL MUNDO DE EXPIACIÓN": {
    "PilotoDeCoherencia": "Teatro del Progreso. La Tierra es el escenario donde se desarrollan simultáneamente la comedia y el drama humano; no es un castigo sino una escuela de evolución.",
    "CitaInelutable": "EL MUNDO DE EXPIACIÓN... el gran escenario donde se desarrolla la ópera sentimental.",
    "EjemploPedagogico": "Un campo de entrenamiento militar; no es agradable, pero es donde el soldado (espíritu) desarrolla la fortaleza necesaria para la misión real.",
    "ConexionDoctrinal": ["Mundo de Expiación", "Evolución"],
    "NodosSimapticos": ["Mundo de Expiación"]
  },
  "1165: PÁRRAFO III: LA SANGRE DERRAMADA EN 57 SIGLOS.": {
    "PilotoDeCoherencia": "Contabilidad del Horror. Ciento veinte millones de seres asesinados en nombre de la religión en 57 siglos. Denuncia documentada con fuentes históricas.",
    "CitaInelutable": "CIENTO VEINTE MILLONES de seres humanos han caído al odio de la religión Católica, solamente.",
    "EjemploPedagogico": "Una auditoría forense de un siglo de crímenes; cuando los números son tan enormes, ya no son estadísticas, son una acusación ineludible.",
    "ConexionDoctrinal": ["120 Millones (Crimen Religioso)", "Justicia Histórica"],
    "NodosSimapticos": ["120 Millones (Crimen Religioso)"]
  },
  "1438: CAPÍTULO CUARTO: LEY ÚNICA DEL ESPIRITISMO: EL AMOR": {
    "PilotoDeCoherencia": "Principio Supremo. Después de la demolición del error, el Maestro respira y proclama el amor como la única ley que unifica ciencia, moral y espíritu.",
    "CitaInelutable": "LEY ÚNICA DEL ESPIRITISMO: EL AMOR... dejadme que respire un instante.",
    "EjemploPedagogico": "El oasis después de cruzar el desierto; el viajero que ha visto el horror de la arena ardiente llega al agua fresca del amor y comprende para qué valió el camino.",
    "ConexionDoctrinal": ["Ley de Amor", "Unidad"],
    "NodosSimapticos": []
  },
  "1512: PÁRRAFO II: LEY DE AFINIDAD": {
    "PilotoDeCoherencia": "Atracción Espiritual. La ley de afinidad regula qué espíritus se atraen o rechazan, explicando las comunidades, los matrimonios y los grupos de estudio.",
    "CitaInelutable": "LEY DE AFINIDAD... prescindamos del infinito trabajo de esta ley sobre todas las cosas.",
    "EjemploPedagogico": "Un imán que solo atrae el hierro; no rechaza el plástico por odio, sino que la afinidad de substancias lo hace selectivo.",
    "ConexionDoctrinal": ["Ley de Afinidad", "Afinidad"],
    "NodosSimapticos": ["Ley de Afinidad"]
  },
  "1593: PÁRRAFO III: LEY DE JUSTICIA": {
    "PilotoDeCoherencia": "Ecuanimidad Cósmica. La justicia no es venganza ni capricho divino; es la ley de compensación que devuelve a cada espíritu exactamente lo que ha sembrado.",
    "CitaInelutable": "LEY DE JUSTICIA... ciega a los privilegios pero con ojos para cada acto.",
    "EjemploPedagogico": "La balanza de un laboratorio; no importa quién pone el peso, siempre indica el valor exacto; la justicia del universo mide con la misma precisión.",
    "ConexionDoctrinal": ["Ley de Justicia", "Karma Racional"],
    "NodosSimapticos": []
  },
  "1735: CAPÍTULO QUINTO.: ANTIGÜEDAD DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Precedencia Histórica. El espiritismo es tan antiguo como la primera chispa de conciencia; no nació con Kardec sino con la primera criatura que preguntó quién era.",
    "CitaInelutable": "ANTIGÜEDAD DEL ESPIRITISMO... tan antiguo como el Creador mismo.",
    "EjemploPedagogico": "La música; no la inventó ningún músico moderno; existía en el universo desde que las esferas comenzaron a vibrar.",
    "ConexionDoctrinal": ["Espiritismo (Antigüedad)", "Historia"],
    "NodosSimapticos": []
  },
  "1800: LIBRO I.: LA CREACIÓN": {
    "PilotoDeCoherencia": "Cosmogénesis Racional. La creación no es un acto mágico e instantáneo, sino el proceso eterno por el cual el Padre individualiza partículas de sí mismo.",
    "CitaInelutable": "LIBRO I.: LA CREACIÓN... el proceso eterno de la individualización.",
    "EjemploPedagogico": "Una célula que se divide; la madre no desaparece, sino que se multiplica; así el Creador crea: dando de sí mismo sin disminuirse.",
    "ConexionDoctrinal": ["Creación (Proceso)", "Emanación"],
    "NodosSimapticos": []
  },
  "1937: CAPÍTULO SEXTO.: POR QUÉ Y CÓMO MOISÉS PROHIBIÓ EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Estrategia Política. Moisés no prohibió el espiritismo por error o por maldad, sino como medida estratégica para evitar que su pueblo se contaminara con el espiritismo degenerado de Egipto.",
    "CitaInelutable": "POR QUÉ Y CÓMO MOISÉS PROHIBIÓ EL USO DEL ESPIRITISMO... su grandeza está en esa prohibición.",
    "EjemploPedagogico": "Un padre que prohíbe a su hijo menor frecuentar una taberna; no odia el vino, sino que protege al hijo de un ambiente que aún no está preparado para manejar.",
    "ConexionDoctrinal": ["Moisés (Estrategia)", "Prohibición Espiritista"],
    "NodosSimapticos": ["Moisés (Estrategia)"]
  },
  "2018: PÁRRAFO II: POR QUÉ MOISÉS PROHIBIÓ EL USO DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Razón de la Prohibición. El espiritismo practicado en Egipto era una herramienta de dominio y magia negra; Moisés lo prohibió para preservar la pureza de la ley.",
    "CitaInelutable": "POR QUÉ MOISÉS PROHIBIÓ EL USO DEL ESPIRITISMO... el Espiritismo egipcio era hechicería.",
    "EjemploPedagogico": "Prohibir la medicina charlatana en un hospital; no es que la medicina sea mala, sino que la versión corrupta que circulaba envenenaba a los pacientes.",
    "ConexionDoctrinal": ["Hechicería (Diferencia)", "Pureza Doctrinal"],
    "NodosSimapticos": []
  }
};

fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Ley Única (Monismo)": {
    "Definición": "Principio filosófico que afirma que una sola ley y una sola substancia rigen todo el universo, desde el átomo hasta el espíritu más evolucionado, eliminando toda dualidad artificial entre materia y espíritu.",
    "Contexto": "El Espiritismo Estudiado (Proclama, verso 3).",
    "Conexiones": ["Monismo", "Substancia", "Magnetismo"],
    "Obras": ["El Espiritismo Estudiado", "Filosofía Austera Racional"]
  },
  "Mundo de Expiación": {
    "Definición": "Designación de la Tierra como un plano de progreso y aprendizaje obligatorio para los espíritus que deben superar sus defectos a través de la experiencia material. No implica castigo divino sino evolución natural.",
    "Contexto": "El Espiritismo Estudiado (Cap. Tercero, Párrafo II).",
    "Conexiones": ["Evolución", "Karma", "Encarnación"],
    "Obras": ["El Espiritismo Estudiado", "Conócete a ti mismo"]
  },
  "120 Millones (Crimen Religioso)": {
    "Definición": "Cifra histórica citada por Trincado para documentar los muertos causados por la Iglesia Católica en 57 siglos de dominio. Usada como prueba forense de la naturaleza criminal del dogma religioso.",
    "Contexto": "El Espiritismo Estudiado (Cap. Tercero, Párrafo III).",
    "Conexiones": ["Inquisición", "Historia", "Justicia"],
    "Obras": ["El Espiritismo Estudiado"]
  },
  "Caín y Abel (Alegoría)": {
    "Definición": "Símbolos de las dos razas morales que coexisten en la humanidad: Abel representa al espíritu que trabaja y produce (el hombre racional y fraternal); Caín representa al parásito que vive del trabajo ajeno (el fanático, el especulador).",
    "Contexto": "El Espiritismo Estudiado (Cap. Segundo, Párrafo II).",
    "Conexiones": ["Razas Morales", "Trabajo", "Justicia"],
    "Obras": ["El Espiritismo Estudiado", "Conócete a ti mismo"]
  },
  "Moisés (Estrategia)": {
    "Definición": "Interpretación trincadista de Moisés como un maestro espiritual de alto grado que prohibió el espiritismo de su época no por ignorancia, sino para proteger a su pueblo del espiritismo degenerado y mágico de Egipto.",
    "Contexto": "El Espiritismo Estudiado (Cap. Sexto).",
    "Conexiones": ["Israel", "Protección", "Evolución"],
    "Obras": ["El Espiritismo Estudiado", "Buscando a Dios"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ RE-DESTILACIÓN Batch 1/4 (21 nodos 1:1). El Espiritismo Estudiado — Proclama y Primera Parte selladas. Esencia RESETEADA con claves exactas del content.json.');

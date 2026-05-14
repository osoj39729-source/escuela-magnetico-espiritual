const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/ley-de-las-mediumidades-en-general_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = {}; // RESET PURA 1:1
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Ley de las Mediumnidades (40 Nodos)
const nuevosNodos = {
  "001: LEY DE LAS MEDIUMNIDADES EN GENERAL (PROLOGO)": {
    "PilotoDeCoherencia": "Mandato de Unidad. Se establece la necesidad de un código único para el ejercicio de las facultades mediúmnicas, eliminando la anarquía y el misticismo.",
    "CitaInelutable": "LEY DE LAS MEDIUMNIDADES EN GENERAL... para el buen régimen de las comunicaciones.",
    "EjemploPedagogico": "Un código de señales de tráfico; si cada conductor decide qué significa el color rojo, el resultado es el caos y el choque; la ley unifica para que todos lleguen a destino.",
    "ConexionDoctrinal": ["Unidad de Práctica", "Disciplina"],
    "NodosSimapticos": []
  },
  "002: Art. 1. El espiritismo no es un oficio": {
    "PilotoDeCoherencia": "Dignidad del Misionero. Se prohíbe taxativamente el lucro con las facultades espirituales; el espiritismo es una misión de servicio y no una profesión mercantil.",
    "CitaInelutable": "Art. 1. El espiritismo no es un oficio... nadie puede percibir estipendio.",
    "EjemploPedagogico": "Un socorrista que ve a alguien ahogándose y pide que le firmen un cheque antes de lanzarse al agua; la misión de salvar vidas no admite el comercio del auxilio.",
    "ConexionDoctrinal": ["Gratuidad", "Misión"],
    "NodosSimapticos": ["Gratuidad (Espiritual)"]
  },
  "003: Art. 2. Ningún efecto medianímico es sobrenatural": {
    "PilotoDeCoherencia": "Naturalismo Integral. Se afirma que todo fenómeno mediúmnico responde a leyes físicas y naturales, rechazando cualquier interpretación mágica o milagrosa.",
    "CitaInelutable": "Art. 2. Ningún efecto medianímico puede ser ni estudiado, ni aclarado por leyes sobrenaturales.",
    "EjemploPedagogico": "La electricidad; para un salvaje puede parecer magia de los dioses, pero para el ingeniero es una fuerza natural sujeta a leyes de voltaje y resistencia.",
    "ConexionDoctrinal": ["Leyes Naturales", "Magnetismo"],
    "NodosSimapticos": []
  },
  "004: Art. 3. La sabiduría espiritista es un axioma": {
    "PilotoDeCoherencia": "Certeza Matemática. La doctrina no es una creencia ni una hipótesis, sino una verdad evidente que se demuestra por la razón y la lógica universal.",
    "CitaInelutable": "Art. 3. La sabiduría espiritista; no es una hipótesis: es un axioma.",
    "EjemploPedagogico": "La suma de los ángulos de un triángulo; no es algo que se 'crea', es una verdad geométrica ineludible que se impone a la inteligencia.",
    "ConexionDoctrinal": ["Axioma Doctrinal", "Razón"],
    "NodosSimapticos": ["Axioma Doctrinal"]
  },
  "005: Art. 4. Todo es ciencia espiritista": {
    "PilotoDeCoherencia": "Universalidad del Saber. No existe división entre ciencia 'profana' y 'espiritual'; toda verdad científica y filosófica racional es parte del espiritismo.",
    "CitaInelutable": "Art. 4. Es ciencia espiritista, todo lo que es ciencia y filosofía racional.",
    "EjemploPedagogico": "Un gran océano; los ríos de la biología, la física y la ética fluyen hacia él; no son aguas diferentes, son afluentes del mismo conocimiento universal.",
    "ConexionDoctrinal": ["Ciencia y Doctrina", "Unidad del Conocimiento"],
    "NodosSimapticos": []
  },
  "006: Art. 5. La sabiduría no admite lo irracional": {
    "PilotoDeCoherencia": "Filtro de la Razón. La doctrina rechaza cualquier concepto que no pueda ser comprendido por la inteligencia o que contradiga las leyes de la naturaleza.",
    "CitaInelutable": "Art. 5. La sabiduría espiritista no reconoce límites; no admite lo irracional ni lo absurdo.",
    "EjemploPedagogico": "Un filtro de agua pura; deja pasar el líquido vital pero retiene el barro y los parásitos; la razón es el filtro que retiene el dogma y deja pasar la verdad.",
    "ConexionDoctrinal": ["Racionalismo", "Anti-dogmatismo"],
    "NodosSimapticos": []
  },
  "007: Art. 6. Los medios de aclaración son las mediumnidades": {
    "PilotoDeCoherencia": "Herramientas de Estudio. Las facultades son los instrumentos de observación que permiten al espíritu encarnado investigar las realidades del mundo espiritual.",
    "CitaInelutable": "Art. 6. Los medios de aclaración del espiritismo son las mediumnidades.",
    "EjemploPedagogico": "Un microscopio para un biólogo; no es el fin del estudio, sino el aparato que le permite ver lo que el ojo humano normal no alcanza a percibir.",
    "ConexionDoctrinal": ["Mediumnidad (Definición)", "Observación"],
    "NodosSimapticos": ["Mediumnidad (Definición)"]
  },
  "008: Art. 7. La facultad acusa evolución": {
    "PilotoDeCoherencia": "Grado de Progreso. Poseer una facultad mediúmnica no es un privilegio divino, sino un síntoma del desarrollo y la madurez alcanzada por el espíritu en sus vidas pasadas.",
    "CitaInelutable": "Art. 7. El solo hecho de manifestar un ser una facultad medianímica, acusa su evolución.",
    "EjemploPedagogico": "Un joven que sabe tocar el piano sin haber tomado clases en esta vida; su habilidad acusa que ya lo estudió y practicó intensamente en el pasado.",
    "ConexionDoctrinal": ["Evolución", "Ley de Reencarnación"],
    "NodosSimapticos": []
  },
  "009: Art. 8. Deberes del médium en la transición": {
    "PilotoDeCoherencia": "Responsabilidad Histórica. Durante el cambio de era, los médiums deben ser guardianes de la verdad y evitar caer en las trampas del misticismo religioso.",
    "CitaInelutable": "Art. 8. Mientras dura el tiempo de la transición, deben los mediums... ser cautos.",
    "EjemploPedagogico": "Un mensajero en tiempos de guerra; lleva órdenes vitales y debe evitar ser capturado por el enemigo o desviarse del camino por falsas señales.",
    "ConexionDoctrinal": ["Transición (Era)", "Responsabilidad"],
    "NodosSimapticos": []
  },
  "010: Art. 9. La humildad del médium": {
    "PilotoDeCoherencia": "Austeridad Moral. El médium debe ser sencillo y evitar la vanidad, reconociendo que su facultad es una herramienta para el bien común y no para el orgullo personal.",
    "CitaInelutable": "Art. 9. Los mediums deben ser humildes, sin rebajamiento en su materia.",
    "EjemploPedagogico": "Un cartero que entrega una carta importante; no se cree el autor de la carta ni espera que lo adoren, simplemente cumple su deber con sencillez.",
    "ConexionDoctrinal": ["Humildad Racional", "Carácter"],
    "NodosSimapticos": []
  },
  "011: Art. 10. Dignidad de la investidura": {
    "PilotoDeCoherencia": "Conducta Ejemplar. Para ser digno de la comunicación con espíritus de luz, el médium debe mantener una vida privada y pública coherente con la ley de amor.",
    "CitaInelutable": "Art. 10. Los mediums, para conservar su investidura y ser dignos de los hermanos mayores.",
    "EjemploPedagogico": "Un embajador que representa a una nación noble; si se comporta como un delincuente en las calles, pierde el derecho a representar a su país y su investidura es retirada.",
    "ConexionDoctrinal": ["Afinidad", "Dignidad"],
    "NodosSimapticos": []
  },
  "012: Art. 11. Mediumnidades en la comuna": {
    "PilotoDeCoherencia": "Futuro de la Facultad. En la Comuna Universal, las facultades serán naturales en todos los hombres, eliminando la necesidad de 'médiums especiales' como los actuales.",
    "CitaInelutable": "Art. 11. Las mediumnidades, en la comuna, serán más numerosas y cada vez más conscientes.",
    "EjemploPedagogico": "El uso de la lectura; antes solo unos pocos sabían leer y eran 'especiales'; hoy todos leemos y la facultad se ha socializado y naturalizado.",
    "ConexionDoctrinal": ["Comuna Universal", "Progreso Natural"],
    "NodosSimapticos": []
  },
  "013: Art. 12. Mediumnidad en familia": {
    "PilotoDeCoherencia": "Orden Doméstico. Se regula el uso de facultades en el hogar para evitar el abuso o la falta de respeto hacia la solemnidad del acto espiritual.",
    "CitaInelutable": "Art. 12. Los mediums, en familia, harán uso de su facultad en las horas del descanso.",
    "EjemploPedagogico": "Una biblioteca en casa; es para el estudio y el silencio, no para jugar o hacer ruidos que molesten la concentración de quienes buscan la verdad.",
    "ConexionDoctrinal": ["Orden", "Sesiones Familiares"],
    "NodosSimapticos": []
  },
  "014: Art. 13. Médiums parlantes en la Comuna": {
    "PilotoDeCoherencia": "Necesidad de Preparación. Se advierte que al inicio de la Comuna no todos tendrán la facultad de hablar por los espíritus, requiriendo maestros que guíen el proceso.",
    "CitaInelutable": "Art. 13. Como al principio de la Comuna no puede haber mediums parlantes en todas las familias.",
    "EjemploPedagogico": "Una escuela nueva; no todos los alumnos pueden ser profesores el primer día; se necesita tiempo para que los más avanzados enseñen a los nuevos.",
    "ConexionDoctrinal": ["Maestros de Mediumnidad", "Aprendizaje"],
    "NodosSimapticos": []
  },
  "015: Art. 14. Prohibición de provocar fenómenos": {
    "PilotoDeCoherencia": "Respeto a la Ley. No se debe forzar la manifestación mediúmnica por curiosidad; el fenómeno debe ser una respuesta natural a una necesidad de estudio o consuelo.",
    "CitaInelutable": "Art. 14. Ningún fenómeno debe provocarse en una reunión de familia.",
    "EjemploPedagogico": "Llamar a un médico solo para ver cómo funciona su maletín; es una falta de respeto al médico y al tiempo de los enfermos que sí lo necesitan.",
    "ConexionDoctrinal": ["Justicia", "Seriedad"],
    "NodosSimapticos": []
  },
  "016: Art. 15. El fin de la mediumnidad es el estudio": {
    "PilotoDeCoherencia": "Propósito Educativo. El objetivo de las facultades es el progreso intelectual y moral de la humanidad, no el espectáculo ni la adivinación.",
    "CitaInelutable": "Art. 15. Como el fin que los hermanos mayores se propusieron... es el estudio racional.",
    "EjemploPedagogico": "Un telescopio; su fin es estudiar las estrellas para entender el universo, no usarlo para espiar por la ventana del vecino por simple curiosidad.",
    "ConexionDoctrinal": ["Pedagogía Espiritual", "Progreso"],
    "NodosSimapticos": []
  },
  "017: Art. 16. Clasificación de facultades intelectuales": {
    "PilotoDeCoherencia": "Tipología Mediúmnica. Se definen las facultades de escritura y comunicación hablada como las más eficaces para la transmisión de la doctrina.",
    "CitaInelutable": "Art. 16. La escritura mecánica, la intuitiva y la comunicación hablada.",
    "EjemploPedagogico": "Diferentes tipos de impresoras; unas son más rápidas (mecánicas), otras interpretan mejor el color (intuitivas), pero todas sirven para poner el pensamiento en papel.",
    "ConexionDoctrinal": ["Escritura Mecánica", "Escritura Intuitiva"],
    "NodosSimapticos": ["Escritura Mecánica", "Escritura Intuitiva"]
  },
  "018: Art. 17. Facultades curativas": {
    "PilotoDeCoherencia": "Magnetismo de Amor. La capacidad de sanar es un producto del amor y la voluntad, canalizando fluidos vitales para restaurar el equilibrio de la materia.",
    "CitaInelutable": "Art. 17. Las facultades curativas son el producto del amor.",
    "EjemploPedagogico": "Una transfusión de sangre; el donante entrega parte de su vida por amor al prójimo; el sanador entrega su fluido magnético para que el otro recupere la salud.",
    "ConexionDoctrinal": ["Magnetismo Curativo", "Amor"],
    "NodosSimapticos": ["Magnetismo Curativo"]
  },
  "019: Art. 18. Videncia y desdoblamiento": {
    "PilotoDeCoherencia": "Facultades de Investigación. Son las herramientas que permiten ver el mundo espiritual y viajar con el espíritu fuera del cuerpo físico.",
    "CitaInelutable": "Art. 18. La videncia y el desdoblamiento son las dos facultades mayores.",
    "EjemploPedagogico": "Un periscopio en un submarino (videncia) y un buzo que sale del submarino para explorar el fondo del mar (desdoblamiento).",
    "ConexionDoctrinal": ["Videncia", "Desdoblamiento"],
    "NodosSimapticos": ["Videncia", "Desdoblamiento"]
  },
  "020: Art. 19. Sonambulismo consciente": {
    "PilotoDeCoherencia": "Grado Superior. Una facultad especial que requiere el desdoblamiento y permite una comunicación directa y lúcida con el plano espiritual.",
    "CitaInelutable": "Art. 19. Hay la facultad sonambúlica consciente... un caso único y una misión.",
    "EjemploPedagogico": "Un puente levadizo que se mantiene firme y abierto para que la comunicación fluya en ambos sentidos sin que el tráfico se detenga ni se pierda.",
    "ConexionDoctrinal": ["Sonambulismo", "Conciencia"],
    "NodosSimapticos": []
  },
  "021: Art. 20. Deberes de los maestros": {
    "PilotoDeCoherencia": "Responsabilidad Pedagógica. Los maestros deben guiar el desarrollo de las facultades con discernimiento, evitando el fanatismo o el error.",
    "CitaInelutable": "Art. 20. Los maestros deben inculcar todos los conocimientos de que ellos son depositarios.",
    "EjemploPedagogico": "Un instructor de vuelo; no puede dejar que el alumno despegue solo si no conoce los instrumentos; su deber es enseñar con paciencia y rigor.",
    "ConexionDoctrinal": ["Maestros de Mediumnidad", "Discernimiento"],
    "NodosSimapticos": []
  },
  "022: Art. 21. Fuerza Psíquica y Telepatía": {
    "PilotoDeCoherencia": "Dinamismo Mental. Se analiza la telepatía como un resultado de la fuerza psíquica, advirtiendo sobre su mal uso por ignorancia.",
    "CitaInelutable": "Art. 21. La fuerza Psíquica da como primer resultado la transmisión del pensamiento.",
    "EjemploPedagogico": "Una antena de radio; si no está bien sintonizada, capta ruido y confunde; bien usada, permite una comunicación instantánea a gran distancia.",
    "ConexionDoctrinal": ["Telepatía", "Fuerza Psíquica"],
    "NodosSimapticos": []
  },
  "023: Art. 22. Magnetismo e Hipnotismo": {
    "PilotoDeCoherencia": "Espada de dos filos. Estas fuerzas pueden usarse para el bien o el mal; el maestro debe enseñar su peligro y su correcta aplicación.",
    "CitaInelutable": "Art. 22. Los maestros deben hacer comprender... que el magnetismo y el hipnotismo es la espada de dos filos.",
    "EjemploPedagogico": "Un bisturí; en manos del cirujano salva vidas; en manos de un ignorante puede causar heridas mortales; la diferencia está en el conocimiento y el fin.",
    "ConexionDoctrinal": ["Magnetismo", "Hipnotismo"],
    "NodosSimapticos": []
  },
  "024: Art. 23. Defensa de la Justicia": {
    "PilotoDeCoherencia": "Armas de Luz. El uso de facultades psíquicas contra la injusticia no es contrario al amor, sino una necesidad en la batalla por la verdad.",
    "CitaInelutable": "Art. 23. No es contrario a la ley de amor... son armas que debemos blandir.",
    "EjemploPedagogico": "Un escudo que detiene una flecha envenenada; usar el escudo no es odiar, es proteger la vida contra quien intenta destruirla.",
    "ConexionDoctrinal": ["Justicia", "Defensa Doctrinal"],
    "NodosSimapticos": []
  },
  "025: Art. 24. Comisión Investigadora": {
    "PilotoDeCoherencia": "Auditoría de Facultades. Creación de un organismo técnico para evaluar y juzgar la autenticidad y el uso de las mediumnidades.",
    "CitaInelutable": "Art. 24. A los efectos de los dos artículos anteriores, constitúyase una comisión investigadora.",
    "EjemploPedagogico": "Un tribunal de ética médica; revisa que los profesionales cumplan con la ley y no engañen a los pacientes por beneficio propio.",
    "ConexionDoctrinal": ["Tribunales de Cátedra", "Vigilancia"],
    "NodosSimapticos": []
  },
  "026: Art. 25. Vigencia de las normas de defensa": {
    "PilotoDeCoherencia": "Temporalidad de la Batalla. Las normas estrictas de defensa estarán vigentes hasta que las generaciones del juicio hayan pasado y la Comuna esté firme.",
    "CitaInelutable": "Art. 25. Los artículos 22, 23 y 24, no tienen aplicación después del establecimiento de la comuna.",
    "EjemploPedagogico": "Las leyes de un estado de sitio; son necesarias mientras dura la emergencia, pero desaparecen cuando vuelve la paz y la seguridad.",
    "ConexionDoctrinal": ["Tres Generaciones (Sentencia)", "Transición"],
    "NodosSimapticos": []
  },
  "027: Art. 26. Unión de pensamiento en la sesión": {
    "PilotoDeCoherencia": "Convergencia Vibratoria. Todos los asistentes deben unirse al pensamiento del director para formar una fuerza magnética única y poderosa.",
    "CitaInelutable": "Art. 26. En las reuniones deben observar la mayor unión de pensamientos.",
    "EjemploPedagogico": "Un coro; si cada cantante sigue su propio ritmo y melodía, solo hay ruido; si todos siguen al director, la armonía es perfecta y el mensaje llega con fuerza.",
    "ConexionDoctrinal": ["Unión de Pensamiento", "Sesiones"],
    "NodosSimapticos": []
  },
  "028: Art. 27. El Pedido Espontáneo": {
    "PilotoDeCoherencia": "Sinceridad del Alma. Se rechazan las oraciones formuladas y rutinarias; el pedido al Padre debe nacer del sentimiento real del momento.",
    "CitaInelutable": "Art. 27. El pedido se hace conforme a la inspiración y sentimientos, y no se debe tener una fórmula.",
    "EjemploPedagogico": "Hablar con un amigo íntimo; no usas un guion escrito de antemano, sino que le dices lo que sientes y necesitas con tus propias palabras.",
    "ConexionDoctrinal": ["Sentimiento", "Anti-ritualismo"],
    "NodosSimapticos": []
  },
  "029: Art. 28. Médiums Moralistas y Científicos": {
    "PilotoDeCoherencia": "Especialización Mediúmnica. Se reconoce que existen diferentes tipos de médiums y se debe respetar la función de cada uno para el progreso colectivo.",
    "CitaInelutable": "Art. 28. Entre los mediums parlantes, los hay moralistas y científicos.",
    "EjemploPedagogico": "Una universidad; tiene profesores de ética y profesores de física; ambos son necesarios para una educación completa y no deben confundirse sus tareas.",
    "ConexionDoctrinal": ["Especialización", "Ciencia Espiritista"],
    "NodosSimapticos": []
  },
  "030: Art. 29. Descubrimientos para la Comuna": {
    "PilotoDeCoherencia": "Tecnología Espiritual. Los médiums de desdoblamiento deben traer secretos de otros mundos para el bienestar material y espiritual de la sociedad.",
    "CitaInelutable": "Art. 29. Son muy grandes los descubrimientos que hemos de conseguir para el bien de la Comuna.",
    "EjemploPedagogico": "Un satélite que envía imágenes de recursos naturales que no podemos ver desde el suelo; los médiums son los satélites que traen información de lo lejano.",
    "ConexionDoctrinal": ["Comuna Universal", "Progreso Tecnológico"],
    "NodosSimapticos": []
  },
  "031: Art. 30. El Médium como Misionero": {
    "PilotoDeCoherencia": "Abnegación Social. El médium no se pertenece a sí mismo, es un servidor de sus hermanos y debe ser tratado con amor por su sacrificio.",
    "CitaInelutable": "Art. 30. Los mediums son misioneros, y como tales, no se pertenecen a sí mismos.",
    "EjemploPedagogico": "Un bombero de guardia; su tiempo y su fuerza están al servicio de la comunidad; si surge un incendio, él debe estar listo para responder por los demás.",
    "ConexionDoctrinal": ["Misionero", "Amor Fraternal"],
    "NodosSimapticos": []
  },
  "032: Art. 31. Crítica al Histerismo": {
    "PilotoDeCoherencia": "Salud Mental del Médium. Se refuta la tesis materialista que asocia la mediumnidad con enfermedades mentales o histeria.",
    "CitaInelutable": "Art. 31. Las mediumnidades no son efectos de histerismo.",
    "EjemploPedagogico": "Un músico virtuoso que parece 'entrar en trance' al tocar; no es que esté enfermo, es que su sensibilidad y técnica están en un nivel superior de concentración.",
    "ConexionDoctrinal": ["Ciencia Médica (Crítica)", "Salud"],
    "NodosSimapticos": []
  },
  "033: Art. 32. La Razón del Médium": {
    "PilotoDeCoherencia": "Equilibrio Psicológico. El uso correcto de la facultad no causa locura; al contrario, la insidia y el prejuicio son los que dañan la mente de quienes reprimen su don.",
    "CitaInelutable": "Art. 32. Jamás un médium desarrollado ha perdido su razón.",
    "EjemploPedagogico": "Un atleta que corre todos los días; su cuerpo se vuelve más fuerte y sano; la locura sería obligarlo a quedarse quieto y encerrado para siempre.",
    "ConexionDoctrinal": ["Razón", "Desarrollo Facultativo"],
    "NodosSimapticos": []
  },
  "034: Art. 33. Prohibición de la Curiosidad": {
    "PilotoDeCoherencia": "Seriedad Espiritual. Se prohíbe el uso de la facultad para asuntos banales o materiales, ordenando a los espíritus de luz no responder a tales pedidos.",
    "CitaInelutable": "Art. 33. Quedan prohibidas las evocaciones de curiosidad y puramente materiales.",
    "EjemploPedagogico": "Una línea telefónica de emergencia; si la usas para preguntar qué tiempo hace en otra ciudad, estás bloqueando la línea para alguien que realmente necesita ayuda.",
    "ConexionDoctrinal": ["Ética Mediúmnica", "Luz"],
    "NodosSimapticos": []
  },
  "035: Art. 34. Control del Maestro": {
    "PilotoDeCoherencia": "Autoridad de Cátedra. Nadie puede interrogar a un espíritu sin permiso del maestro, quien garantiza el orden y la justicia de la comunicación.",
    "CitaInelutable": "Art. 34. Todo asistente a una sesión, no hará pregunta alguna... sin antes exponerla al maestro.",
    "EjemploPedagogico": "Un moderador en un debate; asegura que las preguntas sean pertinentes y respetuosas para que el diálogo sea constructivo y no se desvíe en ataques personales.",
    "ConexionDoctrinal": ["Maestros de Cátedra", "Orden"],
    "NodosSimapticos": []
  },
  "036: Art. 35. La Firma de la Verdad": {
    "PilotoDeCoherencia": "Responsabilidad del Espíritu. Todo comunicante debe identificarse con su nombre real o popular para que su mensaje pueda ser evaluado y sostenido.",
    "CitaInelutable": "Art. 35. Estamos en la era de la verdad, y todo comunicante debe firmar su comunicación.",
    "EjemploPedagogico": "Un artículo científico; debe ir firmado por el autor para que la comunidad pueda verificar los datos y el autor se haga responsable de sus afirmaciones.",
    "ConexionDoctrinal": ["Identidad Espiritual", "Soberanía"],
    "NodosSimapticos": []
  },
  "037: Art. 36. La Alegría como Síntoma": {
    "PilotoDeCoherencia": "Vibración Elevada. El espiritismo es luz y amor; por lo tanto, la alegría es la señal de una sesión bien orientada, alejando el misticismo triste y fúnebre.",
    "CitaInelutable": "Art. 36. En todas las reuniones, la alegría es el mejor síntoma del conocimiento del acto.",
    "EjemploPedagogico": "Una fiesta de bienvenida para un ser querido que vuelve de un largo viaje; no hay llantos de pena, sino abrazos de felicidad por el reencuentro.",
    "ConexionDoctrinal": ["Alegría", "Afinidad de Amor"],
    "NodosSimapticos": []
  },
  "038: Art. 37. Hermandad Familiar": {
    "PilotoDeCoherencia": "Naturalidad Afectiva. En las reuniones de familia, el trato con los espíritus afines debe ser de plena confianza y cariño, como entre hermanos de sangre.",
    "CitaInelutable": "Art. 37. En las reuniones familiares... deben explayarse en la más franca hermandad.",
    "EjemploPedagogico": "Sentarse a la mesa con tus hermanos y padres a charlar sobre los problemas del día; no hay protocolos rígidos, solo el deseo de ayudarse y compartir.",
    "ConexionDoctrinal": ["Afinidad", "Familia Espiritual"],
    "NodosSimapticos": []
  },
  "039: Art. 38. El Amor como Norma": {
    "PilotoDeCoherencia": "Sello del Código. Se establece que el Amor es la base y la norma suprema que debe regir todo acto mediúmnico y social.",
    "CitaInelutable": "Art. 38. Cúmplanse todos los artículos... sea ante todo y en todo, vuestra norma, el Amor.",
    "EjemploPedagogico": "La clave de sol en una partitura; sin ella, las notas no tienen sentido ni orden; el amor es la clave que da sentido a todas las leyes humanas.",
    "ConexionDoctrinal": ["Amor", "Ley Única"],
    "NodosSimapticos": []
  },
  "040: EL MAESTRO JUEZ (EPILOGO)": {
    "PilotoDeCoherencia": "Veredicto de Unidad. Se cierra el código recordando que la metodología debe ser única y expansiva, basada en el raciocinio y no en la fe ciega.",
    "CitaInelutable": "EL MAESTRO JUEZ... metodología también única, pero expansiva en todo lo que sea raciocinio.",
    "EjemploPedagogico": "El broche de oro de una joya; asegura que todas las piezas anteriores se mantengan unidas y cumplan su función de belleza y valor.",
    "ConexionDoctrinal": ["Raciocinio", "Unidad de Práctica"],
    "NodosSimapticos": []
  }
};

fs.writeFileSync(esenciaPath, JSON.stringify(nuevosNodos, null, 2), 'utf8');

const terminosDic = {
  "Ley de las Mediumnidades (Código)": {
    "Definición": "Conjunto de 38 artículos y normativas dictadas por Joaquín Trincado para regular el ejercicio de las facultades espirituales, eliminando el misticismo, el lucro y la anarquía en las sesiones de estudio.",
    "Contexto": "Ley de las Mediumnidades en General.",
    "Conexiones": ["Mediumnidad", "Disciplina", "Amor"],
    "Obras": ["Ley de las Mediumnidades en General"]
  },
  "Maestro de Mediumnidad": {
    "Definición": "Cargo de responsabilidad dentro de la Escuela que implica guiar el desarrollo de las facultades de los hermanos, aplicando el discernimiento racional y la vigilancia contra el error religioso.",
    "Contexto": "Ley de las Mediumnidades en General.",
    "Conexiones": ["Discernimiento", "Investidura", "Docencia"],
    "Obras": ["Ley de las Mediumnidades en General", "Reglamento Interno"]
  },
  "Escritura Mecánica": {
    "Definición": "Facultad mediúmnica donde el espíritu actúa directamente sobre el sistema motor del médium para escribir mensajes. Se considera una de las formas más puras de transmisión doctrinal por la mínima interferencia consciente.",
    "Contexto": "Ley de las Mediumnidades en General (Art. 16).",
    "Conexiones": ["Mediumnidad Intelectual", "Doctrina", "Fenómeno"],
    "Obras": ["Ley de las Mediumnidades en General", "El Espiritismo Estudiado"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ RE-DESTILACIÓN COMPLETADA: Ley de las Mediumnidades ahora es 1:1 con 40 nodos puros.');

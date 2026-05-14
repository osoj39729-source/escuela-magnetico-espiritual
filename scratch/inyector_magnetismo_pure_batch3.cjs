const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - El Magnetismo en su Origen (Batch 3 - Claves 23 a 32)
const nuevosNodos = {
  "897: EL MAGNETISMO EN LAS ENFERMEDADES": {
    "PilotoDeCoherencia": "Requisitos para curar por magnetismo. Trincado establece dos condiciones absolutas: la idoneidad moral/técnica del operador y la 'accesibilidad' del enfermo (afinidad). Si el enfermo no es accesible magnéticamente, la curación física se detiene y solo procede la influencia espiritual.",
    "CitaInelutable": "Dos son las condiciones necesarias para curar... que el operador este en las condiciones de la sección (7°); y la segunda, que el enfermo sea accesible.",
    "EjemploPedagogico": "No puedes encender un foco fundido (enfermo inaccesible) por mucha corriente (magnetismo) que le envíes. La curación requiere un enchufe limpio y un cable intacto.",
    "ConexionDoctrinal": ["Accesibilidad del Enfermo", "Requisitos de Curación", "Afinidad Terapéutica"],
    "NodosSimapticos": ["Foco Fundido", "Afinidad Curativa"]
  },
  "954: LA REGENERACIÓN POR EL MAGNETISMO": {
    "PilotoDeCoherencia": "Axioma sobre la vulnerabilidad magnética. Se reconoce que el magnetizado queda bajo el poder absoluto del magnetizador. Este es el gran peligro del mal uso. Sin embargo, el Método Supremo elimina este peligro al imponer la rectitud moral antes que la mecánica operativa.",
    "CitaInelutable": "El Magnetizado queda bajo el poder del magnetizador... Es aquí donde existe el peligro del mal uso del magnetismo, pero que, ese peligro desaparece en todos los discípulos del Método Supremo.",
    "EjemploPedagogico": "Magnetizar es como darle a un extraño el control remoto de tu coche mientras vas a 100 km/h. Por eso la Escuela exige que el conductor remoto sea de moral intachable.",
    "ConexionDoctrinal": ["Peligro de Dominación", "Poder del Magnetizador", "Freno Moral"],
    "NodosSimapticos": ["Control Remoto del Alma", "Vulnerabilidad Sonambúlica"]
  },
  "1039: LECCIÓN SEXTA: GRADOS ESENCIALES DEL MAGNETISMO 1°- Sopor letárgico.": {
    "PilotoDeCoherencia": "Clasificación oficial de los 6 grados del Método Supremo: 1° Sopor letárgico, 2° Sueño inconsciente, 3° Sueño consciente (Catalepsia), 4° Sonambulismo verbal, 5° Telepatía consciente, 6° Desdoblamiento Sonambúlico. Trincado rechaza grados inferiores inútiles y asienta estos como la escala recta.",
    "CitaInelutable": "1°- Sopor letárgico. 2°- Sueño inconsciente. 3°- Sueño consciente. 4°- Sonambulismo verbal. 5°- Telepatía consciente a distancia. 6°- Desdoblamiento Sonambúlico.",
    "EjemploPedagogico": "Es la escalera de 6 peldaños para salir del cuerpo. Empiezas sintiendo sueño pesado (letargo) y terminas caminando por el espacio astral de forma consciente (desdoblamiento).",
    "ConexionDoctrinal": ["Los 6 Grados del Método", "Escalera Magnética"],
    "NodosSimapticos": ["Escala de Trance"]
  },
  "1068: GRADO PRIMERO: Sopor letárgico": {
    "PilotoDeCoherencia": "Definición del 1er Grado (Sopor). Es la etapa inicial donde se demuestra un suave y dulce desvanecimiento. El alma siente satisfacción y aletarga a la materia del cuerpo, la cual cede al influjo magnético.",
    "CitaInelutable": "Llamamos sopor o letargo, porque... se demuestran con la característica de los soporíficos; un suave y dulce desvanecimiento que aletarga por la satisfacción del alma a la materia.",
    "EjemploPedagogico": "Es como el momento justo antes de quedarse dormido en tu cama; el cuerpo pesa, los músculos se aflojan, pero aún estás ahí.",
    "ConexionDoctrinal": ["Sopor Letárgico", "Relajación Inicial"],
    "NodosSimapticos": ["Peso Dulce", "Aflojamiento Material"]
  },
  "1101: GRADO SEGUNDO: Sueño inconsciente": {
    "PilotoDeCoherencia": "Definición del 2do Grado (Sueño inconsciente). El espíritu ya sale a la superficie del cuerpo pero 'no se atreve a dejar la materia'. En este estado se puede soltar el habla mecánicamente, pero sin conciencia plena del espíritu libre.",
    "CitaInelutable": "Este grado no se diferencia del anterior, sino en que ya el espíritu sale a la superficie, aunque no se atreve a dejar la materia... por si acaso.",
    "EjemploPedagogico": "Es como asomarse a la ventana de tu casa. Ves el exterior (el espíritu está en la superficie) pero tienes miedo de salir por la puerta.",
    "ConexionDoctrinal": ["Sueño Inconsciente", "Afloramiento del Espíritu", "Límite del Miedo"],
    "NodosSimapticos": ["Asomarse a la Ventana", "Frontera del Trance"]
  },
  "1116: GRADO TERCERO (PROLOGO A LA TERCERA EDICION: A la TERCERA has llegado con gloria HUMILDE MISIONERO MUDO para no poder)": {
    "PilotoDeCoherencia": "Definición del 3er Grado (Sueño profundo consciente o Catalepsia). El magnetizado entra voluntariamente en trance profundo. Su alma sale a la superficie y actúa como 'traje' (periespíritu) para el espíritu, sabiendo que es un instrumento de provecho.",
    "CitaInelutable": "Llamo sueño consciente a ese trance, porque el magnetizado entra en él profundamente, por su voluntad y conciencia... sale a la superficie el alma, sirviendo de periespíritu al espíritu.",
    "EjemploPedagogico": "El sujeto ya no solo se asoma a la ventana; abre la puerta y sale con su 'abrigo' de alma (periespíritu) a trabajar conscientemente con el magnetizador.",
    "ConexionDoctrinal": ["Catalepsia Trincadista", "Sueño Consciente", "El Alma como Traje"],
    "NodosSimapticos": ["Abrigo del Espíritu", "Catalepsia Voluntaria"]
  },
  "1143: GRADO CUARTO: Sonambulismo lúcido o verbal": {
    "PilotoDeCoherencia": "Definición del 4to Grado (Sonambulismo Lúcido). Es el nivel más anhelado ('desiderátum') por los magnetizadores generales. En este estado, el médium habla clara y lúcidamente sobre lo que su espíritu ve sin las trabas del cuerpo físico.",
    "CitaInelutable": "Sonambulismo lúcido o verbal. Como en general, este grado es el desiderátum de todos los magnetizadores, es muy bello y provechoso.",
    "EjemploPedagogico": "El cuerpo físico duerme en la silla, pero la boca sirve como un teléfono que transmite en vivo todo lo que el espíritu está viendo y aprendiendo en el plano astral.",
    "ConexionDoctrinal": ["Sonambulismo Verbal", "Lucidez Extrafísica", "El Desiderátum Magnético"],
    "NodosSimapticos": ["Teléfono del Alma", "Trasmisión en Vivo"]
  },
  "1196: GRADO QUINTO: Telepatía consciente a distancia": {
    "PilotoDeCoherencia": "Definición del 5to Grado (Telepatía a distancia). Superado el magnetismo físico de contacto, el operador dirige su pensamiento a la distancia para curar o comunicar. Se requiere un instrumento probado por su virtud y pasividad.",
    "CitaInelutable": "Telepatía consciente a distancia. Este grado es ya muy elevado... una vez que tenéis la seguridad de la bondad del instrumento (por su virtud y pasividad).",
    "EjemploPedagogico": "Ya no necesitas tocar al paciente. El pensamiento viaja por el Éter como una señal de radio ininterrumpida y llega al cerebro del paciente a 1000 kilómetros de distancia.",
    "ConexionDoctrinal": ["Telepatía Dirigida", "Operación a Distancia", "Ondas del Pensamiento"],
    "NodosSimapticos": ["Radio Mental", "Curación sin Fronteras"]
  },
  "1227: GRADO SEXTO: Desdoblamiento Sonambúlico": {
    "PilotoDeCoherencia": "El 6to Grado, la cumbre del magnetismo. En el desdoblamiento, el magnetismo puro se fusiona con el 'Espiritismo puro'. El espíritu del sonámbulo sale, viaja, observa hechos a distancia e incluso puede materializarse o accionar físicamente donde se proyecta.",
    "CitaInelutable": "Desdoblamiento Sonambúlico. Este grado ya entra de lleno en el Espiritismo puro... estando presenciando los hechos y dejándose ver materializado.",
    "EjemploPedagogico": "El espíritu se proyecta como un holograma en otra ciudad. Puede ver lo que pasa allá, e incluso mover un objeto o dejarse ver por los presentes, mientras su cuerpo duerme en casa.",
    "ConexionDoctrinal": ["Desdoblamiento Sonambúlico", "Culminación del Magnetismo", "Espiritismo Puro"],
    "NodosSimapticos": ["Holograma Espiritual", "Viaje Extracorpóreo"]
  },
  "1292: LECCIÓN SÉPTIMA: CONDICIONES DEL MAGNETIZADOR": {
    "PilotoDeCoherencia": "Las exigencias absolutas para operar. Trincado reduce todas las condiciones a dos mandatos de piedra: Sabiduría ('Conócete a ti mismo') y Moralidad ('Ama a tu hermano'). Sin estas bases, cualquier intento magnético es hechicería o imprudencia.",
    "CitaInelutable": "Las condiciones del magnetizador, todas las podemos reducir a una sola condición: 'conócete a ti mismo', como sabiduría; y a otro mandato como moralidad: 'ama a tu hermano'.",
    "EjemploPedagogico": "Un magnetizador sin conocimiento de sí mismo es como un ciego conduciendo un autobús escolar. Un magnetizador sin amor es un dictador con un arma cargada.",
    "ConexionDoctrinal": ["Conócete a ti Mismo", "Ama a tu Hermano", "Base Moral del Operador"],
    "NodosSimapticos": ["Bus Escolar Ciego", "Cimientos del Magnetizador"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Los 6 Grados del Magnetismo": {
    "Definición": "La escala técnica y progresiva establecida por el Método Supremo para el control de la fuerza magnética: 1) Sopor letárgico, 2) Sueño inconsciente, 3) Sueño consciente (Catalepsia), 4) Sonambulismo verbal, 5) Telepatía a distancia, 6) Desdoblamiento sonambúlico.",
    "Contexto": "Lección Sexta de El Magnetismo en su Origen.",
    "Conexiones": ["Trance", "Método Supremo", "Desdoblamiento"],
    "Obras": ["El Magnetismo en su Origen"]
  },
  "El Alma como Traje": {
    "Definición": "Concepto anatómico espiritual que define al Alma (el periespíritu) no como el ser pensante en sí mismo, sino como la envoltura, el abrigo o el vehículo electromagnético que el Espíritu utiliza para salir del cuerpo físico en estado de desdoblamiento o catalepsia.",
    "Contexto": "Explicación del Grado Tercero en El Magnetismo en su Origen.",
    "Conexiones": ["Periespíritu", "Espíritu vs Alma", "Catalepsia"],
    "Obras": ["El Magnetismo en su Origen", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos PURA CALIDAD 1:1 de El Magnetismo en su Origen (Batch 3) y 2 términos sinápticos.');

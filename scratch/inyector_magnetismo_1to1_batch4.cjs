const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-magnetismo-en-su-origen_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - El Magnetismo en su Origen (Batch 4 - Modus Operandi y Trances Ascensionales)
const nuevosNodos = {
  "1771: LECCIÓN PRIMERA: PREPARACIÓN DEL TRANCE": {
    "PilotoDeCoherencia": "La preparación física y moral del acto magnético. El Maestro indica sentarse frente al discípulo con contacto de rodillas y luz adecuada. Antes de la acción magnética, debe haber una acción verbal suave para ganar la confianza y explicar la elevada finalidad del trabajo. La afinidad moral precede al contacto fluídico.",
    "CitaInelutable": "La preparación del trance comienza en el alma antes de pasar por las manos.",
    "EjemploPedagogico": "Es como preparar la tierra antes de sembrar: no puedes arrojar la semilla magnética sobre una mente tensa y desconfiada; debes arar la confianza con la palabra dulce.",
    "ConexionDoctrinal": ["Modus Operandi", "Preparación Moral", "Afinidad"],
    "NodosSimapticos": ["Arado de Confianza", "Contacto Previo", "Luz y Serenidad"]
  },
  "1796: LECCIÓN SEGUNDA: ESTABLECER LA CORRIENTE": {
    "PilotoDeCoherencia": "La mecánica del establecimiento de la corriente magnética. Toma de manos, mirada fija al arranque de la nariz, y llamado mental a las fuerzas cósmicas. El operador satura al discípulo con soplos tenues y calor magnético para aislarlo de influencias extrañas, logrando la saturación (el trance) en pocos minutos.",
    "CitaInelutable": "El magnetizador es un puente entre las fuerzas de la cosmogonía y el cuerpo del discípulo.",
    "EjemploPedagogico": "Es como conectar dos cables para pasar corriente de una batería grande a una pequeña. Las manos y los ojos son los bornes de conexión; la voluntad es el interruptor.",
    "ConexionDoctrinal": ["Mecánica del Trance", "Mirada y Manos", "Saturación Fluídica"],
    "NodosSimapticos": ["Bornes de Conexión", "Corriente Cósmica", "Aislamiento Magnético"]
  },
  "1841: LECCIÓN TERCERA: GRADOS ASCENSIONALES": {
    "PilotoDeCoherencia": "Advertencia sobre la dirección segura del discípulo a través de los grados. Tras lograr el sopor y el sueño inconsciente (grados 1 y 2), el operador debe consolidar el triunfo mecánico preparándose para iniciar la etapa telepática consciente. Se exige repetir los primeros grados hasta dominarlos antes de ascender.",
    "CitaInelutable": "No se llega a la cima de un salto; se asienta cada paso antes de dar el siguiente.",
    "EjemploPedagogico": "Es como el buceo: no puedes bajar a 50 metros en la primera inmersión sin riesgo de daño. Debes aclimatar el cuerpo (el periespíritu) a cada nivel de profundidad.",
    "ConexionDoctrinal": ["Ascenso Gradual", "Seguridad del Discípulo", "Dominio Mecánico"],
    "NodosSimapticos": ["Aclimatación Fluídica", "Buceo del Alma", "Pasos Seguros"]
  },
  "1856: GRADO TERCERO: SUEÑO TELEPÁTICO": {
    "PilotoDeCoherencia": "Es el grado de bachiller del educando. El operador debe abandonar las fórmulas empíricas impositivas ('Yo mando', 'Yo ordeno') que generan rebeldía. La voluntad del sonámbulo debe ceder ante la Razón y la Justicia, no ante la esclavitud. Una fórmula exhortativa y amorosa garantiza la obediencia firme.",
    "CitaInelutable": "El espíritu no obedece al látigo del amo, obedece a la luz del maestro.",
    "EjemploPedagogico": "Es como domar un caballo: si lo haces a golpes, te tirará apenas te descuides; si lo domas con afecto y firmeza, te llevará al fin del mundo. El magnetizador rige, no esclaviza.",
    "ConexionDoctrinal": ["Grado Telepático", "Contra la Imposición", "Exhortación Amorosa"],
    "NodosSimapticos": ["Doma por Amor", "Látigo vs Luz", "Bachillerato Espiritual"]
  },
  "1932-1934: LECCIÓN CUARTA: SONAMBULISMO VERBAL": {
    "PilotoDeCoherencia": "El triunfo del método: el discípulo habla en trance. Aquí comienzan las 'pruebas de fidelidad'. El operador debe abstraer su mente (pensar en otra cosa o leer) para asegurarse de que el sonámbulo relata lo que realmente ve a distancia, y no simplemente leyendo el pensamiento del maestro.",
    "CitaInelutable": "El verdadero sonámbulo ve con sus propios ojos astrales, no con la mente prestada del operador.",
    "EjemploPedagogico": "Es como pedirle a un alumno que resuelva un problema mientras tú miras a la pared. Si mira tu hoja, te está copiando (telepatía simple); si lo resuelve solo, ha aprendido (videncia real).",
    "ConexionDoctrinal": ["Prueba de Fidelidad", "Abstracción del Operador", "Visión Real"],
    "NodosSimapticos": ["Alumno sin Copia", "Independencia Visual", "Triunfo del Método"]
  },
  "1986-1988: LECCIÓN QUINTA: TELEPATÍA CONSCIENTE": {
    "PilotoDeCoherencia": "El uso ejecutivo y solidario del trance. Tras probar al instrumento, maestro y discípulo unen sus potencias en sesión para transmitir sugerencias protectoras o directivas hacia terceros (a una hora fija). Esta operación exige profunda responsabilidad y a menudo activa de forma inconsciente el desdoblamiento del médium.",
    "CitaInelutable": "La telepatía consciente es la unión de dos almas para enviar un salvavidas a un tercero.",
    "EjemploPedagogico": "Es como dos operadores de radio sincronizando sus antenas para enviar una señal de máxima potencia a un barco en la tormenta. Es la acción a distancia por amor común.",
    "ConexionDoctrinal": ["Unión de Potencias", "Acción Ejecutiva", "Salvavidas Magnético"],
    "NodosSimapticos": ["Antenas Sincronizadas", "Envío Directivo", "Potencia Conjunta"]
  },
  "2026-2028: LECCIÓN SEXTA: DESDOBLAMIENTO SONAMBÚLICO": {
    "PilotoDeCoherencia": "Se deja la mecánica física y se entra al Espiritismo puro. El sonambulismo y la telepatía son ramas; el desdoblamiento consciente es el tronco. En este grado, el espíritu del médium, con la fuerza aportada por el maestro, trasciende la materia y opera libremente en el espacio, materializándose en otros lugares si es necesario.",
    "CitaInelutable": "El desdoblamiento abandona las ramas de la materia para aferrarse al tronco inmortal del espíritu.",
    "EjemploPedagogico": "Es como el pájaro que, tras aprender a mover las alas en el nido (grados menores), finalmente se lanza al vuelo libre. El nido queda atrás, el cielo es suyo.",
    "ConexionDoctrinal": ["Espiritismo Puro", "Tronco vs Ramas", "Vuelo del Alma"],
    "NodosSimapticos": ["Vuelo Libre", "Cielo del Espíritu", "Materialización a Distancia"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Saturación Fluídica": {
    "Definición": "Estado óptimo de aislamiento y carga magnética logrado en el discípulo mediante pases, miradas y soplos tenues, necesario para iniciar el trance de forma segura.",
    "Contexto": "Lección II, Parte Segunda de El Magnetismo en su Origen.",
    "Conexiones": ["Trance", "Corriente Magnética", "Modus Operandi"],
    "Obras": ["El Magnetismo en su Origen"]
  },
  "Prueba de Fidelidad (Sonambulismo)": {
    "Definición": "Procedimiento mediante el cual el operador abstrae su propio pensamiento durante el relato del sonámbulo, para asegurar que la visión de este sea objetiva y no una mera lectura mental del operador.",
    "Contexto": "Lección IV, Parte Segunda de El Magnetismo en su Origen.",
    "Conexiones": ["Sonambulismo Verbal", "Abstracción", "Videncia Real"],
    "Obras": ["El Magnetismo en su Origen"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 7 nodos 1:1 de El Magnetismo en su Origen (Batch 4 - Modus Operandi) y 2 términos sinápticos.');

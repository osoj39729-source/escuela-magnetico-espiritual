const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Conócete a ti mismo (Batch 10 - Conocimiento de Causas y Efectos)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "12385: EL CRIMEN: DEFINICIÓN RACIONAL": {
    "PilotoDeCoherencia": "Definimos el crimen como todo acto que causa daño a otro ser o a uno mismo. No es solo matar el cuerpo; es matar la esperanza, es robar el tiempo, es violentar la voluntad. El criminal es aquel que rompe la armonía de la fraternidad por egoísmo. La justicia de Eloí no castiga, sino que obliga a reparar el daño causado.",
    "CitaInelutable": "Crimen es todo aquello que causa daño a otro y aun a sí mismo.",
    "EjemploPedagogico": "Es como un músico que desafina a propósito en medio de una orquesta. No solo se daña él, sino que arruina la belleza de la sinfonía para todos. El crimen es la nota discordante en la armonía universal.",
    "ConexionDoctrinal": ["Crimen", "Daño", "Armonía"],
    "NodosSimapticos": ["Nota Discordante", "Reparación de Daño", "Violencia de Voluntad"]
  },
  "12423: LOS ARREBATOS Y LA PÉRDIDA DE MANDO": {
    "PilotoDeCoherencia": "Los arrebatos son momentos en que el espíritu pierde el mando sobre el alma y el cuerpo. La pasión ciega la razón y el hombre actúa como un autómata del instinto. El estudio y la profilaxis mental son las únicas herramientas para fortalecer la voluntad y evitar estos naufragios de la conciencia.",
    "CitaInelutable": "El arrebato es el eclipse de la razón ante el huracán de la pasión.",
    "EjemploPedagogico": "Es como un jinete que suelta las riendas en medio de una tormenta. El caballo correrá sin dirección y chocará contra los árboles. Mantén siempre las riendas de tu voluntad bien firmes.",
    "ConexionDoctrinal": ["Autocontrol", "Pasión vs Razón", "Voluntad"],
    "NodosSimapticos": ["Eclipse de Razón", "Huracán de Pasión", "Riendas de Voluntad"]
  },
  "12496: LA CALUMNIA: ASESINATO MORAL": {
    "PilotoDeCoherencia": "La calumnia es más vil que el asesinato físico, pues mata la honra y el crédito de un hermano. El calumniador es un asesino en la sombra que usa la palabra como puñal. La reparación de la calumnia exige una humillación pública del calumniador y un trabajo doble por la verdad.",
    "CitaInelutable": "La calumnia es el puñal de los cobardes que no se atreven a la luz.",
    "EjemploPedagogico": "Es como arrojar tinta sobre un vestido blanco: por más que lo laves, siempre quedará una mancha. No arrojes la tinta del odio sobre la vida de tus hermanos.",
    "ConexionDoctrinal": ["Calumnia", "Asesinato Moral", "Responsabilidad"],
    "NodosSimapticos": ["Puñal de Cobardes", "Mancha de Odio", "Honra y Crédito"]
  },
  "12602: EL PECADO: EL ERROR DOGMÁTICO": {
    "PilotoDeCoherencia": "Desmitificamos el 'pecado' como una ofensa a Dios. Eloí es inmutable y nada puede ofenderlo. Lo que la religión llama pecado, nosotros llamamos error o deuda. Es una infracción a la ley de amor que el espíritu debe saldar consigo mismo y con los perjudicados. No hay perdón, hay liquidación de deudas.",
    "CitaInelutable": "El pecado no existe ante Dios; solo existe el error ante la ley.",
    "EjemploPedagogico": "Es como una cuenta bancaria: si gastas más de lo que tienes, quedas en deuda. El banco no se ofende, pero te obliga a pagar para recuperar tu crédito. Paga tus deudas con obras de amor.",
    "ConexionDoctrinal": ["Liquidación de Deudas", "Error", "Inmutabilidad Divina"],
    "NodosSimapticos": ["Cuenta Bancaria del Alma", "Ofensa Imposible", "Crédito Espiritual"]
  },
  "12661: DESAFÍOS Y CONTRABANDOS": {
    "PilotoDeCoherencia": "Los desafíos y contrabandos son delitos contra la economía social y la paz común. Reflejan el deseo de ventaja individual sobre el bienestar colectivo. En la Comuna, estas acciones desaparecen porque no hay propiedad privada que esconder ni privilegios que defender por la fuerza.",
    "CitaInelutable": "El desafío es la soberbia del instinto contra la humildad de la razón.",
    "EjemploPedagogico": "Es como alguien que intenta meter comida escondida en una fiesta donde la comida es gratis y para todos. Es un acto absurdo que solo demuestra la desconfianza y la avaricia del que lo hace.",
    "ConexionDoctrinal": ["Economía Social", "Soberbia", "Avaricia"],
    "NodosSimapticos": ["Comida Escondida", "Ventaja Individual", "Soberbia del Instinto"]
  },
  "12764: ENVENENAMIENTO E INCENDIOS": {
    "PilotoDeCoherencia": "Denunciamos los delitos de envenenamiento e incendios como la máxima expresión de la cobardía y el odio oculto. Son actos de traición a la vida misma. La justicia de los hombres es blanda con estos crímenes, pero la justicia del espíritu es severa: quien destruye los medios de vida, deberá trabajar siglos para restaurarlos.",
    "CitaInelutable": "Destruir la vida o sus medios es un crimen contra el universo entero.",
    "EjemploPedagogico": "Es como quemar el puente que todos usamos para cruzar el río, solo porque estás enojado con una persona. Dejas a todos aislados por tu propio rencor. Reconstruirás el puente piedra a piedra.",
    "ConexionDoctrinal": ["Cobardía", "Traición a la Vida", "Restauración"],
    "NodosSimapticos": ["Puente Quemado", "Odio Oculto", "Restauración Eterna"]
  },
  "12828: EL INFANTICIDIO: EL CRIMEN MÁS COBARDE": {
    "PilotoDeCoherencia": "El infanticidio es el horror máximo: negar la vida a un espíritu que viene a cumplir su misión. Denunciamos a las religiones que, con sus prejuicios sobre el 'honor' y la 'vergüenza', han empujado a miles de madres al infanticidio. El honor no está en la sangre, sino en el respeto a la vida naciente.",
    "CitaInelutable": "Matar al niño es matar la esperanza del progreso humano.",
    "EjemploPedagogico": "Es como arrancar un brote de árbol apenas sale de la tierra. Ese brote estaba llamado a ser un cedro gigante que daría sombra a muchos. Has matado al cedro en su cuna.",
    "ConexionDoctrinal": ["Vida Naciente", "Prejuicio Religioso", "Honor"],
    "NodosSimapticos": ["Brote Arrancado", "Cuna del Progreso", "Vergüenza Social"]
  },
  "13002: ¿QUÉ ES EL ROBO? EL VAMPIRISMO RELIGIOSO": {
    "PilotoDeCoherencia": "Redefinimos el robo. El ladrón de pan es a menudo una víctima de la injusticia social. El verdadero ladrón es el que roba conciencias, el que cobra por el 'cielo' y el que vive del sudor ajeno sin producir nada. Las religiones son vampiros que chupan la sangre y la hacienda de los pueblos mediante la mentira.",
    "CitaInelutable": "Llamamos ladrones de ley divina a quienes comercian con el alma del hombre.",
    "EjemploPedagogico": "Es como un parásito que se pega a un animal fuerte y le quita la energía hasta dejarlo débil. La religión es ese parásito; el pueblo trabajador es el animal que debe sacudirse al vampiro de encima.",
    "ConexionDoctrinal": ["Vampirismo", "Robo de Conciencia", "Injusticia Social"],
    "NodosSimapticos": ["Vampiro de Almas", "Ladrón de Pan", "Parásito del Pueblo"]
  },
  "LA SENTENCIA AL ROBO ESPIRITUAL": {
    "PilotoDeCoherencia": "Sentenciamos que no hay palabra en el idioma humano para describir la bajeza de robar la libertad de pensamiento. Este robo espiritual mantiene a los mundos en tinieblas. La Comuna devolverá al hombre su soberanía absoluta sobre su propio espíritu, eliminando a los intermediarios del error.",
    "CitaInelutable": "El robo de la libertad de conciencia es el mayor crimen del universo.",
    "EjemploPedagogico": "Es como ponerle un candado a la mente de un niño y decirle que solo tú tienes la llave. Le robas su futuro y su dignidad. Tira el candado; la llave la tiene cada espíritu en su propia razón.",
    "ConexionDoctrinal": ["Libertad de Conciencia", "Soberanía", "Sentencia"],
    "NodosSimapticos": ["Candado Mental", "Llave de la Razón", "Intermediarios del Error"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Crimen": {
    "Definición": "Toda acción que cause perjuicio moral, físico o espiritual a otro ser o a uno mismo, violentando la ley de armonía y fraternidad.",
    "Contexto": "Análisis de causas y efectos en Conócete a ti mismo.",
    "Conexiones": ["Daño", "Responsabilidad", "Justicia"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  },
  "Robo de Conciencia": {
    "Definición": "Acto de someter la voluntad y el pensamiento de los individuos mediante dogmas, miedos y secretos, considerado el mayor crimen espiritual.",
    "Contexto": "Crítica a las religiones en Conócete a ti mismo.",
    "Conexiones": ["Vampirismo", "Libertad", "Dogma"],
    "Obras": ["Conócete a ti mismo", "Primer Rayo de Luz"]
  },
  "Calumnia": {
    "Definición": "Asesinato moral perpetrado mediante la difamación y la mentira, con el fin de destruir la honra de un hermano para obtener ventaja o satisfacción egoísta.",
    "Conexiones": ["Odio", "Asesinato", "Responsabilidad"],
    "Obras": ["Conócete a ti mismo", "Los Cinco Amores"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 9 nodos 1:1 de Conócete a ti mismo (Batch 10 - Causas y Efectos) y 3 términos sinápticos.');

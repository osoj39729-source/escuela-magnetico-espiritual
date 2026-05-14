const fs = require('fs');
const path = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "99: Proclamación de la Comuna: La Armonía Universal": {
    "PilotoDeCoherencia": "Presenta la Proclamación de la Comuna como la invitación del Padre Eloí a vivir en la armonía natural del Universo. No es un código de imposiciones, sino la Ley Fundamental que reconoce la libertad absoluta del espíritu para unirse al progreso común. El Juez actúa como el hermano mayor que muestra el camino de la justicia equitativa, donde el Amor es la única autoridad.",
    "IdeasSecundarias": [
      "La Comuna es el estado de paz que resulta de reconocer que todos somos una sola familia.",
      "El Espíritu de Verdad no viene a juzgar con ira, sino a guiar con la luz de la sabiduría eterna.",
      "La Ley es el bálsamo que sana las heridas causadas por siglos de injusticia y odio."
    ],
    "CitasIneludibles": [
      "En nombre de 'Eloí', Universal, Dios de Amor... Padre común",
      "bajo el ancla salvadora del Espíritu de Verdad... decreto esta: LEY FUNDAMENTAL",
      "siendo su ley orgánica 'El amor mutuo'"
    ]
  },
  "850 al 1076: La Ley de Trabajo como Fuente de Vida y Armonía": {
    "PilotoDeCoherencia": "Define el trabajo como el acto más sublime de gratitud hacia el Padre. Quien elude el trabajo no es castigado, sino que se priva de participar en la creación y se desarmoniza con la ley de afinidad, alejándose por su propia voluntad del bienestar común. La economía del tiempo y la rural buscan optimizar el esfuerzo humano para que la alegría y el pan abunden para todos por igual.",
    "IdeasSecundarias": [
      "El trabajo productivo es la medicina del espíritu; el ocio es la causa de la tristeza y la desarmonía.",
      "La naturaleza es una madre generosa que responde al amor y al cuidado del trabajador.",
      "En la Comuna, el esfuerzo de uno es el beneficio de todos, creando un lazo de solidaridad indestructible."
    ],
    "CitasIneludibles": [
      "la Ley del Padre es el trabajo... en todo la ley es el trabajo sin el cual, no sólo no habría progreso, pero ni tampoco vida",
      "las fuerzas magnéticas del cuerpo humano esterilizan o fecundan el trabajo, según es la aureola que circunda al operador",
      "el que ordena y el que ejecuta, tienen la misma parte y el mismo merecimiento"
    ]
  },
  "2172 al 3007: La Disciplina del Espíritu y el Laudo de Rigor": {
    "PilotoDeCoherencia": "Explica que el Laudo de Rigor es un acto de amor para proteger la pureza de las comunicaciones espirituales. No es una prohibición arbitraria, sino una norma de orden y respeto para evitar que la ignorancia y el espiritualismo religioso confundan a los buscadores de la verdad. Busca que cada sesión sea un oasis de estudio racional y paz.",
    "IdeasSecundarias": [
      "La mediumnidad es un don para el progreso que requiere ser cultivado con ciencia y conciencia.",
      "El orden en las comunicaciones asegura que la luz de Sión llegue sin sombras de misticismo.",
      "El respeto a la disciplina es el reflejo del amor del espíritu por la verdad."
    ],
    "CitasIneludibles": [
      "El espiritismo no es religión; y el espiritualismo es todas las religiones, amalgamadas",
      "quedar en suspenso y sin uso... las facultades medianímicas... para su estudio racional",
      "Laudo de Rigor... siempre más allá"
    ]
  },
  "4027 al 4336: El Tránsito: El Regreso al Abrazo del Padre": {
    "PilotoDeCoherencia": "Describe la desencarnación como un tránsito amoroso y festivo hacia la libertad. El miedo es producto del dogma, pero la verdad revela que es el regreso a la vida real. La Comuna honra este momento con sencillez y amor, eliminando todo lucro y tristeza egoísta, permitiendo que el espíritu se desprenda en paz hacia su morada de luz.",
    "IdeasSecundarias": [
      "La muerte no existe, solo la metamorfosis del espíritu hacia un grado mayor de progreso.",
      "El cuerpo es la herramienta que el espíritu devuelve a la tierra con gratitud.",
      "El silencio y las palabras de ánimo en el velatorio son el auxilio final que la fraternidad brinda al hermano."
    ],
    "CitasIneludibles": [
      "El tránsito... es un acto amoroso de la ley divina",
      "sepultados... en fosa, en tierra... para la reintegración molecular",
      "como médicos desaparecen, porque han de desaparecer las enfermedades"
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Retro-corrección AMOROSA de Código de Amor Universal (Tomo 2) integrada.');

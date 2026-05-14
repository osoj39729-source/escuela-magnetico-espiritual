const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/buscando-a-dios-joaquin-trincado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// RE-DESTILACIÓN PURA 1:1 - Buscando a Dios (Batch 2 - Claves 196 a 557)
const nuevosNodos = {
  "008: CAPITULO PRIMERO: LA NATURALEZA TERRESTRE": {
    "PilotoDeCoherencia": "Escenario de la Vida. La Tierra es un organismo vivo y equilibrado, diseñado para el desarrollo de los espíritus que la habitan; nada en su naturaleza es azaroso.",
    "CitaInelutable": "LA NATURALEZA TERRESTRE... se investiga y se le arrancan las entrañas.",
    "EjemploPedagogico": "Un gran teatro construido con todo detalle; las luces, los decorados y el aire están ahí para que los actores puedan representar su obra con libertad y realismo.",
    "ConexionDoctrinal": ["Naturaleza Viva", "Planeta Escuela"],
    "NodosSimapticos": []
  },
  "009: CAPITULO SEGUNDO: HABITANTES IRRACIONALES": {
    "PilotoDeCoherencia": "Evolución Animal. Los animales son hermanos menores en proceso de evolución, sirviendo a la armonía del planeta y preparando formas para futuros desarrollos del espíritu.",
    "CitaInelutable": "SUS HABITANTES IRRACIONALES... la naturaleza terrestre.",
    "EjemploPedagogico": "Los niños pequeños en una guardería; no tienen la razón de un adulto, pero sus juegos y aprendizajes son fundamentales para que un día sean ciudadanos conscientes.",
    "ConexionDoctrinal": ["Evolución de las Especies", "Fraternidad Animal"],
    "NodosSimapticos": []
  },
  "010: CAPITULO TERCERO: HABITANTES RACIONALES": {
    "PilotoDeCoherencia": "Diversidad Humana. El hombre racional se manifiesta en diferentes temperamentos y grupos, todos bajo la misma ley de progreso pero en distintos grados de manifestación.",
    "CitaInelutable": "SUS HABITANTES RACIONALES... constituye la familia.",
    "EjemploPedagogico": "Una orquesta con instrumentos de cuerda, viento y percusión; todos son música, pero cada uno tiene su propio tono y función para crear la sinfonía total.",
    "ConexionDoctrinal": ["Hombre Racional", "Igualdad en la Diversidad"],
    "NodosSimapticos": []
  },
  "011: PÁRRAFO I: EL HOMBRE DE SANGRE CÁLIDA": {
    "PilotoDeCoherencia": "Dinamismo Vital. Se analiza el grupo humano caracterizado por la pasión y la energía activa, motores del cambio social y el avance material.",
    "CitaInelutable": "EL HOMBRE DE SANGRE CÁLIDA... el hombre constituye la familia.",
    "EjemploPedagogico": "El motor de un auto; genera el calor y la fuerza necesaria para que todo el vehículo se mueva y avance por el camino.",
    "ConexionDoctrinal": ["Sangre Cálida (Tipología)", "Pasión y Progreso"],
    "NodosSimapticos": ["Sangre Cálida (Tipología)"]
  },
  "012: PÁRRAFO II: EL HOMBRE DE SANGRE HELADA": {
    "PilotoDeCoherencia": "Temperamento Calculador. Análisis de los grupos humanos con tendencia a la frialdad y el análisis metódico, necesarios para el equilibrio y la estructura de las sociedades.",
    "CitaInelutable": "EL HOMBRE DE SANGRE HELADA... el hombre constituye la familia.",
    "EjemploPedagogico": "El sistema de frenos y la dirección de un auto; permiten controlar la velocidad y decidir el rumbo con precisión, evitando que la fuerza del motor se desborde sin control.",
    "ConexionDoctrinal": ["Sangre Helada (Tipología)", "Racionalidad Fría"],
    "NodosSimapticos": ["Sangre Helada (Tipología)"]
  },
  "013: PARRAFO III: EL HOMBRE DE SANGRE TEMPLADA": {
    "PilotoDeCoherencia": "Equilibrio Humano. Representa el punto de unión y mediación entre los extremos, buscando la armonía y la estabilidad en la convivencia social.",
    "CitaInelutable": "EL HOMBRE DE SANGRE TEMPLADA... constituye la familia.",
    "EjemploPedagogico": "El termostato que regula la temperatura de una casa, asegurando que no haga ni demasiado frío ni demasiado calor para que todos vivan cómodamente.",
    "ConexionDoctrinal": ["Armonía Social", "Mediación"],
    "NodosSimapticos": []
  },
  "014: PÁRRAFO IV: EL HOMBRE CONSTITUYE LA FAMILIA": {
    "PilotoDeCoherencia": "Núcleo de Fraternidad. La familia es el origen de la sociedad organizada; en ella el espíritu ensaya el amor y el deber antes de extenderlos a toda la humanidad.",
    "CitaInelutable": "EL HOMBRE CONSTITUYE LA FAMILIA... la más grande importancia para la Gran Causa.",
    "EjemploPedagogico": "El primer peldaño de una escalera infinita; si no aprendes a subir el primer escalón (amor a la familia), nunca podrás alcanzar la cima de la fraternidad universal.",
    "ConexionDoctrinal": ["Familia (Origen Metafísico)", "Deber de Amor"],
    "NodosSimapticos": ["Familia (Origen Metafísico)"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Sangre Cálida (Tipología)": {
    "Definición": "Clasificación metafísica de los grupos humanos caracterizados por un dinamismo vital intenso, pasión y energía activa. Son los motores del cambio y la acción en la historia humana.",
    "Contexto": "Buscando a Dios (Capítulo Tercero).",
    "Conexiones": ["Pasión", "Acción", "Evolución"],
    "Obras": ["Buscando a Dios"]
  },
  "Sangre Helada (Tipología)": {
    "Definición": "Clasificación metafísica de grupos humanos con temperamento analítico, frío o calculador. Aportan el equilibrio necesario de método y estructura a la evolución social.",
    "Contexto": "Buscando a Dios (Capítulo Tercero).",
    "Conexiones": ["Razón", "Estructura", "Control"],
    "Obras": ["Buscando a Dios"]
  },
  "Familia (Origen Metafísico)": {
    "Definición": "Célula fundamental de la organización humana. Nace de la necesidad natural y espiritual de protección, afecto y educación, sirviendo como el primer campo de entrenamiento para la fraternidad universal.",
    "Contexto": "Buscando a Dios (Capítulo Tercero).",
    "Conexiones": ["Fraternidad", "Amor", "Sociedad"],
    "Obras": ["Buscando a Dios", "Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 2 de Buscando a Dios (7 nodos 1:1) y 3 términos sinápticos. Naturaleza y Familia sellados.');

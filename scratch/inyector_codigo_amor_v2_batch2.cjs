const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-2_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 2 (Batch 2 - Claves 15 a 29)
const nuevosNodos = {
  "338: CAPÍTULO SEGUNDO: LEY TRANSITORIA": {
    "PilotoDeCoherencia": "Perfección Comunal. La Comuna es el estado natural de la creación; elementos como la luz y el agua son el ejemplo divino de bienes que no pueden ser esclavizados por la ambición humana.",
    "CitaInelutable": "La Comuna es la perfección de las humanidades... establecida desde el principio de las cosas.",
    "EjemploPedagogico": "El sol sale para todos y el aire no tiene dueño; así debe ser la tierra y sus frutos en el régimen de amor.",
    "ConexionDoctrinal": ["Leyes de la Naturaleza", "Comuna Universal"],
    "NodosSimapticos": []
  },
  "604: ARTÍCULO 1º - Existiendo muchas razones de economía...": {
    "PilotoDeCoherencia": "Urbanismo Racional. Se decreta la creación de ciudades agrícolas de 100,000 habitantes para centralizar la educación, asistencia y eficiencia productiva.",
    "CitaInelutable": "Se mandan formar ciudades agrícolas de 100.000 habitantes.",
    "EjemploPedagogico": "Pequeños huertos desordenados que se unen para formar un gran jardín centralizado donde todos tienen agua, herramientas y maestros cerca.",
    "ConexionDoctrinal": ["Ciudades Agrícolas (Modelo)", "Justicia Comunal"],
    "NodosSimapticos": ["Ciudades Agrícolas (Modelo)"]
  },
  "702: ARTÍCULO 1º - Como la grandeza de las humanidades no consiste...": {
    "PilotoDeCoherencia": "Riqueza Educativa. La verdadera riqueza de la Comuna es el individuo educado; la educación técnica y espiritual es el primer paso para el embellecimiento del mundo.",
    "CitaInelutable": "La grandeza... no consiste en las riquezas materiales... sus individuos que son la primer riqueza sean los primeros educados.",
    "EjemploPedagogico": "Un palacio lleno de oro no vale nada si sus habitantes son ignorantes; una choza llena de sabios es un centro de luz para el universo.",
    "ConexionDoctrinal": ["Educación Integral", "Valor del Espíritu"],
    "NodosSimapticos": []
  },
  "871: Capítulo II: ECONOMÍA ARTÍSTICA": {
    "PilotoDeCoherencia": "Orden Cosmogónico. La economía artística consiste en el orden perfecto de las cosas, imitando el concierto de los mundos en el universo.",
    "CitaInelutable": "Poner cada cosa en su puesto y preparar un puesto para cada cosa.",
    "EjemploPedagogico": "Un gran taller donde cada herramienta tiene su silueta pintada en la pared; así, el trabajo fluye sin que nadie pierda tiempo buscando lo necesario.",
    "ConexionDoctrinal": ["Economía Artística (Axioma)", "Armonía Universal"],
    "NodosSimapticos": ["Economía Artística (Axioma)"]
  },
  "916: Capítulo IV: ECONOMÍA MORAL": {
    "PilotoDeCoherencia": "Eficiencia Mental. La economía moral es el pesaje de la idea en la mente antes de la ejecución para lograr el bien mayor con el menor costo de fuerzas.",
    "CitaInelutable": "Pesar todo bien en la mente del autor, para que la idea se convierta en realidad con un bien mayor y menos costo de fuerzas.",
    "EjemploPedagogico": "El arquitecto que revisa mil veces el plano antes de poner el primer ladrillo, evitando desperdiciar materiales y esfuerzo en errores evitables.",
    "ConexionDoctrinal": ["Economía Moral y Científica (Dualidad)", "Responsabilidad de la Idea"],
    "NodosSimapticos": ["Economía Moral y Científica (Dualidad)"]
  },
  "1000: Capítulo VII: ECONOMÍA ORGÁNICA": {
    "PilotoDeCoherencia": "Colectivismo Orgánico. El aprovechamiento armónico de organismos y recursos para el bien común, reconociendo que la colectividad es el estado más beneficioso para el ser.",
    "CitaInelutable": "Aprovechamiento armónico de todos los organismos y cosas de la tierra, para un bien social común.",
    "EjemploPedagogico": "Un cuerpo humano donde cada órgano trabaja para el conjunto; el corazón no guarda sangre para sí, sino que la distribuye para que todo el ser viva.",
    "ConexionDoctrinal": ["Economía Orgánica", "Solidaridad Social"],
    "NodosSimapticos": []
  },
  "1076: Capítulo IX: ECONOMÍA PÚBLICA": {
    "PilotoDeCoherencia": "Administración del Bien. La economía pública es la gestión eficiente de la ciudad para facilitar medios a la producción y bienestar de la comuna doméstica.",
    "CitaInelutable": "Consiste en la buena administración de una ciudad y de una nación... órbita donde gira la economía doméstica.",
    "EjemploPedagogico": "El sistema de riego que asegura que el agua llegue a cada casa y cada huerto, permitiendo que cada familia prospere en su labor.",
    "ConexionDoctrinal": ["Administración Comunal", "Justicia de Distribución"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Economía Artística (Axioma)": {
    "Definición": "Principio de orden y concierto universal aplicado a la organización social. Establece que la eficiencia y la belleza de la Comuna dependen de asignar a cada individuo, objeto y función su lugar exacto, evitando el caos y el desperdicio de fluidos vitales.",
    "Contexto": "Código de Amor Universal Tomo 2 (Tratado de las Economías).",
    "Conexiones": ["Orden", "Armonía Universal", "Eficiencia"],
    "Obras": ["Código de Amor Universal"]
  },
  "Economía Moral y Científica (Dualidad)": {
    "Definición": "Relación intrínseca entre el pensamiento (moral) y la acción (científica). La economía moral idealiza y depura la idea para que sea justa, mientras que la científica la ejecuta con precisión técnica, garantizando el máximo bienestar social con el mínimo esfuerzo material.",
    "Contexto": "Código de Amor Universal Tomo 2 (Definición de Economías).",
    "Conexiones": ["Pensamiento y Voluntad", "Justicia Comunal", "Progreso"],
    "Obras": ["Código de Amor Universal"]
  },
  "Ciudades Agrícolas (Modelo)": {
    "Definición": "Unidad urbana de población (fijada en 100,000 habitantes) diseñada para integrar la vida productiva del campo con los servicios y educación de la ciudad. Es el núcleo administrativo de la Comuna Universal, diseñado para la autosuficiencia y la armonía con la naturaleza.",
    "Contexto": "Código de Amor Universal Tomo 2 (Establecimiento de Ciudades).",
    "Conexiones": ["Comuna", "Administración", "Economía Rural"],
    "Obras": ["Código de Amor Universal", "Profilaxis de la Vida"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 2 de Código de Amor T2 (7 nodos) y 3 términos sinápticos. Tratado de Economías sellado.');

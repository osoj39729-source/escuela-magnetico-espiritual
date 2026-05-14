const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/filosof-a-austera-racional_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación 1:1 - Filosofía Austera Racional (Batch 4)
// Tono: Maestro Joaquín Trincado

const nuevosNodos = {
  "9231: SEGUNDA PARTE — PSICOLOGÍA — EL ESTUDIO DEL ALMA Y EL ESPÍRITU": {
    "PilotoDeCoherencia": "La psicología oficial estudia los efectos; nosotros estudiamos la causa: el Espíritu. El alma es solo el traje de sensibilidad que el espíritu usa para actuar en la materia. Sin entender al espíritu como el soberano, la psicología es solo una lista de síntomas sin cura real.",
    "CitaInelutable": "La psicología racional es el estudio del espíritu a través de sus manifestaciones anímicas.",
    "EjemploPedagogico": "Estudiar el alma sin el espíritu es como estudiar el humo sin conocer el fuego. El alma es la estela que deja el espíritu al navegar por la vida; nosotros estudiamos al navegante.",
    "ConexionDoctrinal": ["Espíritu", "Alma", "Causalidad"],
    "NodosSimapticos": ["Psicología Racional", "Estela del Espíritu", "Soberano Interior"]
  },
  "9345: CAPÍTULO I — LA IDEA MORAL": {
    "PilotoDeCoherencia": "La moral no es un conjunto de reglas externas, es la ley de afinidad grabada en el espíritu. Denuncio las morales de esclavitud. La verdadera moral es la armonía de los intereses bajo la balanza de la justicia universal.",
    "CitaInelutable": "La idea moral es la brújula que orienta la voluntad hacia el bien común.",
    "EjemploPedagogico": "Es como el sentido del equilibrio: no necesitas un libro que te diga cómo no caerte; tu propio cuerpo te lo indica. La moral racional es el equilibrio del espíritu.",
    "ConexionDoctrinal": ["Moral Racional", "Afinidad", "Bien Común"],
    "NodosSimapticos": ["Idea Moral", "Brújula Interior", "Equilibrio Espiritual"]
  },
  "9580: PÁRRAFO 1° — MORAL RELIGIOSA": {
    "PilotoDeCoherencia": "La moral religiosa es inmoral porque se basa en el miedo al castigo o el deseo de recompensa (cielo/infierno). Es una moral de mercaderes. No busca el bien por el bien, sino por el beneficio personal. Es la negación de la dignidad del espíritu libre.",
    "CitaInelutable": "La moral religiosa es el baldón del espíritu, porque le quita su libertad por el miedo.",
    "EjemploPedagogico": "Es como un niño que solo se porta bien cuando ve el látigo o el dulce. Eso no es bondad, es conveniencia. Mi Escuela enseña a ser bueno porque es lo justo, aunque no haya látigos ni dulces.",
    "ConexionDoctrinal": ["Miedo y Recompensa", "Inmoralidad Religiosa", "Dignidad"],
    "NodosSimapticos": ["Moral de Mercaderes", "Miedo al Látigo", "Negación de Dignidad"]
  },
  "9825: PÁRRAFO 2° — MORAL DEL INTERÉS Y DEL PLACER": {
    "PilotoDeCoherencia": "El utilitarismo y el hedonismo son las morales de la materia. Reducen la vida al goce egoísta. Si mi placer causa el dolor de mi hermano, esa moral es un crimen. Denuncio que esta es la base de la sociedad capitalista que agoniza.",
    "CitaInelutable": "La moral del placer egoísta es la gangrena de la solidaridad humana.",
    "EjemploPedagogico": "Es como alguien que se come toda la comida de la mesa porque le gusta, sin importarle que sus hermanos mueran de hambre. Es la moral de la fiera, no la del hombre.",
    "ConexionDoctrinal": ["Utilitarismo", "Egoísmo", "Solidaridad"],
    "NodosSimapticos": ["Moral del Placer", "Gangrena Social", "Egoísmo Material"]
  },
  "10150: PÁRRAFO 3° — MORAL RACIONAL": {
    "PilotoDeCoherencia": "La única moral digna es la que nace de la razón y el amor fraternal. Es la moral de la deuda y el cumplimiento del deber por amor a la Ley. No pregunta 'qué gano yo', sino 'qué debo hacer por el progreso de todos'. Es la base de la Comuna.",
    "CitaInelutable": "La moral racional es el cumplimiento del deber por amor a la justicia.",
    "EjemploPedagogico": "Es como el sol que brilla porque esa es su ley y su naturaleza, no para que le den las gracias. Ser moral es ser sol en el camino del hermano.",
    "ConexionDoctrinal": ["Deber", "Amor Fraternal", "Comuna"],
    "NodosSimapticos": ["Moral Racional", "Deber por Amor", "Luz del Sol"]
  },
  "10425: CAPÍTULO II — MORAL SOCIAL Y POLÍTICA": {
    "PilotoDeCoherencia": "La política debe ser la ciencia de la moral social. Denuncio la política sin moralidad que hoy impera. Una sociedad solo es sana cuando sus leyes son el reflejo de la moral de sus ciudadanos. Si los hombres son corruptos, no habrá leyes que los salven.",
    "CitaInelutable": "La política sin moral es la tiranía del error sobre la justicia.",
    "EjemploPedagogico": "Un barco con una tripulación de ladrones nunca llegará a un puerto seguro, por muy buenos que sean los mapas. La moral es la honestidad de la tripulación.",
    "ConexionDoctrinal": ["Política Moral", "Leyes Sociales", "Corrupción"],
    "NodosSimapticos": ["Moral Política", "Tripulación Honesta", "Reflejo Social"]
  },
  "10800: La Ley en el Hombre": {
    "PilotoDeCoherencia": "Revolución fundamental: la ley no debe estar en un libro para que el hombre la cumpla, sino en el hombre para que las leyes sean buenas. Cuando el hombre es ley en sí mismo por su grado de conciencia, los códigos externos son innecesarios. Este es el fin del gobierno de los hombres y el inicio del gobierno de la Ley.",
    "CitaInelutable": "No es que el hombre esté en la ley, sino que la ley esté en el hombre.",
    "EjemploPedagogico": "Es como el idioma: cuando lo hablas con fluidez, no necesitas llevar el diccionario en la mano para construir una frase. Eres el idioma. En la Comuna, el hombre es la Ley.",
    "ConexionDoctrinal": ["Autonomía", "Soberanía", "Ley Interior"],
    "NodosSimapticos": ["Ley en el Hombre", "Fin de Códigos", "Idioma de la Justicia"]
  },
  "11125: MONTESQUIEU Y LA SEPARACIÓN DE PODERES": {
    "PilotoDeCoherencia": "Reconocemos a Montesquieu como un gran ordenador humano. Su separación de poderes es una defensa contra la tiranía individual. Pero advertimos: sin la moral del espíritu, los tres poderes se ponen de acuerdo para oprimir al pueblo. El equilibrio real solo viene de la soberanía del espíritu.",
    "CitaInelutable": "Montesquieu ordenó el cuerpo social, pero le faltó darle el alma del espíritu.",
    "EjemploPedagogico": "La separación de poderes es como los frenos de un coche: evitan que se estrelle por el exceso de uno solo, pero no te dicen hacia dónde debe ir el coche. La moral del espíritu es la dirección.",
    "ConexionDoctrinal": ["Equilibrio Político", "Poderes", "Crítica a la Abstracción"],
    "NodosSimapticos": ["Montesquieu", "Frenos del Poder", "Dirección Espiritual"]
  },
  "11450: LA RAZÓN HUMANA COMO LEY SUPREMA": {
    "PilotoDeCoherencia": "La Razón Humana es la manifestación de la Razón Universal. A ella deben subordinarse todas las leyes. Si una ley choca con la razón y la fraternidad, es un crimen. No hay ley por encima de la Razón, porque la Razón es la voz de Eloí en el hombre.",
    "CitaInelutable": "La ley suprema es la Razón humana, subordinada a la armonía universal.",
    "EjemploPedagogico": "La razón es la brújula náutica. Puedes tener muchas órdenes del capitán, pero si el capitán te manda navegar contra las rocas que la brújula te señala, tu deber es seguir a la brújula.",
    "ConexionDoctrinal": ["Razón Suprema", "Voz de Eloí", "Justicia"],
    "NodosSimapticos": ["Razón como Ley", "Brújula Náutica", "Voz del Creador"]
  },
  "11780: EL ERROR DE LA CAUSA EN LA POLÍTICA": {
    "PilotoDeCoherencia": "Denuncio el error de atacar los efectos políticos sin quitar las causas. La causa de la mala política es la ignorancia del espíritu y la división religiosa. Quien quiera cambiar el mundo sin cambiar la conciencia de los hombres, está sembrando en el mar.",
    "CitaInelutable": "Atacar el efecto sin quitar la causa es la ceguera de los políticos de oficio.",
    "EjemploPedagogico": "Es como intentar secar un charco mientras la tubería sigue rota. Arregla la tubería (la conciencia del hombre) y el charco (la mala política) se secará solo.",
    "ConexionDoctrinal": ["Causalidad", "Conciencia", "Revolución de Conciencias"],
    "NodosSimapticos": ["Error de Causa", "Tubería Rota", "Efecto vs Causa"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Moral Racional": {
    "Definición": "El conjunto de principios de conducta basados en la razón, el amor fraternal y el cumplimiento del deber por justicia, sin esperar premios ni temer castigos mísiticos.",
    "Contexto": "Capítulo I de la Segunda Parte de Filosofía Austera Racional.",
    "Conexiones": ["Deber", "Amor Fraternal", "Comuna"],
    "Obras": ["Filosofía Austera Racional", "Código de Amor Universal"]
  },
  "Régimen de Vida": {
    "Definición": "La aplicación práctica de la filosofía en cada acto del hombre, buscando la coherencia total entre el pensamiento, la palabra y la obra.",
    "Contexto": "Introducción a la Psicología en Filosofía Austera Racional.",
    "Conexiones": ["Austeridad", "Rectitud", "Moral Racional"],
    "Obras": ["Filosofía Austera Racional", "Profilaxis de la Vida"]
  },
  "Ley en el Hombre": {
    "Definición": "El estado de evolución donde el ser humano ha interiorizado los principios de la justicia universal de tal modo que su propia conciencia es su única ley y juez.",
    "Contexto": "Capítulo II de la Segunda Parte de Filosofía Austera Racional. Es la base de la libertad en la Comuna.",
    "Conexiones": ["Soberanía", "Autonomía", "Comuna"],
    "Obras": ["Filosofía Austera Racional", "Los Extremos se Tocan"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 10 nodos 1:1 de Filosofía Austera Racional (Batch 4) y 3 términos sinápticos.');

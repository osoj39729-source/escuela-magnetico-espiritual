const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

const nuevosNodos = {
  "5877: CAPÍTULO QUINCE — ¿Quién prendió la mecha?": {
    "PilotoDeCoherencia": "No busquéis un solo culpable individual. La mecha fue prendida por el sistema acumulado de error. Los reyes y emperadores son solo los ejecutores de una voluntad colectiva de dominio. La verdadera mecha es la injusticia social bendecida por las religiones.",
    "CitaInelutable": "¿Quién prendió la mecha? ... Unos dicen que Guillermo, otros Francisco José... pero la causa es más profunda.",
    "EjemploPedagogico": "Es como preguntar qué chispa quemó el bosque cuando el bosque estaba lleno de leña seca y gasolina. La chispa es secundaria; lo criminal es haber acumulado el combustible.",
    "ConexionDoctrinal": ["Causas de la Guerra", "Culpables del Error", "Religión y Poder"],
    "NodosSimapticos": ["Mecha de la Guerra", "Combustible de Error", "Culpabilidad Colectiva"]
  },
  "5973: CAPÍTULO DIEZ Y SEIS — El combustible es grande y todo se consumirá": {
    "PilotoDeCoherencia": "El incendio es total porque el combustible es secular. Odios de casta, dogmas excluyentes, armas acumuladas por la codicia. Todo lo que no sea amor y razón debe ser consumido por el fuego de la guerra para que la tierra quede limpia para la Comuna.",
    "CitaInelutable": "Tan grande es el depósito de combustible preparado para este incendio único.",
    "EjemploPedagogico": "El fuego no distingue entre maderas: quema lo que encuentra. La guerra no distingue entre inocentes si el sistema entero es culpable. El fuego purifica la tierra de la gangrena del pasado.",
    "ConexionDoctrinal": ["Purificación por Fuego", "Liquidación", "Combustible de Error"],
    "NodosSimapticos": ["Combustible Secular", "Incendio Purificador", "Consunción del Error"]
  },
  "6212: CAPÍTULO DIEZ Y SIETE — Toda la tierra es lodo de sangre y cenizas": {
    "PilotoDeCoherencia": "La guerra de 1914 sumerge al mundo en sangre. Es el resultado del materialismo sin espíritu y de la espiritualidad sin razón. Las religiones y las filosofías de prejuicio (incluida la teosofía adulterada) son las responsables de este lodo.",
    "CitaInelutable": "Todas las religiones, todas las filosofías de prejuicios, hasta la Teosofía ya adulterada, llenan el mundo de lodo.",
    "EjemploPedagogico": "Cuando el espíritu es negado o mixtificado, el hombre se convierte en una fiera con tecnología. El resultado no puede ser otro que un matadero mundial.",
    "ConexionDoctrinal": ["Materialismo", "Teosofía Adulterada", "Lodo de Sangre"],
    "NodosSimapticos": ["Lodo de Sangre", "Cenizas del Error", "Teosofía Adulterada"]
  },
  "6356: CAPÍTULO DIEZ Y OCHO — Los culpables, los responsables y los perjudicados": {
    "PilotoDeCoherencia": "Distingo con claridad: los Culpables son quienes fomentan el error por beneficio; los Responsables son los gobernantes que ejecutan la orden; los Perjudicados son los pueblos que ponen la sangre. La Ley de Justicia ajustará las cuentas a cada uno según su grado de conciencia.",
    "CitaInelutable": "Los culpables, en rigor, son los que fomentan el error, por el cual perciben beneficio.",
    "EjemploPedagogico": "El que vende el veneno es el culpable; el que lo administra es el responsable; el que muere es el perjudicado. La justicia humana suele castigar al segundo, pero Mi Escuela señala al primero.",
    "ConexionDoctrinal": ["Ley de Justicia", "Culpabilidad vs Responsabilidad", "Pueblo Perjudicado"],
    "NodosSimapticos": ["Culpables", "Responsables", "Perjudicados", "Beneficio del Error"]
  },
  "6548: CAPÍTULO DIEZ Y NUEVE — La Ley sólo siempre triunfa": {
    "PilotoDeCoherencia": "Tras la tempestad, el sol de justicia. Los 'Cimientos de Azúcar' (las instituciones basadas en la mentira) se disuelven ante el 'Agua del Desengaño'. El hombre despierta en los brazos de la Naturaleza, su madre, para empezar de nuevo bajo cimientos firmes: las matemáticas de la Ley.",
    "CitaInelutable": "Cimientos de azúcar, los que al contacto del agua del desengaño, todo vendría abajo.",
    "EjemploPedagogico": "Un edificio de azúcar parece sólido mientras no llueve. La guerra es la lluvia de verdad que deshace las mentiras. Lo que queda en pie es lo único que era real: la Ley de Amor.",
    "ConexionDoctrinal": ["Agua del Desengaño", "Cimientos de Azúcar", "Triunfo de la Ley"],
    "NodosSimapticos": ["Triunfo de la Ley", "Cimientos de Azúcar", "Agua del Desengaño"]
  },
  "6881: CAPÍTULO VEINTE — La Tierra de Promisión ha sido manchada": {
    "PilotoDeCoherencia": "La Tierra es la herencia de los hijos de Eloí, pero ha sido manchada con la sangre de la ambición. Hay que limpiarla. La limpieza no es castigo, es profilaxis necesaria para que la 'Tierra de Promisión' sea realidad para todos, no solo para unos pocos.",
    "CitaInelutable": "Se rompe el alma de dolor... la tierra de promisión la han manchado y hay que limpiarla.",
    "EjemploPedagogico": "Como una casa que ha sido usada por vándalos: para que la familia pueda vivir en ella, primero hay que sacar la basura y desinfectar las paredes. La guerra es esa desinfección dolorosa.",
    "ConexionDoctrinal": ["Tierra de Promisión", "Profilaxis", "Herencia Universal"],
    "NodosSimapticos": ["Limpieza de la Tierra", "Mancha de Ambición", "Tierra de Promisión"]
  },
  "7215: CAPÍTULO VEINTE Y UNO — Lo que enseña la Escuela": {
    "PilotoDeCoherencia": "La Escuela Magnetológico-Espiritual no enseña fe, enseña la vida. Respondemos a las preguntas eternas: ¿De dónde venimos? ¿A qué venimos? ¿A dónde vamos? Con la ciencia del espíritu y el magnetismo, quitamos el velo del misterio que las religiones usaron para dominar.",
    "CitaInelutable": "Lo que sabe y enseña al hombre la Escuela Magnético-Espiritual de la Comuna Universal.",
    "EjemploPedagogico": "La Escuela es el mapa y la brújula. Las religiones eran vendas en los ojos y cadenas en los pies. Con el mapa en la mano, el hombre ya no necesita que nadie lo guíe por el miedo.",
    "ConexionDoctrinal": ["Enseñanza Racional", "Escuela Magnetológica", "Ciencia del Espíritu"],
    "NodosSimapticos": ["Sabiduría de la Escuela", "Mapa del Espíritu", "Misterio Roto"]
  },
  "7358: CAPÍTULO VEINTE Y DOS — El Crepúsculo de la Paz": {
    "PilotoDeCoherencia": "Los hombres piden paz al mismo dios que invocan para la guerra. Esa paz es falsa. La verdadera paz es el resultado de la justicia. Mientras exista un solo hombre con hambre o un solo dogma con poder, no habrá paz real, solo treguas de miedo.",
    "CitaInelutable": "Piden los hombres la paz, al dios que invocan para la guerra. ¿Puede haber paz?",
    "EjemploPedagogico": "Pedir paz manteniendo la injusticia es como pedir que una herida no duela mientras se sigue clavando el cuchillo. Saca el cuchillo (la causa de la guerra) y la paz (la curación) vendrá sola.",
    "ConexionDoctrinal": ["Falsa Paz", "Justicia es Paz", "Causas de la Guerra"],
    "NodosSimapticos": ["Crepúsculo de la Paz", "Paz Racional", "Invocación de Guerra"]
  },
  "7454: CAPÍTULO VEINTE Y TRES — El Alba de la Justicia": {
    "PilotoDeCoherencia": "El Alba llega cuando el hombre asume el C.G.S. (Código de Gobierno Social). Ya no teme a la fantasía religiosa. La justicia empieza por el reconocimiento de la igualdad de todos los seres. Es el primer rayo de luz después de la noche de los siglos.",
    "CitaInelutable": "Ya no teme el hombre a la fantasía. Está en posesión del C.G.S.",
    "EjemploPedagogico": "El Alba es el momento en que ya puedes ver los obstáculos del camino y quitarlos. El C.G.S. es la herramienta para limpiar el sendero de la humanidad.",
    "ConexionDoctrinal": ["Alba de la Justicia", "CGS", "Fin de la Fantasía"],
    "NodosSimapticos": ["Alba de Justicia", "CGS en Acción", "Luz del Día"]
  }
};

// Actualizar Esencia
Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

// Actualizar Diccionario
const terminosDic = {
  "Cimientos de Azúcar": {
    "Definición": "Metáfora de las instituciones, leyes y religiones basadas en la mentira, el miedo y la ilusión abstracta. Parecen sólidas pero se disuelven ante la verdad y la justicia.",
    "Contexto": "Capítulo XIX de Los Extremos se Tocan. Trincado las contrapone a los cimientos firmes de la naturaleza y las matemáticas de la Ley.",
    "Conexiones": ["Agua del Desengaño", "Fantasía Religiosa", "Liquidación"],
    "Obras": ["Los Extremos se Tocan"]
  },
  "Agua del Desengaño": {
    "Definición": "La fuerza de la realidad y la verdad que disuelve las ilusiones y mentiras (cimientos de azúcar) sobre las que se ha construido la sociedad vieja.",
    "Contexto": "Capítulo XIX de Los Extremos se Tocan. Es el proceso de despertar colectivo a través del dolor de la guerra y la luz de la razón.",
    "Conexiones": ["Cimientos de Azúcar", "Juicio Supremo", "Despertar del Espíritu"],
    "Obras": ["Los Extremos se Tocan"]
  },
  "Tierra de Promisión": {
    "Definición": "La Tierra tal como debe ser bajo la Ley de Amor: un lugar de abundancia, justicia y fraternidad para todos los hijos de Eloí. No es un paraíso místico sino una realidad social a construir.",
    "Contexto": "Capítulo XX de Los Extremos se Tocan. Trincado señala que para alcanzarla, primero hay que limpiar la tierra de las manchas de la ambición.",
    "Conexiones": ["Comuna Universal", "Mundo Comunizado", "Eloí"],
    "Obras": ["Los Extremos se Tocan", "Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 9 nodos 1:1 (Cap XV-XXIII) y 3 términos sinápticos.');

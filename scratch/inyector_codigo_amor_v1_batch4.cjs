const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/codigo-de-amor-universal-tomo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Código de Amor Universal Tomo 1 (Batch 4 - Claves 45 a 59)
const nuevosNodos = {
  "4255: Punto Primero: como hemos visto, los efectos desastrosos...": {
    "PilotoDeCoherencia": "Libertad vs Libertinaje. El amor y la libertad de la mujer son el antídoto contra el libertinaje; la Comuna ofrece las facilidades de justicia para el divorcio necesario.",
    "CitaInelutable": "Amor y la libertad de la mujer, mata el libertinaje... ofrece facilidades extremas y de justicia para sentar las sentencias del divorcio.",
    "EjemploPedagogico": "Una ventana abierta deja entrar aire puro y mata el olor a encierro; la libertad es el aire puro que limpia la corrupción de la imposición.",
    "ConexionDoctrinal": ["Derechos de la Mujer", "Justicia del Divorcio"],
    "NodosSimapticos": []
  },
  "4341: Punto segundo: la mujer es parte integrante... y le corresponde legislar.": {
    "PilotoDeCoherencia": "Sabiduría Femenina. La mujer no es un arcano impenetrable, sino un libro abierto de amor; por su fisiología y misión, le corresponde participar en la legislación de la humanidad.",
    "CitaInelutable": "Mujer es parte integrante de la humanidad y le corresponde, por su fisiología, legislar... mujer es un libro abierto.",
    "EjemploPedagogico": "Una biblioteca inmensa que los hombres no saben leer porque no usan las gafas del amor; al ponerse esas gafas, descubren que la mujer tiene la sabiduría de la vida.",
    "ConexionDoctrinal": ["Legislar (Papel de la Mujer)", "Amor como Sabiduría"],
    "NodosSimapticos": []
  },
  "4609: Párrafo i: el uso de la carne es ley de la naturaleza, y ella es amor": {
    "PilotoDeCoherencia": "Sexualidad Sagrada. El uso de la carne es una ley natural y de amor; Trincado aborda este tema complejo bajo el soplo del Espíritu de Verdad para limpiar los prejuicios religiosos.",
    "CitaInelutable": "Uso de la carne es ley de la naturaleza, y ella es amor... sobre mí está el espíritu de Verdad.",
    "EjemploPedagogico": "El fuego en la chimenea calienta la casa y da vida (amor); pero fuera de lugar quema el edificio (libertinaje) o su ausencia congela a los habitantes (celibato).",
    "ConexionDoctrinal": ["Uso de la Carne (Ley Natural)", "Crítica al Prejuicio"],
    "NodosSimapticos": ["Uso de la Carne (Ley Natural)"]
  },
  "4744: Párrafo iii: se falta a la ley por demás y por de menos": {
    "PilotoDeCoherencia": "Equilibrio de la Ley. Se viola la ley natural tanto por el exceso (libertinaje) como por la carencia (abstinencia forzada); la ley de justicia pesa según las deudas de cada ser.",
    "CitaInelutable": "Se falta a la ley por demás y por de menos... según las deudas que tenga o haber en sus cuentas.",
    "EjemploPedagogico": "Una balanza donde el libertino pone demasiado peso y el monje no pone nada; en ambos casos, la balanza se rompe y se pierde el equilibrio de la vida.",
    "ConexionDoctrinal": ["Justicia Retributiva", "Equilibrio Natural"],
    "NodosSimapticos": []
  },
  "5194: Párrafo v: el matrimonio dogmático es nulo ante la ley divina": {
    "PilotoDeCoherencia": "Nulidad del Dogma. Ningún rito religioso tiene validez ante la ley de Dios si falta el amor; el espíritu no está obligado a vivir en antipatía.",
    "CitaInelutable": "Matrimonio dogmático es nulo ante la ley divina... El espíritu no está obligado a vivir con los que le son antipáticos.",
    "EjemploPedagogico": "Firmar un papel diciendo que el agua es vino; por muchos sellos que tenga el papel, el líquido sigue siendo agua. Si no hay amor, no hay matrimonio real ante el Creador.",
    "ConexionDoctrinal": ["Nulidad del Matrimonio Dogmático", "Libertad de Unión"],
    "NodosSimapticos": ["Nulidad del Matrimonio Dogmático"]
  },
  "5531: Punto segundo: la emigración Adámica": {
    "PilotoDeCoherencia": "Origen de la Raza Adámica. La llegada de Adán y su falange fue una emigración de espíritus recalcitrantes de mundos que llegaron a su juicio final, enviados a la Tierra para progresar.",
    "CitaInelutable": "Son separados los recalcitrantes a un mundo primitivo... la emigración Adámica.",
    "EjemploPedagogico": "Un grupo de alumnos que no pasaron el examen en una universidad avanzada y son enviados a una escuela rural para que empiecen de nuevo y ayuden a los que allí viven.",
    "ConexionDoctrinal": ["Emigración Adámica (Hecho Cosmogónico)", "Juicio Final de Otros Mundos"],
    "NodosSimapticos": ["Emigración Adámica (Hecho Cosmogónico)"]
  },
  "5601: Párrafo i: las religiones, causa del desconcierto...": {
    "PilotoDeCoherencia": "Religión como Desorden. Desde la toma de posesión adámica, las religiones han sido la fuente de la división humana, creando tantos dioses como intereses de dominio.",
    "CitaInelutable": "Religiones, causa del desconcierto... tantas adoraciones como dioses y con tantos dioses como religiones.",
    "EjemploPedagogico": "Un rompecabezas donde cada pieza quiere ser la imagen completa y pelea con las demás, impidiendo ver la verdadera figura de la unidad universal.",
    "ConexionDoctrinal": ["Crítica a las Religiones", "Historia de la Humanidad"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Emigración Adámica (Hecho Cosmogónico)": {
    "Definición": "Suceso histórico-espiritual que describe la llegada a la Tierra de una falange de espíritus (simbolizados en Adán y Eva) procedentes de un mundo superior (Neptuno) que había alcanzado su mayoría de edad. Fueron desterrados o enviados a nuestro planeta para expiar sus culpas e impulsar el progreso de los homínidos terrestres.",
    "Contexto": "Código de Amor Universal Tomo 1 (Capítulo Sexto).",
    "Conexiones": ["Juicio Final", "Adán", "Pluralidad de Mundos"],
    "Obras": ["Código de Amor Universal", "Vida de María"]
  },
  "Uso de la Carne (Ley Natural)": {
    "Definición": "Reconocimiento de la función sexual y reproductiva como una ley sagrada de la naturaleza y el amor. La doctrina trincadista la libera del concepto de 'pecado' religioso y de la 'prostitución' social, estableciéndola como un derecho y deber de equilibrio para el espíritu encarnado.",
    "Contexto": "Código de Amor Universal Tomo 1 (Capítulo Quinto).",
    "Conexiones": ["Leyes de la Naturaleza", "Amor", "Procreación"],
    "Obras": ["Código de Amor Universal", "Conócete a ti mismo"]
  },
  "Nulidad del Matrimonio Dogmático": {
    "Definición": "Axioma legal que invalida cualquier contrato matrimonial basado exclusivamente en ritos religiosos o intereses materiales cuando falta la afinidad espiritual y el amor. Establece que ningún espíritu está obligado por ley divina a convivir con otro que le resulte antipático o perjudicial para su progreso.",
    "Contexto": "Código de Amor Universal Tomo 1 (Párrafo sobre el matrimonio nulo).",
    "Conexiones": ["Justicia del Divorcio", "Amor Libre", "Dogma"],
    "Obras": ["Código de Amor Universal"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectado Batch 4 de Código de Amor T1 (7 nodos) e inyectada RECTIFICACIÓN ADÁMICA.');

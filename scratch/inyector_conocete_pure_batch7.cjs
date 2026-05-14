const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Destilación Pura 1:1 - Conócete a ti mismo (Batch 7 - Claves 100 a 119)
const nuevosNodos = {
  "12388: Párrafo i: eL CRiMen en GeneRaL El crimen es, todo aquello que causa daño a otro y aun a sí mismo, ya": {
    "PilotoDeCoherencia": "Definición universal del crimen. Cualquier daño, por intención o negligencia, es crimen. El moral es el más grave por herir el sentimiento.",
    "CitaInelutable": "El crimen es todo aquello que causa daño a otro... el mayor es el crimen moral.",
    "EjemploPedagogico": "Dañar la reputación de alguien es un crimen moral que deja cicatrices que ningún médico puede ver.",
    "ConexionDoctrinal": ["Crimen Moral", "Dignidad Humana"],
    "NodosSimapticos": ["Crimen Moral"]
  },
  "12423: Punto primero: Los aRReBaTos (CaPÍTULo Viii: ConoCiMienTo De CaUsas Y eFeCTos)": {
    "PilotoDeCoherencia": "Falta de dominio. El arrebato es imprudencia y violencia; incluso si genera un bien, es una falta por la precipitación del espíritu.",
    "CitaInelutable": "El arrebato... es una falta de dominio propio.",
    "EjemploPedagogico": "Un grito violento para 'ayudar' a alguien sigue siendo una falta de armonía en el espíritu que lo emite.",
    "ConexionDoctrinal": ["Dominio Propio"],
    "NodosSimapticos": []
  },
  "12496: Punto segundo: La CaLUMnia Y eL asesinaTo": {
    "PilotoDeCoherencia": "Vileza de la calumnia. Calumniar es más vil que asesinar el cuerpo, pues busca asesinar el honor y el espíritu social del individuo.",
    "CitaInelutable": "Jamás la calumnia puede invocar atenuantes... siempre será más vil el calumniador que el asesino.",
    "EjemploPedagogico": "El asesino quita la vida física; el calumniador quita la vida social y la paz del espíritu.",
    "ConexionDoctrinal": ["Calumnia vs Asesinato"],
    "NodosSimapticos": []
  },
  "12602: Punto tercero: eL PeCaDo (CaPÍTULo Viii: ConoCiMienTo De CaUsas Y eFeCTos)": {
    "PilotoDeCoherencia": "Pecado como mentira a la ley. No se peca contra el Creador (intocable), sino contra sus leyes mediante la mentira y la temeridad de conciencia.",
    "CitaInelutable": "La mentira en los juramentos... son lo que llamo pecado, porque entrañan directamente a las leyes del creador.",
    "EjemploPedagogico": "Pecar es intentar engañar a la ley de gravedad espiritual; el golpe te lo das tú mismo.",
    "ConexionDoctrinal": ["Pecado (Definición Racional)", "Leyes vs Creador"],
    "NodosSimapticos": ["Pecado (Definición Racional)"]
  },
  "12661: Punto cuarto: DesaFÍos Y ConTRaBanDos, son DeLiTos": {
    "PilotoDeCoherencia": "Burla a la ley. Los desafíos (duelos) y contrabandos son delitos porque buscan eludir la responsabilidad social y la justicia comunal.",
    "CitaInelutable": "El delito de desafío se hace burlando la ley que pena el asesinato.",
    "EjemploPedagogico": "El duelo es un 'contrabando de vidas' donde se intenta legitimar el asesinato bajo un falso honor.",
    "ConexionDoctrinal": ["Delitos Sociales"],
    "NodosSimapticos": []
  },
  "12764: Punto quinto: eL enVenenaMienTo Y Los inCenDios, son La MaLDaD ReFinaDa": {
    "PilotoDeCoherencia": "Cobardía premeditada. El veneno y el fuego representan la maldad refinada por ser actos cobardes que no dan oportunidad de defensa.",
    "CitaInelutable": "Nos encontramos con maldad refinada en el envenenamiento y el incendio.",
    "EjemploPedagogico": "Actuar en las sombras y con engaño es el grado más bajo de la escala moral.",
    "ConexionDoctrinal": ["Maldad Refinada"],
    "NodosSimapticos": ["Maldad Refinada"]
  },
  "12828: Párrafo ii: eL inFanTiCiDio es eL MÁs CoBaRDe De Los CRÍMenes": {
    "PilotoDeCoherencia": "Crimen contra el indefenso. El infanticidio carece de atenuantes; es la máxima cobardía contra la vida que empieza.",
    "CitaInelutable": "El infanticidio es el más cobarde de los crímenes.",
    "EjemploPedagogico": "Apagar una vela que apenas se enciende es el acto de mayor oscuridad humana.",
    "ConexionDoctrinal": ["Infanticidio", "Responsabilidad Materna/Paterna"],
    "NodosSimapticos": []
  },
  "13002: Párrafo iii: ¿QUÉ es eL RoBo Y QUiÉn Lo CoMeTe?": {
    "PilotoDeCoherencia": "Robo sistémico. El robo material nace del desequilibrio religioso; las religiones son las únicas que roban con 'patente divina' el esfuerzo del trabajador.",
    "CitaInelutable": "Las religiones... realmente son las únicas que roban el sudor del trabajador.",
    "EjemploPedagogico": "El ladrón de calle es un efecto; la religión que predica la pobreza mientras acumula tesoros es la causa del robo.",
    "ConexionDoctrinal": ["Robo Religioso", "Justicia Económica"],
    "NodosSimapticos": []
  },
  "13205: Párrafo iV: ConoCiMienTos PaRa JUZGaR Los HeCHos en GeneRaL": {
    "PilotoDeCoherencia": "Justicia informada. Para juzgar, se requiere el estudio profundo de la mecánica de los hechos y no solo la apariencia superficial.",
    "CitaInelutable": "Poder juzgar los hechos... científica y racionalmente.",
    "EjemploPedagogico": "Antes de decir que una máquina no sirve, estudia cómo funciona cada engranaje.",
    "ConexionDoctrinal": ["Metodología de Juicio"],
    "NodosSimapticos": []
  },
  "13406: Párrafo V: esTUDio De Los HeCHos en PaRTiCULaR": {
    "PilotoDeCoherencia": "Microscopía moral. El estudio de un hecho particular exige medir facultades y circunstancias, atomizando el hecho hasta lo microscópico.",
    "CitaInelutable": "Atomizando hasta lo microscópico, todo lo que se refiere al hecho.",
    "EjemploPedagogico": "Un solo golpe puede ser defensa propia o ataque; solo el microscopio de la razón ve la intención real.",
    "ConexionDoctrinal": ["Atomización del Hecho"],
    "NodosSimapticos": []
  },
  "14402: Párrafo Vi: MeDios De La naTURaLeZa PaRa CoRReGiR aL HoMBRe": {
    "PilotoDeCoherencia": "Corrección natural. La naturaleza utiliza sus propias leyes para corregir al hombre sin necesidad de castigos antropomórficos.",
    "CitaInelutable": "La naturaleza, en sus leyes, es inflexible.",
    "EjemploPedagogico": "Si caminas contra el viento, el viento te frena; no te castiga, te enseña a caminar a favor de la ley.",
    "ConexionDoctrinal": ["Corrección por Ley"],
    "NodosSimapticos": []
  },
  "14512: Párrafo Vii: eL HoMBRe no se CoRRiGe PoR eL CasTiGo, sino PoR eL TRaBaJo Y eL aMoR": {
    "PilotoDeCoherencia": "Regeneración por amor. Las cárceles solo generan odio; la verdadera corrección del espíritu solo se logra mediante el trabajo útil y el amor que educa.",
    "CitaInelutable": "El hombre no se corrige por el castigo, sino por el trabajo y el amor.",
    "EjemploPedagogico": "Encerrar a un pájaro no le quita las ganas de escapar; enseñarle a volar en libertad le quita las ganas de picotear la jaula.",
    "ConexionDoctrinal": ["Rehabilitación Espiritual", "Crítica al Sistema Penal"],
    "NodosSimapticos": []
  },
  "14669: Párrafo Viii: eL HoMBRe no PUeDe CasTiGaR aL HoMBRe": {
    "PilotoDeCoherencia": "Prohibición del castigo. Ningún hombre tiene autoridad moral para castigar a otro; solo se debe buscar la corrección fraterna.",
    "CitaInelutable": "La ley divina y su autor, prohíben al hombre castigar al hombre.",
    "EjemploPedagogico": "Un alumno no puede castigar a otro alumno; solo el director (la Ley) puede señalar el error para que sea corregido.",
    "ConexionDoctrinal": ["No Castigar", "Ejemplo de Jesús"],
    "NodosSimapticos": []
  },
  "14808: Párrafo iX: eL HoMBRe nUnCa es DesHeReDaDo": {
    "PilotoDeCoherencia": "Justicia paterna. Ningún ser es desheredado por Eloí; la pobreza es un invento humano que viola la ley divina de igualdad.",
    "CitaInelutable": "Ningún hombre es desheredado... la pobreza es quebrar a sabiendas la ley del creador.",
    "EjemploPedagogico": "El sol sale para todos; si alguien vive en la sombra, es porque otros levantaron muros.",
    "ConexionDoctrinal": ["Universalidad de la Herencia"],
    "NodosSimapticos": []
  },
  "15128: PaRTe CUaRTa: ConoCiMienTo De RÉGiMen": {
    "PilotoDeCoherencia": "Estructura formal de la cuarta parte: Organización y Leyes Sociales.",
    "CitaInelutable": "PaRTe CUaRTa: ConoCiMienTo De RÉGiMen.",
    "EjemploPedagogico": "El orden de la convivencia.",
    "ConexionDoctrinal": [],
    "NodosSimapticos": []
  },
  "15136: Párrafo i: eL HoMBRe Tiene iMPResa La LeY DiVina": {
    "PilotoDeCoherencia": "Inmanencia de la ley. Tras estudiar la vida eterna, se concluye que el hombre lleva la ley divina grabada en su espíritu, lo que le permite el autoconocimiento.",
    "CitaInelutable": "El hombre tiene impresa la ley divina... para que el hombre se conozca a sí mismo.",
    "EjemploPedagogico": "Tu conciencia es el libro de leyes que siempre llevas contigo; no necesitas ir a la biblioteca para saber lo que es justo.",
    "ConexionDoctrinal": ["Ley Impresa", "Inherencia de la Ley"],
    "NodosSimapticos": ["Inherencia de la Ley"]
  }
};

Object.assign(esencia, nuevosNodos);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Pecado (Definición Racional)": {
    "Definición": "Término que la Escuela rescata del misticismo para definirlo como la mentira deliberada contra la propia conciencia y las leyes universales. No se peca contra Dios (quien es inalcanzable para la ofensa humana), sino contra la armonía de la Ley, lo que genera una deuda automática en el archivo del espíritu que debe ser saldada por el mismo ser.",
    "Contexto": "Conócete a ti mismo (Capítulo VIII, Punto Tercero).",
    "Conexiones": ["Ley de Justicia", "Responsabilidad del Espíritu", "Conciencia"],
    "Obras": ["Conócete a ti mismo", "Cuestionario Espírita Racional"]
  },
  "Maldad Refinada": {
    "Definición": "Categoría de actos delictivos que implican un alto grado de cobardía, alevosía y premeditación, tales como el envenenamiento o el incendio provocado. Estos actos se consideran de mayor gravedad espiritual porque anulan la posibilidad de defensa del agredido y demuestran un espíritu calculador en el mal.",
    "Contexto": "Conócete a ti mismo (Capítulo VIII, Punto Quinto).",
    "Conexiones": ["Crimen Moral", "Responsabilidad del Espíritu", "Grados de Culpa"],
    "Obras": ["Conócete a ti mismo"]
  },
  "Inherencia de la Ley": {
    "Definición": "Principio doctrinal que establece que la Ley de Amor y los principios universales no son imposiciones externas, sino que forman parte de la estructura íntima del espíritu humano. Esta 'impresión' de la ley en el ser es lo que garantiza que todo espíritu, tarde o temprano, despierte a la verdad y se rehabilite por su propio esfuerzo.",
    "Contexto": "Conócete a ti mismo (Capítulo IX, Párrafo I).",
    "Conexiones": ["Ley Impresa", "Autoconocimiento", "Rehabilitación Espiritual"],
    "Obras": ["Conócete a ti mismo", "Filosofía Austera Racional"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Inyectados 16 nodos PURA CALIDAD 1:1 de Conócete a ti mismo (Batch 7) y 3 términos sinápticos.');

const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-extremos-se-tocan_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "1387 al Final: La Liquidación y la Paz Inevitable": {
    "PilotoDeCoherencia": "Declara que la humanidad ha llegado al límite matemático del progreso material en la dualidad cuerpo-alma. Define la situación mundial como una 'liquidación forzosa' donde el espíritu da contramarcha a la máquina del error para evitar el descarrilamiento del planeta. Profetiza el fin de las fronteras y el nacimiento de una paz sin armas.",
    "IdeasSecundarias": [
      "La guerra continuará hasta matar la guerra y sus causas (las religiones y supremáticos).",
      "La Tierra se transformará físicamente para albergar a la familia regenerada bajo luz ininterrumpida.",
      "El 'Espíritu de Verdad' está presente en la Tierra como testigo y guía de esta liquidación final."
    ],
    "CitasIneludibles": [
      "La guerra continuará hasta matar la guerra.",
      "la tierra se transforma, se regenera.",
      "el espíritu dio contramarcha a la máquina del error."
    ]
  },
  "El Triunfo del Hombre: ¡Viva Adán!": {
    "PilotoDeCoherencia": "Concluye que la obra de los 29 misioneros ha triunfado al conseguir una mayoría de espíritus regenerados. El reconocimiento de Adán simboliza la victoria de la razón sobre el dogma y el inicio del usufructo común de la Tierra. Establece que, tras el juicio, el hombre sabrá que fuera del Padre no hay otro Dios.",
    "IdeasSecundarias": [
      "El progreso material debe ser espiritualizado para servir al bienestar común.",
      "La historia de la Tierra será rescrita desde su germen telúrico para borrar las mentiras religiosas.",
      "Cada hombre debe ser su propio juez inexorable, basándose solo en sus obras."
    ],
    "CitasIneludibles": [
      "¡Viva Adán! Y vivirá.",
      "redimiré sin Dinero, ya que sin precio fuistes esclavo.",
      "seamos Jueces inexorables cada uno de sí mismo, por sus obras."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 3 de Los Extremos se Tocan inyectado. Obra completada.');

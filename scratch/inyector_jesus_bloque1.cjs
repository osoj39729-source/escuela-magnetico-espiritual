const fs = require('fs');
const path = 'F:/trincado/public/data/contents/jes-s-hombre-y-no-dios_esencia.json';

const esencia = {
  "7 al 93: Proclamación: El Hombre contra el Ídolo": {
    "PilotoDeCoherencia": "Declara el fin del mito del 'Cristo' y la restitución de Jesús como hombre íntegro, hermano de la humanidad y misionero del Creador. Define al 'Cristo' como una fábula provechosa para las religiones y una mentira que no puede convertirse en verdad por más que aumente su poderío. Establece que Jesús, siendo Dios, no tendría valor alguno; su grandeza reside en su humanidad.",
    "IdeasSecundarias": [
      "El 'Sol Novus-Cristo' de Constantino fue creado para proteger el cesarismo del Vaticano.",
      "La letra mata al espíritu; el dogma católico es el verdugo de la fe racional.",
      "La Escuela Magnético-Espiritual es la única sucesora legítima de la Cábala de Moisés."
    ],
    "CitasIneludibles": [
      "Jesús Hombre y no Dios.",
      "Desde tiempos inmemoriales es sabido cuán provechosa nos ha resultado esa fábula de Jesucristo.",
      "Dar al César lo que es del César y a Dios lo que es de Dios."
    ]
  },
  "94 al 300: Nazaret: La Familia y el Nacimiento Real": {
    "PilotoDeCoherencia": "Relata la genealogía y el nacimiento natural de Jesús. Nacido en Nazaret el 4 de diciembre, hijo de José (Adán/Abraham reencarnado) y María (Eva/Sara). Desmiente la virginidad de María y el nacimiento en Belén, situando a Jesús en un hogar de trabajadores con 7 hermanos de padre y madre, y 5 hermanos del primer matrimonio de José.",
    "IdeasSecundarias": [
      "José era un carpintero honrado y miembro de la Cábala Secreta de Moisés.",
      "María era una médium potente cuya misión era preparar al misionero en la carne.",
      "La carta de José a Arimatea (cuando Jesús tenía 12 años) prueba la preocupación del padre por el destino de su hijo."
    ],
    "CitasIneludibles": [
      "Nace Jesús, hijo primero del matrimonio de José el carpintero de Nazareth y de María de Jericó.",
      "No nació Jesús en Bethlehém; no hubo tales pastores... ni reyes Magos.",
      "María, mujer simple como todas las mujeres; y Jesús, hombre como todos los hombres."
    ]
  },
  "301 al 500: La Formación Esénica: El Grado de Maestro": {
    "PilotoDeCoherencia": "Describe la educación de Jesús en Jerusalén bajo la tutela de José de Arimatea y su ingreso en la Comunidad de los Esenios. Define su formación en las escrituras, el Veda, el magnetismo y la alta magia (psiquismo), graduándose como Maestro a los 28 años. Establece que su sabiduría no era 'infusa', sino fruto del estudio y de la memoria de su espíritu.",
    "IdeasSecundarias": [
      "Jesús penetró en los secretos de la Cábala y el dominio magnético sobre la materia.",
      "Su doctrina era perfectamente civil y acusadora, centrada en los derechos del pueblo.",
      "La escuela Escénica desarrollaba facultades que el vulgo, por ignorancia, llamaba 'milagros'."
    ],
    "CitasIneludibles": [
      "Jesús es llevado a la comunidad de los Escenios, para hacerse maestro.",
      "Su moral era perfectamente civil, nada de misticismo.",
      "En esas condiciones es graduado maestro en la Escuela Escénica."
    ]
  }
};

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 1 de Jesús Hombre y no Dios inyectado.');

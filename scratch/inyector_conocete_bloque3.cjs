const fs = require('fs');
const path = 'F:/trincado/public/data/contents/conocete-a-ti-mismo-1_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "7513 al 7571: Mecánica del Espíritu: Los Hilos Fluídicos": {
    "PilotoDeCoherencia": "Explica que el espíritu acciona sobre el cuerpo y sus moléculas a través de hilos fluídicos o vibratorios. Establece una jerarquía de comunicación magnética: desde el Padre a los maestros de mundos, y de estos a la conciencia de cada individuo. La voluntad del espíritu vibra en la víscera o miembro correspondiente de forma instantánea.",
    "IdeasSecundarias": [
      "El espíritu sabio posee más hilos de afinidad con otros mundos y seres del universo.",
      "El desdoblamiento espiritual permite al maestro actuar fuera del cuerpo manteniendo el control de su máquina.",
      "La inspiración es una vibración recibida a través de estos hilos desde archivos superiores."
    ],
    "CitasIneludibles": [
      "el espíritu de cada hombre, tiene un hilo de cada uno de los miembros y moléculas de su cuerpo.",
      "el espíritu... obra, vibrando aquella voluntad en la víscera que debe moverse.",
      "Estos hilos... indican, además de cargos, afinidades."
    ]
  },
  "7572 al 7646: Memoria vs Conciencia: El Archivo del Alma": {
    "PilotoDeCoherencia": "Desmitifica la memoria cerebral, ubicándola en los instintos del alma. Define la Conciencia como el archivo total y ordenado de todas las existencias del espíritu. El cerebro es solo el instrumento de paso, no el depósito. El talento real es el conocimiento ya poseído en existencias anteriores que el espíritu extrae de su archivo (conciencia).",
    "IdeasSecundarias": [
      "La memoria animal es limitada a hechos recientes; la conciencia espiritual es eterna y acumulativa.",
      "El estudio sin talento es solo copia de memoria; el talento es sabiduría extraída de la conciencia propia.",
      "Cada nueva existencia agrega una 'hoja' al archivo del alma que el espíritu debe purificar y dominar."
    ],
    "CitasIneludibles": [
      "decir memoria, es decir acción animal; y decir conciencia, es evocar sentimientos.",
      "las cosas y los hechos se graban en el alma... es conciencia en el hombre por el espíritu.",
      "no se imprime en la masa encefálica... sino en el alma."
    ]
  },
  "7647 al 8161: La Trinidad Humana: La Estatura del Hombre": {
    "PilotoDeCoherencia": "Sentencia que el ser humano es solo un 'aspirante a hombre' hasta que logra vivir su Trinidad (Espíritu, Alma y Cuerpo en armonía). El hombre verdadero es aquel cuya Razón (Espíritu) domina las sensiblerías del alma y las inclinaciones del cuerpo. Diferencia al hombre 'Dúo' (que solo cumple la ley) del hombre 'Trino' (que es capaz de elevar y espiritualizar la ley).",
    "IdeasSecundarias": [
      "La mayoría de la sociedad actual está compuesta por 'niños grandes' o 'dúos' que no asumen su responsabilidad trina.",
      "La espiritualización es la tendencia inevitable de todo progreso humano y material.",
      "Ser trino implica no detenerse en ningún escalón de progreso, buscando siempre elevar la ley hacia la justicia."
    ],
    "CitasIneludibles": [
      "el hombre no lo es, hasta que vive su Trinidad.",
      "el hombre verdadero es aquel cuya Razón domina a la sensiblería de su alma.",
      "si no sabe aquel funcionario elevar la ley, sólo es un hombre dúo consciente."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Bloque 3 de Conócete a ti mismo inyectado.');

const fs = require('fs');
const path = 'F:/trincado/public/data/contents/los-cinco-amores_esencia.json';
let esencia = JSON.parse(fs.readFileSync(path, 'utf8'));

Object.assign(esencia, {
  "6868: CAPÍTULO SÉPTIMO: El Amor a la Libertad como Esencia del Espíritu": {
    "PilotoDeCoherencia": "La libertad es definida como el atributo supremo del hombre, equiparable a la importancia del espíritu en la Creación. Un ser sin libertad carece de la condición humana esencial. Trincado establece que las leyes solo son legítimas si cuentan con la aprobación del pueblo, calificando la imposición forzada como un crimen contra la humanidad y la divinidad.",
    "IdeasSecundarias": [
      "Un pueblo esclavo pierde su valor y se convierte en una familia de miserables.",
      "Las protestas populares son el termómetro que indica la pérdida de libertad y representación gubernamental.",
      "Cualquier gobierno que no cuente con el apoyo plebiscitario debe entregar el poder a una constituyente popular."
    ],
    "CitasIneludibles": [
      "La Libertad es a los pueblos, lo que el progreso a la civilización... La libertad es para el hombre, lo que su espíritu para la Creación: el todo.",
      "Un hombre sin libertad, no es tal hombre.",
      "Las protestas de un pueblo indican que no hay libertad"
    ]
  },
  "7362: CAPÍTULO OCTAVO y 7859: CAPÍTULO DIEZ: Atavismos y Grandeza de Alma": {
    "PilotoDeCoherencia": "El amor regenerador tiene la tarea de destruir los atavismos, aquellos vicios ancestrales que frenan el progreso (como el matrimonio forzado). La verdadera grandeza no es material, sino espiritual (grandeza de alma), manifestada en el altruismo, el desinterés por la propiedad privada ('todo es de todos') y la resiliencia ante la maldad ajena.",
    "IdeasSecundarias": [
      "El atavismo social esclaviza a la mujer y genera hogares infelices basados en la tiranía paterna.",
      "El hombre de alma grande prioriza el remedio de los males ajenos sobre los propios.",
      "La bondad atesorada en el corazón es la única fuente real de grandeza humana."
    ],
    "CitasIneludibles": [
      "los vicios atávicos... son antiprogresistas: y al amor le está encomendado destruirlos.",
      "Sin grandezas de alma, no puede haber grandeza de corazón",
      "el hombre de alma grande... considera que todo, es de todos"
    ]
  },
  "8211: CAPITULO PRIMERO: El Estado es el Pueblo y la Justicia": {
    "PilotoDeCoherencia": "Redefinición del Estado: no es el gobierno, sino el pueblo, su territorio y sus derechos inalienables. La verdadera soberanía reside en la Justicia Plebiscitaria y Universal. Trincado denuncia la inmoralidad de la religión al crear castas 'intangibles', afirmando que todos los individuos (incluidos gobernantes) deben estar bajo el imperio de una ley común igualitaria.",
    "IdeasSecundarias": [
      "La autoridad en el Estado debe emular la justicia del orden familiar, respetando los derechos de todos los miembros.",
      "La política y los gobiernos deben estar siempre sometidos a la acción de la justicia soberana del pueblo.",
      "La maldad religiosa rompió la igualdad ante la ley al declarar privilegios divinos para ciertas personas."
    ],
    "CitasIneludibles": [
      "El Estado no es el gobierno... El Estado es el pueblo",
      "más que el gobierno, es la justicia el verdadero estado",
      "la maldad religiosa instituyó diferencias, declarando intangibles a ciertas personas, lo que constituye la más grande e inicua inmoralidad."
    ]
  }
});

fs.writeFileSync(path, JSON.stringify(esencia, null, 2), 'utf8');
console.log('Esencia de Los Cinco Amores (Bloque 8) actualizada.');

const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));
Object.assign(dic.CONCEPTOS, {
  "Libertad_Espiritu_Creacion": {
    "palabras_clave": ["libertad", "todo", "esencia", "creación", "espíritu", "derecho"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#6868: CAPÍTULO SÉPTIMO: El Amor a la Libertad como Esencia del Espíritu"],
    "contexto_real": "Definición de la libertad como la condición absoluta sin la cual el espíritu no puede manifestar su potencia creadora."
  },
  "Estado_es_el_Pueblo": {
    "palabras_clave": ["estado", "pueblo", "justicia plebiscitaria", "soberanía", "gobierno", "derechos"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#8211: CAPITULO PRIMERO: El Estado es el Pueblo y la Justicia"],
    "contexto_real": "Concepto político-social que devuelve la autoridad máxima a la colectividad humana, eliminando el absolutismo gubernamental."
  },
  "Atavismos_Antiprogresistas": {
    "palabras_clave": ["atavismo", "vicio ancestral", "costumbre", "antiprogreso", "amor regenerador", "destrucción"],
    "nodos_sinapticos": ["los-cinco-amores_esencia.json#7362: CAPÍTULO OCTAVO y 7859: CAPÍTULO DIEZ: Atavismos y Grandeza de Alma"],
    "contexto_real": "Lastres culturales y familiares que impiden la evolución del individuo y de la sociedad hacia la libertad."
  }
});
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');
console.log('Diccionario Sináptico ampliado para Los Cinco Amores.');

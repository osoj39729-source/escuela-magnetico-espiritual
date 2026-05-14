const fs = require('fs');
const esenciaPath = 'F:/trincado/public/data/contents/el-espiritismo-estudiado_esencia.json';
const dicPath = 'F:/trincado/public/data/diccionario_sinapsis.json';

let esencia = JSON.parse(fs.readFileSync(esenciaPath, 'utf8'));
let dic = JSON.parse(fs.readFileSync(dicPath, 'utf8'));

// Batch 2: claves 2547 a 5993
const batch2 = {
  "2547: PÁRRAFO III: CÓMO MOISÉS PROHIBIÓ EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Método de la Prohibición. La forma en que Moisés prohíbe revela su grandeza; no destruyó el conocimiento, sino que lo reservó para los iniciados en la ley.",
    "CitaInelutable": "CÓMO MOISÉS PROHIBIÓ EL ESPIRITISMO... lo más revelante de quién era él.",
    "EjemploPedagogico": "Un general que no destruye su arsenal, sino que lo guarda bajo llave; sabe que las armas son peligrosas en manos no entrenadas pero valiosas para el defensor preparado.",
    "ConexionDoctrinal": ["Moisés (Estrategia)", "Esoterismo Controlado"],
    "NodosSimapticos": []
  },
  "2693: CAPÍTULO SÉPTIMO: CUANDO EL HOMBRE PUEDE COMPRENDER EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Condición de Comprensión. El hombre solo puede comprender el espiritismo cuando ha superado el miedo, la superstición y ha despertado su razón crítica.",
    "CitaInelutable": "CUANDO EL HOMBRE PUEDE COMPRENDER EL ESPIRITISMO... cuando la razón supera al miedo.",
    "EjemploPedagogico": "Un niño que aprende a nadar; primero supera el miedo al agua, luego puede flotar, y solo después puede aprender las técnicas de salvamento.",
    "ConexionDoctrinal": ["Despertar Racional", "Condición de Estudio"],
    "NodosSimapticos": []
  },
  "2992: CAPITULO OCTAVO: CÓMO ES IMPOSIBLE SALIRSE DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Inevitabilidad de la Ley. Todo ser vivo participa del espiritismo aunque no lo sepa, porque el espiritismo es la ley de la vida misma.",
    "CitaInelutable": "CÓMO ES IMPOSIBLE SALIRSE DEL ESPIRITISMO... como es imposible salirse de la gravedad.",
    "EjemploPedagogico": "Intentar escapar de la respiración; puedes ignorarla, pero no puedes dejar de hacerla; el espiritismo es la respiración del espíritu.",
    "ConexionDoctrinal": ["Ley Natural", "Universalidad"],
    "NodosSimapticos": []
  },
  "3141: CAPÍTULO NOVENO: LA CREACIÓN EXISTE POR EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Fundamento Ontológico. Sin el vínculo espiritual, la creación se desintegraría; el espiritismo es la cohesión invisible que mantiene unido al universo.",
    "CitaInelutable": "LA CREACIÓN EXISTE POR EL ESPIRITISMO... es su columna vertebral invisible.",
    "EjemploPedagogico": "El campo magnético de la Tierra; invisible, pero sin él, la atmósfera se evaporaría y la vida cesaría; el espiritismo es el campo magnético del universo.",
    "ConexionDoctrinal": ["Creación (Proceso)", "Magnetismo Espiritual"],
    "NodosSimapticos": []
  },
  "3291: CAPÍTULO DIEZ: TODO EL PROGRESO ES EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Historia como Espiritismo. Cada avance de la humanidad en ciencia, arte o moral es una manifestación de la ley espiritual operando en la materia.",
    "CitaInelutable": "TODO EL PROGRESO ES EL ESPIRITISMO... el progreso no es otra cosa que espíritu evolucionando.",
    "EjemploPedagogico": "La historia de la medicina; desde el curandero tribal hasta la cirugía láser, todo es el espíritu del hombre superando los límites de la materia paso a paso.",
    "ConexionDoctrinal": ["Progreso", "Historia como Espiritismo"],
    "NodosSimapticos": []
  },
  "3318: En nuestra «Filosofía Austera Racional» y en «El Primer Rayo de luz»": {
    "PilotoDeCoherencia": "Interconexión del Canon. Se señala la continuidad doctrinal entre las obras del Maestro, formando un sistema unificado de conocimiento.",
    "CitaInelutable": "En nuestra «Filosofía Austera Racional» y en «El Primer Rayo de luz»: lanzamos un reto.",
    "EjemploPedagogico": "Las piezas de un puzle que se referencian mutuamente; cada obra es una pieza que completa la imagen total de la doctrina.",
    "ConexionDoctrinal": ["Bibliografía Canónica", "Sistema Doctrinal"],
    "NodosSimapticos": []
  },
  "3641: SEGUNDA PARTE: LAS FACULTADES DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Apertura Práctica. Se pasa de la existencia teórica a las herramientas prácticas que el espíritu tiene para conocerse y avanzar.",
    "CitaInelutable": "SEGUNDA PARTE: LAS FACULTADES DEL ESPIRITISMO.",
    "EjemploPedagogico": "El segundo volumen de un manual; el primero explicaba por qué existe el instrumento; este explica cómo tocarlo.",
    "ConexionDoctrinal": ["Mediumnidad", "Facultades"],
    "NodosSimapticos": []
  },
  "3645: CAPITULO PRIMERO: LA SABIDURIA DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Sabiduría Operativa. La sabiduría espiritista es la capacidad de aplicar las leyes naturales para el beneficio propio y colectivo, distinguiéndola del mero conocimiento teórico.",
    "CitaInelutable": "LA SABIDURÍA DEL ESPIRITISMO... no es erudición, es aplicación consciente.",
    "EjemploPedagogico": "La diferencia entre el médico que sabe todo sobre enfermedades y el sanador que además sana; la sabiduría es el conocimiento en acción.",
    "ConexionDoctrinal": ["Sabiduría", "Aplicación Práctica"],
    "NodosSimapticos": []
  },
  "3862: PÁRRAFO II: ELASTICIDAD DEL ALMA": {
    "PilotoDeCoherencia": "Plasticidad Espiritual. El alma puede expandirse más allá del cuerpo físico (desdoblamiento), adaptarse a múltiples contextos y volver sin daño a su envoltura.",
    "CitaInelutable": "ELASTICIDAD DEL ALMA... el alma puede ir y volver como un elástico perfecto.",
    "EjemploPedagogico": "Un buzo con traje de profundidad; su cuerpo va al fondo del mar y regresa; el alma hace lo mismo en el plano espiritual durante el desdoblamiento.",
    "ConexionDoctrinal": ["Desdoblamiento", "Alma (Naturaleza)"],
    "NodosSimapticos": []
  },
  "4037: CAPITULO II: LAS CIENCIAS ANTE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Tribunal de la Razón. Se evalúa si las ciencias positivas del siglo XIX y XX están preparadas para confirmar o refutar los principios del espiritismo.",
    "CitaInelutable": "LAS CIENCIAS ANTE EL ESPIRITISMO... los jueces que no han leído el expediente.",
    "EjemploPedagogico": "Un jurado de geólogos al que se le pide que juzguen una partitura musical; su competencia no alcanza el ámbito que deben juzgar.",
    "ConexionDoctrinal": ["Ciencia y Doctrina", "Materialismo"],
    "NodosSimapticos": []
  },
  "4115: PARRAFO II: MATERIALISTAS Y ESPIRITUALISTAS": {
    "PilotoDeCoherencia": "Dos Errores Simétricos. El materialismo niega el espíritu; el espiritualismo lo deforma; ambos se equivocan porque parten de premisas falsas.",
    "CitaInelutable": "MATERIALISTAS Y ESPIRITUALISTAS... los dos polos del error.",
    "EjemploPedagogico": "Un termómetro que marca 0 grados cuando hay 20 de frío y otro que marca 40 cuando hay 20 de calor; ambos mienten, aunque en dirección opuesta.",
    "ConexionDoctrinal": ["Materialismo (Crítica)", "Espiritualismo (Crítica)"],
    "NodosSimapticos": []
  },
  "4387: CAPÍTULO TERCERO: LAS RELIGIONES ANTE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Confrontación Doctrinal. Las religiones rechazan el espiritismo porque amenaza su monopolio sobre lo sagrado y devuelve al hombre la soberanía de su conciencia.",
    "CitaInelutable": "LAS RELIGIONES ANTE EL ESPIRITISMO... temen perder el control de las almas.",
    "EjemploPedagogico": "Un monopolio comercial que ataca al competidor que ofrece mejor producto a menor precio; no lo refutan con argumentos, sino con campañas de desprestigio.",
    "ConexionDoctrinal": ["Anticlericalismo", "Soberanía de Conciencia"],
    "NodosSimapticos": []
  },
  "4588: CAPITULO CUARTO: LOS QUE PROTESTAN DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Anatomía de la Resistencia. Se clasifican los tipos humanos que rechazan el espiritismo: el ignorante, el interesado, el cobarde y el fanático.",
    "CitaInelutable": "LOS QUE PROTESTAN DEL ESPIRITISMO... cada uno protesta desde su propia oscuridad.",
    "EjemploPedagogico": "Cuatro personas que se niegan a abrir las persianas de la habitación oscura; una tiene miedo de la luz, otra tiene interés en que no se vea el polvo, otra por inercia y otra por dogma.",
    "ConexionDoctrinal": ["Resistencia al Cambio", "Tipos Morales"],
    "NodosSimapticos": []
  },
  "4789: CAPITULO QUINTO: LA MEDICINA ANTE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Medicina Incompleta. La medicina materialista trata el cuerpo pero ignora el espíritu, causando enfermedades psicosomáticas que no puede curar por desconocer su causa real.",
    "CitaInelutable": "LA MEDICINA ANTE EL ESPIRITISMO... cura el cuerpo y desconoce al enfermo.",
    "EjemploPedagogico": "Un mecánico que cambia la batería de un auto sin darse cuenta de que el motor necesita aceite; el auto vuelve a fallar porque el diagnóstico fue incompleto.",
    "ConexionDoctrinal": ["Medicina (Crítica)", "Salud Integral"],
    "NodosSimapticos": []
  },
  "5139: CAPÍTULO SEXTO: LA QUÍMICA ANTE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Atomismo Espiritual. La química demuestra que todo se transforma y nada se destruye; el espiritismo amplía este principio al espíritu: también se transforma pero nunca desaparece.",
    "CitaInelutable": "LA QUÍMICA ANTE EL ESPIRITISMO... el principio de conservación aplicado al espíritu.",
    "EjemploPedagogico": "La ley de conservación de la energía; la energía no se crea ni se destruye, solo se transforma; el espíritu es la energía más refinada del universo.",
    "ConexionDoctrinal": ["Química y Espiritismo", "Conservación"],
    "NodosSimapticos": []
  },
  "5439: CAPITULO SÉPTIMO: LA ASTRONOMÍA ANTE EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Cosmos Habitado. La astronomía revela la inmensidad del universo; el espiritismo le da el paso siguiente: esos mundos están habitados por espíritus en diferentes grados de evolución.",
    "CitaInelutable": "LA ASTRONOMÍA ANTE EL ESPIRITISMO... el telescopio que no alcanza a ver las almas.",
    "EjemploPedagogico": "Ver luces en una ciudad lejana por la noche; la astronomía dice que hay estrellas; el espiritismo dice que hay vida en esas estrellas que también progresa.",
    "ConexionDoctrinal": ["Astronomía y Espiritismo", "Mundos Habitados"],
    "NodosSimapticos": []
  },
  "5691: CAPÍTULO OCTAVO: LA ELECTRICIDAD Y EL ESPIRITISMO": {
    "PilotoDeCoherencia": "Fuerza Madre. La electricidad es la manifestación más cercana al magnetismo espiritual que la ciencia ha logrado capturar; su estudio prepara al hombre para comprender la energía del alma.",
    "CitaInelutable": "LA ELECTRICIDAD Y EL ESPIRITISMO... la hermana menor del fluido espiritual.",
    "EjemploPedagogico": "La electricidad doméstica respecto al rayo; ambas son la misma fuerza, pero la primera está domesticada para el uso humano; el fluido espiritual es el rayo que aún no hemos aprendido a usar.",
    "ConexionDoctrinal": ["Electricidad", "Magnetismo Espiritual"],
    "NodosSimapticos": []
  },
  "5993: CAPITULO NOVENO: LA PATRIA DEL ESPIRITISMO": {
    "PilotoDeCoherencia": "Ciudadanía Universal. El espiritismo no pertenece a ninguna nación ni raza; su patria es el universo y su ciudadanía es el espíritu en progreso.",
    "CitaInelutable": "LA PATRIA DEL ESPIRITISMO... es el universo entero y todos los que lo habitan.",
    "EjemploPedagogico": "El aire; no tiene frontera, no tiene bandera, no necesita pasaporte; es de todos los que respiran.",
    "ConexionDoctrinal": ["Universalidad", "Ciudadanía Cósmica"],
    "NodosSimapticos": []
  }
};

Object.assign(esencia, batch2);
fs.writeFileSync(esenciaPath, JSON.stringify(esencia, null, 2), 'utf8');

const terminosDic = {
  "Ley de Afinidad": {
    "Definición": "Ley natural que determina la atracción o repulsión entre espíritus según su grado de evolución moral, amor y conocimiento. Regula la formación de familias, grupos de estudio y comunas espirituales.",
    "Contexto": "El Espiritismo Estudiado (Cap. Cuarto, Párrafo II).",
    "Conexiones": ["Amor", "Familia Espiritual", "Sesiones"],
    "Obras": ["El Espiritismo Estudiado", "Filosofía Austera Racional"]
  },
  "Materialismo (Crítica)": {
    "Definición": "Corriente filosófica que niega la existencia del espíritu y reduce toda realidad a la materia. Trincado la considera un error simétrico al espiritualismo, igualmente incapaz de comprender la totalidad de las leyes del universo.",
    "Contexto": "El Espiritismo Estudiado (Cap. Segundo, Párrafo II).",
    "Conexiones": ["Error", "Ciencia", "Dualismo"],
    "Obras": ["El Espiritismo Estudiado"]
  }
};

Object.assign(dic, terminosDic);
fs.writeFileSync(dicPath, JSON.stringify(dic, null, 2), 'utf8');

console.log('✅ Batch 2/4 (18 nodos 1:1). El Espiritismo Estudiado — Partes I y II completas. Ciencias ante el Espiritismo selladas.');

import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '4706: Febrero 6 de 1912 - Cleopatra': {
    'Piloto': 'Cleopatra y la transmigración de sexos en el poder.',
    'Idea': 'El espíritu asume roles masculinos y femeninos para su evolución. Cleopatra revela su reencarnación como el Papa Jerónimo X, demostrando que el mando terrenal rota entre los mismos espíritus en busca de redención o expiación.',
    'Ejemplo': 'Cleopatra confiesa que tras su paso por el trono de Egipto, ocupó la tiara papal como Jerónimo X, siendo juzgada ahora como parte de la jerarquía católica arrepentida.',
    'Cita': 'Cleopatra... reencarnó como el Papa Jerónimo X... ya trabaja en su progreso.',
    'Sinapsis': ['Transmigracion_de_Sexos', 'Papa_Jeronimo_X', 'Identidad_Espiritual']
  },
  '4721: Febrero 9 de 1912 - El hombre Juez': {
    'Piloto': 'El Syllabus y el perdón al perseguidor del Enviado.',
    'Idea': 'Los dogmas de infalibilidad y las bulas de persecución fueron fraudes del Colegio Sacro. El reconocimiento de la propia maldad ante la víctima (el Juez) es el primer paso para evitar el exilio sideral.',
    'Ejemplo': 'Un general jesuita y autor del Syllabus pide perdón a Trincado al reconocer que aquel a quien llamó "Anticristo" es en realidad el brazo de la justicia del Padre.',
    'Cita': 'El Syllabus fue escrito por el Colegio Sacro... la infalibilidad es una aberración... el amor te perdona.',
    'Sinapsis': ['Syllabus_Errorum', 'Fraude_de_la_Infalibilidad', 'Perdon_Doctrinal']
  },
  '4752: Febrero 11 de 1912 (Portillo) - Monje de Mont -Blanc': {
    'Piloto': 'El Monje de Mont-Blanc: Denuncia del celibato y las dos cortinas.',
    'Idea': 'El celibato es un delito contra la naturaleza que genera crimen e infanticidio en los conventos. Ante el juicio, el espíritu ve dos cortinas: la luz de Sión o el mundo de fraguas. Más de un millón de eclesiásticos eligen la humildad en la Tierra.',
    'Ejemplo': 'El Monje describe cómo el celibato convierte a los hombres en seres inferiores a las fieras al obligar al aborto y la prostitución oculta bajo los muros del claustro.',
    'Cita': 'El celibato es delito de lesa naturaleza... sanción del crimen... preferimos ser los últimos aquí.',
    'Sinapsis': ['Crimen_del_Celibato', 'Cortina_de_la_Conciencia', 'Juramento_Eclesiastico_Masivo', 'Ley_de_la_Carne']
  },
  '5026: Febrero 11 de 1912 Hora 21 (Portillo) - Chuilid de Lid Marte': {
    'Piloto': 'Chuilid de Lid: La Tierra como casa de muchos grados.',
    'Idea': 'La Tierra es un edificio de progreso con diversos "pisos" vibratorios. El alistamiento cósmico requiere superar el orgullo académico. El obrero humilde posee una inteligencia superior para la Cosmogonía al estar libre de prejuicios de clase.',
    'Ejemplo': 'Chuilid de Lid (espíritu de Marte) celebra que el hombre humilde ya recorre Sión en desdoblamiento mientras el "sabio" materialista se ahoga en sus propios vacíos intelectuales.',
    'Cita': 'La tierra es una casa de muchos pisos... el sabio pretencioso es un ciego de voluntad... injertaos en el amor.',
    'Sinapsis': ['Casa_de_Muchos_Pisos', 'Confederacion_Cosmica', 'Inteligencia_del_Obrero', 'Injerto_Espiritual']
  },
  '5223: Febrero 17 de 1912 (Portillo) - María Box de Foch': {
    'Piloto': 'María Box de Foch: Esclavitud monjil y la humanidad de María.',
    'Idea': 'La mujer en el claustro fue víctima de rapto y anestesia moral. La redención exige reconocer la humanidad natural de Jesús y María, eliminando el mito místico. El odio es una cadena que lleva al exilio voluntario.',
    'Ejemplo': 'María Box de Foch denuncia los partos ocultos y el robo de hijos en los conventos, aceptando la verdad de que María de Nazaret es una mujer y madre natural.',
    'Cita': 'Fuimos esclavas anestesiadas... María es mujer como todas... Jesús es hijo del hombre... una eligió el infierno voluntario.',
    'Sinapsis': ['Esclavitud_Monjil', 'Aborto_Eclesiastico', 'Humanidad_de_Maria_y_Jesus', 'Transmigracion_Igualitaria']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

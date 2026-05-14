import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '2557: Hermano aún voy con mi botiquín para el espíritu enfermo hoy no es día pero lo llevo por si acaso; en esta hora, no os había - para correr siempre dónde hay dolor.': {
    'Piloto': 'Juana de Arco: La medicina del dolor y el botiquín del espíritu.',
    'Idea': 'Juana de Arco asiste como enfermera espiritual a los espíritus abrumados por el remordimiento. El año 1912 se define como una etapa de medicina amarga pero necesaria para sanar el alma de la humanidad enferma de dogmas.',
    'Ejemplo': 'Juana explica que su misión de sacrificio fue un despertar de libertad y ahora asiste a las víctimas del fanatismo religioso en su tránsito al espacio.',
    'Cita': 'Vengo con mi botiquín para el espíritu enfermo... el dolor es la medicina... que lo fajen si barrigón ha nacido.',
    'Sinapsis': ['Juana_de_Arco_Espiritu', 'Botiquin_Espiritual', 'Medicina_del_Dolor', 'Mujer_Misionera']
  },
  '2584: Enero 1 de 1912 Hora 12 - del que por justicia lucha.': {
    'Piloto': 'Xavier: Apertura del año judicial 1912 y la balanza de justicia.',
    'Idea': 'Se inicia formalmente el proceso de liquidación de deudas espirituales. La balanza de la justicia universal exige equilibrio; el misionero debe ser inflexible en la verdad pero amoroso en la guía.',
    'Ejemplo': 'Xavier declara que el año 1912 marca el fin de la impunidad y el comienzo de la ejecución de sentencias sobre los espíritus que prevaricaron en la tierra.',
    'Cita': 'La balanza de la justicia está equilibrada... es hora de la liquidación... adelante el mundo, que adelantar es la ley.',
    'Sinapsis': ['Balanza_de_la_Justicia', 'Liquidacion_Espiritual', 'Acero_Doctrinal', 'Apertura_Judicial_1912']
  },
  '2617: Enero 2 de 1912 - Yo, pues, usé de esta llave.': {
    'Piloto': 'La Llave de la Verdad y el fin del secreto religioso.',
    'Idea': 'La "Llave de la Verdad" (la razón magnetizada) abre los archivos ocultos de las religiones y las conciencias. Se acaba la era del misterio y el secreto para dar paso a la transparencia absoluta de los actos del espíritu.',
    'Ejemplo': 'El Espíritu de Verdad usa esta llave para desvelar los crímenes históricos del clero, permitiendo que la humanidad vea la verdad desnuda de sus opresores.',
    'Cita': 'Yo, pues, usé de esta llave... no habrá secreto que no sea descubierto... la llave es la razón iluminada.',
    'Sinapsis': ['Llave_de_la_Verdad', 'Archivos_del_Pasado', 'Fin_de_la_Impunidad', 'Razon_Iluminada']
  },
  '2689: POSESION LL - Catalina': {
    'Piloto': 'Catalina de Siena: El despertar del misticismo y la cárcel religiosa.',
    'Idea': 'Catalina denuncia que su misticismo fue una cárcel espiritual impuesta por la Iglesia para esclavizar a la mujer. El culto a los santos es una aberración que detiene el progreso y oculta la verdadera misión del espíritu.',
    'Ejemplo': 'Catalina pide perdón por su pasado místico e idólatra y se une a la causa del progreso como una obrera que rechaza los altares para servir a la razón.',
    'Cita': 'Mi misticismo fue una cárcel... denuncia la hipocresía de la Iglesia... el altar de la mentira debe caer.',
    'Sinapsis': ['Catalina_de_Siena_Espiritu', 'Aberracion_Mistica', 'Idolatria_Religiosa', 'Despertar_del_Espiritu']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

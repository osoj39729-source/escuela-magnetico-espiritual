import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '2187: Posesión Portillo - Posesión Portillo': {
    'Piloto': 'El Testamento de Abraham y el cisma Espiritismo vs Espiritualismo.',
    'Idea': 'Abraham revela el origen adámico como una misión de mundos solares y define a los "demonios" como espíritus humanos en tinieblas. El Espiritismo es la esencia pura del espíritu, mientras que el Espiritualismo es una adaptación cobarde del dogma católico.',
    'Ejemplo': 'Abraham profetiza que 36 siglos después de su ley, la humanidad entenderá la Verdad. Trincado denuncia a los espiritualistas que, por soberbia y prejuicio, se niegan a aceptar la luz de la Cosmogonía.',
    'Cita': 'Hellí es uno; los mundos son infinitos... el espiritualismo es cobardía y una amalgama de religión y libertad... el espiritista es el águila que mira al sol de frente.',
    'Sinapsis': ['Testamento_de_Abraham', 'Hellí', 'Adanismo_Cosmogonico', 'Espiritismo_vs_Espiritualismo']
  },
  '2506: Diciembre 31 de 1911 Hora 24 a 01 de Enero de 1912 - Sé que no estoy sólo ni perdido.': {
    'Piloto': 'Xavier: Aliento para las luchas de 1912.',
    'Idea': 'El año 1912 se anuncia como un periodo de grandes luchas y acontecimientos definitivos. Se insta a los misioneros a mantener el valor bajo el amparo de la universalidad de los espíritus.',
    'Ejemplo': 'Xavier ratifica que el misionero no está solo en su lucha contra la opresión, pues cuenta con el respaldo de los consejos de luz de todos los mundos.',
    'Cita': 'Luchas os esperan en el año que empezáis... acontecimientos grandes veréis, pero confiad en el Padre.',
    'Sinapsis': ['Año_1912_Transicion', 'Aliento_de_la_Universalidad']
  },
  '2523: Paz y amor  os traigo y la felicitación de la universalidad, para que toméis aliento en las luchas que os esperan en el nuevo - y ánimo y no es malo.': {
    'Piloto': 'Jesús: Pan y Palo para la nueva etapa.',
    'Idea': 'Jesús reafirma su afinidad con los misioneros y humaniza la protección espiritual mencionando a José y María como compañeros de causa. Define la disciplina de estudio como un proceso de "pan y palo".',
    'Ejemplo': 'Jesús envía el beso de su padre José y anuncia la bendición de María para fortalecer la unión de la mesa doctrinal ante los desafíos del nuevo año.',
    'Cita': 'Vuestro hermano Jesús está con vosotros que sois sus afines... esto es pan y palo y ánimo y no es malo.',
    'Sinapsis': ['Pan_y_Palo', 'Fraternidad_de_Espiritus']
  },
  '2539: Qué  hermosa  armonía  hermanos  Esta  sí  es  la  paz  que  da  alegría  y  felicidad;  no  podría  faltaros  el  saludo  de  la  viajera  y - Fuera tan cumplida y llana.': {
    'Piloto': 'Teresa de Jesús: La paz de la unidad.',
    'Idea': 'La armonía entre los mundos material y espiritual produce la verdadera paz. Teresa celebra la unidad de los hermanos en la causa del Padre.',
    'Ejemplo': 'Teresa se presenta con sencillez para bendecir la mesa y fortalecer la felicidad del grupo en la entrada del nuevo ciclo solar.',
    'Cita': 'Qué hermosa armonía hermanos... esta sí es la paz que da alegría y felicidad.',
    'Sinapsis': ['Paz_de_la_Unidad', 'Armonia_Espiritual']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

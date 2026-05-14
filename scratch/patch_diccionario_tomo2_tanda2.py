import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Consejo_de_Sion': {
    'palabras_clave': ['Sion', 'Consejo', 'gobierno', 'espiritual', 'mandatario'],
    'definicion': 'Asamblea de espíritus superiores que rige el destino de la humanidad y autorizó la misión judicial de Trincado.',
    'vinculos': ['Master_Synapse', 'Francisco_Xavier_EV']
  },
  'Maquina_de_la_Verdad': {
    'palabras_clave': ['imprenta', 'lengua', 'Maestro', 'verdad', 'difusion'],
    'definicion': 'Uso de la tecnología de comunicación (imprenta, radio, etc.) para servir de lengua al misionero en la propagación de la ley de amor.',
    'vinculos': ['Progreso_del_Espiritu', 'Escuela_Magnetico_Espiritual']
  },
  'Casa_sobre_Arena': {
    'palabras_clave': ['arena', 'caida', 'religion', 'dogma', 'falsedad'],
    'definicion': 'Estructuras sociales y religiosas que, al carecer de bases racionales y amorosas, están destinadas a derrumbarse ante el juicio espiritual.',
    'vinculos': ['Fraude_Religioso', 'Juicio_a_los_Dioses']
  },
  'Sota_de_Bastos': {
    'palabras_clave': ['monarquia', 'papa', 'Austria', 'clero', 'derrota'],
    'definicion': 'Representación del poder despótico (religioso y político) que ha perdido su autoridad ante la luz de la verdad y el progreso.',
    'vinculos': ['Critica_Sociologica_Trincado', 'Soberania_Espiritual']
  },
  'Igualdad_de_Razas': {
    'palabras_clave': ['razas', 'colores', 'blancos', 'negros', 'jardin'],
    'definicion': 'Axioma que niega la supremacía de cualquier grupo étnico, afirmando que la variedad humana es una expresión de la belleza del Padre.',
    'vinculos': ['Equidad_Doctrinal', 'Comuna_Universal']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

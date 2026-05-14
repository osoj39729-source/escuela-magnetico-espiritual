import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Pilar_de_Zaragoza': {
    'palabras_clave': ['Pilar', 'Zaragoza', 'virgen', 'mistificacion', 'identidad'],
    'definicion': 'Espíritu de una mujer zaragozana cuya vida fue utilizada para crear el mito religioso de la Virgen del Pilar.',
    'vinculos': ['Desmitificacion_de_Maria', 'Identidad_Espiritual']
  },
  'Guerra_de_Tripoli': {
    'palabras_clave': ['Tripoli', 'Italia', 'Turquia', 'alianzas', 'guerra'],
    'definicion': 'Conflicto analizado por la Escuela como un síntoma de la injusticia geopolítica que llevó a la Gran Guerra de 1914.',
    'vinculos': ['Geopolitica_Espiritual', 'Justicia_del_Padre']
  },
  'Ley_de_Restitucion': {
    'palabras_clave': ['restitucion', 'crimen', 'reencarnacion', 'vida por vida', 'deuda'],
    'definicion': 'Ley que obliga al espíritu a compensar sus faltas mediante actos de creación o preservación de la vida en futuras existencias.',
    'vinculos': ['Ley_de_Justicia_Universal', 'Reencarnacion_Expiatoria']
  },
  'Teresa_de_Jesus_Iris': {
    'palabras_clave': ['Iris', 'Teresa', 'belleza', 'cebo', 'Antulio', 'Jesús'],
    'definicion': 'Identidad histórica de Teresa de Jesús en la época de Antulio, donde su belleza fue usada por sabios envidiosos para destruir al Maestro.',
    'vinculos': ['Antulio_el_Sabio', 'Santa_Teresa_Racionalista']
  },
  'Mandato_de_Adelante': {
    'palabras_clave': ['Adelante', 'batalla', 'luz', 'Francisco Xavier', 'mision'],
    'definicion': 'Orden suprema de los Consejos del Padre para que los espiritistas racionalistas inicien la redención de la humanidad mediante la verdad.',
    'vinculos': ['Batalla_de_la_Luz', 'Mision_de_la_Escuela']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

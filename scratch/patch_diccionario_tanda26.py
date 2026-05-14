import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Profecia_de_las_Tres_Generaciones': {
    'palabras_clave': ['generaciones', 'triunfo', 'siglo', 'Jesús', 'Espiritismo'],
    'definicion': 'La promesa de que el Espiritismo Luz será la doctrina universal aceptada en el término de tres generaciones humanas.',
    'vinculos': ['Nueva_Era', 'Triunfo_del_Espiritismo']
  },
  'Psicomantion': {
    'palabras_clave': ['psicomantion', 'templos', 'sabiduria', 'antigüedad', 'cabalistas'],
    'definicion': 'Antiguos centros de estudio espiritual y mediúmnico donde se recibían verdades racionales antes de la censura de la Iglesia.',
    'vinculos': ['Escuela_de_Verdad', 'Historia_Oculta']
  },
  'Amputacion_del_Dañino': {
    'palabras_clave': ['amputar', 'parasito', 'dañino', 'jacinto', 'cortar'],
    'definicion': 'El acto de justicia de alejar a personas maliciosas que, agotada la paciencia fraternal, solo buscan entorpecer la misión.',
    'vinculos': ['Limites_de_la_Fraternidad', 'Justicia_de_la_Ley']
  },
  'Mundos_Inferiores_en_la_Tierra': {
    'palabras_clave': ['mundos inferiores', 'atraso', 'vicio', 'aprendizaje', 'misioneros del error'],
    'definicion': 'Espíritus de planetas menos avanzados que vienen a la Tierra para experimentar su progreso y elevar sus propios mundos de origen.',
    'vinculos': ['Pluralidad_de_Mundos', 'Ley_de_Justicia']
  },
  'Espiritismo_vs_Espiritualismo': {
    'palabras_clave': ['espiritismo', 'espiritualismo', 'razon', 'mistica', 'ciencia'],
    'definicion': 'Diferencia entre el conocimiento racional del espíritu (Espiritismo) y la creencia dogmática o religiosa (Espiritualismo) que rechaza la lógica.',
    'vinculos': ['Espiritismo_Luz', 'Higiene_del_Espiritismo']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

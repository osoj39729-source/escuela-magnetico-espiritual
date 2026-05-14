import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Mundo_Eg_Eg': {
    'palabras_clave': ['Eg Eg', 'mundo', 'ovoide', 'satelites', 'perfeccion'],
    'definicion': 'Planeta de alta evolución donde la vida humana es longeva y vigorosa, y la transición espiritual es una fiesta de conocimiento.',
    'vinculos': ['Fisiologia_Espiritual_Superior', 'Unidad_de_la_Ley_Cosmica']
  },
  'Muerte_como_Graduacion': {
    'palabras_clave': ['muerte', 'graduacion', 'triunfo', 'cambio', 'estudio'],
    'definicion': 'Visión positiva del fin de la materia en mundos superiores, donde el espíritu celebra haber cumplido su etapa de aprendizaje.',
    'vinculos': ['Inmortalidad_del_Espiritu', 'Mundo_Eg_Eg']
  },
  'Espiritualismo_vs_Espiritismo': {
    'palabras_clave': ['espiritualismo', 'espiritismo', 'diferencia', 'racionalismo', 'amalgama'],
    'definicion': 'El Espiritualismo es la mezcla de misticismo y religión; el Espiritismo es la ciencia del espíritu sin dogmas ni templos.',
    'vinculos': ['Espiritismo_Luz_y_Verdad', 'Fraude_Religioso']
  },
  'Mision_de_Napoleon': {
    'palabras_clave': ['Napoleon', 'espada', 'justicia', 'tiara', 'precursor'],
    'definicion': 'Misión histórica de Napoleón Bonaparte para debilitar el poder papal y despertar la conciencia republicana en los pueblos.',
    'vinculos': ['Caida_de_la_Tiara_Papal', 'Precursor_del_Juez']
  },
  'Velo_de_Maria': {
    'palabras_clave': ['velo', 'Maria', 'consuelo', 'luz', 'perdon'],
    'definicion': 'Acción fluídica de María de Nazaret que auxilia a los espíritus avergonzados en el juicio, facilitando su arrepentimiento.',
    'vinculos': ['Humanidad_de_Maria_y_Jesus', 'Perdon_Doctrinal']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

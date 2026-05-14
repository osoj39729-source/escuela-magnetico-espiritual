import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Alianza_de_Religiones': {
    'palabras_clave': ['alianza', 'dogma', 'fusion', 'catolicismo', 'tradiciones'],
    'definicion': 'El síncrecis de teologías y filosofías antiguas realizado por la Iglesia para consolidar su poder temporal.',
    'vinculos': ['Demolicion_de_la_Iglesia', 'Comercio_Religioso']
  },
  'Veto_al_Pensamiento': {
    'palabras_clave': ['pensamiento', 'libertad', 'veto', 'analisis', 'caida'],
    'definicion': 'La restricción impuesta por el dogma para evitar que la razón humana descubra las falsedades de los misterios religiosos.',
    'vinculos': ['Ateismo_Racional', 'Ciencia_y_Espiritismo']
  },
  'Corrupcion_en_Conventos': {
    'palabras_clave': ['convento', 'monjas', 'corrupcion', 'crimen', 'orgia', 'margarita'],
    'definicion': 'La realidad de depravación oculta en las instituciones monásticas, denunciada como afrenta a la libertad del espíritu.',
    'vinculos': ['Demolicion_de_la_Iglesia', 'Suicidio_y_Expiacion']
  },
  'Juan_Meslier': {
    'palabras_clave': ['Meslier', 'sacerdote', 'rectificacion', 'religion natural', 'misionero'],
    'definicion': 'Espíritu de un sabio que, tras haber rebajado a Jesús en su obra encarnada, reconoce su error y se une a la milicia de la Escuela.',
    'vinculos': ['Desmitificacion_de_Jesus', 'Piqueta_Demoledora']
  },
  'Profecia_de_las_Dos_Generaciones': {
    'palabras_clave': ['dos generaciones', 'triunfo', 'aceleracion', 'Jesús', 'justicia'],
    'definicion': 'La reducción del plazo para el triunfo del Espiritismo Luz en la Tierra, señalada por Jesús ante el avance de la justicia.',
    'vinculos': ['Nueva_Era', 'Triunfo_del_Espiritismo']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

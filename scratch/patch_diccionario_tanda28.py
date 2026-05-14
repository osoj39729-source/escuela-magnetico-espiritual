import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Batalla_Intelectual': {
    'palabras_clave': ['batalla', 'intelectual', 'razon', 'ciencia', 'dogma', 'regeneracion'],
    'definicion': 'La lucha de ideas y conocimientos que sostiene la Escuela para desbancar el error religioso mediante la lógica y la verdad.',
    'vinculos': ['Guerra_de_Principios', 'Piqueta_Demoledora']
  },
  'Degeneracion_Jesuita': {
    'palabras_clave': ['jesuitas', 'Loyola', 'hipocresia', 'intriga', 'astucia'],
    'definicion': 'El estado actual de la Compañía de Jesús, que ha traicionado la abnegación de sus fundadores por el poder material y el engaño.',
    'vinculos': ['Demolicion_de_la_Iglesia', 'Comercio_Religioso']
  },
  'Celibato_Error_Historico': {
    'palabras_clave': ['celibato', 'naturaleza', 'crimen', 'ocultacion', 'dogma'],
    'definicion': 'Institución eclesiástica contraria a las leyes biológicas y espirituales que fuerza a los hombres a la hipocresía y el delito.',
    'vinculos': ['Corrupcion_en_Conventos', 'Ley_de_Amor']
  },
  'Poder_del_Sacro_Colegio': {
    'palabras_clave': ['Sacro Colegio', 'Cardenales', 'Papa', 'reforma', 'poder'],
    'definicion': 'La entidad rectora del catolicismo que bloquea la evolución de la institución por intereses de dominio y tradición.',
    'vinculos': ['Orgullo_Pontificio', 'Alianza_de_Religiones']
  },
  'Ciencia_vs_Dogma': {
    'palabras_clave': ['ciencia', 'dogma', 'astronomia', 'fisica', 'quimica', 'verdad'],
    'definicion': 'El desmoronamiento de las creencias religiosas ante la comprobación empírica de las leyes universales de la materia y el espíritu.',
    'vinculos': ['Ciencia_y_Espiritismo', 'Racionalismo_Trincadista']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

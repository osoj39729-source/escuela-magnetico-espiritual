import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Orgullo_Pontificio': {
    'palabras_clave': ['Papa', 'Pontifice', 'orgullo', 'soberbia', 'infalibilidad'],
    'definicion': 'El estado de ceguera espiritual de los líderes católicos que, aferrados a su poder material, desprecian la justicia del Dios de Amor.',
    'vinculos': ['Demolicion_de_la_Iglesia', 'Comercio_Religioso']
  },
  'Amenaza_de_Inquisicion': {
    'palabras_clave': ['Inquisicion', 'sangre', 'amenaza', 'fanatismo', 'tribunal'],
    'definicion': 'El riesgo de retroceso social mediante la reimplantación de métodos violentos de control religioso y persecución ideológica.',
    'vinculos': ['Odio_Religioso', 'Guerra_de_Principios']
  },
  'Escarda_Espiritual': {
    'palabras_clave': ['escardar', 'limpiar', 'cizaña', 'siembra', 'Jesús', 'errores'],
    'definicion': 'La labor de corrección de las falsas doctrinas y dogmas que fueron permitidos en el pasado para que la verdad florezca pura.',
    'vinculos': ['Desmitificacion_de_Jesus', 'Piqueta_Demoledora']
  },
  'Fin_del_Mundo_Alegre': {
    'palabras_clave': ['fin del mundo', 'alegria', 'perfeccion', 'transito', 'cometa'],
    'definicion': 'La transición evolutiva de la humanidad hacia un mundo superior, que ocurrirá de forma natural y gozosa al alcanzar la perfección moral.',
    'vinculos': ['Progreso_Infinito', 'Muerte_Inexistente']
  },
  'Sufrimiento_por_Amor': {
    'palabras_clave': ['sufrimiento', 'amor', 'elevacion', 'dolor', 'Jesús'],
    'definicion': 'Principio que explica que los espíritus superiores sufren por la solidaridad que sienten hacia los hermanos que aún viven en la ignorancia y el error.',
    'vinculos': ['Solidaridad_Espiritual', 'Amor_Fraternal']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

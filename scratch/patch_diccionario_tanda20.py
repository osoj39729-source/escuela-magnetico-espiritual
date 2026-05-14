import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Santidad_Catolica_Sarcasmo': {
    'palabras_clave': ['santo', 'catolico', 'sarcasmo', 'etiqueta', 'falsedad'],
    'definicion': 'La condición de santidad otorgada por la Iglesia que en realidad oculta un espíritu con deudas pendientes y retraso evolutivo.',
    'vinculos': ['Desmitificacion_Catolica', 'Higiene_del_Espiritismo']
  },
  'Ley_de_Expiacion': {
    'palabras_clave': ['expiacion', 'pena', 'pago', 'sufrimiento', 'culpa'],
    'definicion': 'El proceso obligatorio de reparación de faltas pasadas mediante el dolor o el sacrificio consciente en la encarnación.',
    'vinculos': ['Ley_de_Compensacion', 'Deuda_Karmica']
  },
  'Karma_Matrimonial': {
    'palabras_clave': ['karma', 'pareja', 'conyuge', 'matrimonio', 'reencarnacion'],
    'definicion': 'Los lazos de amor u odio forjados en vidas anteriores que se resuelven o agravan en la convivencia matrimonial actual.',
    'vinculos': ['Inversion_de_Roles', 'Reencarnacion_Cruzada']
  },
  'Santidad_Comercial': {
    'palabras_clave': ['comercio', 'santo', 'infalible', 'negocio', 'religion'],
    'definicion': 'La explotación económica de la fe a través de la venta de imágenes, milagros y la canonización de figuras históricas.',
    'vinculos': ['Comercio_Religioso', 'Desmitificacion_Catolica']
  },
  'Astillas_de_la_Cruz': {
    'palabras_clave': ['astillas', 'cruz', 'destruir', 'Jesus', 'simbolo'],
    'definicion': 'Mando directo de Jesús para eliminar el símbolo del patíbulo y la muerte, reemplazándolo por el fuego de la luz y la verdad.',
    'vinculos': ['Jesus_sin_Cruz', 'Piqueta_Demoledora']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

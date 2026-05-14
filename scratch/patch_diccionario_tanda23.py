import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Guerra_de_Principios': {
    'palabras_clave': ['guerra', 'principios', 'libros', 'balas de papel', 'lucha'],
    'definicion': 'La lucha doctrinal de la Escuela contra el error dogmático, utilizando la razón y la publicación de verdades como únicas armas.',
    'vinculos': ['Demolicion_de_la_Iglesia', 'Piqueta_Demoledora']
  },
  'Exorcismos_Obsoletos': {
    'palabras_clave': ['exorcismo', 'Benito', 'obsoleto', 'misticismo', 'intencion'],
    'definicion': 'Rituales religiosos que, aunque basados en una buena intención original, carecen de fundamento ante la ciencia del magnetismo y la libertad del espíritu.',
    'vinculos': ['Higiene_del_Espiritismo', 'Magnetismo_Curativo']
  },
  'Dignidad_del_Andrajoso': {
    'palabras_clave': ['andrajoso', 'pobre', 'harapos', 'elevacion', 'Benito'],
    'definicion': 'El principio que enseña a no juzgar por las vestiduras, reconociendo que grandes espíritus eligen la pobreza para su purificación y misión.',
    'vinculos': ['Nivelacion_Social', 'Amor_Fraternal']
  },
  'Civilizacion_Marciana': {
    'palabras_clave': ['Marte', 'canales', 'igualdad', 'progreso', 'civilizacion'],
    'definicion': 'Referencia al alto grado de evolución de los habitantes de Marte, cuyo sistema social y espiritual sirve de ejemplo para la Tierra.',
    'vinculos': ['Pluralidad_de_Mundos', 'Progreso_Infinito']
  },
  'Sacrilegio_del_Corpus': {
    'palabras_clave': ['Corpus', 'sacrilegio', 'idolatria', 'oro', 'comercio'],
    'definicion': 'La crítica de Jesús a la festividad del Corpus Christi como un acto de idolatría y explotación económica que desvirtúa su misión.',
    'vinculos': ['Comercio_Religioso', 'Idolatria_del_Oro']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

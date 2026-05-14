import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Curacion_Magnetoelectrica': {
    'palabras_clave': ['curacion', 'magnetismo', 'electricidad', 'fluido', 'Lucia'],
    'definicion': 'Uso combinado del fluido magnético animal y la energía eléctrica universal para restaurar la salud de los órganos y la mente.',
    'vinculos': ['Magnetismo_Curativo', 'Higiene_Moral']
  },
  'Pluralidad_de_Mundos': {
    'palabras_clave': ['mundos', 'habitados', 'Marte', 'Venus', 'astronomia'],
    'definicion': 'El principio universal de que la vida no es exclusiva de la Tierra y que existen humanidades en diversos grados de progreso en otros planetas.',
    'vinculos': ['Solidaridad_Cosmogonica', 'Progreso_Infinito']
  },
  'Caida_del_Pontificado': {
    'palabras_clave': ['Papa', 'pontificado', 'derrumbe', 'Vaticano', 'verdad'],
    'definicion': 'El proceso de autodestrucción y abandono del poder papal ante el desenmascaramiento de sus mentiras históricas y la luz de la ciencia espiritista.',
    'vinculos': ['Desmitificacion_Catolica', 'Piqueta_Demoledora']
  },
  'Inspiracion_vs_Imitacion': {
    'palabras_clave': ['inspiracion', 'imitacion', 'biblioteca', 'originalidad', 'loros'],
    'definicion': 'La distinción entre la sabiduría que emana de la unión del espíritu con la verdad y la mera reproducción de textos escritos por otros.',
    'vinculos': ['Escuela_de_Verdad', 'Ciencia_Espiritista']
  },
  'Culpas_Ajenas': {
    'palabras_clave': ['culpas', 'ajenas', 'carga', 'amor', 'sacrificio'],
    'definicion': 'Acto de caridad suprema donde un espíritu misionero asume las consecuencias de deudas de otros para facilitar su redención y avance.',
    'vinculos': ['Ley_de_Compensacion', 'Sacrificio_por_Amor']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

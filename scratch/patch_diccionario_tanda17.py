import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Redencion_de_Obsesores': {
    'palabras_clave': ['redencion', 'obsesor', 'rescate', 'luz', 'arrepentimiento'],
    'definicion': 'El acto de auxilio espiritual que permite a los espíritus sumergidos en el mal y el odio recuperar su juicio y encaminarse al progreso.',
    'vinculos': ['Caridad_Espiritual', 'Perdon_Liberador']
  },
  'Buscando_a_Dios': {
    'palabras_clave': ['buscando', 'Dios', 'libro', 'precursor', 'racional'],
    'definicion': 'Obra fundamental de Trincado que establece el método racional para encontrar al Creador en todos los órdenes de la naturaleza.',
    'vinculos': ['Filosofia_Austera_Racional', 'Arca_Santa']
  },
  'Verdad_del_Calvario': {
    'palabras_clave': ['calvario', 'crucifixion', 'muerte', 'resurreccion', 'vivo'],
    'definicion': 'La aclaración histórica de que Jesús fue descendido con vida de la cruz y de que los fenómenos naturales de aquel día no fueron milagros divinos.',
    'vinculos': ['Desmitificacion_Catolica', 'Jesus_Misionero']
  },
  'Nivelacion_Social': {
    'palabras_clave': ['nivelacion', 'clases', 'pobreza', 'riqueza', 'fraternidad'],
    'definicion': 'El principio de igualdad espiritual que enseña a valorar al ser por su luz interna y no por sus posesiones materiales o posición social.',
    'vinculos': ['Amor_Fraternal', 'Igualdad_Doctrinal']
  },
  'Sierra_y_Piqueta': {
    'palabras_clave': ['sierra', 'piqueta', 'demoler', 'cimentar', 'construir'],
    'definicion': 'Unión mística de las herramientas del Padre José (construcción) y del Maestro Joaquín (demolición del error) para la nueva cimentación humana.',
    'vinculos': ['Piqueta_Demoledora', 'Cimentacion_de_la_Escuela']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

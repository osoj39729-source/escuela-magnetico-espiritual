import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Pedagogia_del_Destierro': {
    'palabras_clave': ['destierro', 'exilio', 'mision', 'civilizacion', 'redencion'],
    'definicion': 'Principio que define el traslado de espíritus a mundos inferiores como una oportunidad de aprendizaje mediante la experiencia de sus propios errores.',
    'vinculos': ['Mundos_Primitivos_de_Expiacion', 'Responsabilidad_Consciente']
  },
  'Fluidos_del_Eter': {
    'palabras_clave': ['eter', 'fluidos', 'vida', 'quimica', 'laboratorio'],
    'definicion': 'Sustancias universales invisibles que son la base de la creación material y la vitalidad de los organismos en todo el Cosmos.',
    'vinculos': ['Ciencia_de_las_Ciencias', 'Magnetismo_Universal']
  },
  'Cristo_Agregado_Infame': {
    'palabras_clave': ['Cristo', 'nombre', 'infame', 'dogma', 'desfiguracion'],
    'definicion': 'Crítica al uso del término Cristo por parte de las religiones para ocultar la verdadera figura humana y misionera de Jesús.',
    'vinculos': ['Fraude_Religioso', 'Jesus_de_Nazaret']
  },
  'Opcion_del_Antropofago': {
    'palabras_clave': ['antropofago', 'opcion', 'eleccion', 'caverna', 'jefe'],
    'definicion': 'Elección forzosa para los espíritus prevaricadores: la humildad en la luz o el liderazgo en la barbarie primitiva.',
    'vinculos': ['Juicio_a_la_Iglesia', 'Ley_de_Compensacion']
  },
  'Antifona_de_la_Luz': {
    'palabras_clave': ['antifona', 'canto', 'liberacion', 'cruz', 'Maria'],
    'definicion': 'Celebración espiritual por el fin del dominio del dogma de la cruz sobre la humanidad y la restitución de la verdad histórica.',
    'vinculos': ['Fin_de_la_Cruz', 'Justicia_de_Sion']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

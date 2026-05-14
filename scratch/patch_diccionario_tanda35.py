import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Ingeniero_de_la_Union': {
    'palabras_clave': ['ingeniero', 'edificio', 'union', 'plano', 'cupula'],
    'definicion': 'Investidura misional otorgada a Trincado para unificar a la humanidad bajo una sola ley y estructura comunal universal.',
    'vinculos': ['Comuna_Universal', 'Sacerdocio_de_Sion']
  },
  'Redencion_de_Joen': {
    'palabras_clave': ['Joen', 'perdon', 'Iris', 'odio', 'discipulo'],
    'definicion': 'Hecho histórico-espiritual que simboliza el fin del ciclo de odio entre las víctimas y victimarios de la época de Antulio.',
    'vinculos': ['Teresa_de_Jesus_Iris', 'Antulio_el_Sabio']
  },
  'Medir_las_Distancias': {
    'palabras_clave': ['distancias', 'medida', 'equidad', 'justicia', 'debilidad'],
    'definicion': 'Principio de equidad que exige reconocer el grado de progreso y las circunstancias de cada ser antes de juzgar sus actos.',
    'vinculos': ['Equidad_Doctrinal', 'Ley_de_Justicia_Universal']
  },
  'ELOI_Nombre_de_Dios': {
    'palabras_clave': ['ELOI', 'nombre', 'Padre', 'universal', 'vibracion'],
    'definicion': 'Nombre universal del Creador revelado por la Escuela, que sustituye a los dioses antropomórficos y dogmáticos.',
    'vinculos': ['Concierto_Universal', 'Unidad_del_Padre']
  },
  'Clarividencia_Cosmologica': {
    'palabras_clave': ['clarividencia', 'cosmologia', 'armonia', 'universo', 'luz'],
    'definicion': 'Capacidad del espíritu para percibir y comprender las leyes armónicas que rigen el Gran Cosmos sin misterios ni velos.',
    'vinculos': ['Leyes_Universales', 'Progreso_del_Espiritu']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

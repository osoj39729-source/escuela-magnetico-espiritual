import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Higiene_del_Espiritismo': {
    'palabras_clave': ['higiene', 'depuracion', 'comercio', 'roña', 'ignorancia'],
    'definicion': 'La necesidad de limpiar el espiritismo de las mezclas religiosas, comerciales y supersticiosas que lo han denigrado ante la ciencia.',
    'vinculos': ['Ciencia_Espiritista', 'Escuela_de_Verdad']
  },
  'Permuta_de_Pobreza': {
    'palabras_clave': ['permuta', 'conmutar', 'pobreza', 'escasez', 'bienes'],
    'definicion': 'Acto de justicia donde el misionero entrega su sacrificio personal de carencia a cambio de medios materiales para la expansión de la doctrina.',
    'vinculos': ['Misionero_Universal', 'Justicia_de_la_Ley']
  },
  'Humildad_Racional': {
    'palabras_clave': ['humildad', 'fortaleza', 'energia', 'dignidad'],
    'definicion': 'Equilibrio entre el reconocimiento de la propia pequeñez ante el Creador y la firmeza enérgica necesaria para defender la verdad ante los hombres.',
    'vinculos': ['Dignidad_del_Misionero', 'Fortaleza_del_Misionero']
  },
  'Columna_Psiquica': {
    'palabras_clave': ['columna', 'psiquica', 'voluntad', 'teson', 'fuerza'],
    'definicion': 'Concentración de energía mental y fluídica que crea una estructura de poder capaz de vencer resistencias y proteger a los guiados.',
    'vinculos': ['Voluntad_Tesonera', 'Magnetismo_Curativo']
  },
  'Lenguaje_Universal_Musica': {
    'palabras_clave': ['musica', 'lenguaje', 'armonia', 'universo', 'Rossini'],
    'definicion': 'La música considerada como la lengua divina de los espíritus, capaz de expresar la armonía del cosmos y elevar el alma hacia la verdad.',
    'vinculos': ['Armonia_del_Universo', 'Inspiracion_Espiritual']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

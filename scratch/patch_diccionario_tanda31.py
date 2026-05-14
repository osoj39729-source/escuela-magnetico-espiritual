import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Juicio_a_Mahoma': {
    'palabras_clave': ['Mahoma', 'Islam', 'odio', 'arrepentimiento', 'juicio'],
    'definicion': 'Evento espiritual donde Mahoma abdica de su supremacía y reconoce que su religión fue una reacción de odio ante la traición de Roma.',
    'vinculos': ['Alianza_de_Religiones', 'Redencion_de_Mahoma']
  },
  'Religion_del_Alma': {
    'palabras_clave': ['sin templos', 'sin sacerdotes', 'alma', 'paz universal', 'verdad'],
    'definicion': 'Estado superior de conciencia humana donde no existen instituciones religiosas, solo la conexión directa con la ley del Padre.',
    'vinculos': ['Escuela_Magnetico_Espiritual', 'Fraternidad_Universal']
  },
  'Antulio_el_Sabio': {
    'palabras_clave': ['Antulio', 'sabio', 'cicuta', 'escuela antigua', 'astronomia'],
    'definicion': 'Personalidad de Jesús como fundador de una escuela científica y filosófica que fue perseguida por los poderes de su tiempo.',
    'vinculos': ['Reencarnaciones_de_Jesus', 'Prevaricacion_del_Saber']
  },
  'Siglo_de_la_Verdad': {
    'palabras_clave': ['siglo XX', 'verdad', 'tercera generacion', 'amor', 'fin de la mentira'],
    'definicion': 'Era profetizada para el triunfo definitivo del Espiritismo Luz y la instauración del amor universal en la tierra.',
    'vinculos': ['Profecia_de_las_Dos_Generaciones', 'Era_del_Espiritu']
  },
  'Fin_de_la_Expiacion': {
    'palabras_clave': ['expiacion', 'redencion', 'mision', 'justicia', 'renacimiento'],
    'definicion': 'Estado espiritual alcanzado por el misionero al saldar sus deudas kármicas, permitiéndole obrar con autoridad de Maestro.',
    'vinculos': ['Renacimiento_del_Misionero', 'Mision_de_la_Escuela']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

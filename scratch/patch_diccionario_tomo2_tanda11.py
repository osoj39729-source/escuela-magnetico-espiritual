import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Transmigracion_de_Sexos': {
    'palabras_clave': ['sexo', 'genero', 'encarnacion', 'hombre', 'mujer'],
    'definicion': 'Principio de igualdad espiritual donde el ser transita por ambos sexos para equilibrar su sensibilidad y fuerza.',
    'vinculos': ['Progreso_del_Espiritu', 'Igualdad_de_Sexos_Doctrinal']
  },
  'Syllabus_Errorum': {
    'palabras_clave': ['Syllabus', 'errores', 'Papa', 'condena', 'ciencia'],
    'definicion': 'Documento eclesiástico que condena la libertad de pensamiento y la ciencia, denunciado por la Escuela como fraude contra la razón.',
    'vinculos': ['Fraude_Religioso', 'Libertad_de_Pensamiento']
  },
  'Crimen_del_Celibato': {
    'palabras_clave': ['celibato', 'naturaleza', 'crimen', 'procreacion', 'abuso'],
    'definicion': 'Imposición antinatural que obliga a la abstinencia, derivando en depravación y negación de la ley universal de amor.',
    'vinculos': ['Ley_de_la_Carne', 'Inmoralidad_Sacerdotal']
  },
  'Casa_de_Muchos_Pisos': {
    'palabras_clave': ['pisos', 'grados', 'vibracion', 'sociedad', 'progreso'],
    'definicion': 'Estructura social y espiritual de la tierra donde cada individuo ocupa el lugar correspondiente a su grado de luz.',
    'vinculos': ['Grados_de_Estudio', 'Planeta_Tierra']
  },
  'Esclavitud_Monjil': {
    'palabras_clave': ['monjas', 'esclavitud', 'claustro', 'abuso', 'rapto'],
    'definicion': 'Sistema de opresión religiosa sobre la mujer que anula su voluntad y la somete a la tiranía del clero.',
    'vinculos': ['Fraude_Religioso', 'Justicia_Social_Doctrinal']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

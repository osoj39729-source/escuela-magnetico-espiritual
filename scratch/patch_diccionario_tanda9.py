import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Investidura_Espiritual': {
    'palabras_clave': ['investidura', 'representante', 'capitan', 'maestro'],
    'definicion': 'Acto de reconocimiento y empoderamiento de un espíritu encarnado por parte de la jerarquía para cumplir una misión específica como representante del Maestro.',
    'vinculos': ['Maestro_y_Representante', 'Misionero_Universal']
  },
  'Justicia_sin_Misericordia': {
    'palabras_clave': ['justicia', 'misericordia', 'sentencia', 'fanatismo'],
    'definicion': 'Ley de retribución que se aplica a quienes, habiendo recibido pruebas y luz, persisten en la crueldad o el fanatismo contra sus semejantes.',
    'vinculos': ['Ley_de_Justicia', 'Fanatismo_Religioso']
  },
  'Guerra_Fluidica': {
    'palabras_clave': ['fluido', 'ataque', 'odio', 'calumnia', 'pensamiento'],
    'definicion': 'Asedio invisible de pensamientos negativos y proyecciones odiosas lanzadas por los enemigos de la verdad contra el misionero y su obra.',
    'vinculos': ['Calumnia_y_Odio', 'Fortaleza_del_Misionero']
  },
  'Humanidad_de_Maria': {
    'palabras_clave': ['Maria', 'Nazaret', 'madre de familia', 'biologia'],
    'definicion': 'Doctrina que establece la naturaleza humana y biológica de María de Nazaret como espíritu en misión, esposa de José y madre de varios hijos.',
    'vinculos': ['Desmitificacion_de_la_Virgen', 'Maria_de_Nazaret']
  },
  'Autoridad_del_Director': {
    'palabras_clave': ['director', 'autoridad', 'sesion', 'discernimiento'],
    'definicion': 'Facultad moral y técnica del jefe de una sesión mediúmnica para examinar espíritus y mantener el orden doctrinal basándose en la sabiduría propia.',
    'vinculos': ['Discernimiento_de_Espiritus', 'Disciplina_Espiritual']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

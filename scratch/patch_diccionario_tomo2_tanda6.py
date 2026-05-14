import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Oracion_Mental': {
    'palabras_clave': ['plegaria', 'pensamiento', 'comunicacion', 'Padre', 'silencio'],
    'definicion': 'Plegaria del pensamiento puro que, libre de palabras y dogmas, une al espíritu directamente con el Creador.',
    'vinculos': ['Fisiologia_del_Espiritu', 'Magnetismo_Universal']
  },
  'Arbol_de_la_Cosmogonia': {
    'palabras_clave': ['arbol', 'fruto', 'rama', 'tierra', 'madurez'],
    'definicion': 'Alegoría de la estructura del universo donde los mundos progresan como ramas de un mismo tronco, produciendo el fruto de la verdad.',
    'vinculos': ['Cosmogonia_Trincadista', 'Progreso_del_Espiritu']
  },
  'Mundos_Primitivos_de_Expiacion': {
    'palabras_clave': ['exilio', 'tiniebla', 'fuerza_bruta', 'expiacion', 'purificacion'],
    'definicion': 'Soles o planetas en estado elemental donde son enviados los espíritus obstinados en el error para redimirse mediante el trabajo rudo.',
    'vinculos': ['Juicio_Final', 'Ley_de_Compensacion']
  },
  'Diplomacia_Psiquica': {
    'palabras_clave': ['influencia', 'desdoblamiento', 'mandatarios', 'justicia', 'paz'],
    'definicion': 'Acción de los misioneros en espíritu para guiar las decisiones de los gobernantes hacia la equidad y evitar guerras o injusticias.',
    'vinculos': ['Desdoblamiento_Espiritual', 'Justicia_Social_Doctrinal']
  },
  'Republica_Comunal_Universal': {
    'palabras_clave': ['republica', 'comuna', 'familia', 'fronteras', 'España'],
    'definicion': 'Estado final de la organización humana en la tierra, caracterizado por la unidad política, social y espiritual bajo el régimen de la comuna.',
    'vinculos': ['Comuna_de_Amor', 'Regimen_de_la_Comuna']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

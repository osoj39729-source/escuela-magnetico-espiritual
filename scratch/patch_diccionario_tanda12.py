import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Piqueta_Demoledora': {
    'palabras_clave': ['piqueta', 'demoledor', 'destruir', 'error', 'España'],
    'definicion': 'Función doctrinal de la Escuela para abatir las construcciones falsas de las religiones y la fuerza bruta de los tiranos.',
    'vinculos': ['Cimentacion_de_la_Escuela', 'Escuela_de_Verdad']
  },
  'Fin_de_la_Compañia_de_Jesus': {
    'palabras_clave': ['Loyola', 'jesuitas', 'intriga', 'corrupcion', 'carcoma'],
    'definicion': 'Declaración del fundador sobre la muerte espiritual de su orden debido a la sustitución de la sencillez por la astucia y el interés material.',
    'vinculos': ['Loyola_Tinieblas', 'Corrupcion_Conventual']
  },
  'Poder_de_la_Universalidad': {
    'palabras_clave': ['universalidad', 'poder', 'archivo', 'representante'],
    'definicion': 'Facultad suprema otorgada al misionero para actuar en consonancia con la solidaridad de los mundos y la ley del Dios Amor.',
    'vinculos': ['Solidaridad_Cosmogonica', 'Investidura_Espiritual']
  },
  'Archivo_de_36_Siglos': {
    'palabras_clave': ['archivo', 'siglos', 'secreto', 'sabiduria'],
    'definicion': 'Conjunto de conocimientos y facultades que permanecieron ocultos por 36 siglos esperando el momento del progreso humano para ser revelados.',
    'vinculos': ['Poder_de_la_Universalidad', 'Ciencia_Espiritista']
  },
  'Axioma_de_Amor': {
    'palabras_clave': ['temer', 'amar', 'miedo', 'fe', 'axioma'],
    'definicion': 'Principio que establece que el miedo es la prueba de la falta de amor y fe en el Padre; quien ama verdaderamente no puede temer.',
    'vinculos': ['Amor_del_Padre', 'Fe_Racional']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

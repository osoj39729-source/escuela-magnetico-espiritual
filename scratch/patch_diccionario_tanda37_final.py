import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Redencion_de_Felipe_II': {
    'palabras_clave': ['Felipe II', 'España', 'perdon', 'lagrimas', 'monarca'],
    'definicion': 'Sanación espiritual del monarca español tras reconocer sus desaciertos y aceptar la misión de ayudar a su patria desde la luz.',
    'vinculos': ['Mision_de_España', 'Juicio_a_los_Dioses']
  },
  'Juicio_a_Hildebrando': {
    'palabras_clave': ['Hildebrando', 'Gregorio VII', 'destierro', 'arrepentimiento', 'iniquidad'],
    'definicion': 'Absolución espiritual del Papa que impuso supremacías, lograda mediante el arrepentimiento sincero y el reconocimiento de la ley de amor.',
    'vinculos': ['Fraude_Religioso', 'Princesa_Matilde_Luz']
  },
  'Musica_Cosmogonica': {
    'palabras_clave': ['musica', 'armonia', 'esferas', 'Rossini', 'vuelo'],
    'definicion': 'Vibración armónica del universo que el espíritu capta al elevarse sobre la materia, sirviendo de base para la verdadera civilización.',
    'vinculos': ['Clarividencia_Cosmologica', 'Mundo_Sideral_Comunal']
  },
  'Critica_Sociologica_Trincado': {
    'palabras_clave': ['clases', 'opresion', 'civilizacion', 'deshonor', 'ricacho'],
    'definicion': 'Análisis demoledor de la sociedad actual como una barbarie ilustrada que margina a los humildes y castiga la maternidad natural.',
    'vinculos': ['Comuna_Universal', 'Equidad_Doctrinal']
  },
  'Fin_del_Tomo_I': {
    'palabras_clave': ['final', 'tomo 1', 'completitud', 'base', 'doctrina'],
    'definicion': 'Conclusión de la primera fase de la Filosofía Enciclopédica, consolidando los fundamentos del Espiritismo Luz y Verdad.',
    'vinculos': ['Filosofia_Enciclopedica_Universal', 'Master_Synapse']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

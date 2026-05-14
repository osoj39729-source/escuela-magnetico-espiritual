import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Responsabilidad_Social': {
    'palabras_clave': ['sociedad', 'infancia', 'niños', 'abandono', 'criminalidad'],
    'definicion': 'La obligación colectiva de proteger y amar a la infancia para evitar que el infortunio tuerza las misiones espirituales hacia la delincuencia.',
    'vinculos': ['Nivelacion_Social', 'Amor_Fraternal']
  },
  'Rebeldia_de_la_Materia': {
    'palabras_clave': ['materia', 'rebeldia', 'protegido', 'vicio', 'orgullo', 'protector'],
    'definicion': 'La oposición de los instintos y debilidades físicas a la guía del espíritu, lo que puede causar la retirada del protector por impotencia.',
    'vinculos': ['Conflicto_Espiritu_Materia', 'Libre_Albedrio']
  },
  'Congreso_Eucaristico_Madrid': {
    'palabras_clave': ['Madrid', 'Congreso', 'Eucaristico', 'reto', 'dogma'],
    'definicion': 'Hito histórico señalado por la Escuela como el desafío supremo de la Iglesia Católica contra la libertad de pensamiento y la luz de la verdad.',
    'vinculos': ['Demolicion_de_la_Iglesia', 'Comercio_Religioso']
  },
  'Conciencias_Muertas': {
    'palabras_clave': ['conciencia', 'muerte', 'animal', 'hipocresia', 'vida'],
    'definicion': 'El estado espiritual de quienes viven exclusivamente para la materia, anulando la chispa divina y convirtiendo el cuerpo en un sepulcro del alma.',
    'vinculos': ['Muerte_Inexistente', 'Juicio_Particular']
  },
  'Axioma_de_Vida': {
    'palabras_clave': ['axioma', 'vida', 'muerte', 'vivos', 'muertos'],
    'definicion': 'El principio que invierte la percepción humana, afirmando que la verdadera vida reside en el espíritu desencarnado y no en la materia transitoria.',
    'vinculos': ['Inmortalidad_del_Espiritu', 'Muerte_Inexistente']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Usurpacion_del_Trabajo': {
    'palabras_clave': ['trabajo', 'obrero', 'joya', 'riqueza', 'asalariado'],
    'definicion': 'Delito social donde el poseedor de capital se apropia del mérito y el fruto del esfuerzo del trabajador inteligente.',
    'vinculos': ['Justicia_Social_Doctrinal', 'Comuna_de_Amor']
  },
  'Letra_que_Vivifica': {
    'palabras_clave': ['letra', 'corazon', 'vivifica', 'ley', 'escrita'],
    'definicion': 'Propiedad de la ley del Código de Amor que, a diferencia del dogma, inspira la libertad y el sentimiento consciente.',
    'vinculos': ['Codigo_Amor_Universal', 'Libertad_de_Pensamiento']
  },
  'Tradicion_Traidora': {
    'palabras_clave': ['tradicion', 'historia', 'mentira', 'prejuicio', 'siglos'],
    'definicion': 'Deformación sistemática de las enseñanzas de los misioneros por parte de las religiones para mantener el dominio social.',
    'vinculos': ['Fraude_Religioso', 'Juicio_a_los_Dioses']
  },
  'Amputacion_del_Dogma': {
    'palabras_clave': ['amputacion', 'gangrena', 'reforma', 'dogma', 'religion'],
    'definicion': 'Principio de higiene espiritual que establece que el dogma no se reforma, sino que se elimina totalmente para sanar la razón.',
    'vinculos': ['Espiritualismo_Infiel', 'Espiritismo_Luz_y_Verdad']
  },
  'Mujer_Fuerza_Motriz': {
    'palabras_clave': ['mujer', 'cuerda', 'fuerza', 'sociedad', 'equilibrio'],
    'definicion': 'Reconocimiento de la mujer como la energía central y motora del equilibrio sociológico y familiar del universo.',
    'vinculos': ['Igualdad_de_la_Mujer', 'Fisiologia_del_Espiritu']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

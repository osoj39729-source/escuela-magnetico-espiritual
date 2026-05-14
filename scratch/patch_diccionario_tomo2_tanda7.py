import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Solidaridad_Doctrinal': {
    'palabras_clave': ['solidaridad', 'comunidad', 'apoyo', 'grey', 'union'],
    'definicion': 'Vínculo de unión universal que reemplaza a la caridad humillante, reconociendo a todos los seres como iguales en derechos y deberes.',
    'vinculos': ['Fin_de_la_Caridad', 'Comuna_de_Amor']
  },
  'Hijos_del_Hollin': {
    'palabras_clave': ['hollín', 'negros', 'prevaricadores', 'pasion', 'conciencia'],
    'definicion': 'Espíritus cuya luz está opacada por el mal, la malicia y la concupiscencia, requiriendo la medicina del arrepentimiento.',
    'vinculos': ['Juicio_Final', 'Mundos_Primitivos_de_Expiacion']
  },
  'Eden_de_Paso': {
    'palabras_clave': ['tierra', 'eden', 'transicion', 'morada', 'hermosa'],
    'definicion': 'Estado de la tierra cuando es comprendida como un lugar de aprendizaje gozoso y armónico, previo a mundos de mayor luz.',
    'vinculos': ['Cosmogonia_Trincadista', 'Planeta_Tierra']
  },
  'Embolo_de_la_Verdad': {
    'palabras_clave': ['embolo', 'succion', 'ignorancia', 'limpieza', 'razon'],
    'definicion': 'Acción purificadora de la doctrina que extrae el error acumulado por siglos de dogmatismo en la mente humana.',
    'vinculos': ['Espiritismo_Luz_y_Verdad', 'Razon_Iluminada']
  },
  'Cirineo_del_Siglo_XX': {
    'palabras_clave': ['Cirineo', 'Simon', 'misionero', 'ayuda', 'justicia'],
    'definicion': 'Figura del misionero que asiste a la humanidad en su proceso de liquidación de deudas, guiando el timón hacia Sión.',
    'vinculos': ['Misionero_de_Sion', 'Justicia_de_Sion']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

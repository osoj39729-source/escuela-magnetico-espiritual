import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Desmitificacion_de_Adan': {
    'palabras_clave': ['Adan', 'mito', 'creacion', 'antigüedad', 'Jarancon'],
    'definicion': 'Aclaración de que la humanidad preexiste por millones de años al personaje mitológico de Adán, quien solo representa una era o raza tardía.',
    'vinculos': ['Antigüedad_del_Hombre', 'Higiene_del_Espiritismo']
  },
  'Judío_Errante_Redencion': {
    'palabras_clave': ['Samuel', 'errante', 'maldicion', 'odio', 'Belshabé'],
    'definicion': 'El cese del estado de vagancia espiritual del espíritu de Samuel Belshabé al purificar su odio milenario a través del perdón.',
    'vinculos': ['Redencion_de_Obsesores', 'Perdon_Liberador']
  },
  'Judas_Iscariote_Regeneracion': {
    'palabras_clave': ['Judas', 'Iscariote', 'traicion', 'regeneracion', 'Avila'],
    'definicion': 'El hecho doctrinal de que Judas Iscariote ha saldado su deuda y progresado en existencias posteriores, como la de hermano de Teresa de Jesús.',
    'vinculos': ['Ley_de_Compensacion', 'Reencarnacion_Cruzada']
  },
  'Espiritismo_Esciencia': {
    'palabras_clave': ['esciencia', 'ciencia', 'esencia', 'verdad', 'medicina'],
    'definicion': 'Término que define al espiritismo como la ciencia suprema de la esencia, uniendo los descubrimientos materiales con las leyes espirituales.',
    'vinculos': ['Ciencia_Espiritista', 'Escuela_de_Verdad']
  },
  'Secreto_Doctrinal': {
    'palabras_clave': ['secreto', 'reserva', 'caja fuerte', 'indiscrecion', 'cautela'],
    'definicion': 'La obligación del misionero de guardar verdades profundas y revelaciones estratégicas hasta el momento de su publicación oficial.',
    'vinculos': ['Cautela_del_Misionero', 'Estrategia_Espiritual']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

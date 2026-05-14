import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Union_y_Estudio': {
    'palabras_clave': ['union', 'estudio', 'instruccion', 'racionalismo', 'cohesion'],
    'definicion': 'La base del progreso de la Escuela, que sustituye la oración mística por el análisis profundo de la ley y la unión de voluntades.',
    'vinculos': ['Cimentacion_de_la_Escuela', 'Escuela_de_Verdad']
  },
  'Expiacion_del_Poder': {
    'palabras_clave': ['poder', 'testa coronada', 'rey', 'reina', 'expiacion', 'modestia'],
    'definicion': 'Proceso de reparación donde espíritus que ostentaron cargos de mando regresan en posiciones humildes para saldar sus deudas sociales.',
    'vinculos': ['Justicia_de_la_Ley', 'Reencarnacion_Reparadora']
  },
  'Siempre_Mas_Alla': {
    'palabras_clave': ['siempre', 'mas alla', 'progreso', 'infinito', 'meta'],
    'definicion': 'El lema supremo de la Escuela que afirma que no hay descanso final, sino un avance eterno hacia la sabiduría universal.',
    'vinculos': ['Progreso_Infinito', 'Mision_del_Espiritu']
  },
  'Desmascaramiento_Espiritual': {
    'palabras_clave': ['desmascarar', 'impostor', 'tretas', 'vigilancia', 'sesion'],
    'definicion': 'La acción de revelar la verdadera identidad de espíritus que intentan suplantar a maestros o personajes históricos para confundir.',
    'vinculos': ['Vigilancia_Mediunnica', 'Higiene_del_Espiritismo']
  },
  'Renovavis_Faciem_Terrae': {
    'palabras_clave': ['renovacion', 'tierra', 'faz', 'verdad', 'cambio', 'Juan'],
    'definicion': 'La transformación radical del planeta mediante el fin del dominio religioso y la implantación de la ley de amor y razón.',
    'vinculos': ['Demolicion_de_la_Iglesia', 'Nueva_Era']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

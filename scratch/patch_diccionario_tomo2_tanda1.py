import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Año_de_Quiebra': {
    'palabras_clave': ['quiebra', 'juicio', 'proceso', 'destierro', 'sentencia'],
    'definicion': 'Momento de justicia inapelable en que los espíritus prevaricadores son juzgados y expulsados a moradas inferiores.',
    'vinculos': ['Juicio_de_Obras', 'Sentencia_Inapelable']
  },
  'Juicio_de_Obras': {
    'palabras_clave': ['obras', 'hechos', 'justicia', 'fe', 'Santiago'],
    'definicion': 'Principio que establece que solo el valor de las acciones humanas determina el destino del espíritu, anulando el valor de la fe dogmática.',
    'vinculos': ['Ley_de_Justicia_Universal', 'Equidad_Doctrinal']
  },
  'Jose_el_Carpintero': {
    'palabras_clave': ['Jose', 'carpintero', 'Jesus', 'Nazaret', 'padre'],
    'definicion': 'Identidad del padre natural de Jesús, quien desmitifica su infancia y revela las tensiones entre la vida material y la misión espiritual.',
    'vinculos': ['Jesus_Niño', 'Emancipacion_de_la_Familia']
  },
  'Suicidio_Inducido': {
    'palabras_clave': ['suicidio', 'cura', 'honor', 'iglesia', 'veneno'],
    'definicion': 'Crimen clerical consistente en empujar al culpable al suicidio para evitar que sus actos manchen la reputación de la institución religiosa.',
    'vinculos': ['Fraude_Religioso', 'Inquisicion']
  },
  'Administracion_de_Riquezas': {
    'palabras_clave': ['riqueza', 'fortuna', 'administrador', 'deber', 'necesidad'],
    'definicion': 'Concepto económico-espiritual de la Comuna que obliga al rico a usar sus bienes para suplir las carencias de su prójimo por afinidad.',
    'vinculos': ['Comuna_de_Amor', 'Justicia_Social_Doctrinal']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

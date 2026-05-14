import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Mayoria_de_Edad_Planetaria': {
    'palabras_clave': ['mayoria', 'edad', 'planeta', 'tierra', 'grado'],
    'definicion': 'Momento evolutivo donde la humanidad terrestre asume la responsabilidad de su destino y se integra a la Confederación Cósmica.',
    'vinculos': ['Nueva_Era_de_Luz', 'Soberania_del_Espiritu']
  },
  'Amor_vs_Caridad': {
    'palabras_clave': ['amor', 'caridad', 'diferencia', 'justicia', 'limosna'],
    'definicion': 'La caridad es una concesión del poderoso que humilla; el amor es el reconocimiento de la igualdad y la comunidad de bienes.',
    'vinculos': ['Comuna_Universal', 'Justicia_Social_Doctrinal']
  },
  'Mundo_Tubeg_Tubeg': {
    'palabras_clave': ['Tubeg', 'mundo', 'lejano', 'perfeccion', 'luz'],
    'definicion': 'Planeta de alta vibración en el sistema de Gof Duf, cuyos habitantes actúan como consejeros del tribunal terrestre.',
    'vinculos': ['Unidad_de_la_Ley_Cosmica', 'Mundo_Gof_Duf']
  },
  'Espiritualismo_como_Amalgama': {
    'palabras_clave': ['espiritualismo', 'amalgama', 'dogma', 'misticismo', 'confusion'],
    'definicion': 'Doctrina que mezcla la verdad con el error religioso para retener el dominio material sobre el espíritu.',
    'vinculos': ['Espiritualismo_vs_Espiritismo', 'Fraude_Religioso']
  },
  'Fondo_sobre_Forma': {
    'palabras_clave': ['fondo', 'forma', 'estetica', 'verdad', 'pedagogia'],
    'definicion': 'Principio metodológico que prioriza la esencia doctrinal y la justicia sobre la belleza literaria o poética del mensaje.',
    'vinculos': ['Pedagogia_Trincadista', 'Docilidad_del_Medium']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

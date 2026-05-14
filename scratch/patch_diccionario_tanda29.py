import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Alma_Animal_Irracional': {
    'palabras_clave': ['animal', 'alma', 'irracional', 'extincion', 'instinto'],
    'definicion': 'La esencia vital de los seres no humanos que no posee la responsabilidad moral ni la eternidad consciente del espíritu humano.',
    'vinculos': ['Alma_vs_Espiritu', 'Ley_de_Evolucion']
  },
  'Bruto_Personaje': {
    'palabras_clave': ['Bruto', 'despota', 'millonario', 'vasallo', 'redencion'],
    'definicion': 'Espíritu de Marcus Junius Brutus, quien confiesa sus crímenes de poder y reconoce la luz superior de los obreros de la verdad.',
    'vinculos': ['Piqueta_Demoledora', 'Redencion_del_Despota']
  },
  'Desmitificacion_de_los_Angeles': {
    'palabras_clave': ['ángeles', 'arcángeles', 'Miguel', 'divinidad', 'falsedad'],
    'definicion': 'La corrección del error dogmático que diviniza a seres que son, en realidad, espíritus humanos progresados.',
    'vinculos': ['Miguel_Arcangel', 'Supremacia_Temporal']
  },
  'Sociedades_Secretas_Doctrinales': {
    'palabras_clave': ['sociedad secreta', 'Dimas', 'verdad', 'persecucion', 'mision'],
    'definicion': 'Agrupaciones históricas de hombres libres que preservaron el conocimiento racional antes de la implantación pública de la Escuela.',
    'vinculos': ['Dimas_Buen_Ladron', 'Guerra_de_Principios']
  },
  'Ruda_Macho': {
    'palabras_clave': ['ruda', 'planta', 'magnetismo', 'limpieza', 'fluidos', 'Dimas'],
    'definicion': 'Elemento botánico con virtudes magnéticas específicas para sanear la atmósfera y proteger el cuerpo de influencias negativas.',
    'vinculos': ['Botanica_Magnetica', 'Salud_y_Espiritismo']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

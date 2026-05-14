import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Administracion_de_Talentos': {
    'palabras_clave': ['talentos', 'dones', 'multiplicar', 'responsabilidad', 'bien comun'],
    'definicion': 'El deber de cada espíritu de utilizar sus facultades y conocimientos para el progreso de sus hermanos, evitando el egoísmo y la parálisis.',
    'vinculos': ['Progreso_Infinito', 'Mision_del_Espiritu']
  },
  'Fraternidad_Universal': {
    'palabras_clave': ['fraternidad', 'hermandad', 'union', 'mundo', 'familia'],
    'definicion': 'El único título verdadero de la humanidad, que reconoce la igualdad absoluta de origen y destino de todos los espíritus en el cosmos.',
    'vinculos': ['Ley_de_Igualdad', 'Amor_Fraternal']
  },
  'Diagnostico_Espiritual': {
    'palabras_clave': ['diagnostico', 'medicina', 'causa', 'fluido', 'enfermedad'],
    'definicion': 'La capacidad de ver las raíces metafísicas y fluídicas de un padecimiento físico, permitiendo un tratamiento integral del ser.',
    'vinculos': ['Espiritismo_Esciencia', 'Magnetismo_Curativo']
  },
  'Bloqueo_Animico': {
    'palabras_clave': ['bloqueo', 'miedo', 'trauma', 'mudo', 'paralisis'],
    'definicion': 'Impedimento transitorio o persistente en el uso de las facultades (como el habla o la razón) causado por impresiones terribles de deudas pasadas.',
    'vinculos': ['Justicia_sin_Misericordia', 'Perdon_Liberador']
  },
  'Tribunal_de_la_Escuela': {
    'palabras_clave': ['tribunal', 'consejo', 'maestros', 'pureza', 'ley'],
    'definicion': 'Órgano de justicia y guía espiritual compuesto por espíritus de alta jerarquía que dirigen el avance de la Escuela en la Tierra.',
    'vinculos': ['Cimentacion_de_la_Escuela', 'Mision_de_la_Escuela']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

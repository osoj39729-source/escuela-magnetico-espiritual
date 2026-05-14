import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Mundo_Gof_Duf': {
    'palabras_clave': ['Gof Duf', 'mundo', 'azul', 'perfeccion', 'luz'],
    'definicion': 'Región sideral de alta vibración descrita por Trincado como ejemplo de la evolución humana futura.',
    'vinculos': ['Fisiologia_Espiritual_Superior', 'Unidad_de_la_Ley_Cosmica']
  },
  'Carnes_Transparentes': {
    'palabras_clave': ['transparente', 'carne', 'corazon', 'verdad', 'fisiologia'],
    'definicion': 'Cualidad física de los habitantes de mundos superiores donde no existe la doblez y se manifiesta la pureza interna.',
    'vinculos': ['Mundo_Gof_Duf', 'Progreso_del_Espiritu']
  },
  'Argamasa_Doctrinal': {
    'palabras_clave': ['argamasa', 'doctrina', 'Kardec', 'solidez', 'unidad'],
    'definicion': 'La unión de la ciencia, la filosofía y la justicia en un solo cuerpo doctrinal que hace al Espiritismo indestructible.',
    'vinculos': ['Espiritismo_Luz_y_Verdad', 'Reconocimiento_de_Kardec']
  },
  'Anulacion_del_Concordato': {
    'palabras_clave': ['Concordato', 'decreto', 'anulacion', 'Estado', 'Iglesia'],
    'definicion': 'Ruptura de los tratados de privilegio religioso en favor de la libertad de conciencia y la justicia civil.',
    'vinculos': ['Justicia_Civil_Racional', 'Caida_de_la_Mitra']
  },
  'Infierno_Voluntario': {
    'palabras_clave': ['infierno', 'voluntario', 'odio', 'orgullo', 'exilio'],
    'definicion': 'Estado de sufrimiento que el espíritu se impone a sí mismo al rechazar la ley de amor por preferir su propio rencor.',
    'vinculos': ['Mundos_Primitivos_de_Expiacion', 'Libre_Albedrio']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Testamento_de_Abraham': {
    'palabras_clave': ['Abraham', 'testamento', 'hebreo', 'secreto', 'patriarca'],
    'definicion': 'Documento espiritual dictado por Abraham que revela el origen cosmogónico de la humanidad y profetiza el Juicio Final.',
    'vinculos': ['Helli', 'Adanismo_Cosmogonico']
  },
  'Hellí': {
    'palabras_clave': ['Helli', 'Dios', 'Padre', 'Creador', 'Eterno'],
    'definicion': 'Nombre que el espíritu de Abraham utiliza para referirse al Creador Universal, significando el principio sin fin.',
    'vinculos': ['Master_Synapse', 'Ley_del_Padre']
  },
  'Adanismo_Cosmogonico': {
    'palabras_clave': ['Adan', 'Eva', 'migracion', 'Sol', 'salvacion'],
    'definicion': 'Hecho histórico-espiritual que describe la llegada de espíritus sabios de otros mundos para civilizar la tierra primitiva.',
    'vinculos': ['Raza_Adamica', 'Progreso_del_Espiritu']
  },
  'Espiritismo_vs_Espiritualismo': {
    'palabras_clave': ['cobardia', 'amalgama', 'Kardec', 'verdad', 'dogma'],
    'definicion': 'Diferenciación doctrinal que expone al Espiritualismo como una forma de no romper con la religión, frente al Espiritismo que es la ciencia total.',
    'vinculos': ['Espiritismo_Luz_y_Verdad', 'Fraude_Religioso']
  },
  'Pan_y_Palo': {
    'palabras_clave': ['disciplina', 'enseñanza', 'rigor', 'aliento', 'justicia'],
    'definicion': 'Método pedagógico espiritual que alterna el consuelo amoroso con la severidad del juicio necesario para el despertar de la conciencia.',
    'vinculos': ['Pedagogia_Trincadista', 'Juicio_de_Obras']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Ciudad_de_Sion': {
    'palabras_clave': ['Sión', 'metrópoli', 'Consejo', 'Vía Láctea', 'centro'],
    'definicion': 'Centro espiritual de nuestra nebulosa donde se reúnen los Consejos del Padre y se planifica la redención de los mundos.',
    'vinculos': ['Consejo_de_Sion', 'Humanidad_Solar']
  },
  'Sangre_Gaseosa_Violacea': {
    'palabras_clave': ['sangre', 'violáceo', 'gaseosa', 'pureza', 'fisiología'],
    'definicion': 'Estado de la sangre en humanidades superiores, libre de la densidad de las pasiones humanas y reflejo de la armonía espiritual.',
    'vinculos': ['Fisiologia_de_la_Pureza', 'Cuerpo_de_Luz']
  },
  'Siempre_Mas_Alla': {
    'palabras_clave': ['progreso', 'infinito', 'lema', 'vuelo', 'estudio'],
    'definicion': 'Lema que representa la dinámica eterna del espíritu, que nunca se estanca y siempre busca nuevos conocimientos en el infinito.',
    'vinculos': ['Progreso_del_Espiritu', 'Cosmogonia_Trincadista']
  },
  'Primer_Desafio_Trincado': {
    'palabras_clave': ['desafío', 'impostor', 'juicio', 'autoridad', 'sombras'],
    'definicion': 'Acto de autoridad judicial donde el Maestro Trincado somete a los espíritus rebeldes y destierra a los mistificadores.',
    'vinculos': ['Potestad_Judicial_del_Misionero', 'Fin_de_la_Mistificacion']
  },
  'Pensar_con_Cabeza_Propia': {
    'palabras_clave': ['razón', 'inteligencia', 'dogma', 'prejuicio', 'libertad'],
    'definicion': 'Principio de autonomía intelectual que rechaza las ideas impuestas para construir el conocimiento desde la experiencia y la razón propia.',
    'vinculos': ['Libertad_de_Pensamiento', 'Razon_Iluminada']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

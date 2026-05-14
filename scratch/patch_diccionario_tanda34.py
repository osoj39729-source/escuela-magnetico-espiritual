import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Filosofia_Austera_Racional': {
    'palabras_clave': ['Austera-Racional', 'filosofia', 'juez', 'dioses', 'Sion'],
    'definicion': 'Sistema de pensamiento universal anunciado por Jesús para juzgar las obras de las religiones y restaurar la verdad del espíritu.',
    'vinculos': ['Juicio_a_los_Dioses', 'Sacerdocio_de_Sion', 'Escuela_Magnetico_Espiritual']
  },
  'Origen_Politico_de_la_Iglesia': {
    'palabras_clave': ['politica', 'alianza', 'papa', 'legajos', 'supremacia'],
    'definicion': 'Hecho histórico-espiritual que revela que la Iglesia fue una construcción astuta para el dominio social mediante la amalgama de religiones.',
    'vinculos': ['Fraude_Religioso', 'Inquisicion']
  },
  'Krishna_Cristo_Oriente': {
    'palabras_clave': ['Krishna', 'Cristo', 'Oriente', 'fardo', 'suplantacion'],
    'definicion': 'Mito oriental absorbido por la Iglesia para divinizar a Jesús, convirtiendo su vida sencilla en un fardo dogmático inalcanzable.',
    'vinculos': ['Cristo_vs_Jesus', 'Desmitificacion_de_Jesus']
  },
  'Francisco_Xavier_Jefe': {
    'palabras_clave': ['Xavier', 'Jefe', 'Consejos del Amor', 'Mesias', 'Investidura'],
    'definicion': 'Identidad espiritual de Francisco Xavier como Jefe Superior de los Consejos del Padre, encargado de dirigir la redención universal.',
    'vinculos': ['Consejos_de_Sion', 'Mision_de_la_Escuela']
  },
  'Cristianismo_Amalgama': {
    'palabras_clave': ['amalgama', 'indigerible', 'mezcla', 'error', 'dogma'],
    'definicion': 'Calificación de la religión cristiana como una mezcla de principios heterogéneos y contradictorios que impiden el progreso del alma.',
    'vinculos': ['Teologia_Dogmatica', 'Religiones_Terrenales']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

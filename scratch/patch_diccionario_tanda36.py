import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Maria_de_Nazaret_Intercesora': {
    'palabras_clave': ['Maria', 'intercesora', 'moderar', 'llagas', 'maternal'],
    'definicion': 'Acción espiritual de María de Nazaret para suavizar el rigor de la justicia y redimir a los espíritus rebeldes a través del amor.',
    'vinculos': ['Desmitificacion_de_Maria', 'Amor_Redentor']
  },
  'Mesias_Regenerador': {
    'palabras_clave': ['Mesias', 'Regenerador', 'sucesor', 'batalla', 'hoguera'],
    'definicion': 'Cargo espiritual otorgado a Trincado para dar cumplimiento final al juicio a los dioses y regenerar la conciencia humana.',
    'vinculos': ['Francisco_Xavier_EV', 'Mision_de_la_Escuela']
  },
  'Crimen_de_Lesa_Deidad': {
    'palabras_clave': ['lesa deidad', 'falsificacion', 'evangelios', 'idolatria', 'dogma'],
    'definicion': 'Denuncia contra las religiones por haber ocultado la verdad del Padre y suplantado su ley por dogmas de supremacía política.',
    'vinculos': ['Fraude_Religioso', 'Juicio_a_los_Dioses']
  },
  'Mundo_Sideral_Comunal': {
    'palabras_clave': ['sideral', 'comuna', '1.32m', 'procreacion', 'igualdad'],
    'definicion': 'Existencia social en mundos superiores donde la ley de amor rige todos los actos y la propiedad es compartida por todos.',
    'vinculos': ['Comuna_Universal', 'Progreso_del_Espiritu']
  },
  'Fragilidad_de_la_Materia': {
    'palabras_clave': ['fragil', 'materia', 'despacio', 'tropiezo', 'envoltorio'],
    'definicion': 'Limitación biológica que el misionero debe respetar para no agotar sus fuerzas antes de cumplir la totalidad de su misión.',
    'vinculos': ['Mision_de_la_Escuela', 'Maestria_de_la_Estrategia']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

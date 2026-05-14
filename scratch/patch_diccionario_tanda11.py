import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Discernimiento_Racional': {
    'palabras_clave': ['discernir', 'logica', 'razon', 'juzgar', 'verdad'],
    'definicion': 'Capacidad del espíritu para analizar críticamente las palabras y hechos de los hombres, distinguiendo la verdad de la mentira mediante la lógica fría.',
    'vinculos': ['Firmeza_Racional', 'Ciencia_Espiritista']
  },
  'Buena_Fe_vs_Tontuna': {
    'palabras_clave': ['buena fe', 'tontuna', 'malicia', 'despertar'],
    'definicion': 'Advertencia sobre el uso de la fe sin examen, la cual se convierte en debilidad que los malvados aprovechan para dañar al misionero.',
    'vinculos': ['Discernimiento_Racional', 'Malicia_Humana']
  },
  'Venganza_de_Obsesores': {
    'palabras_clave': ['venganza', 'obsesor', 'rescate', 'ataque'],
    'definicion': 'Reacción de los espíritus perversos contra aquellos que rescatan a sus protegidos de los malos caminos, manifestándose en ataques al misionero.',
    'vinculos': ['Rescate_de_Almas', 'Guerra_Fluidica']
  },
  'Medicina_Cooperativa': {
    'palabras_clave': ['medicina', 'especialistas', 'cooperacion', 'sanacion'],
    'definicion': 'Acción unificada de diversos guías y protectores especializados para intervenir en procesos de sanación física y espiritual de alta complejidad.',
    'vinculos': ['Juan_Bautista_Director', 'Magnetismo_Curativo']
  },
  'Inexistencia_del_Demonio': {
    'palabras_clave': ['demonio', 'diablo', 'perversion', 'mal', 'perverso'],
    'definicion': 'Principio que niega la existencia de una entidad maligna absoluta, explicando que el mal es producto de espíritus imperfectos y perversos en evolución.',
    'vinculos': ['Desmitificacion_Catolica', 'Progreso_Infinito']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

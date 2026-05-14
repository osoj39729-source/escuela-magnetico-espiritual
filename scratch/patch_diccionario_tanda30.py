import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Santa_Teresa_Racionalista': {
    'palabras_clave': ['Teresa de Jesús', 'cientifica', 'reformadora', 'maquinas', 'racional'],
    'definicion': 'La verdadera personalidad de Teresa de Jesús, quien poseía conocimientos de ingeniería y amaba la libertad de pensamiento.',
    'vinculos': ['Mistificacion_Hagiografica', 'Inventos_Espirituales']
  },
  'Mistificacion_Hagiografica': {
    'palabras_clave': ['misticismo', 'santo', 'hagiografia', 'distorsion', 'Iglesia'],
    'definicion': 'La alteración deliberada de las biografías de los misioneros por parte de la Iglesia para ocultar sus ideas racionales.',
    'vinculos': ['Comercio_Religioso', 'Veto_al_Pensamiento']
  },
  'Leon_XIII': {
    'palabras_clave': ['Leon XIII', 'Pecci', 'Papa', 'remuera', 'caida'],
    'definicion': 'Espíritu que ocupó el papado y admite la iniquidad del sistema, reconociendo a Trincado como su afín espiritual.',
    'vinculos': ['Ley_de_Igualdad_Social', 'Orgullo_Pontificio']
  },
  'Operacion_de_Mundos_Superiores': {
    'palabras_clave': ['operacion', 'mundos superiores', 'genuflexion', 'sanacion', 'Antulio'],
    'definicion': 'Técnica de curación fluídica extrema aplicada por altos espíritus para neutralizar enfermedades terminales en misioneros.',
    'vinculos': ['Sanacion_Magnetica', 'Renacimiento_del_Misionero']
  },
  'Renacimiento_del_Misionero': {
    'palabras_clave': ['renacimiento', 'Trincado', 'mision', 'vida nueva', 'EMECU'],
    'definicion': 'Hito espiritual donde el Maestro Trincado supera su etapa de expiación para dedicarse plenamente a la fundación de la Escuela.',
    'vinculos': ['Fundacion_de_la_Escuela', 'Mision_de_la_Escuela']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Crimenes_Pasionales': {
    'palabras_clave': ['crimen', 'pasion', 'sangre', 'instinto', 'infanticidio'],
    'definicion': 'Actos de violencia extrema, como el asesinato o el infanticidio, cometidos bajo el dominio de pasiones descontroladas que atan al espíritu al dolor.',
    'vinculos': ['Justicia_sin_Misericordia', 'Pasiones_Humanas']
  },
  'Reencarnacion_Cruzada': {
    'palabras_clave': ['reencarnacion', 'sexo', 'rol', 'inversion', 'pareja'],
    'definicion': 'Proceso evolutivo donde el espíritu cambia de sexo y posición social en sucesivas vidas para experimentar ambos polos y saldar deudas mutuas.',
    'vinculos': ['Ley_de_Justicia', 'Deuda_Karmica']
  },
  'Desmitificacion_de_Estigmas': {
    'palabras_clave': ['estigma', 'llaga', 'milagro', 'espina', 'Rita'],
    'definicion': 'Aclaración doctrinal que despoja a las llagas y marcas corporales de su supuesto origen milagroso, devolviéndolas a la patología biológica o psicosomática.',
    'vinculos': ['Desmitificacion_Catolica', 'Higiene_Moral']
  },
  'Igualdad_Doctrinal': {
    'palabras_clave': ['igualdad', 'derecho', 'fanatismo', 'hospital', 'caridad'],
    'definicion': 'Principio que exige el mismo trato y respeto para todos los seres, prohibiendo el favoritismo por razones de creencia, raza o condición social.',
    'vinculos': ['Ley_de_Igualdad', 'Fraternidad_Universal']
  },
  'Ceguera_de_la_Purpura': {
    'palabras_clave': ['purpura', 'soberbia', 'orgullo', 'principe', 'jerarquia'],
    'definicion': 'El estado de obcecación y orgullo desmedido que adquieren los altos cargos religiosos, impidiéndoles ver la verdad y la luz del espíritu.',
    'vinculos': ['Fanatismo_Religioso', 'Desmitificacion_Catolica']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

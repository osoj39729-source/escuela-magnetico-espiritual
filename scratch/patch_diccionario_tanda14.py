import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Cooperacion_Mental': {
    'palabras_clave': ['pensamiento', 'cooperacion', 'ayuda', 'asistentes', 'voluntad'],
    'definicion': 'La unión de las fuerzas mentales de los asistentes encarnados con la voluntad de los espíritus guías para potenciar acciones de auxilio y luz.',
    'vinculos': ['Fuerza_del_Pensamiento', 'Solidaridad_Cosmogonica']
  },
  'Deuda_de_Vida': {
    'palabras_clave': ['deuda', 'vida', 'compensacion', 'pagar', 'ley'],
    'definicion': 'La responsabilidad kármica ineludible que adquiere un espíritu por haber dañado, truncado o despreciado la vida de otro ser humano.',
    'vinculos': ['Ley_de_Compensacion', 'Ley_de_Justicia']
  },
  'Odio_Espiritual': {
    'palabras_clave': ['odio', 'espiritu', 'atavismo', 'enemigo', 'venganza'],
    'definicion': 'Sentimiento de rechazo y rencor que un espíritu guarda contra otro desde existencias anteriores, manifestándose como antipatía irracional o acoso.',
    'vinculos': ['Deuda_Karmica', 'Inversion_de_Roles']
  },
  'Desmitificacion_de_Arcangeles': {
    'palabras_clave': ['arcangel', 'mitologia', 'privilegio', 'espiritu puro', 'Miguel'],
    'definicion': 'Revelación de que los supuestos arcángeles son espíritus humanos que han pasado por el error y el pecado antes de alcanzar su elevada jerarquía.',
    'vinculos': ['Desmitificacion_Catolica', 'Progreso_Infinito']
  },
  'Amor_Magnetizado': {
    'palabras_clave': ['amor', 'magnetismo', 'madre', 'curacion', 'remedio'],
    'definicion': 'La proyección consciente de la energía afectiva a través del fluido magnético, especialmente potente en el vínculo materno-filial.',
    'vinculos': ['Magnetismo_Curativo', 'Magnetismo_Materno']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

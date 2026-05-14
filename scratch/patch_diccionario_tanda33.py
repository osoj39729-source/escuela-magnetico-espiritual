import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Dogma_Inmaculada_Concepcion': {
    'palabras_clave': ['Inmaculada', 'Pio IX', 'error', 'absurdo', 'concepcion'],
    'definicion': 'Precepto dogmático que pretende colocar a María de Nazaret fuera de la ley de procreación humana, tildado por ella de nefasto.',
    'vinculos': ['Maternidad_Natural', 'Desmitificacion_de_Maria']
  },
  'Lino_Ex_Cura': {
    'palabras_clave': ['Lino', 'cura', 'restitucion', 'azadon', 'obrero'],
    'definicion': 'Espíritu redimido que simboliza la necesidad de los antiguos parásitos religiosos de volver a la tierra como trabajadores productivos.',
    'vinculos': ['Restitucion_Social', 'Trabajo_Regenerador']
  },
  'Eduardo_VII': {
    'palabras_clave': ['Eduardo VII', 'El Gordo', 'Paz Armada', 'Inglaterra', 'Sion'],
    'definicion': 'Espíritu monárquico que reconoce el agotamiento del sistema de armas y la superioridad de la misión espiritual de la Escuela.',
    'vinculos': ['Paz_Armada_vs_Paz_Amor', 'Luz_de_Sion']
  },
  'Rafael_Arcangel': {
    'palabras_clave': ['Rafael', 'arcangel', 'fantoche', 'hijo del hombre', 'Tobias'],
    'definicion': 'Espíritu humano que rechaza la divinización hagiográfica y colabora en la destrucción de los mitos religiosos que usan su nombre.',
    'vinculos': ['Desmitificacion_de_los_Angeles', 'Juicio_a_los_Dioses']
  },
  'Paz_Armada_vs_Paz_Amor': {
    'palabras_clave': ['paz armada', 'paz de amor', 'equilibrio', 'temor', 'fraternidad'],
    'definicion': 'Evolución del estado de tregua militar hacia la verdadera paz basada en la ley de amor y la abolición de fronteras.',
    'vinculos': ['Paz_Universal', 'Fraternidad_Universal']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

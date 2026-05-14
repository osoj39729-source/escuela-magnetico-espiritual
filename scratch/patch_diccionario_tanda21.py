import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Ley_de_Compensacion_Biologica': {
    'palabras_clave': ['compensacion', 'biologica', 'vida', 'hijos', 'maternidad'],
    'definicion': 'La obligación espiritual de dar vida carnal a aquellos espíritus a quienes se privó de ella en existencias anteriores.',
    'vinculos': ['Ley_de_Justicia', 'Expiacion_de_Infanticidio']
  },
  'Conflicto_Espiritu_Materia': {
    'palabras_clave': ['espiritu', 'materia', 'conflicto', 'rebeldia', 'mision'],
    'definicion': 'La tensión dialéctica entre la voluntad del espíritu por cumplir su misión y la resistencia o vicios de la materia encarnada.',
    'vinculos': ['Mision_del_Espiritu', 'Dominio_de_si_Mismo']
  },
  'Enfermedad_como_Freno': {
    'palabras_clave': ['enfermedad', 'freno', 'materia', 'encarnacion', 'estancamiento'],
    'definicion': 'Mecanismo de defensa del espíritu que enferma al cuerpo para evitar que la materia siga cometiendo errores que retrasen su progreso.',
    'vinculos': ['Salud_y_Espiritu', 'Justicia_de_la_Ley']
  },
  'Regeneracion_del_Criminal': {
    'palabras_clave': ['criminal', 'regeneracion', 'bandido', 'Pernales', 'progreso'],
    'definicion': 'El tránsito de un espíritu desde la delincuencia y el odio hacia la utilidad social y la fraternidad espiritual.',
    'vinculos': ['Justicia_sin_Misericordia', 'Perdon_Liberador']
  },
  'Desdoblamiento_de_Justicia': {
    'palabras_clave': ['desdoblamiento', 'justicia', 'materia', 'juicio', 'Manuel'],
    'definicion': 'Acto extraordinario donde el espíritu juzga y recrimina a su propia materia despierta el incumplimiento de sus deberes espirituales.',
    'vinculos': ['Responsabilidad_Misionera', 'Tribunal_de_la_Escuela']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

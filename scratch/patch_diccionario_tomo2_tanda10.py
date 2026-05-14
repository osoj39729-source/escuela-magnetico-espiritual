import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Juramento_de_los_500055': {
    'palabras_clave': ['juramento', 'jefes', 'religión', 'capitulación', '1912'],
    'definicion': 'Acto de sumisión de la jerarquía católica ante el tribunal del espíritu, reconociendo su error y aceptando la ley de amor.',
    'vinculos': ['Juicio_Final', 'Capitulación_del_Dogma']
  },
  'Juez_de_Sinigalia': {
    'palabras_clave': ['Sinigalia', 'Alejandro VI', 'Borgia', 'martirio', 'identidad'],
    'definicion': 'Referencia a una existencia anterior de Joaquín Trincado donde enfrentó al papado y fue ahorcado, regresando hoy con potestad judicial.',
    'vinculos': ['Enviado_del_Padre', 'Juicio_a_la_Iglesia']
  },
  'Demolicion_de_la_Iglesia_Pequeña': {
    'palabras_clave': ['demolición', 'iglesia', 'catolicismo', 'dogma', 'mordaza'],
    'definicion': 'Acción destructiva necesaria sobre las instituciones religiosas para liberar la conciencia y permitir el avance de la verdad.',
    'vinculos': ['Piqueta_de_la_Verdad', 'Fin_de_las_Religiones']
  },
  'Misioneros_de_la_Retaguardia': {
    'palabras_clave': ['retaguardia', 'redimidos', 'espacio', 'influencia', 'bien'],
    'definicion': 'Espíritus que, habiendo sido verdugos, hoy sirven a la luz desde el espacio influyendo positivamente en la humanidad.',
    'vinculos': ['Regreso_del_Hijo_Pródigo', 'Rehabilitacion_del_Espiritu']
  },
  'Actas_Judiciales_Doctrinales': {
    'palabras_clave': ['actas', 'juicio', 'legalidad', 'testimonio', 'fe'],
    'definicion': 'Naturaleza jurídica de los textos de la Escuela, que no son simples libros sino registros de la justicia universal en la tierra.',
    'vinculos': ['Filosofia_Enciclopedica_Universal', 'Sello_de_Sion']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

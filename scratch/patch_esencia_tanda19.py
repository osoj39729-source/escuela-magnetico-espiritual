import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '3183: Mayo 2 de 1911 - Posesión M. P.': {
    'Piloto': 'Administración de talentos espirituales y el título de Fraternidad Universal.',
    'Idea': 'Los bienes materiales y talentos espirituales deben usarse para el bien común; la fraternidad es el único vínculo eterno y verdadero, superando los títulos terrestres.',
    'Ejemplo': 'Xavier enseña que la hermandad universal es el fin supremo de la administración de los dones recibidos del Padre.',
    'Cita': 'Sólo la fraternidad es el verdadero título, y la fraternidad universal será un hecho con el correr de los tiempos.',
    'Sinapsis': ['Administracion_de_Talentos', 'Fraternidad_Universal', 'Ley_de_Igualdad']
  },
  '3211: Mayo 7 de 1911 - Posesión M.P.': {
    'Piloto': 'Crímenes de sangre y advertencia contra el infanticidio fetal.',
    'Idea': 'La interrupción de la vida en el vientre y el asesinato por venganza son deudas graves que requieren el arrepentimiento y la luz del perdón para sanar el espíritu.',
    'Ejemplo': 'María de Nazaret advierte a una joven sobre un aborto oculto, buscando su rectificación moral a través del amor y la paz.',
    'Cita': 'El amor y la paz... basta al hombre seguir esos dos dones de nuestro Padre.',
    'Sinapsis': ['Infanticidio_Fetal', 'Crimenes_de_Venganza', 'Caridad_Preventiva']
  },
  '3228: Mayo 9 de 1911 - Posesión M. P.': {
    'Piloto': 'El espiritismo como luz diagnóstica y auxiliar de la salud.',
    'Idea': 'El espiritismo no es la medicina física, pero aporta la ciencia del diagnóstico espiritual y la higiene fluídica necesaria para la sanación real.',
    'Ejemplo': 'Juan Bautista realiza un diagnóstico espiritual en el Hospital de Niños, identificando causas profundas de una enfermedad ósea grave.',
    'Cita': 'El espiritismo es luz y médico de experiencia... pero él no es la medicina.',
    'Sinapsis': ['Espiritismo_Esciencia', 'Diagnostico_Espiritual', 'Higiene_y_Salud']
  },
  '3241: Mayo 12 de 1911 - Posesión Pedro Portillo': {
    'Piloto': 'El perdón mutuo como liberador del bloqueo anímico y el miedo.',
    'Idea': 'El terror de un crimen puede paralizar las facultades del espíritu (mutismo); solo el perdón mutuo entre agresor y víctima rompe las cadenas del odio.',
    'Ejemplo': 'Un espíritu mudo recupera el habla y la paz tras perdonar a su antigua víctima en una sesión de liberación magnética.',
    'Cita': 'Por la fuerza magnética le hice romper la trabazón de su miedo.',
    'Sinapsis': ['Bloqueo_Animico', 'Perdon_Mutuo', 'Magnetismo_Liberador']
  },
  '3278: Mayo 14 de 1911 - Posesión M. P.': {
    'Piloto': 'La ley de afinidades y la incorporación de Jetro a la Escuela.',
    'Idea': 'Grandes espíritus históricos reencarnan por afinidad para integrar el tribunal de la Escuela y cumplir la profecía de la nueva ley de amor.',
    'Ejemplo': 'Incorporación del médium Manuel, identificado como el espíritu de Jetro (suegro de Moisés), destinado a ser portavoz de los maestros.',
    'Cita': 'Vuestro principio es el bien por el bien mismo, y encuadra de lleno en la ley de las afinidades.',
    'Sinapsis': ['Jetro_Reencarnado', 'Ley_de_Afinidades', 'Tribunal_de_la_Escuela', 'Profecia_de_la_Escuela']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

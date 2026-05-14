import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '328: Diciembre 3 de 1911 - Un enviado': {
    'Piloto': 'El Maestro de Sión y el Código de Amor universal.',
    'Idea': 'Trincado es el mandatario designado por el Consejo de Sión para instaurar la ley de la Cosmogonía y terminar con las religiones. La tecnología y la ciencia son lenguas del espíritu para llenar los vacíos del entendimiento humano.',
    'Ejemplo': 'Xavier declara que el misionero recoge las virtudes del jardín universal para anestesiar la malicia parásita y guiar a la humanidad hacia la unidad de los mundos.',
    'Cita': 'El Maestro es el designado por el Consejo de Sión para terminar con todas las tendencias equívocas... la letra mata al espíritu y el espíritu vivifica a la letra.',
    'Sinapsis': ['Consejo_de_Sion', 'Codigo_de_Amor', 'Ley_de_la_Cosmogonia', 'Maquina_de_la_Verdad']
  },
  '608: Diciembre  3 de 1911, hora 21 Portillo - que lo es, por cierto, para el malvado.': {
    'Piloto': 'Juicio a la concupiscencia material y la opresión de la mujer.',
    'Idea': 'El materialismo ha degradado a la mujer y falseado la ley de procreación. El juicio de amor es inflexible contra el falso honor. El comunismo espiritual es el único camino para la regeneración de la carne y la libertad del espíritu.',
    'Ejemplo': 'Xavier anuncia la caída de la "casa sobre arena" (las religiones) ante el torrente de justicia que unificará a la humanidad bajo una sola creencia racional.',
    'Cita': 'Repudiáis, deshonráis, corrompéis a la mujer... la justicia será inflexible... el Templo Azul, Racional del Santo Único es la Cosmogonía.',
    'Sinapsis': ['Opresion_de_la_Mujer', 'Falso_Honor', 'Comunismo_Espiritual', 'Casa_sobre_Arena']
  },
  '820: Como tenía que hacer una pregunta de gran interés, pero que al aparecer era prematuro, se retiró sin la demostración - Del dios de la iniquidad.': {
    'Piloto': 'Ratificación de Jesús y el derecho a los tesoros del Padre.',
    'Idea': 'Jesús ratifica la autoridad de Xavier y la misión de Trincado. Los hijos del progreso tienen el derecho divino de recuperar los bienes comunes usurpados por los "lobos" de la iniquidad mediante la astucia.',
    'Ejemplo': 'Jesús asegura que el universo entero celebra la llegada del Juicio y que la ley de afinidad protegerá el pedido de los humildes ante el Padre.',
    'Cita': '¿Qué extraño es que vosotros uséis de la fuerza del Padre para tomar de lo que a todos pertenece?... el espacio está de fiesta.',
    'Sinapsis': ['Ratificacion_de_Jesus', 'Fuerza_del_Padre', 'Tesoros_del_Padre', 'Lobos_de_la_Iniquidad']
  },
  '869: Diciembre 8 de 1911 Portillo - los atrapa, la serena águila real.': {
    'Piloto': 'Teresa de Jesús y la caída de las supremacías sociales.',
    'Idea': 'Teresa de Jesús denuncia al clero ("sacerdotes zotes") y la "sota de bastos" monárquica. La guerra es un residuo de barbarie que desaparecerá con la comuna universal y la igualdad absoluta de razas.',
    'Ejemplo': 'Teresa insta al pueblo a usar la libertad de pensamiento para derrocar el dogma y abrazar la solidaridad de los mundos habitados donde no hay sacerdotes ni opresión.',
    'Cita': 'La sota de bastos también la perderán muy pronto... el hombre no debe luchar con el hombre... el amor es la verdadera bandera.',
    'Sinapsis': ['Teresa_de_Jesus_Espiritu', 'Sota_de_Bastos', 'Guerra_de_Supremacias', 'Igualdad_de_Razas']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

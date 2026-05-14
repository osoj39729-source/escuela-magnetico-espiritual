import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '5494: Julio 28 de 1911 - Posesión M. P.': {
    'Piloto': 'La preparación de instrumentos para la batalla intelectual de la verdad.',
    'Idea': 'La regeneración humana requiere de médiums preparados por los consejos superiores para sostener la lucha de la ciencia y la doctrina. La victoria es un esfuerzo coordinado entre el espíritu en el espacio y la materia en la tierra.',
    'Ejemplo': 'Doroteo anuncia la llegada del médium P. Portillo, un instrumento afinado por Sión para las batallas intelectuales que Trincado ha de sostener.',
    'Cita': 'La batalla la ganaréis vosotros por la materia y nosotros por el espíritu, y la obra será completa.',
    'Sinapsis': ['Regeneracion_de_la_Humanidad', 'Batalla_Intelectual', 'Preparacion_Mediunnica']
  },
  '5512: Julio 31 de 1911 - Posesión M. P.': {
    'Piloto': 'Degeneración de la Compañía de Jesús y protección del misionero.',
    'Idea': 'La actual orden jesuita ha sustituido el amor y la lucha de sus fundadores por la intriga y la hipocresía material. La vigilancia espiritual previene daños físicos y económicos al misionero basándose en méritos de vidas pasadas.',
    'Ejemplo': 'Ignacio de Loyola se avergüenza de sus "hijos" y revela que Trincado fue jesuita; Isidro Labrador advierte sobre un plan de robo contra Trincado.',
    'Cita': 'Mis hijos de hoy lo defienden con la astucia, con la intriga y con la más refinada hipocresía... su premio es lo material.',
    'Sinapsis': ['Degeneracion_Jesuita', 'Vidas_Pasadas', 'Proteccion_Material', 'Alfonso_XIII']
  },
  '5584: Agosto 1 de 1911 - Posesión M. P.': {
    'Piloto': 'La solidaridad en el sufrimiento y el grado máximo del amor fraternal.',
    'Idea': 'El sufrimiento en la tierra es una herramienta de expiación y progreso. Los guías sufren solidariamente con sus protegidos imperfectos, pero el amor de hermanos es la meta final tras la resignación.',
    'Ejemplo': 'El Hermano Afligido explica cómo el dolor por la imperfección ajena es parte de la misión de los espíritus de luz en el planeta tierra.',
    'Cita': 'Hay otro grado de elevación mayor que el de los padecimientos, y es el amor de hermanos.',
    'Sinapsis': ['Sufrimiento_Solidario', 'Resignacion_y_Elevacion', 'Amor_Fraternal']
  },
  '5631: Agosto 4 de 1911 - Posesión P. Portillo': {
    'Piloto': 'Armonización de la materia para el servicio del espíritu.',
    'Idea': 'El progreso espiritual tras la ayuda mediúmnica permite al ser enseñar a los encarnados la importancia de preparar el cuerpo físico como un templo o instrumento apto para el alma.',
    'Ejemplo': 'Un espíritu joven agradece su liberación y se compromete a instruir sobre la preparación de la materia para facilitar la comunicación espiritual.',
    'Cita': 'Estoy progresando para venir a deciros cómo habéis de preparar la materia para ayudar al espíritu.',
    'Sinapsis': ['Progreso_Post_Mediunnica', 'Armonia_Materia_Espiritu']
  },
  '5641: Agosto 6 de 1911 - Posesión M. P.': {
    'Piloto': 'La quiebra del dogma ante la ciencia y la confesión del error papal.',
    'Idea': 'La Iglesia Católica rompió la alianza de religiones por sed de dominio, imponiendo el celibato como un error que fuerza al crimen. La ciencia moderna desmiente el dogma, dejando al papado sin base racional.',
    'Ejemplo': 'Sixto III confiesa que el Sacro Colegio impide la reforma y admite que la Ley de Igualdad y la reencarnación son las verdades que ahora triunfan.',
    'Cita': 'El dogma se ve desmentido por la física y la química, la cosmografía y la astronomía... cometimos el grave error de consagrar el celibato.',
    'Sinapsis': ['Quiebra_del_Dogma', 'Celibato_Error_Historico', 'Poder_del_Sacro_Colegio', 'Ciencia_vs_Dogma']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

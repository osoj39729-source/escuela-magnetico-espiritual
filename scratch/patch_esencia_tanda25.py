import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '4435: Junio 23 de 1911 - Posesión M. P.': {
    'Piloto': 'El orgullo del pontificado frente a la justicia espiritual.',
    'Idea': 'La investidura material no oculta la realidad espiritual; el espíritu encarnado del líder religioso es juzgado bajo la misma ley de amor que el resto, despojándolo de su falsa infalibilidad.',
    'Ejemplo': 'El espíritu de Pío X manifiesta soberbia y elude las preguntas de Trincado sobre el Congreso Eucarístico antes de ser retirado por su jauría protectora.',
    'Cita': 'Le amenacé con obligarlo a contestar en nombre del Dios Amor, distinto del Dios Católico.',
    'Sinapsis': ['Orgullo_Pontificio', 'Justicia_Espiritual', 'Dios_Amor_vs_Dios_Catolico']
  },
  '4453: Junio 25 de 1911 - Posesión M. P.': {
    'Piloto': 'El llanto de Jesús y el mandato de la escarda espiritual.',
    'Idea': 'Jesús sufre al ver que su sacrificio es usado para justificar el odio y la inquisición. Su labor actual es escardar (limpiar) los errores de su propia siembra histórica para salvar al trigo (humanidad).',
    'Ejemplo': 'Jesús llora por la posible restauración de la Inquisición; Xavier explica que la sangre nada redime y que la lucha actual es de doctrina y amor.',
    'Cita': 'No debe derramarse más sangre en mi nombre... la Inquisición no volverá.',
    'Sinapsis': ['Amenaza_de_Inquisicion', 'Escarda_Espiritual', 'Jesus_sin_Cruz', 'Solidaridad_Espiritual']
  },
  '4531: Junio 27 de 1911 - Escrita, Trincado': {
    'Piloto': 'La piqueta demoledora y la luz del sabio ateo.',
    'Idea': 'El odio al Dios dogmático es a menudo una búsqueda de la verdad; al presentar al Dios de Amor, el odio se disuelve. Se combate la mentira institucional sin odiar a las personas que la sirven.',
    'Ejemplo': 'Trincado convence al Hermano Pito de que la verdadera piqueta demuele la doctrina falsa, no a los hombres, logrando que el sabio acepte la luz.',
    'Cita': 'Yo soy una piqueta para demoler la Iglesia de los católicos, pero ¿tú crees que yo odio por eso a los curas? No.',
    'Sinapsis': ['Piqueta_Demoledora', 'Ateismo_Racional', 'Desmitificacion_de_Jesus', 'Odio_como_Castigo']
  },
  '4643: Junio 29 de 1911 - Posesión M. P.': {
    'Piloto': 'El fin del mundo como tránsito gozoso a la perfección.',
    'Idea': 'La tierra cumplirá su misión cuando la humanidad sea perfecta; el fin no será catastrófico sino un cambio de vestidura alegre hacia un mundo superior ya preparado.',
    'Ejemplo': 'Xavier desmiente los terrores apocalípticos de la Iglesia y propone un tránsito de desencarnación colectiva bajo la mayor alegría universal.',
    'Cita': 'El fin del mundo será alegre, como lo es siempre el preparativo de un traje de fiesta.',
    'Sinapsis': ['Fin_del_Mundo_Alegre', 'Perfeccion_Humana', 'Inexistencia_del_Infierno']
  },
  '4730: Julio 2 de 1911 - Posesión M. P.': {
    'Piloto': 'El sufrimiento por amor de los espíritus elevados.',
    'Idea': 'La mayor elevación espiritual conlleva un mayor sufrimiento al percibir la ceguera ajena. El misionero debe ser humilde y desligado de prejuicios para sembrar la semilla de la regeneración espiritual.',
    'Ejemplo': 'El hermano Doroteo explica que Jesús padece hoy más que nunca debido a su mayor capacidad de amar y su visión clara de la miseria humana.',
    'Cita': 'Los espíritus padecen por el amor y tanto más padecen cuanto más aman.',
    'Sinapsis': ['Sufrimiento_por_Amor', 'Regeneracion_del_Espiritu', 'Humildad_del_Misionero']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

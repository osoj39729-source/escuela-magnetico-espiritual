import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '2842: Abril 7 de 1911 - Escrita, trincado.': {
    'Piloto': 'Redención de espíritus obsesores y rescate del honor perdido por el clero.',
    'Idea': 'Ningún espíritu es irrecuperable; el perdón de las víctimas y la intervención de guías superiores pueden sanar la locura producida por crímenes y abusos clericales.',
    'Ejemplo': 'Rescate de Isabel Cruzado, poderosa médium que empleó sus facultades para el mal tras ser corrompida por un cura; es perdonada por Pilar, su víctima.',
    'Cita': 'Isabel... despierta... yo soy el protegido de Francisco Xavier.',
    'Sinapsis': ['Redencion_de_Obsesores', 'Facultades_Mal_Empleadas', 'Perdon_Liberador', 'Isabel_Cruzado']
  },
  '2871: Abril 10 de 1911 - Posesión M.P.': {
    'Piloto': 'Cimiento doctrinal de Buscando a Dios y la búsqueda racional del Creador.',
    'Idea': 'Dios debe buscarse sin prejuicios en toda la creación, desde el átomo hasta el universo. El espiritismo es el único punto de encuentro con el verdadero Dios de Amor.',
    'Ejemplo': 'Xavier inspira a Trincado a escribir Buscando a Dios como precursor científico del Arca Santa, enfocándose en la sencillez y neutralidad racional.',
    'Cita': 'Buscadlo desde el insecto hasta el monstruo, y desde el átomo hasta el universo... el verdadero punto donde únicamente se puede encontrar a Dios es el espiritismo.',
    'Sinapsis': ['Buscando_a_Dios', 'Dios_de_Amor', 'Neutralidad_Doctrinal', 'Cimiento_del_Arca_Santa']
  },
  '2907: Abril 11 de 1911 - Posesión M.P.': {
    'Piloto': 'Crímenes ocultos tras el hábito y el desengaño de la vida claustral.',
    'Idea': 'La represión del amor natural y la corrupción de los clérigos convierten la caridad en ira y crimen; el claustro es un foco de peligro moral y encubrimiento de delitos.',
    'Ejemplo': 'Ana García (Sor María) confiesa haber envenenado pacientes y cometido abortos bajo la influencia de su amante, un cura del hospital.',
    'Cita': 'No entréis al claustro... seremos esposas buenas con el hombre, no con Cristo.',
    'Sinapsis': ['Corrupcion_Claustral', 'Infanticidio_Clerical', 'Desengaño_Religioso']
  },
  '2938: Abril 14 de 1911 (Viernes Santo) - Posesión M. P.': {
    'Piloto': 'Verdad histórica del Calvario y denuncia del comercio religioso de la fe.',
    'Idea': 'La Semana Santa es una farsa comercial; Jesús no murió en la cruz (fue descendido vivo) y los fenómenos naturales fueron producto de leyes físicas, no de venganza divina.',
    'Ejemplo': 'María de Nazaret confirma que recibió a Jesús con vida tras la crucifixión y revela que el profeta Simeón ha reencarnado en el niño Eugenio María.',
    'Cita': 'Recibí su cuerpo, al descenderlo de la cruz, y no muerto, como ya sabes.',
    'Sinapsis': ['Verdad_del_Calvario', 'Comercio_Religioso', 'Jesus_vivo_de_la_cruz', 'Simeón_Reencarnado']
  },
  '2988: Abril 18 de 1911 - Posesión M. P.': {
    'Piloto': 'Amor fraternal como nivelador social y preparación para la nueva era.',
    'Idea': 'El amor verdadero no distingue clases sociales; la elevación del espíritu suele ocultarse bajo harapos. La unión del trabajo material y el doctrinal es la clave de la Escuela.',
    'Ejemplo': 'José el Carpintero insta a la unión entre el rico y el andrajoso, preparando el camino para el niño José María bajo el símbolo de la sierra y la piqueta.',
    'Cita': 'Debajo del traje andrajoso se encuentra un espíritu elevado... la sierra y la piqueta no son armas de guerra, pues si demuelen, cimientan.',
    'Sinapsis': ['Amor_Fraternal', 'Nivelacion_Social', 'Sierra_y_Piqueta', 'Jose_Maria_Mision']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

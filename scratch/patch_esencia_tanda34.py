import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '8786: Octubre 28 de 1911 - Posesión Portillo': {
    'Piloto': 'Anuncio de la Filosofía Austera-Racional y el Juicio a los Dioses.',
    'Idea': 'La ley del progreso desciende de Sión para sustituir las religiones por una filosofía basada en la razón. Esta "Filosofía fuerte y fría" juzgará las obras de los supuestos dioses y castas, revelando su origen en la ambición humana.',
    'Ejemplo': 'Jesús de Nazaret anuncia que el misionero (Trincado) escribirá la Filosofía Austera-Racional para separar definitivamente la cizaña del dogma del trigo de la verdad.',
    'Cita': 'Una Filosofía fuerte y fría Jesús me viene a anunciar... Os la doy Austera-Racional. En ella juzgué a los dioses... Son producto del fangal.',
    'Sinapsis': ['Filosofia_Austera_Racional', 'Juicio_a_los_Dioses', 'Sacerdocio_de_Sion']
  },
  '8933: Octubre 28 de 1911 (hora 21) - Posesión M. P.': {
    'Piloto': 'La Iglesia como constructo político y la mistificación de Cristo.',
    'Idea': 'La Iglesia Católica fue una alianza política que absorbió textos orientales (Krishna) para crear un sistema de supremacía. Jesús nunca dejó escritos para evitar la idolatría, pero su figura fue cargada con el "fardo" del Cristo dogmático.',
    'Ejemplo': 'Un espíritu papal confiesa que la teología fue un acto político astuto y que se utilizó la tradición corrompida para someter a los pueblos mediante el milagro y el misterio.',
    'Cita': 'La Iglesia estaba falsamente fundada... era un acto político y en política el más astuto triunfa... cargamos el fardo a Jesús haciéndolo Cristo.',
    'Sinapsis': ['Origen_Politico_de_la_Iglesia', 'Cristo_vs_Jesus', 'Krishna_Cristo_Oriente', 'Alianza_de_Religiones']
  },
  '9016: Octubre 31 de 1911 - Posesión M. P.': {
    'Piloto': 'Inutilidad de los ritos funerarios y la restitución por reencarnación.',
    'Idea': 'Los ritos sobre las tumbas son un gasto estéril; la verdadera ayuda al espíritu es la oración mental y la caridad a los vivos. Los espíritus con deudas materiales deben aceptar la reencarnación para reparar sus crímenes.',
    'Ejemplo': 'Duremon critica el gasto en "Día de Difuntos" mientras el espíritu de una criminal (M. Ré) reconoce su culpa y acepta volver a la tierra para pagar su deuda de vida.',
    'Cita': 'Qué bien aprovechado sería ese gran caudal... si se buscara a los necesitados... una oración sin gasto pecuniario es el mejor consuelo.',
    'Sinapsis': ['Ritos_Funerarios', 'Oracion_Mental', 'Restitucion_por_Reencarnacion']
  },
  '9102: Noviembre 3 de 1911 - Posesión Portillo': {
    'Piloto': 'El ciclo destructivo de la venganza espiritual.',
    'Idea': 'El odio y la venganza en el espacio convierten a la víctima en verdugo, prolongando su propio sufrimiento y el de sus afines. Solo el perdón y la comprensión de la ley rompen el ciclo de dolor.',
    'Ejemplo': 'El espíritu de una hospiciana torturada relata su venganza sangrienta desde el espacio y cómo la luz de la Escuela le enseña que su odio es su propia prisión espiritual.',
    'Cita': 'Padezco porque odio a mis amos... Dios se apiada de mí y me manda entre vosotros... no odiéis, amad a vuestros enemigos.',
    'Sinapsis': ['Venganza_Espiritual', 'Ciclo_del_Odio', 'Perdon_Doctrinal']
  },
  '9132: Noviembre 5 de 1911 - Posesión Portillo': {
    'Piloto': 'Francisco Xavier y la unificación de Ciencia y Amor.',
    'Idea': 'Como Jefe de los Consejos del Amor, Francisco Xavier inviste al misionero para unir la ciencia material con el sentimiento espiritual. El cristianismo es declarado una "amalgama indigerible" que debe ser superada por la verdad universal.',
    'Ejemplo': 'Xavier declara que Jesús ya cumplió su juicio y que ahora el Mesías Reformador trae la luz de Sión para llenar los vacíos de las ciencias y las religiones.',
    'Cita': 'Soy investido Jefe Superior de los Consejos del Amor... el Mesías Reformador llena los vacíos que el hombre siente... el cristianismo es una amalgama indigerible.',
    'Sinapsis': ['Francisco_Xavier_Jefe', 'Mesias_Reformador', 'Unificacion_Ciencia_Amor', 'Cristianismo_Amalgama']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

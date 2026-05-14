import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '2483: Febrero 23 de 1911 - Antonio de Padua': {
    'Piloto': 'Vigilancia espiritual y firmeza ante la obsesión de espíritus revueltos.',
    'Idea': 'Es necesario distinguir avisos reales de ruidos fútiles; los espíritus en odio absoluto deben ser forzados a la luz mediante la calma y la instrucción sistemática.',
    'Ejemplo': 'Acoso de Isabel Cruzado, espíritu que murió en odio y locura, quien es confrontada por la calma de Trincado y los guías.',
    'Cita': 'Tienes que revestirte de calma y lo forzaremos el día señalado.',
    'Sinapsis': ['Discernimiento_de_Señales', 'Obsesion_Espiritual', 'Revestimiento_de_Calma']
  },
  '2512: Marzo 19 de 1911 - Posesión de M. P.': {
    'Piloto': 'Higiene del espiritismo y permuta de la escasez por medios materiales.',
    'Idea': 'El espiritismo comercial es ignorancia y soberbia; la Escuela requiere medios científicos y materiales para triunfar. Trincado permuta su pobreza por bienes para la obra.',
    'Ejemplo': 'La romería de millones de espíritus que presentan al Padre la petición de Trincado para obtener fondos para la base sólida del espiritismo.',
    'Cita': '¿Cómo no había de aceptar el Padre Amoroso, si ofreces el millón por uno?',
    'Sinapsis': ['Higiene_del_Espiritismo', 'Permuta_de_Pobreza', 'Espiritismo_Cientifico', 'Romeria_Espiritual']
  },
  '2601: Marzo 19 de 1911 - scrita, Trincado': {
    'Piloto': 'La energía necesaria en el mando y el peligro de la excesiva blandura.',
    'Idea': 'La humildad mal entendida es debilidad; el dirigente debe ser enérgico y ufano en la razón para evitar luchas desiguales. El perdón requiere mérito.',
    'Ejemplo': 'Reprensión de José a Trincado por su falta de energía ante las intrigas de la médium L.G., comparándolo con un perro blando acosado.',
    'Cita': 'Hay que demostrar la fortaleza sin altanería; y el saber sin jactancia.',
    'Sinapsis': ['Fortaleza_del_Misionero', 'Humildad_Racional', 'Reprension_del_Maestro']
  },
  '2634: Marzo 25 de 1911 - Escrita, Trincado': {
    'Piloto': 'La columna de fuerza psíquica y la voluntad como motor de victoria.',
    'Idea': 'La voluntad tesonera ("Quiero") crea una columna psíquica inexpugnable; el universo es el patrimonio de quienes actúan con bondad y ciencia.',
    'Ejemplo': 'Victoria de un protegido de Loyola sobre fuerzas confabuladas gracias al apoyo de la columna psíquica proyectada por Trincado.',
    'Cita': 'A mis hijos les dejé por patrimonio el universo... tú sí me entendiste.',
    'Sinapsis': ['Columna_Psiquica', 'Patrimonio_Universal', 'Voluntad_Tesonera', 'Ignacio_de_Loyola']
  },
  '2663: Marzo 26 de 1911 - Posesión de M. P.': {
    'Piloto': 'La música como lenguaje universal y expresión de la armonía del cosmos.',
    'Idea': 'La música es el compás de la eternidad; se recoge del arsenal infinito del universo mediante la elevación espiritual para trasladarla a la materia.',
    'Ejemplo': 'Rossini describe la música como la lengua de las almas que han encontrado la verdad, prometiendo himnos para el espiritismo.',
    'Cita': 'La música... es el conjunto armónico y desarmónico del universo.',
    'Sinapsis': ['Lenguaje_Universal_Musica', 'Inspiracion_Espiritual', 'Rossini_Musico']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

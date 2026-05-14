import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '7920: Octubre 3 de 1911 - Posesión M. P.': {
    'Piloto': 'Desmitificación de la Virgen del Pilar e identidad espiritual.',
    'Idea': 'Las figuras veneradas por la religión son a menudo espíritus humanos cuya identidad real ha sido ocultada por el mito. El espíritu de Pilar de Zaragoza aclara que fue una mujer común, corrigiendo la mistificación católica.',
    'Ejemplo': 'Un espíritu se manifiesta y aclara a Trincado que ella es simplemente Pilar, una mujer de Zaragoza, y no la entidad divina que la Iglesia adora como virgen.',
    'Cita': 'Soy la hermana Pilar de Zaragoza (no fui la virgen)... el que ha de sembrar la verdad, no puede admitir mentira.',
    'Sinapsis': ['Desmitificacion_de_Maria', 'Pilar_de_Zaragoza', 'Identidad_Espiritual']
  },
  '7948: Octubre 6 de 1911 - Posesión M. P.': {
    'Piloto': 'Geopolítica espiritual y la premonición de la gran catástrofe europea.',
    'Idea': 'Los conflictos armados menores son síntomas de injusticias sistémicas que preparan guerras mayores. La justicia del Padre recae sobre las naciones que traicionan sus deberes de progreso por ambiciones materiales.',
    'Ejemplo': 'Juan Bautista analiza la guerra en Trípoli y predice que la traición de Italia y las alianzas secretas llevarán a la ruina de las grandes potencias en una guerra inminente (WWI).',
    'Cita': 'La justicia del Padre ha caído sobre Italia, Austria, Alemania y Francia... porque el hombre ha retrocedido en su misión.',
    'Sinapsis': ['Geopolitica_Espiritual', 'Guerra_de_Tripoli', 'Justicia_del_Padre']
  },
  '7986: Septiembre 10 de 1911 - Posesión M. P.': {
    'Piloto': 'Responsabilidad paterna y el lastre de los prejuicios sociales.',
    'Idea': 'La interferencia de los padres en el afecto libre de los hijos genera deudas espirituales prolongadas. El reconocimiento del error es necesario para la liberación tanto del padre como del hijo.',
    'Ejemplo': 'El espíritu de un labrador confiesa que su oposición al amor de su hija (la médium Margarita en otra vida) causó siglos de sufrimiento y calumnia para ambos.',
    'Cita': 'No os opongáis, padres, al afecto natural de vuestros hijos... yo me opuse y ella se perdió.',
    'Sinapsis': ['Responsabilidad_Paterna', 'Prejuicio_Social', 'Afinidad_Espiritual']
  },
  '8011: Octubre 13 de 1911 - Posesión P. Portillo': {
    'Piloto': 'La ley de restitución en el crimen y el infanticidio.',
    'Idea': 'La justicia espiritual exige que quien quita la vida deba otorgarla nuevamente mediante la reencarnación. El arrepentimiento sincero es el único camino para cesar el sufrimiento en el espacio.',
    'Ejemplo': 'Un espíritu (A.P.) confiesa haber matado a sus hijos y a su amante; reconoce que su castigo y redención consisten en regresar a la tierra como madre de las mismas víctimas.',
    'Cita': 'Yo tendré que volver a la tierra y dar vida a quien se la quité... veinte años de vida y veinte de sufrimientos.',
    'Sinapsis': ['Ley_de_Restitucion', 'Infanticidio_Espiritual', 'Confesion_Doctrinal']
  },
  '8030: Octubre 15 de 1911 - Posesión M. P.': {
    'Piloto': 'Teresa de Jesús (Iris) y el Mandato Final de Adelante.',
    'Idea': 'Teresa revela su pasado como el cebo (Iris) que llevó a la muerte a Antulio (Jesús), y su misión actual de rescatar la verdad de Jesús del "Cristo" dogmático. Francisco Xavier cierra el volumen con el mandato de la batalla de la luz.',
    'Ejemplo': 'Francisco Xavier insta a los espiritistas racionalistas a usar la espada de la ciencia y el amor para vencer el letargo de la ignorancia y la tiranía religiosa.',
    'Cita': 'Adelante es el mandato... llevaréis la espada de la ciencia de la verdad, del amor y con ella daréis la batalla.',
    'Sinapsis': ['Teresa_de_Jesus_Iris', 'El_Anticristo_Racional', 'Mandato_de_Adelante', 'Batalla_de_la_Luz']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

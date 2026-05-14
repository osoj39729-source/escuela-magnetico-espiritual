import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '2115: Enero 31 de 1911 - Posesión de M. P.': {
    'Piloto': 'La alegría del espíritu y el horror de los crímenes pasionales ocultos.',
    'Idea': 'La música es misión y armonía; descuidar el amor humano por un amor místico a Dios es un error. Los crímenes de sangre atan al espíritu hasta la confesión sincera.',
    'Ejemplo': 'Rossini se presenta como músico de las huestes; Clara Roura confiesa infanticidio e incesto en La Pampa, buscando luz.',
    'Cita': 'Procurad tañir vosotros el arpa del amor... sin descuidar el amor de vuestros hermanos.',
    'Sinapsis': ['Mision_del_Artista', 'Crimenes_Pasionales', 'Confesion_Espiritual', 'Rossini', 'Clara_Roura']
  },
  '2171: Febrero 1 de 1911 - Posesión se M.P.': {
    'Piloto': 'Consuelo espiritual ante la realidad de las reencarnaciones cruzadas.',
    'Idea': 'Las persecuciones actuales suelen ser deudas de vidas pasadas donde los roles (hombre/mujer) se invierten; el perdón es la única vía de liberación.',
    'Ejemplo': 'Rita revela que el espíritu acosador de una señora fue su propia esposa en una vida anterior donde ella fue el esposo opresor.',
    'Cita': 'Sacad como consecuencia que vivimos muchas veces.',
    'Sinapsis': ['Reencarnacion_Cruzada', 'Deuda_Karmica', 'Rita_de_Casia', 'Perdon_Liberador']
  },
  '2196: Febrero 3 de 1911 - Posesión de M.P.': {
    'Piloto': 'Desmitificación de los estigmas y la ciencia del dolor como aprendizaje.',
    'Idea': 'Los estigmas religiosos son llagas de origen biológico y emocional, no milagros; el dolor faculta al espíritu para la sanación real a través de la experiencia.',
    'Ejemplo': 'Rita rectifica el mito de la espina de Jesús en su frente, explicando que fue una llaga por padecimientos humanos que le dio el don de curar.',
    'Cita': 'La llaga que tuve en la frente... no ha sido producida por una espina de corona de Jesús.',
    'Sinapsis': ['Desmitificacion_de_Estigmas', 'Rita_de_Casia_Sanadora', 'Justicia_Terrestre']
  },
  '2229: Febrero 7 de 1911 - Posesión de M.P.': {
    'Piloto': 'El error de la caridad desigual y el desengaño del fanatismo.',
    'Idea': 'La igualdad es ley divina; favorecer a unos sobre otros por dogma religioso es una falta grave que atormenta al espíritu tras la muerte.',
    'Ejemplo': 'Concepción, ex-hermana de la caridad, confiesa su parcialidad en hospitales por fanatismo y reconoce el espiritismo como la verdad.',
    'Cita': 'La igualdad Dios la ha establecido y no ha impuesto ideas religiosas por las que deban ser unos más que otros.',
    'Sinapsis': ['Igualdad_Doctrinal', 'Fanatismo_Religioso', 'Desengaño_de_la_Muerte', 'Teresa_de_Jesus']
  },
  '2261: Febrero 10 de 1911 - Posesión de M. P.': {
    'Piloto': 'De la soberbia purpurada a la redención por la verdad y el amor.',
    'Idea': 'La casta sacerdotal crea una ceguera de orgullo que requiere siglos de purificación; la lucha por la libertad es estéril si se alimenta de odio.',
    'Ejemplo': 'El príncipe Morcino confiesa sus crímenes de sotana y su posterior reencarnación fallida como revolucionario lleno de odio.',
    'Cita': 'Feliz hora en que he podido rasgar la ceguera de mis ojos y la amistad de los ciegos purpurados.',
    'Sinapsis': ['Ceguera_de_la_Purpura', 'Revolucion_y_Odio', 'Redencion_Espiritual', 'Enrique_Morcino']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

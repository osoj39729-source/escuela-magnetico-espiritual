import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '26: Al lector - Espiritismo Luz y Verdad.': {
    'Piloto': 'Prólogo al Tomo 2: El Año de Quiebra y el Juicio de Obras.',
    'Idea': 'Este volumen registra las sentencias definitivas sobre los espíritus que han prevaricado. El juicio es estrictamente sobre las obras (no la fe) y marca el "Año de Quiebra" donde los no conscientes son desterrados a moradas inferiores según su debe y haber espiritual.',
    'Ejemplo': 'Trincado advierte que la lectura del libro provocará el "rechinar de dientes" en los que no quieran hacer conciencia, revelando el horror de la no sumisión a la ley de amor.',
    'Cita': 'Se sentenció en absoluta justicia... no se tuvo en cuenta la fe, sino las obras... la fe sin obras es muerta.',
    'Sinapsis': ['Año_de_Quiebra', 'Juicio_de_Obras', 'Destierro_Espiritual', 'Sentencia_Inapelable']
  },
  '77: Noviembre 26 de 1911 (hora 20) Portillo - Posesión  M. P.': {
    'Piloto': 'José el Carpintero: Desmitificación de la infancia de Jesús.',
    'Idea': 'Jesús fue un niño irreductible cuya misión espiritual chocaba con los deberes materiales del hogar. La doctrina (la rosa) debe ser defendida con firmeza (espinas) por el misionero para evitar ser asfixiada por la serpiente del dogma sacerdotal.',
    'Ejemplo': 'José confiesa que envió a Jesús a Jerusalén para aprender el oficio de obrero, pero el niño inició su emancipación familiar al encontrar su germen doctrinal en la Cábala y el Templo.',
    'Cita': 'No podía avenirme con aquel niño irreductible e inútil para el trabajo... Jesús era el obrero universal... el misionero tiene que ir enseñando las espinas de su defensa.',
    'Sinapsis': ['Jose_el_Carpintero', 'Jesus_Niño', 'Emancipacion_de_la_Familia', 'Rosa_con_Espinas']
  },
  '232: Diciembre 1 de 1911 - que al hombre lo hace temer.': {
    'Piloto': 'El Herrero: El fanatismo religioso como motor de crimen y suicidio.',
    'Idea': 'La educación sectaria induce al homicidio por "defensa de la fe" y al suicidio por "falso honor". En el espacio, la víctima suele ser el salvador del verdugo arrepentido, revelando que el infierno es solo el remordimiento de la propia conciencia.',
    'Ejemplo': 'El herrero R. G. relata cómo mató a un librepensador en su fragua y luego fue inducido al suicidio por un cura para proteger el nombre de la Iglesia.',
    'Cita': '¿Para qué más infierno que el de mi fragua?... mi víctima es la que más me ayuda... cuánta maldad se encierra en esa Iglesia infame.',
    'Sinapsis': ['Fanatismo_Religioso', 'Suicidio_Inducido', 'Ley_de_Afinidad', 'Remordimiento_de_Conciencia']
  },
  '274: Diciembre 3 de 1911   (Escrita Trincado) - como mandado me queda.': {
    'Piloto': 'Francisco Xavier: La Comuna de Amor y la Ética de la Riqueza.',
    'Idea': 'El alma es inmortal y no se "pierde", solo se extravía. La riqueza debe ser administrada con el deber de suplir las necesidades ajenas; la Comuna de Amor no condena la fortuna, sino la opresión que esta genera.',
    'Ejemplo': 'Xavier propone la Comuna como un estado universal basado en el amor puro y la justicia equitativa, donde la ley de compensación rige inflexiblemente los actos de cada individuo.',
    'Cita': 'Nada aprovecha al hombre ganar el mundo si pierde su alma el derrotero... la riqueza sirve para oprimir al desheredado... en la idea de la comuna no se condena la posesión.',
    'Sinapsis': ['Comuna_de_Amor', 'Administracion_de_Riquezas', 'Ley_de_Compensacion', 'Inmortalidad_del_Alma']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

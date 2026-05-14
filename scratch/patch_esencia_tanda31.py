import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '7609: Septiembre 24 de 1911 - ------': {
    'Piloto': 'Juicio a Mahoma y la abolición de las supremacías religiosas.',
    'Idea': 'Ningún fundador posee primacía ante el Padre. El Islam surgió como reacción al odio generado por la traición de Roma a la Alianza de Religiones del siglo III. La verdadera fe es la religión del alma, sin templos ni castas sacerdotales.',
    'Ejemplo': 'Mahoma confiesa haber sido secretario de la alianza religiosa antigua y haber dictado leyes de odio por despecho; Trincado lo insta a deshacer su propia religión para implantar la paz.',
    'Cita': 'Matemos la supremacía, hermano... yo implantaré la religión del alma, sin templos, ni sacerdotes.',
    'Sinapsis': ['Juicio_a_Mahoma', 'Alianza_de_Religiones', 'Primacia_Religiosa', 'Religion_del_Alma']
  },
  '7691: Septiembre 24 de 1911 (hora 21) - Posesión P. Portillo': {
    'Piloto': 'Redención de Mahoma y el reencuentro filial espiritual.',
    'Idea': 'La aceptación de la igualdad universal libera al espíritu del orgullo religioso. Los afectos familiares son utilizados por la justicia divina para facilitar la transición hacia la luz.',
    'Ejemplo': 'Mahoma recibe la luz y reconoce conmovido que el médium Pedro Portillo es su propio hijo de una existencia anterior, comprometiéndose a extinguir el odio religioso.',
    'Cita': 'Triste de mí, cuántos siglos en las tinieblas de mi orgullo... voy a trabajar para apagar el odio de religiones que sembré.',
    'Sinapsis': ['Redencion_de_Mahoma', 'Afinidad_Filial', 'Reconocimiento_de_la_Igualdad']
  },
  '7725: Septiembre 31 de 1911 - Posesión P. Portillo': {
    'Piloto': 'El despertar de las masas y la transmutación de la guerra.',
    'Idea': 'La agitación social y política refleja la preparación del mundo espiritual para la paz universal. La opinión pública, inspirada por espíritus, detendrá los conflictos fratricidas impulsados por la hipocresía de los Estados.',
    'Ejemplo': 'Jesús se identifica como la continuidad de Isaac, Antulio e Isaías, señalando que la redención es la unión de los pueblos por el amor racional y no por dogmas.',
    'Cita': 'Los hombres comprenden que algo nuevo se prepara... son los últimos chispazos del odio de razas y religiones.',
    'Sinapsis': ['Agitacion_Espiritual', 'Paz_Universal', 'Reencarnaciones_de_Jesus']
  },
  '7792: Octubre 1º de 1911 - Posesión P. Portillo': {
    'Piloto': 'Antulio y la prevaricación de la ciencia y la religión.',
    'Idea': 'La religión falla por sus castas y la ciencia por su materialismo; ambas requieren el intermediario del amor. La Escuela Filosófica es progresiva y su actual portador (Trincado) es quien ya la fundó como Antulio.',
    'Ejemplo': 'Antulio relata cómo su antigua escuela fue destruida por sabios envidiosos que usaron la belleza femenina como trampa para ejecutarlo con cicuta.',
    'Cita': 'El que vino a establecer la Escuela filosófica... es el que portará ahora la luz. Es el desengaño de la religión y de la ciencia.',
    'Sinapsis': ['Antulio_el_Sabio', 'Prevaricacion_del_Saber', 'Escuela_Filosofica_Progresiva', 'Sabio_vs_Religioso']
  },
  '7870: Octubre 1º de 1911 (Hora 21) - Posesión M. P.': {
    'Piloto': 'El fin de la expiación y el inicio del Siglo de la Verdad.',
    'Idea': 'La historia oficial es una mentira que oculta a los misioneros. El renacimiento de Trincado cumple la profecía del general hombre mayor. En la tercera generación el amor reinará y la mentira será un crimen.',
    'Ejemplo': 'Antulio explica que la cirugía espiritual fue necesaria porque Trincado terminó su etapa de expiación y comienza su misión de redención con plena autoridad.',
    'Cita': 'La historia se escribirá con verdad... desde ahora a la tercera generación, el amor reinará en todas partes.',
    'Sinapsis': ['Siglo_de_la_Verdad', 'Historia_Verdadera', 'Fin_de_la_Expiacion', 'Profecia_del_General']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

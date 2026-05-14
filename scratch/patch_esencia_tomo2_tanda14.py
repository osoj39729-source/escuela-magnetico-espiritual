import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '6822: Con  tres satélites y  dos  luminares,  con  forma  ovo-esferoidal    que,  aunque  parezca  contrario,  en  la  ley  que  poco conocéis, - Sholis  Sholis': {
    'Piloto': 'Sholis Sholis: Astronomía y la muerte como graduación en Eg Eg.',
    'Idea': 'En mundos superiores como Eg Eg, la vida es una progresión sin decrepitud y la muerte se vive como una graduación gozosa hacia nuevos estudios. La interacción entre vivos y espíritus es constante, sirviendo los últimos de guías para el progreso material y moral.',
    'Ejemplo': 'Sholis describe Eg Eg con sus 3 satélites y forma ovoide, explicando que la procreación es un acto de alta responsabilidad y la transformación física es un triunfo del aprendizaje.',
    'Cita': 'La muerte es como un estudiante que corre gozoso a tomar su título... Eg Eg está a 33 billones de leguas de Sión.',
    'Sinapsis': ['Mundo_Eg_Eg', 'Muerte_como_Graduacion', 'Procreacion_Limitada', 'Astronomía_Espiritual']
  },
  '6869: Marzo 5 de 1912  (Portillo) - Juilis  Juilis  del  Gof Duf.': {
    'Piloto': 'El revulsivo del Juicio y el engaño del Espiritualismo.',
    'Idea': 'El progreso material es un medio traído por mundos perfectos para preparar la unión humana. El juicio es el revulsivo necesario contra la anestesia del espíritu por la carne. Se define al Espiritualismo como una amalgama materialista frente al Espiritismo racional.',
    'Ejemplo': 'Juilis Juilis advierte que las guerras son purgas necesarias para limpiar la "casa solariega" del Padre y que los rebeldes serán exiliados a mundos de lucha bruta.',
    'Cita': 'El Espiritualismo es la amalgama de los hijos de la carne... el progreso os proviene de mundos perfectos... la tierra se niega a sostener a los morosos.',
    'Sinapsis': ['Espiritualismo_vs_Espiritismo', 'Progreso_como_Medio', 'Saneamiento_Planetario', 'Anestesia_del_Espiritu']
  },
  '7009: Marzo 8 de 1912 (Portillo) - Napoleón': {
    'Piloto': 'Napoleón: La espada de la justicia contra la tiara papal.',
    'Idea': 'Napoleón justifica sus guerras como una misión para quebrar el poder político de la religión y despertar la conciencia de los pueblos. Se reconoce como un precursor del Juez que usó la espada porque el mundo aún no estaba listo para el amor.',
    'Ejemplo': 'Napoleón confiesa que invadió Rusia y España para demostrar la caducidad de la corona y la tiara, cumpliendo su purga personal en el destierro de Santa Elena.',
    'Cita': 'Vine con la espada de la justicia porque no era tiempo de amor... hice temblar la tiara... mi riqueza fue vestirme con camisas de mis generales.',
    'Sinapsis': ['Mision_de_Napoleon', 'Caida_de_la_Tiara_Papal', 'Espada_de_la_Justicia', 'Precursor_del_Juez']
  },
  '7131: Marzo  11  de  1912  (Portillo) - Hombre real.  En Sevilla.': {
    'Piloto': 'Don Juan Tenorio: Juicio a la lujuria y el honor de la madre.',
    'Idea': 'La lujuria es una pasión destructora que genera crimen e infanticidio. El espíritu del libertino se presenta desnudo de luz ante el tribunal, mientras que sus víctimas, las madres que se redimieron por el amor filial, son santificadas por la ley.',
    'Ejemplo': 'El espíritu que inspiró el mito de Don Juan confiesa su vergüenza por haber prostituido la inocencia y suplica clemencia para evitar el exilio a mundos animales.',
    'Cita': 'Nosotros deshojábamos la flor de la inocencia... llamábamos amor al desenfreno... la mancha del cuerpo no llegó al alma de las madres.',
    'Sinapsis': ['Juicio_a_Don_Juan', 'Crimen_de_la_Lujuria', 'Redencion_por_la_Maternidad', 'Desnudez_Espiritual']
  },
  '7243: Continúo el  Juicio    Sin  desposesionarse  el  medium,  dijo  Aquí estamos   ¿Por  qué se  nos  llama?    ¿Por  qué la  ley  nos - Cleopatra': {
    'Piloto': 'Cleopatra y el juicio a las cortesanas: El velo intercesor.',
    'Idea': 'Las mujeres de poder y ociosidad son responsables de la depravación social y el infanticidio por capricho. La justicia diferencia entre la debilidad de la obrera y la maldad de la cortesana, siendo María la protectora de quienes buscan redención sincera.',
    'Ejemplo': 'Cleopatra describe sus bacanales y crímenes de salón, aceptando la ley de amor para borrar su pasado y recibiendo el velo de luz de María para cubrir su vergüenza.',
    'Cita': 'Nosotras matábamos el fruto para no interrumpir el goce... Maria nos ha cubierto con su luz... acatamos la ley para no perder la tierra.',
    'Sinapsis': ['Juicio_a_Cleopatra', 'Prostitucion_de_Salon', 'Velo_de_Maria', 'Santificacion_de_la_Maternidad']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

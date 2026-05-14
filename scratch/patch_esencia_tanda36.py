import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '9719: Noviembre 12 de 1911 (hora 20) - Posesión M. P.': {
    'Piloto': 'La infinitud de Sión y el camino del amor desde el liquen.',
    'Idea': 'El espíritu evoluciona desde las formas más simples (liquen) hasta la conciencia humana a través del amor. El universo es una manifestación de belleza infinita donde el odio es un elemento extraño que debe ser erradicado mediante la paciencia y el conocimiento.',
    'Ejemplo': 'Un viajero sideral describe a Sión como una ciudad infinita y aconseja al misionero moderar su velocidad para no quebrar el "envoltorio frágil" de la materia humana.',
    'Cita': 'El amor es gran maestro que el alma encuentra aquí y allá, por el que, del liquen, hasta el hombre ha de llegar... la devanadera es frágil materia.',
    'Sinapsis': ['Evolucion_del_Espiritu', 'Sión_Sideral', 'Fragilidad_de_la_Materia']
  },
  '9757: Noviembre 14 de 1911 - Posesión M. P.': {
    'Piloto': 'El uso del poder misional y la advertencia de María de Nazaret.',
    'Idea': 'El poder otorgado por el Padre no es para castigar ni amargar a los rebeldes, sino para redimirlos. María de Nazaret actúa como intercesora, recordando que el amor y la humildad son las únicas herramientas capaces de sanar las llagas del espíritu.',
    'Ejemplo': 'María detiene un pedido de rigor de Trincado contra el espíritu de Felipe II, instándolo a ser un juez de paz que atraiga a los enfermos del alma hacia la luz del Padre.',
    'Cita': 'Retira tu pedido de pena mayor... extremo tu amor siempre; tu humildad, a veces, y tu poder, siempre... yo curaré las llagas de vuestra materia.',
    'Sinapsis': ['Maria_de_Nazaret_Intercesora', 'Poder_Misional', 'Redencion_de_Rebeldes']
  },
  '9796: Noviembre 16 de 1911 - Posesión Portillo': {
    'Piloto': 'Josefina Golme y la defensa contra los mistificadores.',
    'Idea': 'El odio por el honor herido crea prisiones mentales ilusorias. Solo el perdón rompe la ofuscación. La defensa contra los "espíritus de cabeza dura" y mistificadores es la oración mental y el desarrollo de la percepción espiritual.',
    'Ejemplo': 'Trincado libera a Josefina de su prisión de "agua fría" al enseñarle que es una creación de su odio. Lázaro Ramos advierte sobre la presencia de mistificadores que intentan desviar a los encarnados.',
    'Cita': 'Tu justicia es de amor... los barrotes y agua que sientes solo están en tu ceguera... tened más miedo al muerto que al vivo si obra a mansalva.',
    'Sinapsis': ['Prision_Mental', 'Honor_y_Perdon', 'Mistificadores_Espirituales', 'Oracion_Mental']
  },
  '9868: Noviembre 19 de 1911 - Posesión Portillo': {
    'Piloto': 'Francisco Xavier y el Mesías Regenerador.',
    'Idea': 'Francisco Xavier, como Espíritu de Verdad, confirma que Trincado es el Mesías Regenerador encargado del Juicio a los Dioses. Jesús termina su misión de agobio y Xavier asume la dirección espiritual para guiar la batalla final contra los dogmas.',
    'Ejemplo': 'Xavier relata su infiltración histórica en la Iglesia y autoriza al misionero para encender la hoguera del amor fraternal que unirá a todas las naciones en una sola ley.',
    'Cita': 'Este es el Mesías Regenerador que el espíritu de Verdad confirma... Jesús entra en su ganado descanso; y otro ocupa el lugar... Francisco Xavier toma las riendas.',
    'Sinapsis': ['Mesias_Regenerador', 'Francisco_Xavier_EV', 'Fin_del_Agobio_de_Jesus', 'Juicio_a_los_Dioses']
  },
  '9997: Noviembre 19 de 1911 (hora 21) - Posesión M. P.': {
    'Piloto': 'Crimen de lesa deidad y la sociedad del mundo sideral.',
    'Idea': 'La Iglesia cometió el crimen de falsificar doctrinas para su supremacía política. El verdadero progreso se vive en mundos siderales comunales, donde la procreación es natural y sin dolor, y la vida se rige por la armonía universal de ELOI.',
    'Ejemplo': 'El Papa Gerónimo confiesa la falsificación de evangelios en el Vaticano. Paralelamente, se describe un mundo sideral donde hombres perfectos viven en comuna y adoran la ley de amor infinita.',
    'Cita': 'De lesa deidad nos acusan... hemos delinquido... en aquel mundo todo es alegría, ciencia, amor y libertad; no hay más misterio que la eternidad del progreso.',
    'Sinapsis': ['Crimen_de_Lesa_Deidad', 'Mundo_Sideral_Comunal', 'Procreacion_Universal', 'ELOI_en_el_Cosmos']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

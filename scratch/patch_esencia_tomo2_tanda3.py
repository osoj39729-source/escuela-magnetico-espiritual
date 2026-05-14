import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '1295: Diciembre 8 de 1911 (Portillo) - Trincado.': {
    'Piloto': 'Schuwit: La equidad del trabajo y la negación de lo sobrenatural.',
    'Idea': 'El desequilibrio social nace de la usurpación del trabajo del obrero por los supremáticos. Lo sobrenatural no existe; es solo ignorancia de las leyes naturales. El espíritu teje su morada eterna con el amor a la obra realizada.',
    'Ejemplo': 'Schuwit cuestiona por qué se valora la joya pero se desprecia al joyero, advirtiendo que en el espacio el traje de luz se gana por mérito, no por alcurnia.',
    'Cita': '¿Vale más la joya que el joyero?... lo sobrenatural no existe más que en vuestra ignorancia... el espíritu es su propio artífice.',
    'Sinapsis': ['Usurpacion_del_Trabajo', 'Ley_de_Afinidad', 'Desmitificacion_de_lo_Sobrenatural', 'Traje_de_Luz']
  },
  '1518: Diciembre 17 de 1911 (Portillo) - Francisco Xavier': {
    'Piloto': 'Xavier: El fin de la tradición traidora y la ley que vivifica.',
    'Idea': 'La letra escrita mató el espíritu en el pasado; el misionero actual trae la ley que habla al corazón y unifica a la humanidad. Se denuncia al militarismo como herramienta de opresión que divide a la familia humana.',
    'Ejemplo': 'Xavier declara que la mujer es media humanidad con derechos iguales y que el legislador que ignora el dolor del pueblo es un verdugo de la ley.',
    'Cita': 'La letra escrita mató al espíritu de la ley; y la tradición sin la ley escrita, se corrompe... Jesús y Juan se entendieron para predicar la libertad de pensamiento.',
    'Sinapsis': ['Letra_que_Vivifica', 'Igualdad_de_la_Mujer', 'Tradicion_Traidora', 'Misionero_de_Sion']
  },
  '1807: Durante esta discusion, se posesiono el medium Portillo anunciandosenos la viajera le d permiso y dijo - Con el espiritualismo  infiel.': {
    'Piloto': 'Teresa de Jesús: Imposibilidad de la reforma y demolición del dogma.',
    'Idea': 'Las religiones están corrompidas desde la base y no admiten reforma; deben ser demolidas para edificar sobre la razón. El espiritualismo dogmático es un retroceso que detiene el progreso del espíritu.',
    'Ejemplo': 'Teresa advierte que no se puede unir el Espiritismo Luz y Verdad con el "espiritualismo infiel", pues hay que amputar el miembro gangrenado del dogma para salvar la verdad.',
    'Cita': 'La amputación de un miembro gangrenado es saludable... reforma no puede haber... no se puede levantar ese monumento sobre paredes de barro.',
    'Sinapsis': ['Amputacion_del_Dogma', 'Congreso_Eucaristico_1911', 'Espiritualismo_Infiel', 'Nombre_de_Guerra']
  },
  '1946: Diciembre 17  de 1911 Hora 21 Portillo - bolo.': {
    'Piloto': 'Che Auffer: La mujer como fuerza motriz y el fin del militarismo.',
    'Idea': 'La mujer es la cuerda (motor) de la sociedad, no un objeto pasivo. El presupuesto militar es un robo social. La guerra civil es el parricidio de la lógica donde el hijo es obligado a matar al padre.',
    'Ejemplo': 'Che Auffer compara a la mujer con la cuerda de un pozo: sin ella, el hombre (el cubo) no puede extraer la vida de la sociedad. Propone el arbitraje universal como fin de la barbarie.',
    'Cita': 'La mujer es la cuerda y no el cubo... sois los parricidas de la ley... el obrero es mártir y verdugo al mismo tiempo.',
    'Sinapsis': ['Mujer_Fuerza_Motriz', 'Parricidio_de_la_Ley', 'Arbitraje_Universal', 'Presupuesto_Militar_Crimen']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

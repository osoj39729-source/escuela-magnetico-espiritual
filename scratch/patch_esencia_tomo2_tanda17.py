import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '8283: Marzo  30  de  1912 - Napoleón.': {
    'Piloto': 'Napoleón II: El misionero militar y la misión inconclusa.',
    'Idea': 'Napoleón confirma en segunda comunicación que fue un misionero de corta misión cuyo fin era sacudir el poder clerical y monárquico. Reconoce haber dejado obras inconclusas, pero acepta que el amor (no la espada) es el complemento necesario que él no pudo dar.',
    'Ejemplo': 'Napoleón relata que su pensamiento llegó al círculo doctrinal por afinidad al escuchar su nombre, demostrando que en el espacio el pensamiento vence la distancia.',
    'Cita': 'Fui misionero; militar ante los hombres... cumplí cuanto pude, pero dejé mucho inconcluso... el pensamiento no tiene distancias.',
    'Sinapsis': ['Mision_Inconclusa_de_Napoleon', 'Pensamiento_sin_Distancia', 'Espada_como_Mision_Temporal', 'Afinidad_de_Llamado']
  },
  '8316: Marzo 30 de 1912  (Portillo) - Yo,  Zakiammuni.': {
    'Piloto': 'Buda (Zakiammuni): La convergencia de Alá, Buda y Eloí.',
    'Idea': 'Buda se presenta al tercer llamado del tribunal para justificarse. Reconoce que los pregoneros de Alá, Buda y Eloí proclaman el mismo Padre Universal y que su doctrina fue la preparación del camino que ahora culmina en la ley de amor de la Cosmogonía.',
    'Ejemplo': 'Zakiammuni testifica que presenció los juicios en el espacio y que al escuchar la palabra "Eloí" de un viajero lejano comprendió que todos los sistemas espirituales señalan al mismo origen.',
    'Cita': 'Los pregoneros de Alá, Buda y Eloí proclaman la misma ley... tenemos que justificarnos y abrir la historia... solo cabe una ley.',
    'Sinapsis': ['Buda_en_el_Juicio', 'Convergencia_de_Religiones', 'Tercer_Llamado_del_Tribunal', 'Ala_Buda_Eloi_Unidad']
  },
  '8446: El vidente lloraba de tanta magnificencia  Hchilem de conductor y Jesús y Maria cubriéndolos con sus mantos y el ancla,': {
    'Piloto': 'El ancla cargada parte a Sión: El cuadro más sublime del Juicio.',
    'Idea': 'Al concluir el gran ciclo de juicios de 1912, el ancla simbólica parte cargada hacia Sión con todos los espíritus redimidos. Este es el momento de mayor esplendor y el vidente González llora de emoción ante la magnificencia del cuadro.',
    'Ejemplo': 'Trincado describe el cuadro final: Hchilem como conductor, Jesús y María cubriendo a los espíritus con sus mantos, y el ancla —nunca tan cargada— partiendo hacia el centro de la Cosmogonía.',
    'Cita': 'El cuadro más sublime que he presenciado... Hchilem de conductor... el ancla cargada como nunca llegó a Sión.',
    'Sinapsis': ['Ancla_Cargada_a_Sion', 'Hchilem_Conductor', 'Cuadro_Sublime_del_Juicio', 'Llegada_a_Sion']
  },
  '8457: Marzo 31 de 1912  (Portillo) - El  Juez.': {
    'Piloto': 'Colón: La cruz como baluarte y la visión de América.',
    'Idea': 'Cristóbal Colón se justifica como el espíritu que clavó la cruz en América con la intención de un baluarte de progreso, no de conquista. Reconoce que la Iglesia desvió su misión y que la verdadera "otra tierra" que vislumbró era la Cosmogonía espiritual, invisible para los hombres de sotana.',
    'Ejemplo': 'Colón relata su lucha contra el poder clerical para obtener apoyo para el viaje, demostrando que los hombres del espíritu deben enfrentar a los custodios del dogma para cumplir sus misiones.',
    'Cita': 'Yo fui el primero que clavó la cruz en América como baluarte... dividía otra tierra que solo los espíritus podían ver... largos y tristes años.',
    'Sinapsis': ['Colon_Misionero', 'Cruz_como_Baluarte', 'America_Vision_Espiritual', 'Lucha_contra_el_Dogma']
  },
  '8590: Se justifico el rey inca llamado Sum Puchap Hizo una reseña de los primeros pasos de los conquistadores haciendo grandes - Teodoro Toribio Estanciero en Catamarca': {
    'Piloto': 'Sum Puchap (Rey Inca): Justificación de la familia india y la providencia de la conquista.',
    'Idea': 'El rey inca Sum Puchap defiende a toda la familia indígena americana, reencarnado como el estanciero Teodoro Toribio en Catamarca. Justifica el rol providencial de España en la conquista como el único agente capaz de fundir a las tribus dispersas en una civilización capaz de recibir la luz.',
    'Ejemplo': 'Sum Puchap relata que como rey adoraba al Sol (arquetipo del Padre) y que al reencarnar como estanciero criollo pudo ver el progreso espiritual que la fusión de culturas generó.',
    'Cita': 'Adorábamos al Sol... Spain (la Vieja Madre) nadie más habría fundido aquellas tribus... vengo a justificar a toda la familia India.',
    'Sinapsis': ['Juicio_del_Rey_Inca', 'Providencia_de_la_Conquista', 'Reencarnacion_Indigena', 'Familia_India_Justificada']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print('OK - Tanda 17 inyectada:', len(new_nodes), 'nodos.')

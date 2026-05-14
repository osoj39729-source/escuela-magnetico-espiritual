import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '7301: Marzo 11 Hora 20  (Portillo) - Gof Duf.': {
    'Piloto': 'Churú Churú y el fin de la mayoría de edad planetaria.',
    'Idea': 'La Tierra cumple su mayoría de edad y entra en la luz de la Cosmogonía. El espíritu, tras modelar la materia en grados inferiores, asume la acción primera. Se denuncia a la Caridad como un paliativo del robo social, sustituyéndola por el Amor que exige justicia y comunidad de bienes.',
    'Ejemplo': 'Churú Churú (del mundo Tubeg Tubeg) explica que la caridad es un baldón que implica desigualdad, mientras que en mundos superiores el amor elimina la necesidad de dar u obtener óbolos al ser todo común.',
    'Cita': 'La caridad es baldón... el amor quita los temblores del poderoso y el necesitado... el espiritismo es la constitución de la tierra.',
    'Sinapsis': ['Mayoria_de_Edad_Planetaria', 'Amor_vs_Caridad', 'Materia_Accion_Secundaria', 'Mundo_Tubeg_Tubeg']
  },
  '7493: Marzo 13  de 1912 - El  Juez.': {
    'Piloto': 'Mistificadores: La ceguera ante el Juicio Universal.',
    'Idea': 'Los espíritus mistificadores, que suplantan identidades sagradas (como María de Nazaret), se enfrentan a un ultimátum antes del 5 de abril. El Juez no acepta promesas falsas de quienes no demuestran un cambio real de conducta.',
    'Ejemplo': 'Trincado rechaza el ancla de salvación para un espíritu que fingió ser María, advirtiendo que su maldad persiste y será entregado al Fiscal para el juicio final.',
    'Cita': 'No creo en su acatamiento de la ley... les queda hasta el 5 de abril... no pedí el ancla para ellos.',
    'Sinapsis': ['Ultimatum_del_Juicio', 'Fraude_Espirita', 'Ancla_de_Salvacion', 'Mistificadores_Espirituales']
  },
  '7508: Marzo 15 de 1912  (Portillo) - Joaquín  Trincado.': {
    'Piloto': 'Xeim Xeim y el testimonio de Sión: El fin del Espiritualismo.',
    'Idea': 'Xeim Xeim, mensajero de Sión, confirma que el Espiritualismo es la amalgama de la carne que intenta ocultar la verdad del Espiritismo. El Juez es el brazo ejecutor de una ley que no permite más perturbaciones en la Tierra.',
    'Ejemplo': 'Xeim Xeim describe al Juez como el dinamo que recibe la fuerza de Sión para separar definitivamente a los suprematistas y religiosos de la familia humana regenerada.',
    'Cita': 'El espiritismo es la constitución de la tierra... el espiritualismo es vuestra amalgama... el Espíritu de Verdad retirará su ancla.',
    'Sinapsis': ['Espiritualismo_como_Amalgama', 'Mensajero_de_Sion', 'Soberania_del_Espiritu', 'Fin_de_la_Tregua_Judicial']
  },
  '7691: A continuación del Dell  Dell  Mí, el mismo medium dijo - Los une al suyo vuestra Madre, Maria.': {
    'Piloto': 'María de Nazaret: La calma tras la demolición de la Cruz.',
    'Idea': 'María expresa su alegría y pena simultáneas: alegría por la demolición del dogma de la cruz que martirizó a Jesús, y pena por los espíritus que eligen el exilio por orgullo.',
    'Ejemplo': 'María abraza a Jesús, celebrando que por fin su sacrificio ha sido comprendido como un acto humano de amor y no como un dogma sangriento de redención mística.',
    'Cita': 'Día feliz que derriba la cruz tan desastrosa... Jesús ya no siente el peso... María los une en su amor.',
    'Sinapsis': ['Fin_del_Martirio_de_Jesus', 'Alegria_y_Pena_Espiritual', 'Redencion_de_Maria', 'Humanidad_Redimida']
  },
  '7741: NOTA  DE  INTERES - Joaquín  Trincado': {
    'Piloto': 'Nota de Interés: Fondo sobre forma en la mediumnidad.',
    'Idea': 'La verdad doctrinal no depende de la corrección estética o poética del médium, sino de la fidelidad al fondo jurídico y filosófico. Se advierte que el espíritu solo sabe lo que ha aprendido y no es omnipotente.',
    'Ejemplo': 'Trincado defiende los poemas de Portillo contra los críticos que exigen perfección literaria, priorizando la docilidad del médium para transmitir la justicia del Padre.',
    'Cita': 'Mirad el fondo y no la forma... el espíritu no lo sabe todo ni lo puede todo... advertencia a los criticones.',
    'Sinapsis': ['Docilidad_del_Medium', 'Fondo_sobre_Forma', 'Limitacion_del_Espiritu', 'Pedagogia_Trincadista']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

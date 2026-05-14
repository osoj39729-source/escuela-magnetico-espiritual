import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '3019: Enero 7 de 1912 - Un espíritu de Alhá': {
    'Piloto': 'Espíritu de Alhá: La alegría como estado natural del espíritu libre.',
    'Idea': 'Un espíritu árabe transmite máximas antiguas que declaran que la tristeza es innecesaria cuando se conoce el origen espiritual. La Tierra ha llegado a un alto progreso y el hombre debe vivir alegre en la esperanza del Padre, manteniendo el espíritu libre hacia Alhá.',
    'Ejemplo': 'El espíritu habla primero en árabe, señalando que la sabiduría universal trasciende los idiomas humanos, y resume toda su enseñanza en una sola máxima de equilibrio entre lo material y lo espiritual.',
    'Cita': 'Tened la tierra por centro; pero al espíritu libre para llegar a Alhá... la tierra es un mundo ya llegado a un alto progreso.',
    'Sinapsis': ['Alegria_Espiritual', 'Libertad_del_Espiritu', 'Alhá_Nombre_Universal', 'Equilibrio_Materia_Espiritu']
  },
  '3402: En este momento desdoblé todo mi yo y acompañado por el espíritu del vidente dije ahora llega un niño que pide al rey - Juan Rux': {
    'Piloto': 'Juan Rux: El pueblo soberano y el niño que pide al rey.',
    'Idea': 'La influencia psíquica espiritual actúa sobre el ministro militar para evitar la firma de una sentencia de muerte. El pueblo —representado por la comisión de madres y el niño— es el único soberano que puede reclamar clemencia con derecho.',
    'Ejemplo': 'Trincado y el vidente González se desdoblan y llevan de la mano simbólicamente al niño ante el ministro, mientras las madres imploran en el plano físico, activando la compasión del gobernante.',
    'Cita': '¡Detente hombre y piensa! El pueblo te lo da; el pueblo es el soberano... ese honor militar no será menoscabado por la indulgencia.',
    'Sinapsis': ['Soberania_Popular', 'Desdoblamiento_Activo', 'Intervencion_Psiquica_Directa', 'Clemencia_vs_Codigo_Militar']
  },
  '3431: Posesionado de un guía el medium dijo - Joaquín Trincado': {
    'Piloto': 'El escalofrío de la clemencia: La firma del indulto.',
    'Idea': 'El momento culminante de la intervención espiritual: al hacer correr un escalofrío psíquico sobre el ministro, la pluma se detiene justo cuando el Rey solicita el decreto de indulto. Es la demostración práctica de que la ley de amor opera sobre la materia.',
    'Ejemplo': 'Un pliego se arrolla y se ata con una cinta como símbolo del decreto de vida salvado de las manos del verdugo, mientras el telégrafo difunde la noticia del indulto a toda la nación.',
    'Cita': 'Hicimos correr por su ser un escalofrío y dejó la pluma... vimos arrollar un pliego y amarrarlo... se aclama al rey clemente.',
    'Sinapsis': ['Escalofrio_Doctrinal', 'Decreto_de_Indulto', 'Justicia_vs_Codigo_Militar', 'Transmision_Psiquica']
  },
  '3820: Enero 24 de 1912 (Posesión M P) - Silvestre': {
    'Piloto': 'Silvestre: Detección y expulsión del mistificador de María.',
    'Idea': 'La capacidad de discernimiento del Juez encarnado es suficiente para detectar espíritus impostores que suplantan identidades sagradas. La cólera justiciera —correctamente canalizada— es una herramienta psíquica de limpieza que aleja a los mistificadores sin necesidad de palabras.',
    'Ejemplo': 'Trincado evoca a María de Nazaret en su aniversario, detecta al impostor, y una oleada de cólera justiciera lo expulsa. Silvestre confirma después la identidad del espíritu y la corrección del acto.',
    'Cita': 'Una oleada de cólera justiciera circundó todo mi ser con tal fuerza psíquica que el espíritu se marchó sin decir una palabra.',
    'Sinapsis': ['Discernimiento_Doctrinal', 'Colera_Justiciera', 'Expulsion_del_Mistificador', 'Proteccion_de_la_Mision']
  },
  '4104: Se presentó otro espíritu conocido y abundó en consideraciones  de la anterior manifestación, doliéndose de tan - Teresa de Jesús.': {
    'Piloto': 'Teresa de Jesús: El "Te perdono" oído en medio de las maldades.',
    'Idea': 'Teresa se solidariza con el dolor del Juez por los espíritus detractores y ofrece su propio ejemplo de redención como demostración de que el arrepentimiento es posible. El "Te perdono" escuchado en conciencia durante sus propias maldades fue lo que la salvó.',
    'Ejemplo': 'Teresa pregunta retóricamente por qué los obstinados no escuchan el "Te perdono" en su conciencia como lo escuchó ella en medio de sus errores, mostrando que la gracia del Padre siempre habla primero.',
    'Cita': '¿No les he dado yo ejemplo y he manifestado los caminos que mi espíritu ha seguido para lavar mis manchas?... el "Te perdono" de mi amor.',
    'Sinapsis': ['Te_Perdono_Doctrinal', 'Ejemplo_de_Redencion', 'Conciencia_como_Juez_Interior', 'Teresa_de_Jesus_Espiritu']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print('OK - Tanda 20 inyectada:', len(new_nodes), 'nodos.')

import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '5469: Febrero 18 de 1912 (Portillo) Hora 20 - Teresa de Jesús.': {
    'Piloto': 'Teresa de Jesús: El exilio del odio y la promesa de redención.',
    'Idea': 'El espíritu puede elegir el mundo de fraguas por orgullo irreconciliable. Teresa revela que su muerte fue por veneno de una superiora corrupta, a quien profetiza rescatar en el futuro cuando el dolor quiebre su dureza espiritual.',
    'Ejemplo': 'Teresa explica cómo la monja envenenadora prefirió el "infierno" antes que la caridad, y asegura que ella misma será la "estrella" que baje a salvarla en siglos venideros.',
    'Cita': 'El infierno primero antes que el cielo con ella... allí te arrepentirás... verás una estrella que te guiará y será Teresa.',
    'Sinapsis': ['Infierno_Voluntario', 'Redencion_Secular', 'Victima_Salvadora', 'Muerte_de_Teresa_de_Jesus']
  },
  '5562: Febrero 19 de 1912 (Posesión Portillo) - Joaquín  Trincado': {
    'Piloto': 'Visión de Gof Duf: Fisiología de la perfección universal.',
    'Idea': 'Fuera de la Vía Láctea existen mundos de luz como Gof Duf, donde los humanos tienen carnes transparentes y viven en amor puro. La estructura humana es universal y la Tierra camina hacia esa transparencia espiritual y material.',
    'Ejemplo': 'Trincado describe a Juilis Juilis, habitante de Gof Duf, cuyo corazón se ve latir a través de su cuerpo transparente y cuya vida es una melodía de armonía sin maldad.',
    'Cita': 'Sus carnes transparentes... beben el néctar en los labios de rosa... Gof Duf no se ve desde la tierra.',
    'Sinapsis': ['Mundo_Gof_Duf', 'Carnes_Transparentes', 'Fisiologia_Espiritual_Superior', 'Unidad_de_la_Ley_Cosmica']
  },
  '5694: Febrero 20 de 1912  (Portillo) - Joaquín  Trincado': {
    'Piloto': 'Allan Kardec: El reconocimiento del Juez y la argamasa final.',
    'Idea': 'Kardec reconoce a Trincado como el Juez Enviado y Espíritu de Verdad hecho hombre. Admite que el Espiritismo inicial era solo la base, mientras que la doctrina de Trincado es la "argamasa" definitiva para la Iglesia Universal.',
    'Ejemplo': 'Kardec declara que su obra fue precursora, pero que solo Trincado posee la autoridad judicial para liquidar el juicio y sentar los axiomas de la Cosmogonía.',
    'Cita': 'El único Juez del Padre en la tierra eres tú... mi obra no tenía la argamasa perdurable... yo fui tu precursor.',
    'Sinapsis': ['Reconocimiento_de_Kardec', 'Argamasa_Doctrinal', 'Unico_Juez_Enviado', 'Espiritismo_Politico_Social']
  },
  '5818: Febrero 25 de 1912  (Portillo) - Calvino  y  Lutero': {
    'Piloto': 'Juicio a la Reforma: El error del Cristo y la Iglesia Pequeña.',
    'Idea': 'Calvino y Lutero admiten que la Reforma falló al mantener al "Cristo" por conveniencia política. Reconocen que sus iglesias eran "pequeñas" y juran trabajar por la Iglesia Universal (Espiritismo) para rectificar sus pasos en la tierra.',
    'Ejemplo': 'Los reformadores confiesan haber usado al "Cristo" como disfraz para no asustar a los soberanos, aceptando ahora el Código de Amor como la única ley racional.',
    'Cita': 'Nuestra pequeña iglesia era un desgajo de la otra... mantuvimos al Cristo por conveniencia... juramos trabajar en la Iglesia Universal.',
    'Sinapsis': ['Juicio_a_la_Reforma', 'Error_del_Cristo', 'Libre_Examen', 'Iglesia_Universal_vs_Pequeña']
  },
  '6024: |Hosanna!     Alegríos en el Señor    Estamos rehabilitados al trabajo es la orden ¿Eh? Si para nuestros jueces, todo - No hago comentario, dejemos al tiempo su acción.': {
    'Piloto': 'La caída de la Mitra y la anulación de los Concordatos.',
    'Idea': 'La victoria espiritual se manifiesta en la tierra con la separación de Iglesia y Estado. La mitra y la custodia pierden su sacralidad y el Estado reconoce solo la ley moral del Código de Amor.',
    'Ejemplo': 'En visión, Trincado ve a un Presidente anular un Concordato mientras los símbolos religiosos (mitras y custodias) caen al suelo como meros objetos de arte sin valor sagrado.',
    'Cita': 'El Presidente firmó aquel decreto de anulación... la custodia rodó y nadie la recogió como recuerdo de religión.',
    'Sinapsis': ['Anulacion_del_Concordato', 'Caida_de_la_Mitra', 'Religion_del_Libro', 'Justicia_Civil_Racional']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

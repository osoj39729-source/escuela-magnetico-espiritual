import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '4563: Y vosotros Mesías heroicos, lleváis la batalla ganada con el arma poderosa de la sabiduría del Padre y del Amor Universal - violeta amor.': {
    'Piloto': 'Mesías heroicos: La retirada de los ejércitos bajo la luz blanca y violeta.',
    'Idea': 'Con la capitulación de los jefes de las religiones, los ejércitos espirituales del mal se retiran. La luz blanca anuncia la Paz conquistada; la luz violeta, el Amor que reinará. Los Mesías heroicos (los misioneros) han ganado la batalla con la sabiduría y el amor.',
    'Ejemplo': 'El vidente González ve cómo los brazos se cruzan (rendición) y los clarines de retirada suenan, mientras el espíritu mensajero recoge el abrazo de los vencidos para llevarlo a los vencedores.',
    'Cita': 'Ya vibran los clarines de retirada... luz blanca anuncia Paz y una luz violeta amor... lleváis la batalla ganada.',
    'Sinapsis': ['Luz_Blanca_de_Paz', 'Luz_Violeta_de_Amor', 'Victoria_de_la_Sabiduría', 'Retirada_de_los_Ejercitos']
  },
  '4696: Febrero 9 de 1912 - Joaquín Trincado.': {
    'Piloto': 'Acta de fecha: 9 de febrero de 1912 — cierre del bloque judicial.',
    'Idea': 'La datación de Trincado al pie actúa como sello notarial del bloque de sesiones celebradas hasta esa fecha. Marca el umbral entre los juicios de la primera fase (jerarquía religiosa) y los de la segunda fase (figuras históricas y mundos extraterrestres).',
    'Ejemplo': 'Como el escribano que firma y data el último folio de un expediente antes de pasarlo al juez superior, esta línea certifica la autenticidad del registro mediúmnico.',
    'Cita': 'Febrero 9 de 1912. Joaquín Trincado.',
    'Sinapsis': ['Acta_Notarial_Doctrinal', 'Sello_del_Juez', 'Cronologia_Doctrinal', 'Finalizacion_Fase_Judicial']
  },
  '6024: |Hosanna!     Alegríos en el Señor    Estamos rehabilitados al trabajo es la orden ¿Eh? Si para nuestros jueces, todo - No hago comentario, dejemos al tiempo su acción.': {
    'Piloto': 'Hosanna: La rehabilitación de los penitentes y la caída de la Mitra.',
    'Idea': 'El "Hosanna" marca el momento en que los espíritus recién redimidos reciben la orden de volver al trabajo espiritual. En desdoblamiento, Trincado presencia la anulación simbólica del Concordato y la caída de la Mitra como objetos sin sacralidad.',
    'Ejemplo': 'La custodia que rueda por el suelo sin que nadie la recoja "como recuerdo de religión" simboliza el fin del poder del ritual sobre la conciencia humana racional.',
    'Cita': 'Hosanna... estamos rehabilitados, al trabajo es la orden... la custodia rodó y nadie la recogió como recuerdo de religión.',
    'Sinapsis': ['Hosanna_Rehabilitacion', 'Caida_de_la_Mitra', 'Anulacion_del_Concordato', 'Religion_del_Libro']
  },
  '6196: Febrero 27 de 1912  (Portillo) - Juilis Juilis del Gof Duf.': {
    'Piloto': 'Juilis Juilis: El idioma del amor y la oración universal al Padre.',
    'Idea': 'Juilis Juilis pronuncia primero en el idioma de Gof Duf ("Dibili gabis...") y traduce: "Divina vida que Dios da a sus hijos con puro amor." El amor es el idioma universal que trasciende las lenguas y llega a todos los mundos.',
    'Ejemplo': 'La traducción del saludo en idioma sideral al español es en sí un acto pedagógico: demuestra que la ley del amor es comprensible en cualquier frecuencia vibratoria.',
    'Cita': 'Dibili gabis, gabis fi degui... Divina vida que Dios da a sus hijos con puro amor... el amor ley universal.',
    'Sinapsis': ['Idioma_Universal_del_Amor', 'Juilis_Juilis_Gof_Duf', 'Traduccion_Sideral', 'Oracion_al_Padre_Universal']
  },
  '8446: El vidente lloraba de tanta magnificencia  Hchilem de conductor y Jesús y Maria cubriéndolos con sus mantos y el ancla,': {
    'Piloto': 'El ancla cargada parte a Sión: El cuadro más sublime del Juicio.',
    'Idea': 'Al concluir el gran ciclo de juicios de 1912, el ancla simbólica parte cargada hacia Sión con todos los espíritus redimidos. Hchilem actúa como conductor, Jesús y María cubren a los espíritus con sus mantos flúidicos. Es el momento de mayor magnificencia del Tomo 2.',
    'Ejemplo': 'El vidente González llora al ver el cuadro — la más poderosa verificación emocional de la autenticidad de la sesión — mientras los espíritus entonan el canto al amor en su ascenso a Sión.',
    'Cita': 'Hchilem de conductor y Jesús y María cubriéndolos con sus mantos... el ancla cargada como nunca llegó a Sión... el cuadro más sublime.',
    'Sinapsis': ['Ancla_Cargada_a_Sion', 'Hchilem_Conductor', 'Cuadro_Sublime_del_Juicio', 'Verificacion_Emocional']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print('OK - Tanda 21 inyectada:', len(new_nodes), 'nodos.')

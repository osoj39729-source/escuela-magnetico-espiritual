import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

# Locate exact keys by prefix and overwrite their values
fixes = {
  '1756:': {
    'Piloto': 'Comentarios de Trincado: La demolición del error para edificar la verdad.',
    'Idea': 'Trincado comenta la campaña espiritual contra el Papa Pío X y el Congreso Eucarístico de 1911. Se establece que no se puede edificar la verdad sobre estructuras dogmáticas corrompidas: la piqueta (demolición) es el primer paso necesario.',
    'Ejemplo': 'Trincado usa la imagen de la amputación: así como un médico debe cortar el miembro gangrenado para salvar al paciente, el espiritista debe demoler el error religioso antes de predicar la verdad.',
    'Cita': 'Lo más saludable era utilizar la piqueta... no se puede levantar ese monumento sobre paredes de barro... las doctrinas de Kardec son solo el prólogo.',
    'Sinapsis': ['Piqueta_de_la_Verdad', 'Demolicion_del_Error', 'Campaña_contra_Pio_X', 'Kardec_como_Prologo']
  },
  '2574:': {
    'Piloto': 'El refrán de la obstinación: Al ñudo que lo fajen si barrigón ha nacido.',
    'Idea': 'El refrán popular recoge la enseñanza de que la obstinación espiritual es congénita en quien no quiere ver. La gratitud abre la conciencia; la ingratitud la cierra permanentemente. Juana trae ambos casos como espejo pedagógico.',
    'Ejemplo': 'Juana de Arco contrasta a los agradecidos (que reciben luz) con los desagradecidos (que "dan su saludo" como insulto), enseñando que la libertad de elección es absoluta incluso frente a la verdad.',
    'Cita': 'Es al ñudo que lo fajen si barrigón ha nacido... los desagradecidos nos dan también su saludo.',
    'Sinapsis': ['Refrán_de_la_Obstinacion', 'Gratitud_vs_Ingratitud', 'Fondo_sobre_Forma', 'Juana_de_Arco_Espiritu']
  },
  '6024:': {
    'Piloto': 'Hosanna: La rehabilitación de los penitentes y la caída de la Mitra.',
    'Idea': 'El "Hosanna" marca el momento en que los espíritus recién redimidos reciben la orden de volver al trabajo espiritual. En desdoblamiento, Trincado presencia la anulación simbólica del Concordato y la caída de la Mitra como objeto sin sacralidad.',
    'Ejemplo': 'La custodia que rueda por el suelo sin que nadie la recoja "como recuerdo de religión" simboliza el fin del poder del ritual sobre la conciencia humana racional.',
    'Cita': 'Hosanna... estamos rehabilitados, al trabajo es la orden... la custodia rodó y nadie la recogió como recuerdo de religión.',
    'Sinapsis': ['Hosanna_Rehabilitacion', 'Caida_de_la_Mitra', 'Anulacion_del_Concordato', 'Religion_del_Libro']
  },
  '8446:': {
    'Piloto': 'El ancla cargada parte a Sión: El cuadro más sublime del Juicio.',
    'Idea': 'Al concluir el gran ciclo de juicios de 1912, el ancla simbólica parte cargada hacia Sión con todos los espíritus redimidos. Hchilem actúa como conductor, Jesús y María cubren a los espíritus con sus mantos flúidicos.',
    'Ejemplo': 'El vidente González llora al ver el cuadro — la más poderosa verificación emocional de la autenticidad de la sesión — mientras los espíritus entonan el canto al amor en su ascenso a Sión.',
    'Cita': 'Hchilem de conductor y Jesús y María cubriéndolos con sus mantos... el ancla cargada como nunca llegó a Sión... el cuadro más sublime.',
    'Sinapsis': ['Ancla_Cargada_a_Sion', 'Hchilem_Conductor', 'Cuadro_Sublime_del_Juicio', 'Verificacion_Emocional']
  }
}

updated = 0
for prefix, new_val in fixes.items():
    for k in list(d.keys()):
        if k.startswith(prefix):
            d[k] = new_val
            updated += 1
            break

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print(f'OK - {updated} nodos corregidos por prefijo.')

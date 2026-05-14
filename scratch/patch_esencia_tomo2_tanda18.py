import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '8601: Marzo  31  de  1912  Hora  20  (Portillo) - El Espíritu de Verdad   Xavier.': {
    'Piloto': 'Xavier ratifica el programa del Juicio Final: el acta está conforme.',
    'Idea': 'Trincado consulta directamente al Espíritu de Verdad sobre la conformidad del programa y el acta del Juicio Universal. Xavier confirma que aunque el Juez lo escribe, todo es dictado desde Sión, por lo que el programa ya es Ley. La fecha del juicio es disposición del Padre, no del hombre.',
    'Ejemplo': 'El intercambio es un diálogo jurídico entre el Juez encarnado y el Espíritu de Verdad, donde cada línea del acta es ratificada como emanación divina antes de la sentencia final.',
    'Cita': 'El programa, aunque tú lo escribes, es dictado por mí... ejecútalo como lo tienes... la fecha es la disposición de la ley.',
    'Sinapsis': ['Acta_del_Juicio_Universal', 'Programa_Dictado_desde_Sion', 'Ratificacion_del_Espiritismo', 'Fecha_como_Ley']
  },
  '8635: Sin perder posesión el médium, dijo - Segfag  Segfag.': {
    'Piloto': 'Segfag Segfag: El último segundo del Juicio Universal.',
    'Idea': 'En el último segundo antes del cierre del Juicio Universal, Segfag Segfag convoca a todos los espíritus y hombres para hacer acto de presencia. Declara que el quinto grado de evolución no es obligatorio para todos, pero la elección consciente del camino sí lo es.',
    'Ejemplo': 'Segfag habla desde la erraticidad para los espíritus de la tierra aún atados a la evolución progresiva, explicando que el Juicio Universal afecta a toda la Cosmogonía, no solo al planeta Tierra.',
    'Cita': 'Oíd la palabra en el último segundo del Juicio Universal... universal sí, porque a toda la Cosmogonía afecta... haced acto de presencia.',
    'Sinapsis': ['Ultimo_Segundo_del_Juicio', 'Quinto_Grado_de_Evolucion', 'Convocatoria_Final', 'Segfag_Segfag']
  },
  '8831: --Quiero hacerte algunas preguntas, hermano mío, de algún interés-- - diré.': {
    'Piloto': 'La 7ª y media nebulosa: Mapa cósmico de la jurisdicción del Juicio.',
    'Idea': 'Trincado interroga a Segfag sobre la extensión del primer plano espiritual, confirmando que la jurisdicción del Juicio alcanza hasta la 7ª y media nebulosa. Cada grado de perfección tiene sus maestros que también deben justificarse ante la ley del amor.',
    'Ejemplo': 'El diálogo establece que el mapa de mundos sujetos al Juicio de 1912 llega hasta la 7ª y media nebulosa, incluyendo a los maestros de mundos superiores que intervinieron en la evolución terrestre.',
    'Cita': 'Nuestro primer plano llega a la 7 y 1/2 nebulosa... digna contestación merece pregunta de tanta importancia... faltan sus Maestros que justificarse.',
    'Sinapsis': ['Septima_Nebulosa', 'Jurisdiccion_del_Juicio', 'Maestros_que_Justificarse', 'Mapa_Cosmico_Judicial']
  },
  '8863: Abril  2  de  1912 - APENDICE  DE  GRAN  INTERES': {
    'Piloto': 'Apéndice: La venganza frustrada y la reencarnación de Concepción de Arenales.',
    'Idea': 'Los espíritus de maldad intentan dañar a la niña Estrella Barreiro (10 meses), que encarna el espíritu de la gran Concepción de Arenales, quien prometió reencarnar cerca de Trincado para ayudar en su misión. La protección espiritual frustra el ataque.',
    'Ejemplo': 'Antes de encarnar, el espíritu de Concepción de Arenales se comunicó con Trincado para anunciar su regreso, reconociéndolo luego tendiendo los bracitos al verlo, cumpliendo la señal pactada.',
    'Cita': 'Cerca de ti reencarnaré... te tenderé mis bracitos y te sonreiré... espíritu que fue la gran Concepción de Arenales.',
    'Sinapsis': ['Reencarnacion_de_Arenales', 'Venganza_Frustrada', 'Proteccion_del_Inocente', 'Pacto_Pre_Encarnatorio']
  },
  '9009: Domingo  30  de  Marzo  de  1930 - D A V I D.': {
    'Piloto': 'David: Adán y Eva como fuerza motriz y el Espiritismo como grandeza universal.',
    'Idea': 'David cierra el Tomo 2 en 1930, declarando que desde Adán y Eva se activó la fuerza motriz que impulsa a todas las generaciones a liquidar sus cuentas ante la Ley. El Espiritismo es la grandeza de todos los hijos del Creador, sin excepción de raza o tiempo.',
    'Ejemplo': 'David declara que no tomará los puntos de la lectura precedente porque los suyos son más básicos: el origen de la fuerza espiritual en la humanidad y su destino en la luz.',
    'Cita': 'En Adán y Eva empezó la fuerza motriz... el Espiritismo es la grandeza de todos los hijos del Creador... Paz y Amor sean con vosotros.',
    'Sinapsis': ['David_Cierre_del_Tomo', 'Adan_y_Eva_Fuerza_Motriz', 'Espiritismo_Grandeza_Universal', 'Liquidacion_de_Cuentas']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print('OK - Tanda 18 inyectada:', len(new_nodes), 'nodos.')

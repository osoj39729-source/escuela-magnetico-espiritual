import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

nuevos = {
  'Juicio_Universal_5_Abril': {
    'palabras_clave': ['5 de abril', 'juicio', 'universal', 'fecha', 'ley'],
    'definicion': 'Fecha límite establecida por el Juez para que todos los espíritus de la tierra se presenten o sean juzgados en ausencia y exiliados.',
    'vinculos': ['Justicia_Cosmica', 'Exilio_Sideral']
  },
  'Yihad_Interior': {
    'palabras_clave': ['yihad', 'islam', 'lucha', 'interior', 'orgullo'],
    'definicion': 'El verdadero significado del concepto islámico de lucha: no la guerra exterior sino la conquista del ego y el orgullo propio.',
    'vinculos': ['Error_del_Odio_Religioso', 'Reconciliacion_Islamica']
  },
  'Resonancia_Cosmica_del_Juicio': {
    'palabras_clave': ['resonancia', 'cosmica', 'nebulosa', 'testigos', 'universo'],
    'definicion': 'El juicio de la Tierra de 1912 afecta a toda la Cosmogonía como un acontecimiento que involucra a mundos y espíritus de todas las nebulosas.',
    'vinculos': ['Testigos_Universales', 'Cuarta_Nebulosa']
  },
  'Profecias_de_Jesus_Cumplidas': {
    'palabras_clave': ['profecia', 'jesus', 'cumplida', 'codigo', 'testamento'],
    'definicion': 'El Código de Amor es la versión directa y sin parábolas del testamento de Jesús, cumpliendo todas sus profecías sobre el Paráclito.',
    'vinculos': ['Codigo_de_Amor', 'Humanidad_de_Maria_y_Jesus']
  },
  'Septima_Nebulosa': {
    'palabras_clave': ['7 nebulosa', 'jurisdiccion', 'mapa', 'cosmos', 'plano'],
    'definicion': 'Extensión máxima de la jurisdicción espiritual del Juicio de 1912, que alcanza hasta la 7ª y media nebulosa del cosmos conocido.',
    'vinculos': ['Mapa_Cosmico_Judicial', 'Consejo_de_Sion']
  },
  'Reencarnacion_Indigena': {
    'palabras_clave': ['inca', 'reencarnacion', 'indigena', 'america', 'conquista'],
    'definicion': 'Proceso por el cual los espíritus de las civilizaciones precolombinas reencarnan en la América mestiza para purificar su karma y comprender el progreso.',
    'vinculos': ['Providencia_de_la_Conquista', 'Justicia_Cosmica']
  },
  'Acta_del_Juicio_Universal': {
    'palabras_clave': ['acta', 'juicio', 'universal', 'programa', 'sion'],
    'definicion': 'Documento dictado por el Espíritu de Verdad y escrito por Trincado que constituye el registro oficial del Juicio Universal de 1912.',
    'vinculos': ['Unico_Juez_Enviado', 'Sello_de_Sion']
  },
  'Nueva_Era_Calendario': {
    'palabras_clave': ['nueva era', 'calendario', 'cronologia', 'escuela', 'NE'],
    'definicion': 'Sistema cronológico propio de la Escuela Magnético-Espiritual que comienza con el inicio del ministerio del Maestro Trincado.',
    'vinculos': ['Cronologia_Doctrinal', 'Escuela_Magnetico_Espiritual']
  },
  'Adan_y_Eva_Fuerza_Motriz': {
    'palabras_clave': ['adan', 'eva', 'fuerza', 'motriz', 'generaciones'],
    'definicion': 'Desde Adán y Eva se activó la fuerza motriz evolutiva que impulsa a todas las generaciones a liquidar sus cuentas ante la Ley Universal.',
    'vinculos': ['Testamento_de_Abraham', 'Liquidacion_de_Cuentas']
  },
  'Convergencia_de_Religiones': {
    'palabras_clave': ['convergencia', 'ala', 'buda', 'eloi', 'unidad'],
    'definicion': 'Reconocimiento doctrinal de que Alá, Buda y Eloí son nombres distintos del mismo Padre Universal, cuyas doctrinas convergen en la Ley de Amor.',
    'vinculos': ['Ala_Buda_Eloi_Unidad', 'Ley_de_la_Cosmogonia']
  }
}

d['CONCEPTOS'].update(nuevos)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

print(f'OK - Diccionario actualizado. Total conceptos: {len(d["CONCEPTOS"])}')

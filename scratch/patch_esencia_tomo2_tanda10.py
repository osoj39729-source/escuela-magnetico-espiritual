import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '4458: Hora 20 y 30 (Posesión Portillo) - Manuel Papa del siglo XII': {
    'Piloto': 'Capitulación de la Iglesia: El Juramento de los 500,055 jefes.',
    'Idea': 'La jerarquía religiosa admite 19 siglos de engaño y se somete al Juez Enviado (Trincado), a quien reconocen como el espíritu que enfrentó a los Borgia. Prefieren la humildad del servicio que el liderazgo en mundos de antropofagia. Se decreta la demolición de la iglesia pequeña.',
    'Ejemplo': 'Manuel Papa describe cómo el terror al exilio en mundos de azufre llevó a 500,055 jefes eclesiásticos a jurar lealtad a la ley de amor y al Maestro Jesús.',
    'Cita': 'Juramos seguir al Maestro Jesús, 500,055 jefes... preferimos ser los últimos soldados... ayudemos a demoler la iglesia pequeña.',
    'Sinapsis': ['Juramento_de_los_500055', 'Juez_de_Sinigalia', 'Demolicion_de_la_Iglesia_Pequeña', 'Capitulación_del_Dogma']
  },
  '4577: El medium continuó sin perder posesión y dijo - Jesús de Nazaret.': {
    'Piloto': 'Jesús de Nazaret: El fin del martirio y la redención del verdugo.',
    'Idea': 'El juicio de 1912 libera a Jesús del dogma de la cruz. La lágrima de los antiguos verdugos marca el inicio de su regeneración como misioneros del bien. Se ha consumado la separación legal de la cizaña y el regreso del hijo pródigo.',
    'Ejemplo': 'Jesús explica que los antiguos jefes del mal ahora influenciarán a la humanidad desde el espacio para acelerar la unión y la paz, cumpliendo la profecía de Abraham.',
    'Cita': 'Se ha roto el instrumento de mi martirio... ya lloran sus errores... los que antes dañaban hoy los dejo libertos.',
    'Sinapsis': ['Fin_del_Martirio_de_Jesus', 'Regreso_del_Hijo_Pródigo', 'Misioneros_de_la_Retaguardia', 'Separacion_Trigo_Cizaña']
  },
  '4688: Las  comunicaciones  y  trabajos  de  desdoblamiento,  contenidos  en  este  libro  como  en  los  anteriores,  han  sido  escrupulosamente - Doy fe yo.': {
    'Piloto': 'Sello de autenticidad: Finalización del Tomo 2.',
    'Idea': 'El Tomo 2 constituye un cuerpo de actas judiciales del espíritu, certificadas por Trincado y los testigos. Cierra el ciclo de juicios de 1912 y prepara el camino para el Código de Amor Universal.',
    'Ejemplo': 'Trincado certifica que cada palabra fue ratificada por los oyentes y asistida por la intuición de los espíritus comunicantes en desdoblamiento.',
    'Cita': 'Escrupulosamente copiados... doy fe yo... Joaquín Trincado.',
    'Sinapsis': ['Actas_Judiciales_Doctrinales', 'Sello_de_Sion', 'Finalizacion_Tomo_2']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

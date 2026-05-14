import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '3986: Junio 11 de 1911 - Posesión M. P.': {
    'Piloto': 'La batalla de la verdad y la profecía de la demolición religiosa.',
    'Idea': 'La guerra de la Escuela es de principios, no de armas físicas; los libros son cañones que disparan verdades racionales. Un español (Ignacio) apuntaló la Iglesia y otro (Trincado) la demolerá.',
    'Ejemplo': 'Xavier explica que Ignacio de Loyola intentó salvar la Iglesia como puntal, pero esta abusó de su dominio, llegando la hora de su destrucción final.',
    'Cita': 'Un español apuntaló el edificio de la Iglesia Católica, y otro español será el demoledor de ella.',
    'Sinapsis': ['Guerra_de_Principios', 'Demolicion_de_la_Iglesia', 'Ignacio_de_Loyola', 'Balas_de_Papel']
  },
  '4058: Junio 11 de 1911 - Posesión M. P.': {
    'Piloto': 'El fin de los exorcismos y el respeto a la dignidad del andrajoso.',
    'Idea': 'La santidad es un concepto comercial falso; los exorcismos ya no tienen razón de ser ante la ciencia espiritista. Los espíritus más elevados suelen encarnar bajo harapos para su progreso.',
    'Ejemplo': 'Benito (ex San Benito) confiesa la obsolescencia de sus prácticas religiosas y exige respeto por los pobres, quienes ocultan grandes luces espirituales.',
    'Cita': 'Debajo del traje andrajoso se encubre un espíritu elevado. Respetad a los haraposos.',
    'Sinapsis': ['Exorcismos_Obsoletos', 'Dignidad_del_Andrajoso', 'Santidad_Racional']
  },
  '4108: Junio 14 de 1911 - Que estoy como siempreviva.': {
    'Piloto': 'Saldo de cuentas espirituales y la superioridad de Marte.',
    'Idea': 'La igualdad y el progreso espiritual en Marte son un hecho que garantiza la superioridad de ese mundo sobre la Tierra. Las deudas pasadas se saldan mediante la resignación amorosa.',
    'Ejemplo': 'Roque (ex San Roque) confirma la existencia de canales en Marte y su régimen de perfección, revelando que él fue el guía de Francisco Xavier.',
    'Cita': 'En Marte la igualdad es un hecho... los canales son garantía de un adelanto superior a la Tierra.',
    'Sinapsis': ['Civilizacion_Marciana', 'Cuentas_Saldadas', 'Roque_Guia_de_Xavier']
  },
  '4170: Junio 15 de 1911 (Día del Corpus) - Posesión M. P.': {
    'Piloto': 'Protesta de Jesús contra el sacrilegio comercial del Corpus.',
    'Idea': 'Las festividades idólatras son ofensas al Dios de Amor y una explotación económica del nombre de Jesús. El falseamiento de las escrituras acarrea remordimiento y expiación.',
    'Ejemplo': 'Jesús denuncia ser usado como "filón de oro" por ministros que son la negación de Dios, instando a Trincado a liberar a la humanidad de la cruz.',
    'Cita': 'Me atormenta de una manera horrible el verme convertido en ídolo impío y en filón de oro.',
    'Sinapsis': ['Sacrilegio_del_Corpus', 'Idolatria_del_Oro', 'Falseamiento_de_Escrituras', 'Jesus_sin_Cruz']
  },
  '4202: Junio 16 de 1911 - Posesión M. P.': {
    'Piloto': 'La reencarnación de Santa Elena y el valor ante el pesimismo.',
    'Idea': 'Los ídolos religiosos pueden estar hoy encarnados en condiciones de rebeldía y error (ej. Elena). El misionero debe actuar con poder y criterio, sin dejarse vencer por el pesimismo de otros.',
    'Ejemplo': 'Revelación de que Santa Elena es hoy un niño travieso que causa dolor a sus padres; Xavier ordena a Trincado no ser cobarde en su misión informativa.',
    'Cita': '¿Cuándo de cobardes se ha visto nada grande?',
    'Sinapsis': ['Santa_Elena_Reencarnada', 'Valor_Misionero', 'Pesimismo_Ajeno']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

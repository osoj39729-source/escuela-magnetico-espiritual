import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '2698: Marzo 28 de 1911 - Posesión de M. P`.': {
    'Piloto': 'Curación magneto-eléctrica y visión de la pluralidad de mundos.',
    'Idea': 'La vida y la tecnología (electricidad) son superiores en Marte y Venus; la higiene natural posee virtudes curativas que la ciencia humana ignora.',
    'Ejemplo': 'Visión de la médium sobre los canales de Marte y los habitantes de Venus en túnicas blancas; instrucción sobre la virtud de la saliva matutina.',
    'Cita': 'Haceros sabios y os hablarán aquellos.',
    'Sinapsis': ['Pluralidad_de_Mundos', 'Curacion_Magnetoelectrica', 'Higiene_Natural', 'Marte_y_Venus']
  },
  '2718: Marzo 31 de 1911 - Escrita, Trincado': {
    'Piloto': 'Arrepentimiento tras el crimen pasional y la expiación por la locura.',
    'Idea': 'El asesinato por celos degrada al espíritu y lo sumerge en el desequilibrio mental; la confesión espontánea abre la puerta a la caridad espiritual.',
    'Ejemplo': 'José Lucero confiesa el asesinato de su mujer en Jujuy por traición con un poderoso, buscando luz tras su muerte en prisión.',
    'Cita': 'Hoy me siento arrepentido, y os pido caridad.',
    'Sinapsis': ['Crimenes_Pasionales', 'Arrepentimiento_Espiritual', 'Justicia_Retributiva']
  },
  '2724: Abril 1 de 1911 - Escrita, Trincado': {
    'Piloto': 'La caída del Pontificado y el advenimiento de la bandera de la Paz.',
    'Idea': 'El clero se destruye a sí mismo al incitar conflictos; la obra de Trincado es la respuesta científica que saciará la sequía de las conciencias.',
    'Ejemplo': 'Xavier profetiza el abandono del Papa ante el desenmascaramiento de la verdad y advierte sobre los ricos que juraron ayudar y prevaricaron.',
    'Cita': 'Cien escribientes no serán bastantes para contestar las preguntas que la ciencia te hará.',
    'Sinapsis': ['Caida_del_Pontificado', 'Bandera_de_Paz', 'Prevaricacion_de_Ricos', 'Ciencia_Espiritista']
  },
  '2770: Abril 4 de 1911 - Natalicio de Francisco Xavier': {
    'Piloto': 'Estrategia espiritual, cautela y la fuente de inspiración original.',
    'Idea': 'La sabiduría nace de la inspiración directa, no de la imitación bibliotecaria; la cautela es necesaria frente a espías espirituales.',
    'Ejemplo': 'Crítica de Xavier a quienes valoran las bibliotecas sobre la verdad revelada: los loros y monos solo imitan lo que ven y oyen.',
    'Cita': 'Adelantar los hechos sin fundamento traería como consecuencia la muerte de las cosas a la hora del nacimiento.',
    'Sinapsis': ['Estrategia_Espiritual', 'Inspiracion_vs_Imitacion', 'Cautela_Doctrinal', 'Natalicio_de_Xavier']
  },
  '2811: Abril 7 de 1911 - El regalo del día': {
    'Piloto': 'El sacrificio por amor y la carga voluntaria de deudas ajenas.',
    'Idea': 'El misionero asume deudas de otros para acelerar el triunfo de la causa; el espíritu elevado es humilde y no requiere altares para estar presente.',
    'Ejemplo': 'Xavier insta a Trincado a usar su gran poder de espíritu viejo para publicar la obra, prometiendo paz ante las luchas materiales.',
    'Cita': 'El que de culpas ajenas se carga, aunque sea por amor, dura le será, pero llevará la carga que él mismo se cargó.',
    'Sinapsis': ['Sacrificio_por_Amor', 'Culpas_Ajenas', 'Poder_del_Espiritu', 'Regalo_de_Paz']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

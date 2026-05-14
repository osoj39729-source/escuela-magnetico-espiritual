import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '3752: Junio 4 de 1911 - Posesión M. P.': {
    'Piloto': 'Cierre de Buscando a Dios y el mandato de unión y estudio.',
    'Idea': 'La verdadera grandeza se alcanza mediante la unión, el sacrificio y el estudio de los principios claros de la nueva ley, dejando atrás las rutinas de la oración vacía.',
    'Ejemplo': 'María de Nazaret insta a la unión de las sociedades espiritistas dispersas; el Patriarca Joaquín confirma su misión de preparación del camino.',
    'Cita': 'Menos oraciones y más estudio, que el reinado de los espíritus ya se acerca.',
    'Sinapsis': ['Preparacion_del_Camino', 'Union_y_Estudio', 'Buscando_a_Dios', 'Patriarca_Joaquín']
  },
  '3795: Junio 7 de 1911 - Posesión M. P.': {
    'Piloto': 'La ventaja del espiritismo moderno y la expiación de las testas coronadas.',
    'Idea': 'Quien abusó del poder debe reencarnar en condiciones modestas para aprender la redención y devolver la vida a los sacrificados por su malentendido deber político.',
    'Ejemplo': 'La Reina Victoria pide luz para volver a la tierra en la clase media y reparar el daño causado durante su reinado.',
    'Cita': 'Yo me veo grande porque os veo a vosotros grandes.',
    'Sinapsis': ['Expiacion_del_Poder', 'Reencarnacion_Reparadora', 'Ventaja_Doctrinal']
  },
  '3838: Junio 8 de 1911 - Posesión M. P.': {
    'Piloto': 'El progreso infinito Siempre Más Allá y la justicia matrimonial.',
    'Idea': 'El espíritu no se detiene nunca; su meta es el progreso infinito. Las deudas de odio por maltratos pasados se saldan mediante el perdón y la procreación reparadora.',
    'Ejemplo': 'Isidro Labrador proclama el lema de la Escuela; Luisa Kudhe perdona a su antiguo marido por su asesinato en Rusia, aceptando dar vida al hijo sacrificado.',
    'Cita': 'Tengo yo una regla justa y ésta dice: Más allá; y siempre más allá Voy.',
    'Sinapsis': ['Siempre_Mas_Alla', 'Justicia_Matrimonial', 'Perdon_de_Deudas', 'Reencarnacion_Reparadora']
  },
  '3891: Junio 9 de 1911 - Escrita, Trincado': {
    'Piloto': 'La confesión de la traición y la vigilancia en el desmascaramiento espiritual.',
    'Idea': 'La avaricia conduce a la traición y al crimen, deudas que el espíritu confiesa con dolor. El director de sesión debe estar alerta para identificar a impostores que usurpan nombres sagrados.',
    'Ejemplo': 'Manuel A. confiesa su traición y muerte en la Pampa; Trincado desenmascara a un espíritu que fingía ser Teresa para engañar a los presentes.',
    'Cita': 'Tiene que estar ojo alerta quien dirija una sesión para descubrir las tretas.',
    'Sinapsis': ['Confesion_de_Traicion', 'Vigilancia_Mediunnica', 'Desmascaramiento_Espiritual']
  },
  '3938: Junio 10 de 1911 - Escrita, Trincado': {
    'Piloto': 'Elías-Juan y el mandato de demolición del monstruo religioso.',
    'Idea': 'Ha llegado el momento de la renovación total de la tierra; se debe demoler el dogma católico y liberar a Jesús de la cruz para implantar la religión del alma basada en la razón.',
    'Ejemplo': 'Juan Bautista (ex Elías) entrega la hebilla de cierre de Buscando a Dios, instando a Trincado a demoler la Iglesia y restaurar la verdadera ley de amor.',
    'Cita': 'Tú... quitarás la cruz negra y pesada que han cargado a Jesús haciéndolo Dios; tú... demolerás el monstruo de la Iglesia Católica.',
    'Sinapsis': ['Demolicion_de_la_Iglesia', 'Renovavis_Faciem_Terrae', 'Jesus_sin_Cruz', 'Juan_Bautista_Elias']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

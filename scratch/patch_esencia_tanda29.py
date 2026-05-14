import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '5741: Agosto 8 de 1911 - Posesión Pedro Portillo': {
    'Piloto': 'Identidad entre alma y espíritu y advertencia contra la discordia.',
    'Idea': 'Alma y espíritu son términos para la misma esencia en diferentes grados de independencia. Los animales tienen almas irracionales que terminan con la materia. La ambición de protagonismo ("quién será el primero") es la carcoma que frena la misión.',
    'Ejemplo': 'Jesús de Nazaret insta a los misioneros a ser soldados disciplinados, advirtiendo que la especulación y el egoísmo alejan a los espíritus de luz.',
    'Cita': 'Llamadla alma o espíritu... es lo mismo, porque en rigor sólo la diferencian las palabras y el estado.',
    'Sinapsis': ['Alma_vs_Espiritu', 'Alma_Animal_Irracional', 'Disciplina_del_Misionero', 'Carcoma_de_la_Discordia']
  },
  '6883: Septiembre 4 de 1911 - Posesión P. Portillo': {
    'Piloto': 'Pluralidad de mundos y la redención de las conciencias despóticas.',
    'Idea': 'La tierra es un átomo conectado a humanidades de luz. El reconocimiento de la propia pequeñez es el inicio de la verdadera grandeza. Personajes históricos como Bruto confiesan que el poder material es una ilusión que esclaviza al espíritu.',
    'Ejemplo': 'El espíritu de Bruto reconoce con asombro la luz de los obreros de la Escuela y pide ayuda para pagar sus deudas de siglos de despotismo.',
    'Cita': 'Sanead la atmósfera; sustraeros a los prejuicios de las religiones: He aquí el principio del secreto.',
    'Sinapsis': ['Pluralidad_de_Mundos', 'Bruto_Personaje', 'Redencion_del_Despota', 'Grandeza_de_la_Humildad']
  },
  '7014: Septiembre 4 de 1911 (noche) - Posesión M. P.': {
    'Piloto': 'Desmitificación de ángeles y jerarquías dogmáticas.',
    'Idea': 'No existen ángeles ni arcángeles divinos por creación; son espíritus que han luchado en la reencarnación. La supremacía es un estado temporal de progreso regido por la ley de atracción para elevar a los hermanos menores.',
    'Ejemplo': 'Miguel Arcángel se presenta como un espíritu que pasó por la "justicia de ley" (carne) muchas veces, negando ser una entidad impecable de origen divino.',
    'Cita': 'No hay supremacías; en virtud de la ley generatriz, todos somos beatificados por el amor del Padre: único dogma.',
    'Sinapsis': ['Desmitificacion_de_los_Angeles', 'Ley_de_Atraccion_Espiritual', 'Supremacia_Temporal']
  },
  '7064: Septiembre 5 de 1911 - Posesión M. P.': {
    'Piloto': 'Cuidado y vigilancia sobre la salud del misionero.',
    'Idea': 'El mundo espiritual vela por la estabilidad de los instrumentos mediúmnicos y del director de la obra. La solidaridad fluídica del grupo es esencial para sostener la materia en momentos de enfermedad.',
    'Ejemplo': 'Juan Bautista se manifiesta para aliviar a Trincado y a la médium en un momento de dolencia grave, asumiendo la carga de la sesión.',
    'Cita': 'Ve, hermano, cómo os cuidamos... pedid la salud del hermano mayor, que nos es muy necesaria.',
    'Sinapsis': ['Proteccion_al_Misionero', 'Salud_y_Espiritismo', 'Solidaridad_Fluidica']
  },
  '7076: Septiembre 11 de 1911 - Les digo...aplicar las...limas.': {
    'Piloto': 'Dimas: el botánico antirreligioso y las sociedades de la verdad.',
    'Idea': 'Dimas fue un miembro de una sociedad secreta de la verdad y botánico con ideas avanzadas, no un santo dogmático. El conocimiento de las plantas (ruda macho) y la acción sobre las leyes humanas son herramientas del protector.',
    'Ejemplo': 'Dimas revela que pertenecía a una sociedad fundada por Trincado en otra vida y ofrece secretos botánicos magnéticos para limpiar la atmósfera de la casa.',
    'Cita': '¿Por qué fuiste sacrificado con Jesús? Porque era como tú, porque prediqué la verdad... pertenecía a una sociedad secreta de la verdad.',
    'Sinapsis': ['Dimas_Buen_Ladron', 'Sociedades_Secretas_Doctrinales', 'Botanica_Magnetica', 'Ruda_Macho']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

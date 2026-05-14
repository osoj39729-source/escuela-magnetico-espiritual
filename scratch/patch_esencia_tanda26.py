import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '4777: Julio 3 de 1911 - Posesión M. P.': {
    'Piloto': 'Higiene de fluidos y vigilancia de la salud mediúmnica.',
    'Idea': 'El trabajo de curación y la asistencia a reuniones pueden cargar al médium con fluidos nocivos. El protector interviene para alertar sobre el desgaste de la materia y la necesidad de prudencia.',
    'Ejemplo': 'Agustín advierte a Manuel sobre los malos fluidos absorbidos en una curación externa, instándolo a cuidar su salud antes de seguir ayudando.',
    'Cita': 'Has de tener cuidado... pues aún tú no estás dispuesto y puedes perjudicar tu salud.',
    'Sinapsis': ['Higiene_Mediunnica', 'Cargas_Fluidicas', 'Proteccion_Espiritual']
  },
  '4789: Julio 9 de 1911 - Posesión M. P.': {
    'Piloto': 'La profecía de las tres generaciones y el árbol del Espiritismo.',
    'Idea': 'El Espiritismo es la semilla que se convertirá en el árbol universal de la verdad. La historia real de la humanidad (Psicomantion) fue ocultada, pero resurgirá. La libertad política es el precursor necesario de la libertad espiritual.',
    'Ejemplo': 'Jesús de Nazaret profetiza el triunfo total del Espiritismo en menos de tres generaciones, comparando su crecimiento con el grano de mostaza.',
    'Cita': 'No pasarán tres generaciones cuando el árbol estará con la hermosura de sus frutos en sazón... este árbol es el Espiritismo.',
    'Sinapsis': ['Profecia_de_las_Tres_Generaciones', 'Grano_de_Mostaza', 'Psicomantion', 'Libertad_Napoleonica']
  },
  '4939: Julio 14 de 1911 - Escrita, Trincado': {
    'Piloto': 'La ambición criminal y la influencia de las fieras humanas.',
    'Idea': 'La ambición por el dinero conduce al asesinato y al suicidio; a menudo, el criminal es alentado por el ejemplo de patrones crueles (fieras humanas). El arrepentimiento sincero es la llave de la luz.',
    'Ejemplo': 'Confesión de un carbonero que mató a su cuñado y sobrino por ambición, revelando también los crímenes de sangre en la estancia El Pilar.',
    'Cita': 'Apenas hay en la estancia un pedazo de tierra que no esté manchado de sangre.',
    'Sinapsis': ['Ambicion_Criminal', 'Fieras_Humanas', 'Reconocimiento_de_Culpas']
  },
  '4982: Julio 15 de 1911 - Posesión M. Portillo': {
    'Piloto': 'El deber de amputar la influencia del parásito social.',
    'Idea': 'La fraternidad no obliga a soportar la malicia y la traición contumaz. Se debe amputar el vínculo con seres parasitarios que buscan la ruina del misionero, agotados todos los medios de bondad.',
    'Ejemplo': 'Xavier y Magdalena ordenan a Trincado alejar y desenmascarar a Jacinto (parásito ingrato) para proteger la obra y la calma del maestro.',
    'Cita': 'Mucho más vale amputar el miembro gangrenado que exponerse a que se pierda todo el cuerpo.',
    'Sinapsis': ['Amputacion_del_Dañino', 'Parasito_Social', 'Limites_de_la_Fraternidad']
  },
  '5061: Julio 16 de 1911 - Posesión M. P.': {
    'Piloto': 'La Ley de los Afines y el Espiritismo Racional vs Espiritualismo.',
    'Idea': 'La Ley de los Afines (Amor/Electricidad) rige el universo. El espiritualista es un anti-espiritista porque no razona. Los criminales de la tierra son a menudo espíritus de mundos inferiores que vienen a aprender.',
    'Ejemplo': 'Doroteo explica que los vicios refinados proceden de espíritus de mundos bajos que encarnan en la tierra para llevar luego el progreso a sus mundos.',
    'Cita': 'La ley de los afines es la que rige el universo y se llama amor... el espiritualista es un anti-espiritista.',
    'Sinapsis': ['Ley_de_los_Afines', 'Mundos_Inferiores_en_la_Tierra', 'Espiritismo_vs_Espiritualismo']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

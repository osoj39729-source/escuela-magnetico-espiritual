import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '3663: Desdoblamiento y visión - Trincado.': {
    'Piloto': 'Viaje astral a Sión: La metrópoli de los Consejos del Padre.',
    'Idea': 'Sión es el centro de sabiduría de la Vía Láctea, un mundo de luz perpetua donde se planifica el progreso de los mundos inferiores. Los misioneros encarnados en la Tierra tienen allí asientos reservados como generales del espíritu.',
    'Ejemplo': 'Trincado visita Sión y ve el asiento del Espíritu de Verdad con el ancla como insignia, además de un mundo en formación destinado a ser la morada de los vencedores de la Tierra.',
    'Cita': 'Sión... centro de la sabiduría... el Padre prepara esta morada para los vencedores del mundo tierra.',
    'Sinapsis': ['Ciudad_de_Sion', 'Consejo_de_Sion', 'Humanidad_Solar', 'Misioneros_Encarnados']
  },
  '3720: Enero 22 de 1912 (Portillo) - Evist Evist': {
    'Piloto': 'Evist Evist: Fisiología de la pureza y el lema Siempre Más Allá.',
    'Idea': 'La humanidad solar en Sión posee una fisiología transparente con sangre gaseosa violácea, libre de pasiones bajas. El progreso es infinito y el espíritu siempre busca nuevos horizontes bajo el lema "Siempre Más Allá".',
    'Ejemplo': 'Evist describe la maternidad en Sión como un acto de luz donde se puede ver la gestación a través de la materia cristalina, cumpliendo la ley de amor sin dolor ni malicia.',
    'Cita': 'Siempre hay más allá... la tierra es el mundo de prueba y sus vencedores son los generales en mundos superiores... sangre color violado celeste.',
    'Sinapsis': ['Humanidad_Solar', 'Sangre_Gaseosa_Violacea', 'Siempre_Mas_Alla', 'Fisiologia_de_la_Pureza']
  },
  '3850: Enero 26 de 1912 - Joaquín Trincado': {
    'Piloto': 'El Primer Desafío: Fin de la impunidad de los mistificadores.',
    'Idea': 'El misionero ejerce autoridad judicial para desterrar a los espíritus impostores que suplantan a seres de luz. El exilio a mundos primitivos es la sentencia para quienes intentan desviar la misión con engaños espirituales.',
    'Ejemplo': 'Trincado evoca a las legiones rebeldes para que presencien el juicio y destierro del mistificador de María de Nazaret hacia las cavernas de fuego, provocando el pavor en las sombras.',
    'Cita': 'Invocó a todos los espíritus rebeldes para oír mi petición de justicia... remitido el mistificador al mundo primitivo.',
    'Sinapsis': ['Primer_Desafio_Trincado', 'Fin_de_la_Mistificacion', 'Potestad_Judicial_del_Misionero', 'Exilio_Sideral']
  },
  '3871: Enero 28 de 1912 (Posesión Portillo) - Che Auffer': {
    'Piloto': 'Che Auffer: La ley de voluntad y la ciencia del pensamiento propio.',
    'Idea': 'La ley universal no se impone, se cumple por voluntad del espíritu libre. Se debe superar el prejuicio de pensar con cabeza ajena para alcanzar la ciencia del Gran Cosmos a través del Espiritismo Luz y Verdad.',
    'Ejemplo': 'Che Auffer explica que el hombre debe dejar de ser "paria de las religiones" y usar su inteligencia para conectar con los efluvios de Sión, reconociendo su origen y destino.',
    'Cita': 'La ley es dictada y no impuesta... pensar con cabeza ajena en obras de otros... el espíritu trae un nuevo conocimiento en cada existencia.',
    'Sinapsis': ['Voluntad_vs_Imposicion', 'Ciencia_del_Espiritu', 'Pensar_con_Cabeza_Propia', 'Puente_a_Sion']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

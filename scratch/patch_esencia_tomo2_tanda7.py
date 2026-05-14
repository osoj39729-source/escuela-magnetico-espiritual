import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '3290: Enero 14 de 1912 (Portillo) - Antonio Rufo.': {
    'Piloto': 'Antonio Rufo: Solidaridad vs Caridad y el triunfo del perdón.',
    'Idea': 'La caridad es una etapa superada; la nueva era se basa en la Solidaridad. El perdón no es debilidad, sino la rehabilitación del espíritu. Matar el cuerpo de un delincuente es un error que genera odio y sombras en el universo espiritual.',
    'Ejemplo': 'Antonio Rufo describe cómo la voluntad popular, electrizada por el amor de los espiritistas en desdoblamiento, detuvo la mano del juez militar para lograr el indulto de Juan Joen.',
    'Cita': 'La caridad ya pasó de su órbita... el perdón es la rehabilitación... la ley de amor triunfa sobre la ley de la tierra.',
    'Sinapsis': ['Solidaridad_Doctrinal', 'Fin_de_la_Caridad', 'Voluntad_Popular_Soberana', 'Rehabilitacion_del_Espiritu']
  },
  '3402: En este momento desdobló todo mi yo y acompañado por el espíritu del vidente dije ahora llega un niño que pide al rey - Juan Rux': {
    'Piloto': 'Intervención espiritual y el escalofrío psíquico de la clemencia.',
    'Idea': 'El poder político emana del pueblo, quien es el único soberano. Los espíritus de luz intervienen en los momentos críticos para evitar injusticias supremas, usando la influencia mental para despertar la compasión en los gobernantes.',
    'Ejemplo': 'Trincado relata cómo provocaron un "escalofrío" en el Ministro de Guerra para que soltara la pluma y no firmara la sentencia de muerte, permitiendo la llegada del indulto real.',
    'Cita': '¡Detente hombre y piensa!... el pueblo es el soberano... se ha firmado el indulto, se aclama al rey clemente.',
    'Sinapsis': ['Intervencion_Psiquica_Directa', 'Escalofrio_Doctrinal', 'Martir_Catolico_vs_Hombre_Libre']
  },
  '3453: Enero 14 Hora 21 (Portillo) - El Crítico': {
    'Piloto': 'El Crítico: La solidaridad de los electrones y la justicia de Sión.',
    'Idea': 'La humanidad es un átomo compuesto de millones de voluntades que deben apoyarse como gotas de agua. Las religiones han desvirtuado a Jesús; el nuevo misionero (el Cirineo) viene a aplicar la justicia real que encalabozará la ignorancia.',
    'Ejemplo': 'El Crítico explica que los mundos perfectos fueron alguna vez primitivos y que su transformación se debió a la ley de afinidad que une desde el electrón hasta los soles.',
    'Cita': 'La humanidad es un átomo compuesto de millones de electrones... el palo que sacude el polvo de la ignorancia... Justicia de Sión.',
    'Sinapsis': ['Atomo_Humanidad', 'Solidaridad_Cosmica', 'Cirineo_del_Siglo_XX', 'Critico_de_Teresa']
  },
  '3502: Enero 21 de 1912 (Portillo) - Che Auffer En autos de Fiscal.': {
    'Piloto': 'Alegato Fiscal: Hijos del Hollín y el exilio a la caverna.',
    'Idea': 'La tierra es un Edén de paso para espíritus progresistas. Los "Hijos del Hollín" (obcecados en el mal) que rechacen la medicina del arrepentimiento serán exiliados a mundos primitivos de fuego y tiniebla.',
    'Ejemplo': 'Che Auffer define al Espiritismo Luz y Verdad como el "Émbolo" que succiona la ignorancia para revelar al Sol de Justicia en la conciencia humana.',
    'Cita': 'La tierra es un Edén de paso... hijos negros de hollín y ojos de fuego... el arrepentimiento es la medicina.',
    'Sinapsis': ['Eden_de_Paso', 'Hijos_del_Hollin', 'Exilio_a_Mundos_Primitivos', 'Embolo_de_la_Verdad']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

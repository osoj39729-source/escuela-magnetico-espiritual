import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '1880: Enero 16 de 1911 - Obrar vosotros, porque lo quiero yo.': {
    'Piloto': 'Cimentación racional de la Escuela y el rol de España en la demolición del error.',
    'Idea': 'La Escuela será la piqueta que demolerá lo falso; Dios no requiere templos ni sacerdotes parásitos, sino hombres de acción y corazones nobles en el templo del Universo.',
    'Ejemplo': 'España, fuente histórica de tiranía, produce ahora al demoledor bajo la guía de Xavier para instaurar el Amor Universal.',
    'Cita': 'Viva el Amor Universal, que es la Ley del Dios de Amor!',
    'Sinapsis': ['Cimentacion_de_la_Escuela', 'Piqueta_Demoledora', 'Adoracion_Universal', 'Rol_de_España']
  },
  '1918: Enero 15 de 1911 - Escrita, Trincado': {
    'Piloto': 'El fin espiritual de la Compañía de Jesús y la confesión de Loyola.',
    'Idea': 'La intriga y el interés carcomieron la obra de Loyola; él mismo confiesa haber sufrido tinieblas por el odio de una víctima, validando la superioridad de Xavier.',
    'Ejemplo': 'Loyola relata cómo el perdón de Elena (a quien deshonró como capitán) fue su llave a la luz, por encima de su santidad católica.',
    'Cita': 'El puntal de la Iglesia se carcomió... la intriga, la astucia y el interés han substituido a la sencillez.',
    'Sinapsis': ['Fin_de_la_Compañia_de_Jesus', 'Loyola_Tinieblas', 'Perdon_Espiritual', 'Jerarquia_de_Espiritus']
  },
  '1957: Enero 24 de 1911 - Su bendita bendición.': {
    'Piloto': 'Balance anual de la Providencia y el archivo de la Universalidad.',
    'Idea': 'Se otorga a Trincado el poder de la Universalidad y un archivo de ayuda oculto por 36 siglos. El amor verdadero agiganta al espíritu; el carnal lo degrada.',
    'Ejemplo': 'Protección contra lobos hambrientos y el regalo del niño como lazo de unión en el balance de un año de luchas vencidas.',
    'Cita': 'Se os dio el poder de la Universalidad y el archivo de la ayuda para todos.',
    'Sinapsis': ['Balance_Espiritual', 'Poder_de_la_Universalidad', 'Archivo_de_36_Siglos', 'Amor_Verdadero_vs_Carnal']
  },
  '2005: Enero 24 de 1911 - Escrita, Trincado': {
    'Piloto': 'Investidura de Trincado como Apóstol y rescate de la dignidad materna.',
    'Idea': 'El niño es un antiguo hermano vencido por el amor; denuncia de la religión que explota la miseria y el odio filial.',
    'Ejemplo': 'Rescate de María Antonia (jorobada abusada) quien, tras cantar en iglesias en la miseria, encuentra la luz al perdonar a su padre ciego.',
    'Cita': 'Tú serás mi apóstol... el apóstol y el hijo salvarán la dignidad de la madre.',
    'Sinapsis': ['Apostol_de_Maria', 'Rescate_del_Niño', 'Explotacion_Religiosa', 'Perdon_Filial']
  },
  '2087: Enero 27 de 1911 - Posesión de M. P.': {
    'Piloto': 'El Amor del Padre como base de la armonía y el valor del obstáculo.',
    'Idea': 'El miedo es falta de amor; los obstáculos son avisos amorosos del Padre para evitar extravíos en el camino del progreso.',
    'Ejemplo': 'Xavier enseña a ver en el obstáculo la mano que vela por el hijo, transformando la desesperación en fe racional.',
    'Cita': 'Si teméis no amáis... el obstáculo denota que hay quien por vosotros vela.',
    'Sinapsis': ['Amor_del_Padre', 'Valor_del_Obstaculo', 'Axioma_de_Amor', 'Fe_Racional']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

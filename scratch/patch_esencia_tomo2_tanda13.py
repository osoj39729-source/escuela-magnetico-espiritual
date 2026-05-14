import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '6067: Febrero 25 de 1912 Hora 20  (Portillo) - El  Espíritu  de  Verdad': {
    'Piloto': 'El Espíritu de Verdad: La trompeta de la mediumnidad universal.',
    'Idea': 'El juicio es un acto legal humano-espiritual presidido por el Juez-Hombre (Trincado). La "trompeta" profética es la voz de los mediums en todo el mundo. Se declara la destrucción del templo de la materia para instaurar el reinado de la verdad y el espíritu.',
    'Ejemplo': 'Xavier explica que los pontífices y magnates que oprimen al obrero son la cizaña que el Triángulo Mágico (Justicia, Voz y Ojo) separa hoy para la limpieza del planeta.',
    'Cita': 'El Juez y el tribunal están en acción... la trompeta es la voz de los mediums... viene a destruir el templo de la materia.',
    'Sinapsis': ['Triangulo_Magico_Blanco', 'Trompeta_del_Juicio', 'Fin_del_Reinado_de_la_Materia', 'Anticristo_Símbolo_Religioso']
  },
  '6320: Marzo 1 de 1912  (Portillo) - Xeim  Xeim': {
    'Piloto': 'Xeim Xeim: Denuncia de la Iglesia Universal del crimen.',
    'Idea': 'La Iglesia de Roma es universal solo en el mal y el crimen. Sus sacramentos son sacrificios irracionales que denigran la razón. El universo reclama el pago de talentos a los magnates que consumen lo común sin aportar trabajo.',
    'Ejemplo': 'El espíritu Dolifet describe cómo el clero ("raza de víboras") suplantó a Jesús con un "Cristo" dogmático para ocultar su propia barbarie y supremacía material.',
    'Cita': 'Esa iglesia apócrifa solo ha sido universal en el crimen... Jesús fue suplantado por un Cristo peligroso... temblad magnates.',
    'Sinapsis': ['Eucaristia_Sacrificio_Irracional', 'Raza_de_Viboras', 'Codigo_del_Polvo_de_la_Tierra', 'Justicia_contra_la_Supremacia']
  },
  '6487: Marzo 3 de 1912  (Portillo) - Mahoma': {
    'Piloto': 'Juicio a Mahoma: El error del odio y la unión con Alá.',
    'Idea': 'Mahoma confiesa que el odio al cristiano desfiguró la revelación del Corán. Reconoce a Trincado como el brazo de Alá y admite que el Islam debe desaparecer para dar paso a la Ley Universal. Pide clemencia para los disidentes que razonan.',
    'Ejemplo': 'Mahoma admite que su hijo (reencarnado en el tribunal) es su superior en sabiduría y que el Corán fue escrito con "tinta de la tierra", fallando en unir a la humanidad por debilidad de mando.',
    'Cita': 'Mi odio al cristiano fue el error... el Corán fue escrito con tinta de la tierra... acato la supremacía única del Dios del Juez.',
    'Sinapsis': ['Juicio_a_Mahoma', 'Error_del_Odio_Religioso', 'Disidentes_Mahometanos', 'Hijo_de_Mahoma_en_Tribunal']
  },
  '6693: Marzo 3 de 1912 (Portillo) - Sholis Sholis del mundo Eg Eg.': {
    'Piloto': 'Sholis Sholis: Los jardineros del Padre y la trasplantación de almas.',
    'Idea': 'La Tierra es un jardín en fase de trasplantación de especies espirituales. El Juez es el dinamo que transforma la luz de Sión en corrientes de amor. La agitación del juicio en la Tierra repercute en toda la Cosmogonía.',
    'Ejemplo': 'El espíritu de Eg Eg celebra que los "lobos con piel de cordero" (sacerdotes) ya no tienen sitio en la Tierra y que los misioneros son los jardineros que aseguran la nueva era de luz.',
    'Cita': 'Somos los jardineros del Padre... la tierra se niega a sostener a los morosos... el Juez es el dinamo de amor.',
    'Sinapsis': ['Jardineros_del_Padre', 'Agitacion_Cosmica', 'Dinamo_de_Amor', 'Nueva_Era_de_Luz']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

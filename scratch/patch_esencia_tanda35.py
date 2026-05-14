import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '9290: Noviembre 5 de 1911, noche - Posesión M. P.': {
    'Piloto': 'Investidura de Trincado como el Ingeniero de la Unión Universal.',
    'Idea': 'La soberanía espiritual se materializa en una ley de amor que derrocará el despotismo. El misionero es investido como el ingeniero encargado de unificar los cuatro puntos del globo bajo una sola cúpula comunal y universal.',
    'Ejemplo': 'Jesús de Nazaret declara que la luz de Sión ha quebrado la "montaña de granito" y que Trincado debe levantar el edificio donde no existirán castas ni magnates.',
    'Cita': 'Tú eres el ingeniero, levanta la obra... la soberanía bajará envuelta en un cuerpo material y serán derrocados el despotismo, la reacción y el egoísmo.',
    'Sinapsis': ['Ingeniero_de_la_Union', 'Montaña_de_Granito', 'Comuna_Universal', 'Soberania_Espiritual']
  },
  '9406: Noviembre 7 de 1911 - Posesión M. P.': {
    'Piloto': 'La redención de Joen e Iris a través del perdón mutuo.',
    'Idea': 'El odio secular hacia los verdugos es la mayor prisión del espíritu. La redención se alcanza cuando la víctima y el victimario se reconcilian en la luz del Padre, rompiendo el ciclo de deudas y restaurando la armonía misional.',
    'Ejemplo': 'Joen, discípulo de Antulio, perdona finalmente a Iris (Teresa de Jesús) al ver que su maestro ya la ha perdonado y que ambos trabajan unidos por la humanidad.',
    'Cita': 'Maestro, ¿y me dices que perdone?... Antulio e Iris van unidos en el amor... que el amor sea el redentor de mis hermanos.',
    'Sinapsis': ['Redencion_de_Joen', 'Perdon_de_Iris', 'Ciclo_de_Odio', 'Amor_Redentor']
  },
  '9483: Noviembre 10 de 1911 - Posesión Portillo': {
    'Piloto': 'Estrategia misional y la vigilancia de los espíritus de luz.',
    'Idea': 'La construcción de la Escuela requiere una estrategia magistral frente a la malicia y diplomacia del sistema. Las dificultades materiales son parte del "plano" y los espíritus actúan como vigías constantes del proceso.',
    'Ejemplo': 'Simón Tadeo insta a Trincado a persistir a pesar de las necesidades y la maledicencia, anunciando que el relámpago de la verdad ya es visible en todas partes.',
    'Cita': 'En ti está la maestría de la estrategia... el relámpago se ve ya en todas partes, el trueno no tardará en ser oído.',
    'Sinapsis': ['Estrategia_Doctrinal', 'Replantacion_del_Edificio', 'Vigilancia_Espiritual']
  },
  '9546: Noviembre 12 de 1911 - Posesión Portillo': {
    'Piloto': 'Geolocalización de la verdad y el fin del odio de Joen.',
    'Idea': 'La verdad no está ligada a lugares antiguos (Oriente), sino al esfuerzo humano y la vibración del amor. El reconocimiento del maestro debe ser por su luz y no por su forma física o ubicación geográfica.',
    'Ejemplo': 'Joen reconoce la luz de Antulio en Argentina y sobre Trincado, comprendiendo que el odio era su única tiniebla y que la víctima y el verdugo están ya redimidos por el amor.',
    'Cita': '¿Acaso vosotros le habéis arrebatado la luz a él? ¡Oh, no! Esta luz es vuestra, es hija de vuestro esfuerzo... Antulio está detrás de ese crespón.',
    'Sinapsis': ['Luz_en_Argentina', 'Reconocimiento_Vibratorio', 'Fin_del_Odio']
  },
  '9595: Noviembre 12 de 1911 - Posesión Portillo': {
    'Piloto': 'Medir las Distancias: Equidad, Clarividencia y el Nombre ELOI.',
    'Idea': 'La justicia divina es equidad. "Medir las distancias" implica comprender la evolución y debilidad de cada ser para juzgar con amor. Dios es ELOI, el Padre sin misterios cuyo libro está abierto en la cosmología universal.',
    'Ejemplo': 'Jesús explica que el perdón a Iris fue un acto de equidad al medir su debilidad de mujer; insta a desterrar el miedo a la muerte y buscar la clarividencia de la gran ley.',
    'Cita': 'La igualdad de castigo en la ley es una ignorancia... el Padre es sobrio y sólo pide amor... su nombre universal es ELOI.',
    'Sinapsis': ['Medir_las_Distancias', 'Equidad_Doctrinal', 'ELOI_Nombre_de_Dios', 'Clarividencia_Cosmologica']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

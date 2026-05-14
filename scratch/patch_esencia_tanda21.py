import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '3618: Mayo 31 de 1911 - Posesión M. P.': {
    'Piloto': 'La expiación del infanticidio y la ley de compensación biológica.',
    'Idea': 'La ley exige que el espíritu que quitó la vida la devuelva mediante la maternidad reparadora; la luz del arrepentimiento es el primer paso, pero el pago se realiza en la materia.',
    'Ejemplo': 'Manuela Calvo, quien mató y torturó a sus hijos, deberá reencarnar para ser la madre protectora de esos mismos tres espíritus.',
    'Cita': 'Pronto ha de volver y dará vida a los tres.',
    'Sinapsis': ['Ley_de_Compensacion_Biologica', 'Expiacion_de_Infanticidio', 'Maternidad_Redentora']
  },
  '3637: Junio 1 de 1911 - Posesión M. P.': {
    'Piloto': 'Conflicto entre el espíritu misionero y la materia corrompida.',
    'Idea': 'Cuando la materia se entrega a vicios y malas compañías abandonando su misión, el espíritu puede provocarle enfermedades para acelerar la desencarnación y evitar mayor retraso.',
    'Ejemplo': 'El espíritu de Manuel F. se manifiesta para recriminar a su propio cuerpo vivo el haber malogrado una misión de ciencia y arte.',
    'Cita': '¿Para qué quiero un cuerpo que no sirve a mi misión?',
    'Sinapsis': ['Conflicto_Espiritu_Materia', 'Mision_no_Cumplida', 'Enfermedad_como_Freno']
  },
  '3665: Junio 2 de 1911 - Posesión M. P.': {
    'Piloto': 'La búsqueda persistente del amor filial a través de los siglos.',
    'Idea': 'Los lazos de afecto negado requieren múltiples reencarnaciones cruzadas (madre/hijo) hasta que el amor triunfa sobre el desvío moral.',
    'Ejemplo': 'Josefina Calvo relata su persistencia de siglos encarnando como hija de la misma mujer para conquistar su amor negado.',
    'Cita': 'He sido hijo y madre de mi madre y no conseguí el amor que busco; pero sigo tras ella hasta que me ame.',
    'Sinapsis': ['Reencarnacion_Cruzada', 'Amor_de_Madre', 'Persistencia_Espiritual']
  },
  '3691: Junio 2 de 1911 - Posesión M. P.': {
    'Piloto': 'Regeneración del delincuente y la unión espiritual con las víctimas.',
    'Idea': 'El perdón sincero transforma el odio en afinidad; los criminales regenerados se convierten en protectores de quienes antes fueron sus víctimas.',
    'Ejemplo': 'José Pernales, famoso bandolero, se presenta regenerado y en compañía de los espíritus a quienes asesinó, ahora unidos en amor.',
    'Cita': 'Hoy llevo en mi compañía a todos los que asesiné, porque ya nos perdonamos.',
    'Sinapsis': ['Regeneracion_del_Criminal', 'Perdon_de_Victimas', 'Jose_Pernales']
  },
  '3743: Junio 3 de 1911 - Posesión M. P.': {
    'Piloto': 'El juicio excepcional del espíritu a su propia materia.',
    'Idea': 'El desdoblamiento de justicia permite al espíritu hablar directamente a su materia despierta para exigirle responsabilidad y cumplimiento del deber misionero.',
    'Ejemplo': 'Manuel Fernández presencia el juicio de su propio espíritu, quien le advierte sobre las consecuencias de su rebeldía material.',
    'Cita': 'El espíritu habló a su propia materia... mas no juró poner remedio hasta tanto no se preste al cumplimiento de la misión.',
    'Sinapsis': ['Desdoblamiento_de_Justicia', 'Juicio_a_la_Materia', 'Responsabilidad_Misionera']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

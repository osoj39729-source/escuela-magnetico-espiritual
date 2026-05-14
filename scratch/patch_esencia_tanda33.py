import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '8234: Octubre 17 de 1911 - Posesión M. P.': {
    'Piloto': 'Intensidad del sufrimiento en el espacio y preparación misional.',
    'Idea': 'El sufrimiento espiritual tras la muerte es inmensamente superior al dolor físico terrestre. Es imperativo despojarse de pasiones en la tierra y adquirir conocimientos antes de reencarnar para no fallar en la misión.',
    'Ejemplo': 'Pascual Méndez, primo de Trincado en vida pasada, advierte contra el suicidio y la desesperación, explicando que eligió una materia imperfecta y ahora debe prepararse para una nueva prueba.',
    'Cita': 'Lo que pueda padecer un encarnado... no representa nada de lo que el espíritu desesperado padece en una hora de vuestros relojes.',
    'Sinapsis': ['Sufrimiento_Espiritual', 'Preparacion_para_la_Mision', 'Reencarnacion_Planificada']
  },
  '8277: Octubre 20 de 1911 - POSESIÓN PORTILLO': {
    'Piloto': 'Especialización mediúmnica y la restitución social de Lino.',
    'Idea': 'Las facultades mediúmnicas son específicas según el temperamento del instrumento. El progreso espiritual se logra mediante el trabajo productivo; los antiguos líderes religiosos deben regresar como obreros para compensar su pasado.',
    'Ejemplo': 'El espíritu de Lino (ex-cura) se despide para reencarnar como trabajador manual, afirmando que solo el azadón y el sudor honrado pueden regenerar su espíritu tras siglos de parasitismo clerical.',
    'Cita': 'Volveré a llevar el azadón al hombro, porque el trabajo que robé tengo que devolverlo... Sólo el trabajo productivo regenera.',
    'Sinapsis': ['Facultades_Mediumnicas', 'Restitucion_Social', 'Trabajo_Regenerador', 'Lino_Ex_Cura']
  },
  '8345: Octubre 22 - Portillo': {
    'Piloto': 'Denuncia del dogma de la Inmaculada y la ley natural de concepción.',
    'Idea': 'María de Nazaret rechaza la divinización y el dogma de la concepción inmaculada como un insulto a la ley universal. La grandeza de Jesús reside en su propio espíritu y no en un nacimiento sobrenatural mítico.',
    'Ejemplo': 'María afirma que fue una madre virtuosa por ley natural y predice que la luz de la verdad (ciencia) derribará el "castillo de granito" del orgullo religioso.',
    'Cita': 'Yo no pude ser madre sino por ley universal... No fui la mujer de gracia; fui la mujer virtuosa, por la virtud de mi fuerza.',
    'Sinapsis': ['Maternidad_Natural', 'Desmitificacion_de_Maria', 'Dogma_Inmaculada_Concepcion', 'Castillo_de_Granito']
  },
  '8572: Octubre 29 de 1911 (noche), hora 21, sobremesa - Posesión M. P.': {
    'Piloto': 'Eduardo VII: De la paz armada a la fraternidad universal.',
    'Idea': 'Los monarcas gestionan una paz basada en el temor (paz armada), la cual es costosa y temporal. La misión del Espiritismo es instaurar la paz de amor que abolirá fronteras y religiones, transformando el oro en bienestar social.',
    'Ejemplo': 'Eduardo VII ("El Gordo") reconoce la "Misión Real" del grupo de Trincado y admite que su labor monárquica fue solo un paso hacia la verdadera unión que traerá la luz de Sión.',
    'Cita': 'La paz que yo impuse era paz armada... la paz que implantará el que trae la luz, abarrotará de oro las naciones, hecho pan de hermanos.',
    'Sinapsis': ['Eduardo_VII', 'Paz_Armada_vs_Paz_Amor', 'Mision_Real', 'Luz_de_Sion']
  },
  '8702: Octubre 23 de 1911 - Posesión Portillo': {
    'Piloto': 'Desmitificación de Rafael Arcángel y la iniquidad dogmática.',
    'Idea': 'Los seres llamados arcángeles son espíritus humanos que sufrieron en la tierra. La Iglesia los utiliza como símbolos divinos para retener el dominio sobre los ignorantes, traicionando la ley de igualdad universal.',
    'Ejemplo': 'El espíritu de Rafael denuncia su reducción a "fantoche" religioso y desea destruir las imágenes que lo divinizan, reconociéndose como un simple "hijo del hombre" en misión.',
    'Cita': 'Soy hijo del hombre como vosotros... dad el mentís a los que nos han hecho arcángeles sacándonos de la ley universal.',
    'Sinapsis': ['Rafael_Arcangel', 'Desmitificacion_de_los_Angeles', 'Traicion_Eclesiastica', 'Lagrimas_Saneadoras']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

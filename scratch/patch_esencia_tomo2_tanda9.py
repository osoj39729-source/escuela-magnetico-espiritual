import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '4039: Sin perder posesión el medium dijo - María de Nazaret.': {
    'Piloto': 'María de Nazaret: La pedagogía del destierro y los Abraham del futuro.',
    'Idea': 'El destierro a mundos primitivos es una misión redentora. Los prevaricadores actuales serán los civilizadores de esos mundos, viviendo en carne propia las religiones de sacrificio que impusieron, hasta que el amor brote en su tronco espiritual.',
    'Ejemplo': 'María explica que los desterrados escribirán testamentos de miedo para educar a razas antropófagas, sufriendo el mismo martirio que causaron, hasta que aprendan a sacrificarse en el altar del amor.',
    'Cita': 'El destierro no es para la eternidad... allí serán los primeros padres... llevarán el injerto del bien que brotará en flores y fruto.',
    'Sinapsis': ['Pedagogia_del_Destierro', 'Responsabilidad_Consciente', 'Misioneros_del_Horror', 'Madre_de_Amor']
  },
  '4126: Enero 28 Hora 21 (Portillo) - ¿Está también demente, Virret de Abus Amet?': {
    'Piloto': 'Virret de Abus Amet: La ciencia de los fluídos y la razón como telescopio.',
    'Idea': 'La vida reside en los fluídos del éter (O, H, N, C cósmicos). Los "vacíos" interestelares son pentagramas de armonía vital. El hombre es un efecto de una causa cosmogónica cuya razón es el aparato supremo para conocer el infinito.',
    'Ejemplo': 'Virret critica a los científicos "miopes de larga vista" que buscan la vida en la materia densa, ignorando que el espíritu es el químico que ordena los átomos en el laboratorio universal.',
    'Cita': 'No hay nada vacío en el universo... sois miopes de larga vista... el hombre es el obrero del Creador.',
    'Sinapsis': ['Laboratorio_Universal', 'Fluidos_del_Eter', 'Ciencia_de_las_Ciencias', 'Razon_Aparato_Optico']
  },
  '4286: Febrero 4 de 1912 (Portillo) - hay en disidencia?': {
    'Piloto': 'Juicio a la Tiara: Confesión de los Papas y la opción del antropófago.',
    'Idea': 'Los jefes de la Iglesia confiesan haber deificado la carne y desfigurado a Jesús con el nombre de "Cristo". Ante el tribunal de la humildad, deben elegir entre ser los últimos en la Tierra o jefes de antropófagos en mundos de azufre.',
    'Ejemplo': 'El espíritu representante de la Iglesia admite que el "Espiritualismo" fue un invento para amalgamar la fe con el Espiritismo y no perder el dominio sobre las masas.',
    'Cita': 'La carne ha sido nuestro Dios... hemos desfigurado a Jesús con el nombre de Cristo... preferimos ser los últimos aquí que jefes de antropófagos.',
    'Sinapsis': ['Juicio_a_la_Iglesia', 'Cristo_Agregado_Infame', 'Opcion_del_Antropofago', 'Piqueta_de_la_Verdad']
  },
  '4428: Se retiró el espíritu y nos elevamos  desdoblados, el medium, el vidente González y yo, formamos un triángulo, viendo las - desmayar.': {
    'Piloto': 'El Triángulo de la Redención y la caída de la cruz de Jesús.',
    'Idea': 'La visión del Calvario revela la verdad del martirio. Loyola condena la traición jesuita y Dante muestra el infierno real. Al despojarse a Jesús de la cruz mediante el juramento de Trincado, los verdugos se rinden a la luz.',
    'Ejemplo': 'Trincado presencia cómo millones de espíritus se aferran al ancla de Xavier mientras un coro celestial canta la liberación definitiva de Jesús del dogma católico.',
    'Cita': 'Ya brilla la luz del claro día; ya le quitaron la cruz al hijo de María... el horror les hacía desmayar.',
    'Sinapsis': ['Triangulo_de_Desdoblamiento', 'Rendicion_de_Loyola', 'Antifona_de_la_Luz', 'Fin_de_la_Cruz']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

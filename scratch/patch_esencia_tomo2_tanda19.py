import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-2_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '74: 5 de abril de 1930 Día 17 del mes 7 del año 19 N E - Joaquín Trincado.': {
    'Piloto': 'Fecha de cierre: El sello cronológico de la Nueva Era.',
    'Idea': 'Esta datación doble (5 de abril de 1930 / Día 17 del mes 7 del año 19 N.E.) documenta el momento en que Trincado finaliza la edición impresa del Tomo 2. La "Nueva Era" es el sistema cronológico propio de la Escuela que comienza con el inicio del ministerio del Maestro.',
    'Ejemplo': 'Como el notario que estampa la fecha y firma al pie del documento legal, Trincado certifica con su nombre y la doble datación la autenticidad y consumación del corpus judicial.',
    'Cita': '5 de abril de 1930. Día 17 del mes 7 del año 19 N.E. — Joaquín Trincado.',
    'Sinapsis': ['Nueva_Era_Calendario', 'Sello_de_Sion', 'Finalizacion_Tomo_2', 'Cronologia_Doctrinal']
  },
  '327: Posesión Portillo - Posesión Portillo': {
    'Piloto': 'Acta de posesión: El médium como instrumento de la Ley.',
    'Idea': 'El registro escueto de la posesión del médium Portillo constituye el acta formal que valida la recepción mediúmnica. La simplicidad del registro subraya el protocolo judicial: lo importante es el mensaje, no la persona del médium.',
    'Ejemplo': 'Como el secretario de actas que consigna "sesión iniciada" sin más preámbulo, la notación de Posesión Portillo es el umbral legal que separa la voz humana de la comunicación espiritual.',
    'Cita': 'Posesión Portillo.',
    'Sinapsis': ['Acta_de_Posesion', 'Docilidad_del_Medium', 'Protocolo_Judicial_Espiritual', 'Umbral_Mediumnido']
  },
  '2504: FELICITACIONES - FELICITACIONES': {
    'Piloto': 'Felicitaciones: La universalidad saluda el nuevo año de luchas.',
    'Idea': 'El registro de "FELICITACIONES" es el título de encabezado para los mensajes de aliento del mundo espiritual al inicio de 1912. Actúa como un bloque introductorio que contextualiza las comunicaciones de solidaridad de los maestros para el año judicial.',
    'Ejemplo': 'Como el membrete de una carta colectiva, este título agrupa todos los saludos de los espíritus de luz que acuden a fortalecer a los misioneros antes del gran ciclo de juicios.',
    'Cita': 'FELICITACIONES — La universalidad os saluda en el año de luchas.',
    'Sinapsis': ['Solidaridad_Espiritual', 'Año_1912_Transicion', 'Aliento_de_la_Universalidad', 'Encabezado_Judicial']
  },
  '2574: La hermana Juana, nos trajo saludos de todos los agradecidos - que lo fajen si barrigón ha nacido': {
    'Piloto': 'El refrán de la obstinación: "Al ñudo que lo fajen si barrigón ha nacido."',
    'Idea': 'El refrán popular recoge la enseñanza de que la obstinación espiritual es como un defecto congénito que no se corrige con remedios externos. La gratitud abre la conciencia; la ingratitud la cierra. Juana trae ambos casos como espejo pedagógico.',
    'Ejemplo': 'Juana de Arco contrasta a los agradecidos (que reciben la luz) con los desagradecidos (que dan "su saludo" como insulto), enseñando que la libertad de elección es absoluta incluso frente a la verdad.',
    'Cita': 'Es al ñudo que lo fajen si barrigón ha nacido... los desagradecidos nos dan también su saludo.',
    'Sinapsis': ['Fondo_sobre_Forma', 'Refrán_de_la_Obstinacion', 'Gratitud_vs_Ingratitud', 'Juana_de_Arco_Espiritu']
  },
  '1807: Durante esta discusión, se posesionó el médium Portillo anunciándosenos la viajera le dí permiso y dijo - Con el espiritualismo  infiel.': {
    'Piloto': 'Teresa de Jesús: La reforma es imposible — solo la demolición.',
    'Idea': 'Teresa denuncia que las religiones están corrompidas en su base y no admiten reforma parcial. El Espiritismo Luz y Verdad no puede unirse al "Espiritualismo infiel" porque son opuestos ontológicos: la verdad vs. la amalgama del dogma.',
    'Ejemplo': 'Teresa usa la imagen quirúrgica: sobre hueso gangrenado no crece carne sana. La única acción eficaz es la amputación completa del dogma y la construcción sobre la razón pura.',
    'Cita': 'La reforma no cabe; hay que demoler... sobre el hueso podrido no puede hacerse carne sana... ni unión del Espiritismo con el espiritualismo infiel.',
    'Sinapsis': ['Amputacion_del_Dogma', 'Espiritualismo_Infiel', 'Imposibilidad_de_la_Reforma', 'Teresa_de_Jesus_Espiritu']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)
print('OK - Tanda 19 inyectada:', len(new_nodes), 'nodos.')

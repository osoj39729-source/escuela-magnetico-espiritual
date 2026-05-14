import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '4246: Junio 16 de 1911 - Escrita, Trincado': {
    'Piloto': 'Protección espiritual infantil y consejos de higiene natural.',
    'Idea': 'La vigilancia de los guías sobre la infancia es absoluta; aunque no pueden intervenir físicamente de forma directa, facilitan la resolución de accidentes. La medicina natural es el recurso para el equilibrio de la materia.',
    'Ejemplo': 'María de Nazaret guía la expulsión de un hueso ingerido por el niño Francisco Xavier y prescribe remedios naturales para la fiebre y el resfriado.',
    'Cita': 'No da un latido sin que yo lo vea.',
    'Sinapsis': ['Proteccion_Infantil', 'Higiene_Natural', 'Medicina_Espiritual']
  },
  '4262: Junio 18 de 1911 - Posesión M. P.': {
    'Piloto': 'Responsabilidad social en el infortunio y la redención del criminal.',
    'Idea': 'La sociedad crea criminales al abandonar a los niños a la miseria y la falta de amor; el infortunio material tuerce misiones elevadas. La redención espiritual es posible tras el reconocimiento del error.',
    'Ejemplo': 'Pedro El Urero, vagabundo y asesino de Madrid, confiesa su vida de carencias y recibe la luz de redención de Francisco Xavier.',
    'Cita': 'La infame sociedad abandona más que al perro a esos seres que vinieron en ley a buscar amor.',
    'Sinapsis': ['Responsabilidad_Social', 'Redencion_de_Criminales', 'Pedro_El_Urero']
  },
  '4305: Junio 20 de 1911 - Escrita, Trincado': {
    'Piloto': 'La rebeldía de la materia y el reto final de la Iglesia a la razón.',
    'Idea': 'El orgullo y los vicios (alcoholismo) de la materia pueden neutralizar la acción del protector. El Congreso Eucarístico representa el desafío final del dogma contra el avance de la luz.',
    'Ejemplo': 'Impotencia de María Magdalena ante la terquedad de Jacinto; protesta de Luis Gonzaga contra el uso de su nombre para embotar a la juventud.',
    'Cita': 'Mucho es el poder que tenemos; pero tanto pueden los buenos como los malos... el cataclismo está encima.',
    'Sinapsis': ['Rebeldia_de_la_Materia', 'Impotencia_del_Protector', 'Congreso_Eucaristico_Madrid']
  },
  '4361: Junio 20 de 1911 - Posesión M. P.': {
    'Piloto': 'El juicio a las conciencias muertas y la incorruptibilidad del cuerpo.',
    'Idea': 'La vida meramente animal es la muerte del alma; el verdadero juicio es individual y se basa en la rectitud de la conciencia. Los cuerpos de los justos pueden conservarse como prueba de la ley.',
    'Ejemplo': 'Francisco Xavier llama a los vivos a resucitar sus conciencias muertas y define el axioma de que los desencarnados son los que realmente viven.',
    'Cita': 'Surgite mortui et venite ad judicium... las conciencias muertas viven solo la vida animal.',
    'Sinapsis': ['Juicio_Particular', 'Conciencias_Muertas', 'Incorruptibilidad_Cadaverica', 'Axioma_de_Vida']
  },
  '4397: Junio 21 de 1911 - Posesión M. P.': {
    'Piloto': 'Ciencia mediúmnica y reencarnación reparadora por afinidad.',
    'Idea': 'El espiritismo exige estudio científico para discernir la identidad de los comunicantes. El libre albedrío humano puede obstaculizar planes espirituales de prevención de cataclismos.',
    'Ejemplo': 'Manifestación de Antonio Labrador para anunciar su reencarnación femenina con el fin de ayudar a su hermano a reparar deudas económicas pasadas.',
    'Cita': 'Si es demonio se burla de la inocencia; por esto os exige ciencia el Espiritismo Luz.',
    'Sinapsis': ['Ciencia_Mediunnica', 'Libre_Albedrio_y_Cataclismos', 'Reencarnacion_Reparadora']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '2329: Febrero 13 de 1911 - Posesión de M. P.': {
    'Piloto': 'La humildad de los espíritus elevados y la necesidad de cooperación mental.',
    'Idea': 'Los guías espirituales no son dioses; requieren el apoyo del pensamiento de los encarnados para intervenir con éxito en casos de obsesión familiar.',
    'Ejemplo': 'Antonio de Padua pide a los asistentes que unan su pensamiento para auxiliar a una familia afectada por el mal uso de facultades mediúmnicas.',
    'Cita': 'Aunque digan que soy santo y que hice tantos milagros, a los hombres pido favores.',
    'Sinapsis': ['Cooperacion_Mental', 'Humildad_Espiritual', 'Obsesion_Mediunnica', 'Antonio_de_Padua']
  },
  '2342: Febrero 15 de 1911 - Posesión de M. P.': {
    'Piloto': 'La justicia ineludible y la ley de compensación en los vínculos familiares.',
    'Idea': 'Toda acción contra la vida o la dignidad del prójimo se paga ineludiblemente; el reconocimiento de la deuda es el primer paso hacia la luz.',
    'Ejemplo': 'Samuel Blanco relata su vida de soledad y muerte tras avergonzarse de su madre, reconociendo la justicia de Dios en su destino.',
    'Cita': 'Si una vida has costado, la pagarás pronto o tardo, porque es la ley; nada más.',
    'Sinapsis': ['Ley_de_Compensacion', 'Deuda_de_Vida', 'Samuel_Blanco']
  },
  '2373: Febrero 17 de 1911 - Posesión de M. P.': {
    'Piloto': 'El odio espiritual latente tras el afecto material aparente.',
    'Idea': 'Las crisis familiares suelen ser el resultado de odios de vidas pasadas por deudas materiales y morales no saldadas; el pensamiento negativo atrae el mal.',
    'Ejemplo': 'Revelación de un matrimonio donde el espíritu del esposo odia al de la mujer por haberlo arruinado en una existencia anterior con roles invertidos.',
    'Cita': 'Su espíritu odia al espíritu de su mujer, y de ahí viene el mayor mal.',
    'Sinapsis': ['Odio_Espiritual', 'Inversion_de_Roles', 'Justicia_Familiar']
  },
  '2399: Febrero 19 de 1911 - Posesión de M. P.': {
    'Piloto': 'Desmitificación de la jerarquía angélica y denuncia de la falsedad mediúmnica.',
    'Idea': 'Ángeles y Arcángeles son mitos; todos son espíritus que han evolucionado desde el error. El espíritu usa las lágrimas de la médium para expresar su dolor.',
    'Ejemplo': 'Miguel Arcángel confiesa sus propios pecados pasados y desenmascara a una médium que fingía comunicarse con él usando iconografía católica.',
    'Cita': 'Los ángeles y los arcángeles son mitologías; el Padre no tiene privilegiados.',
    'Sinapsis': ['Desmitificacion_de_Arcangeles', 'Lagrimas_Mediunnicas', 'Falsedad_Mediunnica', 'Miguel_Arcangel']
  },
  '2451: Febrero 21 de 1911 - Escrita': {
    'Piloto': 'La fuerza del magnetismo materno en la medicina espiritual y doméstica.',
    'Idea': 'El amor de la madre es el mejor catalizador curativo; la medicina espiritual utiliza remedios simples potenciados por el magnetismo del afecto puro.',
    'Ejemplo': 'María de Nazaret prescribe remedios caseros para el niño Francisco Xavier, resaltando el valor de la aplicación magnetizada por la madre.',
    'Cita': 'Del niño, médico bueno es la madre, porque su amor es un guía que no puede equivocarse.',
    'Sinapsis': ['Magnetismo_Materno', 'Medicina_Domestica', 'Amor_Magnetizado', 'Lino_Ex_Cura']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

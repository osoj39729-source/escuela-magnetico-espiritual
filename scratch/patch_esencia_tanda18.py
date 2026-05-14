import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '3005: Abril 18 de 1911 - Posesión M. P.': {
    'Piloto': 'Desmitificación de Adán y la antigüedad del hombre milenario.',
    'Idea': 'La humanidad preexiste por milenios a los mitos bíblicos; espíritus de eras remotas despiertan para dar testimonio de la verdadera historia del hombre.',
    'Ejemplo': 'Jarancon, espíritu de 80 siglos de antigüedad, desmiente la creación adámica como el inicio de la raza humana.',
    'Cita': 'Si Adán fuera el primer hombre, Jarancon mentira fuera; porque es antes de la era de crear el Adán-hombre.',
    'Sinapsis': ['Desmitificacion_de_Adan', 'Antigüedad_del_Hombre', 'Jarancon_el_Milenario']
  },
  '3027: Abril 25 de 1911 - Posesión M. P.': {
    'Piloto': 'La prevaricación mediúmnica y el retiro del espíritu encarnado.',
    'Idea': 'El espíritu puede abandonar rápidamente el cuerpo si las condiciones de su prueba son destruidas por la prevaricación de los responsables de su formación.',
    'Ejemplo': 'Desencarnación prematura de un niño (reencarnación de Carolina) tras la caída moral de la médium que debía ampararlo.',
    'Cita': 'El niño desencarnó pocos días después, porque su espíritu vio perdida su prueba.',
    'Sinapsis': ['Prevaricacion_Mediunnica', 'Fracaso_Encarnatorio', 'Desencarnacion_Prematura']
  },
  '3043: Abril 28 de 1911 - Escrita, Trincado': {
    'Piloto': 'Redención del Judío Errante y regeneración de Judas Iscariote.',
    'Idea': 'El odio milenario ciega al espíritu y lo maldice; el perdón a las figuras del pasado (Jesús y Judas) libera al espíritu de su erradicación. Judas no es réprobo, sino un espíritu en progreso.',
    'Ejemplo': 'Samuel Belshabé (Judío Errante) cesa su odio de 20 siglos al comprender que Judas se regeneró como hermano de Teresa de Jesús en Ávila.',
    'Cita': 'Decid al mundo que el judío errante ya no es errante, que Dios es bueno, y que el mal es el odio.',
    'Sinapsis': ['Judío_Errante_Redencion', 'Judas_Iscariote_Regeneracion', 'Perdon_de_Enemigos', 'Samuel_Belshabé']
  },
  '3123: Mayo 1 de 1911 - Posesión M. P.': {
    'Piloto': 'La cautela del misionero y la fortaleza del secreto doctrinal.',
    'Idea': 'La voluntad debe guiarse por la razón y la cautela; el misionero es custodio de verdades que no deben ser entregadas a la envidia o a la indiscreción.',
    'Ejemplo': 'Doroteo advierte a Trincado sobre la necesidad de guardar secretos en su propio pecho y estar alerta ante colaboradores pasionales.',
    'Cita': 'Tu pecho sólo es la mejor caja... cuida de no caer, porque entonces sí podrás tomar el báculo del peregrino descorazonado.',
    'Sinapsis': ['Cautela_del_Misionero', 'Secreto_Doctrinal', 'Voluntad_y_Razon']
  },
  '3162: Mayo 2 de 1911 - Escrita, Trincado': {
    'Piloto': 'El espiritismo como Esciencia y el respeto a la medicina oficial.',
    'Idea': 'La doctrina no combate a la ciencia, sino que la complementa; cuando el magnetismo es insuficiente, la cirugía y el médico son necesarios e indispensables.',
    'Ejemplo': 'Instrucción de Cayetano sobre la necesidad de un cirujano para una operación de oído, denunciando a los fanáticos que rechazan la medicina.',
    'Cita': 'El espiritismo es Esciencia... y los que todo lo curan se verán descontentos de que al médico recurran los espíritus.',
    'Sinapsis': ['Espiritismo_Esciencia', 'Ciencia_y_Espiritismo', 'Respeto_al_Medico']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

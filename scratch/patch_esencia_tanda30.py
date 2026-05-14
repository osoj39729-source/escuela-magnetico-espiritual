import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '7153: Septiembre 8 de 1911 (hora 12 del día) - Posesión M. P.': {
    'Piloto': 'La verdadera María: madre, esposa y espíritu de consuelo magnético.',
    'Idea': 'María de Nazaret rechaza la divinización y el título de virgen, presentándose como una madre humana que asiste mediante magnetismo fluídico. Su intervención se basa en la fe y el amor desinteresado, no en milagros dogmáticos.',
    'Ejemplo': 'María sana a una enferma grave en Buenos Aires utilizando un pañuelo fluidificado con su magnetismo y exige que se escriba su verdadera historia como mujer y esposa.',
    'Cita': 'Soy el espíritu de una mujer, madre como tú; ten fe y quiere curarte... ya es hora que me conozcan como fui.',
    'Sinapsis': ['Verdadera_Maria', 'Sanacion_Magnetica', 'Desmitificacion_de_Maria']
  },
  '7210: Septiembre 8 (noche) - Posesión P. Portillo': {
    'Piloto': 'Confesión de la hipocresía clerical y la ley de compensación obrera.',
    'Idea': 'La hipocresía en cargos religiosos genera tinieblas que solo se disuelven con la restitución. Los líderes que abusaron de su poder deben regresar como obreros para equilibrar sus deudas morales.',
    'Ejemplo': 'Manuel Labrador, ex-párroco de Venialbo, confiesa sus abusos contra huérfanos y pide encarnar como obrero para devolver lo que arrebató a la sociedad.',
    'Cita': 'La hipocresía da terribles tinieblas... quiero ser un obrero fuerte y restituir lo que quité.',
    'Sinapsis': ['Hipocresia_Clerical', 'Restitucion_Espiritual', 'Manuel_Labrador']
  },
  '7240: Septiembre 10 de 1911 - Posesión P. Portillo': {
    'Piloto': 'Reencarnación bíblica y la verdadera Santa Teresa racionalista.',
    'Idea': 'El episodio del Tabor es la prueba de la reencarnación de Elías en Juan el Bautista. Santa Teresa revela que fue una reformadora y científica cuyos escritos reales fueron sustituidos por misticismo dogmático.',
    'Ejemplo': 'Teresa de Jesús confiesa que ideó máquinas automáticas y que sus "visiones" eran percepciones racionales de la luz de Jesús, no éxtasis religiosos.',
    'Cita': 'De toda mi vida reformadora, me presentaron para firmar otra, que me hacía la mística, la ilusionada. A vosotros no han llegado mis escritos.',
    'Sinapsis': ['Reencarnacion_en_la_Biblia', 'Santa_Teresa_Racionalista', 'Mistificacion_Hagiografica', 'Inventos_Espirituales']
  },
  '7352: Septiembre 10 de 1911 (Hora 21) - Posesión M. P.': {
    'Piloto': 'La caída del papado ante la Ley de Igualdad Universal.',
    'Idea': 'Los líderes que coartan el progreso por soberbia enfrentan la Ley de Igualdad, regresando en condiciones humildes para compensar su despotismo. La cizaña del Sacro Colegio conduce a la caída de la Iglesia.',
    'Ejemplo': 'León XIII (Joaquín Pecci) admite que fue una rémora para el progreso y se reconoce como afín de Trincado, aceptando la justicia de su propia caída institucional.',
    'Cita': 'El que no supo ser rey viene a ser obrero, en virtud de las leyes de justicia por la igualdad y compensación.',
    'Sinapsis': ['Leon_XIII', 'Ley_de_Igualdad_Social', 'Caida_de_la_Iglesia', 'Responsabilidad_del_Lider']
  },
  '7429: Septiembre 13 de 1911 - Posesión Portillo': {
    'Piloto': 'El renacimiento del misionero mediante la intervención de mundos superiores.',
    'Idea': 'Los Mundos Superiores pueden realizar operaciones fluídicas extremas para salvar a un misionero clave, permitiéndole "morir" a su expiación y renacer exclusivamente para la fundación de la Escuela.',
    'Ejemplo': 'Intervención de Jesús (Antulio) a través del médium Portillo para sanar la gangrena de Trincado, otorgándole una nueva vida para fundar la EMECU.',
    'Cita': 'Has renacido para continuar la obra de redención... el peligro fatal ya se ha cortado; pero la materia debe seguir el curso de la ley.',
    'Sinapsis': ['Operacion_de_Mundos_Superiores', 'Renacimiento_del_Misionero', 'Fundacion_de_la_Escuela', 'Sanacion_Espiritual_Extrema']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

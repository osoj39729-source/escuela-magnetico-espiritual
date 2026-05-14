import json

p = r'F:\trincado\public\data\contents\filosofia-enciclopedica-universal-tomo-1_esencia.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_nodes = {
  '1429: Julio 18 de 1910 (hora 12 del día) - hecho, al que no usó de misericordia”.': {
    'Piloto': 'El fanatismo religioso como carcelero de la salud y la autoridad del jefe de hogar.',
    'Idea': 'La caridad exige riesgos; el fanatismo católico destruye la armonía familiar. Sentencia de justicia para los que no usan de misericordia.',
    'Ejemplo': 'El joven estudiante O., enfermo en un entorno hostil (madre fanática), es asilado por Trincado bajo consejo de Xavier.',
    'Cita': 'Juicio sin misericordia será hecho, al que no usó de misericordia.',
    'Sinapsis': ['Fanatismo_Religioso', 'Caridad_Doctrinal', 'Justicia_sin_Misericordia', 'Francisco_Xavier', 'Ignacio_de_Loyola']
  },
  '1472: Julio 19 de 1910 - Escrita, Trincado': {
    'Piloto': 'La investidura espiritual de Trincado como representante y capitán del Maestro.',
    'Idea': 'Revolución en el espacio ante la visita del Maestro en su carácter oficial; la educación requiere disciplina y el espíritu triunfa sobre siglos de lucha.',
    'Ejemplo': 'Francisco Xavier se manifiesta con investidura de Maestro para saludar a su representante material en la tierra.',
    'Cita': '¿Soy o no soy alcalde; o tengo la vara de balde?',
    'Sinapsis': ['Investidura_Espiritual', 'Maestro_y_Representante', 'Disciplina_Educativa', 'Francisco_Xavier']
  },
  '1501: Julio 21 de 1910 - Posesión de M.P.': {
    'Piloto': 'La guerra fluídica y el asedio de los enemigos de la luz.',
    'Idea': 'El odio de los que temen la verdad se manifiesta en calumnias; el misionero debe ser un baluarte de calma y paciencia absoluta.',
    'Ejemplo': 'Ataques fluídicos mediante calumnias y maldiciones contra los asilados de Trincado como verdugos ocultos.',
    'Cita': 'Nunca debes estar más fuerte que en estos momentos, porque los enemigos son terribles.',
    'Sinapsis': ['Guerra_Fluidica', 'Calumnia_y_Odio', 'Fortaleza_del_Misionero', 'Francisco_Xavier']
  },
  '1524: Julio 22 de 1910 - María de Nazaret': {
    'Piloto': 'Desmitificación de la Virgen María y confirmación de su humanidad biológica.',
    'Idea': 'María fue una mujer biológica, esposa de José y madre de familia; sufre por el comercio religioso con su imagen. Promesa de paz al alma de Trincado.',
    'Ejemplo': 'María rectifica las falsas enseñanzas católicas de la infancia de Trincado sobre la Madre de Dios.',
    'Cita': 'Yo no soy Virgen ni madre de Dios... fui una mujer de carne y hueso como las demás.',
    'Sinapsis': ['Humanidad_de_Maria', 'Desmitificacion_de_la_Virgen', 'Maria_de_Nazaret', 'Paz_del_Alma']
  },
  '1548: Julio 24 de 1910 - Francisco Xavier': {
    'Piloto': 'El examen de los espíritus y la autoridad ganada del director de sesiones.',
    'Idea': 'Dudar es un deber para no ser engañado por espíritus-serpientes; la autoridad del director nace de la sabiduría y el discernimiento constante.',
    'Ejemplo': 'Prueba impuesta por Xavier a Trincado usando a Sebastián Mártir para testar su capacidad de desechar incluso a espíritus elevados si no prueban su identidad.',
    'Cita': 'El director de sesiones debe saber mucho, de todo, y tener sobre todo autoridad ganada y no regalada.',
    'Sinapsis': ['Discernimiento_de_Espiritus', 'Autoridad_del_Director', 'Prueba_de_Sabiduria', 'Espiritus_Serpientes', 'Francisco_Xavier']
  }
}

d.update(new_nodes)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

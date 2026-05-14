import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Botiquin_Espiritual': {
    'palabras_clave': ['enfermera', 'botiquin', 'asistencia', 'Juana', 'dolor'],
    'definicion': 'Acción de auxilio y consuelo que los espíritus misioneros prestan a los desencarnados que sufren por sus errores pasados.',
    'vinculos': ['Juana_de_Arco_Espiritu', 'Medicina_del_Dolor']
  },
  'Medicina_del_Dolor': {
    'palabras_clave': ['medicina', 'dolor', 'purificacion', 'enfermedad', 'espiritu'],
    'definicion': 'Función terapéutica del sufrimiento en el proceso de despertar de la conciencia y liquidación de deudas espirituales.',
    'vinculos': ['Ley_de_Compensacion', 'Juicio_de_Obras']
  },
  'Apertura_Judicial_1912': {
    'palabras_clave': ['1912', 'juicio', 'sentencia', 'apertura', 'justicia'],
    'definicion': 'Hito que señala el comienzo de la liquidación de las deudas de los espíritus prevaricadores según la balanza de la justicia universal.',
    'vinculos': ['Balanza_de_la_Justicia', 'Sentencia_Inapelable']
  },
  'Llave_de_la_Verdad': {
    'palabras_clave': ['llave', 'secreto', 'archivo', 'razon', 'pasado'],
    'definicion': 'Poder de la razón iluminada por el magnetismo para desvelar los misterios y crímenes ocultos de las religiones y la historia.',
    'vinculos': ['Razon_Iluminada', 'Fin_de_la_Impunidad']
  },
  'Aberracion_Mistica': {
    'palabras_clave': ['misticismo', 'santos', 'aberracion', 'ecstasis', 'carcel'],
    'definicion': 'Estado de estancamiento espiritual inducido por las religiones que sustituye el trabajo consciente por el éxtasis irracional.',
    'vinculos': ['Idolatria_Religiosa', 'Catalina_de_Siena_Espiritu']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

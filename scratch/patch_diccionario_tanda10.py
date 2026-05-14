import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Dignidad_del_Misionero': {
    'palabras_clave': ['dignidad', 'respeto', 'orgullo noble', 'misionero'],
    'definicion': 'La cualidad del espíritu que le impide someterse a la injusticia o al desprecio, manteniendo su valor propio sin perder la humildad.',
    'vinculos': ['Misionero_Universal', 'Fortaleza_del_Misionero']
  },
  'Espiritus_Gnomos': {
    'palabras_clave': ['gnomo', 'jugueton', 'sangre blanca', 'esperma', 'vicio'],
    'definicion': 'Entidades espirituales inferiores o elementales que se originan a partir de la energía vital (sangre blanca) derramada en excesos pasionales.',
    'vinculos': ['Higiene_Moral', 'Pasiones_Humanas']
  },
  'Corrupcion_Conventual': {
    'palabras_clave': ['convento', 'monja', 'clero', 'vicio', 'infanticidio'],
    'definicion': 'La realidad oculta de degradación moral, crímenes y vicios que impera en los claustros religiosos bajo la máscara de la santidad.',
    'vinculos': ['Desmitificacion_Catolica', 'Higiene_Moral']
  },
  'Cierre_del_Abismo': {
    'palabras_clave': ['abismo', 'conciencia', 'metafisica', 'maestro juez'],
    'definicion': 'Acto metafísico realizado por el Maestro para anular las causas que sumergen a las conciencias en el error absoluto y el estancamiento.',
    'vinculos': ['Maestro_Juez', 'Solidaridad_Cosmogonica']
  },
  'Familia_de_Jesus': {
    'palabras_clave': ['Jesus', 'hermanos', 'biologia', 'Jose', 'Maria'],
    'definicion': 'Datos históricos y biológicos sobre los seis hermanos de Jesús, confirmando su naturaleza como una familia humana numerosa y común.',
    'vinculos': ['Origen_Humano_de_Jesus', 'Maria_de_Nazaret']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

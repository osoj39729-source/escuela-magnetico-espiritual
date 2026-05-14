import json

p = r'F:\trincado\public\data\diccionario_sinapsis.json'
with open(p, 'r', encoding='utf-8') as f:
    d = json.load(f)

new_concepts = {
  'Triangulo_Magico_Blanco': {
    'palabras_clave': ['triangulo', 'justicia', 'voz', 'ojo', 'tribunal'],
    'definicion': 'Composición del tribunal espiritual en la tierra que rige el juicio de vivos y muertos.',
    'vinculos': ['Unico_Juez_Enviado', 'Justicia_Cosmica']
  },
  'Trompeta_del_Juicio': {
    'palabras_clave': ['trompeta', 'medium', 'anuncio', 'voz', 'despertar'],
    'definicion': 'La comunicación mediúmnica universal que despierta la conciencia de la humanidad en la hora de la verdad.',
    'vinculos': ['Mediumnidad_Doctrinal', 'Juicio_Final_Racionalista']
  },
  'Eucaristia_Sacrificio_Irracional': {
    'palabras_clave': ['eucaristia', 'sacrificio', 'irracional', 'dogma', 'crimen'],
    'definicion': 'Simulacro de sacrificio que la Escuela denuncia como aberración mística contraria a la ley de amor.',
    'vinculos': ['Fraude_Religioso', 'Inmortalidad_del_Espiritu']
  },
  'Raza_de_Viboras': {
    'palabras_clave': ['viboras', 'clero', 'traicion', 'sacerdotes', 'hipocresia'],
    'definicion': 'Calificativo para los opresores religiosos que utilizan la fe para esclavizar y lucrar con la ignorancia.',
    'vinculos': ['Inmoralidad_Sacerdotal', 'Fraude_de_la_Infalibilidad']
  },
  'Jardineros_del_Padre': {
    'palabras_clave': ['jardineros', 'almas', 'trasplante', 'era', 'misioneros'],
    'definicion': 'Espíritus encargados de guiar la selección de las humanidades que permanecen en la tierra o van al exilio.',
    'vinculos': ['Mundos_Primitivos_de_Expiacion', 'Nueva_Era_de_Luz']
  }
}

d['CONCEPTOS'].update(new_concepts)

with open(p, 'w', encoding='utf-8') as f:
    json.dump(d, f, indent=2, ensure_ascii=False)

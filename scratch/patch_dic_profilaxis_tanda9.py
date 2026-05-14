import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Septimo_Dia": {
        "palabras_clave": ["séptimo", "día", "luz", "paz", "racionalidad", "liquidación", "comuna"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10560: Cap TUlo viG siMo TerCero: la profilaxis"],
        "contexto_real": "La era de luz, paz y racionalidad que sigue a la liquidación del sexto día de egoísmo, caracterizada por la vigencia de la Comuna."
    },
    "Aurora_Comunal": {
        "palabras_clave": ["aurora", "comunal", "amanecer", "espiritual", "histórico", "civilización", "fraternidad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10560: Cap TUlo viG siMo TerCero: la profilaxis"],
        "contexto_real": "El amanecer espiritual e histórico de la humanidad que marca el inicio de la civilización basada en la fraternidad sin fronteras."
    },
    "Paz_por_la_Ley": {
        "palabras_clave": ["paz", "ley", "armonía", "social", "espiritual", "matemática", "cumplimiento"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10560: Cap TUlo viG siMo TerCero: la profilaxis"],
        "contexto_real": "El estado de armonía social y espiritual que surge como consecuencia matemática del cumplimiento voluntario de las leyes universales."
    },
    "Higienizacion_Planetaria": {
        "palabras_clave": ["higienización", "planetaria", "depuración", "física", "magnética", "tierra", "error"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10825: Cap TUlo viG siMo CUarTo: HiGieNizaCi N de la Tierra."],
        "contexto_real": "La depuración física y magnética de la Tierra mediante procesos naturales para eliminar las vibraciones del error."
    },
    "Miasmas_Morales": {
        "palabras_clave": ["miasmas", "morales", "energías", "tóxicas", "atmósfera", "crímenes", "pasiones"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10825: Cap TUlo viG siMo CUarTo: HiGieNizaCi N de la Tierra."],
        "contexto_real": "Las energías tóxicas acumuladas en la atmósfera del planeta como resultado de los crímenes y pasiones humanas."
    },
    "Desinfeccion_Cosmica": {
        "palabras_clave": ["desinfección", "cósmica", "purifica", "mundos", "mayoría", "edad", "luz"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10825: Cap TUlo viG siMo CUarTo: HiGieNizaCi N de la Tierra."],
        "contexto_real": "El proceso por el cual el Creador purifica los mundos que han alcanzado su mayoría de edad, preparándolos para la luz."
    },
    "Sol_de_Justicia": {
        "palabras_clave": ["sol", "justicia", "advenimiento", "verdad", "velos", "ley", "universal"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11093: ep loGo: Resumen de los hechos."],
        "contexto_real": "El advenimiento de la Verdad sin velos que expone los errores del pasado y establece la ley universal de forma definitiva."
    },
    "Hostilidad_contra_la_Luz": {
        "palabras_clave": ["hostilidad", "luz", "reacción", "violenta", "instintiva", "espíritus", "error"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11093: ep loGo: Resumen de los hechos."],
        "contexto_real": "La reacción violenta e instintiva de los espíritus afines al error cuando se enfrentan a la exposición de sus engaños."
    },
    "Instrumento_Inflexible": {
        "palabras_clave": ["instrumento", "inflexible", "misionero", "doctrina", "concesiones", "diplomacia", "error"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11093: ep loGo: Resumen de los hechos."],
        "contexto_real": "La cualidad del misionero de transmitir la doctrina sin alteraciones, concesiones ni diplomacia hacia el error."
    },
    "Acta_del_Juicio_Final": {
        "palabras_clave": ["acta", "juicio", "final", "documento", "espiritual", "escuela", "ignorancia"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11134: Verdad en funciones de Juez Supremo."],
        "contexto_real": "El documento espiritual materializado en las obras de la Escuela (Tercera Etapa) que decreta el fin del imperio de la ignorancia."
    },
    "Cadaver_Religioso": {
        "palabras_clave": ["cadáver", "religioso", "sistemas", "dogmáticos", "muertos", "ley", "infección"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11134: Verdad en funciones de Juez Supremo."],
        "contexto_real": "El concepto doctrinal de que los sistemas dogmáticos están muertos ante la ley universal y solo sobreviven como focos de infección moral."
    },
    "Lechonera_Dogmatica": {
        "palabras_clave": ["lechonera", "dogmática", "degradación", "espiritual", "comercio", "fe", "engaño"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11134: Verdad en funciones de Juez Supremo."],
        "contexto_real": "El ambiente de degradación espiritual y moral creado por el comercio de la fe y el engaño institucionalizado."
    },
    "Entrada_al_Septimo_Dia": {
        "palabras_clave": ["entrada", "séptimo", "día", "consumado", "ingreso", "planeta", "luz"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11578: GRANDE, LA MADRE DE LAS FORNICACIONES"],
        "contexto_real": "El hecho consumado del ingreso del planeta Tierra a la era de luz, independientemente del reconocimiento consciente de la humanidad."
    },
    "Sello_de_los_Ancianos": {
        "palabras_clave": ["sello", "ancianos", "confirmación", "doctrina", "escuela", "jerarquía", "creador"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11578: GRANDE, LA MADRE DE LAS FORNICACIONES"],
        "contexto_real": "La confirmación final de la doctrina de la Escuela por parte de los espíritus de más alta jerarquía en representación del Creador."
    },
    "Ceguera_del_Fanatismo": {
        "palabras_clave": ["ceguera", "fanatismo", "incapacidad", "leyes", "universales", "condicionamiento", "religioso"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#11578: GRANDE, LA MADRE DE LAS FORNICACIONES"],
        "contexto_real": "La incapacidad autoinducida de percibir la realidad de las leyes universales debido al condicionamiento religioso o materialista."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 9 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")

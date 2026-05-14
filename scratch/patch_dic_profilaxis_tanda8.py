import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Apocalipsis_Decodificado": {
        "palabras_clave": ["apocalipsis", "decodificado", "racional", "liquidación", "kármica", "fin del mundo", "error"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#9685: Cap TUlo viG siMo: TraGedia fiNal"],
        "contexto_real": "La interpretación racional de las visiones de Juan, entendidas no como fin del mundo sino como la descripción del proceso de liquidación kármica."
    },
    "Tragedia_Matematica": {
        "palabras_clave": ["tragedia", "matemática", "catástrofe", "exacto", "inevitable", "causa", "humanidad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#9685: Cap TUlo viG siMo: TraGedia fiNal"],
        "contexto_real": "El principio de que las catástrofes mundiales finales son el resultado exacto e inevitable de las causas acumuladas por la humanidad."
    },
    "Cena_del_Gran_Dios": {
        "palabras_clave": ["cena", "gran Dios", "apocalipsis", "justicia", "universal", "instituciones", "opresores"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#9712: del Dios de las religiones."],
        "contexto_real": "El símbolo apocalíptico que representa la consumación de la justicia universal sobre las instituciones corruptas y los opresores."
    },
    "Fin_de_las_Jerarquias": {
        "palabras_clave": ["fin", "jerarquías", "abolición", "poder", "fuerza", "dinero", "dogma"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#9712: del Dios de las religiones."],
        "contexto_real": "La abolición definitiva de toda estructura de poder basada en la fuerza, el dinero o el dogma religioso."
    },
    "Fornicacion_Doctrinal": {
        "palabras_clave": ["fornicación", "doctrinal", "alteración", "comercio", "leyes", "religión", "poder"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10058: fornicaciones de la Ramera"],
        "contexto_real": "La alteración y comercio de las leyes espirituales por parte de las religiones para obtener dominio temporal."
    },
    "Justicia_vs_Venganza": {
        "palabras_clave": ["justicia", "venganza", "rigor", "matemático", "castigo", "religioso", "diferencia"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10058: fornicaciones de la Ramera"],
        "contexto_real": "La distinción fundamental entre el rigor frío y matemático de la ley universal y la pasión destructiva del castigo religioso."
    },
    "Serpiente_del_Odio": {
        "palabras_clave": ["serpiente", "odio", "división", "miedo", "sectarismo", "humanidad", "religión"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10058: fornicaciones de la Ramera"],
        "contexto_real": "El símbolo de la división, el miedo y el sectarismo inoculados en la humanidad por el sistema religioso."
    },
    "Progreso_por_Esfuerzo": {
        "palabras_clave": ["progreso", "esfuerzo", "trabajo", "milagro", "anula", "evolutiva", "moneda"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10094: Cap TUlo viG siMo priMero: deCreTos del Creador"],
        "contexto_real": "El decreto universal que anula el milagro religioso y establece el trabajo consciente como única moneda de cambio evolutiva."
    },
    "Mayoria_de_Edad_Espiritual": {
        "palabras_clave": ["mayoría", "edad", "espiritual", "madurez", "humanidad", "ignorancia", "responsabilidad"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10094: Cap TUlo viG siMo priMero: deCreTos del Creador"],
        "contexto_real": "El estado de madurez exigido a la humanidad que marca el fin de la ignorancia tolerada y el inicio de la responsabilidad plena."
    },
    "Decretos_del_Creador": {
        "palabras_clave": ["decretos", "Creador", "leyes", "fundacionales", "universo", "matemática", "irrevocable"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10094: Cap TUlo viG siMo priMero: deCreTos del Creador"],
        "contexto_real": "Las leyes fundacionales del universo que se cumplen de manera matemática e irrevocable."
    },
    "Minuto_Matematico": {
        "palabras_clave": ["minuto", "matemático", "precisión", "cronométrica", "procesos", "cósmicos", "kármicos"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10370: Cap TUlo viG siMo seGUNdo: las proMesas"],
        "contexto_real": "La precisión absoluta y cronométrica con la que se cumplen los procesos cósmicos y kármicos en el universo."
    },
    "Promesas_del_Creador": {
        "palabras_clave": ["promesas", "Creador", "garantías", "progreso", "justicia", "emancipación", "ley"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10370: Cap TUlo viG siMo seGUNdo: las proMesas"],
        "contexto_real": "Las garantías de progreso, justicia y emancipación inscritas en la ley natural, que no dependen de la fe humana."
    },
    "Endurecimiento_Karmico": {
        "palabras_clave": ["endurecimiento", "kármico", "agudización", "error", "opresión", "despertar", "conciencia"],
        "nodos_sinapticos": ["profilaxis-de-la-vida_esencia.json#10370: Cap TUlo viG siMo seGUNdo: las proMesas"],
        "contexto_real": "La agudización extrema del error o la opresión permitida por la ley para detonar el despertar definitivo de la conciencia."
    }
}

for k, v in nuevos_conceptos.items():
    dic['CONCEPTOS'][k] = v

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 8 actualizado: " + str(len(nuevos_conceptos)) + " conceptos precisos.")

import json

dic_path = 'F:/trincado/public/data/diccionario_sinapsis.json'
with open(dic_path, 'r', encoding='utf-8') as f:
    dic = json.load(f)

nuevos_conceptos = {
    "Asiento_Doctrinal": {
        "palabras_clave": ["asiento", "doctrina", "razón", "justicia", "firme"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#8: ESCUELA MAGN%TICO - ESPIRITUAL DE LA COMUNA UNIVERSAL: ESPIRITISMO EN SU ASIENTO"],
        "contexto_real": "La base firme e inamovible de principios racionales sobre la cual se edifica la doctrina espírita, impidiendo desviaciones místicas."
    },
    "Proclama_Espiritual": {
        "palabras_clave": ["proclama", "manifiesto", "principios", "EMECU", "anuncio"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#24: PROCLAMA"],
        "contexto_real": "El manifiesto de principios fundamentales que la EMECU presenta a la humanidad para la instauración de la Comuna Universal."
    },
    "Solidaridad_Universal": {
        "palabras_clave": ["solidaridad", "universal", "mundos", "ayuda", "fraternidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#24: PROCLAMA"],
        "contexto_real": "La ley de interconexión y ayuda mutua que rige a todos los seres y mundos en el universo."
    },
    "Comunismo_Espiritual": {
        "palabras_clave": ["comunismo", "espiritual", "comuna", "amor", "justicia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#24: PROCLAMA"],
        "contexto_real": "El régimen social basado en la fraternidad espiritual y la abolición de la propiedad privada en favor del bienestar común."
    },
    "Universo_Solidarizado": {
        "palabras_clave": ["universo", "solidarizado", "cosmos", "unidad", "afinidad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#26: El Universo Solidarizado."],
        "contexto_real": "El estado de interdependencia y ayuda mutua que rige a todos los mundos y espíritus dentro de la creación infinita."
    },
    "Fraternidad_Cosmica": {
        "palabras_clave": ["fraternidad", "cósmica", "mundos", "hermanos", "universo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#26: El Universo Solidarizado."],
        "contexto_real": "El reconocimiento de todos los seres del universo como hermanos hijos del mismo Padre, Eloí."
    },
    "Abolicion_de_la_Propiedad": {
        "palabras_clave": ["abolición", "propiedad", "privada", "mío", "tuyo", "justicia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#28: El mundo todo Comunizado."],
        "contexto_real": "El proceso de eliminación de la propiedad individual sobre la tierra y los recursos básicos para instaurar la propiedad común."
    },
    "Regimen_Comunista": {
        "palabras_clave": ["régimen", "comunista", "comuna", "orden", "igualdad"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#28: El mundo todo Comunizado."],
        "contexto_real": "La organización social propuesta por Trincado donde el trabajo y el fruto son compartidos equitativamente por todos."
    },
    "Ley_Unica": {
        "palabras_clave": ["ley", "única", "eloi", "principio", "sustancia"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#30: LA LEY es una. La sustancia una."],
        "contexto_real": "La ley de amor y justicia de Eloí que rige todo lo existente sin excepción."
    },
    "Sustancia_Unica": {
        "palabras_clave": ["sustancia", "única", "magnetismo", "espíritu", "monismo"],
        "nodos_sinapticos": ["espiritismo-en-su-asiento_esencia.json#30: LA LEY es una. La sustancia una."],
        "contexto_real": "La esencia fundamental e increada (Magnetismo Universal) que constituye todo lo existente en el universo."
    }
}

for k, v in nuevos_conceptos.items():
    if k not in dic["CONCEPTOS"]:
        dic["CONCEPTOS"][k] = v
    else:
        for node in v["nodos_sinapticos"]:
            if node not in dic["CONCEPTOS"][k]["nodos_sinapticos"]:
                dic["CONCEPTOS"][k]["nodos_sinapticos"].append(node)

with open(dic_path, 'w', encoding='utf-8') as f:
    json.dump(dic, f, indent=2, ensure_ascii=False)

print("Diccionario Tanda 1 (Asiento) actualizado.")
